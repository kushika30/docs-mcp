---
id: 35711384384411
title: "Getting Started with AI Agents"
html_url: "https://support.regal.ai/hc/en-us/articles/35711384384411-Getting-Started-with-AI-Agents"
updated_at: "2025-05-29T15:10:59Z"
---

# Getting Started with AI Agents

AI Agents are transforming how contact centers operate—offering scalable, intelligent support across sales, service, and scheduling. Whether you're trying to lower costs, boost speed-to-lead, or handle high-volume inbound tasks, AI Agents can help you deliver a faster, more consistent experience.

This guide will walk you through the key benefits, how to identify the best use cases, and the 4 essential steps to launch your first AI Agent.

### Why Use AI Agents in Your Contact Center?

AI Agents help you scale conversations with the same care and quality as your top reps - without adding headcount. Here are a few key benefits:

- **Lower Costs**: Reduce the number of tasks needing human handling
- **Instant Responses**: No wait times for customers, no SLA violations
- **Always On**: Operate 24/7 across time zones
- **Script Perfect**: Every interaction follows your script and FAQ handling, every time
- **Any Language**: Never turn a customer away again b/c you don’t have agents who speak their language
- **Easy to Scale**: Once an AI Agent works for a use case, you can scale it infinitely
- **Continuously Improving**: AI Agent is improving every day, enabling more use cases, more control and better quality

### Choosing the Right Use Cases

Start with the most impactful workflows in your business—conversations that:

- Happen frequently
- Follow a consistent script or work off a knowledge base
- Have high volume or cost when handled manually
- Contained conversations (e.g., <15 minutes on average)

**Tip:** Starting with small, off-to-the-side use cases may seem like a good way to derisk, however, they take just as much work to get the AI Agent right and if they work, they don’t scale fast and don’t have much impact, which means you’ll have to start all over again. We recommend focusing on the most impactful use cases for your business, and derisking by only turning them on at e.g., 1%. Then scaling up from there is easy.

Some common use cases include:

- Outbound or inbound qualification
- Rescheduling calls
- Payment collection
- Inbound Triage
- Appointment confirmations
- 24/7 Concierge
- Data collection

**![Screen Shot 2025-04-06 at 1.31.44 PM.png](https://support.regal.ai/hc/article_attachments/35711840998299)**

If you get these right, they unlock huge ROI and can scale fast.

### How to Build, Test, Deploy and Monitor Your AI Agents

Building AI Agents is an iterative process.

![Screen Shot 2025-04-06 at 1.23.51 PM.png](https://support.regal.ai/hc/article_attachments/35711426642843)

### Step 1: Build Your Agent

Go to **AI Agents > Custom Agents** and start from a Regal template for your use case. This gives you a strong foundation based on common best practices.

![Screen Shot 2025-04-06 at 1.30.43 PM.png](https://support.regal.ai/hc/article_attachments/35711813998747)

![Screen Shot 2025-04-06 at 1.36.51 PM.png](https://support.regal.ai/hc/article_attachments/35711841002651)

[See this article for more on how to set up AI SMS Agents.](https://support.regal.ai/hc/en-us/articles/36646480285339-Setting-Up-An-SMS-Agent)

Then customize:

1. Update the Task with your script—this is your AI Agent's call flow or sms flow
2. Add FAQs and Objection Handling to ensure your Agent can handle common scenarios
3. (Optional) Attach a Knowledge Base with relevant docs so your Agent can reference real-time info (coming soon for SMS)
4. Configure channel-specific preferences under Call Settings for voice channel and Disposition Setting for sms channel.

![Screen Shot 2025-04-06 at 1.33.45 PM.png](https://support.regal.ai/hc/article_attachments/35711841003163)

**Tip**: Don’t over-optimize in v1—get a working draft live and refine it based on test calls. Don’t worry about handling all edge cases. E.g., if 1% of calls are in Spanish or for 2% of calls someone is calling on behalf of someone else, but those would require completely different flows, better to drop them from the v1 (and add them later). In v1, you should be validating:

1. Can my agent successfully handle the majority cases for this task
2. Will my customers accept speaking to an AI agent

When you save your agent, it will automatically create a user in Regal. Make sure to update the internal name to something descriptive like "Inbound Triage" or "Payment Reminder" before saving as this will be used to name the user.

#### Versioning

Every time you save your agent, it will create a new version. When you have versions you want to remember, and possibly roll back to, you should give it a descriptive name so that you remember what changes you made to that version.

Click on the Version at the top right of your agent to view the version history. You can click on any previous version to view, but not edit an old version. Click "Restore" to restore and start editing an old version.

![Screen Shot 2025-04-06 at 1.41.53 PM.png](https://support.regal.ai/hc/article_attachments/35711841003931)![Screen Shot 2025-04-06 at 1.42.59 PM.png](https://support.regal.ai/hc/article_attachments/35711841004827)

### Step 2: Test Your Agent

Before going live, for voice agents, run test calls in the UI (for sms agent, use the chat window):

- Review how your Agent handles different responses
- Make sure it follows the Task flow correctly
- Check tone, timing, and clarity

Use test values to simulate different customer profiles. Make updates to the prompt where needed.

For phone calls, before going live, make sure to run some real calls to ensure function calling is accurate – like transfers as that can only be tested through real phone calls.

**Tip:** Aim for 95% accuracy. AI Agents are not humans, but they are also not pure software. Allow for some acceptable error rate, otherwise you’ll never launch and miss out on the massive benefits of AI. The technologies involved in AI Agents are improving at an incredible rate on all dimensions e.g., (transcription accuracy, LLM latency, pronunciation) so you do not need to account for every edge case in your agent, and if you aim for 95%, you’ll strike the right balance between quality and going live.

### Step 3: Deploy Your Agent

Once you're confident in performance, it’s time to go live. Consider the following steps:

1. Add the Agent to a Team
2. Assign a group of dispositions to your agent team (and toggle them on for AI)
3. Create a dedicated queue and assign the team you created
4. Set up a routing rule to send the right tasks to your Agent
5. Flip your agent to ‘Available’

Now your Agent is ready to start taking calls or handling SMS workflows at scale.

**Tip:**  We recommend a dedicated set of limited dispositions that are MECE (mutually exclusive and collectively exhaustive). Start with no more than 5 dispositions (we can always get more information out of the call using custom AI analysis and use that in journeys as well). Regal already uses system dispositions for transfers, callbacks and voicemails. If you’re having trouble getting your AI agent to select the right disposition, the Regal data team can help you refine your disposition descriptions. However, we’ll need about 100 answered calls to refine your descriptions.

### 

### Step 4: Monitoring & Reporting

Track your AI Agent just like a human rep:

- Agents Page: You can see how many tasks your agent is doing
- Conversation Intelligence: Review transcripts and listen to recordings to ensure quality
- Reporting: Build a custom report to monitor your AI Agent – you can track KPIs like Speed to Lead, Transfer Rate, Schedule Callback Rate, Call Duration, Sentiment, and Custom AI Analysis/Metrics

Use these insights to improve your Agent's prompt over time.

**Need help choosing a use case or reviewing your prompt?** Our Regal AI Experts are ready to help.