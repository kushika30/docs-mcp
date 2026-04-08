---
id: 25780583905563
title: "How to see your Salesforce Opportunities in Regal"
html_url: "https://support.regal.ai/hc/en-us/articles/25780583905563-How-to-see-your-Salesforce-Opportunities-in-Regal"
updated_at: "2024-11-27T19:00:38Z"
---

# How to see your Salesforce Opportunities in Regal

If you are using Regal's Salesforce integration, then your Salesforce Opportunities will automatically sync to build up Opportunity objects within Regal. You can configure how these will be shown in the agent desktop, providing useful context for your agents as they engage with the contact, and limiting the amount of back-and-forth between the two systems.

![](https://support.regal.ai/hc/article_attachments/25780596005019)

## Pre-requisites

1) In order to use this feature, you must install and configure our Salesforce Integration Package (v1.90 or later). See our [developer docs](https://developer.regal.io/docs/salesforce) for how to set this up.

2) You must also be sending *Salesforce Opportunity Created* and *Salesforce Opportunity Updated* events to Regal. To enable this, go to your active Regal Voice Configuration and enable the checkboxes in the Outbound Options section, as shown below:

![](https://support.regal.ai/hc/article_attachments/25781384148507)

3) In the Regal Voice Configuration object, you must also enable this feature allowing Regal to make updates to your Opportunities in Salesforce:

![Screenshot 2024-05-30 at 11.20.00 AM.png](https://support.regal.ai/hc/article_attachments/26167981137051)

4) Lastly, you should add Attribute Mappings for the Opportunity object in the Regal Voice Configuration, as shown below. While not strictly necessary, this will give you control over exactly what properties you're syncing and how they are represented in the above-mentioned events. Refer to the dev docs above for more details on how to configure these mappings.

![](https://support.regal.ai/hc/article_attachments/25781384154011)

## Building Salesforce Opportunities in Regal

Once you start sending the *Salesforce Opportunity Created/Updated* events to Regal, we will automatically begin creating, storing, and updating Opportunity objects in Regal. Each Opportunity object in Regal will be linked to the contact in Regal that represents the Salesforce Contact/Account record that is related to that Opportunity in Salesforce.

## Configuring & Showing Opportunities in the Agent Desktop

In order to begin showing the Opportunities on the Agent Desktop for your agents, you must go to Settings > Data Management > click on Salesforce Opportunity, and complete the configuration.

*Object Name* and *Description* will already be filled out, as this is a default object.

Next you can enable this object to be shown on the Agent Desktop and control which teams it will be visible for.

![](https://support.regal.ai/hc/article_attachments/25781398506139)

Lastly, you can choose which attributes of the Opportunities to show in the Agent Desktop, and in which order they'll appear. For each attribute you add, choose the Display Name for the attribute, which key in the Salesforce Opportunity Created/Updated events is updating this attribute, the input type, and the editability/visibility of the attribute, as shown below.

![](https://support.regal.ai/hc/article_attachments/25781384157083)

For example, if you configured in Salesforce an attribute mapping for the Amount of the Opportunity as such:

![](https://support.regal.ai/hc/article_attachments/25781398512667)

Then the *Salesforce Opportunity Created/Updated* events will have a key named *opportunityAmount* in the properties block of the event, like this:

![](https://support.regal.ai/hc/article_attachments/25781427878811)

So when configuring the display behavior of this attribute, you must reference the same key name, as such:

![](https://support.regal.ai/hc/article_attachments/25781442304283)

For this example, the Opportunity will show in Agent Desktop like this:

![](https://support.regal.ai/hc/article_attachments/25781484222747)

Note: If you would like the Name of the Salesforce Opportunity to be the header for each opportunity shown on the Agent Desktop, you must configured an attribute called 'Name' that maps to the field containing the Opportunity Name. If 'Name' is not configured or if the value is empty, Regal will display the Opportunity ID as the header.