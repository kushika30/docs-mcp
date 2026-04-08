# Deploy SMS Agent

## Prerequisites

To send SMS through Regal's AI agents or automated SMS, you need to get A2P approval (which we'll take care of during your onboarding).

## AI SMS Tasks and Messages

AI SMS agents can respond to inbound SMS messages from customers by being assigned to Inbound SMS Tasks. Inbound messages create a new Inbound SMS task, unless one is already active for that customer.

**Context window:** When a SMS *task* is routed and assigned to the agent, they will automatically start a conversation with the contact by responding and exchanging messages. AI agents can retain conversation context of up to 100 messages and action invocations with the same contact. Therefore if the contact responds again *after* the task has been completed, the agent can still pick up the conversation where it was left off -- to the contact it will feel seamless.

**Task Summarization** SMS Tasks are periodically completed by AI agents when the conversation goes inactive (e.g., customer doesn't respond for a while) in order to free up more capacity for your AI agents to handle more tasks. See [SMS Agent Settings](/docs/sms-agent-settings) for how to configure the task autocomplete timer.

## Options for Deploying Inbound SMS Agents

1. **Route SMS tasks directly to agent using a dedicated Regal phone number**

- **When to use:**  When a phone number is fully dedicated to the AI SMS agent, when the contact is new, or for relatively independent use cases with little overlap with other conversations or context (e.g. Appointment Scheduling).
- **✅ Pros:** Easy setup with simple a routing rule
- **❌ Cons:** Difficult to add complex, intent-based routing logic

2. **Use Journeys to add filter logic and assign SMS task to agent.**

- **When to use:**  Ideal when you need to add more complex business logic to determine when to route an inbound SMS task to an AI agent. Journeys allow you to evaluate multiple conditions—like customer attributes, message content, or recent event activity—before handing off to the agent.
- **✅ Pros:** Flexible, can route based on intent/situation
- **❌ Cons:** More complex to set up

> ## 👍
>
> Start outbound conversations with an Outbound SMS Campaign
>
> By default AI SMS Agents are "inbound" in that they don't initiate conversations, they respond to customer messages. However they can be paired with triggered SMS campaigns in journeys to initiate conversations and execute follow ups or nudge unresponsive customers. For example, you can first trigger an outbound automated SMS campaign to your customers, and then route their responses to your SMS agent.

## Option 1: Directly Routing Tasks to SMS Agent

To deploy your SMS agent and start handling messages that come in from a specific Regal number:

### Step 1:Set up an Inbound SMS routing rule for that phone number / agent

**a. Add Routing Rule(s)**

Navigate to Settings > Task Routing > Incoming SMS. There you can click "Add Rule" or duplicate an existing rule and modify it.

In this example we're creating a Rule for routing calls to our Lead Qualification Agent.

![](https://files.readme.io/253156b07b7eae8e3079c3bcce5a1b46dc09f2f9370aaff36d771c18a0cd3c24-image.png)

**b. Configure your routing rule and Save.**

SMS routing rule is comprised of 3 components:

![](https://files.readme.io/5ee863ca636f7a78c5e08dc450b2f20ee876979a84a1da1a2658d01fc10e3b56-image.png)

1. **Task Expression** - this is the condition that will tell us what tasks (SMS) match this rule. For inbound SMS, the simplest expression is to match on the phone number the customer text, assuming there's different numbers for each AI agent use case (alternatively for example, you can split on information about the customer).

The syntax for doing this by Regal phone number is:

`regalVoicePhone == '+1XXXXXXXXXX'`

2. **Queue** - this is where your SMS will "park" until they are picked up by your agent(s) - we recommend the default AI Agents queue (but you can create other/more queues if you have more advanced use cases)
3. **Qualifying Agent** - in our example, we are selecting to give it to a single agent within the AI Agents queue so we select "Advanced Agent Expression" and then match on the agent's email. (But if you had multiple AI agents in a queue that need to split the SMS tasks (b/c you need a higher concurrency than 50 SMS tasks), you could instead select "All Agents".)

The syntax for doing this by agent email is:  
`worker.email == 'agentemailaddress'`

You can find the email address of your agent from the Agents page by clicking on your agent.

> ## 📘
>
> Routing Rules
>
> Routing rules are evaluated from top to bottom. The first rule that matches your task will route it. The syntax is particular you can refer to this [Routing Rule Syntax Guide](https://regalvoice.slab.com/posts/routing-rule-expressions-zoy4f0by?shr=zoy4f0by) for different use cases.

### Step 2: Turn your AI agent to Available!

Go to the Agents page, click on your agent, and change their status to available. (When an AI agent is created we default it to Offline.)

![](https://files.readme.io/c84e7838565e8c181f1eef43f6564ae84044cba464473fe09c36866fdc74f73e-image.png)

Your agent is now ready to handle inbound SMS. Start texting your agent!

## Option 2: Use Journeys to Add Filter Logic and Assign SMS Task to Agent

If the Regal phone number is not enough to identify which SMS should be routed to your AI agent:

### Step 1: Set up a Journey that listens for Inbound SMS

Navigate to Journeys > Create Journey and configure your entry trigger:

> ## 👍
>
> Tip: Name your Journeys clearly, e.g. Inbound SMS - Appointment Followup, and consider using Journey versioning to experiment with new routing logic safely.

**Trigger**: Use task.created RV event, with filter channel = SMS and direction = INBOUND to only trigger for IB SMS tasks.

![](https://files.readme.io/a1c8db00859a1e300f19feeb3ee18b2b7ccaaa06f51ff6be81ed078e4e4f16a7-image.png)

- If only triggering for responses to a particular campaign, you can further filter for by adding a contact attribute filter in trigger node: rvProperties.last\_sms\_campaign\_id

![](https://files.readme.io/f83374db263f8926f15c2fa05429d9ad802c5f4da6db90a0e51a416c4fc2428e-image.png)
  

**Filter**: Add additional relevant Filters using Conditional Node to decide which contacts should be routed to the AI agent. **This step is important to think through to avoid assigning unintended tasks to AI agent.** Some examples:

1. Contact attribute matches certain tags or custom field values
2. Contact is not owned by a specific team
3. Contact does not have an open conversation non-AI agents (see below screenshot)

![](https://files.readme.io/fdc663b00cccc07353077f850bbe09547643b1ddf42ea863fdc06e5ceee3df0a-image.png)

**Assign to Agent**: Use a Journey Webhook node to assign task to the AI Agent. Some information you will need:

![](https://files.readme.io/85ccaf70908e9b468eb250227e74db51681a85f633edd2cbffc2632b4776ca7d-image.png)

- Task update endpoint: <https://api-ingest.rv-apps.io/tasks/update>
- X-Api-Key: your workflow API key (contact support team)
- X-Brand: the brand slug
- JSON payload needed to assign task target agent:
  - The attribue we want to update on the task is `targetAgentEmail`, which will be used during routing rules in Step 2.
  - You can find the email address of your agent from the Agents page by clicking on your agent.
- ![](https://files.readme.io/f417790c3c104fd60a648c6870fd3bdcbfb68797fc21d45599eaf4db1ab2138b-image.png)

```
{
    "contactPhone": "{{contact.contactPhone}}",
    "update": {
        "attributes": {
            "targetAgentEmail": "[email protected]"
        }
    }
```

**Save as Live**: REMEMBER! When ready to go-live, publish Journey as Live to start the task assignment.

  

### Step 2: Configure Routing Rules to Assign SMS Tasks

**a. Add Routing Rule(s)**

Navigate to Settings > Task Routing > Incoming SMS. There you can click "Add Rule" or duplicate an existing rule and modify it.

In this example we're creating a Rule for routing calls to our Lead Qualification Agent.

![](https://files.readme.io/253156b07b7eae8e3079c3bcce5a1b46dc09f2f9370aaff36d771c18a0cd3c24-image.png)

**b. Configure your routing rule and Save.**

This option's routing is comprised of 3 components:

![](https://files.readme.io/0e7e4dbc618b0a3d0e1c3b38b967a92cf787856f0c92a431b2b89bbba1cecb29-image.png)

1. **Task Expression** - this is the condition that will tell us what tasks (SMS) match this rule. For inbound SMS, the simplest expression is to match on the phone number the customer text, assuming there's different numbers for each AI agent use case (alternatively for example, you can split on information about the customer).

The syntax for doing this by Regal phone number is:

`regalVoicePhone == '+1XXXXXXXXXX'`

2. **Queue** - this is where your SMS will "park" until they are picked up by your agent(s) - we recommend the default AI Agents queue (but you can create other/more queues if you have more advanced use cases)
3. **Qualifying Agent** - in our example, we are selecting to specifically give it to the assigned agent in the AI Agents queue. So we select "Specific Agent in Queue" with "targetAgentEmail" for Agent Attribute. The task will only be assigned the agent we previously "stamped" using the Journey webhook node in step 1.

### Step 3: Turn your AI agent to Available!

Go to the Agents page, click on your agent, and change their status to available. (When an AI agent is created we default it to Offline.)

![](https://files.readme.io/c84e7838565e8c181f1eef43f6564ae84044cba464473fe09c36866fdc74f73e-image.png)

Your agent is now ready to handle inbound SMS. Start texting your agent!

  

## Things to Look Out For

- **Additional Journey Creation:**Think through the actions your agent drive, and if any new Journeys need to be created. For example, if your agent's goal is to create call now requests with a human team, make sure to create the according Journey to create the immediate call task.
- **Consider Outreach Conflicts:** IMPORTANT: Think through the actions your agent drive, and if any existing workflows or outreach cadence journeys need to be adjusted. For example, if your new leads are still receiving multi-touch call campaign, however a customer IB messaged to schedule a callback via an SMS agent, *you should remove the contacts from the ongoing call campaign using the new scheduled callback event.* That way the contact can experience a seamless scheduling experience.
- **Double Routing Conflicts:** If both a routing rule and a Journey try to route the same task under different logic, the first one that matches will win. Be intentional about prioritization and order.
- **Task Looping:** If the task auto-complete timer is too short, you may inadvertently trigger multiple Journeys if the contact responds again after the task completes. If the SMS volume is not especially high, consider setting a reasonable task timeout (e.g., 10-15 minutes). These task dispositions is likely more meaningful as well.
- **Agent Capacity:** On the flip side, each agent worker can handle max 50 tasks concurrently. So if your SMS volume is especially high, you may want to set a lower task timeout time (e.g. 1 minute), to ensure your agent can close out quickly to intake new SMS tasks.
- **Agent Availability:** Ensure the AI agent is Available in the Agents page. If the agent is Offline, the task may remain unassigned or hit fallback logic.
- **Queue Congestion:** AI Agents support high concurrency, but if you assign tasks to a mixed human+AI queue, human agents may get overrun or queued behind AI tasks. Best practice is to use a dedicated queue for your SMS AI agents.
- **Testing Tips for SMS:**  First, ensure you have first tested agent prompt logic extensively using [Test Logic UI](/docs/test-logic-chat). After the agent works end to end in Test Logic experience, you can move onto real SMS testing by following the above. This allows you to get a feeling of real customer experience of the conversation. Lastly, make sure fully test all the settings and integrations set up on the agent using real data, including adherence around Task Autocomplete, Dispositions, Custom Events, Custom Actions etc.

Updated 10 months ago

---
