# Custom AI Analysis & Reporting

## Overview

**Custom AI Analysis** lets you define structured data points, associate them with AI Agents, and run automated evaluations against post-call transcripts. Results are surfaced in real time via events and are viewable directly on the Transcript Detail Page.

Use cases include:

- **Automating workflows**: e.g., trigger CRM updates or follow-up sequences based on labels like `issue_type = billing`.
- **Enhancing reporting**: e.g., measure the percentage of calls conducted in Spanish vs. English.
- **Driving real-time actions**: e.g., surface customer intents such as `interested_in_demo` for next-step messaging.

![](https://files.readme.io/fee578f78322af81c2960427327b8f26900c8cca08cfd52a45baaaaa2482a24b-Data_Point_Modal.png)

---

## Defining Data Points

Navigate to **Dashboard → Custom AI Analysis** to configure each data point:

| Field | Description |
| --- | --- |
| **Name** | Unique identifier (alphanumeric, no spaces). Matches the `name` in the event. |
| **Description** | Human-readable explanation of the data point’s purpose. This will be passed to the LLM to assign a value to the data point. |
| **Data Type** | One of: `boolean`, `text`, `number`, `single_select`, `multi_select`. |
| **Options** | Required for `single_select` or `multi_select` types—enter each option as a value. |
| **Examples** | Optional examples (for `text`/`number`) to guide the AI’s output format. |

> **Note:** Names must follow the same conventions as Custom Action names—unique, no special characters.

---

## Associating Data Points with AI Agents

To enable evaluation of your custom data points:

1. Open the **Agent Builder** for the AI Agent you wish to configure.
2. Under **Custom AI Analysis**, check the data points you want this agent to run.

![](https://files.readme.io/8b665e2ac8ab309b9a9381751001c2f16d3b17ca0f58dc0b79ef66d6de222bd7-Screenshot_2025-11-25_at_4.23.47PM.png)

Regal evaluates every configured field by running OpenAI 4o-mini over:

- The full post-call transcript.
- Any function calls made during the conversation.

> ## 📘
>
> Improving the LLM Model
>
> If your conversations are long and/or complex and you're having trouble getting consistent and accurate results from Custom AI Analysis, try changing the LLM used using the "LLM for Custom AI Analysis" dropdown.

---

## Testing Custom AI Analysis Pre-launch

To ensure the data points you defined has fit your AI agent, or to understand what data points you will extract for a given scenario, [see details here in the testing section](/docs/test-logic-chat).

---

## The `call.analysis.available` Event

Once analysis completes, Regal emits a `call.analysis.available` event containing your defined data points under the `call_analysis` object. [Details about that event can be found here.](/docs/reporting-webhooks#callanalysisavailable)You can receive these events by subscribing to Regal's reporting webhooks or by setting up a dedicated journey to emit the event to a custom webhook.

You can also review these structured insights in the Transcript Detail Page alongside the full transcript.

![](https://files.readme.io/46f1e8ab15ebf793251a2106115d542f5922fab0b7cdd7f8b59b4e2ddfeb1b94-transcript.png)

# Custom AI Analysis in Reporting

## Embedded Agent Dashboard

After an AI agent is saved, a new "Performance" tab will be added to the agent builder. The tab will contain a standard dashboard for this individual agent showing key insights.

- **Business Metrics**: standard metrics such as total calls, total connects, transfers, etc. are added to ALL agent dashboards.
- **Custom AI Analysis**: if configured on the agent, each data point will have a designated graph based on the data type.

![](https://files.readme.io/477d86f1ecf34f6ccc4f766fe3b393be4d49e87ee0abb0a8aae0436e69ae9ee5-dash.png)

## How is the dashboard updated?

- If you add new custom AI analysis data points to your agent, new events are processed and added to dashboards on an hourly cadence.
- Tiles for data points you remove from the agent will remain in the dashboard, but the data will no longer generate (to keep a historical record).
- A name change in individual analysis data points will result in a new tile being created.
- You may customize the dashboard by adding filters, deleting or updating existing tiles, adding new tiles, etc. Any customizations you make will not subsequently be changed by Regal.

Updated 25 days ago

---
