---
id: 29901230349339
title: "Why are my SMS not getting delivered?"
html_url: "https://support.regal.ai/hc/en-us/articles/29901230349339-Why-are-my-SMS-not-getting-delivered"
updated_at: "2025-05-02T20:22:08Z"
---

# Why are my SMS not getting delivered?

If you are collecting phone numbers and the right to send text messages in a TCPA compliant way, you should expect delivery rates in the range of **90-97%**. Even for the best content being sent to the most engaged customers all with valid mobile numbers, some percentage of SMS will not be delivered because of non-traditional carriers.

Regal publishes SMS error codes in our SMS events, so that you may track your delivery rates and make adjustments if you notice any of the following:

- your SMS delivery rate is outside of this expected range
- a large spike in undelivered or failed SMS
- a trend down in your SMS delivery rate.

When an SMS fails to deliver, Regal produces an **sms.failed** or **sms.undelivered** event which is sent to Journeys, Reporting Webhooks, Regal Reporting and other select destinations. See developer docs.

Within these events, there is a property that specifies an **error\_code**. For example:

```
"error_code": "30034",
```

- An **sms.failed** event is triggered when Twilio (Regal's underlying SMS processor doesn't even attempt to send an SMS the customer's device).
- An **sms.undelivered** event is triggered when an SMS was sent, but the customer's carrier was not able to deliver the SMS to the customer's device.

The most common SMS error codes -- along with their descriptions and ways to remediate -- are:

|  |  |  |
| --- | --- | --- |
| Error Code | Description | What to Do |
| 30003 | Unreachable destination handset (possibly because it's off, in airplane mode, or out of range) | Attempt to resend once a day later |
| 30005 | Unknown destination handset (likely number is invalid or no longer in service) | Unsubscribe contact |
| 30006 | Landline or unreachable carrier | Unsubscribe contact from SMS |
| 30007 | Message was filtered (possibly because it appeared to be spam, phishing, or fraud) | Review content of your message. Fix any broken links. If no broken links, reach to [support@regal.io](mailto:support@regal.io) to review your SMS and make suggestions. |
| 30008 | A generic error occurred when delivering the message (carrier did not send a detailed error code) | Attempt to resend once an hour later |
| 21408 | Geo-Permissions failed | If you don't want to serve more countries, unsubscribe contact.  If you do want to serve more countries, reach out to [support@regal.io](mailto:support@regal.io) to understand pricing and enable more countries. |
| 21610 | Attempt to send to unsubscribed recipient | Unsubscribe contact from SMS (if not already - your agent may have just not realized) |
| 30034 | Attempt to send from an Unregistered number (meaning A2P "Application to Person" messaging registration has not been completed). | Reach out to [support@regal.io](mailto:support@regal.io) to complete A2P registration. |
| 60005 | A downstream carrier error | Attempt to resend once a day later |
| 30002, 30454, 63038, 90010 | Account suspension or hit fraud detection limits | Reach out to [support@regal.io](mailto:support@regal.io) |