# Plan your implementation

You can implement Regal in a few different ways to ensure it fits with the rest of your tech stack seamlessly. Most of the options require no engineering effort on your end.

A complete Regal "integration" includes:

- **CUSTOMER DATA IN:** Sending Regal your contacts and event data
- **DATA OUT:** Receiving Regal event and reporting data back

## CUSTOMER DATA IN: Sending Data to Regal

- **Already collect data with a CDP, CRM or ESP?** All of those are great sources of customer profile and event data to send to Regal, and none require you to do engineering work.
- **Need to start tracking the right data?** You can start by adding Regal's site tag to your Google Tag manager or call the Regal API directly.

## Already collect data with a CDP, CRM or ESP?

**Customer Data Platform (CDP)**

If you already use a CDP, like Segment, you can get up and running with Regal in seconds. Supported CDPs include.

- [Segment](https://regal-voice.readme.io/docs/segment)
- [mParticle](https://regal-voice.readme.io/docs/mparticle)
- [SimonData](https://regal-voice.readme.io/docs/simon-data)

**CRM**

If you already send events and customer profile data to a CRM like Salesforce or Hubspot, you can easily send that data to Regal. Note, however, that if those CRMs are only updated e.g., once per hour or day, then the data that gets into Regal will also only be as fresh as the data in your CRM.

- [Salesforce](https://regal-voice.readme.io/docs/salesforce)
- [Hubspot](https://regal-voice.readme.io/docs/hubspot)

**ESP**

If you've already invested a lot in getting rich customer profile and event data into your ESP, many ESPs like Iterable and Braze allow you to setup workflows and webhook data out to a 3rd party like Regal. These can be a quick and easy source for getting your customer profile and event data into Regal.

- [Braze](https://regal-voice.readme.io/docs/braze)
- [Customer.io](https://regal-voice.readme.io/docs/customerio)
- [Iterable](https://regal-voice.readme.io/docs/iterable)
- [Klaviyo](https://regal-voice.readme.io/docs/klaviyo)

## Need to start tracking the right data?

If the customer and event data you would like to send to Regal does not already exist in your CDP, CRM or ESP, you can integrate directly with Regal's API.

- **Direct API Integration:** This is typically the best solution for home-grown CRMs. While this method requires engineering effort, most companies have successfully implemented the Regal API in 1-2 weeks as there is only a single endpoint to integrate with.

## DATA-IN: Summary

| Integration Method | Requires Engineering on Your End? | Time to Implement |
| --- | --- | --- |
| Braze | No | < 1 day |
| Customer.io | No | < 1 day |
| Digioh | No | < 1 day |
| HubSpot | No | < 1 hour |
| Iterable | No | < 1 day |
| Klaviyo | No | < 1 hour |
| Kustomer | No | < 1 day |
| mParticle | No | < 5 min |
| Regal API | Yes | 1-2 weeks |
| Segment | No | < 5 min |
| SimonData | No | < 1 day |
| Salesforce | No | < 1 week |
| Zapier | No | < 1 day |
| Zendesk | No | < 1 day |

## DATA-OUT: Receiving Data Back from Regal

Regal supports two ways for you to receive data back from the platform. They are not mutually exclusive (you can receive both real-time event data and canned reports):

**1 - Real-time event data** - Regal publishes event data back in real-time to several destinations:

| Platform | Events |
| --- | --- |
| Kustomer | call.completed  call.recording.available  contact.created  sms.conversation.completed  sms.sent  sms.received  mms.sent  mms.received |
| Hubspot | call.completed  call.recording.available  contact.created  sms.conversation.completed  sms.sent  sms.received  mms.sent  mms.received |
| Reporting Webhooks (to custom endpoint) | All events. See [event list](/docs/reporting-webhooks) |
| Salesforce | call.completed  call.recording.available  contact.attribute.edited  contact.created  contact.experiment.assigned  sms.conversation.completed  sms.sent  sms.received  mms.sent  mms.received |
| Segment | All events. See [event list](/docs/reporting-webhooks) |

**2- Snowflake Share** If you do not support one of the above ways to receive real-time event data, you can instead receive data directly via Snowflake share on a delay. See what data available and on what cadence [here](/docs/snowflake-data-share)

**3 - Amazon S3** - If you do not support one of the above ways to receive data, you can instead receive data directly to an Amazon S3 bucket or emailed CSVs on a delay. Read more [here](/docs/amazon-s3)

Updated 11 months ago

---
