---
id: 12181758397723
title: "How to Configure Task Routing Rules"
html_url: "https://support.regal.ai/hc/en-us/articles/12181758397723-How-to-Configure-Task-Routing-Rules"
updated_at: "2026-02-19T04:01:21Z"
---

# How to Configure Task Routing Rules

# Overview

**Routing Rules** allow you to determine the logic for which tasks should be assigned to which agents and in what priority order.

Routing Rules are organized by: Incoming Calls, Inbound SMS, and Outbound Calls (including those triggered by Journeys/Campaigns, Scheduled Callbacks and ASAP Callbacks).

For example, when an Outbound Call task is created, it will be sent to the Outbound Call routing rules and follow the steps you set up.

![](https://support.regal.ai/hc/article_attachments/37276611656603)

Clicking into the Routing Rules for Outbound Calls looks like this:

#### Example Routing Rules for Outbound Call

![_WUYy_hqiMroKipoof-zTonP.png](https://support.regal.ai/hc/article_attachments/12210149323035)

Routing Rules are evaluated in order from top to bottom. Rules can be dragged and dropped to rearrange them. Rules are also able to be renamed.

**Configuring Routing Rules & Settings**

**Settings**

- **Reservation Timeout** is the amount of time a task will be reserved for an agent after a match is found. After the timeout expires, the reservation will be revoked from the agent and the task will attempt to find a new matching agent. The task will continue looking for a match at its current Routing Rule; it does not start from the top of the workflow.
- **Default Queue** is the queue that a task will be assigned to if a matching agent isn't found through any of the Routing Rules. If no default queue is set for a routing rule set, the task will be created but will not be assigned unless it's updated and goes through the routing rule set again.

**Rules**

Clicking into the ASAP Callbacks rule looks like this:

#### Example Routing Rule

![4Rjw-tZLSDOARJFVVu2-y0vI.png](https://support.regal.ai/hc/article_attachments/12210514649371)

Expressions referenced in Routing Rules are written using a basic query language syntax.

- Strings can be referenced with either single or double quotes ("Regal" and 'Regal' are both valid).
- Numbers can be referenced as integers or floats (1, 1.0, 1.05 are all valid).
- Booleans (true and false) are able to be referenced in expressions.

Values can be compared using basic comparators.

|  |  |  |
| --- | --- | --- |
| **Comparator** | **Expression** | **Example Syntax** |
| Equals | == | task.taskTitle == "Scheduled Callback" |
| Does not equal | != | task.campaignID != 4 |
| Has | HAS | worker.routing.skills HAS "Outbound Call" |
| In | IN | "Outbound Call" IN worker.routing.skills |
| Not In | NOT IN | "Trainee" NOT IN worker.routing.skills |

Comparators are able to be combined using **NOT, AND,** and **OR** statements, as well as parentheses. Parentheses are evaluated first, followed by **NOT**, **AND**, and **OR**, in that order.

Each Routing Rule is comprised of a **Task Condition** (criteria that determines which tasks match the rule and should be evaluated by it) and **Routing Steps** (which determine which agents to serve that matching task to).

### Task Conditions

If a task causes a rule's Task Condition to evaluate to True, the task will be assigned to an agent using that rule's routing steps. Routing rules are evaluated from top to bottom, so it's the **first Task Condition that evaluates to True** that is the one that will be used for that Task.

The task condition checks against the attributes of a task. For example all ASAP Callback tasks have a task attribute of "title": "ASAP Callback", so this condition will evaluate to True for ASAP Callback tasks, but FALSE for all other kinds of tasks e.g., Scheduled Callbacks (because they have "title": "Scheduled Callback").

#### Task Condition matching ASAP Callback tasks

![v7fBfdRuCm1RCAq0_sJFZ8ID.png](https://support.regal.ai/hc/article_attachments/12210853062811)

### Example Task Conditions

|  |  |
| --- | --- |
| **Task Condition Syntax** | **Explanation** |
| title == "ASAP Callback" | Identifies all ASAP Callback tasks. |
| campaignInfo.friendly\_id == '99' | Identifies tasks generated from Campaign ID 99. |
| regalVoicePhone IN ['+13305551234'] | Identifies all tasks associated with the Regal Phone number +13305551234. |

There are a certain common set of attributes that are present on tasks such as the title of the task, information about the campaign or journey the task was triggered by, the regal phone number, the target agent, and additionally we enable you to push contact attributes to tasks as well.

For now, the best way to reference the available task attributes that can be used in Task Conditions can be seen on the Task Detail Slideout of any given task when clicked from the Agents or Tasks pages, but we are working on a better interface to see the list of available Task Attributes. And you can always contact Regal support.

### Routing Steps

After using the Task Condition to find matching tasks, the task is assigned to an agent using the rule's **Routing Steps**.

A **Queue** must be selected first to route the task to. A queue is a "parking lot" for tasks (and agents are assigned to queues through queue expressions based on their skills, teams or other means you determine. See article for [how to manage and create task queues](https://support.regal.io/hc/en-us/articles/5888861044891-How-To-View-Manage-and-Create-Task-Queues).)

After selecting a queue, select the Qualifying Agents. There are three options here:

- **All Agents**: When selected, this option is used to route the task to any agent in the selected queue.
- **Specific Agent in Queue**: When selected, this option is used to route the task to a specific agent based on a task attribute. For example, you can route an Inbound Email task to the contact owner by mapping the owner contact attribute to the task attribute targetAgentEmail. Then in the Agent Attribute field, select targetAgentEmail.
- **Advanced Agent Expression:** When selected, this option is used to route the task according to custom conditions. Regal will cycle through every agent in the selected queue until a match is found for the agent expression.

When routing a task to a specific agent or using an agent expression, it's best practice to create a fallback rule underneath the customized rule. This ensures that if no agents match the configured agent attribute or expression, the task is routed to the appropriate queue.

In the below example, the task is being sent to the "Callbacks" queue and served to the targetWorker agent associated with the contact.

#### Example Routing Step

![Screen Shot 2024-08-14 at 5.30.13 PM.png](https://support.regal.ai/hc/article_attachments/28281472687131)

### Incoming & Transfer Call Notification

For the Incoming Call and Transfer rules only, you'll see an additional checkbox above the Skip Step Timeout setting. When enabled, this feature allows agents to receive reservations for incoming or transfer calls matching that rule even while they are handling an active call task. They can then decide to stay on their current call or drop it in favor of a higher priority incoming or transfer call. To view the agent experience, watch the [demo](https://www.loom.com/share/bba884f7ff604e158872c24e26055e66).

Note: This feature should NOT be used alongside Auto-accept for incoming calls, as agents will be automatically kicked off their existing calls as soon as an incoming call task is reserved to them.  ![incoming_transfer_call_notification.png](https://support.regal.ai/hc/article_attachments/27918919494811)

### Step Timeout

**Step Timeout** is the amount of time (in seconds) a task will wait for an agent in that Routing Step before moving to the next Routing Step or Routing Rule.

If no Step Timeout is provided, the task will remain in the Routing Step until the Task Timeout.

If the Step Timeout of a Routing Step expires and there is no next Routing Step, the task will be canceled with a reason of `workflow_timeout`. **It will not move to the next Routing Rule.**

### Skip Step Timeout

If an agent isn't immediately available to be assigned a task, the Step Timeout can be skipped so that the task proceeds immediately to the next Routing Step or Routing Rule.

A **Timeout Expression** must be provided if the Step Timeout should be skipped. If the expression evaluates to True the Step Timeout will be skipped.

A simple way of ensuring that the Step Timeout will always be skipped if appropriate is setting the Timeout Expression to 1 == 1.

### Priority

Tasks will be assigned to agents based on their **Priority** set through Routing Steps. Priority must be a positive integer. If no priority is set, the task will inherit priority from the previous Routing Step or Routing Rule. Higher priority tasks will be assigned to agents first.

![mceclip0.png](https://support.regal.ai/hc/article_attachments/12545096131355)

Tasks that enter a routing rule are locked into that particular rule configuration for the task's lifetime. Changes made to routing rules will only apply to newly created tasks.

Additionally, tasks evaluate against routing rules from top to bottom once when they are first created, and then only there after when a task attribute of the task is updated.

## Routing Rule Versions

![Screenshot 2026-02-18 at 10.50.42 PM.png](https://support.regal.ai/hc/article_attachments/46819017852315)

Routing rules now include **version history**. Each time you save changes, a new version is created automatically.

Use the Version dropdown at the top of the page to:

- View previous versions of your routing rules
- See when each version was saved
- Restore an earlier version if needed

Restoring a version lets you quickly roll back to a previously working configuration without manually rebuilding your rules.

## How to Verify that Routing Rules are Working (and Troubleshoot if Not)

Once you've configured a routing rule, here's how you can check that it is working as expected and troubleshoot if you experience an issue (for more details, see [How to Troubleshoot Routing Rules](https://support.regal.ai/hc/en-us/articles/36066928524443-How-to-Troubleshoot-Routing-Rules)):

**1. Use The Routing Info Section on the Task Slideout**

The Routing Info Section on the Task Slideout displays the relevant information about how a task was routed to an agent, such as which Routing Rule was applied, which queue it was routed to, etc. This automatically populates on the Task Slideout when a task is created.

If a task has been reserved multiple times, the information of the most recently matched reservation is displayed. Once a task is assigned, the Routing Info fields are locked to the information for that assignment.

![](https://support.regal.ai/hc/article_attachments/37276495400859)

**2. Reference the "Last Updated" Timestamp in Task Routing**

On the Task Routing page, you can view the the timestamp for when a routing rule for each category was "Last Updated". With this, you can easily check whether a routing rule was recently changed and may be related to the issue you're troubleshooting.

![](https://support.regal.ai/hc/article_attachments/37276472359707)