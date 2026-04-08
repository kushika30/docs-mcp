---
id: 28750346534811
title: "Account Level and Agent-Specific Voicemail Drop Feature"
html_url: "https://support.regal.ai/hc/en-us/articles/28750346534811-Account-Level-and-Agent-Specific-Voicemail-Drop-Feature"
updated_at: "2025-08-19T21:52:37Z"
---

# Account Level and Agent-Specific Voicemail Drop Feature

## Feature Overview

The Voicemail Drop feature allows agents to automatically drop a preselected agent-specific voicemail after the "beep" during a call. Preselected voicemails can either be account level or agent specific.

For agent specific VM, agents can upload their own pre-recorded files, which can be associated with specific campaigns and contact sub-brands (if enabled). When dropping, VM will be automatically preselected based on the campaign and contact sub-brands. Agents can also manually select other VM's during call wrapping. This ensures both a personal touch and efficient call handling. Additionally, admins can review and edit these voicemails as needed, ensuring consistency and quality across the board.

---

## Understanding the Different Types of Voicemail Recordings

#### **What types of voicemail recordings are available in the app?** You can create two types of voicemail recordings, each serving different purposes:

1. **Account-Level Voicemail Recordings**

   - **Usage:** These recordings are created at the account level and can be used for voicemails in individual campaign, manual outbound calls, or scheduled callbacks. See below on how to upload for each.
   - **Characteristics:** They are designed for general use and do not include personalization. They are ideal for situations where a consistent, brand-approved message is required.
2. **Agent-Specific Voicemail Recordings**

   - **Usage:** These recordings are uploaded by agents and can be used for call campaigns, outbound calls to contacts with sub-brands, and general outbound calls.
   - **Characteristics:** These recordings are personalized, allowing agents to maintain a closer connection with their contacts. They combine the personal touch of a tailored message with the efficiency of a pre-recorded voicemail, making them suitable for both campaign-specific and broad outreach.

## How to Upload Voicemail Recordings

---

#### **Audio Recording and Uploading Tips**

**Don't have the right software to record mp3 files?**

