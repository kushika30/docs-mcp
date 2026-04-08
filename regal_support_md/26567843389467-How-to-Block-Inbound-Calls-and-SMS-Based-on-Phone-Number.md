---
id: 26567843389467
title: "How to Block Inbound Calls and SMS Based on Phone Number"
html_url: "https://support.regal.ai/hc/en-us/articles/26567843389467-How-to-Block-Inbound-Calls-and-SMS-Based-on-Phone-Number"
updated_at: "2025-07-01T18:34:49Z"
---

# How to Block Inbound Calls and SMS Based on Phone Number

1. Add a "Blocked" contact attribute

- Go to Regal Settings > Data Management > Contact > New Attribute
- Fill out as pictured with Attribute Key == customProperties.blocked, Input Type == True/False
- If you want to grant agents the ability to block contacts, make this attribute editable. Otherwise, set it as Display Only.

![User-uploaded Image](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/preload/nBw5O36SrbY11OyGWZnyvz-i.png)

2. Add contacts to the blocked list

- To do this in bulk, upload a segment as a CSV containing all the contacts you would like to block. Ensure customProperties.blocked is set to TRUE for all contacts. More detailed instructions on this process can be found [here.](https://support.regal.io/hc/en-us/articles/6771680286619-Adding-Updating-Contacts-Through-a-Manual-CSV-Upload)
- If you made the contact attribute editable, contacts can also be blocked individually from the agent desktop.

3. Create a "Blocked" task attribute

- Navigate to the Task Attributes tab under Settings > Routing Rules
- Map the contact attribute "customProperties.blocked" to the task attribute "blocked"                   ![](https://support.regal.ai/hc/article_attachments/26567863627163)
- Note: You may need to add the contact property to a contact before it can be referenced. More information on task attributes can be found [here](https://support.regal.io/hc/en-us/articles/26265367623835-How-to-Add-Task-Attributes-to-Tasks).

4. Create a Blocked queue and routing rules

- Navigate to Settings > Routing Rules > New Queue and create a "Blocked" Queue with the eligibility expression 1==0![](https://support.regal.ai/hc/article_attachments/26567843385883)
- Create blocked routing rules for inbound call and SMS ![User-uploaded Image](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/preload/p1VVcxejCHvOzVLgfqVbR4Ud.png)