---
id: 21219335877147
title: "What Happened To The Task? Understanding the Task Lifecycle"
html_url: "https://support.regal.ai/hc/en-us/articles/21219335877147-What-Happened-To-The-Task-Understanding-the-Task-Lifecycle"
updated_at: "2023-12-14T16:14:35Z"
---

# What Happened To The Task? Understanding the Task Lifecycle

## 1. Task Creation

- **Pending:** When a task is created, it aligns with a specific [set of rules](https://support.regal.io/hc/en-us/articles/12181758397723) based on the task's type. For instance, tasks for Outbound Calls will adhere to the Outbound Call routing rules. The rules established at the time of the task's creation remain with that task for its lifetime. Any modifications to the rules made after the task has been created will not affect the existing task. If the task does not meet the requirements of any specific rule filters within the ruleset, it will be placed in the default queue associated with that ruleset. Tasks remain in a pending state within a queue until they are paired with an available agent.
- **Reserved:** A task enters this state when a reservation with a matching agent is made. At this point, the task is shown on the Agent Desktop. If the reservation is rejected or times out, the task reverts to pending. Some possible reasons for a task timeout or reservation rejection are:
  - **[Snoozed by the Agent](https://support.regal.io/hc/en-us/articles/5041609342619):** The agent the task is reserved to might snooze the task in order to work on more time sensitive tasks.

This should be used sparingly. If you notice that agents are regularly snoozing tasks, that could be cause to rework task priorities to make sure that the most important tasks are being shown to agents first.

- - **Reservation Timeout due to Inactivity:** If a worker does not respond to a reservation within a certain timeframe (determined in routing rules), the reservation will time out. This ensures that tasks are not left unworked for too long.

##### Agents should keep their status up to date!

Tasks should not be timing out on a regular basis. If you notice that tasks are frequently timing out, address this with the specific agents and ensure they are aware that they should change their status to reflect their availability. Agents should only be in an available status if they are truly available to work tasks at that moment in time.

---

## 2. Assignment and Timeout

- **[Assigned](https://support.regal.io/hc/en-us/articles/4921991111451):** Upon accepting a reservation, the task is assigned, and the agent begins work on the tasks (i.e. places a call, sends an email, etc.).
- **Task Timeout:**
  - Pending and reserved tasks are automatically canceled after 2 weeks.
  - Assigned tasks are automatically canceled after 24 hours if they are not completed.
  - Wrapping tasks have no timeout or auto clean-up action.

If you're noticing an inordinate amount of task timeouts or tasks not being accepted you can learn some steps to troubleshoot unworked tasks by [clicking here](https://support.regal.io/hc/en-us/articles/19642138189723).

---

## 3. Completion

- **[Wrapping](https://support.regal.io/hc/en-us/articles/7959246554907):** After the task is finished, agents are prompted to enter information about the outcome of the task (disposition, tags, and notes).

![Screenshot 2023-12-13 at 4.34.36 PM.png](https://support.regal.ai/hc/article_attachments/21220666747035)

![Screenshot 2023-12-13 at 4.34.43 PM.png](https://support.regal.ai/hc/article_attachments/21220641883547)

- **[Canceled](https://support.regal.io/hc/en-us/articles/5042791653019):** A task can be manually canceled by agents or admins.

![Screenshot 2023-12-13 at 4.19.09 PM.png](https://support.regal.ai/hc/article_attachments/21220531935515)

- **[Completed](https://support.regal.io/hc/en-us/articles/5044978282779):**  The final state of a task, signifying successful completion. After the task is completed, the task will  disappear  from the Agent Desktop. Tasks are completed by clicking "Complete Conversation" in the Conversation Summary.

![Task Created.png](https://support.regal.ai/hc/article_attachments/21221496304027)