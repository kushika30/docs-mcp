---
id: 36066928524443
title: "How to Troubleshoot Routing Rules"
html_url: "https://support.regal.ai/hc/en-us/articles/36066928524443-How-to-Troubleshoot-Routing-Rules"
updated_at: "2025-05-22T19:54:22Z"
---

# How to Troubleshoot Routing Rules

## Using the Routing Info Section on the Task Slideout

The Routing Info section on the Task Slideout displays the relevant information about how a task was routed to an agent, such as which Routing Rule was applied, which queue it was routed to, etc. This section helps you answer the question: "Why was this task routed to this agent?". It is meant to give visibility into how task routing works and help you to easily troubleshoot Routing Rules.

![](https://support.regal.ai/hc/article_attachments/36067154515739)

### How does it work?

The Routing Info section automatically populates on the Task Slideout when a task is created. If a task has been reserved multiple times, the information of the most recently matched reservation is displayed. Once a task is assigned, the Routing Info fields are locked to the information for that assignment.

The Routing Info section includes the following information:

1. **Routing Rule Workflow**: The workflow associated with the task (ie. Outbound Call, Incoming Call, Inbound SMS, Outbound SMS, etc.)
   - Includes a link to the page with the relevant routing rule opened
   - For progressive/predictive tasks: Always "Progressive/Predictive"
2. **Applied Routing Rule**: The name of the Routing Rule applied to the task
   - For progressive/predictive tasks: Almost always "None" unless routed to "Quiet Hours"
3. **Task Condition**: The condition that the task matched to be routed the way it was
   - If no task condition is set, the expression will display as "1==1" (always true)
   - For progressive/predictive tasks: This is the associated campaign friendly ID
4. **Target Queue**: Which queue the task was routed to
5. **Qualifying Agents**: Which agents in the queue qualify for the task (either "All Agents", "Specific Agent in Queue", or "Advanced Agent Expression")
   - For progressive/predictive tasks: Always "All Agents"
6. **Agent Eligibility Condition**: The condition that determined which agents are eligible for the task
   - For progressive/predictive tasks: This is Not Applicable
7. **Task Priority**: The priority assigned to this task
   - For tasks with priority assigned in Routing Rules, that priority is displayed
   - If no priority is assigned in Routing Rules but the campaign has a priority set, the campaign priority is displayed
   - For progressive/predictive tasks: Always campaign priority

#### Why is Routing Info different for Progressive and Predictive Tasks?

Progressive and Predictive tasks are routed according to only the information configured in the Campaign, without going through Routing Rules. These tasks route directly any agent in the Target Queue configured in the Campaign, and the Task Priority is equal to the Campaign Priority. As a result, certain fields that pertain to Routing Rules do not apply in the same way for Progressive and Predictive tasks, as noted above.

### Examples

#### 1. Preview Dial Outbound Call

See below the Routing Info section on the Task Slideout for a sample Outbound Call task placed via a Preview dial Campaign, which was routing according to the Outbound Sales rule configured for Outbound Calls in Routing Rules.

![](https://support.regal.ai/hc/article_attachments/36066958960667)

![](https://support.regal.ai/hc/article_attachments/36066928519963)

#### 2. Progressive Dial Outbound Call

See below the Routing Info section on the Task Slideout for a sample Outbound Call task placed via a Progressive dial Campaign, which was routed directly to the "Everyone" queue as configured in the Campaign.

![](https://support.regal.ai/hc/article_attachments/36066928521243)

![](https://support.regal.ai/hc/article_attachments/36066928521883)

## Referencing the "Last Updated" Timestamp

On the Task Routing page, you can view the the timestamp for when a routing rule for each category was "Last Updated". With this, you can easily check whether a routing rule was recently changed and may be related to the issue you're troubleshooting.

![](https://support.regal.ai/hc/article_attachments/37274366999835)