---
id: 5724757111963
title: "How to Remove/Cancel Tasks in a Journey"
html_url: "https://support.regal.ai/hc/en-us/articles/5724757111963-How-to-Remove-Cancel-Tasks-in-a-Journey"
updated_at: "2023-12-20T20:16:48Z"
---

# How to Remove/Cancel Tasks in a Journey

### The Cancel Task block can be used to cancel tasks that have already been created in the queue, but have not yet been accepted by an agent.

When setting up a Cancel Task block, you can select whether you want to cancel All Tasks that are in the queue for that customer, just tasks of a particular type such as Outbound Call or ASAP Callback, or tasks triggered by a specific campaign.

![](https://support.regal.ai/hc/article_attachments/21411579383707)

> #### 📘 Assigned Tasks Cannot Be Canceled
>
> Once a task has been accepted by an agent, it cannot be canceled by a journey. The journey will only cancel tasks that are still in queue, so you don't have to worry about tasks disappearing from an agent's task list that they are already working on.

#### Cancel All Tasks

If you select to cancel "All Tasks", that means every task including Inbound Calls, Inbound SMS, etc. will be canceled. This option should be used sparingly. An example use case could be if you have a set of numbers on a block list, and you intentionally want to make sure agents don't handle any of their tasks.

#### 

#### Cancel Select Task Types

Choosing "Task Type" will prompt you to specify what type of task. All tasks created but not yet assigned in that task type will be canceled.  For example, you may want to cancel outstanding Outbound Call tasks created for Sales team when a customer have just converted. See screenshot for all task types to cancel.

![](https://support.regal.ai/hc/article_attachments/21411548451867)

**Note:** Outbound SMS is referring to Agent SMS tasks created by Journeys. Automated SMS triggered by Journeys cannot be canceled. Manual SMS created by agents also cannot be canceled (they are assigned.)

#### Cancel A Specific Campaign

Select "Campaign" to only cancel tasks that are from a specific campaign. Then select which campaign from the dropdown. When channel is set to SMS, it is referring specially to Journey triggered Agent SMS tasks.

![](https://support.regal.ai/hc/article_attachments/21411579415579)

![](https://support.regal.ai/hc/article_attachments/21411548466971)

### Which Journey Canceled This Task?

Sometime it's necessary to see which Journey canceled a particular task for debugging purposes. To do so, go to Tasks page to see Past Tasks. Then select "Canceled" to see all canceled tasks and their reasons. Journey ID and name will appear under "Canceled By" if the task is canceled by a Journey.

![](https://support.regal.ai/hc/article_attachments/21411794556699)