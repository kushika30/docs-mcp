---
id: 31501098938139
title: "How to Setup Custom Objects"
html_url: "https://support.regal.ai/hc/en-us/articles/31501098938139-How-to-Setup-Custom-Objects"
updated_at: "2024-12-04T03:35:17Z"
---

# How to Setup Custom Objects

Custom Objects enable a more flexible data model so that you can represent complex customer data that doesn't neatly fit into contact attributes. You can define as many Object Types as you like, for example: Opportunities, Appointments, Quotes, Loan Applications, Properties, Insurance Claims, Pets, etc.

![](https://support.regal.ai/hc/article_attachments/31511509293211)

# How It Works:

- For each Object Type you define, you must choose which of the Custom Event(s) you send to Regal should be used to create & update records of that Object Type. You can re-use existing Custom Events that you are already sending, provided that they have the relevant data. Multiple events can update a single object type, and a single event can update multiple object types.
- A given inbound event will create/update both the contact record as well as the object record, and establish a link between them. Data in the **traits** will update the Contact, while data in the **properties** will update objects.
- The properties must contain a unique identifier for the object record that should be updated, similar to how contacts have identifiers.
- Contacts viewed in the app (either via Agent Desktop or the Audience page) will show the various objects that have been linked to them. The same object record can be linked to multiple contacts (for example: 2 co-borrowers who have a single mortgage. Each co-borrower would have it's own Contact profile, but the mortgage they share in common would appear on both profiles.)

# Setup:

## Step 1: Object Admin

Go to **Settings > Data Management > Objects**

Here you'll see a list of all the Object Types you have configured. If this is the first time setting up a custom object, you will only see a tile for the default Contact object.

![](https://support.regal.ai/hc/article_attachments/31511500170395)

## Step 2: Create a new Object Type

Click "New Object" and fill out the configuration details.

- **Object Name:** choose a display name of this object type throughout the app.
- **Description:** optional field
- **Can users view this object on Agent Desktop?**control which users can see object records in Agent Desktop. Does not affect processing of events to create/update object records behind the scenes.
- **Which events(s) sent to Regal can create or update instances of this object?**choose up to 20 events.
- **What property in the event(s) above represent the unique identifier for an instance of the object?** This is the key that will distinguish records of this object type from one another so that events know which record to update. Only property keys that are common to all the selected events will appear in this dropdown.
- **What property in the event(s) above represent the display name for an instance of the object?** An object record's display name will get special treatment in the UI, but is otherwise like any other object attribute.

![](https://support.regal.ai/hc/article_attachments/31511458606363)

## Step 3: Save the new Object Type

- **Save Object:** Events will begin to create & update records of this object type, and existing object data will show in the UI according to your visibility settings.
- **Save Object as Draft:** this will save the form so that you can come back to edit it later, but events will not be processed to create & update records of this object type. Already existing object records will still persist in the database, but will not be shown anywhere in the UI regardless of visibility settings.

![](https://support.regal.ai/hc/article_attachments/31511458610075)

## Step 4: Add Attributes

Click "New Attribute" and fill out the modal for each attribute to control how an object's data is displayed in the UI. Note: this only controls how data is displayed; all data in the chosen events' property blocks will be used to create & update an object record, even if it's not explicitly shown in the UI. This is similar to how Contact Attributes works.

![](https://support.regal.ai/hc/article_attachments/31511500182555)