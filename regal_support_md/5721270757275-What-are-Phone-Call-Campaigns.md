---
id: 5721270757275
title: "What are Phone Call Campaigns?"
html_url: "https://support.regal.ai/hc/en-us/articles/5721270757275-What-are-Phone-Call-Campaigns"
updated_at: "2025-10-21T17:29:46Z"
---

# What are Phone Call Campaigns?

**Phone Call Campaigns** create **Outbound Call** tasks targeted at specific moments of the customer journey.

To create a Phone Call campaign, click New Campaign from the Campaigns page. Title your campaign, give it a description, and select the message type as Phone Call.

### 

> ### 🚧 Transactional Campaigns
>
> Tasks will only be created for contacts if they're subscribed to the voice channel, in the case of Call Campaigns. If your campaign is transactional in nature - such as an account update - check the "Send to contacts even if they are not subscribed" box to ensure all contacts receive the call. For calls that are for Marketing purposes, do not check this box.

### Configure Campaign

#### Campaign Information for Agents

Give the campaign a nickname and describe the goal of the call for agents. You can also optionally add information about an offer and offer code, as well as a link to a call script. All of this information will be displayed to agents in the Campaign Information card of the Agent Desktop - so that they know what the call is about.

#### **Dial Mode**

Here you can choose the dial mode - there are currently 4 dial modes supported.

1. Preview Dial allows agents to preview information about the campaign and the contact before accepting the call. Upon accepting the call, the system will start to dial.
2. Power Dial automatically starts dialing as soon as an agent becomes available. It is typically twice as efficient as Click to Dial.
3. [Progressive Dial](https://support.regal.ai/hc/en-us/articles/22549353073179-How-to-Create-a-Progressive-Dialer-Campaign) can place multiple calls on behalf of each available agent and uses an answering machine detection algorithm to categorize calls as answered by a human or a machine. Machine calls are auto-wrapped by the system while human calls are automatically connected to agents.
4. [Predictive Dial](https://support.regal.ai/hc/en-us/articles/34617814517147-How-to-Set-Up-a-Predictive-Dialer-Campaign) maximizes the number of connected calls and minimizes idle time for agents by dynamically adjusting the calls/agent ratio based on real-time factors like abandon rate. Predictive dialers enable your business to complete more tasks faster without requiring as much manual oversight as progressive dialer campaigns.

> 📘 Which Dialer Should I Choose?
>
> See our [blog post](https://www.regal.io/blog/power-dialer-vs-progressive-dialer-vs-predictive-dialer-which-auto-dialer-is-right-for-my-team) to learn about which dialer is the best fit for your campaign.

#### **Campaign Priority**

Set global priority for all call tasks that originate from a campaign. Higher numbers indicate higher priority of task handling by available agents. You want to set a higher priority for campaigns that are more important or require more timely handling by agents.

![Screen Shot 2024-12-02 at 4.06.42 PM.png](https://support.regal.ai/hc/article_attachments/31467529058843)

For example, if there are 10 campaign 1s in a queue and 5 campaign 2s in a queue, and campaign 1 has a priority of 500, while campaign 2 has a priority of 501. All 5 campaign 2s will get serve to agents before any campaign 1s because campaign 2 has the higher priority.

> 📘 Max Campaign Priority: There is a max campaign priority of 2,000,000,000.

**Dynamic Priority Based on Call Attempt**

For outreach with multiple call attempts, you can enable [dynamic priority](https://support.regal.ai/hc/en-us/articles/42340708645915-How-to-Do-Multi-Attempt-Calling-While-Prioritizing-Fresh-Leads) to automatically decrease task priority as the number of call attempts increases within a single campaign. This ensures that earlier call attempts (e.g., call 1s) will be prioritized higher than later ones (e.g., call 10s).

![](https://support.regal.ai/hc/article_attachments/42072769294107)

When enabled, task priority automatically decreases by 1 for each subsequent campaign call attempt: Task Priority = Starting Priority - (Call Attempt Number - 1)

For example, If you set Campaign Priority at 1000:

- Attempt #1 = Priority 1000
- Attempt #2 = Priority 999
- Attempt #3 = Priority 998
- Attempt #10 = Priority 991
- Note: The minimum priority is 1, so tasks never go below priority 1 regardless of attempt number.

**For more information on using Dynamic Campaign Priority in your outbound calling, see ["How to Do Multi-Attempt Calling While Prioritizing Fresh Leads"](https://support.regal.ai/hc/en-us/articles/42340708645915-How-to-Do-Multi-Attempt-Calling-While-Prioritizing-Fresh-Leads)**

Once you set campaign priority, you can see the list of campaigns with their priority on the campaigns page. These will determine the priority of a task when it's first created.

![](https://support.regal.ai/hc/article_attachments/29792770900763)

**If necessary, you can further adjust the priority of a task in Routing Rules after it's created, which will override campaign level configuration.** For example, let's say campaign 1 has a priority of 500, but you want to increase it's priority if the customer is a VIP customer. You can create a [custom task attribute](https://support.regal.ai/hc/en-us/articles/26265367623835-How-to-Add-Task-Attributes-to-Tasks) that represents a contact's VIP status, then set up a routing rule which sets the priority to e.g., 1,000 if the campaign friendly id = 1 and VIPstatus = true.

**Note**: it's best practice to maintain your campaign priority setting on the campaigns page, and use Routing Rules to adjust for particular subset of calls within a campaign. This will allow for better observability and simplified routing rules.

> 📘 Campaign Priority for Non-Call Campaigns
>
> Configuring campaign priority on the campaign detail page is currently only available for call campaigns. All other campaigns - e.g., Agent SMS tasks - and other types of tasks e.g., Scheduled Callbacks, etc. must be configured in routing rules only. [See more](https://support.regal.io/hc/en-us/articles/12181758397723-How-to-Configure-Task-Routing-Rules) on task routing guidance.

#### **From Number**

Next you can decide what phone number you want the phone call to come from. You can select "Dynamic" if you want the from number to depend on the sub-brand of the contact. This is useful for local presence, companies with multiple brands or who want to use different phone numbers at different lifecycle stages. Reach out to [support@regal.ai](mailto:support@regal.ai) for help setting up local presence or another form of dynamic from number.

#### **Voicemail Instructions**

Decide how you want agents to handle voicemails: No voicemail, Personalized voicemail and Pre-recorded voicemail. The first two options just instruct agents to not leave a voicemail or leave a personalized voicemail. The 3rd option - Pre-recorded voicemail - enables the agent to click the voicemail drop button on the Agent Desktop, which will leave a pre-recorded voicemail message and automatically disposition and close the task. See more about Pre-recorded voicemail drop [here.](https://support.regal.ai/hc/en-us/articles/11627151723931)

#### **Conversion Event**

If your Phone call campaign is driving toward a certain action you want the customer to take, add the name of that Conversion event here. It ensures that anyone who already completed the desired action, will be removed from the call queue. In the future, this field may also be used for reporting purposes.

Once your campaign is ready to be triggered, you can save it as Ready (otherwise you can save it as Draft).

> 📘 Preview Your Campaign
>
> You're able to preview your campaign after you've saved your Campaign. To do so, enter the phone number you'd like to receive the test call and click **Send Test**. You'll receive a call that will play a test recording. And you'll be able to see how the Branded Caller ID appears on your phone.
>
> **Note: Branded Caller ID must be set up ahead of time by working with your Customer Success rep. Email support@regalvoice.com to set up Branded Caller ID.**

![Screen_Shot_2022-05-24_at_1.48.40_PM.png](https://support.regal.ai/hc/article_attachments/6158857790107)