# Voicemail Drop

## Overview

Use this when a call reaches voicemail and you want to leave a **pre‑recorded** message instead of the AI speaking live.

## When to use

- Example: Outbound outreach where you want a consistent 20–30 second message. If the call is sent to voicemail, use Voicemail Drop so the contact hears your pre‑recorded message.

## Which recording will play

1. The voicemail recording associated with the **agent** (if it exists).
2. Otherwise, the voicemail recording associated with the **campaign** (if it exists).
3. Otherwise, the **default** voicemail recording.

## How to enable

First, add a Voicemail Drop action by clicking "Add Action".

![](https://files.readme.io/800fc29b6f6915e3801b186f08ead54f10bdf4004c8e6888acab2cce8704056b-Screenshot_2025-09-15_at_7.32.24_PM.png)

Copy and paste the following snippet into your Task Steps to instruct your AI Agent on when to use your Voicemail Drop action.

Markdown

```
# Voicemail Instructions
- You can tell you've been sent to voicemail if you hear any phrases like "not available", "not here", "leave a message", "leave your message", "automated voice messaging system", or "your call has been forwarded" at the beginning of the call.
- If the contact doesn't answer the phone and you're sent to voicemail, invoke drop_voicemail.
```

Updated 7 months ago

---
