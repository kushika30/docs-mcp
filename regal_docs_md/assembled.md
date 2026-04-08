# Assembled

Assembled is a Workforce Management Tool that can be used to track Agent adherence to their expected work schedules and help forecast task volumes and staffing needs to hit your desired SLAs.

## Connection Setup

To enable the Regal Assembled Integration, you will need to provide your Assembled API key.

**Step 1:** Go to your Assembled account > click on **Company Settings** in the left nav > click on **API keys**.

**Step 2:** Create a new API key and name it something appropriate to indicate it will be used for Regal.

**Step 3**: Email your Assembled API Key to [[email protected].](/cdn-cgi/l/email-protection#15666065657a67615567707274793b7c7a3b) (You can use <https://pwpush.com> to share it in a more secure way)

> ## 📘
>
> Wait for Regal Confirmation
>
> Once we have your API key, we will respond within a couple of hours and let you know that you're all set. You should then see data flowing through.

> ## 🚧
>
> Data from Regal will appear as "API" in Assembled
>
> Because the integration is directly using Assembled's APIs, the "Platform" field in Assembled will show "API" rather than "Regal".

## Agent States

### Agent manually changes their status in Regal via dropdown:

Whenever an agent manually changes their status Regal, we generate an *agent.activity.updated* event and post it to the Assembled [*Agent States*](https://docs.assembled.com/#agent-states) endpoint, updating their state in Assembled in real time.

![Example of manual agent state options](https://files.readme.io/c9b61b9-walking.png)

Example of manual agent state options

**Note:** You can modify the available states by submitting a request to your CSM or [[email protected]](/cdn-cgi/l/email-protection#0e7d7b7e7e617c7a4e7c6b696f627861676d6b206d6163)

Here're an example of what this will look like in Assembled.

![Agent States being updated in Assembled](https://files.readme.io/c7c7c0b-image.png)

Agent States being updated in Assembled

### System-generated state changes:

**Automatic *Offline* state:** If an agent logs out of Regal or has been idle long enough, Regal will automatically switch them to the *Offline* status, which will trigger the same update as manually selecting that option.

**Granular Call states:** Optionally, Regal can automatically update the agent state in Assembled to capture:

1. when a task has been assigned but not yet accepted by the agent
2. when the agent is on a call after accepting a task, and
3. when the call has ended and the task is in wrapping.

To enable these additional states, just let us know how you would like them to be reflected in Assembled. For example:

| Regal Call State | Assembled Agent State |
| --- | --- |
| call task reservation created for agent but not yet accepted | On Preview |
| call task reservation accepted by agent and call has started | On Call |
| call has ended and task has gone into wrapping (waiting for agent to Summarize task) | After Call Work |

When an agent submits the task summary (i.e. call is completed), Regal will then automatically update their agent state in Assembled back to the manual Agent Status. E.g. if they were in a manually-selected *Available* state before a call, then after the call task is completed they will again be set back to the *Available* state in Assembled.

> ## 🚧
>
> Allowing more than 1 call reservation at once can distort stats in Assembled
>
> If you have configured your routing rules such that an agent can receive a call task while they are still in a call, the new task will flip their state. For example, if the states are configured as in the table above, the new call task would flip the agent's state from On Call to On Preview even though they are still in the first call.

> ## 🚧
>
> Task reservations that timeout while agent is in some "available" status will automatically switch agents to the main Available status.
>
> E.g. if an inbound sms task times out, and the agent is in a "At Desk (available)" status, their status will automatically be set to the main Available status. This could also pull them out of "Progressive Dial Mode".
>
> If this happens while the agent is on a call, their status in Assembled would go like this: At Desk > On Preview > On Call > Available > After Call Work > Available, resulting in distorted stats.
>
> This effect can be mitigated by: configuring routing rules such that inbound sms can't be assigned to agents in Progressive Dial Mode, or simply accepting the task before it times out.

## Conversations

In addition to Agent States, Regal will also post updates to the Assembled *[Conversations](https://docs.assembled.com/#conversations)* endpoint as tasks are created, abandoned and completed.

The Assembled channel will be determined by the Regal channel as follows:

| Regal Task Channel | Assembled Channel |
| --- | --- |
| voice / voicemail | phone |
| sms / mms | chat |
| email | email |
| custom tasks | backoffice |

And the Assembled conversation status will be determined by the Regal Event type, and direction, as follows:

| Regal Event | inbound | outbound |
| --- | --- | --- |
| task.created |  | open |
| task.reservation.created | open |  |
| task.reservation.accepted | pending | pending |
| call.completed | solved | solved |
| sms.conversation.completed | solved | solved |
| email.conversation.completed | solved | solved |
| custom.task.completed | n/a | solved |
| task.canceled | abandoned | abandoned |

If you have any questions about the Assembled integration, reach out to [[email protected]](/cdn-cgi/l/email-protection#2b585e5b5b44595f6b594e4c4a47054244)

Updated about 2 years ago

---
