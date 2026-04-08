---
id: 5888861044891
title: "How To View, Manage, and Create Task Queues"
html_url: "https://support.regal.ai/hc/en-us/articles/5888861044891-How-To-View-Manage-and-Create-Task-Queues"
updated_at: "2026-01-12T18:38:28Z"
---

# How To View, Manage, and Create Task Queues

### Managing Queues

The **Queues Page** contains a live, updating view of all your queues.

**Current Tasks** shows how many tasks are in each of your queues. The column splits tasks into **Active** if they've been accepted by an agent and **Waiting** if they have yet to be accepted. **Longest Current Wait** is how long the oldest task in the queue has spent in the queue and **Agent Availability** shows the split of agents who are eligible for tasks in the queue.

You're also able to see real-time data about tasks that are accepted from each queue. The timeframe over which these columns are evaluated over selectable  **Average Wait Time** is the average amount of time between when a task was created and when it was accepted. **Completed Tasks** is the number of completed tasks (split by channel). **SLA Performance** is the percentage of tasks that were accepted within the SLA set on the queue. SLA adherence is calculated by comparing the age of the task when it was accepted against the SLA set on the queue it was accepted from.

![Queues.png](https://support.regal.ai/hc/article_attachments/22979563860379)

#### Default Queues

Regal accounts come with the following set of default queues.

- Inbound Calls: Where inbound calls are sent.
- Outbound Calls: Where campaign-triggered outbound call tasks are sent.
- Manual Outbound Calls: Where manual outbound calls are sent.
- Callbacks: Where scheduled and ASAP callbacks are sent.
- Inbound SMS: Where inbound sms tasks are sent.
- Outbound SMS: Where outbound sms tasks are sent.
- Quiet Hours: Where tasks unavailable to agents because they're in local quiet hours are temporarily placed.
- Snoozed: Where tasks unavailable to agents because they've been snoozed by an agent are temporarily placed.
- Transfers: Where transfer tasks are sent.

### Creating and Editing Queues

You're able to create your own queues from the Task Routing page in Settings. You're able to see a list of all your queues here and are able to click "New Queue" to create a new queue to use in Routing Rules.

![](https://support.regal.ai/hc/article_attachments/44898980724635)

#### 

#### Queue Name and Description

Queues must have a unique name that will be displayed across the application, including on the Queues page. The Description field is useful to leave notes for yourself and team to come back to in the future about what a queue is and why it exists.

#### Task Order

For each queue you must determine the order in which you want tasks to be handled. This setting will determine the order in which tasks are routed to agents, and for progressive dialer campaigns, the order in which calls are placed on behalf of agents. With FIFO, tasks are sorted by priority and the highest priority task is assigned first. With LIFO, the most recent task is assigned first regardless of task priority.

#### Max Reserved Agents

For each queue you can set the number of agents you want to be reserved at the same time for a task. For example, if an inbound call comes into the Inbound Call queue, how many agents do you want that inbound call to ring to? If you set Max Reserved Agents = 1, only one agent will see that inbound call at a time. But to get the call answered faster, you can increase the number of Max Reserved Agents to e.g., 5, and it will ring all five agents at the same time, making it more likely the call will be answered faster.

#### ❗Don't Set Max Reserved Agents Too High

Setting Max Reserved Agents to too high of a number can create a frustrating agent experience, and a feeling that "my tasks are always disappearing" because they are competing for tasks with other agents. It's common to be more aggressive with Inbound Calls because customers have little tolerance for waiting on the line, so setting that at 3 or 5 agents is reasonable. For Outbound Calls, it's common to be less aggressive and just leave Max Reserved Agents at 1 agent.

#### Include AI Agents

Toggle whether you'd like AI Agents to be eligible for this queue. Agents must still match the other criteria in the Eligibility Expression.

#### Queue Eligibility Expression

An Eligibility Expression determines which agents are eligible to be assigned the tasks in a queue. Teams, skills, email addresses and agent activity status can be used to specify which agents should be in a queue. Below are some examples of common expressions.

Once your queue is saved, you can reference the Qualifying Agents table at the bottom of the page to help set and debug your expression (more info below).

|  |  |
| --- | --- |
| **Scenario** | **Eligibility Expression** |
| All agents should be in the queue. | 1 == 1 |
| No agents should be in the queue. | 1 == 0 |
| Only agents with the Outbound Call skill should be in the Queue. | routing.skills HAS 'Outbound Call' |
| Only agents with on the Escalations team should be in the queue. | teams HAS 'Escalations' |
| Agents that either have the Outbound Call skill or is on the Escalations team should be in the queue. | routing.skills HAS 'Outbound Call' OR teams HAS 'Escalations' |
| Agents that either a) have the Outbound Call skill or are on the Escalations team or b) have the email escalations@support.com should be in the queue. | (routing.skills HAS 'Outbound Call' OR teams HAS 'Escalations') OR email == 'escalations@support.com' |
| Agents that are on the Retention team and are not set to the 'Pause Assignment' status should be in the queue. | teams HAS 'Retention' AND current\_status != 'Pause Assignment' |

