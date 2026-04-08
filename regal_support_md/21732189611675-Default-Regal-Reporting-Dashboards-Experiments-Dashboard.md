---
id: 21732189611675
title: "Default Regal Reporting Dashboards: Experiments Dashboard"
html_url: "https://support.regal.ai/hc/en-us/articles/21732189611675-Default-Regal-Reporting-Dashboards-Experiments-Dashboard"
updated_at: "2024-01-05T15:42:15Z"
---

# Default Regal Reporting Dashboards: Experiments Dashboard

This guide provides an in-depth exploration of the Experiments Dashboard, one of Regal's default reporting dashboards.

This dashboard requires the use of journeys, specifically A/B test nodes. If you don't utilize journeys or haven't created any experiments using A/B test nodes, this dashboard will not show any data.

While potential use cases for these metrics will be shared, it's essential to emphasize that they should be considered alongside other data sources and tailored to specific organizational goals.

Reporting dashboards are updated: Monday-Friday: Hourly from 9am ET to 10pm ET and Saturday-Sunday at 8am, 3pm, 8pm, and 10pm ET.

Click on the tile or filter name below to learn more about that tile.

#### 📘 Reporting License

Reporting Dashboards are provided under a separate per-seat license. Please [submit a ticket](https://support.regal.ai/hc/en-us/requests/new) to sign up for Reporting Dashboards.

# Filters

All default Regal dashboards have filters available for you to refine the data you're viewing. The Experiments Dashboard has the following filters:

![Screenshot 2024-01-03 at 2.31.12 PM.png](https://support.regal.ai/hc/article_attachments/21732209400731)

**Timeframe (ET)**

- Used to filter data within a specified timeframe.
- Defaults to "Last 7 days".

**Select Period**

- Used to show different periods of time (hourly, daily, weekly, etc.) in the various graphs.
- Defaults to "Daily".

**Experiment Name**

- This filter enables you to view data based on specific experiment.
- Defaults to "is any value".
- While using this dashboard it is recommended that you limit the data to one experiment at a time for ease of viewing.

To create and name experiments and variants, use an A/B Test node in a journey.

![Screenshot 2024-01-05 at 10.38.13 AM.png](https://support.regal.ai/hc/article_attachments/21791917888027)

Within the node is where you will name the experiment (using the "Name of Test" field) as well as name the variants. Leave the "Do Not Trigger Experiment Assigned Event" box unchecked unless you do not want to use the experiment in reporting. Learn more [here](https://regalvoice.slab.com/posts/experiment-tracking-in-regal-oli6syal).

![Screenshot 2024-01-05 at 10.40.46 AM.png](https://support.regal.ai/hc/article_attachments/21791917903003)

# Tiles

**Contacts, Conversations & Conversions by Variant**

- ![Screenshot 2024-01-03 at 2.50.45 PM.png](https://support.regal.ai/hc/article_attachments/21732978016283)

- **Type:** Column Chart
- **Function:** This tile displays the total number of contacts in the selected experiment(s), the total number of those contacts that were actually contacted, the number of unique conversations, the number of [conversions](https://support.regal.ai/hc/en-us/articles/21602595155867), the revenue per contact, and the conversion rate, all within the specified time period. All information that is useful in determining how successful an experiment was.

**Conversion Rate, Revenue & Avg. Revenue by Variant**

![Screenshot 2024-01-03 at 2.51.16 PM.png](https://support.regal.ai/hc/article_attachments/21732989938843)

- **Type:** Column Chart
- **Function:** This tile shows the [conversion](https://support.regal.ai/hc/en-us/articles/21602595155867) rate for the selected experiment(s) as well as the total revenue and the revenue per contact. This tile can be useful for determining the better variant of an experiment based on revenue gained from that variant.

**Experiment Performance Detail**

![Screenshot 2024-01-03 at 2.53.08 PM.png](https://support.regal.ai/hc/article_attachments/21733034688539)

- **Type:** Table
- **Function:** This table displays a large amount of detail about the experiment(s) you are looking into. This table is useful in determining how successful an experiment was.

**Users by Variant**

![Screenshot 2024-01-03 at 2.59.12 PM.png](https://support.regal.ai/hc/article_attachments/21733279895579)

- **Type:** Line Graph
- **Function:** This tile shows on the total number of contacts in each variant of the experiment(s) you are looking into. This is useful for understanding the volume of contacts in the variants so you can properly compare the results. Ideally you should have a similar number of contacts in all variants before comparing them.

**% Users by Variant**

![Screenshot 2024-01-04 at 10.31.50 AM.png](https://support.regal.ai/hc/article_attachments/21756512967067)

- **Type:** Stacked Column Chart
- **Function:** This tile shows the percentage of contacts in each variant of an experiment. This is useful for understanding the volume of contacts in the variants so you can properly compare the results. Ideally you should have a similar number of contacts in all variants before comparing them.

**Users Contacted by Variant**

![Screenshot 2024-01-04 at 10.33.52 AM.png](https://support.regal.ai/hc/article_attachments/21757237562907)

- **Type:** Line Graph
- **Function:** This tile shows the actual count of contacts in each variant of an experiment. This is useful for understanding the volume of contacts in the variants so you can properly compare the results. Ideally you should have a similar number of contacts in all variants before comparing them.

**Conversion Rate by Variant**

![Screenshot 2024-01-04 at 10.40.36 AM.png](https://support.regal.ai/hc/article_attachments/21757254393371)

- **Type:** Line Graph
- **Function:** This tile shows the [conversion](https://support.regal.ai/hc/en-us/articles/21602595155867) rate for the selected experiment(s). When used alongside other tiles, this tile can be useful for determining the better variant of an experiment based on revenue gained from that variant.

**Users with a Conversation by Variant**

![Screenshot 2024-01-04 at 10.48.16 AM.png](https://support.regal.ai/hc/article_attachments/21757237581979)

- **Type:** Line Graph
- **Function:** This tile shows the count of [conversations](https://support.regal.ai/hc/en-us/articles/21602595155867) that occurred with contacts in the selected experiment(s). When used alongside other tiles, this tile can be useful for determining the better variant of an experiment based on revenue gained from that variant.

**Conversions by Variant**

![Screenshot 2024-01-04 at 10.42.38 AM.png](https://support.regal.ai/hc/article_attachments/21757254407579)

- **Type:** Line Graph
- **Function:** This tile shows the count of [conversions](https://support.regal.ai/hc/en-us/articles/21602595155867) for the selected experiment(s). When used alongside other tiles, this tile can be useful for determining the better variant of an experiment based on revenue gained from that variant.

**Revenue by Variant**

![Screenshot 2024-01-04 at 10.50.22 AM.png](https://support.regal.ai/hc/article_attachments/21757237595803)

- **Type:** Line Graph
- **Function:** This tile displays the total amount of revenue gained for each variant within the selected experiment(s) within the specified time period. When used alongside other tiles, this tile can be useful for determining the better variant of an experiment based on revenue gained from that variant.

**Revenue per User by Variant**

![Screenshot 2024-01-04 at 10.52.05 AM.png](https://support.regal.ai/hc/article_attachments/21757254421531)

- **Type:** Line Graph
- **Function:** This tile displays the amount of revenue per contact gained for each variant within the selected experiment(s) within the specified time period. When used alongside other tiles, this tile can be useful for determining the better variant of an experiment based on revenue gained from that variant.