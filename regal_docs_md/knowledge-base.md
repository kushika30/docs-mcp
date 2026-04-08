# Knowledge Base

A Knowledge base is a collection of sources of information that your agent can access to retrieve relevant information during a conversation. It can greatly improve the quality and accuracy of your AI agent's responses to customers.

Common sources to add to a knowledge base include support sites (e.g., whatever customer-facing content you already have in your Zendesk or other support tool), internal wikis/training guides you use to train your human agents on troubleshooting/handling steps, etc.

## How Knowledge Bases Work

You can create knowledge bases, and connect them to your agents. When the knowledge base is created, it will be chunked according to a semantic chunking strategy and stored in a vector database.

When a knowledge base is connected to an agent, the agent will always try to retrieve information from the knowledge base before responding. There’s no need to change your prompt for it to trigger, as it will be done automatically, for every response generation.

The agent will use the call transcript, prompt and knowledge base retrieval to determine how to craft the best, most relevant response.

## Create a Knowledge Base

To create a knowledge base go to AI Agents > Knowledge Base > New Knowledge Base, name your knowledge base and add sources.

![](https://files.readme.io/9dbc47874de69f8b8bcea2c0bea61e4e9ae045d95642a4a99fee2ff6f0b621fc-image.png)

**Note: always add a detailed description for the KB** This helps the LLM determine when the retrieve information from KB, and is especially important when the agent can access more than one KB.

Supported sources include:

- URLs: Live Website content
- Documents: Upload files (supported types: doc, .docx, .pdf, .ppt, .pptx, .txt, .xml)
- Text: Paste or type in custom text

Knowledge bases perform best when you use markdown format for the source, with clear paragraphs: it will be easier to chunk and is easier to be retrieved.

We do not recommend using tabular data as it's harder to chunk and leads to suboptimal results.

When you add a Website to a knowledge base, we scan your website and index each unique link. You can pick and choose which to include. Then it might take up to a few minutes to fully chunk and store the content from your website.

Make sure to add the root URL of the site you want to add, starting with https://

![](https://files.readme.io/4867a747feb3cd0363aa12b836b7c7d11d6ceeb88f8e1002a2c5f7ec9ea4e883-scan.png)

Each knowledge base has the following limits:

- URLs: Max 300 urls per source
- Documents: Max 25 files, each file at max 50MB
- Text: Max 50 text snippest

You can create multiple knowledge bases to overcome these limits.

We now also support a bulk input option! Great for when you have a set list of URLs to scrape from.

![](https://files.readme.io/8449a83e677f88c62e26c18623b2b9a905e84f921aa9594e2f6e4cb90c208a49-image.png)

### Scheduling Recurring Webscrape

Custom refresh schedule can be set up for each knowledge base based on needs (e.g. weekly or daily). Contact your FDE or Regal support to set it up. New knowledge bases created will require new schedule to be set up, but updating existing knowledge base will not affect the refresh schedule.

## Connect an AI Agent to a Knowledge Base

Connect your agent to knowledge base(s) from the AI Agent. Select which knowledge base(s) to add.

An AI agent can be connected to multiple knowledge bases. And multiple AI agents can connect to the same knowledge base.

![](https://files.readme.io/262d93596a6813c18831e385af83cecd4d9b80ab0542c496ce4780b53072cf5c-Add.png)

## Knowledge Base Hygiene

Some issues you may run into when trying to upload a knowledge base or have your agent make use of it:

- Website fails to scan. It might be that your Website doesn't have a sitemap, or has too many pages that 404 or is blocking Regal from scanning it. Reach out to [[email protected]](/cdn-cgi/l/email-protection#03707673736c717743716664626f2d626a) to resolve
- Not enough information in your knowledge base. You may need to add more sources to cover the breadth of your use case
- Too much redundant or very similar information in your knowledge base. This could lead to less predictability in exactly how agent responds or makes it hard for your agent to disambiguate which chunk to use
- Sales or conflicting information in your knowledge base. Now's a great time to improve the quality of your your knowledge base

## Other Best Practices

- If the content theme is largely similar, try to upload them within one KB with a description. So that LLM can retrieve from a single KB, and return a list of chunks from most to least relevant. Unless there are a very high number of URLs, we recommend using this approach.
- If there are too many URLs or files for one KB, then separating them into multiple by **themes**. The KB description must be thorough and descriptive so that the correct one can be called. This will also help with reducing latency (so only a relevant subset of KB is retrieved against.)

## Knowledge Base vs. Questions & Objections Handling in Prompt

When building an AI agent in Regal, you have two main ways to teach it about your product, policies, or common questions: Add information directly into the prompt or Connect your agent to a knowledge base.

### Use the Prompt for Short, Predictable Content

Put content directly into the prompt when:

- The info is short, stable, and unlikely to change (e.g., 20 or fewer FAQs/Objections)
- You want the AI to respond with very specific language or tight control
- You want the AI to take an action
- It’s something the agent will always need, like:
  - Common objections or rebuttals
  - Simple FAQs
  - Company messaging or disclaimers
  - Simple pricing or business hours that rarely changes
  - Tone or style guidance

### Use a Knowledge Base for Scalable, Dynamic Information

Use the knowledge base when:

- You have too much content to fit in the prompt (the maximum prompt token length is 8,192 which roughly translates to 6,000 - 6,500 words. Prompts longer than that don’t perform well)
- The reference content is long-form, detailed, or frequently updated
- The AI needs to look things up based on context, and potentially synthesize a response from across multiple sources of information
- You want to manage knowledge separately from the prompt in a centralized place where e.g., your human agents and/or customers can also reference the same knowledge
- Example content that requires a knowledge base:
  - Product documentation
  - Support articles or troubleshooting guides
  - Dynamic FAQs that change regularly (from internal wiki or external support site)
  - State-specific compliance policies
  - Anything maintained by another team (support, legal, etc.)

| Use Case | Use Prompt? | Use Knowledge Base? |
| --- | --- | --- |
| Objections Handling | ✅ Yes | ❌ Not Needed |
| List of FAQs | ✅ For top 20 | ✅ For full article-based FAQ library |
| Product Specs | ❌ Too long | ✅ |
| Refund Policy | ✅/❌ Depending on complexity | ✅ If long or e.g., varies by state |
| Complex Trouble Shooting Guides | ❌ | ✅ |
| Insurance Plan Documents | ✅ To long | ✅ |

### When to Combine Both

You don’t have to choose just one! Use the prompt for fast, high-confidence replies, and the knowledge base for everything else. Your AI agent will automatically retrieve info from each when it’s relevant, and you can specifically prompt it when to reference each, if needed.

## ▶️ VIDEO TUTORIAL

Updated 6 months ago

---
