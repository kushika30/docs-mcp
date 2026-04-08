# Voice Agent Settings

## LLM Model

LLMs are the "brains" behind your AI agent. You can pick the LLM that's best suited to your use case. Learn more about available [LLM Models](/docs/llm-models) and how to select your model.

## Voice

The voice of your agent makes a big difference in the qualitative perception of your agent. Regal provides a curated list of human-like voices from top providers (male/female, young/middle aged/older, deep/high, different accents/nationalities), but ultimately which voice you like is typically a matter of "taste" -- there's no one best performing voice. You can try out different voices and see which resonates with you. Then we recommend A/B testing, as needed.

![](https://files.readme.io/e265776c794597c4e77154d17b98e31be970c1bcfa378a328905076bce4d701f-voices.png)

## Voice Settings

Once you select a voice, you can modify exactly how that voice sounds (e.g., it's speed, volume, emotion). To view or adjust the voice settings, click the gear icon next to the selected voice. See [Voice Settings](/docs/voice-settings) for a description of each, and our recommendations for where set to set each.

![](https://files.readme.io/45dc196718f9e43cf9e56630bb1028aefab2f4d3233c9170a2014804860a24b2-voice_settings.png)

## Fallback Voices

TTS (text-to-speech) providers occasionally experience downtime. To avoid call failures, we recommend setting up a Fallback Voice in Security Settings. If your primary voice provider becomes unavailable, the agent will automatically switch to a backup voice to continue the conversation seamlessly.

![](https://files.readme.io/4c59de7ceee12eb19421e5d9e3d35ab98bbfe97d4ee5ef80cbb178885887029f-Screenshot_2025-08-21_at_12.59.21_PM.png)

## Language

Regal offers 20+ languages for you to select from for your agent, including multi lingual agents who can switch between languages. See instructions for how to select and prompt for different [Languages](/docs/languagees)

## Call Settings

We offer a number of settings to control the quality of the overall call.

![](https://files.readme.io/529df95bb76412d237e16d0eb13e359b707edec3341c6f3b1642838510cf7c20-Call_Settings.png)

**Background Sound** - select from a variety of background noises to make your calls sound more realistic. Click the icon gear to control the volume of the background noise

**Speech Normalization** - speech normalization is on by default because we find it allows agents to perform better when numbers, currency and dates in the prompt or live transcript are automatically converted to spoken words for the AI agent

**Reminder Message Frequency** - specify how often you want the agent to check in with the customer if they hear silence. This is useful for example if the customer spoke, but the agent didn't hear what they said. Or the customer asked for a few seconds to take an action. In addition to this setting, you can specify in your prompt what reminder messages you want your agent to say e.g., *Reminder Messages: If the customer doesn't respond, use reminders like "I'm sorry I didn't hear you" or "Are you still there*

**End Call on Silence** - If the customer goes unresponsive for too long or it's a dead air call, this setting let's you ensure your AI agent doesn't needlessly waste time and money on these calls

**Max Call Duration** - specify the maximum potential length of a call. This is a safety measure that's useful for catching/stopping calls that are from spam callers or that are from other AI agents that might artificially get extended beyond what is normal.

## Keypad Input Collection

![](https://files.readme.io/78a3f14453a8b5bc6e4782d87a9429c816dbb53fe0a2b7b7f11a2fb48efcd059-Screenshot_2026-03-03_at_8.42.03AM.png)

AI Agents can collect keypad input entered by callers using DTMF during a call. This allows callers to provide numeric or symbolic input using their phone keypad instead of speaking.

When enabled, the agent listens for keypresses and captures input based on the following configurable settings:

- **Timeout** – How long the agent waits for keypad input before stopping collection
- **Termination Key** – An optional key (such as `#`) that ends input collection early
- **Max Digits** – The maximum number of digits the agent will accept

Once collected, the digits can be saved and referenced later in the call for prompts, logic, or downstream actions. Any DTMF digits collected will also appear in the call transcript as an **action invocation**, providing visibility into when keypad input was captured.

In a Multi State agent, these settings can be configured on a per-node basis.

## Voicemail Settings

Regal offers several dialing options and options for detecting and leaving voicemails. No option is the "best" options. Each has cost/quality tradeoffs, and maybe be right for different use cases:

1. **Progressive dialer w/ AMD** - call is dialed before AI agent is on the call. Then AI only placed on calls that connect (i.e., never placed on endless ringing or failed calls). Then AMD runs for 3 seconds, and AI agent is removed from the call if we detect a voicemail. If voicemail is detected, the AI Agent can:
   1. End call
   2. Leave a pre-recorded voicemail
2. **Power dialer w/ AMD** - AI agent is on the call from the start while it's dialing. You must opt into "Use Answering Machine Detection" to enable voicemail functionality on power dial - reach out to your Customer Success Manager for billing questions. AMD can run for your specified amount of time, set by the Voicemail Detection Duration (default is 30 seconds). If voicemail is detected, the AI agent can:
   1. End call
   2. Leave a pre-recorded voicemail: Select a pre-recorded voicemail from available Recordings, or choose "Defer to Campaign Recording" to use the campaign-level voicemail setting.
   3. Leave a personalized voicemail: The AI agent will deliver the personalized voicemail message that you enter in the Voicemail Message input. You can reference contact attributes using handlebars, e.g. {{contact.firstName}}.
3. **Power dialer w/ AI Agent Prompt-based Voicemail Detection** - AI agent is on the call from the start while it's dialing, not running AMD. In the prompt, you can specify how the agent can detect a voicemail based on transcription+LLM interpretation, then the AI agent can:
   1. End call
   2. Leave a pre-recorded voicemail
   3. Leave a personalized voicemail (prompt)

## ▶️ VIDEO TUTORIAL

Updated about 1 month ago

---
