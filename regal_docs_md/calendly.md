# Calendly

> ## 📘
>
> Professional tier (or higher) Calendly plan required to integrate
>
> In order for your Calendly account to integrate with other systems and send the appropriate API requests, you must have at least a [Professional tier account](https://calendly.com/pricing/users/2).

This guide outlines how you can use Calendly as a source for sending events to Regal when a Calendly call is scheduled, rescheduled or canceled.

## Step 1: Configure your Calendly Invitee Questions

- In your Calendly account, edit the Settings for your Event and navigate to "Additional Options" > "Invitee Questions"

![](https://files.readme.io/69a5902-Screen_Shot_2022-05-02_at_11.06.05_PM.png "Screen Shot 2022-05-02 at 11.06.05 PM.png")

- Click "+ Add New Question"
- Name the question "Contact Phone Number" or "Phone Number". Mark as "Required". Change the Answer Type to "Phone Number", and hit "Apply"

![405](https://files.readme.io/f1516cf-Screen_Shot_2022-05-02_at_11.01.52_PM.png "Screen Shot 2022-05-02 at 11.01.52 PM.png")

Must have "Phone Number" in the question or Regal won't be able to recognize it

- Click "Save & Close"
- If you any other additional question you'd like to pass to Regal and make visible on the Agent Desktop, remove any punctuation from the question.
  - For example, the standard Please share anything that will help prepare for our meeting. question should be updated to Please share anything that will help prepare for our meeting (with no period at the end).

![Removing punctuation will allow Regal to pass the question and answer as an event property, which can be mapped to a contact attribute via your Calendly journey.](https://files.readme.io/2e382dd-image.png)

Removing punctuation will allow Regal to pass the question and answer as an event property, which can be mapped to a contact attribute via your Calendly journey.

## Step 2: Retrieve your Calendly account's Personal Access Token

Integrations → [API & webhooks](https://calendly.com/integrations/api_webhooks) → Generate new token

- Refer to [Calendly's authentication guide](https://developer.calendly.com/how-to-authenticate-with-personal-access-tokens) for instructions on how to generate a personal access token. You will need this token in the following step.

## Step 3: Connect your Calendly Account Through the Regal App

- Log in to the Regal app and navigate to "Settings" > "[Integrations](https://app.regalvoice.com/settings/integrations)"
- Find the Calendly Integration card and click "Connect"

![](https://files.readme.io/153af6a-Screen_Shot_2022-05-02_at_10.35.33_PM.png "Screen Shot 2022-05-02 at 10.35.33 PM.png")

- Enter the Personal Access Token from Step 2, and click "Save"
- The Calendly tile should now look like this:

![768](https://files.readme.io/f486ee1-Screen_Shot_2022-05-02_at_11.15.42_PM.png "Screen Shot 2022-05-02 at 11.15.42 PM.png")

Your integration is live!

To test your integration, schedule a meeting with one of your Calendly links, then navigate to Recent Activity in the Regal app. You should see a Calendly **Call Scheduled event**. Cancel the event through Calendly to remove it from the Regal tasks.

## Calendly Call Scheduled

When a Calendly call is scheduled, you will see a **Calendly Call Scheduled** event in the Recent Activity page.

### Custom Properties

When defining your event form in Step 1, any responses to custom fields added to the form will appear in a "properties" block in the event json, as seen below:

![](https://files.readme.io/923dd5d-image.png)

## Calendly Call Cancelled

When a Calendly call is cancelled, the corresponding Regal event will also be automatically cancelled. You will see a Calendly Call Canceled event in the Recent Activity page.

## Rescheduling Calendly Calls

When a user reschedules a Calendly Call, in the Recent Activity page you will first see a Calendly Call Canceled event and then a new Calendly Call Scheduled event. This is consistent with how Calendly handles reschedules.

## Calendly Calls in Regal

The **Calendly Call Scheduled**  event can be used to trigger a journey that allows you to customize when the task is created, and to which agent or team the task is routed.

> ## 📘
>
> Next Steps:
>
> Check out [this article](https://support.regal.io/hc/en-us/articles/17399564541467) for a complete overview of building out your first Calendly journey.

## Using Sub-brand w/ Calendly

If your Regal account is sub-brand-enabled and you have contacts that share a phone or email, then you can follow these steps to make sure that Calendly bookings will go to the right profile.

1. Add a utm parameter to your calendly links. [These](https://help.calendly.com/hc/en-us/articles/4406950779799-Source-tracking-with-your-Calendly-embed-and-UTM-parameters) are the available options. For example, add `utm_term` like this:
   - https://calendly com/agent-4/15min?preview\_source=et\_card**&utm\_term=ucla**
   - Let [[email protected]](/cdn-cgi/l/email-protection#a6d5d3d6d6c9d4d2e6d4c3c1c7ca88cfc9) know which param you chose so they can make a configuration adjustment to your integration.
2. Set your chosen utm param to the sub-brand desired, as shown above. If the sub-brand has any punctuation (e.g. "St. George's University"), use a url encoder to convert it to a usable format, e.g.:
   - https://calendly com/agent-4/15min?preview\_source=et\_card**&utm\_term=St.%20George%27s%20University**
   - <https://www.urlencoder.org> is a useful tool for testing encoding, but note that different tools might encode slightly differently, so be sure to consistently use the same tool.

*If you have any questions about this integration guide email [[email protected]](/cdn-cgi/l/email-protection#d1a2a4a1a1bea3a591a3b4b6b0bdffb8be).*

Updated over 1 year ago

---
