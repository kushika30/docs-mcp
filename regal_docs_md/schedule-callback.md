# Schedule Callback

## Overview

The Schedule Callback action lets you trigger a Scheduled Callback Task in Regal at the exact time the customer requested it.

Depending on your use case you can either:

- Schedule a callback for "right now" - e.g., in an SMS agent, ask customer if now is a good time to give them a call, and if they a agree, schedule a callback for the current time
- (More common) Pair the Schedule Callback action with the Gather Date/Time action to first to solicit a date/time in the future that works for the customer to give them a call (and check your business hours first). Then create the Scheduled Callback. See [Gather Date/Time guide](/docs/gather-datetime) first.

## Key Use Cases

| Use Case | Why It’s Powerful |
| --- | --- |
| **Lead qualification** → Account Rep/Licensed Agent Callback | Keeps your account reps' calendars full effortlessly |
| **After Hours Agent** → Call back from Human Rep during business hours | Don't lose out on after hours leads or pay for expensive answering services. |
| **Caller Busy** → AI Agent Callback | Caller answers but says now's not a good time. Agent can schedule callback and place the call at a time that works better for the customer. |

---

## Configure Schedule Callback Action

From the agent builder:

1. Select the Scheduled Callback Action

![](https://files.readme.io/cfbe05ab6dece686424aade86f25bd37604f66bb27c632b1ca8f1a3c0c576451-list.png)

2. Name your action and give it a description

![](https://files.readme.io/294093073e75d112bd948903456b6fd8b43785dfd8ee7efbbb18dc3e904224c6-callback.png)
  

## Update Your Agent Prompt

To make scheduling reliable and compliant, in addition to defining the custom actions correctly, **you should include both a structured set of "Callback Steps" and a clear prompt in your AI agent to refer to these steps.**

**Example Prompt Snippet and Callback Steps**

> If the user responds saying that now's not a good time or they want to schedule for another time, help them schedule it using the "Callback Steps"
>
> Scheduling Rules
>
> - Current date and time is `{{current_time}}`.
> - Customer timezone is `{{contact.rvProperties.timezone}}`
>
> Callback Steps
>
> 1. Ask the customer "When are you available for a callback?"
> 2. After the customer gives you a date/time, immediately call function get\_date
>
> - if the the date/time the customer selected is available, immediately call function schedule\_callback and state back the date, time, and timezone to let them know you've scheduled it (for example; "Great, I just scheduled you for Friday June 20, 2025 at 2pm ET. We'll give you a call back then.")
> - don't worry if you get a "profile not found" error from the action result, still confirm that it's been scheduled.

> ## 🚧
>
> Remember to use **Gather Date/Time** first to validate the contact’s input before calling **Schedule Callback**.

## Test Your Setup

1. **Place a test call or sms into the phone number of your agent**
2. **Request a call at a later time**
3. Visit **[Recent Activity](https://app.regal.io/recent-activity)**
   1. Confirm the “[scheduled.callback.requested](/docs/reporting-webhooks#scheduledcallbackrequested)” event appears
4. Open your Callback Journey (**Journeys** → *Scheduled Callback Request Journey*)
   1. Verify the contact is placed correctly into the **delay node**

---

## Troubleshooting & FAQ

✅ Scheduled for a time that wasn’t available
  

Double-check your **business hours** are correctly set in your [Admin settings](https://app.regal.io/settings/general-settings).

✅ Can I use separate business hours, or multiple business hours based on timezone?
  

Yes! You can set custom business hours in your admin settings and create multiple get\_date custom actions with timezone appended. You can then have your agent prompt for the contact's timezone preference and use the appropriate get\_date tool, for example get\_date\_pacific\_time. You'll need to add your custom business hours ID to the corresponding functon. Reach out to support if you have trouble locating the ID.

🚫 Nothing gets scheduled
  

Ensure endpoint URLs and AI variables are mapped correctly. Also check whether filters in your default scheduled callback journey are preventing entry.

❌ Can I cancel a scheduled callback?
  

Yes! Open the journey, find the contact in the delay node, and click **Stop** before the callback time.

Updated 7 months ago

---
