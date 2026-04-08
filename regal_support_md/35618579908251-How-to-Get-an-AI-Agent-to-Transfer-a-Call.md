---
id: 35618579908251
title: "How to Get an AI Agent to Transfer a Call"
html_url: "https://support.regal.ai/hc/en-us/articles/35618579908251-How-to-Get-an-AI-Agent-to-Transfer-a-Call"
updated_at: "2025-05-29T15:10:59Z"
---

# How to Get an AI Agent to Transfer a Call

Regal AI Agents can initiate transfers when you need your AI agent to hand off a call to a live representative. Transfers are a type of Agent Action that you can prompt your AI agent to invoke at the right time. Regal supports both internal and external transfers. Currently these are both "cold" transfers. But Regal will be adding support for "warm" transfers in Q2 2025.

![Screenshot 2025-04-03 at 11.07.57 AM.png](https://support.regal.ai/hc/article_attachments/35618565326875)

### Types of Transfers

#### Internal Transfer

Transfers the call to a Regal queue.

- **Use Case:** Route a contact to a sales or support queue in Regal for live follow-up. This is for companies whose human agent teams sit in Regal.
- **Behavior:** The AI hangs up immediately after creating the transfer task targeted at the selected queue. By default the next available agent in that queue will receive the call, but if you want a different behavior you can configure your Transfer routing rules: **Settings > Task Routing > Routing Rules > Transfers**.
- **How to Configure:** Use the **Internal Transfer** action in the prompt and select the target queue from the dropdown. Then prompt your agent when to invoke that action.

![Screenshot 2025-04-03 at 11.06.16 AM.png](https://support.regal.ai/hc/article_attachments/35618565328155)

#### External Transfer

Transfers the call to an external phone number.

- **Use Case:** Transfer a call to an external system or direct line.
- **Behavior:** The AI hangs up once the transfer is initiated, and the call is handed off to the external number.
- **How to Configure:** Use the "External Transfer" action and specify the phone number to send the call to.

![Screenshot 2025-04-03 at 11.07.36 AM.png](https://support.regal.ai/hc/article_attachments/35618565329563)

> ### 📘 Note - SIP Transfers
>
> If your agent needs to execute a SIP transfer or PSTN Transfer + HTTPs request to send metadata along with the transfer, there are additional configuration steps you need to follow. See [SIP Integration docs](https://developer.regal.ai/docs/sip-integration).

### Transfer Settings

#### Delay

- **Description:** Adds a short pause before initiating the transfer so the AI can finish speaking before the dial tone begins.
- **Applies To:** External Transfers only.
- **Recommended:** You'll have to test. With different options as this really depends on what you're telling the agent to say before transferring e.g., if they are just saying "Transferring you now", 4 seconds is likely sufficient. But if they are saying "Great. Now I'm going to transfer you to a licensed agent who can help you further," you will need more like 8-10 seconds.

#### Speak During Execution

- **Description:** Specifies what the AI should say while initiating the transfer.
- **Example:** “Great! I’m transferring you now.”

### Prompting Your Agent to Transfer

In your prompt, tell your agent when they should invoke your transfer functions.

![Screenshot 2025-04-03 at 11.09.00 AM.png](https://support.regal.ai/hc/article_attachments/35618579904027)

**Tip:** You can use contact attributes to dynamically determine the destination number (e.g., different numbers for different regions or campaigns).

### Dispositions

When a transfer is initiated on a call, Regal automatically summarizes the task using the **"AI Call Transferred"** disposition.

### Reporting

In Regal reporting, you can view count of internal and external transfers, transfer rate, etc. metrics.