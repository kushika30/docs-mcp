---
id: 38601583389339
title: "How to Set Agent Channel Capacity"
html_url: "https://support.regal.ai/hc/en-us/articles/38601583389339-How-to-Set-Agent-Channel-Capacity"
updated_at: "2025-12-04T23:01:30Z"
---

# How to Set Agent Channel Capacity

An agent's task capacity is used to determine how many tasks of a particular channel the agent can be handled concurrently. For example, if Voicemail capacity is set to 10, the agent can handle up to 10 Voicemail tasks at a time. Once they reach 10, they must wrap up one of their existing Voicemail tasks to make room for new reservations.

All tasks are allocated to the following channels:

- **Calls** - How many active call tasks of any kind (including inbound, scheduled callback, transfer) can be handled by an agent at a time. This is only configurable for AI agents, and **set to 1 by default for all human agents.**
  - Note: Once a call task goes into wrapping, it is no longer considered active and therefore no longer taking up this call capacity. Accordingly, for human agents (with Calls capacity of 1), once their call goes into wrapping, they may be eligible for a new incoming/transfer call task to be reserved.
- **SMS** - How many Manual Outbound SMS tasks, Inbound SMS tasks, campaign-triggered Agent SMS tasks, and Reminder tasks can be handled by an agent at a time. Note half of the set capacity is allocated to inbound tasks.
- **Emails** - How many Manual Outbound Email tasks and Inbound Email tasks can be handled by an agent at a time. Note half of the set capacity is allocated to inbound tasks.
- **Voicemail** - How many Voicemail tasks can be handled by an agent at a time.
- **Custom Tasks** - How many Custom tasks can be handled by an agent at a time.

Agents' capacity is configurable directly in the Agents page. To update capacity for a specific agent, click on the agent's name to open the slideout, and input your desired values in the Task Capacity section.

![](https://support.regal.ai/hc/article_attachments/38601593989275)