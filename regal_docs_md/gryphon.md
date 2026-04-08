# Gryphon

[Gryphon](https://gryphon.ai/) is a compliance provider that dynamically maintains federal, state, and other do-not-contact (DNC) lists, as well as state-of-emergency statuses (e.g. of citizens affected by a natural disaster in a particular region at a particular time).

Regal’s Gryphon Check blocks calls to leads on DNC lists or in a state of emergency so you can maintain compliance by respecting your customers’ status and preferences. At this time, the Gryphon Check is supported for all call-related tasks.

![](https://files.readme.io/d398250ced390c344ac7bc6dc4f75701b562d8b8109643fd589211ca20e9b5fa-image.png)
  

## Set Up the Integration

1. **Set Up and Configure Your Gryphon Account**

> ## 📘
>
> In order to use Regal’s Gryphon Check, you must have a Gryphon account. Reach out to your CSM to set up your Gryphon account if you do not already have one.

Once you have a Gryphon account, you can configure Gryphon campaigns (*NOT the same as Regal campaigns*) to select which lists (e.g. internal DNC, state DNC, federal DNC) you would like to be checked as part of that campaign.

> ## ❗️
>
> We highly recommend that you meet with Gryphon representatives to discuss your account configuration options before proceeding. Regal’s Gryphon Check responds to how your Gryphon campaigns are configured.

2. **Complete the [Request Form](https://docs.google.com/forms/d/e/1FAIpQLSdwh2R5re8D44th5CIHGfVc0qXEjF_LBIh5ISHv_CvLtUHzfA/viewform)**

Once your Gryphon account has been set up and configured, fill out [this request form](https://docs.google.com/forms/d/e/1FAIpQLSdwh2R5re8D44th5CIHGfVc0qXEjF_LBIh5ISHv_CvLtUHzfA/viewform) to enable Regal to customize your Gryphon Check in accordance with your preferences. For assistance, reach out to your CSM.

This form asks for important setup information, including your:

- Gryphon license ID, to allow Regal to integrate with your Gryphon account
- Task preference, so Regal knows which types of calls (e.g. manual outbound calls, inbound calls) to block with Gryphon
- (If relevant) Gryphon campaign names, so Regal knows which campaigns to reference when blocking calls

> ## 🚧
>
> Limitation: Currently, each task type can only be linked to one Gryphon campaign, e.g. we can block manual outbound calls by `campaign A`and scheduled callbacks by `campaign B`, but we can't block manual outbound calls by both `campaign A` and `campaign B`.

3. **Your CSM Will Notify You When the Integration Is Enabled**

After receiving the form, the Regal team will configure and test the Gryphon integration for your brand. Your CSM will reach out to you with any questions and notify you when the integration is live!

## How Does Regal's Gryphon Check Work?

Regal will block calls to DNC contacts based on your brand's setup preferences, as configured in your Gryphon account. If an agent accepts a call task or dials out to a number on a relevant DNC list, Regal will:

- Wrap up the task before making the call
- Remove the task from the agent's task list
- Show a message confirming the call was blocked by Gryphon
- Add disposition "Gryphon DNC" to the task

### How Can I See That Calls Are Being Blocked by the Gryphon Check?

Call tasks blocked by Gryphon will have the disposition: "Gryphon DNC". You can assess the total number of Gryphon-blocked calls in the Reporting dashboards by filtering for completed tasks with this disposition.

### Example

Let's say you've configured a campaign called "Sales" in Gryphon to check against federal and state DNC lists. You requested that Regal use the "Sales" Gryphon campaign when blocking calls, and that this campaign only be used to block Scheduled Callback and Manual Outbound Call tasks.

Contact Lily has opted into the federal DNC list.

If Lily calls in, the call is allowed and will ring out as normal, since Inbound Call tasks are not set to check against a Gryphon campaign.

If an agent manually dials out to Lily, the call will be blocked, since Manual Outbound Call tasks are checked against Gryphon's "Sales" campaign, which recognizes Lily as being on a federal or state DNC list.

Updated about 1 month ago

---
