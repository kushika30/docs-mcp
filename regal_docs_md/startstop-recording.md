# Start/Stop Recording

## Overview

Use `stop_recording` to pause recording when customers share private or sensitive information—such as payment details or PII—and `start_recording` to resume recording when appropriate.

These actions are useful in regulated environments or any situation where partial call recording improves compliance and customer trust.

## Behavior

`stop_recording`: Halts recording for the duration of the call or until `start_recording` is called. Audio during this period is not captured or stored.

`start_recording`: Resumes recording from the point it is called. The call continues uninterrupted for the customer.

Calls are recorded by default unless explicitly paused.

## Configure Start/Stop Recording Action

Select the Start Recording or Stop Recording actions from the Actions menu.

![](https://files.readme.io/24a2230d07c0fdd62a4a5cd370b23d081975c67052ff508e0eb1a4fdf46a4e44-Screenshot_2025-09-12_at_4.08.10_PM.png)

Then add a description to your action for when it should be invoked such as, "Use immediately after asking the contact for credit card information."

![](https://files.readme.io/9a94cb4152c4db8d306c664ccd8529bf55061d64bb7b5367ed5cf0ad977c4fe4-Screenshot_2025-09-12_at_4.09.04_PM.png)

## Update Your Agent Prompt

To enable these actions, include clear instructions in your prompt about when to use them.

Example:

> When the customer begins providing sensitive information like their health history, call `stop_recording`. Once the sensitive section is complete, call `start_recording` and resume the conversation.

## Best Practices

- Place the function **before** the agent says "I'll stop recording now" to avoid recording sensitive data during the delay.
- Resume recording as soon as the sensitive portion of the call ends.
- Use these actions consistently to build customer trust and reduce compliance risk.
- Pair with contextual cues (e.g., “I have my card ready”) to trigger `stop_recording`.

Updated 7 months ago

---
