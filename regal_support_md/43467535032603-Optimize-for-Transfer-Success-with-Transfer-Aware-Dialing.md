---
id: 43467535032603
title: "Optimize for Transfer Success with Transfer-Aware Dialing"
html_url: "https://support.regal.ai/hc/en-us/articles/43467535032603-Optimize-for-Transfer-Success-with-Transfer-Aware-Dialing"
updated_at: "2025-12-01T22:09:40Z"
---

# Optimize for Transfer Success with Transfer-Aware Dialing

When running outbound campaigns with transfer use cases (e.g., AI or human agents are qualifying leads to be transferred to more specialized teams), it is not only important that agents are able to handle the initial calls, but also that the transfer agents are able to handle any subsequent transfer calls created.

If dialing is paced only on the initial target agents without factoring in transfer agents, you run the risk of long wait times for qualified leads or even abandoned transfer calls.

With **Transfer-Aware Dialing** - an enhanced version of Progressive Dialing - you can maintain high dialer throughput while minimizing overwhelm to your transfer agents. By intelligently pacing your outbound calls based on both target and transfer agent capacity, you can minimize abandoned transfers, improve customer experience, and maximize the ROI of your conversations.

## How Transfer-Aware Dialing Works

In determining the volume of calls to place for a campaign using Transfer-Aware Dialing, the system will ensure that there is sufficient capacity on *both* the Target Queue and Transfer Queue:

- **Target Queue Volume (the agents initially handling the dialed calls):** the product of the calls/agent ratio and the agents' call capacity.
- **Transfer Queue Volume (the agents handling the transfer calls created from this campaign):** the quotient of the transfer agents' call capacity divided by the inputted transfer rate.

Note: An agent is eligible for a call if they are available in the queue selected and have capacity for a call.

### Example

**Progressive Dialing (Target Queue Only):**

Say you're dialing with a Progressive Dial campaign staffed by AI Agents who are qualifying leads and transferring them to licensed human agents.

- Target Queue Volume:
  - 2 AI Agents are eligible at 30 calls capacity each
  - Calls/Agent ratio is 5
  - Target Queue Volume = 300

**-> The system will place up to 300 calls.**

**Transfer-Aware Progressive Dialing:**

When you configure the campaign to also reference a Transfer Queue (with the inputted Transfer Rate), the system will check Transfer Queue Capacity as well:

- Target Queue Volume:
  - 2 AI Agents are eligible at 30 calls capacity each
  - Calls/Agent ratio is 5
  - Target Queue Volume = 300
- Transfer Queue Volume:
  - 10 human agents are eligible
  - Transfer Rate is 8%
  - Transfer Queue Volume = 125

**-> The system will place up to 125 calls.**

## Setting Up Transfer-Aware Dialing

1) Create a [Progressive Dial phone campaign](https://support.regal.ai/hc/en-us/articles/22549353073179-How-to-Create-a-Progressive-Dialer-Campaign), selecting your Target Queue and Calls/Agent Ratio

2) Configure your Transfer Queue inputs

- Select your Transfer Queue: the queue of agents whose capacity you want dialing to reference.
  - Note: this input does not impact what agents/queues/external phone numbers your Target Queue will have access to transfer to.
- Select your Transfer Rate: the static input of the expected rate of transfers out of calls *dialed* for this campaign.
  - Use [Reporting](https://support.regal.ai/hc/en-us/articles/5725425028763-Reporting-Dashboards-Overview) to determine the general Transfer Rate expected for this campaign.

![](https://support.regal.ai/hc/article_attachments/43507387737115)

3) Save and Trigger your Campaign Calls via Journeys! ([Learn More](https://support.regal.ai/hc/en-us/articles/22549353073179-How-to-Create-a-Progressive-Dialer-Campaign))

## Monitoring

You can monitor your campaign's Transfer Abandon Rate *live* using the Campaign Dashboard. View overall Transfer Abandon Rate in the top metric, and track fluctuation over time with the time-series graph at the bottom of the page.

The **Transfer Abandon Rate** is the percentage of transfers created from that campaign to the selected Transfer Queue that were abandoned by the contact. Abandoned transfers are visible in the Tasks page as Canceled with Cancelation Reason as "abandoned\_call".

![image (6).png](https://support.regal.ai/hc/article_attachments/43914312775707)

### Tracking Long-Term Impact in Reporting:

Transfer Abandon Rate

![](https://support.regal.ai/hc/article_attachments/43507414555035)

- You can track transfer abandon rate by identifying the count of cancelled transfer tasks out of the count of transfer tasks created from your completed dialing tasks.
- Reporting on Transfer Abandon Rate:
  - Use the "Resulted from Transferred Task" field to get created transfers, cancelled transfers, etc.
  - In Reporting, you can calculate the Transfer Abandon Rate with a Custom Looker Calculation: ${resulted\_from\_transferred\_task.canceled\_tasks} / ${resulted\_from\_transferred\_task.total\_tasks}

Dialing Volume

- With Transfer Aware Dialing, you can expect that dialing volume could fluctuate throughout the day as agents in your Target or Transfer Queues take breaks, are busy with other call tasks, etc.
- Reporting on Dialing Volume: You can track Dialing Volume throughout the day by splitting Completed Tasks by hour.