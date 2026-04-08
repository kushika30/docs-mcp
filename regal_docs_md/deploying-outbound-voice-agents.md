# Deploy Outbound Voice Agent

There are 3 ways to deploy an outbound voice agent. With all 3 options, you can always PSTN- or SIP- transfer the call to your human agents in your CCaaS, if you need the AI agent to escalate the call.

Here are the options for placing outbound calls handled by Regal's AI voice agents:

1. **Use Regal's telephony end-to-end to dial and handle your outbound calls:**

- **✅ Pros:** Trigger outbound calls based on real-time customer behaviors leveraging Regal's customer data integrations and Journey builder, leverage Regal's Progressive dialer (including AMD) avoiding AI agent consumption until the call connects
- **❌ Cons:** Doesn't leverage your existing phone numbers, doesn't keep entire recording in your current CCaaS

*Note: with this option, Regal will be responsible for AMD.*

2. **Initiate an outbound call from your CCaaS/dialer, then SIP transfer to Regal:**

- **✅ Pros:** Leverages your phone numbers, Entire recording maintained in your CCaaS
- **❌ Cons:** Your CCaaS provider may require you to use their Auto/Agentless dialer and will need to provision SIP trunks (they will likely charge you for implementation)

*Note: with this option, we recommend Regal before the AMD, otherwise there will be too much latency post AMD results and adding in the Regal agent.*

3. **Initiate an outbound call from Regal's dialer then SIP connect to your telephony numbers before you dial in the customer:**

- **✅ Pros:** Maintains your existing phone numbers, trigger outbound calls based on real-time customer behaviors leveraging Regal's customer data integrations and Journey builder
- **❌ Cons:** Requires work from your team to configure the extra dial to your customers, AI Agent is on the call before it connects (which increases cost)

*Note: with this option, you would need to be responsible for AMD.*

Options 1 and 3 leverage Regal as the dialer. Learn more about the different options for how calls are loaded into Regal's dialer:

- [Triggered Outbound Calls](/docs/triggered-outbound-calls) - calls are triggered by journeys based on real time customer behaviors
- [Batch Dialing](/docs/batch-dialing) - calls are loaded into the dialer on a schedule from a CSV upload or Segment ("Batch Dialing")

Updated 9 months ago

---
