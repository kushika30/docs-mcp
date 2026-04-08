---
id: 34017237459227
title: "Understanding Reporting Data in Regal: Event Data, Live Intraday Metrics, and Historical Reporting"
html_url: "https://support.regal.ai/hc/en-us/articles/34017237459227-Understanding-Reporting-Data-in-Regal-Event-Data-Live-Intraday-Metrics-and-Historical-Reporting"
updated_at: "2025-02-14T04:12:25Z"
---

# Understanding Reporting Data in Regal: Event Data, Live Intraday Metrics, and Historical Reporting

Regal provides multiple ways for customers to access reporting data, catering to different needs—from real-time monitoring to deep data analysis. This article explains the three main types of reporting data available in Regal, who they are best for, and how you can access them.

![data pipeline.png](https://support.regal.ai/hc/article_attachments/34019858675227)

## **1. Real-Time Reporting Events via Webhooks**

For businesses that require real-time event tracking, **Regal provides webhooks that push reporting events instantly** to a custom endpoint you provide, whenever a contact or agent action tracked by Regal occurs. *These are the same events that Regal builds our the live in-app metrics from (e.g., Regal LIVE, Agents, Queues) and the reporting tables off of.*

### **How It Works:**

- Webhooks deliver **raw event data** (not pre-aggregated tables or metrics).
- Webhooks are triggered **in real-time** for every customer interaction (e.g., contact created, call placed, call completed, sms received, agent changes activity status). See our [Reporting Webhooks developer docs](https://developer.regal.ai/docs/reporting-webhooks) for full list of events.
- Webhooks can be **integrated with downstream systems to trigger automated workflows** like:
  - CRMs (e.g., Salesforce, HubSpot)
  - Email marketing tools (e.g., Braze, Iterable)
  - Other automation platforms
- This event data can also be used by **data teams to construct custom data tables and metrics** based on business needs.

**Use Case:** If a business needs to **update internal CRM records the moment an SMS is sent or a call is completed**, webhooks allow for instant updates without delay.

## **2. Live Metrics for Intraday Monitoring**

Live data provides a real-time subset of predefined metrics designed for contact center managers who need **immediate visibility into intraday operations**. This data is updated continuously throughout the day and can be accessed via the following pages in the Regal app:

### **Regal Live**

- Provides a **live overview dashboard** showing **today's** key operational metrics on a 10-second delay.
- Best for **monitoring overall system throughput and efficiency** such as task volumes, abandon rate, % new leads contacted, dispositions at a glance.

### **Agents Page**

- Displays **live agent activity by agent**, including time in current status, current reservations and active tasks, and completed tasks on a 10-second delay.
- Useful for **managers tracking workforce efficiency** throughout the day.

### **Queues Page**

- Shows **live queue statistics**, including queue volumes, wait times, and completed tasks on a 10-second delay.
- Helps teams **manage task distribution and workload balancing** in real-time.

**Use Case:** If a manager wants to **monitor live agent activity** and **queue congestion**, these pages offer the necessary insights for making immediate operational adjustments.

## **3. Aggregated Reporting Data for Comprehensive Analytics**

For deeper analysis and historical reporting, Regal provides access to **aggregated data tables and metrics** through multiple channels. *This data is processed hourly, and takes ~1 hour to construct the full set of tables, so at any given time when you check this data, you should expect it to be 1-2 hours delayed.*

### **Available In-App (Looker BI Tool)**

- In the "Reporting" tab, Regal offers a **fully integrated BI tool powered by Looker** for in-depth data visualization and analysis.
- Regal provides a default set of dashboards and customers can **create custom dasbboards, analyze trends, and export data** for further insights.
- No SQL expertise is required—everything is available through a drag and drop interface to filter, pivot, graph data.

### **Available via Snowflake Data Share (On Request)**

- Regal customers using **Snowflake** can request **direct access** to Regal's reporting data via a **Snowflake data share**.
- This method allows for **directly SQL querying** and seamless integration with existing Snowflake datasets, and is ideal for teams who want to build their own reporting off Regal data and visualize it in their own internal BI tool, but don't want to construct data tables from raw events.
- See our [Snowflake share developer docs](https://developer.regal.ai/docs/snowflake-data-share) for the default set of tables available for Snowflake data shares, however, most tables available in In-App Reporting (Looker) can be made available upon request.

### **Available via Amazon S3 Buckets (On Request)**

- For businesses that want to directly query Regal reporting data, **but don't have Snowflake as their database**, Regal can provide reporting tables in **S3 buckets on a scheduled basis once per day.**View our [Amazon S3 developer docs](https://developer.regal.ai/docs/amazon-s3).
- This is ideal for teams who want to build their own reporting off Regal data and visualize it in their own internal BI tool, but don't want to construct data tables from raw events and don't Snowflake as their database.

**Use Case:** If a data team wants to **run custom SQL queries on historical Regal data**, they can use **Snowflake** or **export reports via S3 buckets** for further analysis in their preferred BI tool.

## **Summary**

| **Reporting Type** | **Best For** | **Direct Consumer** | **Access** | **Refresh Rate** |
| --- | --- | --- | --- | --- |
| **Live Data** | Live intraday performance monitoring | Line Manager | Regal Live, Agents Page, Queues Page | Every 10 Seconds |
| **Webhooks** | Real-time event tracking and CRM updates | Developer | Reporting Webhooks subscription | Instant |
| **Aggregated Data** | Historical analysis and custom reporting | Data Analyst/Data Engineer | Looker BI Tool, Snowflake Data Share (on request), S3 Buckets (on request) | Snowflake/In app Reporting (Looker) - Hourly  S3 Buckets - Once per day |

## **How to Get Started**

- **Live Data**: Available immediately via the **Regal app** under **Regal Live, Agents, and Queues pages**.
- **Webhooks**: Your software engineers can add an endpoint in the Regal app **(Settings > Integrations > Reporting Webhooks)** to set up a webhook subscription, and check our [developer docs](https://developer.regal.ai/docs/reporting-webhooks) to understand what each event and property means.
- **Aggregated Data (Looker, Snowflake, S3)**: If you don't already have access, reach out to your Customer Support Manger to purchase reporting seats for access to In-app Reporting (Looker). For Snowflake or S3, have you data team reach out to [support@regal.ai](mailto:support@regal.ai) and review our [Snowflake data share developer docs](https://developer.regal.ai/docs/snowflake-data-share) or [S3 developer docs](https://developer.regal.ai/docs/amazon-s3) to understand what credentials they need to provide.

By leveraging these reporting options, Regal customers can **track real-time performance, integrate event-driven data, and analyze historical trends**—ensuring they make data-driven decisions at every stage.