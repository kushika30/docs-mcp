# 📩 Send Custom Event to Contact Profile

## Overview

Custom Events unlock powerful new capabilities for your AI Agents. With just a simple custom action, you can push important conversation updates onto a contact profile — fueling better agent handoffs, journey triggers, and reporting.

This guide will walk you through exactly what Custom Events are, when to use them, and how to set one up — even if you’re not a developer!

---

## What Does This Custom Action Do?

This custom action **sends a [new event](https://regal-voice.readme.io/reference/overview)** onto the contact's profile while the AI conversation is still happening.

It’s perfect for mid-call workflows, like:

- **Warm transfer handoffs:**  
  Send a quick call summary to the human agent before connecting the customer.
- **Journey triggers:**  
  Start a new Journey based on milestones in the conversation (e.g., appointment booked, quote delivered).
- **Custom reporting:**  
  Log conversation breadcrumbs (like “customer got to qualification complete moment”) for analytics.

> ## 👍
>
> **Tip:**
>
> Think of a custom event like dropping a little “bookmark” inside a contact’s record, exactly when something important happens.

---

## Key Use Cases

| Use Case | Why It’s Powerful |
| --- | --- |
| **Pre-transfer Summary** | Help human agents see what the AI has already handled. |
| **Appointment Reminders** | Trigger an SMS confirmation journey automatically. |
| **Custom Analytics** | Capture micro-events inside the conversation (quote given, consent obtained, etc.). |
| **Live Contact Updates** | Instantly update contact traits mid-call for real-time insights. |

---

## Prerequisites

Before you can send a Custom Event, you’ll need:

1. **🔑 Your Regal API Key**  
   If you have trouble finding this ask [[email protected].](/cdn-cgi/l/email-protection#34474144445b46407446515355581a555d1a)
2. **🤖 AI Agent Configured for Custom Actions**  
   You’ll set up a Custom Action that the agent can call at the right moment.

---

## Setting Up the Custom Action in Regal

Setting up your custom action is quick:

1. **Create the Action**

In the Regal AI Agent Builder: → *Add Action* → *Custom Action*

![**Example:** Sending A Summary to the Transfer Agent](https://files.readme.io/82630f6d04894ae563c0c75c755e2433e7eb700e936ca587f19ed1128af32a9e-Screenshot_2025-04-28_at_7.37.41_PM.png)

**Example:** Sending A Summary to the Transfer Agent

2. **Fill Out the Details**

| Field | Example |
| --- | --- |
| **Name** | send\_summary\_to\_transfer\_agent |
| **Description** | Call this function to send a call summary to the agent before initiating the transfer |
| **Endpoint URL** | <https://events.regalvoice.com/events> |
| **Define AI Variables** | `call_summary` (string) | `customer_questions` (string) | `sentiment` (string) |
| **Custom Header** | Authorization: **YOUR API KEY GOES HERE** |
| **Payload** | See JSON Template Below |

You’ll use simple handlebars syntax for variables like {{variables.call\_summary}}.

**👉 Screenshot Example Setup**:

![**Example:** Variables sent to the Human Agent Prior to Transfer](https://files.readme.io/1289fd4ee66a6134188d6e988892960574cd4784c1731214d41e11a934246d50-Screenshot_2025-04-28_at_7.33.38_PM.png)

**Example:** Variables sent to the Human Agent Prior to Transfer

---

## JSON Payload Template

You’ll define the payload directly inside the Custom Action. Here’s an example:

JSON

```
{
    "userId": "{{contact.externalId}}",
    "traits": {
        "phones": {
            "{{contact.contactPhone}}": {}
        }
    },
    "name": "AI Agent Call Summary",
    "properties": {
        "ai_agent_name": "<Your Agent Name>",
        "call_summary": "{{variables.call_summary}}",
        "customer_questions": "{{variables.customer_questions}}",
        "customer_sentiment": "{{variables.sentiment}}"
    },
    "eventSource": "Regal Voice"
}
```

⸻

![**Example:** Payload to Send A Summary to the Transfer Agent](https://files.readme.io/39e497c7b3cb85c208c8cb5b8f5b18419fc2902ea85076314eb4fbe3e3791e11-Screenshot_2025-04-28_at_7.42.10_PM.png)

**Example:** Payload to Send A Summary to the Transfer Agent

### What to Update:

- Replace the API key placeholder with your own.
- Map your AI variables properly.

> ## 📘
>
> Tip:
>
> You can customize the properties section with any additional details you want Regal to track, such as appointment time, product type, or notes!

---

## Test Your Custom Action

Testing is simple:

1 - **Save your Custom Action** inside the AI Agent.

2 - **Trigger the action** during a test call or simulated flow.

3 - **Verify** that the event appears inside **[Regal’s Recent Events Explorer](https://app.regal.io/recent-activity).**

4 - **Check the payload** is correct and no fields are missing!

![**Example:** Pre-Transfer Summary Event in Recent Activity](https://files.readme.io/33fce52d9c02a0e8ccca57107fcff7dc9c3414863ecceb522d4fcbfe029756ac-Screenshot_2025-04-28_at_7.48.33_PM.png)

**Example:** Pre-Transfer Summary Event in Recent Activity

5 - **Configure your custom event to display** in the Agent desktop for the approach agent team(s). [See docs for how](https://support.regal.ai/hc/en-us/articles/27877846027291-How-to-Show-a-Contact-s-Events-in-the-Activity-Feed) and then check that you see it displayed on the Activity desktop

![](https://files.readme.io/cc072cdab5541cdb6184c6a5cacd147e216a71732f7bbd3952f79af0fdb55455-custom.png)

**✅ If everything is good, you’re ready to use it in production.**

---

## Troubleshooting & FAQ

| Problem | Solution |
| --- | --- |
| **401 Unauthorized** | Double-check your API key in the **Authorization** header. |
| **400 Bad Request** | Validate your payload against Regal’s Event [API schema](/reference/api). |
| **No event shows up** | Ensure your agent is calling the right Custom Action and the public URL is correct. |

---

## FAQ

Can I send multiple events during a call?
  

Absolutely. You can call this Custom Action multiple times wherever needed! Just **include instructions in your prompt** for when the agent should call the action.

Can I hardcode properties instead of relying on AI variables?
  

Yes — hardcode any constant properties inside the Payload Format field.

Do I need to host anything?
  

No external hosting or code deployment needed! Everything happens inside Regal's no-code Custom Actions setup.

  
  

---

## 🙋‍♀️ Need Help?

If you need help setting up your custom event—or you’d like a Regal AI Expert to review your setup—reach out anytime at:

📬 [[email protected]](/cdn-cgi/l/email-protection#f4878184849b8680b48691939598da959d)

We’re happy to help!

Updated 10 months ago

---
