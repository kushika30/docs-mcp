# Planning a New AI Voice Agent Use Case

Before launching a new AI Voice Agent use case, there are some common key inputs or decisions you'll need to make around routing, agent behavior, data access, and reporting. Regal’s Forward Deployed Engineers (FDEs) can help you think through each of these areas.

# 🔁 1. Inbound or Outbound?

**If Inbound:**

- **Routing logic:** How should incoming calls be routed to the right AI agent? Will calls arrive at a specific phone number or carry a SIP header to indicate the use case?

**If Outbound:**

- **What triggers the call?** Is it a one-off lead upload, or is it triggered by an API call or event from your CRM or lead platform?
- **Dial strategy:** How many times should each lead be called? What is the cadence between attempts?
- **Stop conditions:** What call outcomes (e.g. transfer, opt-out, bad number) should prevent future calls?

# 🧠 2. AI Agent Logic

**Role/Goal:** What is the role and main goal of the agent?

**Contextual data:** What customer-specific or dynamic data does the agent need access to for a relevant and effective conversation? (e.g., customer name, policy number, appointment time, CRM status, product type)

**Conversation structure:** What script, call flow, or conversational guidelines should the agent follow?

**Objection handling & FAQs:**

- What common questions or objections should the agent be prepared to handle?
- Does it need access to a full knowledge base to respond accurately?

**Action execution:** What actions does the agent need to take during the call? (e.g., authenticate the user, book an appointment, send an SMS, trigger a webhook, update a profile)

**Human transfer logic:**

- If the conversation needs to be escalated/transferred to a human agent, what number or SIP address should the call be transferred to?
- What information should be passed along to the human agent (e.g., intent, customer details, a summary of the interaction)?

# 📊 3. Reporting & Analytics

**Data sync:**

- What are the potential call outcomes (dispositions)?
- What information needs to be pushed back to your CRM or data warehouse?
- Should this happen for all calls, or only specific outcomes (e.g., transfers, certain outcomes)?
- Does this need to happen prior to a transfer or at end of the call?

**Success metrics:**How will you define and measure success? Common KPIs include:

- Qualified transfer rate
- Conversion rate
- Scheduled Callback rate
- First Call Resolution rate

Updated 10 months ago

---
