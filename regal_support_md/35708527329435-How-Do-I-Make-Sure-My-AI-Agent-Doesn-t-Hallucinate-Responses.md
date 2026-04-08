---
id: 35708527329435
title: "How Do I Make Sure My AI Agent Doesn't Hallucinate Responses?"
html_url: "https://support.regal.ai/hc/en-us/articles/35708527329435-How-Do-I-Make-Sure-My-AI-Agent-Doesn-t-Hallucinate-Responses"
updated_at: "2025-05-29T15:10:59Z"
---

# How Do I Make Sure My AI Agent Doesn't Hallucinate Responses?

### Overview

AI Agents are powerful tools—but like any large language model, they can sometimes "hallucinate," or generate confident responses that are inaccurate, misleading. This article outlines how to reduce hallucinations and ensure your AI Agent stays aligned with your brand, goals, and facts.

### Ways to Reduce Hallucination

**1. Write Clear Task Steps**  
Use the Task Steps section of the prompt to give your AI Agent clear, step-by-step instructions—similar to a call script. Be explicit about what the agent should say or ask and when.  
**Example:** Instead of "Talk about promotions," write:  
*“If the customer asks about current promotions, respond with {{contact.current\_promo}}.”*

**2. Avoid Overly Broad Role Description or Instructions**A role description like "You're a support agent who answers customer's questions" can open the door to hallucination. Instead direct your AI Agent to answer questions within the scope of their role or point to a specific resource. E.g., "You are an outside business hours customer service agent at Manhattan Mini Storage. Your job is to answer customers' questions about Manhattan Mini Storage services questions leveraging the "Q&A and Objection Handling" section. If a question is asked outside your scope, let the customer know you don't know the answer and offer to schedule a callback."

**3. Use a Knowledge Base**  
Attach relevant documents to the AI Agent using Regal’s Knowledge Base feature. This helps the agent reference factual material in real time and avoid making educated guesses.

- Supported formats: .docx, .pdf, .csv, .txt, .md
- You can also add text directly or upload pages from a website.

**4. Use Guardrails**  
Add specific content to the Guardrails section of the prompt to tell the AI what not to say. This can include:

- Disallowed topics (e.g., pricing, policy changes)
- Language to avoid
- Behaviors to prevent (e.g., making up product details)

Within your guardrails consider adjacent topics to the agent task that may come up. E.g., if the agent is an appointment coordinator for a hospital, it's likely medical questions may be raised by the patient, so it's good to include something like:

- Do not dispense medical advice - If the customer asks about any healthcare or medical related issues, let them know you're not a medical professional and redirect back to the task

**5. Keep AI Agent Prompts Focused**  
If your agent needs to handle multiple workflows or use cases, consider splitting it into separate agents. Overloaded prompts that can handle many different workflow increase the likelihood of hallucination.

**6. Test Before Launching & Review Transcripts Post-Launch**  
Use test calls to check how your AI Agent handles edge cases. Provide test values for contact attributes and review its performance against known questions. Set up "compliance" trackers or QA Scorecards to review calls, and flag any where the agent went outside their intended scope. Then further refine your agent prompt to address those.