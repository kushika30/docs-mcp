# Transfer Call

Regal's Transfer Call Action allows your AI Agent to transfer calls to a human agent, whether that's someone inside Regal, an external contact, or an entry in your phonebook. This single action replaces separate internal and external transfer actions.

This article explains when and how to use the transfer action, how to set it up, and what to expect during warm and cold transfers.

## Key Use Cases

| Use case | Why it's powerful |
| --- | --- |
| Transfer to a human agent when escalation is required | Escalate to a live representative when an AI agent cannot resolve the issue or the customer requests a human. |
| Transfer to a queue for language or skill specialization | Route callers to the most appropriate internal queue, such as a Spanish-speaking team or technical specialists. |
| Transfer to an external partner or advisor | Seamlessly connect a qualified lead or customer to an external phone number or trusted partner organization. |
| Warmly hand off with full context | Give the receiving agent a clear summary of the call before they take over, improving continuity and experience. |

## Setting up a Transfer Call Action

### Add a transfer action

Go to Agent Settings > Actions > Add Action > Transfer Call.

Give the action a clear name, such as `transfer_to_support`, and add a description that explains when the AI agent should use it. For example:

Transfer to a human support agent when escalation is needed or when a customer asks to speak with a person.

You should also reference this action in your agent prompt so that the AI knows when to invoke it during a conversation.

![Transfer Action Modal](https://files.readme.io/c0ebc8ff5daf6840833719339711551abc2173d61884996642bdb5923d5c4baa-image.png)

Transfer Action Modal

  

### Choose the transfer destination

Use the Transfer Destination dropdown to choose where the call should go:

- Queue – Route the call to an internal Regal queue such as "Humans" or "Spanish Support".
- Phonebook – Transfer to a saved contact in your External Transfer Phonebook.
- Phone number – Send the call to any external number that isn't in your phonebook.

### Select the transfer type

Choose between cold and warm transfer.

- Cold transfer – The AI agent transfers the call immediately and leaves the call.
- Warm transfer – The AI agent places the contact on hold, stays on the line until the agent answers, delivers a short summary to the receiving agent (generated using the warm transfer prompt), removes the contact from hold, and then disconnects.

If you choose a warm transfer, complete the Warm Transfer Prompt field. This is the short message the AI agent will say to the human agent when introducing the call, for example:

Provide a short summary for the receiving agent about the purpose of the transfer. For example: “Hi, I’m connecting you with a customer who’s ready to review pricing options. They’ve confirmed their details and are waiting to finalize the next steps.”

### Speak before execution

Check the Speak Before Execution box if you want the AI agent to say something to the contact before initiating the transfer. For example:

Sure! Let me connect you to a human representative who can help further.

This ensures the agent finishes its message before the transfer begins.

## How Cold Transfer Behavior Works

When a cold transfer action is invoked, the following sequence occurs:

1. The AI Agent says the phrase provided in "Speak Before Execution" (if applicable).
2. The contact is placed on hold and a transfer call is created.
3. The AI Agent hangs up.

## How Warm Transfer Behavior Works

When a warm transfer action is invoked, the following sequence occurs:

1. The AI Agent says the phrase provided in "Speak Before Execution" (if applicable).
2. The contact is placed on hold and a transfer call is created.
3. Once the receiving person answers the transfer call, the AI agent detects that the call has been answered and invokes a special action called `agent_answered`.
4. The `agent_answered` action is automatically recorded on the transcript detail page and indicates the exact moment the human agent picked up the transfer.
5. The AI agent then uses the warm transfer prompt to generate a short message to the human agent, delivers that message, hangs up, and removes the contact from hold.
6. The human agent continues the call with full context.

During this period, reminder messages and the End Call on Silence setting are not applied while a transfer is pending.

> ## 📘
>
> Testing Warm Transfers
>
> When testing a warm transfer action in the Test Logic window, anything you send after the warm transfer action has been invoked will be considered what the receiving agent would have said. For example, if you type "Hi, this is Alex at Regal, how can I help you?" after the initial action is used, the AI Agent will decide whether to invoke `agent_answered` and provide the summary it generated before hanging up.

## Troubleshooting and FAQ

**Does Regal record during a transfer?**

Yes. Regal continues recording during transfers. If you are transferring to a phonebook entry, recording behavior can be configured in the External Transfer Phonebook.

**What is the `agent_answered` action shown on the transcript detail page?**

When the AI detects that an agent has answered a warm transfer, it automatically triggers the `agent_answered` action. This marks the moment the transfer was picked up and is visible in the call transcript details. It does not require any configuration and is logged automatically.

**Can I have multiple transfer actions for one agent?**

Yes. You can create separate transfer actions for different queues, phonebook entries, or destinations, each with its own descriptive name.

Updated 6 months ago

---
