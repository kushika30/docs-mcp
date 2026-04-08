# Zoho

## Sending data from Zoho to Regal

Regal relies on the Zoho's Webhooks Actions to send data to Regal. You can refer to [Zoho's documentation](https://help.zoho.com/portal/en/kb/crm/automate-business-processes/actions/articles/webhooks-workflow#Set_Up_Webhooks) for additional information and examples.

## Create New Webhook Action

1. Log in to Zoho CRM as an admin. Then, navigate to Set Up > Automation > Actions

![](https://files.readme.io/47657b1-image.png)
  

1. Click on the "Webhooks" tab then click the blue "Configure Webhook" button

   1. Create a new webhook action for each event you want to send in Regal![](https://files.readme.io/600897a-image.png)
2. Configure Webhook Action

   1. Name: <give your webhook action a name (e.g. New Lead Created)>
   2. Description:
   3. Method: POST
   4. URL to Notify: `https://events.regalvoice.com/events`
   5. Authorization Type: General
   6. Module: <select the object where the data will be sent from (e.g. Leads)>
   7. Header:
      1. Module Parameters: N/A
      2. Customer Parameters:
         1. Authorization:
   8. Body:
      1. Type: Raw
      2. Format: JSON
      3. Paste Regal Event JSON
         1. Type "#" to view all the Zoho dynamic fields available
         2. You can find more information on how to format this payload by referencing our [API Docs](https://developer.regal.io/reference/overview)
         3. Example JSON Below
   9. Click "Save"

![](https://files.readme.io/9fbc4e9-CleanShot_2024-07-23_at_13.42.12.png)

## Create New Workflow Rule

Workflow rules are the logic that will trigger the Webhook action we created.

1. Log in to Zoho CRM as an admin. Then, navigate to Set Up > Automation > Workflow Rules
2. Click "Create Rule"

   1. Module: <same module that was set on webhook action (e.g. Leads)>
   2. Rule Name: <name your rule (e.g. Send New Leads)>
   3. Description:![](https://files.readme.io/000710f-CleanShot_2024-07-23_at_13.51.27.png)
3. Click "Next" which will bring you to the canvas
4. Configure Workflow

   1. **WHEN**
      1. Executed this workflow rule based on: Record action
         1. You can choose any option, in this example we want to fire an event when a new Lead is created which is a Record Action (update/created)
      2. Select "Create"
   2. **CONDITION 1**
      1. Which leads would you like to apply the rule to?: All Leads
         1. You can add additional filtering within Zoho to only send a subset of leads, in this example we are not filtering any leads
      2. Click "Next"
   3. **ACTIONS**
      1. Select "Webhook"
      2. Select the webhook you created previously
   4. Click "Save"  
   ![](https://files.readme.io/4998956-CleanShot_2024-07-23_at_13.59.33.png)

> ## 🚧
>
> Test the Workflow to ensure events are being sent to Regal

## API Request Examples:

#### New Lead Created

JSON

```
{
    "userId": "${Leads.Lead Id}",
    "traits": {
        "firstName": "${Leads.First Name}",
        "lastName": "${Leads.Last Name}",
        "leadStatus": "${Leads.Lead Status}",
        "leadSource": "${Leads.Lead Source}",
        "emails": {
            "${Leads.Email}": {
                "emailOptIn": {
                    "subscribed": true
                }
            }
        },
        "phones": {
            "${Leads.Phone}": {
                "isPrimary": true,
                "label": "Main Phone",
                "voiceOptIn": {
                    "subscribed": true
                },
                "smsOptIn": {
                    "subscribed": true
                }
            }
        }
    },
    "name": "New Lead Created",
    "properties": {
        "leadStatus": "${Leads.Lead Status}",
        "leadSource": "${Leads.Lead Source}"
    }
}
```

Updated over 1 year ago

---
