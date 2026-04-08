---
id: 36097921072027
title: "Managing Task Volume: Regal’s Limits and Backlog"
html_url: "https://support.regal.ai/hc/en-us/articles/36097921072027-Managing-Task-Volume-Regal-s-Limits-and-Backlog"
updated_at: "2025-10-13T15:48:49Z"
---

# Managing Task Volume: Regal’s Limits and Backlog

The Task Backlog stores new tasks when the Regal system reaches its in-app task limit. Additional tasks are added to a backlog and automatically processed as space becomes available, allowing campaign calls to continue being handled in order of priority even when task volume periodically or consistently exceeds the active threshold.

# What are Regal's Task Limits?

Regal's app supports up to **20k in-flights tasks** (tasks created but not yet completed). These tasks are reflected in the Tasks and Queues pages and can be canceled, completed, worked, or manually assigned in-app. 

To ensure there’s always room for high-priority work like incoming calls and scheduled callbacks, Regal automatically places campaign call tasks (which typically make up the majority of task volume) into the Task Backlog once an account hits **20k in-flight tasks**.

The Task Backlog supports up to **100k backlogged tasks**. If that limit is reached, any new tasks beyond that point won’t be created. Just like in-app tasks, backlogged tasks time out after 2 weeks and will appear as Canceled in the app.

# How does the Task Backlog Work?

When an account reaches 20k in-flight tasks, Regal starts creating new campaign call tasks in the Task Backlog. As the in-flight count drops below 20k and capacity opens up, tasks are pulled from the Task Backlog into the Regal app based on task priority, at which point Regal will emit a task.created event for that task. To make sure your tasks reflect their campaigns' priority, set the campaign's priority in the creation form. 

![](https://slabstatic.com/prod/assets/h2b7yidn/post/gxwzzxol/preimages/hWNTYr9z61Eew7UC-nwpLXNk.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0NDkxMTc3NSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2d4d3p6eG9sLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJneHd6enhvbCIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0NjExNDE3NSwiaWF0IjoxNzQ0OTA0NTc1LCJqdGkiOiIzMHJpYXRzNG1iNG10ZGZ2ZnAwaDdqNjIiLCJuYmYiOjE3NDQ5MDQ1NzV9.fuwViQVxk_z2_1ZanVHUwfbrALhdeyxTkTmAOlcnZkXzojIXJzmKRwr1ASpCEZdbP6qGo1BrSiTa5bKyankjNeJ77KP0cS5bm36sxHIzcgyYJr959Obbu1qBDtDHvv1keX-kuZFJ22sAjKNNC5BNcMK7lDmS-ER8W1GeMzjlcQy9vB_35WaUkvC4i_l3nlwwImWYq0Ejnh35DSeaT_430sY96T8DHPe1CwC3xfPpo8iPHexc2mGAQrc7eBByMB_Gn_T6bH67nSNXnHz_a0WYeDFDnEqAYv33VX74y8wyIYx7C4NC4qmNQT4607HFUEWVY1u-FuafLVXubeO2pIYdmQ)

Progressive and predictive campaigns with a LIFO target queue automatically bypass the Task Backlog to ensure the most recently created tasks can be worked first. For progressive and predictive campaigns with a FIFO target queue, promotion from the Task Backlog to the Regal app will respect the FIFO setting.

# Reporting

Backlogged tasks can be monitored through the Tasks Backlog explore in Reporting. Use this view to

- Compute the total number of backlogged tasks so you stay ahead of the system’s 100k limit
- Monitor how many tasks are backlogged per call campaign to track remaining work
- Identify which contacts' calls are pending in the backlog

![](https://slabstatic.com/prod/assets/h2b7yidn/post/gxwzzxol/preimages/ThMcfEJ5Q1Zspen67x13ERUu.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0NDkxMTc3NSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2d4d3p6eG9sLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJneHd6enhvbCIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0NjExNDE3NSwiaWF0IjoxNzQ0OTA0NTc1LCJqdGkiOiIzMHJpYXRzNG1iNG10ZGZ2ZnAwaDdqNjIiLCJuYmYiOjE3NDQ5MDQ1NzV9.fuwViQVxk_z2_1ZanVHUwfbrALhdeyxTkTmAOlcnZkXzojIXJzmKRwr1ASpCEZdbP6qGo1BrSiTa5bKyankjNeJ77KP0cS5bm36sxHIzcgyYJr959Obbu1qBDtDHvv1keX-kuZFJ22sAjKNNC5BNcMK7lDmS-ER8W1GeMzjlcQy9vB_35WaUkvC4i_l3nlwwImWYq0Ejnh35DSeaT_430sY96T8DHPe1CwC3xfPpo8iPHexc2mGAQrc7eBByMB_Gn_T6bH67nSNXnHz_a0WYeDFDnEqAYv33VX74y8wyIYx7C4NC4qmNQT4607HFUEWVY1u-FuafLVXubeO2pIYdmQ)

For custom reporting needs, reach out to your Customer Success Manager.