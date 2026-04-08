---
id: 18747115171611
title: "How to Create an Abandoned Cart Journey"
html_url: "https://support.regal.ai/hc/en-us/articles/18747115171611-How-to-Create-an-Abandoned-Cart-Journey"
updated_at: "2023-10-05T15:53:10Z"
---

# How to Create an Abandoned Cart Journey

## Use Case Description

- You are selling a good or service online and your customer has added items to his shopping cart but did not complete the checkout process within 10 minutes of adding his last item to the cart.
- At that 10 minute mark, you want to send a text to the customer asking them to call or text back if he requires assistance and to also let them know that you will be calling shortly.
- Immediately after the text is sent you create a call task for one of your agents to make an outbound call to the customer to ask if he requires assistance.
- If you are not able to connect with the customer with either the text or the phone call and the customer still has not completed the checkout process after another 60 minutes, you want to send a text with a 10% coupon code

---

## Prerequisites

- There is already an event being created in Regal that signifies when someone has added something to their shopping cart.
  - For the step-by-step example below, we will be using the Regal Custom Events API to send an 'Item Added to Cart' event
- There is already an event being created in Regal that signifies when someone has completed the checkout process.
  - For the step-by-step example below, we will be using the Regal Custom Events API to send a 'Checkout Completed' event to Regal
- There are already appropriate dispositions configured in Regal that can be used by agents when closing out sms and call tasks related to this Abandoned Cart Journey.
  - For the step-by-step example, below, we will be using any disposition containing the phrase 'END CAMPAIGNS' to prevent them from getting the second text message

---

## Step-by-step

- Create 'Abandoned Cart Text 1' campaign
  - Campaigns > New Campaign
    - Campaign name: Abandoned Cart Text 1
    - Message type: SMS
    - Campaign Type: Triggered
    - From Number:
    - SMS Content: Do you require assistance with checking out?
    - MMS Media URL (Optional):
    - Conversion Event (Optional):
    - Click 'Save as Ready'
- Create 'Abandoned Cart Text 2' campaign
  - Campaigns > New Campaign
    - Campaign name: Abandoned Cart Text 2
    - Message type: SMS
    - Campaign Type: Triggered
    - From Number:
    - SMS Content: Use this coupon code to save 10% off your order: ABC123
    - MMS Media URL (Optional):
    - Conversion Event (Optional):
    - Click 'Save as Ready'
- Create 'Abandoned Cart Call 1' campaign
  - Campaigns > New Campaign
    - Campaign name: Abandoned Cart Call 1
    - Message type: Phone Call
    - Campaign Type: Triggered
    - From Number:
    - Dialing Mode: Preview Dial
    - Campaign Nickname: Abandoned Cart Call 1
    - Campaign Goal: Assist customer in completing checkout process
    - Script URL (Optional):
    - Voicemail Instructions: Personalized Voicemail
    - Conversion Event (Optional): Checkout Completed
    - Click 'Save as Ready'
- Create 'Abandoned Cart' journey
  - Journeys > New Journey
  - Journey Name: Abandoned Cart
  - Trigger
    - Trigger Type: Custom Event
    - Event Name: Item Added to Cart
    - Click Save
    - ![](https://lh5.googleusercontent.com/uwzUaG2x1_7or3r8pWT4ygmX1JLhCygUtA34ee5DIeOm3O86JKWZuKrWhKpjRbakHLO5-5FtxOtU8ivLs-Q1d_UAJhXx8iDlGJBUAgFq0n1oCZ_tBnPMoZsd7Y5EzY3SmdEYPZcwZkAJHz8EazM0BqU)
  - Delay
    - Delay Type: Standard Delay
    - Delay For: 10 Minutes
    - Click Save
  - Conditional Match
    - Name of Condition: Check to see if another 'Item Added to Cart' event came in during the last 10 minutes
    - Condition Type: Custom Event
    - Event Name: Item Added to Cart
    - Operator: Exists
    - Click 'Add Property Condition'
    - Property Name: created\_at
    - Operator: Is On or After
    - Date Type: Relative Date
    - Relative Date: now-10m
    - Click Save
    - ![](https://lh3.googleusercontent.com/Q0FJL01pEmHlvnqStLLsH9yxU9_7za-Mjapie5tRcqOLZFhvdkjJNDhYgYKXKbKk_g7VmKPt5uNCZmAwrE3ICbZjkkrz9-xt8AvJASWQbJvCH6vFe-5Pjz3Nskom-2yeMuu6N_O_PiFIVFULxewOSlg)
  - if Yes, user will fall out of this instance of the journey because he will already be in a newer instance of the journey
  - if No, continue with Journey
  - Conditional Match
    - Name of Condition: Check to see if a 'Checkout Completed' event came in during the last 10 minutes
    - Condition Type: Custom Event
    - Event Name: Item Added to Cart
    - Operator: Exists
    - Click 'Add Property Condition'
    - Property Name: created\_at
    - Operator: Is On or After
    - Date Type: Relative Date
    - Relative Date: now-10m
    - Click Save
    - ![](https://lh4.googleusercontent.com/dZuvhZHOOMD-Ys2h-vE2D3cO2Qdv7VOn74mIHdQC3mmP2xMsZsvWnDQgDIqXfUd287BN5tiHTd5g2h6HekZDF1MeRuxYGCjvfnk43pesxhSddU3gNRUNQQnbTJxfOV34YBruSL_LjyzJegqfeTV9na4)
  - if Yes, user will fall out of this journey because he already successfully completed the checkout process
  - if No, continue with Journey
  - Send SMS
    - Select Campaign: Abandoned Cart Text 1
    - Click Save
  - Create Call Task
    - Select Campaign: Abandoned Cart Call 1
    - Click Save
  - Delay
    - Delay Type: Standard Delay
    - Delay For: 1 Hour
    - Click Save
  - Copy the two Conditional Match nodes from earlier place them after the delay; update the name and relative date to be 1 Hour (1h) instead of 10 minutes (10m)
  - Conditional Match
    - Name of Condition: Check to see if an 'END CAMPAIGNS' sms disposition came in during the last 1 hour
    - Condition Type: Regal Voice Event
    - Event Name: sms.conversation.completed
    - Operator: Exists
    - Click 'Add Property Condition'
    - Property Name: created\_at
    - Operator: Is On or After
    - Date Type: Relative Date
    - Relative Date: now-1h
    - Click 'Add Property Condition'
    - Property Name: properties.disposition
    - Operator: Contains
    - Property Value: END CAMPAIGNS
    - Click Save
  - if Yes, user will fall out of this journey because an agent has already communicated with him via text
  - if No, continue with Journey
  - Conditional Match
    - Name of Condition: Check to see if an 'END CAMPAIGNS' call disposition came in during the last 1 hour
    - Condition Type: Regal Voice Event
    - Event Name: call.completed
    - Operator: Exists
    - Click 'Add Property Condition'
    - Property Name: created\_at
    - Operator: Is On or After
    - Date Type: Relative Date
    - Relative Date: now-1h
    - Click 'Add Property Condition'
    - Property Name: properties.disposition
    - Operator: Contains
    - Property Value: END CAMPAIGNS
    - Click Save
  - if Yes, user will fall out of this journey because an agent has already communicated with him via phone call
  - if No, continue with Journey
  - Send SMS
    - Select Campaign: Abandoned Cart Text 2
    - Click Save
  - Click Save as Live

---