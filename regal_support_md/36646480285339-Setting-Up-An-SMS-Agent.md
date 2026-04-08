---
id: 36646480285339
title: "Setting Up An SMS Agent"
html_url: "https://support.regal.ai/hc/en-us/articles/36646480285339-Setting-Up-An-SMS-Agent"
updated_at: "2025-05-30T23:09:50Z"
---

# Setting Up An SMS Agent

See the [Getting Started with AI Agents](https://support.regal.ai/hc/en-us/articles/35711384384411-Getting-Started-with-AI-Agents) guide for a broader overview of how to approach use cases and set up your AI Agent effectively.

Like voice agents, SMS agents offer key benefits: they’re cost-effective, always available, consistent, and provide instant responses. To deliver the best customer experience, it’s important to evaluate which channel—voice or SMS—is best suited for each use case

## SMS agents are especially effective for:

- - Following up on missed or unanswered calls
  - Scheduling calls at a preferred time
  - Meeting response-time SLAs for SMS
  - Freeing up human agents for more complex or high-value conversations
  - Sharing links or written records with customers

## How to choose Voice vs SMS Agents?

Each channel has its strengths. Use **voice** when the conversation is:

- Emotionally sensitive
- Time-sensitive or urgent
- Complex or nuanced

Use **SMS** when the goal is:

- Repetition or follow-up
- Providing written information or links
- Offering an alternative communication channel

![](https://support.regal.ai/hc/article_attachments/36646480282011)

## How to build SMS Agents?

Follow the same build, test, deploy, monitor iterative [framework noted here](https://support.regal.ai/hc/en-us/articles/35711384384411-Getting-Started-with-AI-Agents).

![](https://support.regal.ai/hc/article_attachments/36714448169627)

#### Start by selecting a use case and configuring your agent prompt.

- Make sure the tone and messaging are tailored for SMS—concise, friendly, and action-oriented

![](https://support.regal.ai/hc/article_attachments/36714433030043)

#### Use the **Test Logic** tab to evaluate:

- Whether the **agent responses** are aligned with your prompt
- Whether the right **function calls** are being triggered

#### 

#### Disposition Settings for SMS

- **Autocomplete Timer**: Sets how long the agent waits after the last customer response before wrapping up the conversation.
- **Dispositions**: Add the list of possible outcomes the SMS agent can use.

  - If no dispositions are added, the agent will use AI Autocomplete.
- **Disposition Instructions**: Use this section to guide the agent on how to categorize the conversation at the end of the timer.

## Routing SMS Tasks to Agent

Follow these steps to start messaging with your SMS agent:

1. Make sure your agent is in **Available status**
2. Set up routing rules to route Inbound SMS to the agent.
   - You can use a dedicated phone number and route to the SMS agent user directly.

![](https://support.regal.ai/hc/article_attachments/37546317175451)

- - Alternatively, use Journeys to assign the targetAgentEmail first using a webhook node, then use this Specific Agent in Queue in routing rules. This is required if the inbound SMS task requires Journeys filtering to determine whether it should be routed to an SMS agent or not. Reach out to [support@regal.io](mailto:support@regal.io) if you have additional questions!

![](https://support.regal.ai/hc/article_attachments/37546311936539)

3. Start messaging your agent through SMS based on your routing rule!