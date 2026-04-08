---
id: 14981647938459
title: "How to Set Up an Out-of-Office Autoresponder in Regal for Specific Agents"
html_url: "https://support.regal.ai/hc/en-us/articles/14981647938459-How-to-Set-Up-an-Out-of-Office-Autoresponder-in-Regal-for-Specific-Agents"
updated_at: "2023-04-28T18:18:35Z"
---

# How to Set Up an Out-of-Office Autoresponder in Regal for Specific Agents

When your agents are unavailable due to vacations, sick days, or personal time off it is important to still maintain consistent and timely communication. To facilitate this, we have prepared a comprehensive step-by-step guide for setting up an out-of-office autoresponder for specific agents within the Regal platform. This will ensure that your customers continue to receive prompt responses even in the absence of their assigned agent.

---

## Step 1: Set Up a Campaign:

1. Name the campaign something clear and concise, like "Out-of-Office Autoresponder", and add a description so it's easy to identify later.
2. Set the message type to SMS and the campaign type to Triggered.

   ![Screenshot_2023-04-28_at_1.41.40_PM.png](https://support.regal.ai/hc/article_attachments/14983267126683)
3. Choose the From Number. We recommend setting it dynamically, but if you have a specific phone number in mind, you can use that too.
4. Compose the SMS content. To make it more personal, use dynamic fields like {{contact.firstName}}.
5. A best practice is also to give customers a way to schedule a time to talk when the agent is back by using a Calendly link or something similar.

   ![Screenshot_2023-04-28_at_1.58.20_PM.png](https://support.regal.ai/hc/article_attachments/14983804365851)
6. Save the campaign as "Ready."

---

## 

## Step 2: Set Up a Journey that sends the autoresponder when an agent is out of the office:

1. Name the journey something that makes sense for future reference. We recommend using the same name as the campaign you set up earlier.
2. Set up the Trigger Node:
   - Set the trigger node condition to "Regal Voice Event" and the event name to "sms.received."
   - Filter by contact attribute. In this example we're using the contact attribute "rvProperties.handler\_email" but if you have another property that you use to match certain customers with specific agents you can use that property instead.
   - Set the operator to "Is One Of" and enter the email address of the agent who's out of the office.
   - Select "Do not allow simultaneous entrances" and save the trigger node.

     ![Screenshot_2023-04-28_at_2.00.45_PM.png](https://support.regal.ai/hc/article_attachments/14983880479771)
3. Add a Send SMS node that sends the campaign you created earlier.
4. Add a Delay node with a waiting time of at least 30 minutes. This prevents the autoresponder from sending the same message again if the customer replies with a simple "thanks" or something similar.
5. Save the Journey by clicking Save as Live.

![Screenshot_2023-04-28_at_2.02.11_PM.png](https://support.regal.ai/hc/article_attachments/14983961709723)

#### Don't Forget!

When this journey is not in use don't forget to save it as a draft so that you have easy access to it in the future and also so that it doesn't trigger an OOO reply when that agent is back in the office.