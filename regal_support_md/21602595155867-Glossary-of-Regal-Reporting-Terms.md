---
id: 21602595155867
title: "Glossary of Regal Reporting Terms"
html_url: "https://support.regal.ai/hc/en-us/articles/21602595155867-Glossary-of-Regal-Reporting-Terms"
updated_at: "2024-08-21T17:24:14Z"
---

# Glossary of Regal Reporting Terms

### Here are some common terms used within Regal's Reporting dashboards (as well as other places within Regal), along with their definitions.

#### 📘 Reporting License

Reporting Dashboards are provided under a separate per-seat license. Please [submit a ticket](https://support.regal.ai/hc/en-us/requests/new) to sign up for Reporting Dashboards.

| Term | Definition |
| --- | --- |
| Canceled (Task Status) | Canceled is a task status that indicates that the task is no longer in a queue. For most task types that means the task was manually canceled by an agent/admin or automatically canceled by a cancel task node in a journey. For inbound calls, this could also mean that the person calling hung up or requested an ASAP callback. See [the task lifecycle article](https://support.regal.io/hc/en-us/articles/21219335877147-What-Happened-To-The-Task-Understanding-the-Task-Lifecycle) for more detail. |
| Channel | The channel a task is a part of refers very broadly to the type of task. Available channels are Voice, SMS, Email, Custom Tasks, and Voicemail. |
| Completed (Task Status) | Completed is a task status that indicates that an agent has finished writing notes and assigning tags as well as a disposition. See [the task lifecycle article](https://support.regal.io/hc/en-us/articles/21219335877147-What-Happened-To-The-Task-Understanding-the-Task-Lifecycle) for more detail. |
| Conversation | Regal determines whether or not a conversation was had based on the disposition given to the task. You can see which dispositions indicate whether or not a conversation was had in Settings > Task Preferences > Dispositions. |
| Campaign-Specific Conversion | A campaign-specific conversion is determined when a specific event occurs. You can assign this event from the campaigns page.  Screenshot 2023-12-28 at 4.16.26 PM.png |
| Conversion | A conversion is determined when a specific event occurs. This is an event that is decided upon by you, usually during implementation. If you are unsure of what your conversion event is or need to change it, please [submit a ticket](https://support.regal.io/hc/en-us/requests/new) for more information. You can only have one conversion event, however you can assign other events the status of Important Event or Campaign-Specific Conversion Event. |
| Direction | The direction of a task indicates whether the task was initiated inside or outside of Regal. Possible directions are "inbound" or "outbound". |
| Handle Time | The amount of time from when an agent clicks "accept" on a task to when the task is completed, including when the agent is writing notes or assigning a disposition/tags after a call has ended (for call tasks). |
| Handling Agent | The handling agent is the agent that worked the task. |
| Important Events | Important events are events that you've deemed as important, typically for the specific use of tracking them in reporting. These are not conversion events. |
| Reservation/Reserved (Task Status) | Reserved is a task status that indicates that a task has been shown on the agent desktop and at least one agent has had the opportunity to accept it. See [the task lifecycle article](https://support.regal.io/hc/en-us/articles/21219335877147-What-Happened-To-The-Task-Understanding-the-Task-Lifecycle) for more detail. |
| Talk Time | Talk time is only used for phone calls. It is the amount of time an agent spends talking on the phone, including voicemails. Talk time starts when a call task is accepted/call starts dialing until the call is ended. |
| Target Agent | Not every task has a target agent. If a task has a target agent, that can be referenced in routing rules. A target agent has no impact on the task unless it is referenced in routing rules. |
| Target Team | The target team is the team that the target agent is on, if one exists. |
| Triggered Outbound Call (Task Type) | Outbound calls created by a journey. This does not include ASAP callbacks or manual outbound calls. |
| Wrap Time | Wrap time is typically used for phone calls. It is the amount of time from when a call ends to when the agent completes the task (finishes writing notes and assigning a disposition/tags). Email and SMS tasks automatically have a wrap time of 0 seconds. |