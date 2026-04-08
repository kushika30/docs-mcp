---
id: 23151204496283
title: "How to Configure IVR in Regal"
html_url: "https://support.regal.ai/hc/en-us/articles/23151204496283-How-to-Configure-IVR-in-Regal"
updated_at: "2026-02-19T20:14:11Z"
---

# How to Configure IVR in Regal

## What is IVR in Regal?

IVR stands for Interactive Voice Response. It's a visual workflow tool used to configure how inbound calls are handled before connecting to an agent or exiting the flow via other methods (e.g. forward to external line). When configured properly, IVR flow can improve inbound caller experience as well as agent efficiency. Check back for examples of how brands are achieving that through IVR configuration.

![](https://support.regal.ai/hc/article_attachments/23151204487579)

Here is a video walkthrough of how to use Regal's IVR product.

## 

## Where to Create or Edit IVR in Regal?

- Currently, you can go to Settings > IVR to create a new IVR, or access your list of existing IVR>

![](https://support.regal.ai/hc/article_attachments/23151162259227)

- The IVR tables view will show you the list of IVR you have, with corresponding status and other metadata. Take action to edit the existing IVR, or create new ones through New IVR Flow button.

![](https://support.regal.ai/hc/article_attachments/23151162260123)

- The IVR configuration canvas is similar to the Journey Builder, with a trigger for each workflow, action nodes, logic nodes, and exit nodes. Configure individual nodes, connect them, and Save as Live to officially, **Note: below view is illustrative. Only Send to Agents is currently available in production.** See [below](#h_01HQ6WK0TS6QXVKH85DQ4FQZ9Q) for more information on Send to Agent node.

![](https://support.regal.ai/hc/article_attachments/24855818058779)

## How to Associate Phone Numbers with IVRs?

Configure active phone numbers and select the IVR flow to use for each number. Draft IVR's cannot be saved as live until at least one phone number is associated with the flow. Callers will go through the designated IVR experience depending on the phone number they dialed in.

To configure, go to Settings > Active Phone Numbers > Edit > Select saved IVR in the modal.

![](https://support.regal.ai/hc/article_attachments/23151334418587)

## Regal's Default IVR Flow

**Send to Agent** node encompasses a few components that make up the Regal default IVR flow.

- Inbound Calls only are first routed through an IVR which plays a welcome message to customers before creating Inbound Call tasks for Agents. The IVR is responsible for letting the customer if there are no available Agents and provide alternative options to leave a message or get a call back.

![](https://support.regal.ai/hc/article_attachments/23151162261403)

**Step by step detail when calls go to Send to Agent node:**

![](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/JVIQbs-54o9Phd_f40TW8GFf.png)

## IVR Nodes

### ----Action Nodes----

### [Say / Play Node]

Say/Play node allows users to say or play certain messages to the caller. It is commonly used for greetings or automated information that does not require a human to relay. With Regal's contact data, you can use personalized greetings with their names and/or the agent they spoke with.

**Node UI in canvas**

Drag an empty Say/Play node to IVR canvas to start configuration. Configured nodes will display the node name and a preview of the text or recording selected.

![](https://support.regal.ai/hc/article_attachments/24386866687899)

**Node detail**

Configure the node by selecting the prompt type, either speech-to-text with Say a Message, or select a previously uploaded IVR recording with Play a Message.

![](https://support.regal.ai/hc/article_attachments/24386883146395) ![](https://support.regal.ai/hc/article_attachments/24387967142939)![](https://support.regal.ai/hc/article_attachments/24387950909211)

**Personalized Say Message**

For the Say a Message option, you can dynamically reference contact attributes to create a more personalized greeting or prompt! Use handlebars by typing {{ to initiate the list of variables dropdown for selection. For example, you can reference:

- contact attributes with the prefix "contact" e.g. {{contact.firstName}}
- custom properties with the prefix "contact.customProperties" e.g.{{contact.customProperties.subscriptionStatus}}
- Regal properties with the "contact.rvProperties" e.g., {{contact.rvProperties.friendly\_timezone}}

You can view the full list of available properties by inspecting a contact from the **Audience Page**. In below example, we are greeting the contact by their first name (or "there" as a placeholder for unrecognized contacts). Then we let them know their dedicated agent will be with them shortly. Make sure your message aligns with your routing configuration - in this case, we want to make sure in routing rules the dedicated agents is the first option for routing.

**![](https://support.regal.ai/hc/article_attachments/26266435763867)**

**Upload IVR Recording**

Upload recording used in IVR in Settings > Recordings tab. Select IVR as the Recording Type to make them show up in Say/Play and other IVR nodes.

![](https://support.regal.ai/hc/article_attachments/24387967191835)

### Gather Input Node

Gather Input node allows you to gather keypress input from callers. It is commonly used to collect information (e.g. account number) or caller intent. Gathered values can be used for splitting callers down different paths (see Split below), or updating contact attributes in Regal system.

> #### ❗️ Important
>
> The Gather Input node can not be configured to match on the pound symbol "#". Do not ask callers to input the pound symbol as part of your IVR flow, and be sure to include a "No Match" path in your Split on Gather Input node for callers that may accidentally press # or any other key that is not in your configured matches.

**Node UI in canvas**

Drag an empty Gather Input node to IVR canvas to start configuration. Configured nodes will display the node name and a preview of the text or recording selected. If valid keypress was collected, the caller will continue down the "Key Press" path. Otherwise, they will continue down the "No Input" path.

![](https://support.regal.ai/hc/article_attachments/25314474007451)

**Node detail**

Name of gather is required so that the value can be referenced later in IVR flow. Configure the prompt you want callers to hear by selecting the prompt type, either speech-to-text with Say a Message, or select a previously uploaded IVR recording with Play a Message. "Loops" indicate how many times you want the message to be repeated to callers.

Stop gather criteria are used to indicate when you want the keypress collection to stop. You can use any of these condition to stop the gathering process: max time, max digit, or on keypress. Gathering will stop as long as one of them is satisfied. And a max time is required to be set.

![](https://support.regal.ai/hc/article_attachments/25314474031259)   ![](https://support.regal.ai/hc/article_attachments/25314452010779)

### Split Node

Split node is a "traffic control" node to direct callers down different IVR paths based on certain criteria. Currently we support splitting callers based on Contact Attributes, Phone Numbers, Gather Input digit, and Send to Agents Keypress Exit digit.

**Split on Contact Attribute**

If you wish to send caller to different IVR path based on attributes on the contacts, select the Contact Attribute to split on in the Split Criteria section. In the selection dropdown, attributes of your environment are automatically pulled in for selection. Then, add "branches" for the split by inputting the appropriate operators and value to split on. A max of 12 branches can be configured for a single split node.

If the contact is not found, and/or the value of the field on contact does not match any of the configured value branch, it will continue in the "No Match" branch.

Here's an example of a Split node based on contact timezone:

**![](https://support.regal.ai/hc/article_attachments/24388827041947) ![](https://support.regal.ai/hc/article_attachments/24388810340635)![](https://support.regal.ai/hc/article_attachments/24388827086747)**

**Split on Phone Number**

**![](https://support.regal.ai/hc/article_attachments/24389165150107)**

If you wish to send caller to different IVR path based on phone numbers they called to or called from, select the Phone Number to split on in the Split Criteria section. For "called to" number, choose Regal Phone Number option. Only those numbers configured with this IVR will be shown in the list of dropdown options. See [here](#h_01HQ6XC34YQFBVP7SP7R8X2850) for how to configure numbers with IVR. For "called from" number, choose Contact Phone Number option (caller does not need to be an existing contact to use this option.)

Add "branches" for the split by inputting the appropriate operators and value. A max of 12 branches can be configured for a single split node. Caller with no match to the branches will continue in the "No Match" branch.

Here are some examples of Split node using Regal Phone or Contact Phone:

![](https://support.regal.ai/hc/article_attachments/24389891345179)![](https://support.regal.ai/hc/article_attachments/24389891358491)

**Split on Gather Input**

If you wish to send caller to different IVR path based on previously gathered input from callers such as keypress, select the Gather Input in the Split Criteria section. Only Gather Input nodes that exist in the same IVR can be referenced for splitting. You can select them by name in the second Split Criteria dropdown.

Add "branches" for the split by indicating keypress options for each path. A max of 12 branches can be configured for a single split node. If the caller input does not match any of the branches, it will continue in the "No Match" path.

Here is an example of Split node on Gather Input:

![](https://support.regal.ai/hc/article_attachments/25314452020251)   ![](https://support.regal.ai/hc/article_attachments/25316072019995)

**Field Type and Operators**

Supported contact attribute field types: **String, Integer, Boolean.**

Only fields of supported types will show in the autocomplete dropdown list of attributes.

Supported operators by field type:

![](https://support.regal.ai/hc/article_attachments/24388827115291)![](https://support.regal.ai/hc/article_attachments/24388827139867)![](https://support.regal.ai/hc/article_attachments/24388827164699)

### Check Hours Node

Check Hours node allows you to check whether the incoming call is inside or outside a set of business hours. It is often used to check whether the business or a particular team is still open to receive calls in the IVR. Routing decisions can be different based on whether it is inside or outside the hours selected.

**Node UI in canvas**

Drag an empty Check Hours node to IVR canvas to start configuration. Configured nodes will display the selected hours. If call happened during the selected times, the caller will continue down the "Inside Hours" path. Otherwise, they will continue down the "Outside Hours" path.

![](https://support.regal.ai/hc/article_attachments/25316093784091)

**Node detail**

Configure new business hours using the link or select previously configured business hours from the drop down. Selected business hours will be displayed as preview within the node detail.

**![](https://support.regal.ai/hc/article_attachments/25316072046619)    ![](https://support.regal.ai/hc/article_attachments/25316072058395)**

**Configure Hours**

Using the links from Check Hour node editor, or go to Settings > General Settings, you can create new custom business hours or edit previously saved business hours. Custom business hours for different teams can be created and referenced in IVR.

**Note:** Default Business Hours is the only set of hours that control out of office responses.

![](https://support.regal.ai/hc/article_attachments/25316093817883)

**![](https://support.regal.ai/hc/article_attachments/25316093831195)   ![](https://support.regal.ai/hc/article_attachments/25316072089627)**

### Webhook Node

The Webhook node lets you connect your IVR to external systems or internal Regal endpoints in real time. You can use it to **trigger actions in other applications** (such as sending emails, Slack messages, or updating records in external systems), **fetch customer data**, or update contact attributes, all while the caller is in the IVR. This enables more dynamic routing and personalization in the IVR, while also ensuring AI or human agents and downstream tools have the most up-to-date customer context before the call ever reaches them.

Webhook responses can also be referenced by downstream IVR nodes (such as Split Nodes, Say/Play, Gather Input, or additional Webhooks) to drive real-time routing and logic.

**Node UI in canvas**

**![](https://support.regal.ai/hc/article_attachments/28009962963227)**

**Node detail**

**![](https://support.regal.ai/hc/article_attachments/28009962969755)**

Configure below information and save webhook node:

- **Endpoint URL:** Input the destination url
- **Method:** POST or GET. POST is typically used to trigger actions or send data to another system whereas GET is commonly used to fetch real-time data that can be referenced later in the IVR (for example, for conditional routing or personalization).
- **Custom Header:** Optionally, configure headers such as authorization keys for the destination url
- **JSON Payload:** Input required JSON payload for POST method, where you can reference dynamic variables. Trigger dynamic reference by pressing the {...} icon or use "{{" to see the menu. Dynamic variables available for reference in payload:
  - **Contact Attributes** of the caller record in Regal. Select attribute to incorporate from the dropdown.
  - **Phone Numbers** for called to and called from phone numbers.
  - **Gather Input** digits collected from the caller during this step.
  - **Keypress Exits -** the exit digit collected from any Send to Agents node.
  - The handlebars expression inside {{}} will be noting the selected node using their friendlyIds. An example JSON payload may look like this:
    - ![](https://support.regal.ai/hc/article_attachments/28009989354523)
    - ```
      {
      "traits":
      {"phone": "{{call.customerPhone}}",
      "call reason":"new application"},
      "name": "Custom Event Name",
      "properties":
      {"gathered digits":"{{gather_4.digits}}",
      "exit keypress":"{{sendToAgent_10.digits}}"}
      } 
      ```

**Caveats**

- Webhook request will time out after 10 seconds. Calls with failed or timed out webhook request will still continue in the IVR to the next designated action, so that the call itself is not impacted.
- GET requests must return a valid response within the timeout window in order for their data to be referenced by downstream IVR nodes.
- In the JSON payload, if a referenced node (e.g. gather\_4) is not connected to the webhook node in an active way, or no longer in the IVR canvas, you will not be able to save the IVR as live. You will get an "IVR failed to save" error toast.
  - See below example, the IVR will NOT be able to save because webhook is referencing a gather node that is not connected in the flow:

![](https://support.regal.ai/hc/article_attachments/28070796179483)

#### Referencing Webhook Response Data

The response data from Webhook GET or POST requests can be referenced in downstream IVR nodes (such as Split Nodes, Say/Play nodes, or additional Webhooks).

Here is how to reference the response in each downstream node type in IVR. For example, say you're fetching caller's claim information in an IVR, with the following sample response:

```
{
 "claimNumber": "CLM-12345",
 "policyNumber": "POL-98765",
 "status": "active",
 "insured": {
   "firstName": "Jane",
   "lastName": "Doe"
 }
}
```

##### 

##### **Split Node**

Select "Webhook Response" as the split type and select the relevant node as your "Webhook Node". The "Property Path" uses dot notation (.) to access values in a JSON response. Examples:

- Top-level: status
- Nested: insured.firstName

![](https://support.regal.ai/hc/article_attachments/46849553072539)

##### 

##### **Say/Play N****ode and Gather Input Nodes**

Use handlebars syntax **{{webhook\_**Id>.**pertyPath>}}** in the prompt text field for "Say a Message" or "Gather Input".****

![](https://support.regal.ai/hc/article_attachments/46849553074587)

##### 

##### **Send to Agents Node**

This allows you to configure routing rules that target agents based on the webhook response data.

Select "Webhook Response" as the split type and select the relevant node as your "Webhook Node". The "Property Path" uses dot notation (.) to access values in a JSON response. Examples:

- Top-level: status
- Nested: insured.firstName

![](https://support.regal.ai/hc/article_attachments/46849569815835)

##### 

##### **Additional Webhook Nodes**

You can reference webhook response data in subsequent Webhook nodes, allowing you to POST data back to an external CRM or update a contact profile, for example.

This is done by referencing the handlebars syntax **{{webhook\_**Id>.**pertyPath>}}** in the JSON Payload.****

![](https://support.regal.ai/hc/article_attachments/46849553079963)

### 

### ----Exit Nodes----

### Send to Agents Node

Send to Agents Node is an Exit node where a call task will be created for agents, with a max caller wait time for agents to accept the call task. Upon timeout caller will continue in the IVR flow. You can enable an optional exit path by allowing user to select a keypress for alternative exit options (e.g. VM, ASAP callback). Task attributes can be appended on the call task for routing purposes.

![Screen Shot 2024-06-28 at 9.07.04 AM.png](https://support.regal.ai/hc/article_attachments/26967800588315)

**Configure Node**

- **Timeout Criteria** section is required to determine the maximum hold time (in seconds) a caller can wait in the queue, as well as the recording file they will hear during the hold. The recording will be played on repeat to the callers. If the call is not accepted by an agent before timeout, the call continues in the "Call Timeout" exit branch of the node. Configure the next action you want to take in the canvas (e.g. Say node to tell callers a max wait time has been reached, or a Forward node to transfer the call)

![Screen Shot 2024-06-28 at 9.07.24 AM.png](https://support.regal.ai/hc/article_attachments/26967800594843)

- **Keypress Exits** can be used to give additional options to the callers while they wait for agents in queue. When the toggle is turned on, the IVR will "listen" for keypress from callers during the wait, and immediately exit through "Keypress Exit" branch upon receiving a **single** **digit**. When toggled on, you must include the keypress prompt in your recording (e.g. "Press 1 for Voicemail, Press 2 for ASAP Callback"). Configure the next action in the canvas. See below for example

![](https://support.regal.ai/hc/article_attachments/26967769943707)

- **Task Attributes** section can be optionally configured to add additional attributes for routing purposes. Either Custom Value (static) or Gather Input (dynamic) values can be used to populate the task attributes. Configure [routing rules](https://support.regal.io/hc/en-us/articles/12181758397723-How-to-Configure-Task-Routing-Rules) using these new attributes for agent targeting.

![](https://support.regal.ai/hc/article_attachments/26967800608283)![](https://support.regal.ai/hc/article_attachments/26968159023899)

### Forward Call Node

Forward Call is an exit node, with no exit branch in the IVR for further connection. Commonly, users use the node to forward the caller to an external phone number, e.g. forward low priority calls to BPO teams for overflow.

Make sure to use +1XXXXXXXXXX format for US numbers in the input area.

![](https://support.regal.ai/hc/article_attachments/24390106978331)![](https://support.regal.ai/hc/article_attachments/24390123299611)

### Voicemail Node

Voicemail node offers an alternative exit option if agents are not available to pick up the call, or when no agents is staffed to answer the call live. For example, if a contact calls in after business hours, you may want to direct them to a voicemail box.

![](https://support.regal.ai/hc/article_attachments/26266203043099)

### ASAP Callback Node

Similar to Voicemail, ASAP Callback node offers an alternative exit option if agents are not available to pick up the call, or when no agents is staffed to answer the call live. For example, when all agents are busy, you may want to direct them to an ASAP callback option.

![](https://support.regal.ai/hc/article_attachments/26266191281819)