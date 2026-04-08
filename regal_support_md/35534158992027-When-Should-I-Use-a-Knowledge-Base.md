---
id: 35534158992027
title: "When Should I Use a Knowledge Base?"
html_url: "https://support.regal.ai/hc/en-us/articles/35534158992027-When-Should-I-Use-a-Knowledge-Base"
updated_at: "2025-05-29T15:10:59Z"
---

# When Should I Use a Knowledge Base?

When building an AI agent in Regal, you have two main ways to teach it about your product, policies, or common questions:

1. Add information directly into the prompt
2. Connect your agent to a knowledge base

Which you should use depends on your use case and the length of your agent prompt.

![Screenshot 2025-04-01 at 9.52.15 AM.png](https://support.regal.ai/hc/article_attachments/35534158987547)![Screenshot 2025-04-01 at 9.52.21 AM.png](https://support.regal.ai/hc/article_attachments/35534191071387)

### **Use the Prompt for Short, Predictable Content**

Put content directly into the prompt when:

- The info is short, stable, and unlikely to change (e.g., 20 or fewer FAQs/Objections)
- You want the AI to respond with very specific language or tight control
- It’s something the agent will always need, like:
  - Common objections or rebuttals
  - Simple FAQs
  - Company messaging or disclaimers
  - Simple pricing or business hours that rarely changes
  - Tone or style guidance

**Tip:** Think of the prompt as your AI agent’s script and personality.

### **Use a Knowledge Base for Scalable, Dynamic Information**

Use the knowledge base – powered by **Retrieval-Augmented Generation (RAG)** – when:

- You have too much content to fit in the prompt (the maximum prompt token length is 8,192 which roughly translates to 6,000 - 6,500 words. Prompts longer than that don’t perform well)
- The reference content is long-form, detailed, or frequently updated
- The AI needs to look things up based on context, and potentially synthesize a response from across multiple sources of information
- You want to manage knowledge separately from the prompt in a centralized place where e.g., your human agents and/or customers can also reference the same knowledge

Example content that requires a knowledge base:

- Product documentation
- Support articles or troubleshooting guides
- Dynamic FAQs that change regularly (from internal wiki or external support site)
- State-specific compliance policies
- Anything maintained by another team (support, legal, etc.)

Add your docs to a Knowledge Base in Regal, and the AI agent will search and pull in relevant content only when needed.

|  |  |  |
| --- | --- | --- |
| **Use Case** | **Use Prompt?** | **Use Knowledge Base?** |
| Objection handling | ✅ Yes | ❌ Not needed |
| Product specs | ❌ Too long | ✅ Yes |
| Refund policy | ✅ If short & fixed  ✅/❌ Depending on complexity | ✅ If long or varies by state |
| Complex support troubleshooting | ❌ | ✅ |
| List of common questions | ✅ For top 20 FAQs | ✅ For full FAQ library |

### **When to Combine Both**

You don’t have to choose just one! Use the prompt for fast, high-confidence replies, and the knowledge base for everything else. Your AI agent will automatically retrieve info from each when it’s relevant, and you can specifically prompt it when to reference each, if needed.

**Need help setting up your knowledge base or tuning your prompt?** Contact us, and a Regal AI Expert will help you get the best of both worlds.