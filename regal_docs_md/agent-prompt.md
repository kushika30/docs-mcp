# Single State Agent Prompt

Generative AI Agents are defined by the prompts you construct. The Regal AI agent builder contains a set of common sections we recommend filling out to properly define your agent.

![](https://files.readme.io/1174c5e558c8a49edf1fc6848c5603bdf1170be7d223f854d8dfabcbeaca061e-sections.png)

You can think of AI Agents as being part-software, part-human - meaning you can define very specific steps and instructions for an agent to follow, but you can also just give the agent a goal or some guidelines and allow it to fill the gaps.

We provide a set of starting AI Agent prompts for the most common use cases. You can start with one of those and edit from there.

![](https://files.readme.io/176a2d654f81771cdff37297320250770cd4eaea6aa49ff3b184a7da050be685-templates.png)

Sections of the AI Agent prompt:

## Role & Goals

- **Agent First Name** - give your agent a common, easy to pronounce name
- **Role / Goal** - let your customer know what their overall goal is, what is success
- **Metrics to Track** - this section is in progress. it let's the agent know what metrics to optimize for

## Task Steps

This is where you should define the outline of the conversation you want the agent to conduct

- If the call is scripted like a qualification call, your Task Steps may look like the following:

> 1. Start by saying: "Hi. This is Kate, a virtual agent from Circle Life! How are you today?"
> 2. Let the customer know you just have few questions to ask, and then get them connected to a licensed advisor to understand policy options and get a custom quote.
> 3. First, how old are you?
>
> - If the customer is younger than 18, call function end\_call and say "Unfortunately, we can't serve you. Have a nice day!"
> - If the customer is older than 80, call function end\_call and say "Unfortunately, we can't serve you. Have a nice day!"
>
> 4. Ask why are you looking for insurance today?
> 5. Ask if they are a smoker?
> 6. Determine if the customer should be transferred to a licensed advisor
>
> - If they qualify to transfer to a licensed agent, call function transfer\_call and say "I'll transfer you to a licensed advisor now"
> - If they don't qualify, call function end\_call and say "Unfortunately, we cannot provide you life insurance at this time. Other providers may have different criteria. Best of luck and have a good day."
>
> Qualification Criteria  
> In order to be transferred to a Licensed Advisor, the customer must be:
>
> - 18 - 80 yrs old
> - Not a smoker

> ## 📘
>
> Feel Free to Add More Sections
>
> You can embed more sections into the Task Steps if you'd like just like "sub routines" e.g., if there is an explicit set of instructions for "Qualification Criteria" or how to handle a callback, you can define a ## Qualification Criteria or ## Callback Steps section within the Task Steps

- If the call is less scripted like an inbound support call or collections call, then your Task Steps may look closer to

> 1. Greet the caller
> 2. Remind them they've got an outstanding payment overdue. And ask if they intend to pay it.
>    1. Use Questions & Objection Handling to address any concerns.
> 3. Wrap up and end call politely if no remaining concerns/questions.

## Questions & Objections Handling

In this section, you can add common FAQs or Objections you expect customers to bring up with some defined handling for the agent (which can be to read a statement, ask a follow up question, invoke a function, etc.). The agent will refer to these as needed throughout the conversation, but otherwise return to its task.

There's no need to spell out every possible way a customer can bring up a potential question/objection. If you give the LLM at topic or a few phrases you expect, it will understand semantically similar ways of bringing up these topics. LLMs are very good at intent detection.

Example way of structuring this section:

![](https://files.readme.io/c56b5ad536bfd43ee76bb83537577fef8b13c2497e6a9a6f21e16eeec1b34aeb-objections.png)

## Guardrails

In guardrails, you can define things you never want your agent to do or discuss, such as:

> - Never dispense insurance advice. You're just a qualification agent, not a licensed insurance provider.
> - Never discuss a competitor. If a customer asks you about a competitor, say you cannot discuss competitors

etc.

## Agent Style

Here's where you can define the personality of your agent, their conversational style and add your brand guidelines.

For example, if you always refer to customers as clients, add that to the Agent Style. You can also specify specific ways you want the customer to conduct the conversation or refer to certain things such as dates e.g., always say date in the format, day month date year as in Monday, February 23 2025. (Often you will learn the default conversational quirks of AI agents in the testing phase, and then can handle for those here. For example, agents may be verbose by nature, but perhaps you value them being more succinct.)

![](https://files.readme.io/1c0f75158170edcf64bb38d343f5f8648ad7dc106230a6360c36eaed3e6e0867-agent_style.png)

## Greeting

Define who should start the conversation and how:

- **Agent (static message)** - if you want the agent to start with an exact phrase each time e.g., "Thanks for calling Circle Life. I'm Kate, a virtual agent. How can I help you today?"
- **Agent (dynamic message)** - if you want the agent to start the call with a greeting based on the prompt
- **Contact** - if you want the agent to wait for the customer to speak before answering (best for outbound calls)

  

## ▶️ VIDEO TUTORIAL

Updated 6 months ago

---
