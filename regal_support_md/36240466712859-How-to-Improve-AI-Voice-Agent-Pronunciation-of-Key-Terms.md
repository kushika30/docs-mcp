---
id: 36240466712859
title: "How to Improve AI Voice Agent Pronunciation of Key Terms"
html_url: "https://support.regal.ai/hc/en-us/articles/36240466712859-How-to-Improve-AI-Voice-Agent-Pronunciation-of-Key-Terms"
updated_at: "2025-05-29T15:10:59Z"
---

# How to Improve AI Voice Agent Pronunciation of Key Terms

AI Voice Agents don’t always pronounce words exactly as you’d like—especially names, acronyms, or terms that aren’t spelled phonetically. Fortunately, there are multiple ways to improve pronunciation.

This support article walks through several approaches, starting with the quickest fixes and moving to more advanced tools like pronunciation dictionaries available within Regal. We recommend testing each approach in order of effort and complexity.

## Why Does My AI Voice Agent Pronounce the Same Word Different Ways?

AI voice agents can pronounce the same word differently across calls because they use a large language model (LLM) and real-time text-to-speech (TTS) synthesis, not pre-recorded audio clips. LLM-powered agents dynamically generate speech based on probabilities, meaning the model is effectively *predicting* how to say each word based on context. If your voice is using a higher "temperature" setting (above 1.0), the agent is allowed more freedom in how it speaks - this can lead to differences in pronunciation, tone, and rhythm - especially for uncommon words, brand names, or acronyms - since the TTS engine is synthesizing each utterance on the fly.

## When to Make Pronunciation Adjustments

Consider improving pronunciation if:

- A company or product name is being mispronounced in > 10% of calls
- The agent struggles with words that contain uncommon spelling patterns or non-English sounds
- You hear customers misunderstanding the agent due to mispronunciation of names or key terms

## Recommended Approaches (from Lowest to Highest Effort)

**1. Lower the Voice Temperature**  
Voice temperature affects how varied and expressive the agent sounds. Lowering the temperature (e.g., to 0.6) can make the agent pronounce everything more consistently.

- Pro: Easy to test, no prompt changes required
- Tradeoff: May reduce overall emotion or energy in the voice

![Screen Shot 2025-04-22 at 9.56.58 PM.png](https://support.regal.ai/hc/article_attachments/36240466709019)

**2. Try a Different Voice**  
Different ElevenLabs voices pronounce words differently. Switching to another voice may improve pronunciation of the terms that matter to you without requiring additional configuration.

- Pro: Simple to try
- Tradeoff: May not be your favorite voice

**3. Use Phonetic or Stylized Spelling in Prompts**  
You can sometimes guide pronunciation by changing the spelling of a word directly in your agent prompt. Try adding emphasis using capitalization, dashes, apostrophes, or phonetic-style spelling.

Examples:

- “trapezii” → “trapezIi”
- “Ethos” → “‘E’thos”
- “Nebula” → “NEB-yuh-luh”
- “Aetna” → “Et-nuh”
- “USAA” → “U-S-A-A”

When trying these out, make sure to place a few test calls to see how your agent sounds saying them.

- Pro: No tooling required
- Tradeoff: Can sound unnatural or inconsistent depending on the TTS engine

**4. Use a Pronunciation Dictionary (ElevenLabs Only, English Only)**  
If you're using an ElevenLabs voice in English, you can override how words are pronounced by specifying either:

- CMU phonemes (recommended)
- IPA (International Phonetic Alphabet)

This feature is not yet available for other voice providers or languages.

ElevenLabs suggests using CMU over IPA as they've found it's more consistent (but still not 100%). If CMU doesn't work, worth trying IPA after. CMU combines phonemes (letters) and numbers for when to put the stress/emphasis, which is why it *should* perform a bit better. IPA just relies on phonemes.

**CMU Examples:**

- Trapezii → `T R AH0 P IY1 Z IY0 AY0`
- Aetna → `EH1 T N AH0`
- Geico → `G AY1 K OW0`

>> To help craft your CMU phoneme, leverage this tool: [CMU dictionary](http://www.speech.cs.cmu.edu/cgi-bin/cmudict?in=amanda&stress=-s)

**IPA Examples:**

- Trapezii → `trəˈpiːziːaɪ`
- Aetna → `ˈɛtnə`
- Geico →`ˈɡaɪkoʊ`

>> To help craft your IPA phoneme, leverage this tool: [IPA tool](https://www.antvaset.com/ipa-to-speech)

- Pro: Most precise option
- Tradeoff: Adds slight latency, only applies to ElevenLabs voices in English; requires setup and testing

### How to Configure a Pronunciation Dictionary in Regal

1. Go to your AI Agent
2. Click the gear icon next to the selected ElevenLabs voice
3. Scroll to the Pronunciation section
4. Enter the word or phrase you want to override
5. Add the phonetic transcription using either CMU or IPA
6. Save your changes
7. Test the results in a sample call

![Screen Shot 2025-04-22 at 9.53.25 PM.png](https://support.regal.ai/hc/article_attachments/36240492607003)

![Screen Shot 2025-04-22 at 9.53.58 PM.png](https://support.regal.ai/hc/article_attachments/36240466711835)

### Best Practices for Using Pronunciation Dictionaries

- Stick to ElevenLabs voices. Pronunciation dictionaries feature isn’t supported by other providers.
- Avoid overuse. Only override words the AI consistently gets wrong; Too many overrides can reduce clarity and naturalness.
- Leverage one of these tools to get the most accurate pronunciation:
  - [CMU dictionary](http://www.speech.cs.cmu.edu/cgi-bin/cmudict?in=amanda&stress=-s)
  - [IPA tool](https://www.antvaset.com/ipa-to-speech)
- Test your changes by placing a test call to make sure the pronunciation sounds correct.

## Summary and Comparison of Approaches

| Approach | Effort Level | Tradeoffs |
| --- | --- | --- |
| Lower voice temperature | Low | Less expressive or emotional tone |
| Try a different voice | Low–Medium | May not be your favorite voice |
| Phonetic/stylized spelling | Medium | Can be inconsistent or sound unnatural |
| Pronunciation dictionary | High | Adds latency, Limited to ElevenLabs voices only in English |

> ### 📘 No Approach is 100% Perfect
>
> Do not expect any approach to yield 100% consistency. There is always some randomness in how an AI agent will pronounce something - even if due to a bit of latency at the moment the AI agent is saying a word, it might sound a bit different. So you should not strive for 100%. If in your testing or call reviews, your AI agent is pronouncing the most important words (e.g., your brand name and key product lines) with 90% consistency, then that is a good outcome. While it may be frustrating that it's imperfect sometimes, focus on whether this actually impacts call outcomes. We've found mispronunciation is more "annoying" to the builder than actually meaningful to the customer or impactful to business outcomes.

## What Not to Do

While it's temping to include instructions for pronunciation in your agent prompt such as "pronounce the word ethos like the double 'ee' in teeth instead of the 'e' in test," that will not work. The agent prompt is a set of instructions for how the LLM logic e.g., how the agent should output text, but it's not a set of instructions for the TTS provider should vocalize that text.

**Unsure which option to start with or need help configuring pronunciation overrides in Regal?** Contact our support team - we're here to help.