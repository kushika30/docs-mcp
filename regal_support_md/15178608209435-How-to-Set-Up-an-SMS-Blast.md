---
id: 15178608209435
title: "How to Set Up an SMS Blast"
html_url: "https://support.regal.ai/hc/en-us/articles/15178608209435-How-to-Set-Up-an-SMS-Blast"
updated_at: "2023-06-22T21:31:57Z"
---

# How to Set Up an SMS Blast

## Confirm Campaign Setup

To begin, ensure that your SMS campaign is in the 'Ready' state and has been set up properly. If not, take a moment to set up the campaign. Here are the things to look for:

- 'Ready' status at the top right
- Message type: SMS
- Campaign type: Triggered
- From Number: is valid
- SMS Content: proper use of handlebars and references to existing fields

#### Don't Forget!

Make a note of the campaign name for reference throughout the rest of the process.

## Define Your Audience and Upload Your List

Next, you'll need to determine the contacts to which you would like to send the SMS blast. Once you know who the SMS blast will be sent to, you can upload your list. For this step, please reference the articles on [Static Segments](https://support.regal.ai/hc/en-us/articles/6771680286619) or [Dynamic Segments](https://support.regal.ai/hc/en-us/articles/14987900394523)

## Create a Journey

Finally, create a journey with the following settings:

1. Name: Same as the campaign name
2. Trigger Node
   - Trigger Type: Scheduled
   - Segment: The segment you uploaded earlier
   - Start Date & Time: Whenever you would like to send the SMS blast. Reference [this article on scheduling journeys](https://support.regal.ai/hc/en-us/articles/12493341501723) for more information.
3. Node 1
   - Block Type: Send SMS
   - Campaign: The campaign you set up earlier
4. Save the Journey as Live

#### Filters

Of course, you can always [add conditional nodes](https://support.regal.ai/hc/en-us/articles/5721895940379) to filter and make sure your message is going to the correct contacts.

#### 

#### Always Test!

We recommend testing your blast with a single test number so that you can confirm everything is working properly before sending them to actual contacts.

## 

## Confirming the Blast's Success

To confirm that the SMS blast successfully went out, navigate to the Recent Activity screen in Regal Voice. Search for 'sms.sent' and check the Event Details. You should see multiple records where the 'campaign\_friendly\_id' matches the campaign you configured.