---
id: 35712717350811
title: "How Do I Invoke Agent Actions?"
html_url: "https://support.regal.ai/hc/en-us/articles/35712717350811-How-Do-I-Invoke-Agent-Actions"
updated_at: "2025-05-29T15:10:59Z"
---

# How Do I Invoke Agent Actions?

In the Regal AI Agent Builder, you can enable agents to take real-world actions, from booking appointments to triggering live transfers. Behind the scenes these actions are powered by function calling, which allows your agent to interact with external systems in real-time during a live phone call or sms conversation.

Start by adding actions on the top right of the Agent Builder:

![Screen Shot 2025-04-06 at 2.55.19 PM.png](https://support.regal.ai/hc/article_attachments/35712728755739)

Then there are two main ways to invoke these actions within your agent: 

### Prompt-Based Invocation

In your prompt, you can explicitly instruct the agent to call specific action under certain conditions and at certain points in the conversation (e.g., in your Task Steps or Objection Handling). This let us embed procedural logic directly into the agent’s flow.

Example prompt:

```
1. Say: "To help find plans in your area, please provide your 5-digit zip code"  
- When the user responds, call function validate_zipcode."
```

User says: "10453"

→ The agent calls the action because the prompt explicitly instructed it to do so under that condition.

**Tip:** We recommend using the words “call function x” in your prompt - it’s more familiar to the model and often leads to better results than just “invoke x"

![Screen Shot 2025-04-06 at 2.52.55 PM.png](https://support.regal.ai/hc/article_attachments/35712728755867)

When invoking actions from your prompt hit the / key to bring up your actions or click the / button in the text editor.

![Screen Shot 2025-04-06 at 2.54.29 PM.png](https://support.regal.ai/hc/article_attachments/35712717350171)

> ### 📘 Actions Cannot be Invoked from a Knowledge Base
>
> You cannot invoke actions from a Knowledge Base article. If you need your agent to respond to a customer's question by invoking an action, then you should include it in the Questions & Objections Handling section of your prompt instead of a Knowledge Base.

### Description-Based Invocation

In addition to what you specify in the prompt, your agent can also decide to call functions based solely on their name and description - reinforcing your intent and consistently triggering critical actions.

Example action configuration:

```
Action name: lookup_coverage  
Action description: “Call this function anytime the user asks   
if you cover a particular geo."
```

User: "I've got a condo in Texas"

→ The agent automatically calls the function without needing a hard-coded rule.

This is useful for actions that can be taken at any point in prompt, including action like "end\_call" (which might include a description like "Use anytime the agent says 'Goodbye or 'Have a nice day'")

**Tip:** Use intuitive function names and clear, natural-language descriptions in order to make this approach work reliably. To avoid errant action invocations, you can also include in the description when not to call an action. We recommend waiting to see how the agent behaves in your tests before adding this in, and only added if needed.

![Screen Shot 2025-04-06 at 2.50.25 PM.png](https://support.regal.ai/hc/article_attachments/35712717350555)

### Combine Both Methods

It's best practice to combine both ways of calling action - through a well-defined action description and by instructing the agent when to invoke the action in the prompt.

**Need help getting your agent actions to invoke properly?** Reach out and a Regal AI Expert can help.