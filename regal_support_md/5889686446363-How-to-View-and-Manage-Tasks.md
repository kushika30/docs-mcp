---
id: 5889686446363
title: "How to View and Manage Tasks"
html_url: "https://support.regal.ai/hc/en-us/articles/5889686446363-How-to-View-and-Manage-Tasks"
updated_at: "2023-03-07T00:51:54Z"
---

# How to View and Manage Tasks

### The **Tasks** page contains a complete list of tasks, separated by **Upcoming Tasks** and **Past Tasks.**

#### Upcoming Tasks

**Upcoming Tasks** displays all tasks that have been created, but not yet completed.

Search for a specific task or set of tasks by entering Task ID, Contact Phone, or Contact Name into the search input.

You can also view the complete list of tasks and filter by select columns.

- **Created At:**How long ago the task was created. It's displayed in relative terms ("2 hours ago"), but the specific time of creation can be found by hovering over the value.
- **Task Type:**The type of the task, such as "Outbound Call", "Inbound SMS", etc.
- **Contact Phone/Name:**The name and phone number (if available) of the contact that the task is for.
- **Assignment Status:**The current state of the task: Pending, Reserved, Assigned or Wrapping. Pending tasks are tasks in a queue that are not yet reserving an agent. Reserved tasks are those that are currently being presented to an agent for assignment. Assigned tasks have already been accepted by an agent - such as a live call or active SMS conversation. Wrapping tasks are calls that have been hung up, but where the agent has not yet summarized and completed the task.
- **Reserved Agents:** The agents the task is reserving, if in Reserved status.
- **Handling Agent:**The agent assigned to the task, if any.
- **Target Agent:**The agent the task would prefer to reserve, if any. Target Agent is an input you can set for routing.
- **Campaign Name/ID:**The name and ID of the campaign that the task was created by, if any.
- **Queue:**The queue that the task is currently in.
- **Priority**
- **Dial Mode**
- **Task Timeout/Task Age/Time Remaining:** The initial length of time before a task will be automatically canceled, if not completed (Task Timeout) and how much time is left before that happens (Time Remaining).
- **Task ID:**The unique ID of a task.

> #### 📘  Need more information about a contact?
>
> Click on the contact's name or phone number on the Tasks Page to open the Contact Profile and view their attributes or conversation history.

#### 

#### Upcoming Tasks table

![Screen_Shot_2022-10-05_at_11.22.16_PM.png](https://support.regal.ai/hc/article_attachments/9387912843931)  

> #### 🚧  Batch Cancel or Complete Tasks
>
> If you need to batch cancel or complete tasks, you're also able to do so from this page by checking the box on the far left of the row(s) you'd like to action on, and clicking either **Cancel** or **Complete**. You can only Cancel a task if it's not yet been accepted by an agent. You can only complete a task if it's already in Wrap Up.

#### Past Tasks

**Past Tasks** displays tasks that were either completed or canceled in the last 30 days. You're able to filter by past 24 hours, 7 days, or 30 days using the toggle below the search bar. You can also toggle between completed or canceled tasks.

Search for a specific task or set of tasks by entering Task ID, Contact Phone, or Contact Name into the search input.

#### Past Tasks Table (Completed)

![Past Tasks Table (Completed)](https://files.readme.io/1a0d3df-past.png "past.png")

#### Completed Tasks

**Completed Tasks** are tasks that were successfully completed by agents. The table shows many of the same columns that Upcoming Tasks displays, with a few additions:

- **Completed At:**When the task was completed.
- **Disposition:**The outcome of the task that the handling agent selected.
- **Handle/Talk Time:**The time elapsed between an Agent accepting a task and completing it. **Talk Time** is how much of that time was spent on the phone, for voice tasks.
- **Recording:**A recording of the phone call, if available.

#### Canceled Tasks

**Canceled Tasks** are tasks that were canceled. This table has a few additional columns:

- **Canceled At:**When the task was canceled.
- **Canceled By:**Who canceled the task. This can be a specific agent or "regal\_voice" in the event the cancelation was triggered by a task timeout.
- **Canceled Reason:**Why a task was canceled - will either be "no\_reason" or "task\_timeout".
- **Canceled Source:**Where the task was cancelled from - the "agent\_page"` (Agent Desktop), "tasks\_page", or "system".

#### View Task Details

**To view more details about a Task,** you can click on a task from the Upcoming or Past Tasks page. Or from the Agents page. This will display the **View Task Details** slide out. From the slide out, you can view attributes on the task - all of which are available to you to use in Routing Rules. Additionally, you can:

- Cancel a task
- Complete a task
- Reassign a task
- Coming soon... Listen / Barge into a call

![Screen_Shot_2023-03-06_at_7.49.24_PM.png](https://support.regal.ai/hc/article_attachments/13451869876891)

![Screen_Shot_2023-03-06_at_7.49.35_PM.png](https://support.regal.ai/hc/article_attachments/13451869855387)