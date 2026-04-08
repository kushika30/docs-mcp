# Concurrency

Every AI agent can concurrently handle a max of 50 calls or 50 SMS conversations at once. Your order form will define the number of concurrent calls that are included in your Plan for free. Additional concurrency can be purchased.

## Limit your AI Agent concurrency

- **Want to limit the concurrency of your AI Agent to a lower number**, especially in cases where your agent needs to transfer calls to a human team that is staff contained. For example, if one of your AI Agent use cases is an SDR agent who qualifies inbound insurance prospects, then hands them to a licensed agent to close the sale, let's say you have:
  - an AI agent doing 50 calls at once that last 5 mins on average
  - a 40% transfer rate of those calls
  - it takes your licensed human reps 30 mins on average to close the sale
  - so you'd need 120 licensed reps (30 min / 5 min x 50 x .40) to pair with that AI Agent.

## Increase your AI Agent concurrency

- For high volume use cases where SLAs really matter, you can create multiple AI agents to handle the same calls using a queue to round robin the calls among those agents.

## Set your concurrency by Agent

You can set your concurrency by channel by clicking on your AI agent from the Agents page, adjusting the "Task Capacity" to the number of concurrent calls or SMS your agent should handle and saving:

![](https://files.readme.io/f9f714a094db6a0605539141b93b7aaee5e672c83882c86d469818dd519cdb56-conc.png)

Updated 10 months ago

---
