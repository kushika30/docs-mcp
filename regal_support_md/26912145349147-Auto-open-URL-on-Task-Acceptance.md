---
id: 26912145349147
title: "Auto-open URL on Task Acceptance"
html_url: "https://support.regal.ai/hc/en-us/articles/26912145349147-Auto-open-URL-on-Task-Acceptance"
updated_at: "2024-10-04T19:05:24Z"
---

# Auto-open URL on Task Acceptance

Agents may need additional context outside of the Regal app when handling tasks. For example, when receiving an inbound call, an agent may have little or no time to prep and needs immediate access to a call script or the contact's profile information (e.g. their application documents). 

You can set up any URL to auto-open in a new tab when the agent accepts a task. To do so, map your custom URL property (e.g. customProperties.hubspotLink) to the task attribute "OpenUrl".

![Screen Shot 2024-06-26 at 12.24.52 PM.png](https://support.regal.ai/hc/article_attachments/26912255533339)

When "OpenUrl" is populated for a task, that URL will auto-open in a new tab when agents accept the task and redirect them to that tab. 

This setting can be enabled by task type and team as follows: 

1. In the Task Preferences settings page, click on the task type you'd like to configure.
2. Toggle on Task Auto-Open URL.
3. Choose whether to configure this preference for all users or specific teams. If selecting specific teams, the preferences will be reflected for any agent that is a part of at least one selected team. ![Screen Shot 2024-10-04 at 2.57.02 PM.png](https://support.regal.ai/hc/article_attachments/29801367316123)
4. Save your changes.