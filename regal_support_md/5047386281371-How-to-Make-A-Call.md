---
id: 5047386281371
title: "How to Make A Call"
html_url: "https://support.regal.ai/hc/en-us/articles/5047386281371-How-to-Make-A-Call"
updated_at: "2023-11-03T20:19:42Z"
---

# How to Make A Call

### There are several ways to make a call using Regal.

### **Triggered Outbound Call Tasks**

Most of the calls in Regal originate from automated campaigns. This is what we call triggered outbound call tasks and what's unique about Regal: **Call tasks are automatically created for you based on customer actions**.

These call tasks are triggered by journeys or - in the case of Scheduled Callbacks and ASAP Callbacks - are created by a request for a callback.

There are two dialing modes available for triggered outbound call tasks which is set by an admin when creating the call campaign. Click to dial, and power dialer.

#### Click to Dial

With click to dial, tasks are presented to agents with a set of options for how to handle the task ([accept](https://support.regal.ai/hc/en-us/articles/4921991111451), [cancel](https://support.regal.ai/hc/en-us/articles/5042791653019), [snooze](https://support.regal.ai/hc/en-us/articles/5041609342619)). Clicking the accept button (checkmark) will start dialing the customer.

#### Accept Task to Dial Out

#### Click to Dial

#### Power Dialer

Power dial mode leads to greater agent efficiency by automatically to placing the call without the agent needing to accept the task. As long as the agent is in the "Available" status, tasks are automatically assigned and start dialing instantly. The tradeoff with this dial mode, however, is that cancel and snooze are not available.

### **Manual Outbound Calls**

#### From Contact Search

Aside from triggered outbound calls, you can manually place outbound calls. You can start by clicking the purple plus icon in the top right of the Agent Desktop, and then search for a contact by their name or phone number.

If the contact already exists in your audience, they’ll appear in the drop down, and you can choose to call them or text them.

#### Search for a contact in the Contact Search.

#### Screen Shot 2023-11-03 at 4.19.28 PM.png

If instead the contact does not already exist in your audience, you can type in any phone number, then click the call button. The area code must be included. Once you create the call, the platform will automatically create a contact for them in your audience for the next time around. (note: when attempting to dial a non-US number, prepend the phone number with a "+" to successfully dial out)

**Tip: Be sure to update their name if you have it!**

You can set a call to originate from a specific phone line within Regal after selecting the call icon on the contact card (above). If your account has 2+ phone lines configured, you will be prompted with an option to select a phone number to dial from (below):  
  
![mceclip0.png](https://support.regal.ai/hc/article_attachments/11626702292123)

Here, you can select the appropriate line to dial the contact from. Calls will default to originate from the main line unless the contact is tied to a specific phone line via the "sub\_brand" Regal contact attribute. To learn more about setting a custom default from number by contact, please contact our team at [support@regal.io](mailto:support@regal.io).

#### Isolate Contact Data

On request, you can configure the Agent Desktop to hide any contact data from agents that isn’t associated with the tasks they are assigned or the leads they manage. When manually creating an outbound call or SMS, filling in a contact number does not show a dropdown of all leads in your account.

![contact_data_privacy.png](https://support.regal.ai/hc/article_attachments/17362491648539)

### Call from another Task

If you already have a task with a customer open, and you need to call that customer back for example, you can click the call button at the top of the Activity Feed next to their name.

![](https://files.readme.io/7afa003-2.png "2.png")