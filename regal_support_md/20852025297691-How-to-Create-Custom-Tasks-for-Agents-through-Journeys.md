---
id: 20852025297691
title: "How to Create Custom Tasks for Agents through Journeys"
html_url: "https://support.regal.ai/hc/en-us/articles/20852025297691-How-to-Create-Custom-Tasks-for-Agents-through-Journeys"
updated_at: "2023-12-01T19:32:43Z"
---

# How to Create Custom Tasks for Agents through Journeys

Users can use Custom Task node in Journey to trigger a manual task for agents to complete, with custom instructions on what the task entails. This feature can be useful to remind agents to handle tasks that are different than a single task for a specific Regal channel.

### Use Case Examples:

1. **Conduct Action in External System.** E.g. Remind agents to update a specific record in a system that is not integrated with Regal and therefore cannot receive automated updates. Similarly, remind agents to send a social media message to customers.
2. **Multi-Step Process.** E.g. Give agent instructions to verify latest pricing and update the record for customer's selected plan before making a call/sms.
3. **Process Compliance**. E.g. Remind agent to schedule a callback if certain disposition happened, but there was no schedule callback event on the contact.

### See below on how to use this feature:

**Custom Task Node**

- Journey users can use the Custom Task node to trigger a Custom Task for agents to handle.
- Task name is required, to be displayed on the task card in Agent Desktop.
- Users will also need to add instructions for agents in the description section.
  - Note: dynamic attributes {{}} are not yet available for custom task node.

![](https://support.regal.ai/hc/article_attachments/20852068632347)

**Agent Desktop Experience**

- For agents, agent sms tasks will show up as an Custom Task with Task Name (configured in Journey) displayed on the task card. Upon clicking on the task, task instructions will automatically open on the right rail.
- Agent can determine wether to accept, snooze, or cancel the task.
- Upon completing the task, task can be summarized with a disposition.

![](https://support.regal.ai/hc/article_attachments/20852054514843)

**Regal Events Generated**

- Below task events will be generated when a task is created, accepted, then completed:
  - task.created
  - task.reservation.created
  - task.reservation.accepted
  - custom.task.completed
- Journey name, id, task type (custom task), and task name will be included on the event attributes above

**Custom Task Workflow Configuration In-app (Coming Soon)**

- A new agent queue Custom Task is created for these tasks
- Routing rules can be configured in-app for custom tasks based on specific needs (coming soon)
  - Out of the box, routing rules will support basic Snooze and Manually Assigned functionality.
  - If special handling is required for each type of custom tasks, you can leverage task attributes that are automatically appended, including:
    - title (Custom Task)
    - taskName (custom task name specified in Journey node)
    - journeyFriendlyID
    - journeyNodeFriendlyID
    - etc.

![](https://support.regal.ai/hc/article_attachments/20852674210459)