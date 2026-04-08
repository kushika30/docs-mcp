# Iterable

This guide describes how to use Iterable as a source for sending your customer profile and event data to Regal.

## Sending Data from Iterable to Regal

While Iterable does not have a way to pass through all user and event data automatically to a 3rd party, you can set up workflows that are triggered when new phone contacts are created, important profile fields are updated or important events occur, and send that data to Regal through workflow webhooks.

## Creating New Contacts

Create a workflow that webhooks out to Regal every time a new contact is created in Iterable who you want to be available for calls and texts in Regal.

Below is a recommended workflow for how to accomplish this, though the logic for the trigger of your workflow may differ depending on what constitutes a relevant contact for your company to send to Regal.

![416](https://files.readme.io/e377892-workflow.png "workflow.png")

Create contact in Regal

**Step 1:** Create a new workflow titled "Create New Contact for Regal"

**Step 2:** Set the trigger node logic as "User Profile Field Updated" and select whatever field represent's the user's phone number. We recommend adding an extra filter on the user phone field that ensures it's set.

![1226](https://files.readme.io/d8162fd-node.png "node.png")

Phone number is set Trigger

**Step 3:** Create a custom workflow webhook called "Create Contact in Regal," and add the following:

- **endpoint**: <https://events.regalvoice.com/events>
- **header**: the only header you need is "Authorization" and add your Regal API key. *(Email [[email protected]](/cdn-cgi/l/email-protection#4b383e3b3b24393f0b392e2c2a27652224) to get your API key)*
- **make sure to uncheck "send email and workflowId"**
- **payload** (replacing the relevant data fields from the profile in Iterable):

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
    "eventSource": "iterable"
}
```

The only required field above is the *traits.phone* property. The rest is optional. However, if you include *optIn*, you must include *optIn.channel* and *optIn.subscribed*.

> ## 📘
>
> OptIn
>
> The above payload example assume all of your contact have accepted opt in for voice and sms. If that's not true, you can remove the *optIn* property from the above and set up a separate workflow to update a contact in Regal when *optIn* is collected.

![](https://files.readme.io/eb0d735-iterable.png "iterable.png")

## Updating OptIn Information

If opt in and out can happen at different parts of your user experience on your app, it's important to update Regal as users opt in or out. Below is a recommended workflow for how to send up to date opt in information to Regal. It assumes you save this as an Iterable profile field, but if not, the trigger can just as easily be an event in your Iterable account that represents a user opting in or unsubscribing. (The example below is for phone opt in, but you can set up a similar workflow for sms opt in if you collect those separately).

![526](https://files.readme.io/75259c9-optIn.png "optIn.png")

Phone opt in workflow

**Step 1:** Create a new workflow titled "Send Opt In or Out to Regal"

**Step 2:** Set the trigger node logic as "User Profile Field Updated" and select whatever field represent's the user's opt in status. If instead you fire an event to Iterable to represent opt in or out, use that event as the trigger instead.

**Step 3:** Create a custom workflow webhook called "Update Contact in Regal," and add the following:

- **endpoint**: <https://events.regalvoice.com/events>
- **header**: the only header you need is "Authorization" and add your Regal API key.
- **make sure to uncheck "send email and workflowId"**
- **payload** (replacing the relevant data fields from the profile in Iterable):

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
    "eventSource": "iterable"
}
```

You are welcome to add additional user profile attributes in this payload as well, if you want to ensure more attributes are up to date at the same time.

## Sending Events

Finally, set up a workflow for each of the key events you want to send Regal - we recommend sending any events that are important for triggering SMS and Calls in Regal (such as an event at each step of the sign up or purchase flow) or will that be used as exit criteria for contacts to fall out of Regal campaigns.

For example, below is a workflow for sending Regal an event for when a user completes the first step of an Application.

![](https://files.readme.io/cfad4d4-workflow.png "workflow.png")

**Step 1:** Create a new workflow titled "Send Application Step 1 Completed Event to Regal"

**Step 2:** Set the trigger node logic as "Custom Event" and select the name of the event you want to send to Regal, such as "*Application Step 1 Completed*".

**Step 3:** Create a custom workflow webhook for the event and add the following:

- **endpoint**: <https://events.regalvoice.com/events>
- **header**: the only header you need is "Authorization" and add your Regal API key.
- **make sure to uncheck "send email and workflowId"**
- **payload** (replacing the relevant data fields from the specific event in Iterable).

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
    "eventSource": "iterable"
}
```

If you have any questions about which events are important to send to Regal or how best to set up these workflows, reach out to [[email protected]](/cdn-cgi/l/email-protection#1e6d6b6e6e716c6a5e6c7b797f72307771).

Updated about 2 years ago

---

What’s Next

- [Custom Events](/reference/post_events)
