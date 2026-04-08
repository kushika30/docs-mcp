# Saving and Updating Agents

![](https://files.readme.io/0da706f899268dce3c3c1dca9d7ecfa5f694ce0cbfd833836697bcacf082089f-Screenshot_2026-03-18_at_7.33.45PM.png)

## Overview

Every time you save an AI Agent, Regal creates a new version.

Each version has one of two statuses:

- **Draft**: Used for testing, simulations, and review only. Draft versions are never used on live calls.
- **Active**: Used on live calls. The most recent Active version is always the version customers interact with in production.

This allows you to iterate on an agent, validate changes, and only push updates live when you're ready.

## Draft vs. Active

### Draft

Save a version as **Draft** when you want to:

- test changes without affecting production
- collaborate on edits before going live
- continue iterating on an agent over multiple saves
- restore an older version and review it before re-activating it

Draft versions can be used in the Test UI and in simulations, but they are never used on live customer calls.

### Active

Save a version as **Active** when you want your changes to go live.

The latest Active version is always the version used in production. As soon as a new version is saved as Active, it becomes the live version for customer calls.

![](https://files.readme.io/2194e357c266829f653a87982d4cce025c72e688a096618600ba9554ac1fda2a-Screenshot_2026-03-18_at_7.36.25PM.png)

## How Saving Works

Every save creates a new version of the agent.

That means:

- saving changes as Draft creates a new Draft version
- saving changes as Active creates a new Active version
- restoring an older version also creates a new version

You are never editing an old version in place. Instead, Regal always creates a new version based on the state of the agent at the time you save.

## Testing Behavior vs. Production Behavior

Regal uses different versions of the agent depending on where the agent is running.

### In Testing

The **latest saved version** is always used by default in:

- the Test UI
- simulations

This is true whether that latest version is Draft or Active.

### In Production

The **latest Active version** is always used on live calls.

This means you can continue saving Draft changes for testing while keeping your current Active version live in production.

## Recommended Workflow

A common workflow looks like this:

1. Open your existing agent.
2. Make your changes.
3. Save the agent as **Draft**.
4. Test the latest version in the Test UI or simulations.
5. Continue making changes and saving new Draft versions until you're satisfied.
6. Save the agent as **Active** when you're ready for the new version to go live.

This allows you to iterate safely without creating duplicate agents or manually copying changes back into production.

## Restoring an Older Version

When you restore an older version of an agent, Regal restores it as a **Draft**.

This gives you a chance to review and test that restored version before using it in production. If you want that restored version to go live, save it again as **Active**.

## Version History

In version history, you can see:

- whether each version is Draft or Active
- which version is currently Active
- when a version became Active
- when an Active version stopped being used in production

This makes it easier to understand what changed, what was tested, and what is currently live.

![](https://files.readme.io/fc716efdeee982a052a0da03b51a4f579d98818b5669c0b3f789fc334b19c44c-Screenshot_2026-03-18_at_7.34.37PM.png)

## Multi-State Agents

Multi-State agents can be saved as Draft even if not all nodes are connected.

When you test a Draft version with unconnected nodes, Regal automatically removes transitions that lead nowhere for the test run. This makes it easier to validate partial changes without fully wiring the entire graph first.

## Best Practices

- Save as **Draft** while you're still iterating.
- Save as **Active** only when you're ready for the version to be used on live calls.
- Use Draft after restoring an older version so you can confirm behavior before re-activating it.
- Rely on version history to track what was tested and what is currently live.

## FAQ

### Which version opens when I click into an agent?

Regal always opens the **latest saved version** of the agent, whether it is Draft or Active.

### Which version is used in the Test UI?

The Test UI always uses the **latest saved version**.

### Which version is used on live calls?

Live calls always use the **latest Active version**.

### Can I save the first version of an agent as Draft?

No. The first version of an agent must be saved as **Active**. The agent will not be available for calls until you move them to an Available status, though.

### Does restoring a version make it live immediately?

No. Restoring creates a new **Draft** version. To make it live, save that restored version as **Active**.

Updated 20 days ago

---
