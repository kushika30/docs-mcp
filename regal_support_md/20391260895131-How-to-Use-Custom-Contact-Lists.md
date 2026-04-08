---
id: 20391260895131
title: "How to Use Custom Contact Lists"
html_url: "https://support.regal.ai/hc/en-us/articles/20391260895131-How-to-Use-Custom-Contact-Lists"
updated_at: "2025-10-31T15:31:28Z"
---

# How to Use Custom Contact Lists

**Prerequisite**: In order to use this feature, agents will need to have "[My Contacts](https://support.regal.io/hc/en-us/articles/12785249502619-How-to-Track-and-Manage-Contacts-You-Own)" enabled. My Contacts is a rolodex of contacts that allows agents to manage their customer relationship by engaging with contacts they own in any way, any time. Reach out to [support@regal.io](mailto:support@regal.io) to turn on the "My Contacts" feature if it's not already on for your account.

## What are Custom Contact Lists?

A Custom Contact List is a filtered view on top of "My Contacts" that meet the criteria you define. For example, you may want to quickly access a subset of contacts that were assigned to you based your specific outreach goals (e.g. reaching out to leads in a particular status, or reaching out to leads who have not responded in a few days). **As a manager if you want to create a shared contact list, [see below](#h_01HKWPP8Z4XA5GMNE2QVN4EXMT).**

![](https://support.regal.ai/hc/article_attachments/20412956382875)

## What are some useful ways to use the feature?

Below are some use cases that we see our customers use to manage their contacts in action-oriented ways. See if they would inspire new ways to think about your contact outreach! Additionally, this list of [auto-generated conversation fields](https://support.regal.io/hc/en-us/articles/18788837463323-Default-Conversation-Fields-under-Regal-Voice-Properties) may be useful for creating your lists.

#### Use case: New Leads with No Contact

- **Example definition:** Contacts created in the last 7 days with no "last contacted at" date
- **Action:** Make an outbound call or SMS.
- **Notes:** This list should continuously be getting to zero as your team's journeys are ideally creating tasks to contact new leads within their first 7 days, but if not, this list provides a catch all to ensure you don't miss a lead.

#### Use case: High Intent Leads (Activity Based)

- **Example definition:** Contacts with "Interested" last disposition, no contact in the last 2 days and no scheduled callback in the future
- **Action:** Make an outbound call or send SMS/Email follow-up.
- **Notes:** The contact has indicated interest in the past, and we haven't reached out to them in a few days. Follow up with the customer when they are still motivated to move forward.

#### Use case: VIP Contacts

- **Example definition:** Contacts with a certain attribute such as Annual Income over $XX range, or Quote Price higher than $XX.
- **Action:** Send curated SMS to those who may need more "white-glove" handling based on their profile.
- **Notes:** E.g. A high income customer may result in higher contract/payment size, but they often require higher frequency of manual touch points to successfully convert. This list likely requires custom handling based on agent discretion.

#### Use case: Favorite/Starred Contacts

- **Example definition:**Contacts who are tagged in a Yes/No field such as "Favorite"
- **Action:** Assess contacts in the list to see if custom actions are needed.
- **Notes:** This list can be used in various ways, e.g. a "save for later" list. Agents can work with Admins to create custom fields used to flag these contacts.

Note: If you don't see an attribute available that you'd like to filter by, ask your manager or Admin if that attribute can be made available, and the Regal team can help support.

## How can I create a Custom Contact List?

**Step 1: Navigate to My Contacts section on Agent Desktop, then** **click to create a new Contact List.**

**![](https://support.regal.ai/hc/article_attachments/20413916668699)**

**Step 2: Define conditions in modal based on use case**

Note: consult your manager or Admin for which fields to use based on your goal. You can also leverage [this set of auto-generated conversation fields](https://support.regal.io/hc/en-us/articles/18788837463323-Default-Conversation-Fields-under-Regal-Voice-Properties) to put parameters based on last call/sms activities.

![](https://support.regal.ai/hc/article_attachments/20413916687643)

**Step 3: Save and Review Contact List**

Upon saving, the contact list should populate based on the condition after a few seconds. Now it's ready for your review and action! Click on individual contacts to review and contact them.

![](https://support.regal.ai/hc/article_attachments/20413924433307)

**Note:** **Each list will show a max of 500 contacts.** Contact list will refresh upon save during create/edit process, as well as upon refreshing your screen. An action that results in any addition/removal of contacts in the list can take up to 1 minute to process.

## How Can I Share Contact Lists?

As admins in Regal, you can also share a custom contact list you created with other users in the app. **If agents want to be able to share lists with others too, contact [support@regal.io](mailto:support@regal.io) to enable for the individual.**

![](https://support.regal.ai/hc/article_attachments/21968529144347)

**Steps to share lists:**

- Toggle on "Share Contact List with Others"
- Select "All Users" or "Specific Teams". If sharing with specific teams, choose the teams you want to share with in the dropdown.
- Hit Save.

Upon saving, the list you created will appear under "Shared Contact List" section for those agents you shared with. It will also appear in your own Agent Desktop under Shared Contact List section. Custom lists can have up to 10k contacts.

![](https://support.regal.ai/hc/article_attachments/21968556865691)

## Who Can Edit Shared Contact Lists?

As an admin, you can edit any lists visible to you under Shared Contact List section, including those created by others.

As an agent who can share lists with others, you can only edit shared lists you created, but not those created by others. You can see who created and last edited the list inside the edit modal.

![](https://support.regal.ai/hc/article_attachments/21968556881947)

## How can I Sort a Custom Contact List?

Contacts are sorted by first name alphabetically by default. In order to create custom sorting, the configuration can be done for each list using the **edit modal**. Upon saving and refresh, the list will be sorted. Lists cannot be sorted directly in the list view.

Fields that can be used for sorting, in ascending or descending orders:

- Datetime (custom or Regal fields)
- String (custom or Regal fields)
- Number (custom or Regal fields)

**Note: contacts with a null field value will be shown towards the end of the list. If a new update was made, it may take up to 1 minute to update the contact.**

![](https://support.regal.ai/hc/article_attachments/42745139309083)

**Tip:** If you need to sort all the contacts under My Contact, create a custom contact list using a universal attribute such as below, contactCreatedAt Exists, which should apply to all contacts. This will allow you to add any sorting on top of all contacts you own.

![](https://support.regal.ai/hc/article_attachments/42745778566939)