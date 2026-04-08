---
id: 13758106504603
title: "Journey Template: Nurture High Intent Leads Immediately with Journey Builder and Smart Routing"
html_url: "https://support.regal.ai/hc/en-us/articles/13758106504603-Journey-Template-Nurture-High-Intent-Leads-Immediately-with-Journey-Builder-and-Smart-Routing"
updated_at: "2023-03-27T15:00:09Z"
---

# Journey Template: Nurture High Intent Leads Immediately with Journey Builder and Smart Routing

# In today's highly competitive sales environment, nurturing high intent leads immediately is crucial to driving conversions and growing your business.

With this journey template, you can easily automate your sales processes to engage and convert high intent leads faster than ever before. Below, we'll walk you through the steps to build a journey to create the first touch point with high intent leads using call and SMS campaigns, along with the routing rules that prioritize these valuable contacts.

## Table of Contents

1. [Create the Campaigns](#section1)
2. [Create the Journey](#section2)
3. [Update the Routing Rules](#section3)

#### Final Journey Template:

![Screenshot_2023-03-17_at_12.10.17_PM.png](https://support.regal.ai/hc/article_attachments/13758069161627)

### Keep reading to find this template!

---

### Step 1 - Create the Campaigns [svgviewer-output__2_.svg](https://support.regal.ai/hc/en-us/articles/5721078516891)

1. Navigate to the [campaigns page](https://app.regalvoice.com/campaigns)
2. Click **New Campaign**
3. Create the Call campaign, save it, then hit **duplicate** to save time.
4. Update the duplicated campaign details to the SMS content and then save.

#### Sample [Call Campaign](https://support.regal.ai/hc/en-us/articles/5721270757275):

![Screenshot_2023-03-17_at_11.45.44_AM.png](https://support.regal.ai/hc/article_attachments/13759453590555)

### Pre-record a voicemail

**Save your agents the hassle of leaving a voicemail by ensuring that you upload a clear and to the point [pre-recorded voicemail campaign](https://support.regal.ai/hc/en-us/articles/11627151723931). Select that option for this campaign!**

#### Sample [SMS Campaign](https://support.regal.ai/hc/en-us/articles/5721570540699):

![Screenshot_2023-03-17_at_12.06.21_PM.png](https://support.regal.ai/hc/article_attachments/13760212260507)

### Personalize your message

**Studies show that customers crave deeper and more personal engagements. Use [handlebars](https://support.regal.ai/hc/en-us/articles/5721570540699) to add personalization to your SMS messages, and gifs to create a fun and engaging tone!**

---

### Step 2 - Create the Journey [svgviewer-output__3_.svg](https://support.regal.ai/hc/en-us/articles/5721674470939)

1. Navigate to the [Journeys page](https://app.regalvoice.com/journeys)
2. Create a new Journey with the corresponding [New Lead Event](https://support.regal.ai/hc/en-us/articles/12815108163483) as a trigger.
3. Add trigger conditions to ensure that only the high intent leads enter the journey.
4. Drag and drop the **Action** node: **Send SMS**
5. Select your High Intent Lead Welcome SMS and save it
6. Drag and drop the **Action** node: **Create Call Task**
7. Select your High Intent Lead first call and save it
8. Connect the trigger to your SMS and your SMS to your call task.

### Optional

Add conditional checks to customize the flow of your journey! For example, does your SMS expect a reply? Wait a few moments before trying to call!

#### Unlocked Journey Template:

![Screenshot_2023-03-17_at_12.10.17_PM.png](https://support.regal.ai/hc/article_attachments/13758069161627)

### Conditional Checks Template

1. Replied? - Since an SMS is being sent immediately, this conditional node checks to see if they responded to the message within 30 seconds.  
   **Condition:** Regal Voice Event - `sms.received EXISTS AND created_at IS ON OR AFTER now-30s`
2. Called? - If they did respond, since our goal is still to get the lead on the phone with one of our experts, we wait a minute and check to see if an agent called the contact from the SMS.  
   **Condition:** Regal Voice Event - `task.reservation.accepted EXISTS AND type_of_task
   CONTAINS call AND created_at IS ON OR AFTER now-1m30s`
3. Booked? - If the agent did not call, since our ultimate goal is to book the customer, we won't make an unnecessary call if they already booked.   
   **Condition:** Custom Event - `Meeting Booked EXISTS`

---

### Step 3 - Update the Routing Rules [svgviewer-output__4_.svg](https://support.regal.io/hc/en-us/articles/12181758397723-How-to-Set-Task-Routing-Rules)

To prioritize high intent calls, configure the routing rules as follows:

1. Navigate to the [Routing Rules page](https://app.regalvoice.com/settings/routing-rules).
2. Create a new rule and ensure that it is below ASAP Callbacks, Scheduled Callbacks, Quiet Hours and Snoozed. (Rules are evaluated in top to bottom order!)
3. Add a Task Condition with the following Task Expression: `campaignInfo.campaignName CONTAINS 'High Intent'`
4. Set the Queue to "Outbound Calls". (If you would like a specific queue for this campaign, [please contact us](https://support.regal.io/hc/en-us/requests/new))
5. If you don't want to prioritize certain agents over others, set Qualifying Agent(s) to "Any Agent in Queue". Do not skip the step timeout.
6. Set the rule's priority to a higher level than other outbound call rules, but below the ASAP Callbacks and Scheduled Callbacks. (You always want to ensure that inbound calls are returned and scheduled commitments are met!)
7. Save the routing rule.

By following these steps, you will ensure that high intent leads are engaged immediately through SMS and call campaigns. The routing rules will prioritize these leads, ensuring they receive prompt attention from your sales team!

*Have a question or need more assistance setting up this journey in your account? Open a chat through the icon on the left, submit a request to our team via the action button at the top of this page or email us at* *[support@regal.io](mailto:support@regal.io)* *to be connected to one of our Support team members!*