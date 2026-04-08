---
id: 23966150527259
title: "How to Dynamically Reference the First Name of the Last Handling Agent in Campaigns"
html_url: "https://support.regal.ai/hc/en-us/articles/23966150527259-How-to-Dynamically-Reference-the-First-Name-of-the-Last-Handling-Agent-in-Campaigns"
updated_at: "2024-03-19T15:07:35Z"
---

# How to Dynamically Reference the First Name of the Last Handling Agent in Campaigns

Incorporating the first name of the agent who last interacted with a contact into SMS copy can enhance the personalization of the message and help the recipient recognize that they are communicating with the same agent from their previous conversation.

# Step 1: Journey

To dynamically reference the first name of the last handling agent, the first step is to set up a journey that will write that information to a custom property on the contact's profile.

1. Start by creating a new journey (don't forget to name it, write a description, and add any relevant tags!)
2. The trigger of the journey should be call.completed
3. Next, add a webhook:  
   - Name: Add Last Handling Agent First Name to Custom Properties
   - Endpoint URL: <https://events.regalvoice.com/events>
   - Method: POST
   - Custom Headers:
     - Authorization : [Your API Key]
   - JSON Payload:

```
{  
   "traits": {  
      "phone": "{{contact.contactPhone}}",  
      "lastHandlingAgentFirstName": "{{event.properties.agent_firstname}}"  
   },  
   "name": "Update Last Agent First Name",  
   "properties": {  
      "lastHandlingAgentFirstName": "{{event.properties.agent_firstname}}"  
   },  
   "eventSource": "Regal Journey #123"  
}
```

- - Save the journey
  - Duplicate the journey and change the trigger to sms.conversation.completed
    - This will ensure the event fires at the end of every conversation, not just voice or just SMS.

### Example of the webhook:

![Screenshot 2024-03-19 at 9.39.40 AM.png](https://support.regal.ai/hc/article_attachments/23966150519707)

### Example of the journey:

![Screenshot 2024-03-19 at 9.40.59 AM.png](https://support.regal.ai/hc/article_attachments/23966156977051)

If you don't know your API key, please reach out to [support@regal.io](mailto:support@regal.io) or submit a ticket [here](https://support.regal.io/hc/en-us/requests/new) and someone from our tech support team will provide it.

# Step 2: Referencing the Property in Campaigns

To dynamically reference the property in the message content, use

```
{{contact.customProperties.lastHandlingAgentFirstName}}
```

![Screenshot 2024-03-19 at 10.01.22 AM.png](https://support.regal.ai/hc/article_attachments/23966745436827)