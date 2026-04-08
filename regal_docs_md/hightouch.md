# Hightouch

> ## 👍
>
> A native Regal destination is currently on Hightouch's product backlog. Please reach out to your Hightouch point of contact to upvote the request.

## Sending data from Hightouch to Regal

Regal relies on the Hightouch HTTP Request destination. You can refer to Hightouch developer documentation on using [Hightouch HTTP Request destination](https://hightouch.com/docs/destinations/http-request), as well.

Hightouch queries your data source and monitors the query results for added rows, changed rows, and/or removed rows. When configuring the HTTP Request destination, you specify which of these events should trigger an HTTP request. For each trigger, you then specify an endpoint, payload, and other parameters.

> ## 🚧
>
> This documentation assumes you already have a defined Hightouch Model. If you have questions on how to create a Hightouch Model reach our to your Hightouch point of contact or follow their [developer docs](https://hightouch.com/docs/getting-started/concepts#models).

# 1) Create a new destination

Go to the [**Destinations** overview page](https://app.hightouch.com/destinations) and click the **Add destination** button. Select **HTTP Request** and click **Continue**.

![](https://files.readme.io/a4af373-hightouch_dev_docs_destinations_01.png)

Search for "http" and select the "HTTP Request" destination

Click "Continue"

Select "Basic Auth"

Next, the UI prompts you to enter a **base URL** and **\*HTTP headers**

Base URL = <https://events.regalvoice.com/events>

HTTP Headers:

- Authorization: YOUR REGAL API KEY  
  - Ensure you toggle "Secret" and add your Regal API Key  
  If you need your API email [[email protected]](/cdn-cgi/l/email-protection#22515752524d505662504745434e0c4b4d) or contact your implementation manager.

![](https://files.readme.io/735c0e6-CleanShot_2024-04-01_at_14.49.152x.png)

# 2) Create a new sync

Now that you have created the base Regal destination, you now need to create a sync to define and format the data from Hightouch to Regal.

Click into your newly created destination.

Select the "Syncs" tab and click "Add a sync".

Select your predefined Model and click "Continue".

Then select the Regal HTTP destination you created previously.

![](https://files.readme.io/f72ecb0-CleanShot_2024-04-01_at_14.54.222x.png)

### Configuring the Sync

Select the event or events that send data to Regal, they might differ depending on your use case. In this example, we'll be using the "Rows Added" event to send new leads to Regal.

Select "Only one row at a time" as each row added will be a unique Regal event. Batching events is not support at this time.

Select the "POST" method.

![](https://files.readme.io/e2d7bf0-CleanShot_2024-04-01_at_15.59.432x.png)

Under, "Customize your payload" select "JSON".

Next, select "JSON Editor" under "How do you want to construct the JSON payload?"

Edit the payload to send the desired event & properties to Regal. Ensure you are using the correct Hightouch syntax to send values dynamically using [Liquid template language](https://shopify.github.io/liquid/basics/introduction/).

In the below example, we are sending an event called "New Lead Submitted" that Opt's a contact into SMS & Voice within Regal when they are added to the Hightouch connected data source as a new row.

If you want to find more Regal examples, please refer to our [API Documentation](https://developer.regal.io/reference/overview).

JSON

```
{
"userId": "{{row.userId}}",
"traits": {
  "firstName": "{{row.firstName}}",
  "lastName": "{{row.lastName}}",
  "phones": {
    "{{row.phone}}":{
      "voiceOptIn": {
        "subscribed": true
      },
      "smsOptIn": {
        "subscribed": true
      }
    }
  }
},
"name": "New Lead Submitted",
"eventSource": "{{row.leadSource}}"
}
```

![](https://files.readme.io/ebe7a20-CleanShot_2024-04-01_at_16.00.422x.png)

  

### Rate limiting and concurrency

In order to prevent API please enable the following rate limits within Hightouch.

Select "Yes" under "Should this sync obey a specific rate limit?".

Set the quantity to 100 and the unit to seconds.

![](https://files.readme.io/5ea8847-CleanShot_2024-04-01_at_15.43.412x.png)

### Error Handling

In order to prevent dropped events, set up the below retry setting in Hightouch.

- Retry immediately
- 3 Retries
- 30 second timeout

![](https://files.readme.io/fa935aa-CleanShot_2024-04-01_at_15.44.352x.png)

### Initial sync behavior

Select "No, skip existing rows (most common)", if you need to back fill contact data its best practice to upload a CSV Segment directly into Regal.

### Finalize Sync

The "Continuous" sync option is best practice in order to send data to Regal in realtime when changes are made to your source data. This requires the Hightouch "Business tier". If you do not have tier, select the fastest custom interval.

Select "Finish" to publish your Hightouch <> Regal sync

Updated about 2 years ago

---
