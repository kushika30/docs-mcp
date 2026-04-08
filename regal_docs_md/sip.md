# CCaaS / SIP Integration

In this guide, we will show you how to integrate Regal AI agents with other telephony or call tracking providers (e.g., NICE, Five9, Ringba, Invoca etc.), using their numbers in a way that's seamless for your customers.

Regal has native telephony (leveraging Twilio) so there is no need to have custom telephony. But this guide is for customers who want to continue using a separate telephony provider to initiate calls that are handled by Regal's AI agents.

> ## 📘
>
> **If you would like use your telephony platform, please send your CCaaS provider an email with these instructions**
>
> > **I would like to set up a SIP Trunk with Regal. Here are the instructions they sent me.**
> >
> > 1. Regal uses **Twilio** for **SIP**, and we will set up a unique url for your SIP calls. Please email [[email protected]](/cdn-cgi/l/email-protection#45363035352a37310537202224296b242c) if you have not yet received yours.
> > 2. Send Regal ([[email protected]](/cdn-cgi/l/email-protection#88fbfdf8f8e7fafcc8faedefe9e4a6e9e1)) your **SIP FQDN/IPs.**
> > 3. Allow access from **Twilio’s North America IPs listed [here](https://www.twilio.com/docs/sip-trunking/ip-addresses#north-america-virginia-gateways)** .
> > 4. Set up a **SIP REFER** to the url we give you in formal ***[custom domain].sip.twilio.com***. If **SIP REFER** is not available, then use **SIP INVITE** (this will leave Regal on the SIP).
> > 5. Please make sure **Custom SIP X- headers** are on in both directions (some CCaaS require this to be turned on separately). We use this to pass context to/from the AI agent.

**Use Case 1:** You have an existing telephony provider with phone numbers that your customers are familiar with, and you want to let customers call into those but have one of your Regal AI phone agents handle the call.

**Use Case 2:** You want your Regal AI phone agents to be able to transfer calls back to your human agents in your telephony provider.

# Why use SIP transfers instead of PSTN transfers?

SIP is a widely used protocol because it’s flexible—it can route calls over the internet, between VoIP systems, or even connect to the traditional phone network (PSTN) via SIP trunks.

It also allows you to share metadata about the call between Regal and your telephony provider.

For example, perhaps your Regal AI agent needs to know what source a lead was acquired from. SIP transfers allow that metadata to be sent along with the call in custom headers (X-headers) to Regal, so that you can route appropriately or present the right data to your AI agents to personalize the conversation.

And perhaps after your Regal agent qualifies the lead, you want to transfer the call back to a licensed agent in your telephony provider, and both preserve the lead source as well as enrich the transfer call with context about the customer collected by the AI agent, such as the customer's zip code. Again, you can add SIP headers on the way back with that data so that you can route appropriately, present the right data to your human agents in their "screen pops", and conduct attribution analytics.

> ## 🚧
>
> **Twilio Limitation**
>
> Twilio does not support SIP transfers between accounts that aren’t owned by the same parent organization.
>
> 👉 Regal supports **Twilio application transfers**  or **PSTN transfers** instead, for Twilio-based clients.

# Sending a SIP call to Regal

Your telephony provider likely provides you with two options to send SIP calls to Regal:

1. **SIP trunking:** In your telephony provider, you will need to set up a SIP trunk and configure your number to point to it.
2. **Dial to SIP Endpoint:** If your telephony provider supports dialing SIP endpoints, you can directly dial Regal's SIP endpoint.

Regal will provide a unique SIP domain for you to point to/dial. It will look something like `sip:<SIP URI>.sip.twilio.com`

In order for Regal to configure a SIP domain for you, you need to provide the following information to Regal:

- **What is your preferred Authentication type? IP or Credentials** If IP, please provide the IP addresses or ranges we should allow
- **Secure Real-Time Transport Protocol (SRTP) - Will incoming SIP calls encrypt media with SRTP?** Yes or No
- **Your telephony provider may also require you to whitelist Regal's IP address range to send SIP calls to Regal:**

Signaling IPs Port 5060 (UDP/TCP), 5061 (TLS)  
North America Virginia

- 54.172.60.0
- 54.172.60.1
- 54.172.60.2
- 54.172.60.3

## Custom SIP Headers

You can configure custom SIP headers to send to Regal on your SIP calls from your telephony provider. Reach out to your telephony provider directly if you need support in doing this.

# Receiving a SIP call from Regal

Regal offers 2 options to send SIP calls back to your telephony provider, in case for example, you have human agents in your CCaaS that you want to receive transfers from Regal AI agents.

1. **Cold SIP Transfer (SIP Refer/SIP Invite):** With a cold SIP transfer, the AI agent leaves the call as soon as the transfer connects to your CCaaS. The recording in Regal also stops at that point. Use the native "External Transfer" action in your AI agent to invoke a cold transfer.
2. **Warm SIP Transfer (SIP Invite):** With a warm SIP transfer, the AI agent puts the customer on hold, but stays on the call until your human agent answers the call. The AI agent then delivers a summary of what happened on the call to your human agent ("warm handoff"), and then takes the customer off hold and leaves the call, at which point the recording in Regal stops (if needed, Regal can continue recording).

> ## 🚧
>
> **Cold Transfers Configuration**:
>
> Note, the following CCaaS providers do not currently support SIP Refer natively, and will require a SIP Invite for cold transfers.
>
> - **NiCE Contact Center**
> - **Five9**

## Warm Transfers

To achieve a Warm SIP Transfer, you'll need to:

a. Create 2 custom actions:

- **start\_warm\_transfer:**
  - Endpoint: [https://conversations.rv-apps.io/transfers/start-warm-external-transfer-from-ai-agent?b=`your-regal-brand-slug`&externalPhone=`numberFromTransferPhonebook`&transferDelaySeconds=3](https://conversations.rv-apps.io/transfers/start-warm-external-transfer-from-ai-agent?b=%60your-regal-brand-slug%60&externalPhone=%60numberFromTransferPhonebook%60&transferDelaySeconds=3)
  - Check Speak after action
- **end\_warm\_transfer:**
  - Endpoint: [https://conversations.rv-apps.io/transfers/end-warm-external-transfer-from-ai-agent?b=`your-regal-brand-slug`&externalPhone=`numberFromTransferPhonebook`&transferDelaySeconds=3](https://conversations.rv-apps.io/transfers/end-warm-external-transfer-from-ai-agent?b=%60your-regal-brand-slug%60&externalPhone=%60numberFromTransferPhonebook%60&transferDelaySeconds=3)

b. Prompt your agent on when to invoke each action, and how to deliver the summary e.g.,

> Goal: When the licensed advisor joins, provide a concise recap so they know what’s been discussed.
>
> Continuously listen until you detect a clear and spoken greeting from the advisor (e.g. “hi, this is Jane…” or “hello, I’m speaking with…”).  
> Examples of acceptable greetings:  
> -"This is Jane from company X."  
> -"Hi, it's Andy with company X."
>
> Ignore messages that tell you to wait, and listen for a person. As soon as it seems that someone is trying to communicate with you move to step 3.
>
> As soon as you hear their introduction, say:  
> “Hi, my name is Jenny, and I'm a virtual agent at X. I have [customer first name] on hold. Here’s what we covered: [provide a summary]. Can I connect you now?”
>
> If the advisor says yes / okay / ready, then call function end\_warm\_transfer.

## Create Transfer Phone Book Entry w/ SIP URI and SIP Headers

For both cold and warm SIP Transfer options, you'll also need to create and configure a new external transfer number in Settings > External Transfer Phonebook, and:

1. Select SIP as the external integration
2. Add a placeholder phone number (it doesn't matter what this is)
3. Enter the target SIP URI that should receive the transfer (target SIP URI must be under 255 characters)
4. Configure your custom SIP headers

# An Alternative to SIP: Cold PSTN Transfer w/ HTTPS request

This is a 3rd option that does not leverage SIP, but does achieve something similar by paring a PSTN transfer with an HTTPS request to send metadata parameters back right before the call. Regal will transfer the call back to your telephony provider using a PSTN phone number, but just prior to the transfer, we will also post an HTTPS request to your telephony provider with the call parameters you configure. This option exists because some telephony/call tracking providers (e.g., Ringba) do not support SIP refer. To configure this option, in the **Settings > External Transfer Phonebook** in Regal, create a new external transfer number, and:

1. Select the external integration provider (e.g., Ringba)
2. Add the phone number you want to transfer calls to
3. Add any other inputs requested (e.g., for Ringba, we require your Ringba External Id)
4. Configure your custom parameters

![](https://files.readme.io/16ca29d628b80de8390f304b4fed6a2f31cf50ad9a549a845bde4d99ab5b1b89-Transfer_Phone_Book.png)

# Configuring Custom SIP Headers/Parameters in Regal

Regal allows you to define custom SIP Headers (for SIP refer transfers) or custom parameters (for PSTN/HTTPs transfers) to include on your transfers out of Regal.

You can add SIP headers/parameters from:

- **contact attributes** - data from the contact's profile that your Regal AI agent collects in the course of the call such as first name, last name, zip code, etc. depending on whatever information you have the agent ask for. These are prefixed with `contact.`
- **incoming sip headers** - any of the incoming SIP headers Regal received from your SIP call in (e.g., Call-Id), can also be sent back on the transfer out. These are prefixed with `sip.`
- **hard coded values** - you can hard code static values

![Configuring Outgoing SIP Headers](https://files.readme.io/23bff1c0af5a78fe487da208dc429d10ec57d09197d6025702825d92cfaaa6f1-sip.png)

Configuring Outgoing SIP Headers

# FAQ

Where can I view the SIP headers I sent to Regal?
  

The incoming SIP headers Regal receives can be found on the call task slide out. Go to the Tasks page, find your call task, and click on the task. The incoming SIP headers appear in the `incomingSipHeaders` object in the Task Attributes section – you can expand the object to view each header.

Where can I view the SIP headers Regal sent to me?
  

You should be able to view those in your telephony system that receives the call, but a Regal forward deployed engineer can also help you debug if necessary.

Are there any limitations on the number of SIP headers I can send to Regal?
  

The sum of all incoming custom headers on a call must be under 1,024 characters.

Are there any limitations on the number of SIP headers Regal can send to me?
  

The sum of all outgoing custom headers on a call must be under 1,024 characters. And the target SIP URI must be under 255 characters.

Does Regal support SIP TLS (Transport Layer Security)?
  

Yes – just let us know if you need it.

Does Regal maintain a single static IP address that we can whitelist?
  

We have a range of IP addresses to support failovers, which is best practice:  
  
**Signaling IPs**  
Port 5060 (UDP/TCP), 5061 (TLS)  
**North America – Virginia**  
54.172.60.0  
54.172.60.1  
54.172.60.2  
54.172.60.3

Does Regal support SIP integration for human teams sitting in Regal or is it just for AI agents?
  

Yes, a SIP integration can be used to send calls to Regal and receive transfers back from Regal regardless of whether the handling agent is an AI agent or human agent in Regal.

Can my telephony provider record the entire call?
  

Yes – your telephony provider should be able to record all the way through SIP transfers. If in your test calls, you're finding that's not the case, reach out to your telephony provider for support.

Can Regal record the entire call?
  

Regal can record everything while we’re connected. If Regal does a SIP refer transfer, that means your telephony provider will remove our leg of the call and initiate a new call to the transfer recipient. So we cannot, in that case, continue recording.
  
  
Alternatively, we can transfer by creating a new call leg (either to a SIP domain or PSTN number) and add that to the existing conference — in that case, we can continue recording. The choice is up to you and what your telephony provider supports.

Updated about 1 month ago

---
