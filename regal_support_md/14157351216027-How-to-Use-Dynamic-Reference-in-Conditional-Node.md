---
id: 14157351216027
title: "How to Use Dynamic Reference in Conditional Node"
html_url: "https://support.regal.ai/hc/en-us/articles/14157351216027-How-to-Use-Dynamic-Reference-in-Conditional-Node"
updated_at: "2025-05-22T19:22:49Z"
---

# How to Use Dynamic Reference in Conditional Node

## Referencing Triggering Event Properties

With conditional node dynamic reference, Admins can check whether the trigger event properties match those of previous events, great for splitting customers into personalized paths for outreach using Regal’s event based architecture.

In conditional nodes,

- Users can dynamically compare other event properties against the triggering event properties, for both Regal and Custom Events.
  - This is ONLY available when either **STRING** or **DATETIME** field is selected for evaluation. See below for visual examples.
- You can use handlebars to reference properties from the trigger event of the journey. Properties from other events cannot be referenced dynamically for comparison.
  - To see a list of available triggering event properties for reference, type the opening double curly brackets (aka handlebars) {{}}
  - You must prepend the property name **event.**
  - You can then keep typing or scroll through the selector and click the option you want to include.

## **Example Journey for Prior Purchase Check (STRING)**

- In below example, we are checking whether the purchased item of the new purchase (Journey trigger) matches any previously purchased item names.
- If yes, send repeat purchase SMS. If no, send new purchase SMS.

**![](https://support.regal.ai/hc/article_attachments/14157739597851)**

## **Example Journey for Calendly Cancelation Check** **(STRING)**

- In this example, the trigger event is a Calendly Schedule event that contains the property meeting\_id
- After delaying until right before the initial scheduled time, we want to check whether the meeting has been canceled during the wait period.For Calendly cancellation events, meeting\_id is the same as the initial scheduled event.
- Therefore we want to dynamically check whether there was a Calendly Cancel event on the user with the same meeting\_id. If yes, it would indicate the original meeting has been canceled. If no, then we would go ahead and create the call task

![User-uploaded Image](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/mKLFS9oJjxsyDH14c2OYBlvP.png)

## **Example Journey for Scheduled Callback Reschedule Handling (DATETIME)**

- In this example, the trigger event is a Regal scheduled.callback.requested event
- If the same customer asks to *reschedule* the time, the agent would put in a new schedule request, triggering a *new* scheduled.callback.requested event.
- Therefore we want to dynamically check whether there was a another event that happened after the initial trigger event, by comparing their respective {{created\_date}}. If yes, it would indicate the original meeting has been canceled. If no, then we would go ahead and create the call task.

**![](https://support.regal.ai/hc/article_attachments/37272944846363)**