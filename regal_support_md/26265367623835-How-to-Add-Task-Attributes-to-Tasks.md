---
id: 26265367623835
title: "How to Add Task Attributes to Tasks"
html_url: "https://support.regal.ai/hc/en-us/articles/26265367623835-How-to-Add-Task-Attributes-to-Tasks"
updated_at: "2024-07-11T20:27:35Z"
---

# How to Add Task Attributes to Tasks

## What do task attributes do?

- Task attributes are attributes available on individual tasks, which are primarily used in routing rules to target specific tasks.
  - There are a set of default task attributes added by Regal, depending on task types. For example, for Journey triggered call tasks, the campaign info and journey info are automatically added to tasks. However, most custom contact information that may be necessary in routing are **not** automatically added to tasks upon creation.
  - Using this feature, you can add additional custom attributes that pull values from contact attributes, so that you can reference tasks based on a set of attributes on the contacts themselves.
- Here is a simple [use case](#h_01HZFGAV4X6GFQYMPWZBEJ66DK) of how custom attributes can be used in routing rules. For more information on how to configure Routing Rules and where task attributes can be referenced, [see this doc](https://support.regal.io/hc/en-us/articles/12181758397723-How-to-Configure-Task-Routing-Rules).

## How to add custom task attributes to all tasks?

- Admins can add custom Task Attributes directly in-app by visiting the **Task Attributes** tab under **Settings** > **Routing Rules**. Here, you can add additional task attributes by mapping values from contact attributes. You can "map" to task attributes from a contact's top level fields such as "firstName", custom properties such as "customProperties.lifecycleStage", or rvProperties such as "rvProperties.timezone".

![](https://support.regal.ai/hc/article_attachments/26265395377819)

- By selecting Edit Task Attributes, you can now map new task attributes or edit/delete previously mapped attributes. Hit Save Attributes after all edits are complete. **A max of 25 custom task attributes can be added on this page.**

**Tip:** When you map a custom property (e.g. custom profile page, inbound call script link) to the task attribute "OpenUrl", that URL will auto-open in a new tab when agents accept each task. To restrict this functionality to certain task types, reach out to your Customer Success Manager.

![](https://support.regal.ai/hc/article_attachments/26265367596443)

**Note:** make sure to update Routing Rules so that deleted/updated attributes are not referenced in Task Expressions. Failure to do so may cause tasks to be incorrectly routed. Newly added attributes will also need to be added to relevant expressions in order to impact task routing. For more info [see this doc.](https://support.regal.io/hc/en-us/articles/12181758397723-How-to-Configure-Task-Routing-Rules)

![](https://support.regal.ai/hc/article_attachments/26265367601307)

## How to add additional task attributes to inbound calls from the IVR?

- In Send to Agents node in [IVR](https://support.regal.io/hc/en-us/articles/23151204496283-How-to-Configure-IVR-in-Regal), admins can add additional attributes to inbound call tasks. Both static values and dynamic values can be added.
  - For dynamic values, admins can choose to reference the caller keypress values from a Gather Input node in the IVR.
- Task attributes added in IVR will be added in addition to other task attributes configured in settings page above.

![](https://support.regal.ai/hc/article_attachments/27326175373851)   ![](https://support.regal.ai/hc/article_attachments/27326175377819)

## Where are custom tasks attributes added?

- Mapped attributes are added to ALL tasks upon task creation, regardless of direction and task types. This includes IB/OB SMS, IB/OB Calls, IB/OB Emails, and Custom Tasks. You can observe the added attributes on the Tasks page by clicking on the task:

![](https://support.regal.ai/hc/article_attachments/26265395391259)

- If available, the value of of the contact attributes will be added to task attributes on task creation. **Note**: If a selected contact attribute is null or missing on the contact, the mapped task attribute will not be generated on tasks.

## Example Use Case

**Contact Attribute: rvProperties.last\_handling\_agent**

As one of the default rvProperties, last handling agent of a call with the customer is automatically captured in this field.

**Use Case:** hypothetically, you may want to always route any call or sms from a contact to the last handling agent on that contact, since that agent will likely have the most context. To achieve that, you will need to route tasks to the agents who last handled the contact.

- This can be done by mapping that rvProperty on the contact to a task attribute, so that it can be referenced in Routing Rules. We recommend naming the task attribute in a clear and understandable way as such:

![](https://support.regal.ai/hc/article_attachments/26301907697051)

- Now, any tasks from contacts with rvProperties.last\_handling\_agent field filled out, the task attribute lastHandlingAgent will populate with the associated agent email value.
- Then, I can update routing rules for OB calls to below, so that any OB call task to contacts with a last handling agent will be first reserved for that agent for 10 minutes before it's routed to other agents in the queue. For more information on how to configure Routing Rules, [see this doc](https://support.regal.io/hc/en-us/articles/12181758397723-How-to-Configure-Task-Routing-Rules).

![](https://support.regal.ai/hc/article_attachments/26265683974939)