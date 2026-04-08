---
id: 35535095936027
title: "What Do the Different Voice Settings Mean for AI Phone Agents?"
html_url: "https://support.regal.ai/hc/en-us/articles/35535095936027-What-Do-the-Different-Voice-Settings-Mean-for-AI-Phone-Agents"
updated_at: "2025-05-29T15:10:59Z"
---

# What Do the Different Voice Settings Mean for AI Phone Agents?

### **Overview**

When setting up your AI Agent, Regal allows you to customize the voice it uses during conversations. Voice settings give you control over how the agent sounds, how fast it speaks, how quickly it responds, and how it handles interruptions. Tuning these settings helps you create more natural and effective conversations that align with your brand voice.

This guide explains the available voice providers and each voice setting, including a description, range, default value, and our recommendation for most use cases.

### **Text-to-Speech ("Voice") Providers**

Regal currently supports three voice providers:

- **ElevenLabs** – The most natural and expressive voices available. Recommended for most production use. Also has the highest uptime.
- **PlayHT** – Replicas of ElevenLabs voices. Useful as a fallback option when ElevenLabs is unavailable.
- **OpenAI** – A separate set of voices with varied tone and pacing. Helpful in specific use cases that require a different sound or rhythm.

To preview or adjust voice settings, click the gear icon next to the selected voice.

![Screenshot 2025-04-01 at 9.29.12 AM.png](https://support.regal.ai/hc/article_attachments/35535095929883)

### **Voice Settings**

#### **Speed**

- **Description:** Controls how fast the agent speaks.
- **Range:** 0 to 2.0
- **Default:** 1.0
- **Recommended:**
  - ~1.1 for most customer segments - slightly increasing speed often sounds more natural and helps maintain momentum on calls.
  - However if your customer demographic is older e.g., 50+ it's better to leave the speed at 1.0

#### **Temperature**

- **Description:** Adjusts the variation in tone and emotion. Higher values sound more expressive, while lower values are more consistent.
- **Range:** 0 to 2.0
- **Default:** 1.0
  - **Recommended:**
    - ~1.15 for more open ended conversations - adds just enough variation to sound human without sacrificing clarity.
    - However, if you more so value predictability in the exactly tone, inflection, pronunciation of verbatim statements or phrases, then target ~0.60 or 0.70
      - For example, if your use case is an IVR replacement (rather than a human conversation replacement), better to place go with 0.6

#### **Volume**

- **Description:** Controls how loud the agent’s voice is.
- **Range:** 0 to 2.0
- **Default:** 1.0
- **Recommended:** 1.0 - Most voices sound best at the default level. Only adjust if you notice the agent is unusually quiet or loud.

#### **Responsiveness**

- **Description:** Determines how quickly the agent starts speaking after hearing the contact.
- **Range:** 0 to 1.0
- **Default:** 1.0
- **Recommended:**
  - 1.0 for most use cases - provides a natural pause before speaking. Reducing this will add intentional latency to each response of the AI agent.
  - For older demographics who are a bit slower to speak or make drag out responses or be chatty, start at 0.90 - 0.95 to avoid the AI agent speaking over the customer. You may need to dial it down even more.

#### **Interruption Sensitivity**

- **Description:** Controls how easily the agent detects and responds to interruptions from the contact.
- **Range:** 0 to 1.0
- **Default:** 0.7
- **Recommended:**
  - 0.7 - This setting strikes a balance between ignoring background noise and picking up genuine interruptions.
  - Note: if your use case is for users in the field e.g., technicians and there is consistently background noise on the calls, you can test lowering this setting.

### **Fallback Voices**

TTS (text-to-speech) providers occasionally experience downtime. To avoid call failures, we recommend setting up two **Fallback Voices** in **Security Settings**. If your primary voice provider becomes unavailable, the agent will automatically switch to a backup voice to continue the conversation seamlessly. Note: we've cloned the many of the ElevenLabs voices to PlayHT, so you can pick the same voice from both providers. For OpenAI, however, you will have to use a different voice.

![Screenshot 2025-04-01 at 10.10.14 AM.png](https://support.regal.ai/hc/article_attachments/35535080472219)

### **Summary**

Tuning your AI Agent’s voice settings can greatly improve the quality of conversations. Whether you're optimizing for clarity, emotion, or timing, adjusting these parameters helps ensure your agent sounds on-brand and performs well in every call.