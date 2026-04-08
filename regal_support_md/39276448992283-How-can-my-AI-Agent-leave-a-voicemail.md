---
id: 39276448992283
title: "How can my AI Agent leave a voicemail?"
html_url: "https://support.regal.ai/hc/en-us/articles/39276448992283-How-can-my-AI-Agent-leave-a-voicemail"
updated_at: "2025-08-07T14:27:45Z"
---

# How can my AI Agent leave a voicemail?

AI agents can leave voicemails using Regal's Answering Machine Detection (AMD). AMD determines whether a call was answered by a human or by a machine.

> **Note:** If your AI agent is staffing a **progressive dial campaign**, voicemail behavior follows the campaign-level voicemail settings configured in the [Progressive Dialer campaign setup](https://support.regal.ai/hc/en-us/articles/22549353073179). AMD is built into the progressive dialer algorithm, so individual AI agent AMD settings are ignored for progressive dialer calls. The instructions below apply only to AI Agents staffing **power dial campaigns**.

Voicemail settings for AI agents on power dial campaigns are configured in the AI Agent builder. You must opt into "Use Answering Machine Detection" to enable voicemail functionality.

![](https://support.regal.ai/hc/article_attachments/39293215777051)

### 

### Setting Up AMD for Your AI Agent

1. Navigate to your AI Agent builder
2. Enable the "Use Answering Machine Detection" toggle. Note: This is a billed feature - for billing questions, reach out to your Customer Success Manager.
3. Configure your preferred voicemail behavior from the following options:
   - **Hang up:** The AI agent will hang up when voicemail is detected.
   - **Leave a personalized message:** The AI agent will deliver the personalized voicemail message that you enter in the Voicemail Message input.
     - Enter the exact message you'd like the AI agent to say upon reaching voicemail.
     - For personalization, you can reference contact attributes in this message using handlebars, eg. {{contact.firstName}}.
   - **Pre-recorded VM drop:** Select a pre-recorded voicemail from the dropdown menu of available Recordings.
     - Choose "Defer to Campaign Recording" to use the campaign-level voicemail setting.
     - Pre-recorded voicemails are uploaded and managed via the Recordings page in Settings.

       ![](https://support.regal.ai/hc/article_attachments/39293215779355)
4. Set your Voicemail Detection Duration: How long AMD has to decide if the call is human or voicemail.
   - Default is 30 seconds. Set the duration longer to improve AMD accuracy, and shorter to get AI agents off voicemail calls faster.
   - As a rule of thumb, your End Call on Silence setting (Ends the call when the agent is silent for a set amount of time) - configured in Call Settings above on the AI Agent Builder - should be longer than your Voicemail Detection Duration setting.