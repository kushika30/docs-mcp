---
id: 5725272620187
title: "How to Use Journey Webhooks"
html_url: "https://support.regal.ai/hc/en-us/articles/5725272620187-How-to-Use-Journey-Webhooks"
updated_at: "2022-10-25T16:42:35Z"
---

# How to Use Journey Webhooks

### Use a journey Webhook to take actions in other applications as part of a Regal journey.

You can use journey webhooks to:

- Send an email in an ESP like Iterable, Braze or Customer.io
- Set up a direct mail integration with Poplar or Lob
- Trigger an action on Zapier
- Send a slack notification
- Save data to your own servers
- Get data from another application
- And more!

To configure a journey webhook, select the Webhook block and:

1. Name your webhook
2. Enter a destination URL
3. Select your HTTP method (GET, POST, PUT, PATCH)
4. Add any custom auth headers needed by the 3rd party application
5. If needed, add your custom JSON request body, which you can personalize with contact attributes or properties of the triggering event, using handlebars {{ }}

#### Example POST Request

![Screen_Shot_2022-09-12_at_2.31.35_PM.png](https://support.regal.ai/hc/article_attachments/8778405653019/Screen_Shot_2022-09-12_at_2.31.35_PM.png)

This example would send through something like the following:

```
{
    "target_agent_email": "rebecca@regalvoice.com",  
    "task_type": "Incoming Call",  
    "contact_name": "Rebecca",  
    "regal_voice_link": "https://app.regalvoice.com"
}
```

#### Example GET Request

#### Screen_Shot_2022-09-12_at_2.57.24_PM.png

This example does the following:

1. Makes a GET request from a Twilio Phone Lookup API to get the phone type (mobile or landline) and phone carrier (Webhook ID 2)
2. POSTS that information to the Contact Profile in Regal (Webhook ID 3) by referencing the response from Webhook ID 2
3. Finally references that phone\_type attribute on the Contact Profile in a Conditional Match to decide how to path the customer, giving different treatment to landline vs. mobile customers

#### **Testing Webhooks**

As you're setting up a webhook, it's often useful to inspect the requests it sends make sure that everything works as you expect.

Try using a service that allows you to set up a test webhook URL and inspect its incoming requests. For example, try [Webhook.site](https://webhook.site/).

> ### 📘 What happens if a webhook fails?
>
> Regal validates the URL and JSON format of the webhook. However, if a valid response is not received within 15 seconds, the contact will fall out of the journey.