---
id: 22549353073179
title: "How to Create a Progressive Dialer Campaign"
html_url: "https://support.regal.ai/hc/en-us/articles/22549353073179-How-to-Create-a-Progressive-Dialer-Campaign"
updated_at: "2025-06-10T16:22:14Z"
---

# How to Create a Progressive Dialer Campaign

## What is a progressive dialer?

A *progressive dialer* is designed to increase the efficiency of high-volume outbound outreach by maximizing the time agents spend on answered calls, and reducing time spent on unanswered calls. Calls are placed on behalf of available agents behind the scenes and categorized as answered/unanswered by a detection algorithm. If a call is classified as answered, it'll automatically get connected to an agent. If a call is classified as unanswered, the system will drop a voicemail and wrap the task, bypassing an agent altogether.

Regal's dialer supports *parallel dialing* and can place multiple calls at a time on behalf of each available agent.

Reach out to your CSM to get set up.

## Which dialer should I use for my campaign?

Consider these 3 factors when picking a dialer for your campaign:

1. **Campaign strategy:** Progressive dialers are built for high volume campaigns with low answer rates. They are subject to additional [FTC regulations](https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule) and require frequent oversight. To keep abandon rate within legal limits, it's recommended to staff progressive dialer campaigns with 10+ agents at a time. Preview and power dialers are thus better suited for low-medium volume campaigns with flexible staffing.
2. **Lead value & complexity:** Power and progressive dialers increase efficiency by connecting calls to agents automatically, eliminating the agent step of accepting a call. This approach is well suited for campaigns with low-value or simple leads that agents can speak to with no prep. For high-value leads that require more informed and personalized talk tracks, preview dial gives agents the time to review contact info and conversation history ahead of the call.
3. **Agent workflow:** While agents are staffed to handle progressive dialer calls, they may be served outbound calls back-to-back in a short timeframe, and are not simultaneously able to handle manual tasks, asynchronous tasks, or other types of calls (e.g. preview calls, inbound calls, callbacks). Preview and power dialers are a better fit for teams where agents are jumping between different types of work (e.g. sending an SMS, scheduling callbacks) all day.

### Can AI agents staff progressive dialer campaigns?

Absolutely. AI agents are a great fit for progressive dialer campaigns, which often involve simple scripts, low-intent leads, and short, uniform calls. These campaigns are designed to drive high call volumes—something AI agents handle especially well, since they can manage multiple calls at once. When deployed alongside human agents, **AI agents can also help eliminate abandoned calls** by picking up any calls that a human agent is unavailable to take.

### Can agents handle inbound calls while staffing a progressive dialer campaign?

Agents must have the 'Progressive Dialer Mode' availability status to be connected to progressive dialer calls. It is recommended that agents who staff a progressive dialer campaign only handle calls from that campaign, as it maximizes throughput, reduces agent context switching, and makes abandon rate more predictable and manageable. If you would like agents to handle other calls (e.g. Inbound Calls) during their shift, you can make them eligible to do so for all call types except auto-accepted calls (Auto-accepted Inbound Calls and Powerdial Calls).

## How do I leverage progressive dialer?

Follow the steps below to make the most of progressive dialer!

### ⚙️ Step 1: Configure your campaign

1. In the Campaigns page, click 'Create New Campaign'

![](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/nPU-ddTzHHjGIzHKo81LNV53.png)

2. Fill in a name and optionally, a description.

3. In the Channel field, select "Phone".

4. Select a FROM number.

5. Input campaign priority. If you have multiple progressive dialer campaigns, the priority will determine which calls are placed first. Higher numbers indicate higher priority. Priority must not exceed 1000.

6. In the Dialing Mode field, select "Progressive Dialer".

7. Select a target queue. You can either select from existing queues or create a new one by clicking the link underneath the dropdown. If creating a new queue, make sure to define the queue so that any agent in it are not eligible for other call types like preview and powerdial calls or auto-accepted incoming calls. It is best practice to keep agents staffing progressive dialer campaigns focused on just those campaigns.

![](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/MX_izP8HVTbLceJdq-be9umZ.png)

8. Input a calls/agent ratio. This is the number of calls that will be placed in parallel for every eligible human agent. On behalf of AI agents, the system places the product of the calls/agent ratio and the AI agent's call capacity. An agent is eligible for a progressive dialer campaign call if they are in the target queue for that campaign and if human, are not already handling a call task. The ratio must not exceed 15.

To keep abandon rate (% of answered calls that are not connected to an agent) low, it's best to start with a low ratio (e.g. 2) and slowly increase it after closely monitoring campaign metrics, rather than jumping to a high ratio (e.g. 4) from the get-go.

