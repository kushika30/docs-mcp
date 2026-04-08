---
id: 20527945181979
title: "Reviewing Conversation Insights with Conversation Intelligence"
html_url: "https://support.regal.ai/hc/en-us/articles/20527945181979-Reviewing-Conversation-Insights-with-Conversation-Intelligence"
updated_at: "2025-07-28T13:45:55Z"
---

# Reviewing Conversation Insights with Conversation Intelligence

Within the Conversation Intelligence navigation menu, you'll also find an "Insights" tab, which is a dedicated reporting dashboard that summarizes the data collected across your call conversations.

#### Conversation Intelligence License

Conversation Intelligence is provided under a separate per-seat license. Please [submit a ticket](https://support.regal.ai/hc/en-us/requests/new) to sign up for Conversation Intelligence.

![](https://support.regal.ai/hc/article_attachments/20528094123931)

### Call Stats and Sentiment

The dashboard includes various call statistics such as talk/listen/silence ratios and longest monologue durations across agents, as well as average sentiment scores for both contact & agent.

Sentiment scores are generated using the text of each call and score how positive or negative it sounds for both the agent and the customer. Each participant gets a score from 0 to 100 based on what was said and how it was said.

The scores are bucketed to make them easier to understand:

- 0 to 50: Negative sentiment (unhappy or frustrated)
- 51 to 70: Neutral or mixed sentiment
- 71 to 100: Positive sentiment (satisfied or happy)

The numeric scores are included in the call.transcript.available event. They provide a simple way to track how calls are going and identify trends in customer and agent sentiment.

### Conversion Rates

As long as your account is configured such that Regal knows your "conversion" events for different campaigns, then you can also see how conversion rates correlate with any of the other stats in the dashboard.

### Tracker Reports

The dashboard also shows useful statistics for the Trackers that were detected across your calls. Specifically, you can see the frequency with which each Tracker is detected, the average length of calls that have a specific Tracker, and the conversion rate for calls with each Tracker.

You'll also be able to see by agent what percentage of their calls have various Trackers.