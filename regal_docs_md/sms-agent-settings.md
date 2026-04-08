# SMS Agent Settings

## LLM Model

LLMs are the "brains" behind your AI agent. You can pick the LLM that's best suited to your use case. Learn more about available [LLM Models](/docs/llm-models) and how to select your model.

## Disposition Settings

### Autocomplete - Inactivity Timeout

Because SMS/chat conversations are asynchronous, they have no clear start and end, so you need to define when the AI can consider the conversation closed. Define an inactivity timeout which is the amount of time a customer can remain underesponsive to an agent's last message befeore th conversation is closed.

If the customer responds before the time out, it will extend the conversation and start the timer again.

Note: the reason to close out conversations rather than leaving them endlessly open is:

- You want data about where a conversation is so you can decide what to do next (e.g., in a Journey) - and each time a conversation is closed, we fire a sms\_conversation.completed event with the disposition of what happened
- AI Agents have a max capacity of 50 concurrent conversations - so you don't want to eat up that capacity with stale conversations

Even if a conversation is closed, if the customer responds in again, it will open a new one for the agent to hand, and the agent has memory of the last 100 messages, so it will pick up the conversation seamlessly.

![](https://files.readme.io/65c7691ad644dbf23edc9d05f4c856ff79fb10dacf83d91921ea293887b94714-Disposition_Settings.png)

### Dispositions

Dispositions are where you define the outcome of the conversation that the agent logs when it closes out the conversation. You can define the dispositions, and then prompt your agent on when to choose each disposition in the "Disposition Instructions"

![](https://files.readme.io/155e2c44f384f840c7911677464e94ec46368d19d5a66706c973606a3b43af27-Disposition_Prompt.png)

Updated 10 months ago

---
