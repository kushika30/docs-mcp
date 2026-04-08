---
id: 22003571943835
title: "How to Write Task Routing Rule Expressions"
html_url: "https://support.regal.ai/hc/en-us/articles/22003571943835-How-to-Write-Task-Routing-Rule-Expressions"
updated_at: "2025-08-12T19:42:57Z"
---

# How to Write Task Routing Rule Expressions

Routing Rules use a SQL-like expression syntax for matching tasks and agents. This article will detail many examples and use cases but it is not exhaustive.

Expressions are used in three primary places to manage the assignment of Tasks to Agents:

1. Task expressions in Routing Rule conditions to find **matching tasks**
   - Evaluates against a each task that enters a Routing Ruleset
2. Agent expressions in a Routing Step to find **matching agents**
   - Evaluates against a single Task and all Agents in the routing step's Queue
   - Agents who satisfy the expression are eligible to get the Task

Within agent expressions, all attributes must be prefixed by task. or worker. to clarify whether the expression refers to a task or agent attribute

# Expression Structure

Expressions are made up of simple comparisons of constants and/or JSON keys, grouped together by parenthesis and logical operators.

## Constants

There are 3 types of constants supported:

- Strings, represented as single or double quoted blocks of text. "string" or 'string'.
- Numbers, represented as integers or floating point numbers. 1, 1.0, 1.00, 3.141529
- Booleans, represented as unquoted true  or false
- Null values, represented as unquoted null

Constants can be the left or right values of a comparison operator.

## Comparison Operators

Comparison operators compare two constants and return true or false. If true, the condition is met. If false, the condition is not met.

Valid operators for scalar data types (i.e., not arrays) include:

| **Operator** | **Expression** | **Example** |
| --- | --- | --- |
| Equals | == | task.taskTitle == "Scheduled Callback" |
| Does not equal | != | task.contactPhone != '+19545552399 |
| Greater than | > | task.campaignFriendlyID > 3 |
| Greater than or equal to | >= | task.campaignFriendlyID >= 3 |
| Less than | < | task.campaignFriendlyID < 12 |
| Less than or equal to | <= | task.campaignFriendlyID <= 12 |
| Contains | CONTAINS | worker.email CONTAINS "@regal.ai" |

Array operators allow you to match items in a list/array. For example worker.routing.skills is an array that contains a list of the agent's skills.

| **Operator** | **Expression** | **Example** |
| --- | --- | --- |
| Has | HAS | worker.routing.skills HAS "Outbound Call" |
| In | IN | "Outbound Call" IN worker.routing.skills |
| Not In | NOT IN | "Sales Team" NOT IN worker.teams |

Using scalar operators on Arrays results in false. Using array operators on two scalar values also returns false.

## Logic Operators

Valid logical Operators include AND and OR. Parenthesis can be used to group sub-expressions.

# Expression Structure

## Task Attributes

- title - this is the type of task. Options include:
  - "Incoming Call"
  - "Inbound SMS"
  - "Outbound Call"
  - "ASAP Callback"
  - "Scheduled Callback"
  - "Reminder Task"
  - "Transfer Task"
  - "Custom Task"
  - "Manual Outbound Email"
- status - this is automatically added to a task and set to a value of "in\_quiet\_hours" during the local quiet hours of a contact; it's removed when it's no longer during quiet hours
- contactPhone- this is the phone number of the contact.
- email - this is the email of the contact.
- targetAgentEmail - this is the email of the agent you assigned the contact/lead to. Not every task has a target agent.
- targetAgentFullname - this is the full name of the agent you assigned the contact/lead to.
- targetWorker - the identifier of the scheduling agent (only used by Regal for Scheduled Callbacks and Reminders).
- journeyName- this is the name of the journey that created the task.
- journeyFriendlyId - this is the friendly ID of the journey that created the task.

  - Note: journeyFriendlyId is an INT value and should not include quotes around the number.
- campaignInfo.friendly\_id - This is the friendly ID of the campaign the task belongs to.
- campaignInfo.campaign\_name - this is taken from the campaign nickname, not the actual name at the top of a Campaign.
- taskType - this is the dialing method

  - "Outbound Manual Dial" is used for Preview Dial
  - "Outbound Auto Answer" is used for Power Dial
- regalVoiceFriendlyPhoneName - This is the internal name you've given the phone line. You can find these names at Settings > Phone Numbers

