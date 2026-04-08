# Gather Date/Time

## Overview

The Gather Date/Time function let's you check check if a date/time falls within your business hours in Regal before scheduling in Regal or another system.

## Key Use Cases

| Use Case | Why It’s Powerful |
| --- | --- |
| **Caller want to call you back** → Check Business Hours | Calls asks if I call back Sunday. Agent can keeps your customer informed of your business hours. |
| **Lead qualification** → Account Rep/Licensed Agent Callback | Keeps your account reps' calendars full effortlessly. |
| **After Hours Agent** → Call back from Human Rep during business hours | Don't lose out on after hours leads or pay for expensive answering services. |
| **Caller Busy** → AI Agent Callback | Caller answers but says now's not a good time. Agent can schedule callback and place the call at a time that works better for the customer. |

---

## Configure Your Business Hours

In Regal, you can create business hours templates for different use cases and teams.

1. Go to Settings > General
2. Configure your Default Business Hours or Create Custom Business Hours

- If you just have one standard set of business hours, just use default
- If you have different business hours for different teams or use cases you need your AI Agents to reference, create a business hours template for each

![](https://files.readme.io/eda64f1fb69dcde021dc65035586bcc38488db2cfc75c5e410ff6fe4516b76d1-biz_hours.png)
![](https://files.readme.io/6829019873bd5f78e6d752fce67abfaa04860d48e493d48604d5307e3a08d415-West.png)

## Configure Gather Date/Time Action

1. Create a Gather Date/Time action in your agent that checks whether a time provided by the customer is in business hours. Select the business hours template you want it to reference

![](https://files.readme.io/ca10dd094fae68f60fc5a2208ada44180875234b7cb5c4c1e1e0cb8b37f088ce-get_date.png)

2. **(Optional) Latest Date** - If for your use case you need the agent to encourage the customer to pick a date before a certain cut off, you can specify a contact attribute that includes a date. And add an offset if needed.

For example, in the case of a home insurance policy, let's say a hurricane happens, and there's a certain cut off for the customer to submit a claim. You can specify a contact attribute on their profile that represents the date of the natural disaster and an offset in days such as 60 days that will be added to that date. In this case if the customer tries to schedule more than 60 days after the date of the hurricane, the AI Agent will encourage the customer to book before then. In your prompt you can make the "encouragement" as strong or weak as you want.

![](https://files.readme.io/cba1a1fe8e690100a5a0b396b1c23489487c075ef3ebee1bdd3b2e60c7dabdd2-maxdate2.png)

### What the Gather Date/Time Response Includes

Every time you invoke a Gather Date/Time, the returned values help guide your AI agent’s behavior:

| Field | Meaning |
| --- | --- |
| **is\_available** | Boolean — **true** means the selected time is within business hours; **false** means it’s not. |
| **next\_step** | Instructional text you can use in your prompt to explain what to do next. |
| **business\_hours** | A string that explains your brand’s availability for the requested day. |
| **friendly\_datetime** | Voice-friendly format that the AI Agent can read back to the contact for confirmation (e.g., “Monday 05/05/2025 at 4:00PM Eastern Time”), if the requested time was available. |
| **datetime** | The correctly formatted string to use in the schedule\_callback custom action. |
| timezone | The timezone for the business hours. |
| date | Date only, MM/DD/YYYY |
| day | The day of the week |
| time | Time only, with AM/PM |

**Example scenarios:**

- If a user says “tomorrow at 4pm” and it’s available, you’ll get `is_available: true` and a helpful `next_step` to schedule.

  JSON

  ```
  {
      "next_step": "Confirm the date, time, and timezone with the user (tomorrow, which is Friday, May 02, 2025, at 4:00PM Eastern Time). Use both the day of the week and the calendar date for clarity.",
      "timezone": "Eastern Time",
      "is_available": true,
      "datetime": "2025-05-02 16:00:00 -04:00",
      "date": "05/02/2025",
      "friendly_datetime": "Friday 05/02/2025 at 4:00PM Eastern Time",
      "time": "4:00PM",
      "day": "Friday",
      "business_hours": "On the selected day (tomorrow, which is Friday, May 02, 2025) business hours are from 8:00AM to 6:00PM (Eastern Time)."
  }
  ```
- If a user says “Saturday at 8am” and it's not available, you'll get `is_available: false`, and a `next_step` telling the agent to suggest a different time.

  JSON

  ```
  {
      "next_step": "On the selected day (tomorrow, which is Saturday, May 03, 2025) business hours are from 12:00PM to 3:45PM (Eastern Time). The selected time (8:00AM) is not available, ask the user for a different time.",
      "timezone": "Eastern Time",
      "is_available": false,
      "datetime": "2025-05-03 08:00:00 -04:00",
      "date": "05/03/2025",
      "friendly_datetime": "Saturday 05/03/2025 at 8:00AM Eastern Time",
      "time": "8:00AM",
      "day": "Saturday",
      "business_hours": "On the selected day (tomorrow, which is Saturday, May 03, 2025) business hours are from 12:00PM to 3:45PM (Eastern Time)."
  }
  ```

## Update Your Agent Prompt

To make scheduling reliable and compliant, **you should include both a structured set of "Scheduling Steps" and a clear prompt in your AI agent to refer to these steps.**

🧩 **Example Prompt Snippet and Scheduling Steps**

> If the user responds saying that now's not a good time or they want to schedule for another time, help them schedule it using the "Scheduling Steps"
>
> Scheduling Rules
>
> - Current date and time is `{{current_time}}`.
> - Customer timezone is `{{contact.rvProperties.timezone}}`
>
> Scheduling Steps
>
> 1. Ask the customer "When are you available for a callback?"
> 2. After the customer gives you a date/time, immediately call function get\_date
>
> - if the the date/time the customer selected is available, immediately call function schedule\_callback and state back the date, time, and timezone to let them know you've scheduled it (for example; "Great, I just scheduled you for Friday June 20, 2025 at 2pm ET. We'll give you a call back then.")
> - don't worry if you get a "profile not found" error from the action result, still confirm that it's been scheduled.

> ## 👍
>
> Timezone
>
> If the customer specifies a timezone like "Can you schedule at 3pm Pacific Tomorrow", then the agent will use that. But if no timezone is provided, the agent will assume the local timezone on the contact's profile which is set by zip code if one exists, else area code.

## Test Your Setup

1. **Test Logic testing interface** to test your Gather Date/Time action
2. **Set a test value for timezone attribute** otherwise agent will request a timezone if you don't specify in test value or in your message to the agent

![](https://files.readme.io/0f69a915e16a19fdfb584e6a41956affca61f9726d505e3453285c2aca9e0df5-timezone.png)

3. **Request a time within and outside business hours** to test that the agent responds appropriately:
4. You can see how the agent responds and expand the "Action Result" to see what the Gather Date/Time action returns

![](https://files.readme.io/d28af824278879a1739ca908d9c1d7dec7029c4454361449cdbc1b672c103fa0-chat.png)
  

## Troubleshooting & FAQ

✅ Scheduled for a time that wasn’t available
  

Double-check your **business hours** are correctly set in your [Admin settings](https://app.regal.io/settings/general-settings).

✅ Can I use separate business hours, or multiple business hours based on timezone?
  

Yes! You can set custom business hours in your admin settings and create multiple get\_date custom actions with timezone appended. You can then have your agent prompt for the contact's timezone preference and use the appropriate get\_date tool, for example get\_date\_pacific\_time. You'll need to add your custom business hours ID to the corresponding functon. Reach out to support if you have trouble locating the ID.

Updated 10 months ago

---

What’s Next

- [Schedule Callback](/docs/schedule-callback)
