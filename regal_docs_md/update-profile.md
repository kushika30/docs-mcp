# 👤 Update Contact Profile

## Overview

This guide shows you how to update a contact profile attribute directly by your AI Agent mid-conversation. Unlike Sending a Custom event to the profile, this action directly updates the attribute instantly (rather than 15 seconds to process), so it's useful for more time sensitive use cases like SIP Transfers.

> ## ❗️
>
> **Limitations:**
>
> This action only allows you to update one profile attribute with each invocation. So if you need to update multiple at a time, send a custom event instead (where you can include multiple contact attributes). [See docs](/docs/send-custom-event-to-regal).

---

## Key Use Cases

| Use Case | Why It’s Powerful |
| --- | --- |
| **SIP Transfers** | Update an attribute on the contact profile based on info collected mid-AI conversation, then send that data in a SIP header on an outgoing transfer, so the receiving agent has instant access to that data. |

---

## Prerequisites

Before you can send a Custom Event, you’ll need:

1. **🔑 Your Brand Slug**  
   Reach out to [[email protected].](/cdn-cgi/l/email-protection#d5a6a0a5a5baa7a195a7b0b2b4b9fbb4bcfb)
2. **🤖 AI Agent Configured for Custom Actions**  
   You’ll set up a Custom Action that the agent can call at the right moment.

---

## Setting Up the Custom Action in Regal

Setting up your custom action is quick:

1. **Create the Action**

In the Regal AI Agent Builder: → *Add Action* → *Custom Action*

2. **Fill Out the Details**

| Field | Example |
| --- | --- |
| **Name** | update\_profile\_with\_call\_reason |
| **Description** | Call this function to send a call summary to the agent before initiating the transfer |
| **Endpoint URL** | <https://rv-apps.io/ai-agents?b=your-brand-slug&field_path=custom_properties.callReason&fn_name=update_profile> |
| **Define AI Variables** | **name:** `field_value` *// note: this needs to be called field\_value* **data type:** `single-select`*// note: this can be string or single select depending on your use case* **value type:** `string` **description:** What reason did the customer provide for calling? **value options:** `Billing`, `Troubleshooting`, `Other` |
| **Custom Header** | Authorization: **YOUR API KEY GOES HERE** |
| **Payload** | *leave empty* |

**👉 Screenshot Example Setup**:

![](https://files.readme.io/73a999a0bdba1e3ad31067c0c444c46c446adeab8cef5a20df52d242c0de2ea8-example.png)

### What to Update:

- Replace the API key placeholder with your own.
- Replace your-brand-slug with your own (in the b= section of the URL). Example endpoint above is using circle-bank as an example
- Replace the name of the contact attribute in the endpoint URL. Example above is using callReason (which is how it will appear on the profile).
- Replace the name of the custom action with something meaningful to your use case
- Replace the description in your AI variable with what makes sense for your use case

---

## Example Prompt

Instruct your AI agent when to invoke your Update Profile custom action. For example, let's say you want to invoke this action as soon as the customer provides you their reason for calling. Then you want to immediately invoke a transfer to a human agent.

Prompt

```
#Collect the Customer Reason for Calling
1. Say: "Thanks for calling Circle Bank. How can I help you today?"
  - If the customer gives their reason for calling, call function update_profile_with_call_reason and say "I understand. Let's get you the help you need." Then immediately call function transfer_call
```

---

## Test Your Custom Action

Testing is simple:

1 - **Save your Custom Action** inside the AI Agent.

2 - **Trigger the action** during a test call or simulated flow.

3 - **Verify** that the attribute name and value appears as expected on the Contact Profile in Regal.

**✅ If everything is good, you’re ready to use it in production.**

---

## Troubleshooting & FAQ

Can I update multiple contact attributes with a single custom acton? 
  

No, not using the Update Profile action. If you need to invoke this action at different points of the call when info is collected, you can create multiple Update Profile actions (one for each attribute you need to update), and prompt the agent to invoke each action at the appropriate point of the call. Or if you need to update all attributes at the same time, you can instead use the Send Custom Event action (see docs: https://developer.regal.ai/docs/send-custom-event-to-regal).

Why would I use this custom action instead of the Send Custom Event action? 
  

The Update Profile action hits a dedicated endpoint that instantly updates the contact profile for use cases that are extremely time sensitive like needing to update the profile, then immediately reference that data in a SIP header on a SIP transfer. Instead the Send Custom Event action (is more flexible) but it hits the Custom Events endpoint which takes ~5-15 seconds to reflect on the profile, and in the event of traffic spikes can slow down.

Do I need to host anything?
  

No external hosting or code deployment needed! Everything happens inside Regal's no-code Custom Actions setup.

  
  

---

## 🙋‍♀️ Need Help?

If you need help using tis custom action—or you’d like a Regal AI Expert to review your setup—reach out anytime at:

📬 [[email protected]](/cdn-cgi/l/email-protection#b7c4c2c7c7d8c5c3f7c5d2d0d6db99d6de)

We’re happy to help!

Updated 5 months ago

---
