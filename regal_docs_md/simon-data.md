# Simon Data

This guide describes how to use Simon Data as a source for sending your customer profile and event data to Regal.

## Sending data from Simon Data to Regal

Regal does not yet have an official Simon Data integration, so the best way to send data from Simon Data to Regal is using Flows. Create Flows that are triggered when new phone contacts are created, important profile fields are updated (such as optIn) or important events occur, and send that data to Regal through webhook actions.

## Creating New Contacts

Create a Flow in Simon Data that webhooks out to Regal every time a new contact is created in Simon Data who you want to be available for calls and texts in Regal.

Below is a recommended Flow for how to accomplish this, though the logic for the trigger of your Fllow may differ depending on what constitutes a relevant contact for your company to send to Regal.

![792](https://files.readme.io/932a722-Flow.png "Flow.png")

In Simon Data,

**Step 1:** Create a Segment called "New Phone Contact" where users enter the segment when a phone number is added to their profile in Simon Data.

**Step 2:** Create a new Triggered Flow titled "Create New Contact for Regal"

![1576](https://files.readme.io/cbe8c29-Triggered.png "Triggered.png")

**Step 3:** Set the trigger to a User enters a segment and select the segment "New Phone Contact."

![906](https://files.readme.io/03eb9e6-segment.png "segment.png")

Segment Trigger

**Step 4:** Select action as "Make a Webhook Call" and add the following information:

- **endpoint**: <https://events.regalvoice.com/events>
- **headers**: the only header you need to add is "Authorization" and add your Regal API key. *(Email [[email protected]](/cdn-cgi/l/email-protection#374442474758454377455250565b195e58) to get your API key)*
- **request method**: POST\*
- **payload encoding**: JSON\*
- **auth**: No Auth\*
- **payload** (replacing the relevant data fields from the profile in Simon Data):

![942](https://files.readme.io/93062e6-Webhook.png "Webhook.png")

JSON

```
{
    "userId": "{{uniqueIdentifier}}", //this is optional
    "traits": {
        "phone": "{{phoneNumber}}",
        "email": "{{email}}",
        "firstName": "{{firstName}}",
        "lastName": "{{lastName}}",
        "optIn": [
            {
                "channel": "voice",
                "source": "{{leadSource}}",
                "subscribed": true
            },
            {
                "channel": "sms",
                "source": "{{leadSource}}",
                "subscribed": true
            }
        ],
        "custom1": "{{custom1}}",
        "custom2": "{{custom2}}"
    },
    "eventSource": "simon data"
}
```

> ## 📘
>
> OptIn
>
> The above payload example assume all of your contact have accepted opt in for voice and sms. If that's not true, you can remove the *optIn* property from the above and set up a separate Flow to update a contact in Regal when *optIn* is collected.

## Updating OptIn Information

If opt in and out can happen at different parts of your user experience on your app, it's important to update Regal as users opt in or out. Below is a recommended flow for how to send up to date opt in information to Regal. It assumes you save this as a Simon Data profile field, but if not, the trigger can just as easily be an event in your Simon Data account that represents a user opting in or unsubscribing. (The example below is for phone opt in, but you can set up a similar Flow for sms opt in if you collect those separately).

**Step 1:** Create a new Segment titled "Optin Info Changed" and have users enter it whenever you collect opt in or opt out information.

**Step 2:** Create a new Flow titled "Send Opt In or Out to Regal"

![818](https://files.readme.io/37c9946-Flow_2.png "Flow 2.png")

**Step 3:** Set the trigger to User enters a segment and select the segment "Optin Info Changed."

**Step 3:** Select action as "Make a Webhook Call" and add the following information:

- **endpoint**: <https://events.regalvoice.com/events>
- **headers**: the only header you need to add is "Authorization" and add your Regal API key. *(Email [[email protected]](/cdn-cgi/l/email-protection#3a494f4a4a55484e7a485f5d5b56145355) to get your API key)*
- **request method**: POST\*
- **payload encoding**: JSON\*
- **auth**: No Auth\*
- **payload** (replacing the relevant data fields from the profile in Simon Data):

JSON

```
{
    "userId": "{{uniqueIdentifier}}", //this is optional
    "traits": {
        "phone": "{{phoneNumber}}",
        "optIn": [
            {
                "channel": "voice",
                "source": "{{leadSource}}",
                "subscribed": "{{voice_optin_subscribed}}"
            },
            {
                "channel": "sms",
                "source": "{{leadSource}}",
                "subscribed": "{{voice_optin_subscribed}}"
            }
        ]
    },
    "eventSource": "simon data"
}
```

You are welcome to add additional user profile attributes in this payload as well, if you want to ensure more attributes are up to date at the same time.

## Sending Events

Finally, set up a Flow for each of the key events you want to send Regal - we recommend sending any events that are important for triggering SMS and Calls in Regal (such as an event at each step of the sign up or purchase flow) or will that be used as exit criteria for contacts to fall out of Regal campaigns.

For example, blow is a journey for sending Regal an event for when a user completes the first step of a Application.

**Step 1:** Create a new Flow titled "Send Application Step 1 Completed Event to Regal"

**Step 2:** Set the trigger node logic as "Custom Event" and select the name of the event you want to send to Regal, such as "*Application Step 1 Completed*".

![830](https://files.readme.io/dd08c76-Flow_3.png "Flow 3.png")

**Step 3:** Select action as "Make a Webhook Call" and add the following information:

- **endpoint**: <https://events.regalvoice.com/events>
- **headers**: the only header you need to add is "Authorization" and add your Regal API key. *(Email [[email protected]](/cdn-cgi/l/email-protection#e89b9d9898879a9ca89a8d8f8984c68187) to get your API key)*
- **request method**: POST\*
- **payload encoding**: JSON\*
- **auth**: No Auth\*
- **payload** (replacing the relevant data fields from the profile in Simon Data):

Below is an example payload for the Application Step 1 event.

> ## 📘
>
> Up to Date Contact Attributes
>
> While it's not necessary, we recommend also sending any key user profile data fields on the event payloads of your event journeys to ensure Regal has access to the most up to date contact attributes at the time key events become available.

JSON

```
{
    "userId": "{{uniqueIdentifier}}", //this is optional
    "traits": {
        "phone": "{{phoneNumber}}",
        "firstName": "{{firstName}}",
        "lastName": "{{lastName}}",
        "custom1": "{{custom1}}",
        "custom2": "{{custom2}}",
        "custom3": "{{custom3}}"
    },
    "name": "Application Step 1 Completed",
    "properties": {
      "educationalLevel": "{{educationalLevel}}",
      "preferredLocation": "{{preferredLocation}}",
      "preferredSubject": "{{preferredSubject}}",
      "readytoCommit": true
    },
    "eventSource": "simon data"
}
```

If you have any questions about which events are important to send to Regal or how best to set up these Flows, reach out to [[email protected]](/cdn-cgi/l/email-protection#20535550504f525460524547414c0e494f)

Updated about 2 years ago

---

What’s Next

- [Custom Events](/reference/post_events)
