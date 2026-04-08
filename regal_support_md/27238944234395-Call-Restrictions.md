---
id: 27238944234395
title: "Call Restrictions"
html_url: "https://support.regal.ai/hc/en-us/articles/27238944234395-Call-Restrictions"
updated_at: "2026-01-09T19:59:32Z"
---

# Call Restrictions

## Overview

Regal's Call Restrictions feature set helps you ensure that relevant calls are not placed during FTC or state-restricted timeframes. Call Restrictions supported by Regal include:

**Daily Available Hours:** The FTC restricts telemarketing calls outside the hours of 9am - 8pm in the contact's local timezone*.*

The hours outside of Daily Available Hours are considered "Quiet Hours". By default, Regal blocks relevant calls outside of Daily Available Hours (9am - 8pm).

**Weekend Restrictions:** Some states (e.g. Alabama) restrict calls during certain weekend timeframes (e.g. all of Saturday).

**State/Federal Holidays**: Some states restrict calls during federal or state-specific holidays (e.g. Louisiana prohibits calls on Good Friday).

**State of Emergency**: Some states restrict calls during emergencies such as temporary curfews or natural disasters.

**Daily Call Limits**: Some states (e.g. Florida) have a limit on the number of telemarketing calls that can be placed to a contact each day.

**DNC Lists and Opt-out**: The FTC restricts calls to contacts on a DNC list or those who have opted out of calls.

Regal respects the opt-in/out status of each contact, which can be configured by agents or admins. For Do-Not-Contact (DNC) list management, Regal integrates with Gryphon. Learn more about the Gryphon Check and how it blocks calls to contacts on DNC lists [here](https://support.regal.io/hc/en-us/articles/14234234136475-Gryphon-Check).

*Note: Inbound calls, manual outbound calls, and scheduled callbacks are not subject to call restrictions.*

### Required Setup for Respecting State-Specific Call Restrictions

In order for your configured state-specific call restrictions to be properly enforced, you must provide each contact's state information using the **custom\_properties.address.state** attribute, using the standard 2-letter state abbreviation (e.g., "NY", "CA", "TX").

Without this state information, Regal cannot determine whether state-specific restrictions apply to a contact to know to subsequently block calls if needed.

![](https://support.regal.ai/hc/article_attachments/41113119201563)

### Default State Holiday Coverage

By default, Regal is set up to follow the State Holiday restrictions listed below. Regal also supports Federal Holidays - where calls will be blocked to all contacts regardless of state.

#### Default State Holidays List:

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Holiday** | **AL** | **LA** | **NE** | **PA** | **RI** | **UT** |
| **New Year's Day** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Martin Luther King Day** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Inauguration Day** |  | ✓ |  |  |  |  |
| **President's Day** | ✓ |  | ✓ | ✓ | ✓ | ✓ |
| **Mardi Gras Day** | ✓ | ✓ |  |  |  |  |
| **Good Friday** |  | ✓ |  | ✓ |  |  |
| **Confederate Memorial Day** | ✓ |  |  |  |  |  |
| **Arbor Day** |  |  | ✓ |  |  |  |
| **RI Independence Day** |  |  |  |  | ✓ |  |
| **Memorial Day** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Jefferson Davis Day** | ✓ |  |  |  |  |  |
| **Flag Day** |  |  |  | ✓ |  |  |
| **Juneteenth Day** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Independence Day** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Pioneer Day** |  |  |  |  |  | ✓ |
| **Victory Day** |  |  |  |  | ✓ |  |
| **Labor Day** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Columbus Day** | ✓ |  | ✓ | ✓ | ✓ | ✓ |
| **Election Day** |  |  |  | ✓ | ✓ |  |
| **Veterans Day** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Thanksgiving** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Day after Thanksgiving** |  | ✓ | ✓ | ✓ |  |  |
| **Christmas** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

## In-App Monitoring and Configuration

### Monitor Your Compliance

When a call task is created, Regal will check the call type, your call restriction configuration, the contact's state (via custom\_properties.address.state), and the contact's timezone (if relevant) to determine whether it can be placed or routed to an agent.

If a contact is deemed non-contactable and the task is a campaign outbound call or ASAP callback, the call will be moved into a Quiet Hours queue which has no eligible agents. You can view a list of the pending calls in the Quiet Hours queue by filtering the Upcoming Tasks page by queue. ![quiet_hours_tasks_page.png](https://support.regal.ai/hc/article_attachments/27245711947291)

You can find the number of pending calls in the Quiet Hours queue and other stats in the Queues page. ![quiet_hours_queues_page.png](https://support.regal.ai/hc/article_attachments/27245711949595)When the contact is contact-able, they will move out of the Quiet Hours queue into an agents queue per the brand's routing rules so they can be handled.

### Update Your Call Restrictions Settings

The Call Restrictions section in Settings allows you to view and update your current configuration for each restriction type: Daily Available Hours, Holidays, Daily Call Limits, and States of Emergency.

![](https://support.regal.ai/hc/article_attachments/42634288130715)

![](https://support.regal.ai/hc/article_attachments/42632599707547)

![](https://support.regal.ai/hc/article_attachments/42632602258331)