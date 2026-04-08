# End Call

## Overview

The **End Call** action lets your AI Voice Agent intentionally end a call at the right moment. You can control **when** the call should end, **whether** the agent says a goodbye, and **what** that goodbye sounds like.

To ensure consistent behavior, you must also instruct the agent in its prompt when this action should be invoked.

![End Call Setup](https://files.readme.io/a9d2aa301506efb631fcef8aee2f723d429531a4f5682eb840c19f9fac418dcd-Screenshot_2026-02-04_at_4.28.38PM.png)

End Call Setup

## Configure the End Call Action

When adding an End Call action, configure the following fields.

### Name of End Call Action

A unique identifier for the action (for example, `end_call`). This is the function name the agent will invoke.

### End Call Description

Describe **when the AI Agent should use this action to end a call**. This guidance helps the model determine the correct moment to hang up.

**Example:**

> Invoke this action when the contact confirms they are not interested, says “goodbye,” or indicates the conversation is complete.

### Skip Goodbye Message

Enable **Skip Goodbye Message** to have the agent hang up immediately without saying anything.

This is useful for:

- Voicemail or answering machine scenarios where you want to hang up without leaving a message,
- Situations where speed and efficiency matter more than graceful goodbyes.

When this toggle is enabled, the agent will end the call as soon as the action is invoked.

### Goodbye Message Prompt

Use the **Goodbye Message Prompt** to control what the agent says right before ending the call.

- If a prompt is provided, the agent use the prompt to generate a goodbye message,
- If left empty, the agent will generate a goodbye message using its main prompt.

## Update Your Agent Prompt

Your agent prompt should clearly specify **when** the End Call action should be used. Without explicit guidance, the agent may hesitate or end calls inconsistently.

You can include these instructions in:

- Task Steps
- Questions and Objections Handling
- Action Nodes (in Multi-State Agents)

### Example

Text

```
4. Ask "Are you ready to move forward?"

- If the contact responds yes, explain the next steps.
- If the contact responds no, call end_call and say "Thanks for your time."
```

Updated 2 months ago

---
