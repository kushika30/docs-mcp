---
id: 17373816189211
title: "How to Use Timestamp Functions in Journey Webhooks"
html_url: "https://support.regal.ai/hc/en-us/articles/17373816189211-How-to-Use-Timestamp-Functions-in-Journey-Webhooks"
updated_at: "2024-04-03T17:52:48Z"
---

# How to Use Timestamp Functions in Journey Webhooks

### This article describes how to use Timestamp functions in Webhooks to help manipulate datetime data into desired formats and timezone. Refer to [this article](https://support.regal.io/hc/en-us/articles/5725272620187-How-to-Use-Journey-Webhooks) on how to use Journey Webhooks.

### Webhook function 1: "Now" function

In order to capture the current timestamp when an event occurs, it's useful to access the timestamps for. This is especially true if the event payload itself does not contain some form of datetime fields. By using the "now" function, users can capture the timestamp at the time of the evaluation.

For example, when a custom event such as Application Submitted triggers the Journey but the submission timestamp didn't get passed along, we can use this webhook function to timestamp it directly in Regal. Often, these timestamps are sent to the internal event endpoint to create/update a contact attribute, which can then be further utilized in Journey Builder or Segment Builder for routing and segmentation purposes.

**How to use**: using a POST method for webhook, simply add {{now}} as a field replacement in the JSON payload. For the example in the screenshot, the webhook will send to the destination a field named "current\_time" with the [unix timestamp](https://www.unixtimestamp.com/) of the execution time. **In order to convert unix timestamp format to a recognized datetime format, see below function.**
![](https://support.regal.ai/hc/article_attachments/17402125632667)

### Webhook function 2:"Local Time" Function

For timestamps in unix format, we may want to convert them into Regal recognized datetime format to use them in conjunction with features that are based on datetime format fields. This includes [Delay Using Time from Property,](https://support.regal.io/hc/en-us/articles/5721886910107-How-to-Use-Delay-Blocks-in-Journeys) [Conditional Node](https://support.regal.io/hc/en-us/articles/5721895940379-How-to-Filter-or-Path-Contacts-using-a-Conditional-Match-in-a-Journey), [Segment Builder](https://support.regal.io/hc/en-us/articles/14987900394523-How-to-create-and-save-a-new-Dynamic-Segment-), etc. **Using the "local time" function, you can translate any unix timestamp to a datetime format recognized by Regal** (YYYY-MM-DD hh:mm:ssTZD, e.g. 2023-07-24 17:24:04-04:00) displayed in the contact's local timezone. This timezone is determined based on the default Regal field for timezone.

Continuing with the example above, we may want to capture the Application Submitted time and update a contact attribute field in datetime formate. Such that we can use the new attribute in Segment Builder to create a dynamic segment based on application submission dates.   

**How to use:** wrap the function around the field you want to convert as such {{#local\_time}}{{now}}{{/local\_time}}. This entire input can be directly used to replace a specific field value in the webhook. 

Below screenshot shows and example of how to update a contact attribute using the webhook node. The outcome of this webhook execution will result in a field named app\_created\_time in datetime format on the contact, with the value of something like 2023-07-24 17:24:04-04:00. Contact your CSM for further information on Authorization key for your brand, and how to utilize such webhooks. 

![](https://support.regal.ai/hc/article_attachments/17406664115611)

**Please note: If you are using unix/epoch timestamp properties to update datetime attributes within Regal, the {{#local\_time}} function must be used within the webhook payload to ensure the correct datetime format is passed to the contact.**

**For example:** All RV events call.completed contain the property "ended\_at", which is the call end time. If you want to map that to a datetime contact attribute called "call\_ended\_at", you can use a JSON payload as such: 

```
{  
"traits": {  
        "phone": "{{contact.contactPhone}}",  
         "call_ended_at":"{{#local_time}}{{event.ended_at}}{{/local_time}}"  
         },   
     "name": "Call End Time Update",  
     "properties": {  
     }  
}
```