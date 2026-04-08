---
id: 18747177205147
title: "How to Create a Re-engagement Journey (SMS)"
html_url: "https://support.regal.ai/hc/en-us/articles/18747177205147-How-to-Create-a-Re-engagement-Journey-SMS"
updated_at: "2023-10-05T15:51:50Z"
---

# How to Create a Re-engagement Journey (SMS)

## Use Case Description

- You are have customers that have not interacted with your brand/organization for an extended period of time and you would like to get them to call in, text in, or interact with your website

---

## Prerequisites

- There is already an event being created in Regal that signifies when someone has interacted with your website
  - For the step-by-step example below, we will be using the Regal Custom Events API to send a 'Website Visited' event

---

## Plan

- This example will have a trigger identifying customers who have not interacted with your brand/organization in the past 6 months
  - Note: Dynamic Segments are currently only able to look at Contact Profile Criteria so this example will only be identifying those customers that have a call attempt that is more than 6 months ago
- This example will only have 2 SMS campaigns separated by a 7 day delay but you can create as many SMS campaigns separated by delays as you want.

---

## Step-by-step

- Create a 'Quiet for 6 months' segment
  - Segments > New Segment
    - Segment Name: Quiet for 6 months
    - Segment Conditions
    - see screenshot for details
      - ![](https://lh5.googleusercontent.com/P7tYDvLupOPuusp2P6UpmPHH_c3Nxk30dwuh32Qhedh3fjigpB3g7KMY27sK1X96r1rlpie2U-H-GTweW0u1NsnJOEr3JrcQzfMKWq-05e9uBGtPherXTft4aEYTw3txJSz3kAJl_35wB7tKzy4lVqo)
    - Click Save Dynamic Segment
- Create 'Re-engagement Text 1' campaign
  - Campaigns > New Campaign
    - Campaign name: Re-engagement Text 1
    - Message type: SMS
    - Campaign Type: Triggered
    - From Number:
    - SMS Content: We missed you.
    - MMS Media URL (Optional):
    - Conversion Event (Optional):
    - Click 'Save as Ready'
- Create 'Re-engagement Text 2' campaign
  - Campaigns > New Campaign
    - Campaign name: Re-engagement Text 2
    - Message type: SMS
    - Campaign Type: Triggered
    - From Number:
    - SMS Content: Call us or text us
    - MMS Media URL (Optional):
    - Conversion Event (Optional):
    - Click 'Save as Ready'
- Create 'Re-engagement (SMS)' journey
  - Journeys > New Journey
  - Journey Name: Re-engagement (SMS)
  - Trigger
    - Trigger Type: Scheduled
    - Segment: Quiet for 6 months
    - Start Date & Time:
    - Frequency: One Time
    - Click Save
  - Send SMS
    - Select Campaign: Re-engagement Text 1
    - Click Save
  - Delay
    - Delay Type: Standard Delay
    - Delay For: 7 Days
    - Click Save
  - Conditional Match
    - Name of Condition: Check to see if a 'Website Visited' event came in during the last 7 days
    - Condition Type: Custom Event
    - Event Name: Website Visited
    - Operator: Exists
    - Click 'Add Property Condition'
    - Property Name: created\_at
    - Operator: Is On or After
    - Date Type: Relative Date
    - Relative Date: now-7d
    - Click Save
  - if Yes, user will fall out of this journey because he already interacted with the website
  - if No, continue with Journey
  - Conditional Match
    - Name of Condition: Check to see if an sms conversation was completed during the last 7 days
    - Condition Type: Regal Voice Event
    - Event Name: sms.conversation.completed
    - Operator: Exists
    - Click 'Add Property Condition'
    - Property Name: created\_at
    - Operator: Is On or After
    - Date Type: Relative Date
    - Relative Date: now-7d
    - Click Save
  - if Yes, user will fall out of this journey because an agent has already communicated with him via text in the past 7 days
  - if No, continue with Journey
  - Conditional Match
    - Name of Condition: Check to see if a call was completed during the last 7 days
    - Condition Type: Regal Voice Event
    - Event Name: call.completed
    - Operator: Exists
    - Click 'Add Property Condition'
    - Property Name: created\_at
    - Operator: Is On or After
    - Date Type: Relative Date
    - Relative Date: now-7d
    - Click Save
  - if Yes, user will fall out of this journey because an agent has already communicated with him via call in the past 7 days
  - if No, continue with Journey
  - Send SMS
    - Select Campaign: Re-engagement Text 2
    - Click Save
  - Click Save as Live
  - ![](https://lh5.googleusercontent.com/fjgP5RWhUbQ2sGqRoxAwU5HaKfkh1alzBpOJRww8fyduTZsfVfyrbKqE09ZqGB1YX4XbVrjnBfvhtSNaI5zY_ijwSoR8ZBtV2n-aZDoF5ZhXRoEKLQYFP1AEUeASi8dTXfdFyxePFSmgmSz_Dr5bonQ)

---