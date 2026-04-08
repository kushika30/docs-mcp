# mParticle

This guide describes how to use mParticle to send data to Regal.

## Sending data from mParticle to Regal

Regal relies on the Webhooks output. You can refer to mParticle developer documentation on [webhooks](https://docs.mparticle.com/integrations/webhook/event/), as well.

## Enable Webhooks

1. Email [[email protected]](/cdn-cgi/l/email-protection#077472777768757347756260666b296e68) to get your Regal API Key.
2. In mParticle, navigate to the Inputs tab. Open the input from which you'd like to send data to Regal.
3. Click to Add an Output.
4. From the list of possible outputs, choose Webhooks.
5. Add the following endpoint as the POST URL: mparticle.regalvoice.com
6. Add your Regal API Key in the *Authorization* header
7. Configure connection settings. Leave all default settings as is, except:

- Set send as batch should be set to FALSE
- Set send network performance events to FALSE
- Set push registrations and receipts to FALSE
- Set Include User Attribute Change Events to TRUE
- Set Include User Identity Change Events to TRUE

8. mParticle will now send data from the selected source to Regal.

## What data to send

mParticle collects 3 important kinds of data that map closely to Regal's data model:

- Screen/Page Views - keep track of where a user is in your app
- Custom Events - track any actions the user might take in your app. Commerce Events - purchases and other product-related activity - are a subset of custom events. These are the same as what Regal calls track events.
- mParticle also captures data about your user, including their identities, information about the device they are using and any custom attributes you set. User identities are unique identifiers for your user, like an email address or customer ID. When a phone number is added to a user, that user becomes a contact in your Regal audience.

## Passing Opt in to Regal

In order to trigger outbound calls or sms messages from Regal, you must collect the user’s explicit opt-in for those channels along with the user’s phone number.

There are 2 options for how you can let Regal know a user has opted in:

1. Anytime you collect opt-in for sms or voice calls, you can trigger a custom event after a user opts in and let the Regal team know what is the name of the event synonymous with opt-in collected. The product will then automatically subscribe users who perform that event. (Note: for Regal to subscribe a user, there must already be a phone provided for that user prior to this event.)
2. Alternatively, anytime you collect opt-in for sms or voice calls, you can include the optIn array in the custom attributes.

## Testing your integration

To check the success of your integration:

- Go to the **Recent Activity** page in the Regal app to view incoming track and page events
- Go to the **Audience** page in the Regal app to view your contacts (created from identify events) - remember in order for a user to appear in your audience they must have a phone. You can also view their optIn status from the Audience page

Updated about 2 years ago

---