Any contact attribute can become a task attribute but this is not yet self-serve. For help adding a custom property for use in task routing please [submit a ticket](https://support.regal.io/hc/en-us/requests/new) or email support@regal.io for support in setting this up.

### Where to Find Task Attributes

You can view task attributes from Tasks page > Select Task > Task Slide Out.

![Screenshot 2024-01-12 at 2.11.23 PM.png](https://support.regal.ai/hc/article_attachments/22004793827611)

## Common Task Attributes

- Matching on task title:
  - title == "ASAP Callback"

![Screenshot 2024-01-12 at 2.13.33 PM.png](https://support.regal.ai/hc/article_attachments/22004905390491)

- Matching on a campaign:

  - campaignInfo.friendly\_id == "10"
  - campaignInfo.campaign\_name CONTAINS "Retention"
- Matching on the target agent:

  - targetAgentEmail != null

    - this means that there is a target\_agent\_email on the task
  - targetAgentEmail == "support@regal.io"
- Matching on Regal phone line or friendly name:

  - regalVoicePhone IN ['+13305551234', '+14525554356']
  - regalVoicePhoneFriendlyName IN ['Houston Line', 'Dallas Line']
- Matching on the agent who scheduled a Scheduled Callback:

  - targetWorker == "support@regal.io" AND regalVoicePhone == "13305551234"

    - targetWorker is only used for scheduled callbacks and reminders.
- Matching on custom contact attributes that you've added, for example:

  - contact\_status == "App Submitted"

    - Reminder: Custom properties are not available for use in task routing by default. To add a customer property as a task attribute, map the property in task routing settings following [these](https://support.regal.ai/hc/en-us/articles/26265367623835-How-to-Add-Task-Attributes-to-Tasks) instructions.
- Matching tasks in quiet hours:

  - status == "in\_quiet\_hours"

    - By default Regal adds a step to route these tasks to the "Quiet Hours" queue so that no agents are assigned, but you can choose to change this behavior
- Matching on Day of Week or Time of Day:

  - The supported time of day expressions are:

    - taskrouter.currentTime - This attribute contains current time as an integer in HHMM format with the time represented in 24hr clock in UTC. Use the following expression to check if the current time is between 8 AM UTC to 6:30 PM UTC, taskrouter.currentTime > 0800 AND taskrouter.currentTime < 1830
    - taskrouter.currentHour - This attribute contains current hour as string in HH formt with hour represented in 24hr clock in UTC. Use the following expression to check if the current hour is between 8 AM UTC to 6 PM UTC, taskrouter.currentHour > 8 AND taskrouter.currentHour < 18
    - taskrouter.currentMin - This attribute contains current minute with time represented in UTC format. Example: taskrouter.currentMin > 10 AND taskrouter.currentMin < 50
    - taskrouter.dayOfWeek - This attribute contains the day of the week as string in time represented in UTC format. Accepted dayOfWeek values are: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun". For example, taskrouter.dayOfWeek = "Mon"

# Agent Expressions

## Agent Attributes

All tasks contain with a standard set of task attributes to reference, including:

- routing.skills - an array/list of all the skills you've added to an agent
- email - the agent's email
- full\_name - the agent's full name
- contact\_uri - the unique identifier used by Regal for an agent (Regal uses this to match to the scheduling agent for Scheduled Callbacks and Reminders)
- roles - admin or agent
- teams - an array/list of all the teams you've added an agent to

In addition to an agent's attributes, you can also refer to the an agent's count of assigned tasks and activity status.

- assigned\_tasks
- worker.activity\_name

## Common Agent Expressions

By default a task can be routed to any agent within the Queue selected in the routing step. But if you want to further narrow which agents within the Queue can receive the task, select "Specific Agents in Queue" and provide an **Agent Expression**. Only agents within the Queue who also cause the Agent Expression to evaluate to `true` will be considered for the task.

- Matching on an agent's skills
  - worker.routing.skills HAS "Spanish"
  - worker.routing.skillsHAS "Inbound Call" AND worker.routing.skills HAS "Support"
  - worker.routing.skills HAS task.targetSkill - this is an example where a custom contact attribute target\_skill was propagated to tasks so each task says which skill the agent needs to route it to

![Screenshot 2024-01-12 at 4.48.07 PM.png](https://support.regal.ai/hc/article_attachments/22011880734235)

#### Be Careful!

Make sure that agents in the queue match the criteria you're setting in the agent expression. For example, if you write worker.routing.skills HAS "Spanish" and none of the agents with that skill are in the queue that you're sending the task to, the task will never match on an agent.

- Matching to a target agent defined on the task
  - worker.email == task.targetAgentEmail
- Matching to a specific team
  - worker.teams HAS 'Customer Success' OR worker.teams HAS 'Support'
- Matching to any team with the exception of a specific team
  - 'Customer Success' NOT IN worker.teams
- Matching a Scheduled Callback to the agent who scheduled it
  - worker.client\_uri == task.targetWorker  
    - client\_uri is the unique identifier for an agent
    - targetWorker is only added to Scheduled Callbacks and Reminders by Regal and refers to the unique id of the agent who scheduled it
- Matching based on agent availability
  - worker.assigned\_tasks < 2
  - worker.activity\_name == 'Available - Priority' - this is an example where there are multiple available activity statuses

Reminder - Within agent expressions, all attributes must be prefixed by task. or worker. to clarify whether the expression refers to a task or agent attribute