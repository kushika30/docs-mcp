# Zendesk

# DATA IN

## Sending data from Zendesk to Regal

Regal relies on the Zendesk Webhook Action & Business Rule Triggers to send data to Regal. You can refer to [Zendesk developer documentation](https://developer.zendesk.com/documentation/webhooks/) for additional information and examples.

> ## 🚧
>
> You need to be a Zendesk Organization Admin in order to set up the below integration.

# 1. Create New Zendesk Webhook

Navigate to Zendesk Admin Portal & Select "Webhooks", under the "Apps and integrations" section on the left hand bar

![](https://files.readme.io/048b275-zendesk_data_in_02.png)

Click "Create Webhook" in the top right

![](https://files.readme.io/f1c52b0-zendesk_data_in_03.png)

In the Create Webhook Page, under step 1 "Select a way to connect" select "Trigger or automation"

![](https://files.readme.io/ca13639-zendesk_data_in_04.png)

Click "Next" in the bottom right

Add the below under Step 2, "Add details"

- Name your webhook (e.g. Regal New Ticket Event)
- Description is optional
- Endpoint URL: `https://events.regalvoice.com/events`
- Request method: POST
- Request format: JSON
- Authentication: API Key
- Header Name: Authorization
- Value: YOUR API KEY (If you need your API email [[email protected]](/cdn-cgi/l/email-protection#72010702021d000632001715131e5c1b1d) or contact your implementation manager)

![](https://files.readme.io/b4cab3c-zendesk_data_in_05.png)

Click "Create Webhook" and then Click "Finish setup"

Click "Leave without connecting" on the next modal

![](https://files.readme.io/f5c9baf-CleanShot_2024-04-10_at_07.50.452x.png)

# 2) Create Zendesk Business Rule Trigger

Now that you have created the base Regal Webhook, you now need to create a Trigger and Define the Webhook action.

Navigate to Zendesk Admin Portal & Select "Triggers", under the "Objects and rules > Business Rules" section on the left hand bar

Click "Create Trigger" in the top right

![](https://files.readme.io/66dddf1-zendesk_data_in_06.png)

Configure the Trigger

- Trigger name (e.g. Regal Trigger - High Priority Ticket Created)
- Description
- Category: Add new category or add to existing
- Conditions: Specify the AND OR logic that will trigger the event to Regal
  - In this example the Regal event will Trigger when the Zendesk ticket status is changes to "New" and the Requester User Type is "High Priority"
- Actions: Add the Webhook action you created previously by Navigating to "Other > Notify by" the selecting "Active Webhook"

![](https://files.readme.io/059a272-CleanShot_2024-04-10_at_08.02.47.gif)

- Configure JSON Body (example payload below) to match Regal's expected event format. More information can be found in our API docs.
- As you can see in the below example, we are able to add dynamic Zendesk placeholder to include in the event.

![](https://files.readme.io/90d8685-CleanShot_2024-04-10_at_08.21.26.gif)

Click "Create"

Test Trigger & Webhook by performing the defined trigger and see if an event appears in the Regal "Recent Activity" feed.

![](https://files.readme.io/c1fa38e-zendesk_data_in_08.png)

### Event Examples:

If you want to find more Regal examples, please refer to our [API Documentation](https://developer.regal.io/reference/overview).

JSON

```
{
    "traits": {
        "firstName": "{{ticket.requester.first_name}}",
        "lastName": "{{ticket.requester.last_name}}",
        "zendesk_id": "{{ticket.requester.external_id}}",
        "zendesk_ticket_url": "{{ticket.url}}",
        "zendesk_ticket_id": "{{ticket.id}}",
        "zendesk_ticket_assignee_email": "{{ticket.assignee.email}}",
        "phones": {
            "{{ticket.requester.phone}}": {
                "voiceOptIn": {
                    "subscribed": true
                },
                "smsOptIn": {
                    "subscribed": true
                }
            }
        },
        "emails": {
            "{{ticket.requester.email}}": {
                "label": "Zendesk",
                "emailOptIn": {
                    "subscribed": true
                }
            }
        }
    },
    "name": "High Priorty Zendesk Ticket",
    "properties": {
        "zendesk_organization_name": "{{ticket.organization.name}}",
        "zendesk_ticket_tittle": "{{ticket.title}}",
        "zendesk_ticket_url": "{{ticket.url}}",
        "zendesk_ticket_id": "{{ticket.id}}",
        "zendesk_ticket_assignee_email": "{{ticket.assignee.email}}"
    },
    "eventSource": "Zendesk"
}
```

  

# DATA OUT

This section describes how to use Regal as a source for sending your customer profile and event data to Zendesk using Regal Journey Webhooks

## Sending data from Regal to Zendesk

Regal relies on Journey Webhooks to send data to the Zendesk API. You can can find more information on Journey Webhooks in our [knowledge hub](https://support.regal.io/hc/en-us/articles/5725272620187-How-to-Use-Journey-Webhooks).

Please refer to the [Zendesk API Docs](https://developer.zendesk.com/api-reference) to find out all the possible ways to receive data. In this document, we'll be using the [Ticketing API](https://developer.zendesk.com/api-reference/ticketing/introduction/).

## 1) Create New Zendesk API Key

Navigate to Zendesk Admin Portal & Select "Zendesk API", under the "Apps and integrations" section on the left hand bar.

Ensure Token access is enabled

![](https://files.readme.io/96605d8-CleanShot_2024-04-10_at_10.26.382x.png)

Click "Add API token" in the top right

![](https://files.readme.io/83b32f0-zendesk_data_out_01.png)

Name your API Key "Regal"

![](https://files.readme.io/b22fb82-zendesk_data_out_02.png)

Make sure to copy and store the token in a safe place. Zendesk won't show it again after you click Save or leave the page.

Convert API Token to Basic Authorization using Postman

Copy Basic Authorization for use in the Regal Journey Webhook

![](https://files.readme.io/a32a298-CleanShot_2024-04-10_at_11.13.33.gif)

## 2) Create Regal Journey

Navigate to Regal and create a new journey

Name the journey, in this example we'll call it "Zendesk: Regal Scheduled Callback Completed"

Specify the Trigging event for the journey which can be a Custom Event or a Regal Voice Event.

In this example we want to log a ticket in Zendesk when a Regal Scheduled Callback is completed. The trigger will be a Regal Voice Event, `call.completed` within an additional Trigger filter when the Type of task is a "Scheduled Callback".

![](https://files.readme.io/d6f72e8-zendesk_data_out_03.png)

Before you create a ticket in Zendesk using a Journey Webhook, its important we check to see if the Regal Contact's email is set since email is the primary identifier in Zendesk.

![](https://files.readme.io/d523649-CleanShot_2024-04-10_at_11.48.382x.png)

Create Custom Journey Webhook

- Name (e.g. Zendesk: Create Solved Ticket)
- Endpoint URL: `https://www.yoursubdomain.zendesk.com/api/v2/tickets`(e.g. `https://www.regalvoicesupport.zendesk.com/api/v2/tickets`)
- Custom Headers:
  - Authorization: Basic Auth Postman
  - Content-Type: application/json
  - Accept: application/json
  - JSON Payload Example:

json

```
{
    "ticket": {
        "comment": {
            "body": "{{event.properties.reserved_agent_fullname}} called this user in Regal."
        },
        "subject": "Regal Scheduled Call Completed",
        "status": "solved",
        "requester": {
            "email": "{{contact.email}}"
        }
    }
}
```

Updated 11 months ago

---
