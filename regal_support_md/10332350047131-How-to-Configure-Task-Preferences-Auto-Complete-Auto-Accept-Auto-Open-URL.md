---
id: 10332350047131
title: "How to Configure Task Preferences (Auto-Complete, Auto-Accept, Auto-Open URL)"
html_url: "https://support.regal.ai/hc/en-us/articles/10332350047131-How-to-Configure-Task-Preferences-Auto-Complete-Auto-Accept-Auto-Open-URL"
updated_at: "2025-04-11T18:19:50Z"
---

# How to Configure Task Preferences (Auto-Complete, Auto-Accept, Auto-Open URL)

Task preferences allow managers to configure automated behaviors for tasks, such as Auto-Complete and Auto-Accept, to streamline agent workflows. Preferences are set by task type and can be viewed and configured in the Task Preferences page in Settings.

![Screen Shot 2024-09-20 at 4.45.38 PM.png](https://support.regal.ai/hc/article_attachments/29405532541979)

## Task Auto-Complete

Auto-Complete is a feature that automatically summarizes tasks for agents after they have been idle for a period of time. This helps ensure that agents are always working on active tasks and that new tasks aren't blocked by old ones that aren't being acted on in an agent's backlog.

![Screen Shot 2024-09-20 at 4.58.11 PM.png](https://support.regal.ai/hc/article_attachments/29405532545947)

There are 2 settings that determine how tasks are auto-completed when the feature is enabled:

- **Idle Timeout**: How long a task must be considered "Idle" before showing the Task Auto-Complete countdown banner.
  - This timer starts after a call ends or an agent sends an sms.
  - The timer will reset and stop any time a contact sends an sms.
- **Countdown Timer Duration**: The length of time that the Task Auto-Complete banner is shown after the Idle Timeout has elapsed.

After the Task Auto-Complete banner hits 00:00, the task will be automatically completed for the agent with a disposition of "Autocompleted". It will then disappear from the agent's task list and they will receive a notification letting them know that the task was auto-completed.

**Important:**All tasks that are auto-completed will be completed with the disposition of "Autocompleted". Please ensure that relevant journey trigger filters are checking for that disposition if you intend for these calls to be entered into those journeys after call completion.

#### Configuration

To configure Auto-Complete,

1. Click on the task type you'd like to configure in the Task Preferences page.
2. Toggle on Task Auto-Complete.![Screen Shot 2024-09-20 at 4.47.37 PM.png](https://support.regal.ai/hc/article_attachments/29405535665051)
3. Input values (in seconds) for the idle timeout and countdown timer duration. ![Screen Shot 2024-09-20 at 4.46.44 PM.png](https://support.regal.ai/hc/article_attachments/29405532551707)
4. Choose whether to configure this preference for all users or specific teams. If selecting specific teams, the preference will be reflected for any agent that is a part of at least one selected team.
5. You can create another ruleset for a different team/ set of teams by clicking 'Add Task Auto-Complete Setting'. ![Screen Shot 2024-09-20 at 4.47.20 PM.png](https://support.regal.ai/hc/article_attachments/29405535670939)
6. You can optionally rename each rule you create.
7. Save your changes.

## [Task Auto-Accept](#h_01J88J5WDVB6ETGXV136JFPVS2)

When Auto-Accept is enabled for a task, it is auto-accepted on behalf of the agent reserved to that task, so that the agent doesn't spend time or have the option to accept/reject it. Auto-accept is currently available for the following task types: Inbound SMS, Incoming Call, Agent SMS, and Reminder. Note that for outbound campaign calls, using a Power or Progressive Dialer will create the same experience for agents.

**Note before enabling Auto-Accept for Incoming Calls:** At this time, Auto-Accept for incoming calls cannot be used by teams handling progressive dialer calls. In addition, it cannot target teams of agents enabled for the Incoming & Transfer Notifications, which allow agents to receive reservations for incoming and transfer calls even while they are handling an active call task.

#### Configuration

To configure Auto-Accept,

1. Click on the task type you'd like to configure in the Task Preferences page.
2. Toggle on Task Auto-Accept.![Screen Shot 2024-09-20 at 4.46.03 PM.png](https://support.regal.ai/hc/article_attachments/29405532557467)
3. Choose whether to configure this preference for all users or specific teams. If selecting specific teams, the preference will be reflected for any agent that is a part of at least one selected team. ![Screen Shot 2024-09-20 at 4.46.16 PM.png](https://support.regal.ai/hc/article_attachments/29405532560027)
4. Save your changes.

## Task Auto-Open URL

When Auto-Open URL is enabled for a task, the link stored in the task's openUrl attribute is automatically opened in a new tab when the task is accepted.

#### Configuration

To configure Auto-Open URL,

1. Configure the URL to be auto-popped. See our [docs](https://support.regal.io/hc/en-us/articles/26912145349147-Auto-open-URL-on-Task-Acceptance) for mapping links to contacts.
2. Click on the task type you'd like to configure in the Task Preferences page.
3. Toggle on Task Auto-Open URL.
4. Choose whether to configure this preference for all users or specific teams. If selecting specific teams, the preference will be reflected for any agent that is a part of at least one selected team.![Screen Shot 2024-10-04 at 2.57.02 PM.png](https://support.regal.ai/hc/article_attachments/29800961161883)
5. Save your changes.