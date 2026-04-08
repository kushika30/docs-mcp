# LLM Models

Regal offers multiple leading Large Language Models (LLMs) to power your AI agents for phone and SMS conversations. Each is optimized for different use cases – so the best choice depends on your goals, call type, complexity of conversation, and cost tolerance.

We recommend starting with **OpenAI GPT-4o Mini**, Regal's default model. Then, progressively upgrade to higher-performing or more specialized models (e.g., GPT-4.1 Mini, GPT-4.1, GPT-4o, or the new GPT-5 series) only if you find that your AI agent isn’t performing the call as well as you’d like and you’re willing to pay more.

![](https://files.readme.io/4eae8a363eaddb351ee056cdd28b4c0a6b8ea9d6b992cee9f1ab92df25a62c90-Screenshot_2025-10-08_at_12.19.04_PM.png)

## GPT-4o Mini

**Best for short, simple cost-sensitive use cases**  
(e.g., calls normally staffed out of low-cost locales)

**Examples:**

- Confirmation
- Scheduling
- Collections calls
- Qualification calls with < 15 questions (and not much branching)

✅ **Pros:** Fastest model, cost-effective, great for straightforward tasks/conversations. Included in Regal base AI voice agent minute pricing  
❌ **Cons:** Slightly weaker at reasoning; use a custom action for tasks like math

---

## GPT-4.1 Mini

**Best for short, simple conversations where strict task-instruction following is needed (improvisation not valued)**

**Examples:**

- Confirmation
- Scheduling
- Collections calls
- Qualification calls with < 25 questions

✅ **Pros:** More reliable and consistent at following task instructions and function calling; updated knowledge through 2024  
❌ **Cons:** Slightly worse at improvisation; slightly higher cost

---

## GPT-4.1 / GPT-4o

**Best for longer, more complex calls or those requiring math / reasoning**

We've found **GPT-4.1** better at following prompt instructions and function calling, while **GPT-4o** generates higher-quality, more natural conversation.

**Examples:**

- Long qualification calls with 10+ steps or conditional branches
- Open-ended support calls
- Calls with multiple or iterative custom actions
- Calls requiring complex reasoning (e.g., dynamic quote estimates)

✅ **Pros:** Handles conditional logic, multi-step functions, and nuanced dialogue better  
❌ **Cons:** More expensive; adds slight latency

---

## GPT-5 Series (New)

**Best for advanced reasoning, memory retention, and multi-turn context**

OpenAI’s latest GPT-5 models extend GPT-4o’s strengths with deeper reasoning, improved memory, and more human-like conversational flow.

- **GPT-5 Nano:** Ultra-lightweight, optimized for high-volume, low-cost interactions (e.g., confirmations, reminders)
- **GPT-5 Mini:** Balanced option for mixed workloads requiring stronger reasoning at moderate cost
- **GPT-5:** Full model, ideal for high-stakes or complex conversational tasks requiring domain knowledge, multi-step reasoning, and long-context recall
- **GPT-5.1**: General-purpose conversational model with stable reasoning and consistent performance across multi-turn conversations, suitable for most production AI Agents that require reliable instruction following and moderate context depth.
- **GPT-5.2**: Advanced conversational model optimized for complex workflows, offering stronger reasoning robustness, improved instruction adherence, and better handling of long, multi-step conversations with higher context demands.

✅ **Pros:** Best-in-class reasoning and contextual memory; smoother voice response patterns  
❌ **Cons:** More expensive

---

## When to Consider Claude

If you’ve tried OpenAI GPT-4o Mini / 4.1 / 5 Mini and need stronger performance around **memory, creativity, or nuanced language**, consider Anthropic’s **Claude series**:

- **Claude 3.5 Haiku:** Fast, lightweight conversations
- **Claude 3.7 Sonnet:** Longer, more complex reasoning tasks
- **Claude 4.0 Sonnet:** Excels at subtle emotional understanding and creative synthesis

✅ **Pros:** Exceptional interpretability and safety; strong long-context memory  
❌ **Cons:** Slightly slower response time and higher cost

---

## When to Consider Gemini

Google’s **Gemini series** now includes the **2.5** and **3** lines:

- **Gemini 2.5 Flash / Flash Lite:** Optimized for ultra-low latency and low-cost deployments, ideal for voice agents needing fast turn-taking
- **Gemini 3 Flash:** Lightweight, cost-efficient conversational model optimized for high-volume workloads with simpler reasoning requirements, best suited for transactional or narrowly scoped conversations where throughput and cost efficiency are priorities.

✅ **Pros:** Excellent multimodal performance and web-connected reasoning  
❌ **Cons:** Slightly less predictable function calling

---

## Switching Between Models

When switching models, expect to make small prompt adjustments. For example, GPT-4o Mini may require more explicit phrasing, while GPT-5 or Claude 4.0 can infer intent more flexibly. Always test before full rollout.

**Still not sure?** Reach out – we’re happy to help tune your agent for best performance.

**Want Regal to offer a different LLM?** Just reach out – we’re constantly evaluating new models and onboarding those with differentiated performance.

**Want to bring your own LLM?** Contact us – we’ll help you integrate it into Regal.

Updated 2 months ago

---
