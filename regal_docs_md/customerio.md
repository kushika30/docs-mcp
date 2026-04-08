# Customer.io

This guide describes how to use Customer.io as a source for sending your customer profile and event data to Regal.

## Sending Data from Customer.io to Regal

While Customer.io does not have a way to pass through all user and event data automatically to a 3rd party, you can set up workflows that are triggered when new phone contacts are created, important profile fields are updated or important events occur, and send that data to Regal through workflow webhooks.

## Creating New Contacts

Create a workflow that webhooks out to Regal every time a new contact is created in Customer.io who you want to be available for calls and texts in Regal.

Below is a recommended workflow for how to accomplish this, though the logic for the trigger of your workflow may differ depending on what constitutes a relevant contact for your company to send to Regal.

![1564](https://files.readme.io/8d06cd5-workflow1.png "workflow1.png")

Create contact in Regal

**Step 1:** Create a new workflow titled "Create New Contact for Regal"

**Step 2:** Set the trigger node logic to be whenever a phone number is added to a user profile or any event that represents when the phone number is collected.

**Step 3:** Create a custom workflow webhook called "Create Contact in Regal"

![792](https://files.readme.io/6362575-cust_webhook.png "cust webhook.png")

Add the following to the webhook:

- **endpoint**: <https://events.regalvoice.com/events>
- **header**: the only header you need is "Authorization" and add your Regal API key. *(Email [[email protected]](/cdn-cgi/l/email-protection#a9dadcd9d9c6dbdde9dbcccec8c587c0c6) to get your API key)*
- **payload** (replacing the relevant data fields from the profile in Customer.io):

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
    "eventSource": "customer.io"
}
```

The only required field above is the *traits.phone* property. The rest is optional. However, if you include *optIn*, you must include *optIn.channel* and *optIn.subscribed*.

> ## 📘
>
> OptIn
>
> The above payload example assume all of your contact have accepted opt in for voice and sms. If that's not true, you can remove the *optIn* property from the above and set up a separate workflow to update a contact in Regal when *optIn* is collected.

## Updating OptIn Information

If opt in and out can happen at different parts of your user experience on your app, it's important to update Regal as users opt in or out. Below is a recommended workflow for how to send up to date opt in information to Regal. It assumes you save this as an Customer.io profile field, but if not, the trigger can just as easily be an event in your Customer.io account that represents a user opting in or unsubscribing. (The example below is for phone opt in, but you can set up a similar workflow for sms opt in if you collect those separately).

![554](https://files.readme.io/4dd371a-optin.png "optin.png")

Phone opt in workflow

**Step 1:** Create a new workflow titled "Send Opt In or Out to Regal"

**Step 2:** Set the trigger node logic as "User Profile Field Updated" and select whatever field represent's the user's opt in status. If instead you fire an event to Customer.io to represent opt in or out, use that event as the trigger instead.

**Step 3:** Create a custom workflow webhook called "Update Contact in Regal," and add the following:

- **endpoint**: <https://events.regalvoice.com/events>
- **header**: the only header you need is "Authorization" and add your Regal API key.
- **payload** (replacing the relevant data fields from the profile in Customer.io):

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
    "eventSource": "customer.io"
}
```

You are welcome to add additional user profile attributes in this payload as well, if you want to ensure more attributes are up to date at the same time.

## Sending Events

Finally, set up a workflow for each of the key events you want to send Regal - we recommend sending any events that are important for triggering SMS and Calls in Regal (such as an event at each step of the sign up or purchase flow) or will that be used as exit criteria for contacts to fall out of Regal campaigns.

For example, below is a workflow for sending Regal an event for when a user completes the first step of an Application.

![516](https://files.readme.io/5c3fb98-final.png "final.png")

**Step 1:** Create a new workflow titled "Send Application Step 1 Completed Event to Regal"

**Step 2:** Set the trigger node logic as "Custom Event" and select the name of the event you want to send to Regal, such as "*Application Step 1 Completed*".

**Step 3:** Create a custom workflow webhook for the event and add the following:

- **endpoint**: <https://events.regalvoice.com/events>
- **header**: the only header you need is "Authorization" and add your Regal API key.
- **make sure to uncheck "send email and workflowId"**
- **payload** (replacing the relevant data fields from the specific event in Customer.io).

Below is an example payload for the Application Step 1 event.

> ## 📘
>
> Up to Date Contact Attributes
>
> While it's not necessary, we recommend also sending any key user profile data fields on the event payloads of your event workflows to ensure Regal has access to the most up to date contact attributes at the time key events become available.

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
    "eventSource": "customer.io"
}
```

If you have any questions about which events are important to send to Regal or how best to set up these workflows, reach out to [[email protected]](/cdn-cgi/l/email-protection#671412171708151327150200060b490e08)

Updated about 2 years ago

---

What’s Next

- [Custom Events](/reference/post_events)
