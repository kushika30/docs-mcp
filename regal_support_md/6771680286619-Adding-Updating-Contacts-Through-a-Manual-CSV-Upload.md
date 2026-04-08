---
id: 6771680286619
title: "Adding/Updating Contacts Through a Manual CSV Upload"
html_url: "https://support.regal.ai/hc/en-us/articles/6771680286619-Adding-Updating-Contacts-Through-a-Manual-CSV-Upload"
updated_at: "2023-12-26T18:44:01Z"
---

# Adding/Updating Contacts Through a Manual CSV Upload

The CSV upload feature allows you to upload a list of contacts to your audience and create a static segment that includes those contacts.

Use cases for this include:

- Create a segment of contacts to send a blast campaign.
- Backfill a list of contacts who are not already in your Regal Voice audience.
- Enrich the profiles of your contacts by adding new contact properties or updating existing ones.

To upload a static segment, navigate to the Segments page and click on '+ New segment' in the upper right hand corner of the screen.

## CleanShot_2022-06-21_at_16.01.54_2x.png

From here you'll be taken to the 'Set Up New Segment' page where you can choose the the criteria for your upload and select the journeys (if any) you'd like to trigger off of this upload.

Note: Uploading a CSV may generate 'Subscribed', 'Unsubscribed', and/or 'Contact Created' events. If you have any journeys that use those events as triggers, they will be triggered unless you specify under *'Trigger other journeys from this segment?'*

### CSV formatting and required fields

#### Formatting Note for CSV Uploads

Below are descriptions of accepted properties. The only required properties are **contactPhone**, or **email**, or **externalId**.

![Screenshot_2023-01-24_at_11.49.04_AM.png](https://support.regal.ai/hc/article_attachments/12311843020443)

Click [here](https://docs.google.com/spreadsheets/d/1aIPolTvffy0TMCeE1C1eE0yrXqGkvQ591lOBhjx51Lo/edit#gid=804633767) to view an example CSV.

If you're uploading a Segment containing non-US numbers, be sure to include a "+" before the digits in the contactPhone column - any phone number without a "+" will attempted to be imported as a 10-digit US number.

By default, all values will be ingested as string type, which may cause problems with using those values in Journeys. You can explicitly indicate the data type for any column of values by including an additional header row. See an example CSV with an additional data header row [here](https://docs.google.com/spreadsheets/d/1aIPolTvffy0TMCeE1C1eE0yrXqGkvQ591lOBhjx51Lo/edit#gid=724083059).

![sample_file_w_headers.PNG](https://support.regal.ai/hc/article_attachments/10857260231835)

If uploading a csv with this additional data type header, you must also check the box that says “My file contains an additional header…”

![csv_upload_options.PNG](https://support.regal.ai/hc/article_attachments/10857302409243)

Supported data types are **BOOL**, **FLOAT**, **DATETIME**, and **STRING**. Columns without a data type in the header, or values that cannot be converted to the specified type, will default to String type.

**BOOL**: used for boolean values. Can accept true and false, and is not case sensitive.

**FLOAT**: used for numeric values, including integers and decimals.

**DATETIME**: used for date properties. Acceptable formats include:

- yyyy-MM-dd HH:mm:ss ZZ
- yyyy-MM-dd HH:mm:ss
- yyyy-MM-ddTHH:mm:ss.SSSZZ
- yyyy-MM-dd

**STRING**: used for text.