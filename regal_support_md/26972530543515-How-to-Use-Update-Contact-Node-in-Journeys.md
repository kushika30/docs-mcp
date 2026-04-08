---
id: 26972530543515
title: "How to Use Update Contact Node in Journeys"
html_url: "https://support.regal.ai/hc/en-us/articles/26972530543515-How-to-Use-Update-Contact-Node-in-Journeys"
updated_at: "2025-08-18T13:37:21Z"
---

# How to Use Update Contact Node in Journeys

# What Is Update Contact Node?

The Update Contact node allows user to update contact attributes AND/OR trigger a custom event on the contact. Below is the node UI in the Journey canvas, and node editor side panel. For more information on how to trigger a Journey, see [this article](https://support.regal.io/hc/en-us/articles/12815108163483-How-to-Trigger-A-Journey).

![](https://support.regal.ai/hc/article_attachments/26972507740699)   ![](https://support.regal.ai/hc/article_attachments/27953524090267)

### Update Contact Attributes on the Contact

- **Contact Attribute**: In the "Contact Attributes" field, choose attribute to update by selecting existing attributes OR creating a new attribute.
  - To add a new attribute, type in the new field name to Create Attribute. "customProperties." will be prefixed in front of the field name automatically. Select the desired data type for the field. Data types supported include: string, number, boolean, [datetime](https://regalvoice.slab.com/public/posts/property-data-types-name-limits-24yhvlg7#hsn7u-dates), object, and list.
  - Note: a field is officially created in your brand's data schema after having at least one contact with that field populated. Simply creating the attribute in the node here without following execution does not officially generate it in the data schema.

![](https://support.regal.ai/hc/article_attachments/27954065440411)![](https://support.regal.ai/hc/article_attachments/27954065446043)

- **Attribute Value:** Input value to update new or existing attributes with. Populate "Attribute Value" field with static input, referencing the trigger event properties with {{event.xxx}} or other contact attribute {{contact.xxx}}. **NOTE: previous webhook GET responses are currently not available for reference.**   
  - See below for examples:

![](https://support.regal.ai/hc/article_attachments/27953508713499)

- Currently, channel based subscription updates as well as referencing GET requests from webhook nodes earlier in the journey are not supported in the node (coming soon). Continue to use webhook nodes to update subscription status on the contact or reference previous GET requests. Contact support if you have questions.
- **Journey Execution**: contact attributes will be updated **before** the contact moves forward in the Journey to the next node. Therefore, you may follow up the update contact node with a conditional node or an SMS campaign referencing the new attribute values.
- **Regal Event**: a contact.attribute.updated event will be generated for each Update Contact node showing all the attributes that were updated, and their old and new values. If an attribute was in the node but its value had no change, it will not be listed in the event payload. These events can be referenced in other journeys or through the Reporting Webhook for external consumption.

![](https://support.regal.ai/hc/article_attachments/27954913095835)

- - An example event payload:

Object":{15 items

"brand":

string"test-env-03"

"contact\_email":

string"kelly@regalvoice.com"

"contact\_phone":

string"+19735550158"

"created\_at":

string"1722629592"

"entity\_type":

string"event"

"event\_id":

string"f8871baa4109f95a7b5b4fe237a55ff5"

"event\_type":

string"regal\_voice\_event"

"external\_id":

string"1325twf4t57"

"legacy\_info\_key":

string"test-env-03#event#regal\_voice\_event#039a4c50afa888d8e20ae4708a3e2fe1"

"name":

string"contact.attribute.edited"

"original\_timestamp":

string"1722629590"

"profile\_id":

string"1a1aff9301d045e3b0cd0ef6e9431030"

"properties":{

5 items

"agent\_email":

NULL

"changes":{

1 item

"custom\_properties":{

1 item

"purchase\_date":{

2 items

"new\_value":

string"2020-01-03 12:00:05 -04:00"

"old\_value":

string""

}

}

}

"contact\_phone":

string"+19735550158"

"created\_at":

string"1722629590"

"email":

string"kelly@regalvoice.com"

}

"source":

string"Regal Voice"

"traits":{

2 items

"email":

string"kelly@regalvoice.com"

"phone":

string"+19735550158"

}

}

### Caveats and Limitations

1. Fields cannot be set to null by writing in hardcoded "null" in the input field. However, null values from dynamic values inside {{}} can be used to set fields as null.
2. If the dynamic field {{}} referenced in attribute value does not exist on the contact, this particular field update will be dropped.
3. Not all contact attributes can be updated, and they are hidden from the view in the contact attribute selection dropdown. For example, Regal system generated properties such as contactCreatedAt or rvProperties.timezone cannot be updated. However, all contact attributes values, including the system generated ones, can be used to update other fields.

### Trigger a Custom Event on the Contact

Using the "Trigger an Event" button, you can trigger a custom event for the contact that pass through this node in Journeys.

![](https://support.regal.ai/hc/article_attachments/28934539471259)

![](https://support.regal.ai/hc/article_attachments/27953524100763)![](https://support.regal.ai/hc/article_attachments/28934539476251)

- **Event Name**: In the "Event Name" field, choose from existing events or input a new event name to trigger on the contact.
- **Event Properties:** Optionally, add properties to the event based on your needs. To add a property, click Add Property button and either select from existing properties or create a new property. "properties." will be prefixed in front of the property name automatically. Select the desired data type for the field. Data types supported include: string, number, boolean, [datetime](https://regalvoice.slab.com/public/posts/property-data-types-name-limits-24yhvlg7#hsn7u-dates), object, and list.
- **Property Value:** Input value for the properties selected. Populate "Property Value" field with static input, referencing the trigger event properties with {{event.xxx}} or other contact attribute {{contact.xxx}}. **NOTE: previous webhook GET responses are currently not available for reference.**
- An example of a custom event triggered using this node:![](https://support.regal.ai/hc/article_attachments/28934539484955)Payload of the custom event with the properties specified:

"Object":{13 items

"brand":

string"circle-bank-segment"

"contact\_email":

string"kellychen90@gmail.com"

"contact\_phone":

string"+19732626158"

"context":{

...

}

1 item

"created\_at":

string"1725554461"

"entity\_type":

string"event"

"event\_id":

string"69f5ba014b06b6a5a02d7fb793339ea1"

"event\_type":

string"track"

"legacy\_info\_key":

string"circle-bank-segment#event#track#56fcd67ac0c1dbf518f2296764e83a74"

"name":

string"Account Funded"

"profile\_id":

string"15c437027c133cb72c4d75923fdced07"

"properties":{

2 items

**"Account Type":**

**string"Retirement"**

**"Fund Amount":**

**int50000**

}

"source":

string"API"

}

- Triggered custom event will count towards event volume. They are also reference-able in other journeys as a "Custom Event" that have occurred on the contact.

# Common Use Cases for Update Contact

1. For upcoming scheduled calls, update attribute before sending a confirmation SMS referencing the scheduled time and agent name
2. Reflect the latest lead information for accurate agent context in Agent Desktop
3. Update "converted" status on contacts so further call tasks will not be created through journeys, using multiple criteria such as call disposition or custom events
4. Trigger custom event on the contact record for tracking and reporting purposes

### Example: Sending Confirmation SMS

#### Journey updating contact with event information:

![Screen Shot 2024-06-28 at 8.23.30 AM.png](https://support.regal.ai/hc/article_attachments/26972530537883)

#### SMS campaign following the update contact referencing new attribute value:

![Screen Shot 2024-06-28 at 8.18.28 AM.png](https://support.regal.ai/hc/article_attachments/26972507745051)