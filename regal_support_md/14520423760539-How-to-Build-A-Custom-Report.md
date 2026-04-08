---
id: 14520423760539
title: "How to Build A Custom Report"
html_url: "https://support.regal.ai/hc/en-us/articles/14520423760539-How-to-Build-A-Custom-Report"
updated_at: "2024-01-02T21:56:52Z"
---

# How to Build A Custom Report

### Regal reporting offers the tools to gain deeper insights into your data, tailor your analyses to specific needs, and make more informed decisions with custom reports.

By creating custom reports, you can filter information based on your unique requirements and visualize the results in a way that is useful to you. This article provides the instructions to get you started on the process of creating custom reports with your Regal data. Our goal is to empower you to unlock the full potential of your information and drive your business forward.

If you'd like assistance building or analyzing specific reports, or would like to schedule a training session with our team, please reach out to the team at support@regal.io or through your Customer Success Manager.

---

## Prerequisites:

- Reporting must be enabled for your specific Regal account

If you'd like to unlock Regal reporting, please reach out to the support team [here](https://support.regal.io/hc/en-us/requests/new) or contact your Customer Success Manager.

---

## Instructions:

#### Create A Dashboard to Host Your Report

1. Navigate to the [Regal App](https://app.regalvoice.com/), login, and click on "Reporting" at the bottom left of the screen.

   ![Screenshot_2023-04-13_at_4.50.03_PM.png](https://support.regal.ai/hc/article_attachments/14520608272027)
2. Click on "New Dashboard", and click "Save"
3. Click on "Edit Dashboard" and then "Add" followed by "Visualization"

![Screenshot_2023-04-13_at_4.56.57_PM.png](https://support.regal.ai/hc/article_attachments/14520833303195)

---

#### Start Building Your Custom Report

1. ***Choose an Explore***  
   For this article we selected Tasks. It's best to think about the overall purpose of the visualization you're creating when selecting an explore because many explores share similar (but slightly different) data, such as Agent Activity, Contacts, and Tasks all holding information about tasks. See below for example use case for each explore.

   | **Explore Name** | **When Should You Use This?** | **Example Use Case** |
   | --- | --- | --- |
   | Agent Activity | You should use this when your primary goal is to report on agents and their activity. | You're looking for information about how many outbound call tasks each agent completed and what their average handle time is. |
   | Brand Billable Line Items | You should use this when your primary goal is to report on things you will be billed for. | You're looking for information about the total number of track events sent this month. |
   | Branded Calls | You should use this when your primary goal is to report on the efficacy of branding your phone numbers. | You're looking for information about answer rate by call attempt for a specific phone number. |
   | Branded Calls Monthly | Rarely used. You should use this when you're looking to report on the number of calls that were branded on a specific carrier. | You're looking for information about how many calls were branded on Verizon last month. |
   | Call Transcripts | You should use this when your primary goal is to report on call transcriptions and sentiment analysis. | You're looking for information about which agents are scoring the lowest on their scorecards and which agents are talking more than customers to see if there is an overlap. |
   | Contacts | You should use this when your primary goal is to report on information related to contacts stored in Regal. | You're looking for information about how many contacts created in the last week also have a completed task. |
   | Email Events | You should use this when your primary goal is to report on information related to emails. | You're looking for information about outbound email response rates. |
   | Important Events | You should use this when your primary goal is to report on events you've selected as important. See [glossary of terms](https://support.regal.ai/hc/en-us/articles/21602595155867) for more information about important events. | You're looking for information about the amount of times a certain **important** event was sent to Regal. |
   | Journey Builder Data | You should use this when your primary goal is to report on journeys and their edits. | You're looking to track how many times and by whom a journey was updated. |
   | Journey Executions | You should use this when your primary goal is to report on contacts that have triggered certain journeys. | You're looking for information about when and for which contacts a journey was triggered. |
   | Marketing Treatments | You should use this when your primary goal is to report on the manner in which someone was contacted. | You're looking for information about whether a contact was last contacted via an automated or triggered task. |
   | Messages | You should use this when your primary goal is to report on automated SMS communication. | You're looking for information about reply rates to automated SMS communication or the number of contacts that have received an automated message from a particularly campaign. |
   | Reservations | You should use this when your primary goal is to report on reservations in a way that is more specific than what is available in other explores. | You're looking for information about the exact time a reservation was accepted, canceled, rejected, or rescinded and how long it took it took for that to happen. |
   | Scheduled Callback Requests | You should use this when your primary goal is to report on scheduled callbacks requests (not the completed task, but the actual request made by agents). | You're looking for information about how many scheduled callbacks an agent has requested as well as the number that agent has completed. |
   | Scheduled Callback Tasks | You should use this when your primary goal is to report on scheduled callbacks tasks that have already been created on a granular level. | You're looking for information about what time a scheduled callback was created, completed, and whether a conversation happened. |
   | Scorecard Templates | You should use this when your primary goal is to report on the scorecard templates and the scorecards created with them. | You're looking for information about the average score of a specific template. |
   | Task Lifecycle Events | You should use this when your primary goal is to report on information on [the task lifecycle](https://support.regal.ai/hc/en-us/articles/21219335877147). | You're looking for information about how often agents are snoozing tasks or the total amount of time a task spent in the queue. |
   | Task Tags | You should use this when your primary goal is to report on task tags. | You're looking for information about the total count of tasks with tags or a more granular list of all tags and their content and the tasks those tags were used for. |
   | Tasks | You should use this when your primary goal is to report on task details. | You're looking for information about the amount of tasks an agent has completed or the number of tasks a contact has had created. |
2. ***Choose the metrics to display in your visualization***  
   The example in this article will be "Task Completion & Talk Time" and will show ***the number of tasks completed during a certain timeframe,*** the **channel it was completed on (SMS or Voice)**, and **the aggregated total talk time for the tasks**.

   Metrics or measures are the orange fields in the field picker. All of the fields in black are "dimensions", which is to say data that has various levels to it and can be explored through different measures to provide unique insights. Regal reporting is an instance of the Google Studio/Looker GUI customized with your specific data as its source. Feel free to learn more about **exploring data** through this interface on your own!
3. ***Choose the dimensions***  
   Click the filter icon and also the name of the field "Completed At (ET) - Day of Week" - Or feel free to use the "Business" timestamp for your account's timezone.

   ![Screenshot_2023-04-13_at_5.04.41_PM.png](https://support.regal.ai/hc/article_attachments/14521138168347)
4. ***Run the explore***  
   Next, we added the measure "Total Talk Time (min)" and clicked "Run" to see what it looks like so far.

   ![Screenshot_2023-04-13_at_5.12.49_PM.png](https://support.regal.ai/hc/article_attachments/14521496752539)
5. Next, we added separate the channels for Voice and SMS by selecting "Channel" and the option to pivot data.

   ![Screenshot_2023-04-13_at_5.13.58_PM.png](https://support.regal.ai/hc/article_attachments/14521553232667)
6. Click "Run" again and you'll see that you have the same data, however now it separated by Voice or SMS.

   ![Screenshot_2023-04-13_at_5.14.46_PM.png](https://support.regal.ai/hc/article_attachments/14521557923739)
7. You also have the option to customize the aesthetics of your visualization by clicking "Edit" and "Series" and changing the color palette.

   ![Screenshot_2023-04-13_at_5.18.42_PM.png](https://support.regal.ai/hc/article_attachments/14521697232539)
8. Click "Save" to save your visualization to your new dashboard. Once it is saved you can resize the visualization by clicking and dragging the lower right hand corner.

---

## Adding Filters

Consider filtering your dashboard to select different timeframes, certain agents, or other conditions at the top level and save time editing every single report.

1. Select "Filter" and "Add Filter"

   ![Screenshot_2023-04-13_at_5.23.49_PM.png](https://support.regal.ai/hc/article_attachments/14521823901723)
2. Add the filter "Dynamic Reservation Created At Et"
3. Once the filter is added select "Settings", "Filters", change the filters location to "Right" and click "Save".

   ![Screenshot_2023-04-13_at_5.26.28_PM.png](https://support.regal.ai/hc/article_attachments/14521887059739)
4. Change the filter to the timeframe you want and reload the dashboard.

![Screenshot_2023-04-13_at_5.27.49_PM.png](https://support.regal.ai/hc/article_attachments/14521927615259)

---

For more information about building a report, see [Looker documentation](https://cloud.google.com/looker/docs/viewing-and-interacting-with-explores).