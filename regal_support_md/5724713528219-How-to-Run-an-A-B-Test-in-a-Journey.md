---
id: 5724713528219
title: "How to Run an A/B Test in a Journey"
html_url: "https://support.regal.ai/hc/en-us/articles/5724713528219-How-to-Run-an-A-B-Test-in-a-Journey"
updated_at: "2022-11-29T15:56:19Z"
---

# How to Run an A/B Test in a Journey

### Use the A/B Test node to run an A/B Test in Journeys.

Each A/B Test node allows up to 5 variants, but you can always string multiple A/B Test nodes together if you need more.

A/B testing is a very powerful tool. Some ideas for what you can test:

- Hold outs
- SMS campaign copy
- Timing of calls or messages
- Call scripts
- Offers

![ab.png](https://support.regal.ai/hc/article_attachments/5724724023579/ab.png)

## Tracking

**Experiment Events**

When a contact passes through an A/B test, Regal fires a **contact.experiment.assigned** event that includes the name of the event and the variant the contact received so that you can track the performance of your A/B test outside of Regal as well. The payload for that event is described here: <https://developer.regal.io/docs/reporting-webhooks#contactexperimentassigned>

> ### 📘 Note - Traffic Splits
>
> You can also use the A/B test node to split traffic without running an actual experiment. To avoid sending the contact.experiment.assigned event for this use case, check the checkbox "Do Not Trigger Experiment Assigned Event." This will prevent traffic splits from displaying as experiments in the Experiments Dashboard.

**Experiments Dashboard**

Additionally, there is an Experiments Dashboard in the Reporting tab in Regal that makes it easy to see how your experiment are performing.

![report.png](https://support.regal.ai/hc/article_attachments/8703190742171/report.png)