#### 

#### SLA

Set a Service Level Agreement (SLA) for each of your queues. The SLA defines the target time interval between when the task is created and when the task is accepted. For example, if you are targeting answering inbound calls within 30 seconds, then you'd set the SLA for your Inbound Call queue to 30 seconds.  
Performance against this SLA will be shown on the Queues page. If the time between the task being created and accepted is less than the SLA, it's considered to be accepted within the SLA. For example, we'll display 80% if agents are answering 80% of inbound calls in less than or equal to 30 seconds.  
If you don't know what to target, here are some SLAs we consider "best in class":

- Inbound Calls: 30 seconds
- Outbound Calls: 5 minutes
- Inbound Texts: 2 minutes

Typically, if you're hitting these 70%+ of the time, you've got the right set up and staffing ratio to deliver a great customer experience.

#### Hide from Internal Transfer List

If a queue is not relevant for agents to be transferring calls into, you can choose to hide the queue from the [Internal Transfer dropdown](https://support.regal.ai/hc/en-us/articles/5048599143707-How-to-Transfer-a-Call) on the Agent Desktop. This is useful to prevent agents from accidentally transferring to irrelevant queues.

![](https://support.regal.ai/hc/article_attachments/45362025556763)

#### Qualifying Agents

At the bottom of the page (once saved), you can view the agents that match your last-saved Eligibility Expression in the Qualifying Agents table. Use this table to validate your Eligibility Expression and check on agents in specific queues. Note: if you make an edit to your Eligibility Expression, you must then save your queue to refresh this table with the updated Qualifying Agents.

![](https://support.regal.ai/hc/article_attachments/45362025562779)

### FIFO vs. LIFO Queues

Queues can be set up as FIFO or LIFO.

- **FIFO queues**order tasks on a first come, first serve basis. Typically inbound queues that contain inbound calls or inbound SMS are set up as FIFO.
- **LIFO queues** order tasks on a last in, first serve basis. Often Outbound Call queues are set up as LIFO as you want to optimize for "Speed to Lead" meaning prioritize the "Hottest Lead" that came in most recently since the theory is that they have the highest intent.

> ### 📘 How Do Queues, Skills and Teams Work Together to Assign Tasks?
>
> **Let's say you have 2 queues:**
>
> - Acquisition - Outbound Call queue
> - Retention - Outbound Call queue
>
> You can set it up so that the Acquisition - Outbound Call queue requires the skill "Outbound Call" and the team "Acquisition Team", whereas the Retention - Outbound Call queue requires the skill "Outbound Call" and the team "Retention Team".
>
> **Now let's say you have 4 agents:**
>
> - Agent A is on the Acquisition Team and has the skills Outbound Call and Inbound Call
> - Agent B is on the Retention Team and has the skills Outbound Call and Spanish
> - Agent C is on both the Acquisition Team and Retention team, and only has the skill Outbound Call
> - Agent D is on the Acquisition Team and only has the skill Inbound Call
>
> **Which of the 2 queues will each agent receive tasks from?**
>
> - Agent A will receive tasks from the Acquisition - Outbound Call queue
> - Agent B will receive tasks from the Retention - Outbound Call queue
> - Agent C will receive tasks from both the Acquisition - Outbound Call queue AND Retention - Outbound Call queue
> - Agent D will not receive tasks from either outbound queue because they don't have the Outbound Call skill