- You can use [this website](https://vocaroo.com/) to record and download mp3 files easily. Only true mp3 files can be dropped as voicemails successfully.

**My mp3 file is rejected upon upload, what went wrong?**

- **Incorrect file type** - Simply updating the file type may not work. Verify your true recording type using [this website](https://www.aconvert.com/analyze.html). If your file type is not in mp3, use [this website](https://vocaroo.com/) to record a new one.
- **File name exists** - If the audio file has already been previously uploaded, you must update the audio file name or choose a new recording.

---

#### **Account-Level Voicemail Recordings**

**Setting Default Voicemail:** default VM is used for manual OB, scheduled callbacks, or campaign calls when the default VM is selected as a particular campaign's voicemail option.

**How to update:** Settings > Recordings > New Recording or Edit existing Voicemail recordings

![](https://support.regal.ai/hc/article_attachments/29733063052059)

**Campaign-specific Voicemails:** campaign VM is the particular recording selected on the campaigns page, to be dropped for this campaign's calls in particular. Agent specific VM can override campaign level selection if enabled (see below).

**How to update:** Campaign > New Campaign or Edit existing phone call campaigns > Voicemail section

![](https://support.regal.ai/hc/article_attachments/29733057256987)

#### **Agent-Specific Voicemail Recordings**

Agents can upload their own recording and indicate whether it should be their default VM, associate with campaigns, or associate with sub-brands.

**Note**: to use pre-recorded account level or agent specific voicemails on campaigns, **the campaigns must be configured to allow "Pre-recorded Voicemail" under Voicemail Instructions**. Choose to have a campaign-level voicemail as fallback, or only allow Agent-specific voicemails for the campaign. 

![](https://support.regal.ai/hc/article_attachments/30971165322139)

**How to Upload Agent VM:** Name top right corner > My Settings > Upload New Recording or Edit existing. Recording must be saved as mp3 format and shorter than 5 minutes. Instruct agents to associate specific campaigns and/or sub-brand based on needs.

**![](https://support.regal.ai/hc/article_attachments/29733063062427)**

**![](https://support.regal.ai/hc/article_attachments/29733057270427)**

**When to use Campaign association? (Applicable to all accounts)**

- If the recorded voicemail is meant for specific campaign(s), select them in the dropdown. This will affect which agent voicemail is pulled up during the campaign calls.    **If associated to a campaign, the agent VM will override the campaign level VM selection.**
- **Note: campaigns with "No Voicemail" setting will not show up in the dropdown list.**

**When to use Sub-Brand association? (Applicable to certain accounts only)**

- If contact sub-brand is used to enable shared phone/email across multiple contact profiles    AND campaigns are **shared** across multiple sub-brands, then   your agents will likely need to configure sub-brand for the voicemails as well.
- For example, a brand may work with multiple schools. The same contact can apply to different schools and will require a unique profile to be created for each school. The admin set up call campaigns 1, 2, 3 to be shared across all schools. So in order to know which VM to use for OB campaign call with contact's profile for school A vs school B, you will need to instruct agents to associate accordingly.

**What does Agent Default VM do?**

- When Agent Default VM is configured, it is automatically selected for the agent's manual OB calls and scheduled callbacks. This is an optional setting. See [below](#h_01J6J1B2QYZVQHYD134VPHXNP2) for more logic on automatic selection.
- **Note:** If sub-brand is enabled, it's best to not use default agent VM, but instead set up a specific voicemail for each sub-brand and leave campaign selections empty.

**Admins to Edit Agent Voicemails**

**As an admin, you may choose to associate campaigns / sub-brands on behalf of agents for consistency. In that case, instruct agents to upload recordings and leave the other sections blank.**

**How to update as an admin:** Settings > Recordings > filter for Agent Voicemail to see full list of agent uploaded voicemails.

![](https://support.regal.ai/hc/article_attachments/29733837404571)

---

## Using Voicemail Recordings In Agent Desktop

![](https://support.regal.ai/hc/article_attachments/29727038355099)

#### **How do I (agent) drop a voicemail during a call?**

1. **Listen for the Beep:** During manual outbound, scheduled, or campaign calls, wait for the voicemail prompt.
2. **Preselected Voicemail:** The system will prefill a voicemail based on set rules (see below).
3. **Change Voicemail (Optional):** Click the voicemail icon to select a different voicemail from the dropdown list if needed.
4. **Drop the Voicemail:** Once satisfied with your selection, click "Drop Voicemail" to send it.

#### **How is the preselected voicemail determined for manual outbound calls and scheduled callbacks?** For manual outbound and scheduled calls, the system follows these rules:

- **Preselected Voicemail:** The agent's default voicemail is preselected if available (and matches sub-brand or has no sub-brand).  
  - If default is blank, but the contact has sub-brand on the profile, the earliest recording with ONLY sub-brand associated (no campaign association) will be selected.
- **Fallback Option:** If the agent doesn't have a default voicemail and there is no contact sub-brand, the brand-level default voicemail is used.
- **No Preselected VM - Manual Selection Only:** If none of the above options exist, the preselected voicemail button will be disabled, but the agent can still manually select a voicemail from the dropdown option to the left:
  - Agents can search and select from a list that includes all the account's default recordings (account level) and the agent's own recordings, displayed alphabetically, excluding any voicemails tied to different sub-brands.

![](https://support.regal.ai/hc/article_attachments/40178611370907)

![Screenshot 2025-08-19 at 5.13.50 PM.png](https://support.regal.ai/hc/article_attachments/40177914972443)

- If no VM option exists at all, voicemail buttons will be disabled. Agent can still manually record.

#### **How is the preselected voicemail determined for campaign calls when the contact has NO sub-brand?** For campaign calls without a sub-brand on the contact:

- **Preselected Voicemail:** The system preselects the agent’s first recording (by creation date) that matches the campaign.
- **Fallback Options:**
  - If no matching agent recordings exist, the system preselects the agent's first recording that does not have a campaign association.
  - If no such recording exists, the agent’s default voicemail is used, regardless of campaign.
  - If the agent has no default, the campaign recording is used.
  - If no campaign recording exists (campaign is set to agent-specific VMs only), the brand default is used.
- **No Preselected VM - Manual Selection Only:** If none of the above options exist, the preselected voicemail button will be disabled, but the agent can still manually select a voicemail from the dropdown option to the left:
  - Agents can search and select from all of their agent voicemails, regardless of campaign.

- If no VM option exists at all, voicemail buttons will be disabled. Agent can still manually record.

#### **How is the preselected voicemail determined for campaign calls when the contact has a sub-brand?** For campaign calls where the contact has a sub-brand:

- **Preselected Voicemail:** The system searches for a matching recording in the following order:
  1. The first agent recording (by creation date) that matches both the campaign and the sub-brand.
  2. If no such recording exists, it defaults to the agent’s recording that matches either the campaign or the sub-brand, prioritizing the sub-brand if there's a conflict.
- **Fallback Options:**
  - If no matching agent recordings exist, the system preselects the first agent recording with no campaign or sub-brand association.
  - If no such recording exists, the agent’s default voicemail is used (if it matches contact sub-brand or has no sub-brand).
  - If the agent has no default, the campaign recording is used (if it matches contact sub-brand or has no sub-brand).
  - If no campaign recording exists (campaign is set to agent-specific VMs only), the brand default is used.
- **No Preselected VM - Manual Selection Only:** If none of the above options exist, the preselected voicemail button will be disabled, but the agent can still manually select a voicemail from the dropdown option to the left:
  - Agents can search and select from all of their agent voicemails, regardless of campaign (so long as it matches contact sub-brand or has no sub-brand).
- If no VM option exists at all, voicemail buttons will be disabled. Agent can still manually record.

**Can I (agent) override the preselected voicemail?**  
Yes, agents can always search for and select a different recording from the available list, regardless of which voicemail is preselected.