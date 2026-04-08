---
id: 12815108163483
title: "How to Trigger A Journey"
html_url: "https://support.regal.ai/hc/en-us/articles/12815108163483-How-to-Trigger-A-Journey"
updated_at: "2026-04-08T15:08:53Z"
---

# How to Trigger A Journey

### Every journey must start with a trigger block.

The trigger defines what event qualifies a contact to enter a journey.

Click on the trigger block to activate the trigger form on the right.

There are currently 3 available trigger types:

1. **Custom Event** - these are events that you send to Regal about your customers (e.g., Account Created, Application Started, Payment Made), using whatever data sources you've integrated into Regal (such as Segment, the Regal API, etc.).  
   Events sent to the Regal events endpoint using journey webhooks will also show up here.
2. **Regal Event** - these are events that Regal generates from actions that happen on the Regal platform such as contact.created, contact.subscribed, and call.completed. The complete list of available Regal events and their properties can be found here: <https://developer.regal.io/docs/reporting-webhooks>
3. **Scheduled -** Similar to the previous trigger, except that this triggers a journey at a specific time for a [segment uploaded via csv](https://support.regal.io/hc/en-us/articles/6771680286619-Adding-Updating-Users-Through-a-Manual-CSV-Upload) or via a [dynamic segment](https://support.regal.io/hc/en-us/articles/14987900394523-How-to-create-and-save-a-new-Dynamic-Segment-using-Segment-Builder) rather than immediately at segment creation. See article [here](https://support.regal.io/hc/en-us/articles/12493341501723) on how to create a scheduled trigger.

![Screenshot 2024-06-28 at 10.58.40 AM.png](https://support.regal.ai/hc/article_attachments/26971259715355)

> ### 📘 Event Schema
>
> Regal maintains a schema for each unique event and property, so as you enter an event name, the names of matching previous events will appear. You can also add a new event name as a placeholder if you want to trigger based on an event that hasn't happened yet, but you are expecting to add.
>
> #### Please note that event names are case sensitive.

#### **Additional Trigger Criteria**

- **(Optional) Filter by Event Property Condition** - select "Add Property Condition" to further refine who can enter a Journey using any properties of the triggering event. Restricting trigger to only necessary contacts can improve Journey counter stats accuracy and benefit general performance.

![mceclip0.png](https://support.regal.ai/hc/article_attachments/12882610689179)

- **(Optional) Filter by Contact Attribute Condition** - select "Add Contact Condition" to further refine who can enter a Journey using any available attributes on the contacts. Restricting trigger to only necessary contacts can improve Journey counter stats accuracy and benefit general performance.

![Contact Attribute Trigger Conditions](https://support.regal.ai/hc/article_attachments/14189694383003)

### Filter Generic Events!

Avoid a ballooning counter on your "Finished" Journey stat by limiting the trigger node with contact attributes. For example, if your trigger is call.completed, but this journey only applies to contacts in the . Adding a filter on the contact's funnel stage will ensure that your journey doesn't show a hyper-inflated number for every call that your team completes.

#### **Additional Entrance Limiting Criteria**

- **Limit Simultaneous Entrances** - check this option to prevent a contact from entering a journey if they are already currently in-progress in the journey
- **Limit Lifetime Entrances** - you can set a max number of times that a given contact can enter a journey in their lifetime. Once a contact has entered the journey this number of times, they will no longer qualify for the journey. Leave blank for unlimited entrances.

![Limiting Lifetime Entrances](https://support.regal.ai/hc/article_attachments/14189680181019)