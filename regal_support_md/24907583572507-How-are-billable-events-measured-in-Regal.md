---
id: 24907583572507
title: "How are billable events measured in Regal?"
html_url: "https://support.regal.ai/hc/en-us/articles/24907583572507-How-are-billable-events-measured-in-Regal"
updated_at: "2024-10-01T14:30:44Z"
---

# How are billable events measured in Regal?

In Regal, billable events are used to measure your usage of the Regal platform, namely Regal's Unified Customer Profiles and Journey Builder.

### What counts toward billable events?

- **Contact Created** - every time a new contact is created in your Regal audience (a contact is defined as someone with a phone and/or email)
- **Contact Updated** - every time a contact's attributes are updated by an event you send to Regal
- **Track Event** - every time you send a custom event to Regal based on your customers' actions (e.g., Lead Created, Email Clicked, Opportunity Updated)
- **Journey Execution** - every time a contact enters a journey due to the journey trigger logic
- **Journey Webhook to External URL** - in a journey, a webhook that is used to send data to an external system

### 

### What does NOT count toward billable events?

- [Reporting Webhook Events](https://developer.regal.io/docs/reporting-webhooks) that Regal produces (e.g., task.created, call.completed, sms.sent)
- Any other data out from Regal via Segment, Snowflake Share, S3, etc.

### 

### What if I make an API call to Regal that includes information which both creates a new contact and adds a track event to their profile?

That counts as 2 billable events -- one Contact Created and one Track Event.

### Do the number of nodes in a Journey impact my billable events.

The number of nodes in a Journey does not impact billable events.

### 

### What if I use a Regal Journey to trigger a journey webhook to post a track event to the Regal events endpoint.

That counts as 2 billable events -- one Journey Execution event and one Track Event. The Journey Webhook event is not a billable event because it was sent to Regal (not an external endpoint).

### 

### How can I monitor my billable events?

In the Reporting tab of the Regal App, there's a dashboard called "Monthly Billable Events" you can use to track your daily and monthly event usage by category.

![Screen Shot 2024-04-16 at 10.18.32 PM.png](https://support.regal.ai/hc/article_attachments/24907787606171)

### 

### How can I manage my billable events?

Here are some common ways to manage your event usage:

1. Don't send unnecessary, high volume track events you have no current or near team use case for in Regal. If you are using Segment or another CDP to send events to Regal, you can filter out unnecessary events from the Segment platform. For example, if you are sending millions of events like "Ad Impression" to Regal that are low intent and you have no use case for those events in Journeys, then that's not a good use of your events, and you should filter those out from sending to Regal.

2. If you use the Salesforce Regal Integration, you can filter to just the object events you need to send to Regal when you configure the integration (e.g., don't send Calendar or Case events if you don't plan to make use of them in Regal, but do send Contact and Opportunity events if you will us those). You can also selectively sync events for only a subset of your Salesforce contacts to Regal based on whatever criteria you define in Salesforce rather than all contacts. For example, if you have multiple teams working out of Salesforce (e.g., B2B team and B2C team), and only the B2C team is using Regal, then you can selectively sync only the B2C leads for Regal. [Learn more about Selective Syncing](https://developer.regal.io/docs/salesforce#selectively-syncing-at-the-record-level)

3. Journey Trigger nodes allow you to add filters to the trigger criteria based on properties of the trigger event or contact attributes to reduce the number of qualifying contacts who enter the journey. For example, if you only want new leads from Facebook to enter a journey:

- **Don't:** set the Trigger node to event = "New Lead" (which would include all new leads regardless of source) and then use a conditional node to check if source = Facebook. Otherwise you will incur a Journey Execution billable event for every lead, rather than just your Facebook leads.
- **Do:** configure the Journey Trigger node itself to trigger if event = "New Lead" AND source = Facebook", that way you incur fewer Journey Execution events. [Learn more about Trigger Node Filters](https://support.regal.io/hc/en-us/articles/12815108163483-How-to-Trigger-A-Journey)

### What are my billable events limits?

There are no limits on the number of billable events you can send to Regal each month; however, your contract specifies how many monthly billable events are included in each monthly platform fee tier. Reach out to your Customer Success Manager, if you're not sure where to find this or want support forecasting your billable events needs.

###