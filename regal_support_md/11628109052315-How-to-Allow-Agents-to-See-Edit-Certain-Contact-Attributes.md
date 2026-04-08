---
id: 11628109052315
title: "How to Allow Agents to See/Edit Certain Contact Attributes"
html_url: "https://support.regal.ai/hc/en-us/articles/11628109052315-How-to-Allow-Agents-to-See-Edit-Certain-Contact-Attributes"
updated_at: "2023-09-13T20:12:57Z"
---

# How to Allow Agents to See/Edit Certain Contact Attributes

In addition to the default contact attributes like name, phone, email and external ID, you can manage any additional contact attributes an agent has access to on the Agent Desktop when they are working on a task.  
  
On the Settings page, select the "Your Data" menu item. Here you will see a table of all the contact attributes that agents can currently see on the Agent Desktop, and whether agents can edit the attribute or not.

### Contact Attributes Admin

![Your_Data.png](https://support.regal.ai/hc/article_attachments/11628380255899)

### Columns in the table and their meanings:

- **Display Name** - What agents see for the attribute name
- **Attribute Key** - An existing (or future) property that this trait will map to/from. This must be identified in **camelCase** for the object group (traits or Regal properties) and standard dot notation. For example, *customProperties.loan\_amount* will access the *loan\_amount* property that is stored in the "traits" object for the contact, while *rvProperties.timezone* would access the "timezone" that is inferred from the number or zipcode in an address object in traits.
- **Input Type** - This option combines the underlying data type of the attribute and what options an agent has to enter data. If a data type is already set on the **Attribute Key**in our database, then you will only see **Input Types** that correspond to that data type.
- **Editable**- Whether agents are able to edit the attribute on the Agent Desktop.
- **Visibility** - Which teams are able to see the attribute on the Agent Desktop.
- **Created / Updated** - The timestamp and user who created or most recently updated the attribute.
- **Actions** - Edit or Delete the attribute

To add new attributes, click the **Add Contact Attribute** button below the table.

### Adding a New Contact Attribute to the Agent Desktop Group_1372.png

**NOTE:** If the attribute key does not already exist in the data you're sending to Regal, then you will be creating a new attribute when you save the attribute. The input type you select will determine the data type of the attribute and this (the data type) will no longer be changeable once it's been set.

Once the attribute is saved, agents can then see and/or edit the attribute according to the settings you configured.

![Screen_Shot_2022-12-28_at_7.42.33_PM.png](https://support.regal.ai/hc/article_attachments/11628668889499)

### 

### Team-Specific Contact Attributes

If only agents on specific teams should see a particular attribute on the Agent Desktop you can toggle **Attribute Visibility** to **Specific Teams** when adding a new attribute or editing an existing attribute. You're able to then select which teams you'd like to have access to the attribute on the Agent Desktop - any agents on any of the teams included in **Team Selection** will be able to see the attribute.

![basic.png](https://support.regal.ai/hc/article_attachments/18756654999451)