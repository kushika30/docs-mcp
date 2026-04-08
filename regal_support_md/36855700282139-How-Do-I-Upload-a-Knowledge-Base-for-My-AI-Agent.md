---
id: 36855700282139
title: "How Do I Upload a Knowledge Base for My AI Agent?"
html_url: "https://support.regal.ai/hc/en-us/articles/36855700282139-How-Do-I-Upload-a-Knowledge-Base-for-My-AI-Agent"
updated_at: "2025-05-29T15:10:59Z"
---

# How Do I Upload a Knowledge Base for My AI Agent?

A Knowledge base is a collection of sources of information that your agent can access to retrieve relevant information during a conversation. It can greatly improve the quality and accuracy of your AI agent's responses to customers. See article [When Should I Use a Knowledge Base?](https://support.regal.ai/hc/en-us/articles/35534158992027-When-Should-I-Use-a-Knowledge-Base) to understand when it's worth using a Knowledge base vs. not as Knowledge Bases do add a bit of latency to your AI Agent.

Common sources to add to a knowledge base include support sites (e.g., whatever customer-facing content you already have in your Zendesk or other support tool), internal wikis/training guides you use to train your human agents on troubleshooting/handling steps, etc.

## How Knowledge Bases Work

You can create knowledge bases, and connect them to your agents. When the knowledge base is created, it will be chunked according to a semantic chunking strategy and stored in a vector database.

When a knowledge base is connected to an agent, the agent will always try to retrieve information from the knowledge base before responding. There’s no need to change your prompt for it to trigger, as it will be done automatically, for every response generation.

The agent will use the call transcript, prompt and knowledge base retrieval to determine how to craft the best, most relevant response.

## Create a Knowledge Base

To create a knowledge base:

1. Go to AI Agents > Knowledge Base > New Knowledge Base.
2. Name your knowledge base
3. Add sources

![Screen Shot 2025-05-09 at 8.03.50 PM.png](https://support.regal.ai/hc/article_attachments/36856525232155)

Supported sources include:

- **URLs:** Live Website content
- **Documents:** Upload files (supported types: doc, .docx, .pdf, .ppt, .pptx, .txt, .xml)
- **Text:** Paste or type in custom text

Knowledge bases perform best when you use markdown format for the source, with clear paragraphs: it will be easier to chunk and is easier to be retrieved.

We do not recommend using tabular data as it's harder to chunk and leads to suboptimal results.

When you add a Website to a knowledge base, we scan your website and index each unique link. You can pick and choose which to include. Then it might take up to a few minutes to fully chunk and store the content from your website.

Make sure to add the root URL of the site you want to add, starting with https://

![Screen Shot 2025-05-09 at 8.04.11 PM.png](https://support.regal.ai/hc/article_attachments/36856519992987)

Each knowledge base has the following limits:

- **URLs:** Max 300 urls per source
- **Documents:** Max 25 files, each file at max 50MB
- **Text:** Max 50 text snippest

You can create multiple knowledge bases to overcome these limits.

## Connect an AI Agent to a Knowledge Base

An AI agent can be connected to multiple knowledge bases. And multiple AI agents can connect to the same knowledge base.

To connect your agent to a knowledge base:

1. Click on your AI Agent to get to the AI Agent builder
2. Click Add Knowledge Base
3. Select the knowledge bases you want to connect to your AI Agent
4. Save your AI Agent

![Screen Shot 2025-05-09 at 8.23.44 PM.png](https://support.regal.ai/hc/article_attachments/36856525234843)

## Test Your Agent

Now that you've connected your agent to a Knowledge base, press the Test button (for Voice agents) or use the Test Logic interface to chat with your SMS agent, and see how they respond to different queries. 

Update your knowledge bases as needed.

## Knowledge Base Hygiene

Some issues you may run into when trying to upload a knowledge base or have your agent make use of it:

1. **Website fails to scan.** It might be that your Website doesn't have a sitemap, or has too many pages that 404 or is blocking Regal from scanning it. Reach out to [support@regal.ai](mailto:support@regal.ai) to resolve
2. **Not enough information in your knowledge base.** You may need to add more sources to cover the breadth of your use case
3. **Too much redundant or very similar information in your knowledge base.** This could lead to less predictability in exactly how agent responds or makes it hard for your agent to disambiguate which chunk to use
4. **Sales or conflicting information in your knowledge base.** Now's a great time to improve the quality of your your knowledge base