# Gmail

Regal enables agents to reach out to their customers with calls, SMS, and email all in one place. Agents can send emails from their connected Gmail account in Regal to increase their reach, follow up on calls, and cater to customers' channel preferences.

This guide describes

- how agents can connect their individual Gmail accounts to Regal
- how to connect a shared Gmail account (e.g. [[email protected]](/cdn-cgi/l/email-protection#7201131e170132001715131e5c1b1d)) to Regal
- how inbound emails are created and routed
- what attachment types are supported

[1-Minute Product Demo](https://www.loom.com/share/4b200b9a1e424a688727f75a3dbd05c8?sid=85afbbc1-3d58-4a10-9db6-373ec321fcad)

## Setup

### Connecting an agent account

To initiate outbound emails or respond to inbound customer emails, you must sync your email account with Regal. Support is currently available for Gmail accounts. Once connected, Regal will automatically generate inbound email tasks for any customer email, that is, any message where the sender email matches a contact email in Regal.

To connect your account, click the 'Settings' option in the status dropdown at the top right of the page. In the Gmail integration tile, click "Sign in with Google".

![](https://files.readme.io/17c9f58-not_connected_auth.png)

You will be prompted to sign into your Gmail account and provide necessary permissions. Make sure to select your proper work Gmail account, rather than your personal gmail account.

After doing so, the integration tile will display a 'Connected' status.

![](https://files.readme.io/2613e19-connected_auth.png)

Once connected, Regal syncs with your Gmail inbox so that:

- emails you send from Regal will appear in your Gmail 'Sent' folder
- emails you receive from customers will appear as email tasks in Regal for you to respond to
- all customer email threads - regardless of whether you respond from Regal or from your Gmail inbox - will appear in the relevant customers' activity feeds in Regal

Regal supports one connected account per agent. You can reach out to [[email protected]](/cdn-cgi/l/email-protection#0c7f797c7c637e784c7e696b6d60226563) to disconnect any agent account.

### Connecting a shared email account or distribution list

A **shared email account** (e.g. [[email protected]](/cdn-cgi/l/email-protection#ef9c8e838a9caf8b9a818b8a9d82868989838681c18c8082)) is a Gmail address with a corresponding inbox that is typically access by multiple agents via shared credentials. Admins can connect shared email accounts in the My Settings page, just like an individual agent account.

Emails that come into Google Groups are referred to as distribution lists. Regal automatically connects with your distribution lists if at least one of the members of the associated Google Group has connected their Gmail account to Regal.

If you are relying on shared email accounts or distribution lists for customer communication, let your CSM know. We can configure your routing rules accordingly, so that inbound emails from Regal contacts to shared email accounts or distribution lists automatically generate inbound email tasks in Regal for agents to handle.

Regal supports one shared email account per admin. If you would like to connect more accounts, or to disconnect an existing account, reach out to [[email protected]](/cdn-cgi/l/email-protection#65161015150a17112517000204094b0c0a).

### Inbound Emails

Inbound email tasks are automatically created when a customer sends an email to an agent (e.g. [[email protected]](/cdn-cgi/l/email-protection#b6cfd7d3daf6d2c3d8d2d3c4dbdfd0d0dadfd898d5d9db)), distribution list, or shared email account ([[email protected]](/cdn-cgi/l/email-protection#c4b7a5a8a1b784a0b1aaa0a1b6a9ada2a2a8adaaeaa7aba9)). Regal categorizes emails as coming from a customer if the sender email matches a contact email that's already in Regal.

In order for Regal to recognize that an email is associated with a customer, the customer's email must be present in the "From", "Cc", or "Bcc" fields of the email. In addition, the email recipient (agent or shared email account) must be synced with Regal via the Gmail integration (see Setup instructions).

Customer emails sent to [distribution lists](https://support.google.com/a/answer/9400082?hl=en) will generate inbound email tasks if there is at least one agent or shared email account in the distribution list's associated Google Group that is synced with Regal.

By default, inbound email tasks will route to the agent that was emailed by the customer. If multiple agents are emailed by the same customer, the task will be routed to all relevant agents. Your account can also be configured to

- route inbound emails to shared email accounts (e.g. [[email protected]](/cdn-cgi/l/email-protection#d8abb9b4bdab98bcadb6bcbdaab5b1bebeb4b1b6f6bbb7b5)) round-robin to all agents, or agents with certain skills
- route emails to all agents if the agent who received the email is not available to respond

Reach out to your Customer Success Manager to customize your email routing rules.

### Attachment Support

Regal supports the following file types: jpg, jpeg, png, bmp, gif, csv, doc, docx, mp3, mp4, pdf, ppt, pptx, xls, xlsx. Attached files must be under 10MB total.

Note: Regal's use and transfer of information received from Google APIs to any other app will adhere to Google API Services User Data Policy, including the Limited Use requirements.

Updated over 2 years ago

---
