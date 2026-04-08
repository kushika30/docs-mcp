# Intro to Regal Data Model

Getting the most out of Regal - highly personalized AI Agent conversations for each customer - relies on a powerful data model to track in-product interactions across your application, and empowers you to create personalized journeys that determine who to reach out to when with different campaigns based on a fuller picture of the customer's behavior and intent.

We call this "event-based" streaming (vs. traditional contact centers who utilize "batch and send"), and it enables much more personalized and effective outreach that leads to higher engagement and revenue. Regal can be used to engage leads at the top of the funnel to increase conversion/enrollment or throughout the customer lifecycle for retention, cross-sell, upsell or winback.

From your data and the conversation and agent data produced in Regal, we create a truly **unified customer profile** that merges the complete, real-time activity history of each customer across all their digital touch points (e.g., mobile, web, email) and human touch points (e.g., call, text and email conversation data on Regal, agent-inputted CRM data) into a single, identity-resolved profile.

The event-based model is built on three concepts: **Contacts**, **Contact Attributes**, **Events**, and **Event Properties**.

## Contacts

Contacts in Regal are meant to represent your end users - the specific individual that completed an interaction with your site or product. While Regal can and does ingest and store data for all your end users (even before you may have collected contact information from them) so that they may be added to a Contact's profile once a phone/email is provided, in order for a Contact to appear in your Audience tab on Regal and enter journeys, you must provide a phone number or email address - so that down the line they may be contacted.

## Contact Attributes

Contact attributes represent traits about the person. This could be something as simple as *First Name* or *Age*, or something more custom, like their *Savings Goal* or the *Primary Sales Agent* who owns the customer relationship. Regal includes channel preferences/opt in as part of contact attributes. You can add any number of custom contact attributes when defining or updating a contact.

## Events

An event is a data point that represents an interaction between a contact and your product/company. Events can be a wide range of interactions.

For example:

- when a end-user starts an application on your site
- when a end-user completes a purchase
- when an end-user is approved in your system for a loan
- when an end-user clicks a marketing email.

Within an event there are details that describe the action ("name" of the event) the moment it happens and any supporting information about the action ("properties").

## Event Properties

Event properties help you define the specifics of an event. For example when a user opens a bank account, the event name could be *Bank Account Created* and one event property could be *Account Type* (e.g., Savings or Checking). You can add any number of properties when sending an event to Regal.

![](https://files.readme.io/e1e282e-events.png)

## How AI Agents Use Customer Data

Your customer data helps AI Agents personalize every conversation, using data from a contact's profile.

Example Use Cases:

- Use contact attributes from the profile to refer to the contact by name or reference the lead source or product they expressed interest in (e.g., *Hi {{contact.firstName}}, can you describe your {{contact.service\_sku}} project you need done?*)
- Use contact attributes to change the task steps the AI agent follows (e.g., if a high intent lead, get straight to the point, but if a low intent lead, ask discovery questions first)
- Use previous call summaries to pick up the next AI agent conversation where you left off with the customer so that it feels like one continuous conversation with your brand (e.g., *James - last we chatted you'd just gotten accepted to Hunter College, and wanted help with financial aid options. I see your application is still incomplete - can I help you get that completed?*)
- For outbound calls, use custom behavior data to know when to trigger a call to whom so that it's received at the most relevent time

Updated 10 months ago

---
