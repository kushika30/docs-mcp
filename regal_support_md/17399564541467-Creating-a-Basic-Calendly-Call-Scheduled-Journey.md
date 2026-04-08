---
id: 17399564541467
title: "Creating a Basic Calendly Call Scheduled Journey"
html_url: "https://support.regal.ai/hc/en-us/articles/17399564541467-Creating-a-Basic-Calendly-Call-Scheduled-Journey"
updated_at: "2023-07-27T16:18:40Z"
---

# Creating a Basic Calendly Call Scheduled Journey

# Things to do beforehand:

- Have your Calendly integration set up beforehand
- A campaign you will use should be created, most customers simply name the campaign they'll use "Scheduled Calendly Call"
- Let your CSM or Implementation manager know you are setting this up, since one of the webhooks required hits the Regal end point and will require your account's API key which is hidden on our backend

# Setting up the journey:

1. Set up the trigger
   1. 'Condition Type': Custom Event
   2. 'Event Name': Calendly Call Scheduled
2. Connect to the action node 'Cancel Task'
   1. 'Select Cancelation Criteria': Task Type
   2. Select 'Outbound Call Tasks'
3. Connect the node cancelling Outbound Tasks to a webhook
   1. Name the webhook "Set Calendly Agent As Contact Attribute"
   2. 'Endpoint URL': <https://events.regalvoice.com/events>
   3. 'Method': POST
      1. 'Custom Headers'
         1. 'Authorization' : [INSERT KEY - reach out to the Regal team]
         2. JSON Payload
            1. ```
               {  
               "traits": {  
               "phone": "{{contact.contactPhone}}",  
               "calendlyAgentEmail": "{{event.properties.calendlyAgentEmail}}"  
               }  
               }
               ```
      2. ![Screenshot 2023-07-25 at 1.13.06 PM.png](https://support.regal.ai/hc/article_attachments/17399564534555)
4. Connect the webhook node to a delay node
   1. 'Delay type': Delay Using Time from Property
   2. 'Delay Until': Triggering Event
   3. 'Select property name': ***properties.scheduledTime***
   4. Select 'Minus' rather than 'Plus' and then set 5 minutes
5. Connect the delay node to a conditional node where we'll check that the Calendly call hasn't been canceled since scheduling it
   1. Name the node "Call Canceled?"
   2. 'Condition Type': Custom Event
   3. 'Event Name': Calendly Call Canceled
      1. Click the plus sign 'Add Property Condition'
      2. 'Select property name': ***properties.calendlyEventId;***
         1. 'Operator': Equals
            1. 'Property Value':
            2. ```
               {{event.properties.calendlyEventId}}
               ```
            3. This checks whether the Canceled event ID matches the original ID scheduled, if they match then the call was canceled
            4. ![Screenshot 2023-07-25 at 1.24.02 PM.png](https://support.regal.ai/hc/article_attachments/17399551874587)
6. Connect from the "No" on the Conditional Node to an Action node "Create Call Task"
   1. Select the campaign that you created, most likely "Scheduled Calendly Call"

What your journey should look like:

![Screenshot 2023-07-25 at 1.26.29 PM.png](https://support.regal.ai/hc/article_attachments/17399539768987)

# Configuring Routing Rules:

To ensure that the booked for the call is the agent that receives the corresponding task, create a new routing step in your Outbound Call Routing Rules.

**Task Expression:**

```
campaignInfo.friendly_id == '(numeric campaign ID)'
```

**Agent Expression:**

```
task.calendlyAgentEmail == worker.email
```

Ensure that your Calendly routing step is placed above `Quiet Hours` routing step, and that you've set the task priority higher than all other outbound call campaign.

Once configured, your routing rule step should look like this:

![CleanShot 2023-07-27 at 12.08.14.png](https://support.regal.ai/hc/article_attachments/17459880856219)

# Next Steps:

Open a [Support Ticket](https://support.regal.io/hc/en-us/requests/new) to have the ***calendlyAgentEmail*** property added as a task routing attribute so it will be added to tasks and referenceable in Routing Rules.

Once you receive confirmation from our Customer Experience team that the attribute has been added, you're good to go!