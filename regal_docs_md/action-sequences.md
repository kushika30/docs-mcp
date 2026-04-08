# Action Sequences

## Overview

Action Sequences let your AI Agent call multiple actions back-to-back in a fixed order. Instead of relying on the LLM to invoke each action independently, you define the sequence once — and every time it runs, it executes all actions in order.

This is especially useful when two actions are tightly coupled and one must always follow the other. For example, if you want to transfer a caller to a human agent and also update the contact record before doing so, an Action Sequence ensures both happen every time — without risk of the LLM skipping a step.

## Key Use Cases

| Use Case | What It Enables |
| --- | --- |
| **Update Contact + Transfer** | Updates a contact's profile before transferring to a human agent, so reps always have full call context. |
| **Update CRM + Create Task** | Sends data to multiple endpoints in a single invocation — no separate calls required. |

## How Action Sequences Work

When an Action Sequence is triggered:

1. The AI Agent invokes all actions in the sequence, one after the other.
2. Once complete, it uses the combined response to decide next steps.

The LLM treats the sequence as a single unit — it either runs all of them or none.

## Set Up Action Sequences

### Step 1: Create the actions you want to sequence

In the Agent Builder, add each action individually under the **Actions** section. These are the building blocks — the sequence references them by name.

![](https://slabstatic.com/prod/assets/h2b7yidn/post/ymtd82cx/preimages/vgSmvDbsjQrjenYl4jfbLCY6.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzcyNjYwMTQ2LCJpYXQiOjE3NzE0NTA1NDYsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzJhbjlvbmtzOXVmbTQyazFpbGhnOGoyIiwibmJmIjoxNzcxNDUwNTQ2LCJwYXRoIjoicHJvZC9hc3NldHMvaDJiN3lpZG4vcG9zdC95bXRkODJjeCJ9.cxzVWxA4TPd5R6QlhugEVLQdiHbvOTAh_lgn3GxXq87qPc9ulM3PcjovTgwd9ULe1vjWiKwpnq-lSHLBStofvJsfMUHbM3LhaQLtZBejv4bp-jvWh6dh0oLTLyL38T836_sr0yus6lAq-0NJF-ToHwthjeptzyDUZavp3JYza6DXRK0lAxtiqRa9HetwQ3YRm_4umvLysO6LIlbC0JAls9KADS9lQ_-TgHbohO3psFdv11cXKKAJ1Z5Uc7AEWijdDN_linAdyITIMsrDrZCPUorLpsO6EaHqdSa-Vr9LVTsPaNkyGonU2VXLurKHljDmdPk8O7DIep5OLrRxIvbuqg)

### Step 2: Create the sequence

Click **+ Add Sequence** under the **Action Sequences** section. Give it a name, an optional description (this tells the AI Agent when to use it), and add the actions you want to run in order.

![](https://slabstatic.com/prod/assets/h2b7yidn/post/ymtd82cx/preimages/Iw6ZekP0EQnJqYoCluPYX6V0.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzcyNjYwMTQ2LCJpYXQiOjE3NzE0NTA1NDYsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzJhbjlvbmtzOXVmbTQyazFpbGhnOGoyIiwibmJmIjoxNzcxNDUwNTQ2LCJwYXRoIjoicHJvZC9hc3NldHMvaDJiN3lpZG4vcG9zdC95bXRkODJjeCJ9.cxzVWxA4TPd5R6QlhugEVLQdiHbvOTAh_lgn3GxXq87qPc9ulM3PcjovTgwd9ULe1vjWiKwpnq-lSHLBStofvJsfMUHbM3LhaQLtZBejv4bp-jvWh6dh0oLTLyL38T836_sr0yus6lAq-0NJF-ToHwthjeptzyDUZavp3JYza6DXRK0lAxtiqRa9HetwQ3YRm_4umvLysO6LIlbC0JAls9KADS9lQ_-TgHbohO3psFdv11cXKKAJ1Z5Uc7AEWijdDN_linAdyITIMsrDrZCPUorLpsO6EaHqdSa-Vr9LVTsPaNkyGonU2VXLurKHljDmdPk8O7DIep5OLrRxIvbuqg)
> ## 📘
>
> The description field is important. Write it the same way you'd describe when to call any other action — the AI Agent uses it to decide when to trigger the sequence.

## Troubleshooting & FAQ

**Can I reorder actions within a sequence?**  
Yes — use the drag handles in the sequence modal to reorder actions.

**What if one action in the sequence fails?**  
The sequence will stop at the failed action. Subsequent actions won't run. Make sure each action is well-tested independently before adding it to a sequence.

**Can a sequence include other sequences?**  
No — sequences can only contain individual actions, not other sequences.

Updated 5 days ago

---
