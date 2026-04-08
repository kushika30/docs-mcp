# Conversation Topics Dashboard

# Overview

The **Conversation Topics Dashboard** provides an unbiased view into the key themes emerging from AI agent calls. With no setup required, it analyzes transcripts to automatically identify topics, subtopics, and patterns—helping you quickly focus on areas that need attention points you toward why it happened and where to act.

The Conversation Insights Dashboard is a diagnostic tool to **improve AI agents and speed up QA**. By regularly reviewing topic frequency, you can:

- See which topics dominate customer conversations.
- Drill into subtopics for performance metrics and call examples.
- Improve agent performance by closing knowledge base (KB) and prompt gaps faster.
- Track trends over time to spot emerging issues early, and confirm change impact.

**Note: these insights are generated at the individual AI Agent level.**Grouping agents together to review may show redundant categories.

![](https://files.readme.io/0d2250bd81d42805d459cb9b7eec503ebd64f218b2377933d53376f3a106f9df-image.png)

> ## 📘
>
> Note: filter to a single AI Agent to get started

![](https://files.readme.io/3b3f6005f7f1261228f48ab5f25ed2f8f5c8d892c8b5529c098c35559f9f3408-image.png)

**Where can you find this dashboard?** Under Conversation Intelligence > Insights, you can see Regal Improve - Conversation Insights as the 4th dropdown option.

![](https://files.readme.io/1dd1604ebf1c0075581ba510eb579fd2aa14cefea655c417577bca8ba1cfdbd4-image.png)

## Transcript Volume Requirement

To ensure the insights are meaningful, the individual AI agent need to make **at least 300 calls *with extractions***  to generate the first set of topics insights.

Calls with extractions are ones with at least 4 quality transcript moments from the customers — typically these are calls with a meaningful back and forth exchange with the agent, which makes them suited for the insights dash. Unanswered calls, or calls with short exchanges "call me back" are not counted towards the threshold.

**What does this mean for your agent?**

- For Inbound agents, 300-400 total calls is generally sufficient.
- For Outbound agents, it can vary widely based on pickup %, how many quick hangups, etc. So typically 500-1000 calls are required.

# Understanding Topics and Subtopics

Focusing on the right topics helps ensure you’re working on the conversation areas with the most impact, rather than guessing.

**Topics** are broad categories extracted from transcripts based on what **customers** have said on the calls. They include:

- Customer objections
- Call reasons (IB) or decisions (OB)
- Common questions

**Subtopics** group related customer utterances under a **Parent Topic** for better thematic analysis.

- E.g. Parent Topic = Claims Process  
  Subtopics = Required Documentation, Claim Status, Submission Timeline.

**Key questions to ask:**

- What are the most common topics customers are ringing up?
- Which objections are blocking progress most often?
- How are my topics trending overtime? What may be causing the trend?
- How do the topics correlate with other call metadata such as transfer rate, call length, etc?

![](https://files.readme.io/03de2dc921358f47c556e60da5de464c10fc344065ba247362bb842e372a37ef-image.png)

Parent topics trend over time - the running total for a parent topic

![](https://files.readme.io/ea26685bcdddad71bdb1bca2fdf5121a978084a95c7aff72a9949371e87411b4-image.png)

Top 10 Parent Topics by Type - the bubble size correlates to volume, and the color correlates to a call metric which **can be customized** (in this case it's call length, the darker color represents longer calls)

![](https://files.readme.io/0381266937cbdab3acf9333bcdd52018c9487eb255afbca13003ecd3a0a01035-image.png)

# Drilling Into Details

Regal IQ lets you drill deeper to see how calls with certain topic or subtopic are performing, and drill down to individual transcripts. Eliminate sampling bias and target related transcripts with poor outcomes, without spending hours manually reviewing a large volume of calls.

**Call metrics** like talk time and contact sentiment help you quickly pinpoint where your agent is falling short.

![](https://files.readme.io/c2d9935de94c18c455a6ee32457b17609f627c1947c27da9d1fa76c23f289abb-image.png)

Validate assumption and observe additional patterns by listening the the recordings or reviewing the enhanced transcript. **By clicking on the Call Recordings cell in the Topics & Sub Topics Breakdown chart**, you can review the individual recordings (link to app.)

![](https://files.readme.io/9c09f30baf92fc6b12f885fb3b4f4f7492f2e4e24f94c568b3367a91b044f5e6-image.png)

You can then revise the prompt, expand your Knowledge Base, or adjust how the agent handles the objection accordingly, all within minutes.

# Using the Insights for Action

Here’s how to move from dashboard → action:

| Scenario | What to Look For | Possible Actions |
| --- | --- | --- |
| **Knowledge Gap** | Topic has high frequency + poor sentiment | Add KB content; update prompt for clarity |
| **Objection Pattern** | Specific objection appears in multiple poor-outcome calls | Add handling script to prompt; train on objection rebuttal |
| **Broken Flow** | High transfer rate or abandonment after topic | Adjust conversation flow logic or function calls |
| **Emerging Issue** | Topic trend line rising over days/weeks | Preemptively add coverage before issue worsens |

## Example Improvement Workflow:

1. Identify Out-of-Network Coverage as a high-frequency subtopic with poor sentiment.
2. Listen to 3–5 representative calls.
3. Notice the agent gives incomplete answers.
4. Update KB entries and prompt to provide clearer guidance.
5. Monitor the same metric over the next week to validate improvement (the topic should be showing up less frequently).

# Dashboard Update Cadence

**Initial Analysis:** upon internal request, initial dash will contain the first set of topics insights based on limited calls.

**Interim Updates:**

- Daily: no new topics will be generated, but new transcripts will be appended to existing topics so volume may shift
- Every 2 weeks: new topics will be generated from the accumulated transcripts, and existing topics will not change

**Full Retraining**: every 8 weeks after initial launch, the 8 week transcripts will be remodeled and re-clustered. **Note: this will result in new topics and changes to existing topics.**

Updated about 1 month ago

---
