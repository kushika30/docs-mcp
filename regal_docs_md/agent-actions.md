# Agent Actions

In the Regal AI Agent Builder, you can enable agents to take real-world actions, from booking appointments to triggering live transfers. Behind the scenes these actions are powered by function calling, which allows your agent to interact with external systems in real-time during a live phone call or sms conversation.

Regal has several pre-built actions, and we also support custom actions which allows you to build your own.

## Pre-built actions

These are the pre-built actions Regal currently supports. The first 3 are only relevant for voice agents, but the rest are relevant for voice and SMS agents.

- **End call** - agent ends the call
- **Internal Transfer** - agent transfers the call to a queue within the Regal application
- **External Transfer** - agent transfers the call to an external PSTN number or SIP endpoint
- **Gather Date/Time** - agent checks availability of a customer supplied date/time against a business hours template in Regal
- **Schedule Callback** - agent creates a Scheduled Callback task in Regal at the agreed date/time

![](https://files.readme.io/8c1f334ece9d8af5d1dafeaf470f5849a3833e363e1028a715fbfa137e50f335-actions.png)

There are two main ways to invoke these actions within your agent:

## Prompt-Based Invocation

In your prompt, you can explicitly instruct the agent to call specific action under certain conditions and at certain points in the conversation (e.g., in your Task Steps or Objection Handling). This let us embed procedural logic directly into the agent’s flow.

Example prompt:

![](https://files.readme.io/792d9373aa1ade15b93420f5e9cb2c0444f1e60d7cc53cbe3d185e8d7091c25e-spanish.png)
> ## 📘
>
> We recommend using the words “call function x” in your prompt - it’s more familiar to the model and often leads to better results than just “invoke x"

When invoking actions from your prompt hit the / key to bring up your actions or click the / button in the text editor.

![](https://files.readme.io/19fc6a4fc13eb6c3e5ba9aeb46784ba0126dfd2d6cdb13b5736f1b7a55e60bab-add_action.png)
> ## 📘
>
> Actions Cannot be Invoked from a Knowledge Base
>
> You cannot invoke actions from a Knowledge Base article. If you need your agent to respond to a customer's question by invoking an action, then you should include it in the Questions & Objections Handling section of your prompt instead of a Knowledge Base.

## Description-Based Invocation

In addition to what you specify in the prompt, your agent can also decide to call functions based solely on their name and description - reinforcing your intent and consistently triggering critical actions.

Example action configuration:

![](https://files.readme.io/b6b6e1eadd14c88109728dc2b6c8341fb9972eb63fee03c22f440f8da0afbcae-transfer.png)

This is useful for actions that can be taken at any point in prompt, including action like "end\_call" (which might include a description like "Use anytime the agent says 'Goodbye or 'Have a nice day'")

> ## 📘
>
> Use intuitive function names and clear, natural-language descriptions in order to make this approach work reliably.
>
> To avoid errant action invocations, you can also include in the description when not to call an action. We recommend waiting to see how the agent behaves in your tests before adding this in, and only added if needed.

## Combine Both Methods

It's best practice to combine both ways of calling action - through a well-defined action description and by instructing the agent when to invoke the action in the prompt.

Updated 10 months ago

---
