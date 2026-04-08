---
id: 21244458574491
title: "How to Create Message Templates"
html_url: "https://support.regal.ai/hc/en-us/articles/21244458574491-How-to-Create-Message-Templates"
updated_at: "2024-07-01T19:11:48Z"
---

# How to Create Message Templates

Boost agent efficiency and ensure the quality and compliance of your customer reachout with SMS and Email templates!

### Creating a Template

1. Go to the 'Templates' page in Settings and click 'New Template'.  ![templates_table.png](https://support.regal.ai/hc/article_attachments/26951573027739)
2. Input the name of your message and select the channel (SMS or Email).  ![new_template.png](https://support.regal.ai/hc/article_attachments/27045229522715)
3. Select team permissions. Templates can only be seen and selected by agents on the teams selected in this step. ![template_team_permissions.png](https://support.regal.ai/hc/article_attachments/27045251898395)
4. Input the body of your template. Plaintext, contact attribute variables, and emojis are supported. For email templates, you can optionally insert a subject line, which will be overwritten on responses to existing threads. See the section below on personalizing your outreach with variables. ![Screen Shot 2024-06-27 at 3.52.18 PM.png](https://support.regal.ai/hc/article_attachments/26951573034139)
5. Click 'Save as Draft' or 'Save as Live'. Drafts will appear in the Templates page but will not appear to agents in the Agents Desktop. Live templates are automatically made accessible to agents, like so:![Screen Shot 2024-02-22 at 4.32.16 PM.png](https://support.regal.ai/hc/article_attachments/23180481303963)

### Personalizing a Template with Variables

You can include variables in the template to personalize your message. For example, you can reference

- contact attributes with the prefix "contact" e.g. {{contact.firstName}}
- custom properties with the prefix "contact.customProperties" e.g.{{contact.customProperties.subscriptionStatus}}
- Regal properties with the "contact.rvProperties" e.g., {{contact.rvProperties.friendly\_timezone}}

You can view the full list of available properties by inspecting a contact from the **Audience Page**.

The following handlebars can be used to format SMS content. Examples are below.

| Function | Description | Example Input | Example Output |
| --- | --- | --- | --- |
| capitalize | Capitalizes the referenced property. | {{capitalize contact.firstName}} | rebecca --> Rebecca |
| default | Specifies a fallback default if a referenced property doesn't exist. | {{default contact.firstName "hello"}}, nice to meet you | Rebecca, nice to meet you  hello, nice to meet you |
| ordinalize | Ordinalizes a number. | {{ordinalize 28}} | 28th |

### Editing a Template

1. Select the template you want to edit from the 'Templates' page. You can search for the template via the search bar at the top of the page. ![Screen Shot 2024-03-12 at 3.56.17 PM.png](https://support.regal.ai/hc/article_attachments/23750218549147)

2. Click the 'Edit' button in the Actions column. From here, you can edit the name, body, or state (draft/live) of your template. ![Screen Shot 2024-03-12 at 3.57.05 PM.png](https://support.regal.ai/hc/article_attachments/23750218531483)

3. Save the template again to capture your changes.

### Deleting a Template

To delete a template, click on the 'Delete' button under the Actions column of the 'Templates' page. ![Screen Shot 2024-03-12 at 3.57.29 PM.png](https://support.regal.ai/hc/article_attachments/23750218567323)

You will be prompted to confirm the deletion.

![Screen Shot 2023-12-14 at 12.48.37 PM.png](https://support.regal.ai/hc/article_attachments/21244462409627)