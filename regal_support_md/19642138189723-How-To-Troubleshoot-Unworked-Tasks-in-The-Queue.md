---
id: 19642138189723
title: "How To Troubleshoot Unworked Tasks in The Queue"
html_url: "https://support.regal.ai/hc/en-us/articles/19642138189723-How-To-Troubleshoot-Unworked-Tasks-in-The-Queue"
updated_at: "2023-12-13T20:49:05Z"
---

# How To Troubleshoot Unworked Tasks in The Queue

To help you troubleshoot and resolve tasks that end up waiting in the queue for extended periods of time, we have compiled a list of the most common potential root causes and outlined the steps you can take to solve each issue in the sections below.

---

# Root Cause: Routing Rules

### Potential Issue - Priority Relative to Other Tasks

If you notice that some tasks are not being completed, a useful first step is to check their priority level against active tasks on the tasks page. Higher priority tasks will always be worked before lower priority tasks. For example, the boxed task below will be worked last because it has the lowest priority of any task on the list.

![Screenshot 2023-10-17 at 11.18.27 AM.png](https://support.regal.ai/hc/article_attachments/19642164069147)

### Solutions:

- Determine which routing rule the low-priority task is following and increase the priority.

![image.png](https://support.regal.ai/hc/article_attachments/21215639588123)

When updating task routing rules, the update will only affect tasks created after the update is saved. Updating task routing rule does **not** affect tasks that are currently in queue.

- You can let agents handle lower-priority tasks after higher-priority ones are completed.
- If immediate attention is required, manually assign the task from the tasks page using the override agent option.

![Screenshot 2023-10-17 at 11.30.45 AM.png](https://support.regal.ai/hc/article_attachments/19642125179803)

---

### Potential Issue - Target Agent Unavailable

Some tasks will look for a target agent:

![Screenshot 2023-10-17 at 12.00.01 PM.png](https://support.regal.ai/hc/article_attachments/19643143389467)

If that target agent is offline, in an unavailable status, or is working other, higher priority tasks they will not see the task you're researching. If the routing rule that is applied to this task only has one step that says to look for the target agent, the task will sit in queue until it is worked, canceled, or times out.

### Solutions:

- Ensure that the target agent has the correct skills, has access to the relevant queue, and that they meet any other criteria set in routing rules.
- If immediate attention is required, manually assign the task from the tasks page using the override agent option. Otherwise, allow agents to work tasks in priority order.

After fixing the error, the tasks following that rule will need to be manually assigned or re-created to route through the updated rule. Tasks can be manually assigned from the tasks page or tasks can be recreated with a journey that triggers on task.canceled. As always, don't hesitate to reach out to Regal support for assistance.

Best Practice: With rules that search for a target agent, unless it's vitally important that nobody but that agent handle the task, add a second step to the rule that handles situations where the target agent is unable to work the task.

- If you choose to change the routing rule, remember that it will only affect tasks created after the change was implemented. You should still manually assign the task(s) created before the change.

---

### Potential Issue - Routing Rules Syntax Error

Check routing rules to see if the rule the task is following contains any typos, especially if the expression includes a hardcoded team name, skill, or agent name/email. If the name or skill is spelled incorrectly the task will continuously be looking for a nonexistent team or agent.

### Solution:

- Fix the typo and manually assign that task and other affected tasks. If there are a large number of tasks that are affected (100+) feel free to reach out to Regal support for assistance.

---

# Root Cause: Agent Availability and Efficiency

### Potential Issue - Agent Availability

If some tasks are being worked and you can't find another cause for there still being unworked tasks in the queue, check agent availability. Sometimes the number of agents available is just too small to handle the number of tasks in queue.

### Solutions:

- Experiment with using automated SMS more frequently to lessen the number of call tasks that agents are responsible for.
- Adjusting journeys to be more restrictive in how many tasks they create.
- Introduce more granular task priorities in routing rules, ensuring that the most important calls are always worked first.

---

### Potential Issue - Queue Staffing and Agent Skills

If the total number of available agents isn't the problem, ensure that there is enough available agents in each of the queues and that agents have the proper skills to work the tasks that are available.

### Solution:

- A common issue, particularly with new employees, is a queue mismatch. Sometimes agents need to have a particular skill or be on a particular team to qualify for the tasks in those queues, this would remain true even if they are the target agents to them. If you're unsure what skills/teams are needed to access a specific queue, reach out to Regal support.

---

### Potential Issue - Reserved but Unworked tasks

Check the Task Timeline dashboard or the contact's event history. If you're noticing a lot of task reservations but the task hasn't been accepted, it's possible that the agent it's reserving to has stepped away from their computer and forgotten to switch to an offline status.

### Solutions:

- Remind agents that their status is a direct reflection of their availability. If they're going to be away from their computer, even for a short period of time, they should change their status to reflect that so tasks are only shown to agents that are able to accept them.
- Check in reporting to see if the task has been snoozed by agents.

---

### Potential Issue - Task Acceptance: Regal or Agent Driven

When some tasks are not set to auto-accept, we have noticed some agents may ignore task reservations for outbound calls in favor of manually dialing at their own discretion and/or waiting for higher priority tasks like inbound calls This results in triggered outbound call tasks sitting in queue for extended periods of time.

### Solution:

- Using the Agent Activity Dashboard in Reporting, ensure that your agents are working the tasks that are being shown to them on the agent desktop and not continuously working manual tasks.
- If agents are relying on manual tasks over triggered tasks, speak with them about trusting the system and working tasks as they're shown. Agents should generally stick to inbound and triggered outbound tasks, only working manual outbound calls occasionally.

---

# Need More Assistance?

If you have looked into all of these things and still cannot determine why the tasks isn't being assigned please reach out to Regal support by [filing a ticket](https://support.regal.io/hc/en-us/requests/new) with details including the steps you've already taken.