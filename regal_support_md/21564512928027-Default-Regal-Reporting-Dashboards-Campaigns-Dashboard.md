---
id: 21564512928027
title: "Default Regal Reporting Dashboards: Campaigns Dashboard"
html_url: "https://support.regal.ai/hc/en-us/articles/21564512928027-Default-Regal-Reporting-Dashboards-Campaigns-Dashboard"
updated_at: "2024-01-23T21:56:16Z"
---

# Default Regal Reporting Dashboards: Campaigns Dashboard

This guide provides an in-depth exploration of the Campaigns Dashboard, one of Regal's default reporting dashboards.

While potential use cases for these metrics will be shared, it's essential to emphasize that they should be considered alongside other data sources and tailored to specific organizational goals.

Reporting dashboards are updated: Monday-Friday: Hourly from 9am ET to 10pm ET and Saturday-Sunday at 8am, 3pm, 8pm, and 10pm ET.

Click on the tile or filter name below to learn more about that tile.

#### 📘 Reporting License

Reporting Dashboards are provided under a separate per-seat license. Please [submit a ticket](https://support.regal.ai/hc/en-us/requests/new) to sign up for Reporting Dashboards.

# Filters

All default Regal dashboards have filters available for you to refine the data you're viewing. The Campaigns Dashboard has the following filters:

![Screenshot 2023-12-27 at 1.07.00 PM.png](https://support.regal.ai/hc/article_attachments/21564846511003)

**Select Timeframe (ET)**

- Used to filter data within a specified timeframe.
- Defaults to "is in the last 7 days".

**Select Period**

- Used to show different periods of time (hourly, daily, weekly, etc.) in the various graphs.
- Defaults to "Daily".

**Day of Week**

- This filter enables you to view data based on specific days of the week.
- Defaults to "is any value".

**Hour of Day (EST)**

- This filter enables you to view data based on specific hours of the day.
- Defaults to "is any value".

**Call Campaign ID**

- Used to filter by tasks created within a specific call campaign. You can find the friendly ID for all campaigns on the campaigns page in the ID# column (first column on the left when you look at the Campaigns page).
- Defaults to "is not null".

**SMS Campaign ID**

- Used to filter by tasks created within a specific SMS campaign. You can find the friendly ID for all campaigns on the campaigns page in the ID# column (first column on the left when you look at the Campaigns page).
- Defaults to "is not null".

**Task Created Queue Name**

- This filter allows you to filter data by the queue the task was created in.
- Defaults to "any value".

**Task Completed Queue Name**

- This filter allows you to filter data by the queue the task was [completed](https://support.regal.io/hc/en-us/articles/21602595155867-Glossary-of-Regal-Reporting-Terms) in.
- Defaults to "any value".

# Tiles

**Call Campaign Tasks Created**

![Screenshot 2023-12-27 at 1.22.26 PM.png](https://support.regal.ai/hc/article_attachments/21565611146907)

- **Type:** Numeric Display
- **Function:** This tile tracks the total number of triggered outbound call tasks created by journeys during the selected timeframe. When used alongside other tiles, this can be useful for evaluating the reach of your services as well as the efficiency of your agents.

**Call Campaign Tasks Completed**

![Screenshot 2023-12-27 at 1.24.40 PM.png](https://support.regal.ai/hc/article_attachments/21565611160219)

- **Type:** Numeric Display
- **Function:** This tile displays the total number of triggered outbound call tasks [completed](https://support.regal.io/hc/en-us/articles/21602595155867-Glossary-of-Regal-Reporting-Terms) by agents during the selected timeframe. When used alongside other tiles, this can be useful for evaluating the reach of your services as well as the efficiency of your agents.

**Automated SMS Sent**

![Screenshot 2023-12-27 at 1.25.42 PM.png](https://support.regal.ai/hc/article_attachments/21565611168155)

- **Type:** Numeric Display
- **Function:** This tile tracks the total number of automated outbound SMS sent to contacts by journeys during the selected timeframe. When used alongside other tiles, this can be useful for evaluating the reach of your services.

**SMS Response Rate**

![Screenshot 2023-12-27 at 1.27.35 PM.png](https://support.regal.ai/hc/article_attachments/21565627317531)

- **Type:** Numeric Display
- **Function:** This tile tracks the percentage of automated outbound SMS sent to contacts by journeys that received a response during the selected timeframe. When used alongside other tiles, this can be useful for evaluating the reach of your services as well as the efficacy of your outbound communication.

**Unsubscribe Rate**

![Screenshot 2023-12-27 at 1.28.03 PM.png](https://support.regal.ai/hc/article_attachments/21565611221787)

- **Type:** Numeric Display
- **Function:** This tile displays the percentage of contacts that have unsubscribed via SMS during the selected time period. This is tracked by looking for stop words in incoming messages. Stop words include: Stop, unsubscribe, end, quit, cancel, and stopall. This is useful for evaluating the efficacy of your outbound communication.

**Call Campaign Tasks Created**

![Screenshot 2023-12-27 at 1.31.35 PM.png](https://support.regal.ai/hc/article_attachments/21565957681307)

- **Type:** Stacked Column Chart
- **Function:** This tile tracks the total number of [triggered outbound call](https://support.regal.io/hc/en-us/articles/21602595155867) tasks created by journeys during the selected timeframe, broken down by campaign. When used alongside other tiles, this can be useful for evaluating the reach of your services as well as the efficiency of your agents.

**Call Campaign Task Completion Rate**

![Screenshot 2023-12-27 at 1.35.09 PM.png](https://support.regal.ai/hc/article_attachments/21565957703579)

- **Type:** Line Graph
- **Function:** This tile displays the total number of triggered outbound call tasks [completed](https://support.regal.io/hc/en-us/articles/21602595155867) by agents over time. When used alongside other tiles, this can be useful for evaluating the reach of your services as well as the efficiency of your agents.

**Call Campaign Task Answer Rate**

![Screenshot 2023-12-27 at 1.36.38 PM.png](https://support.regal.ai/hc/article_attachments/21565957711131)

- **Type:** Line Graph
- **Function:** This tile displays the percentage of triggered outbound call tasks where an agent had a conversation with a contact. When used alongside other tiles, this can be useful for evaluating the effectiveness of your outreach strategies. A high answer rate suggests that the timing, frequency, and method of outreach are well-received by customers.

**Automated SMS Messages Sent**

![Screenshot 2023-12-27 at 1.42.10 PM.png](https://support.regal.ai/hc/article_attachments/21566034093467)

- **Type:** Stacked Column Chart
- **Function:** This tile tracks the total number of automated SMS messages sent by journeys during the selected timeframe, broken down by campaign. When used alongside other tiles, this can be useful for evaluating the reach of your services.

**Response Rate**

![Screenshot 2023-12-27 at 1.43.32 PM.png](https://support.regal.ai/hc/article_attachments/21566192318619)

- **Type:** Line Graph
- **Function:** This tile tracks the percentage of automated outbound SMS sent to contacts by journeys that received a response over time. When used alongside other tiles, this can be useful for evaluating the reach of your services as well as the efficacy of your outbound communication.

**Unsubscribe Rate**

![Screenshot 2023-12-27 at 1.44.46 PM.png](https://support.regal.ai/hc/article_attachments/21566192339739)

- **Type:** Line Graph
- **Function:** This tile displays the percentage of contacts that have unsubscribed via SMS over time. This is tracked by looking for stop words in incoming messages. Stop words include: Stop, unsubscribe, end, quit, cancel, and stopall. This is useful for evaluating the efficacy of your outbound communication.

**Call Campaign Performance**

![Screenshot 2023-12-27 at 1.47.04 PM.png](https://support.regal.ai/hc/article_attachments/21566213457947)

- **Type:** Table
- **Function:** This tile offers an extensive view of metrics related to call campaigns, providing an analysis of the efficacy of your call campaigns. Make sure to scroll to the right on this table to see all available metrics.

| Metric | Description |
| --- | --- |
| Campaign Friendly ID | The friendly ID of the campaign. You can find the friendly ID for all campaigns on the campaigns page in the ID# column (first column on the left when you look at the Campaigns page). |
| Campaign Name | The name of the campaign. |
| Tasks | Tracks the number of tasks that were created for the specific campaign. |
| Completed Tasks | Tracks the number of tasks that were [completed](https://support.regal.io/hc/en-us/articles/21602595155867) for the specific campaign. |
| Total Conversations | Shows the count of completed call tasks where an agent had a [conversation](https://support.regal.io/hc/en-us/articles/21602595155867) with the contact. |
| Completion Rate | Shows the percentage of tasks that have been completed |
| Answer Rate | Shows the percentage of tasks that were completed where the agent had a conversation with the contact. |
| Attributed Conversions | Shows the count of conversions that are attributed to this campaign. |
| CVR | Stands for [conversion](https://support.regal.io/hc/en-us/articles/21602595155867) rate. Shows the percentage of calls in this campaign that are attributed to a conversion. |
| Campaign Specific Goal | The name of the [campaign-specific goals](https://support.regal.io/hc/en-us/articles/21602595155867) for this campaign. |
| Count of Campaign Goals | A count of the campaign-specific conversion events that have been registered with Regal. If this count is zero and you would like to register any campaign specific goals, please submit a ticket [here](https://support.regal.io/hc/en-us/requests/new). |
| Campaign Goal CVR | Shows the percentage of calls in this campaign that are attributed to a campaign-specific conversion. |
| Count of Progressive Dialer Tasks Completed | A count of completed progressive dialer tasks |
| Count of Abandoned Tasks | The number of tasks that were automatically accepted by progressive dialer, and subsequently abandoned. Defined as any call that is a a progressive dial call, with an abandoned disposition. |
| Progressive Dialer Abandon Rate | The count of progressive dialer tasks that were automated and subsequently abandoned, divided by the total number of progressive dialer calls. |

**SMS Campaign Performance**

![Screenshot 2023-12-27 at 1.57.20 PM.png](https://support.regal.ai/hc/article_attachments/21566614521115)

- **Type:** Table
- **Function:** This tile offers an extensive view of metrics related to SMS campaigns, providing an analysis of the efficacy of your automated SMS outreach. Make sure to scroll to the right on this table to see all available metrics.

| Metric | Description |
| --- | --- |
| Campaign Friendly ID | The friendly ID of the campaign. You can find the friendly ID for all campaigns on the campaigns page in the ID# column (first column on the left when you look at the Campaigns page). |
| Campaign Name | The name of the campaign. |
| Unique Contacts Messaged | Tracks the number of number of unique contacts that were messaged for the specific campaign. |
| Unique Contacts Responded | Tracks the number of number of unique contacts that responded to  messages for the specific campaign. |
| Number of Inbound Messages | Shows the count of inbound SMS tasks that are attributed to a response for this campaign. |
| Response Rate | Shows the percentage of automated SMS messages that were responded to. |
| Attributed Conversions | Shows the count of [conversions](https://support.regal.io/hc/en-us/articles/21602595155867) that are attributed to this campaign. |
| CVR | Stands for conversion rate. Shows the percentage of messages in this campaign that are attributed to a conversion. |
| Campaign Specific Goal | The name of the [campaign-specific goals](https://support.regal.io/hc/en-us/articles/21602595155867) for this campaign. |
| Count of Campaign Goals | A count of the campaign-specific conversion events that have been registered with Regal. If this count is zero and you would like to register any campaign specific goals, please submit a ticket [here](https://support.regal.io/hc/en-us/requests/new). |
| Campaign Goal CVR | Shows the percentage of messages in this campaign that are attributed to a campaign-specific conversion. |

**(Progressive Dialer) Calls Completed**

![Screenshot 2024-01-23 at 4.49.40 PM.png](https://support.regal.ai/hc/article_attachments/22317481301403)

- **Type:** Numeric Display
- **Function:** This tile tracks the total number of progressive dialer call tasks that were completed during the selected timeframe. When used alongside other tiles, this can be useful for evaluating the reach of your services as well as the efficiency of your agents and the usefulness of progressive dialer.

**(Progressive Dialer) Abandoned Calls**

![Screenshot 2024-01-23 at 4.49.50 PM.png](https://support.regal.ai/hc/article_attachments/22317420227099)

- **Type:** Numeric Display
- **Function:** The number of tasks that were automatically accepted by progressive dialer, and subsequently abandoned. Defined as any call that is a a progressive dial call, with an abandoned disposition. When used alongside other tiles, this can be useful for evaluating the efficiency of using progressive dialer.

**(Progressive Dialer) Abandon Rate**

![Screenshot 2024-01-23 at 4.50.25 PM.png](https://support.regal.ai/hc/article_attachments/22317420241179)

- **Type:** Numeric Display
- **Function:** The percentage of tasks that were automatically accepted by progressive dialer, and subsequently abandoned. Defined as any call that is a a progressive dial call, with an abandoned disposition. When used alongside other tiles, this can be useful for evaluating the efficiency of using progressive dialer.

**(Progressive Dialer) Abandon Rate Last 30 Days**

![Screenshot 2024-01-23 at 4.50.10 PM.png](https://support.regal.ai/hc/article_attachments/22317481354139)

- **Type:** Numeric Display
- **Function:** The percentage of tasks that were automatically accepted by progressive dialer, and subsequently abandoned during the last 30 days. Defined as any call that is a a progressive dial call, with an abandoned disposition. When used alongside other tiles, this can be useful for evaluating the efficiency of using progressive dialer.

**(Progressive Dialer) Calls Completed**

![Screenshot 2024-01-23 at 4.50.48 PM.png](https://support.regal.ai/hc/article_attachments/22317481369243)

- **Type:** Stacked Column Chart
- **Function:** This tile tracks the total number of progressive dialer call tasks that were completed during the selected timeframe. When used alongside other tiles, this can be useful for evaluating the reach of your services as well as the efficiency of your agents and the usefulness of progressive dialer.

**(Progressive Dialer) Agent Completion Rate**

![Screenshot 2024-01-23 at 4.51.04 PM.png](https://support.regal.ai/hc/article_attachments/22317420283547)

- **Type:** Line Graph
- **Function:** This tile shows the percentage of progressive dialer call tasks that had a handling agent and were also completed during the selected timeframe. When used alongside other tiles, this can be useful for evaluating the reach of your services as well as the efficiency of your agents and the usefulness of progressive dialer.