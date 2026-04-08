---
id: 19856872590363
title: "How to Create Agent SMS Task through Journeys and Campaigns"
html_url: "https://support.regal.ai/hc/en-us/articles/19856872590363-How-to-Create-Agent-SMS-Task-through-Journeys-and-Campaigns"
updated_at: "2023-12-01T15:55:21Z"
---

# How to Create Agent SMS Task through Journeys and Campaigns

Users can use Agent SMS Task node in Journey to trigger a manual outbound SMS task for agents to complete, with instructions on what to send. This flow can be useful for those SMS touch point that requires more consideration and human input than automated SMS campaigns. See below on how to use this feature:

**Agent SMS Task Node**

- Journey users can use the Agent SMS node to trigger an outbound SMS task for agents to send manually.

![Screen Shot 2023-10-27 at 4.59.36 PM.png](https://support.regal.ai/hc/article_attachments/19931066264091)

**Agent SMS Campaign**

- Users can add instructions for agents by editing/creating Agent Task SMS campaigns.
- Agent Task campaigns will obey SMS opt-in status like automated SMS. Users can choose to bypass the optin (task will be created regardless of opt-in status.)
- Instructions for agents can be added in the input form, with the ability to add dynamic attributes using {{contact.XXX}}.

![Screen Shot 2023-10-27 at 5.02.37 PM.png](https://support.regal.ai/hc/article_attachments/19931066276635)

![](https://support.regal.ai/hc/article_attachments/19931050200091)

**Agent Desktop Experience**

- For agents, agent sms tasks will show up as an Outbound SMS with campaign name displayed on the task card. Upon clicking on the task, task instructions will automatically open on the right rail.
- Agent can determine wether to accept the task, and how much to modify the content before sending out the SMS.
- Upon completing the task, task can be summarized with a disposition.

![](https://support.regal.ai/hc/article_attachments/19933121129115)

**Events**

- Below task events will be generated when a task is created, accepted, then completed:
  - task.created
  - task.reservation.created
  - task.reservation.accepted
  - sms.sent
  - sms.conversation.completed
- Journey name / id, and campaign name / id will be included on the event attributes above