9. Specify the action to take between the contact's greeting and the agent connecting to the call if there is a delay. By default, the dialer will play silence. You can instead play a recording for the contact to minimize the perceived delay of getting connected to the agent and reduce the chance of hang-up. Greeting recordings can be uploaded via the [Recordings page](https://app.regal.io/settings/recordings) in Settings.

10. Input a campaign friendly name and goal.

11. Select instructions for abandoned calls, calls where the customer picks up and no agent is available to connect with them. You can choose to disconnect the call or drop a recording. Abandoned call recordings can be uploaded via the [Recordings page](https://app.regal.io/settings/recordings) in Settings. If you would like to give customers an option to unsubscribe from future calls, note in the recording that they can press 1 to do so.

12. Select voicemail instructions. Voicemails are automatically dropped on calls that the detection algorithm classifies as unanswered, and can also be manually dropped by agents on calls routed to them. You can select from existing voicemail recordings or upload a new one via the [Recordings page](https://app.regal.io/settings/recordings) in Settings.

13. Optionally include a conversion event. When this event is hit for a contact, the contact will be removed from the campaign.

14. Click on the buttons at the bottom of the page to save your campaign as draft or as ready.

![](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/lejuLHzmcvEtcQi1Bk7z0LSa.png)

> Progressive Dialer campaigns can always be edited or deleted directly from the Campaigns page.

### 🚀 Step 2: Trigger calls with a journey

In your journey, after setting up a trigger and optional conditional nodes or A/B experiments, add a call task node.

![](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/VHL-SJGcdisTHZur0A6JiJak.png)

Then select the progressive dialer campaign from the dropdown and save.

![](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/5eIxzpWT9Fk1EncRulS2hPt1.png)

### 📊 Step 3: Monitor the Results

**Live Data**

Monitor the performance and efficiency of your campaign in real time by viewing its live dashboard. After selecting your campaign in the Campaigns page, click on the Campaign Dashboard tab.

![Screenshot 2025-02-25 at 4.42.09 PM.png](https://support.regal.ai/hc/article_attachments/34377589479579)

Track essential KPIs such as calls completed, answer rate, abandon rate, and agent eligibility to assess campaign performance and identify potential discrepancies. Use these insights to investigate deviations from expected outcomes.

![Live_campaign_stats.png](https://support.regal.ai/hc/article_attachments/34377589484571)

For example, a rising abandon rate may correlate with a decrease in available agents. By analyzing staffing trends, you can determine potential causes, such as break times (e.g., lunch hours) or device issues preventing agents from handling calls.

**Historical Data**

Track historical trends in performance stats like abandon rate and answer rate in the Campaign Reporting Dashboard. For both abandon rate and answer rate, Regal relies on agent determination of whether a call was answered when possible, and the detection algorithm's determination when not possible.

![](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/5aYpVX48iiuJDfAHW5jqWx7B.png)

Note any undesirable or unexpected increases in abandon rate for a given campaign. Lowering the calls/agent ratio for the campaign is a common strategy for decreasing a campaign's abandon rate.

## System Dispositions

In the case that a call is not connected to an agent, the system will automatically wrap the call with a disposition so you can track and analyze the outcome. System dispositions are listed below.

| Disposition | Description |
| --- | --- |
| Pre-recorded Voicemail | The call was determined as unanswered by the detection algorithm and there is a campaign voicemail message configured. In this case, the system leaves that voicemail for the contact. |
| No Answer | The call was determined as unanswered by the detection algorithm and there is no campaign voicemail configured. In this case, the call is disconnected. |
| No Answer - No voicemail box | The call was determined as unanswered by the detection algorithm and there is a campaign voicemail message configured. The system can't leave this message because the contact has no voicemail box. |
| No Answer - Voicemail could not be dropped | The call was determined as unanswered by the detection algorithm and there is a campaign voicemail message configured. The system can't leave this message due to an error. |
| No Answer - Device is busy | The call failed to connect because the contact's device is busy. |
| Call Failed - Invalid phone number | The call failed because the contact's phone number is invalid. |
| Call Failed - Contact country not permitted | The call failed because your account is not configured to make calls to the contact's country. |
| Call Failed | The call failed due to an unknown reason. |
| Contact is not subscribed to Voice | The call could not be placed since the contact is not subscribed to Voice. |
| Abandoned | The call was determined as potentially answered by the detection algorithm but could not be connected to an agent. |
| No conversation - Customer hung up | The call was determined as potentially answered by the detection algorithm but was hung up by the contact before it could be connected to an agent. |