---
id: 18788837463323
title: "Default Conversation Fields under Regal Voice Properties"
html_url: "https://support.regal.ai/hc/en-us/articles/18788837463323-Default-Conversation-Fields-under-Regal-Voice-Properties"
updated_at: "2023-11-15T14:56:43Z"
---

# Default Conversation Fields under Regal Voice Properties

At Regal we believe conversation is the key to conversion. Therefore we wanted to provide easy access insights around conversation events at the contact level, translated into a series of contact attributes.

### What are the exact conversation fields and their logic?

1. rvProperties.last\_task\_disposition: the disposition on the latest task across all channels or reminders on the contact
2. rvProperties.last\_contacted\_at: the last timestamp of any outbound outreach or inbound phone conversation on the contact
3. rvProperties.last\_ob\_call\_attempt\_date: the last outbound call attempt timestamp, campaign or manual from agents on the contact
4. rvProperties.last\_ib\_call\_date: the last inbound call attempt timestamp on the contact
5. rvProperties.last\_ob\_sms\_date: the last outbound sms timestamp on the contact
6. rvProperties.last\_ib\_sms\_date: the last inbound sms timestamp on the contact
7. rvProperties.last\_journey\_with\_campaign\_id: the friendly ID of the last journey that triggered a call/sms/email campaign on the contact
8. rvProperties.last\_sms\_campaign\_date: the last sms campaign timestamp on the contact
9. rvProperties.last\_sms\_campaign\_id: the last sms campaign friendly id on the contact
10. rvProperties.last\_call\_campaign\_date: the last call campaign timestamp on the contact
11. rvProperties.last\_call\_campaign\_id: the last sms campaign friendly id on the contact

### Where can I see these default fields?

- You can find them in Segment Builder under Contact Attribute so that you can build action oriented segments to drive more conversations. E.g. L30Day Leads With No OB Call. More information on additional use cases to come.

![](https://support.regal.ai/hc/article_attachments/18788113986971)

- You can find the conversation fields under Regal Voice Properties for each contact in the Audience tab![Audience.png](https://support.regal.ai/hc/article_attachments/18788866111259)
- You can find them in Journey Builder in conditional node under Contact Attribute. They can be used as additional filtering layer.

![](https://support.regal.ai/hc/article_attachments/18788381262747)