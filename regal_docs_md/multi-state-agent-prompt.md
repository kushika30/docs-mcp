# Multi State Agent Prompt

# Building and Using Multi State Agents

Multi State Agents are designed for **structured, consistent conversations**. They break a call into clearly defined stages (states) with specific prompts, allowed behaviors, and transitions. This approach is best when you need **predictable, repeatable outcomes and adherence to required or compliant messaging.**

Single State Agents remain the better choice for **adaptive conversations**, where one prompt can guide the interaction without strict stage boundaries.

---

## When to Use Single State vs. Multi State

Use a **Single State** agent when:

- The conversation can be handled with one prompt and general guardrails.
- You want the model to adapt freely without predefined checkpoints.
- Branching is light and strict stage control isn’t required.

Use a **Multi State** agent when:

- You need a **highly repeatable script** with required language and checkpoints.
- Each phase has **clear entry and exit criteria**.
- Compliance or consistency requires **explicit transitions**.
- Actions must occur at specific, defined points in the flow.

Examples suited to Multi State (structured and consistent):

- Identity verification → required disclosures → qualification → transfer.
- Claims intake with required fields, confirmation read-back, and attestation.
- Regulated sales workflow with scripted consent, eligibility checks, and disclosures.
- Retention or cancellation process with defined stages and outcomes.

---

## Building a Multi State Agent

When you create a new agent, choose Single State or Multi State. You can update configurations later, but you cannot switch build modes after creation.

A Multi State Agent has:

1. Agent details
2. Multi State canvas
3. Prompt transitions

---

## Agent Details

This page defines settings that apply across every node:

- Agent name and description
- Voice and language
- Global prompt and guardrails
- Common objection/question handling
- Call settings (Reminders, End Call on Silence, Max Call Length)
- Global knowledge bases

### How the AI uses context

- The AI has access to the **conversation transcript**, including previous actions.
- It uses both **global settings** and the **current node’s prompt/configuration** at any given time.
- Node prompts are **appended** to the global prompt on each node; prompts from other nodes aren’t active.

---

## Multi State Canvas

The canvas is the visual builder where you design the conversation flow. It contains the conversation start, prompt nodes, action nodes, and transitions.

![](https://files.readme.io/3a8b01f4fee257adb9f6ce5f5f2d7e5248d6a95c58e20bca3e543d21c1d27b17-Screenshot_2025-10-15_at_1.47.17_PM.png)

Within the canvas you can:

- Set the **conversation start**, choosing who begins the call and how:
  - **Agent (Dynamic Message):** The agent opens with a generated message based on context.
  - **Agent (Static Message):** The agent opens with a scripted, fixed message (best for disclosures).
  - **Contact:** The agent waits for the contact to speak first. If the contact remains silent, the call ends after the configured End Call on Silence timeout.
- Add and organize nodes to represent each stage of the conversation.
- Draw connections between nodes to define transitions and outcomes.
- Rename nodes, view node types, and navigate across stages visually.

The canvas gives you an at-a-glance view of your agent’s structure, ensuring your flow is clear, consistent, and easy to maintain.

---

## Prompt Nodes

Prompt nodes define scripted or constrained behavior within a stage.

![](https://files.readme.io/b69f11afe8857a3eaaeb1ca6f4659752f6567f6a5fc20ef603e339eb3252ee24-Screenshot_2025-10-15_at_1.41.41_PM.png)

In a prompt node, you can:

- Name the node.
- Choose a prompt style:
  - **Prompt** — Provide instructions for how the agent should behave in this stage.
  - **Say exactly** — The agent says the text exactly as written (useful for required disclosures).
- Insert contact attributes for personalization.
- Block interruptions for compliance or required statements.
- Define transition conditions to control when the agent should move on.

### Invoking actions from prompt nodes

![](https://files.readme.io/e31bbe935bbbd32b77cdfdfd025b611c6100f86f8a0d21ba5a6b88f37cb67df1-Screenshot_2025-11-25_at_5.09.20PM.png)

You can associate actions directly with a prompt node:

- Actions may be invoked as part of the node’s behavior.
- This allows handling simple action logic in the same node.
- Actions referenced in the global prompt can also be invoked here (e.g., objection handling).

Common uses:

- Logging consent after a disclosure.
- Handling an objection and triggering an action.
- Lightweight or side-effect actions.
- Gathering a date and time for a scheduled callback and iterating over until both parties agree.

### Global actions

Global actions let you define an action once and make it available everywhere in a Multi State agent. When an action is marked as global, it can be used in any prompt node and referenced from the global prompt, so you don’t have to repeat the same handling across nodes.

To enable a global action, open the action and turn on **Global Action**.

Common uses:

- Escalation / talk to a human (transfer call).
- Universal opt-out or compliance handling (stop calling, unsubscribe, do not contact).
- Global fallback when the agent is stuck (repeated confusion, low confidence, repeated ASR issues).

Global actions are best for behavior that should apply no matter which node the agent is currently in. If an action needs to run at a specific point in the flow, keep it node-specific or use an action node instead.

---

## Action Nodes

Action nodes perform specific operations.

![](https://files.readme.io/e95192717f936c2843fefa0e9726274733c0fb581671cd5fe9f00b052c2c89c2-Screenshot_2025-10-15_at_1.45.41_PM.png)

In an action node, you can:

- Select or create the action (setup mirrors the standalone action documentation).
- Block interruptions when the action must complete uninterrupted.
- Define transition conditions to move to the correct next node based on outcomes.

Common uses:

- Triggering a warm transfer after eligibility checks and disclosures.
- Writing data to a system of record, then transitioning based on success or failure.
- Sending follow-ups or confirmation messages after a scripted stage.

---

## Prompt Transitions

Prompt transitions determine when and how the agent moves between nodes.

- Transitions are evaluated after each agent message.
- If no condition is met, the agent remains in the current node.
- If no transitions exist, the agent proceeds automatically.
- Conditions may depend on responses, variables, or action results.

---

## Testing and Behavior

- Transition evaluation occurs after every AI turn.
- The AI uses the conversation history plus the current node’s context.
- Node prompts are appended to the global prompt.
- Contact and task attributes behave the same as in Single State agents.
- For the “Contact” start mode, the agent waits until **End Call on Silence** if the contact does not speak.

---

## Best Practices for Structured Flows

- Design the conversation as **stages with clear entry and exit criteria** before building.
- Use **Say exactly** for required or compliance language, and block interruptions as needed.
- Keep each node focused on a **single purpose** (e.g., verify identity, read disclosure, capture consent).
- Place every operation (transfer, API call) in its **own action node**.
- Name nodes clearly (“ID Verification,” “Disclosure A,” “Qualification,” “Outcome Summary”).
- Use Multi State when you need **repeatable, consistent steps**; use Single State when flexibility is more important.

---

## Summary

Multi State Agents enforce **structure and consistency** through defined nodes, transitions, and a clear visual canvas. They’re ideal for **scripted, compliant, and predictable** conversations. Single State Agents are best for **adaptive** interactions where a single prompt and flexible context are sufficient.

Updated about 1 month ago

---
