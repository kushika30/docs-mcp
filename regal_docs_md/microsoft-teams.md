# Microsoft Teams

This guide describes how to set up MS Teams notifications when new Regal tasks are created or any other customer action happens through Regal. MS Teams notifications will come into any channel(s) of your choosing.

## Add a New Workflow to MS Teams Channel

**Step 1:** From MS Teams, navigate to the channel you'd like the notifications to deliver to.

**Step 2:** Select the More Options (...) icon in the top-right corner of the channel > select Workflows

![](https://files.readme.io/04930a32dac1a98a723ea0b7ffc7edf893283b07e0a77642b4d5a14664161fa5-image.png)

  

**Step 3:** Select the "Post to a channel when a webhook request is received" workflow listed below **Notify a team**

**Step 4:** Name the workflow for easy reference (e.g. "Regal Notifications"). Your login should automatically verify and create a valid connection for the workflow (indicated by the green checkmark beneath Connections. Select "Next".

![](https://files.readme.io/dcfc815cb4e21398a042d71e85c6c2db5975b9b03be46fa9eb680f4c224fbe3c-image.png)

  

**Step 5:** Select the Team/Channel you'd like to post notifications to. Select "Add workflow".

![](https://files.readme.io/b862918b5dece903a903ceecae1f4a25154b78927bd47ccc4b147bc2b7f05616-image.png)

  

**Step 6:** Copy and save the unique URL generated for the workflow.

![](https://files.readme.io/9f44fac2d9270369241082cdbb9038742171fc0417c6b7341a8d1cb6b8516603-image.png)

  

## Create Regal Journey to Trigger Notifications to MS Teams

**Step 7:** In your Regal account, create a new Journey

- Select the appropriate trigger (for example, the task.created Regal Voice event if you wanted to notify the channel each time a task is generated)
- Configure any custom logic using Conditional nodes - for example you might want to filter out Outbound SMS and Manual Outbound Calls since those are agent-initiated
- Insert a webhook node to trigger the MS Teams workflow:

  - Endpoint URL: copied from step 6
  - Method: POST
  - JSON Payload: Customize the payload pasted below to meet your notification requirements:

    ```
    {
        "type": "message",
        "attachments": [
            {
            "contentType": "application/vnd.microsoft.card.adaptive",
            "content": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "size": "Medium",
                        "weight": "Bolder",
                        "text": "Inbound Call Alert"
                    },
                    {
                        "type": "TextBlock",
                        "text": "Hi <at>{{contact.customProperties.contact_owner_email}}</at>, you have an inbound call from {{contact.contactPhone}}!"
                    }
                ],
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "version": "1.0",
                "msteams": {
                    "width": "Full"
                }
            }
        }]
    }
    ```

> ## 📘
>
> Contact Profile Attributes in Your MS Teams Notifications
>
> This Journey Webhook payload can be configured to include any dynamic contact profile attributes and/or triggering event properties, which can then be referenced inside your MS Teams workflow notification. See the below section for more information.

![](https://files.readme.io/a4345f0275915b5de7cf13cba3f506f99902924386b2d22c09387ad3b1e42d5d-image.png)

  

Any contact trait/attribute or journey-triggering event property can be included in the webhook used to trigger the MS Teams workflow. These fields can be referenced in the message of your workflow to customize the text notification that is pushed to the channel you selected in Step 5.

In the JSON posted above, you can customize the "text" fields in the "body" array. In the example provided the header of the notification is currently set to "Inbound Call Alert" and the body text to "Hi `{{contact.customProperties.contact_owner_email}}</at>`, you have an inbound call from `{{contact.contactPhone}}`!" The agent email is wrapped in the  tags to alert the user in MS Teams of the post. The contact phone record attribute is included as well - both of these fields will dynamically pull the info for the journey trigger/conditions you've configured.

Here is an example of the above notification landing in MS Teams in the "New Leads" channel:

![](https://files.readme.io/89b37c09b4c130944fc0664529034963df6b384f365baee501ef2e814904f3f5-image.png)

Updated about 1 year ago

---
