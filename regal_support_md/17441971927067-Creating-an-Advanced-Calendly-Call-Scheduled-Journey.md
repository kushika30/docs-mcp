---
id: 17441971927067
title: "Creating an Advanced Calendly Call Scheduled Journey"
html_url: "https://support.regal.ai/hc/en-us/articles/17441971927067-Creating-an-Advanced-Calendly-Call-Scheduled-Journey"
updated_at: "2023-07-27T17:07:00Z"
---

# Creating an Advanced Calendly Call Scheduled Journey

# Things to do beforehand:

- Have your Calendly integration set up beforehand
- A campaign you will use should be created, most customers simply name the campaign they'll use "Scheduled Calendly Call"
- Let your CSM or Implementation manager know you are setting this up, since the webhooks required hit the Regal end point and will require your account's API key which is hidden on our backend
- Will also require a Calendly token
- This journey will help you differentiate between different kinds of Calendly scheduled calls, if you have several kinds
  - The use of "welcome call" and "intro call" are just examples

# Setting up the journey:

1. Set up the trigger
   1. 'Condition Type': Custom Event
   2. 'Event Name': Calendly Call Scheduled
2. Connect the trigger to a webhook
   1. Name the webhook "Get Event Attributes"
   2. 'Endpoint URL':
   3. https://api.calendly.com/scheduled\_events/{{event.properties.calendlyEventId}}
   4. 'Method': GET
      1. 'Custom Headers'
         1. 'Authorization' : [INSERT KEY - Calendly token]
3. Connect the webhook node to a delay node
   1. 'Delay type': Standard
   2. 10 seconds
4. Connect the delay node to a webhook
   1. Name the webhook "Set Event Name as Contact Attribute"
   2. 'Endpoint URL': <https://events.regalvoice.com/events>
   3. 'Method': POST
      1. 'Custom Headers'
         1. 'Authorization' : [INSERT KEY - Regal token]
         2. JSON Payload:
         3. {   
            "traits": {

            "phone": "{{contact.contactPhone}}",

            "calendlyEventName": "{{webhook\_2.resource.name}}"

            }  
            }
         4. Important to note that the number here {{webhook\_2.resource.name}} is a reference to the ID of the node you calling on, in this case the webhook you are referencing was likely created second, which is why it gets the ID 2, but if you follow this out of order you may find that the friendly ID's don't match up - in which case switch out [2] for whatever the friendly ID is
5. Connect the webhook node to a delay node
   1. 'Delay type': Standard
   2. 10 seconds
6. Connect the delay node to a conditional node where we'll check for the Calendly event name
   1. Name the node "Welcome Call?"
   2. 'Condition Type': Contact Attribute
   3. 'Contact Attribute': customProperties.calendlyEventName
      1. 'Operator': Equals
      2. 'Attribute Value': Welcome Call
      3. There will be a YES path and a NO path from this conditional
7. YES PATH - Connect the conditional node to a webhook
   1. Name the webhook "Set Calendly Agent As Contact Attribute"
   2. 'Endpoint URL': <https://events.regalvoice.com/events>
   3. 'Method': POST
      1. 'Custom Headers'
         1. 'Authorization' : [INSERT KEY - Regal token]
         2. JSON Payload:
         3. ```
            {  
            "traits": {  
            "phone": "{{contact.contactPhone}}",  
            "calendlyAgentEmail": "{{event.properties.calendlyAgentEmail}}"  
            }  
            }
            ```
8. Connect the webhook node to a delay node
   1. 'Delay type': Delay Using Time from Property
   2. 'Delay Until': Triggering Event
   3. 'Select property name': ***properties.scheduledTime***
   4. Select 'Minus' rather than 'Plus' and then set 5 minutes
9. Connect the delay node to a conditional node where we'll check that the Calendly call hasn't been canceled since scheduling it
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
10. Connect from the "No" on the Conditional Node to an Action node "Create Call Task"
    1. Select the campaign that you created, most likely "Scheduled Calendly Call"
11. Connect the webhook node to a delay node
    1. 'Delay type': Standard
    2. 30 seconds
12. Connect the delay node to a webhook
    1. Name the webhook "Update Calendly Agent"
    2. 'Endpoint URL': <https://api.rv-apps.io/tasks/update>
    3. 'Method': POST
       1. 'Custom Headers'
          1. 'X-Brand' : [brand slug, check with Regal]
          2. 'Content-Type' : 'application/json'
          3. 'X-Api-Key' : [INSERT KEY - Regal token]
          4. JSON Payload:
          5. ```
             {"contactPhone": "{{contact.contactPhone}}",  
             "campaignId": 65,  
             "update":{  
             "attributes":{  
             "calendlyAgentEmail":"{{event.properties.calendlyAgentEmail}}"  
             }  
             }  
             }
             ```
13. NO PATH - Connect the conditional node to another conditional node where we'll check for the Calendly event name
    1. Name the node "Welcome Call?"
    2. 'Condition Type': Contact Attribute
    3. 'Contact Attribute': customProperties.calendlyEventName
       1. 'Operator': Equals
       2. 'Attribute Value': Intro Call
14. Connect the webhook node to a delay node
    1. 'Delay type': Delay Using Time from Property
    2. 'Delay Until': Triggering Event
    3. 'Select property name': ***properties.scheduledTime***
    4. Select 'Minus' rather than 'Plus' and then set 5 minutes
15. Connect the delay node to a conditional node where we'll check that the Calendly call hasn't been canceled since scheduling it
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
16. Connect from the "No" on the Conditional Node to an Action node "Create Call Task"
    1. Select the campaign that you created, most likely "Scheduled Calendly Call"
17. Connect the webhook node to a delay node
    1. 'Delay type': Standard
    2. 30 seconds
18. Connect the delay node to a webhook
    1. Name the webhook "Update Calendly Agent"
    2. 'Endpoint URL': <https://api.rv-apps.io/tasks/update>
    3. 'Method': POST
       1. 'Custom Headers'
          1. 'X-Brand' : [brand slug, check with Regal]
          2. 'Content-Type' : 'application/json'
          3. 'X-Api-Key' : [INSERT KEY - Regal token]
          4. JSON Payload:
          5. ```
             {"contactPhone": "{{contact.contactPhone}}",  
             "campaignId": 65,  
             "update":{  
             "attributes":{  
             "calendlyAgentEmail":"{{event.properties.calendlyAgentEmail}}"  
             }  
             }  
             }
             ```

What your journey should look like:

![Screenshot 2023-07-27 at 11.58.54 AM.png](https://support.regal.ai/hc/article_attachments/17459482183451)