---
id: 19340065342875
title: "How to Create Your First New Lead Journey"
html_url: "https://support.regal.ai/hc/en-us/articles/19340065342875-How-to-Create-Your-First-New-Lead-Journey"
updated_at: "2023-10-05T16:47:37Z"
---

# How to Create Your First New Lead Journey

## Overview

Building out your first journeys can feel overwhelming! Don’t worry — in this guide we’ll walk you through building out a sample “New Lead” journey. We’ll go over mapping out your engagement strategy, offer tips and best practices to help you reach your goals, and go over in detail how to execute on building your first Regal journeys.

## Step 1: Planning

Before you’re ready to dive into Journey Builder, taking some time to plan out what this will look like is critical! Some points to think through are:

- What is the triggering event for this journey?
- What is the goal of your journey? (ie: to make contact with the lead, to convert them?)
- How many calls do you want to make? At what intervals?
- Do you plan on adding automated text messages to your journey? If so, at what intervals, and what will be the content of the messages?
- How can you set up an A/B test to ensure you’re continually optimizing your performance?
- What is the exit criteria for your journey?
  - Lead converts?
  - Lead says they’re not interested?
  - Lead indicates that they’re interested, but they need to consult with a decision maker?
  - Lead doesn’t meet eligibility criteria?

Once you’ve mapped out how you want your journey to flow, you’re ready to dive into Regal and begin building!

## Step 2: Building Campaigns

[Campaigns](https://support.regal.ai/hc/en-us/articles/5721078516891) are the building blocks of your first journey in Regal, and configuring them beforehand is a necessary first step.

To optimize for task prioritization and clarity in reporting, we recommend creating unique [call campaigns](https://support.regal.ai/hc/en-us/articles/5721270757275) for each call in the journey. This can be done easily by creating your first campaign, saving, and then hitting the ‘Duplicate’ button. Just be sure to change the campaign name and campaign nickname for each duplicated campaign.

We also recommend sticking with a standard naming convention for each campaign in the journey. For example: “New Lead: Call #1”, “New Lead: Call #2”, etc. This can help in task routing and reporting, and generally minimize confusion amongst your agents as they’re working these tasks.

If your new journey will include [SMS campaigns](https://support.regal.ai/hc/en-us/articles/5721570540699), we recommend:

- Personalizing your messages as much as possible using Regal’s handlebar functionality to add in dynamic and default variables.
- Make it conversational! Messages that sound like they’ve come from a human have a higher response rate than messages that sound overly scripted.
- Whenever appropriate, add in a few emojis to your messages. Messages with emojis can increase your response rate by up to 10%!
  - If you're unsure about SMS content, or whether it's appropriate to use emojis in your SMS campaigns, this is a great opportunity to [A/B test](https://support.regal.ai/hc/en-us/articles/5724713528219) different content variations.

## Step 3: Building your First Journey

Once your campaigns are created and you’ve mapped out your outreach cadence, it’s time to start building out your journey!

When building out a journey that includes multiple call attempts, we recommend setting up what’s called a “Dynamic Journey”.

### 📘 What is a Dynamic Journey?

A Dynamic Journey is one customer or lead journey that’s split into two Regal journeys, each with a unique triggering event. Your initial call task is triggered by the triggering event you’ve decided on (ex: “New Lead Submitted” event), and each subsequent call task is triggered based on the outcome of the previous call (using the Regal `call.completed` event).

Check out the below video for a walkthrough of how to set up a sample journey using a “Dynamic Journey”.

## Step 4: Configuring Routing Rules

Now that your campaigns are created and your journey is configured, it’s time to configure [Routing Rules](https://support.regal.ai/hc/en-us/articles/12181758397723) to determine which agents these tasks will route to, and what priority they’ll be served in.

Check out the below video walkthrough of how to configure Routing Rules for the sample we just built.

## Step 5: Testing

Once your journey is complete and your routing rules are configured, the final (and often forgotten) step is end-to-end testing to ensure everything is working as expected prior to launching.

To begin testing your journey, fire the journey triggering event for a few test contacts. If you’re not able to fire the trigger event for test contacts only, you can add conditional nodes to the top of your journey that only fire if, for example, first name contains "Test" as in the screenshot below:

![Journey Testing Check.png](https://support.regal.ai/hc/article_attachments/19343241816603)

You can also create a segment of test contacts via a [CSV upload](https://support.regal.ai/hc/en-us/articles/6771680286619) or pick a new trigger event that will only fire for test contacts. This will require you to update the trigger event on your initial journey - just don’t forget to change it back prior to launching!

If you’re routing to agents on a specific team, or with a specific skill, make sure that your test agent is skilled appropriately via the ‘Agents’ page.

If you’re routing to a specific agent or “lead owner”, make sure the lead owner on your test contact matches the email of your test agent.

Once your journey is live and tasks begin flowing:

- Check the Tasks page to ensure tasks are created as expected.
- Check the priority level and Queue of the created tasks matches what you've set in your Routing Step to ensure the task was caught by the right filter.
- Once your tester has completed the first task, ensure that your dynamic journey is triggered off of `call.completed`.
  - For testing additional journey steps without waiting for contacts to flow through delay nodes, you can add another first name check (as above) so that test contacts will bypass delays, as in the screenshot below:

![CleanShot 2023-10-05 at 10.38.19.png](https://support.regal.ai/hc/article_attachments/19343241825307)

Lastly, if your contacts are inexplicably falling out of the journey and you're not able to determine where, we recommend temporarily adding a 1 hour delay node at each point a contact could call out. This will make it easier to troubleshoot any errors in your journey logic by seeing where the test contact is falling out.

![CleanShot 2023-10-05 at 10.45.59.png](https://support.regal.ai/hc/article_attachments/19343216022683)

Just be sure to remove them prior to launching, as unnecessary nodes can make a journey look overly cluttered, potentially leading to future confusion.

### Questions?

Check in with your Customer Success Manager, or open a ticket with our Support team [here](https://support.regal.io/hc/en-us/requests/new).