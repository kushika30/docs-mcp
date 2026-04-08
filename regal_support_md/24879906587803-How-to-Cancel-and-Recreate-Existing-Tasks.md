---
id: 24879906587803
title: "How to Cancel and Recreate Existing Tasks"
html_url: "https://support.regal.ai/hc/en-us/articles/24879906587803-How-to-Cancel-and-Recreate-Existing-Tasks"
updated_at: "2025-06-25T18:44:21Z"
---

# How to Cancel and Recreate Existing Tasks

Tasks are locked into the ruleset that existed when they were created so if you make a change to routing rules and want existing tasks to follow that change you will need to cancel and recreate tasks in queue.

This article will show an example of recreating tasks that belong to a specific campaign, but the premise is the same even if the tasks don't share a campaign.

### Step 1: Identify a task attribute shared by all tasks you're recreating

In this example, we'll be canceling tasks that belong to campaigns #115 and #118. The premise is the same if you need to use another task attribute such as created\_at, type, or queue (although you will likely need substantially more conditional node splits).

### Step 2: Set up a journey to cancel and recreate the tasks

1. The journey should trigger on task.canceled with a property condition that targets the tasks your canceling. It should also have a property of canceled\_by is [your email] to avoid a situation where someone else cancels a task that you don't want recreated.
   - In this example, we'll use task.canceled where campaign\_friendly\_id Is One Of 115 or 118

     ![Screenshot 2024-04-16 at 9.34.05 AM.png](https://support.regal.ai/hc/article_attachments/24880275708059)
   - Set up conditional splits to identify the campaign
     - Condition Type: Triggering Event
     - Property values: properties.campaign\_friendly\_id = 115

       ![Screenshot 2024-04-16 at 9.39.37 AM.png](https://support.regal.ai/hc/article_attachments/24880547988635)
   - Repeat step 2 for any other campaigns or other identifying attributes.
   - If you have multiple conditional nodes, connect the nodes so that if they evaluate to false, it moves the next conditional node.

     ![Screenshot 2024-04-16 at 9.42.58 AM.png](https://support.regal.ai/hc/article_attachments/24880718862619)
   - Connect the appropriate task recreation node. In this case, both campaigns are call tasks.

     ![Screenshot 2024-04-16 at 9.48.05 AM.png](https://support.regal.ai/hc/article_attachments/24880868021787)
   - **Save the journey as live.**

It is very important to save the journey as live before canceling the tasks.

### Step 3: Cancel tasks

1. Navigate to the tasks page and filter for the tasks you want to recreate
   1. Additionally, filter for Assignment Status = Pending to avoid canceling tasks that are actively being worked and also add a filter for Task Type = Outbound Call to make sure you're not canceling any Scheduled Callbacks (which inherit the campaign number from the task that was being worked when it was scheduled)

      ![Screenshot 2024-04-16 at 9.51.16 AM.png](https://support.regal.ai/hc/article_attachments/24881341788059)
2. Once the tasks are filtered, select all tasks and click Cancel

   ![Screenshot 2024-04-16 at 9.53.46 AM.png](https://support.regal.ai/hc/article_attachments/24881318850075)
3. Wait for the journey you set up earlier to recreate the tasks

It's a best practice to monitor the new tasks for a few minutes as they get created and assigned to ensure that the changes to task routing are acting the way you expect them to.