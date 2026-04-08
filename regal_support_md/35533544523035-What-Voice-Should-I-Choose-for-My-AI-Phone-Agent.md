---
id: 35533544523035
title: "What Voice Should I Choose for My AI Phone Agent?"
html_url: "https://support.regal.ai/hc/en-us/articles/35533544523035-What-Voice-Should-I-Choose-for-My-AI-Phone-Agent"
updated_at: "2025-05-29T15:10:59Z"
---

# What Voice Should I Choose for My AI Phone Agent?

You want your AI phone agent to sound natural, trustworthy, and well-matched to your customer segment and use case. Follow these steps to choose the best voice for your agent:

### **Step 1: Choose a Primary Voice Provider**

We currently support three top-tier TTS (Text-to-Speech) providers:

- ElevenLabs
- PlayHT
- OpenAI

We’re also planning to add **Rime** and **Sesame** soon. If there's a provider you love that we don’t currently support, just let us know!

**Considerations for Choosing a Provider:**

1. **Reliability** – Is the provider stable and consistent during high traffic? Currently, ElevenLabs has the highest up time in the industry (yes, higher than OpenAI).
2. **Redundancy** – Do we offer a backup provider with the same or similar voice? We’ve cloned many of the ElevenLabs voices to PlayHT, so you’ll find many of the same voices available for each. That is not possible for OpenAI.
3. **Pronunciation Needs** – Some providers are better at handling tricky names, acronyms, or brand terms. Currently, ElevenLabs voices support the pronunciation dictionaries, so if you have a brand name that’s difficult or ambiguous to pronounce, you may want to employ pronunciation.

**Recommendation:** Pick a voice from ElevenLabs for your agent. Then you can configure backup voices in case of downtime. Use the same voice from PlayHT as your primary backup, and then a similar “gender/age” voice from OpenAI as your secondary backup.

### **Step 2: Choose a Specific Voice**

Once you’ve selected a provider, the next step is picking a voice that matches your audience and use case.

**Consider Your Audience:**

- Is your audience American or International?
- Are your customers younger, middle-aged, or older?
- Do they skew more female, male, or roughly equal?

Likely a voice that matches your customer demographic will perform best, as customers tend to feel more connected to someone “like them”.

The voices modal lets you see the “gender”, “age” and “nationality” of each voice:

![Screenshot 2025-04-01 at 9.28.33 AM.png](https://support.regal.ai/hc/article_attachments/35533544514459)

**Consider Your Use Case:**

- **Sales**: Choose a voice that’s engaging, likable and trust-building, as sales calls need to do some persuading.
- **Support**: Aim for warm, clear, and helpful as support calls can go in all kinds of directions, and customers tend to be on their last nerve by the time they call in for help.
- **Collections**: Look for a voice that’s steady, professional, and firm as collections calls need to communicate the seriousness of the situation. A really young, peppy voice is likely not the best option.
- **Scheduling/Confirmations**: These calls tend to be short and to the point, and it’s not without customers looking to make conversation. Most customers feel comfortable scheduling through more automated systems. So pick something crisp and easy to understand.

### **Regal's Shortlist of Favorite Voices**

**Regal’s Recommended ElevenLabs Voice (w/ PlayHT Backups) - Americans**

|  |  |  |
| --- | --- | --- |
| **Gender** | **Age** | **Voice Name** |
| Female | Young | Marissa  Myra |
| Female | Middle Aged | Kate  Grace |
| Female | Older | Zuri |
| Male | Young | Adrian |
| Male | Middle Aged | Joe (no PlayHT backup) |

**Regal’s Recommended OpenAI Voices - Americans**

|  |  |
| --- | --- |
| **Gender** | **Voice Name** |
| Female | Shimmer |
| Male | Onyx |

**Regal’s Recommended Voices - Non Americans**

|  |  |  |
| --- | --- | --- |
| **Nationality** | **Provider** | **Voice Name** |
| British | ElevenLabs | Amy  Anthony |
| Australian | ElevenLabs | Noah |
| German | ElevenLabs | Carola |
| French | Play HT | Babtiste (Play HT) |
| Indian | ElevenLabs | Monika  Samad |
| Carribbean | ElevenLabs | Gilfoy |

### **Custom or Alternative Voices**

Want to clone your own voice or select a different voice from the ElevenLabs community library? Just let us know and we’ll help out.

### **How to Listen to Different Voices**

You can test voices in two ways:

1. **Play a Sample** – You can preview ElevenLab voices by playing a quick sample from the voices modal, and develop a short list of voices you like.
2. **Place a Test Call** – From your short list of voices, assign a voice to your agent and click “Save”. Then make a live call by clicking “Test Agent” to hear it in action.

### **A/B Test Different Voices in Production**

Picking a voice is not a permanent decision – once you’ve selected the voice you like best and put your agent live, we then encourage you to **A/B test different voices** and see if certain voices actually perform better.

You might even end up running multiple AI Agents with different voices as the end state. For example, from your A/B test you can analyze performance by customer segment—if **male customers respond better to a female voice**, and **female customers prefer a male voice**, for example, or vice versa, you can deploy two different agents with tailored voices for each group.

**Still not sure which voice to go with?** Let us know your audience and use case, and a Regal AI Expert we’ll help you find the perfect voice.