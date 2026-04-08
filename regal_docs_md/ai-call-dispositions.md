# AI Call Dispositions

## Overview

Your AI voice agent assigns one of two types of dispositions one of two types of dispositions to each call after the call has been completed. **System Dispositions** are evaluated first and will be assigned based on the presence of deterministic call features. **AI Dispositions** are evaluated only if no system rule applies.

> ## 🚧
>
> AI Agent Calls vs. SMS Tasks
>
> AI Call tasks follow the disposition process described in this article. SMS tasks use a separate workflow—see the “Disposition Settings” section of the [AI SMS Agent Settings](/docs/sms-agent-settings#disposition-settings) article for details.

## System Dispositions

System dispositions are evaluated before any AI Dispositions and cannot be changed in the disposition table. The list of existing AI System Dispositions is as follows:

- **AI Call Transferred**  
  Assigned when the call is transferred internally to another queue or externally to another phone number.
- **AI Callback Scheduled**  
  Assigned when the AI schedules a callback with the contact.
- **No Answer**  
  Assigned when the call endlessly rings or there is dead air (no transcript is produced).
- **Pre-Recorded Voicemail**  
  Assigned when a voicemail is dropped on an unanswered call.

**Note: There are additional System Dispositions if you are using Progressive Dial mode or AMD:**

| System Disposition | Description |
| --- | --- |
| No Answer - No voicemail box | The call was determined as unanswered by the detection algorithm and there is a campaign voicemail message configured. The system can't leave this message because the contact has no voicemail box. |
| No Answer - Voicemail could not be dropped | The call was determined as unanswered by the detection algorithm and there is a campaign voicemail message configured. The system can't leave this message due to an error. |
| No Answer - Device is busy | The call could not connect because the contact's device is busy. |
| Call Failed - Invalid phone number | The call failed because the contact's phone number is invalid. |
| Call Failed - Contact country not permitted | The call failed because your account is not configured to make calls to the contact's country. Reach out to your FDE to expand calling permissions to more countries, if needed |
| Call Failed | The call failed due to an unknown reason. |
| Contact is not subscribed to Voice | The call could not be placed since the contact is not subscribed to Voice. |
| No conversation - Customer hung up | The call was determined as potentially answered by the detection algorithm but was hung up by the contact before it could be connected to an agent. This should be very rare with AI Agents. |

  

## AI Dispositions

When no system disposition applies, the agent follows these steps:

1. Retrieve the full call transcript.
2. Review each AI Disposition you have defined, including name, description, and a flag indicating whether a conversation happened.
3. Ask the LLM to select the best match based on the transcript content.
4. Write a concise rationale into the notes field explaining the choice. You can view these notes on the transcript detail page and in the `call.completed` event payload.

## Enabling a Disposition for AI Usage

1. Go to the [Disposition Settings](https://app.regal.io/settings/agent-desktop/dispositions) page.
2. Toggle **Enable Disposition for Regal AI agents** to make a custom disposition eligible for selection by AI agents.
3. [Optional]Adjust the **Visibility** setting to restrict which AI teams (e.g. Sales, Support) can see and use each disposition.

If no custom dispositions are enabled for an AI agent, the system will assign a generic **AI Call Completed** disposition by default.

![](https://files.readme.io/6921c2ce00d25d2234e6cbae182b9c72efbde02aa313be066385d268399a00bc-Screenshot_2025-06-18_at_4.28.01_PM.png)

## Disposition Table vs Global Settings

The disposition table shows only your AI Dispositions. System Dispositions always run first and cannot be removed or overridden by those in the table.

## Selecting a Model for AI Dispositions

Regal uses OpenAI's GPT 4o-mini to disposition AI Agent calls by default. If you find that you aren't getting the results you'd like from dispositions - for example, if your calls or disposition descriptions are long and the LLM isn't doing a great job at assigning dispositions, you might want to change the model used.

![](https://files.readme.io/ea7617c209a44b3e698b5da1be20c0d5e1209df91d1bcd39de9839eac7a0c196-Screenshot_2026-03-30_at_2.33.48PM.png)

You're able to toggle the disposition used under the "Dispositions" section of the AI Agent Builder. Generally, if you're looking for more accurate disposition results, you should try a larger model (like 4o, 4.1, or 5) instead of a more recent, smaller model (like 4.1 mini or 5 mini).

## Best Practices

1. **Ensure mutual exclusivity**  
   Define AI Dispositions so that each call scenario fits exactly one option. Clear, non-overlapping descriptions reduce ambiguity.
2. **Minimize the number of AI Dispositions**  
   A smaller set of well-defined options improves accuracy. The AI is more likely to select the correct outcome when it has fewer choices.

Updated 8 days ago

---
