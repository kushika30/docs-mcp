# Snowflake Data Share

# Setting Up Snowflake Secure Data Share

Regal provides access to your Regal reporting data via Snowflake Secure Data Share, so you can view and query Regal's reporting tables directly from your Snowflake database.

> ## 🚧
>
> Prerequisites
>
> To get access to reporting data via Regal's Snowflake Secure Data Share, you must be a Snowflake customer and use AWS as your cloud provider.

> ## 📘
>
> What is Snowflake Data Share?
>
> Snowflake enables the sharing of databases through shares, which are created by data providers (Regal, in this case) and “imported” by data consumers (You). All database objects shared between accounts are read-only (i.e. the objects cannot be modified or deleted, including adding or modifying table data).
>
> With Secure Data Sharing, no actual data is copied or transferred between accounts. All sharing uses Snowflake’s services layer and metadata store. Shared data does not take up any storage in a consumer account and therefore does not contribute to the consumer’s monthly data storage charges. The only charges to consumers are for the compute resources (i.e. virtual warehouses) used to query the shared data.
>
> Because no data is copied or exchanged, Secure Data Sharing setup is quick and easy for providers and access to the shared data is near-instantaneous for consumers.

To get started with Regal Reporting through Snowflake Secure Data Share, please email [[email protected]](/cdn-cgi/l/email-protection#20535550504f525460524547414c0e494f) with the following information:

1. Your Snowflake account and org names. These are Snowflakes “preferred identifiers”. See docs [here](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization).
2. Which cloud provider and region your Snowflake account is on. **Note: Regal currently supports AWS us-east-1, us-east-2 and us-west-2. Please double check this before providing to us because it will significantly delay set up time if we need to switch after the fact.**
3. Which data tables you want to access.

Available tables listed below:

| Table | Description |
| --- | --- |
| aggregated\_contacts | Single record for every contact in your account - columns include identifying information, opt in, contact attributes, etc. |
| aggregated\_tasks | Single record for every task in your account - columns contain information about the task's lifecycle, disposition, notes, recording, etc. |
| model\_agent\_activity\_event | Single record for every activity status change of an agent - columns include previous status to calculate total time in each activity status. |
| model\_regal\_voice\_event | Single record for every reporting event out of Regal. Reporting events and schema are documented [here](https://developer.regal.io/docs/reporting-webhooks#events) |

> ## 📘
>
> Data Policy
>
> Tables are updated hourly from 7am to 11pm ET. We retain the last 18 months of data.

Additional tables available upon request:

| Table | Description |
| --- | --- |
| Agent Activity | Single record for each Agent activity period with columns like agent\_email, activity\_name, and start and end timestamps. |
| Reservations | Single record for each task reservation (reservation = when a task is offered to an agent) |
| User Rollup | Single record for each contact that includes activity metrics (“we know what the user has done”) |
| Scheduled Callback Requests | Single record for each scheduled callback requested joined to the scheduled callback task created from that request |
| Messages | Unique record for each SMS sent or received with columns like direction, automated vs. manual, the number the sms is sent from and to, the content of the message, and the associated campaign (if applicable) |
| Experiment Assignments | Record for each assignment (i.e, when a contact passes through an experiment node, what variant they were assigned to) |
| Important Events | Subset of customer events you've sent to Regal that you want to view in Regal Reporting |

  
> ## 📘
>
> Custom Requests
>
> Don't see a table you need? Reach out to [[email protected]](/cdn-cgi/l/email-protection#b0c3c5c0c0dfc2c4f0c2d5d7d1dc9ed9df)

Once we have this information, we will create the share and notify you when it is ready.

After, you'll need to configure your side of the share. The exact steps will depend on your account configuration, what you use to manage Snowflake, etc. but the Snowflake docs [here](https://docs.snowflake.com/en/user-guide/data-share-consumers) are a good place to start.

If your Snowflake instance is in a different AWS region than what Regal current supports or have any other questions about setting up Snowflake Secure Data Share set up, email [[email protected]](/cdn-cgi/l/email-protection#d1a2a4a1a1bea3a591a3b4b6b0bdffb8be).

Updated over 1 year ago

---
