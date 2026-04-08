---
id: 15931535681691
title: "How to Reference Journey Webhook Data in Highly Nested or List-Heavy Payloads"
html_url: "https://support.regal.ai/hc/en-us/articles/15931535681691-How-to-Reference-Journey-Webhook-Data-in-Highly-Nested-or-List-Heavy-Payloads"
updated_at: "2024-08-27T16:34:32Z"
---

# How to Reference Journey Webhook Data in Highly Nested or List-Heavy Payloads

## Use [webhook nodes](https://support.regal.ai/hc/en-us/articles/5725272620187) to send GET requests in your journey to supplement the contact or event with external information!

### *https://icons8.com/icon/24454/webhook* Best Practice: Add Delays!

Webhook requests take time to process. Our journeys won't move past the node until the request completes but a 200 OK takes significantly less time to process than an object with tens of keys. Adding a delay node in between webhook requests will help ensure that **all of the results** are present when you attempt to reference them in the journey!

When working with payloads that contain highly nested or list-heavy data formats, it can sometimes be challenging to know how to extract and reference specific information accurately. Below, we'll provide some examples of common nested payloads and how you would reference specific data from these responses.

## Example Payload:

```
{
  "records": [
    {
      "id": "regalABC123",
      "createdTime": "2022-12-15T19:43:11.000Z",
      "fields": {
        "company_email": "hello@trapezoidtruckers.com",
        "company_name": "Trapezoid Truckers",
        "domain": "https://www.exampledomain.com/",
        "supported_languages": [
          "English",
          "Spanish",
          "French",
          "Dutch",
          "Chinese",
          "Japanese"
        ],
        "business_address": "123 Main Street, City, State 12345, USA",
        "available_subscriptions": [
          {
            "PREMIUM": {
              "price": 100,
              "billing_period": "bi-annual",
              "minimum_commitment": "24 months",
              "PERKS": [
                "Priority Support",
                "Unlimited Appointments",
                "Discounted Upgrades"
              ]
            }
          },
          {
            "REGULAR": {
              "price": 50,
              "billing_period": "bi-annual",
              "minimum_commitment": "36 months",
              "PERKS": [
                "Priority Support",
                "Discounted Upgrades"
              ]
            }
          }
        ]
      }
    }
  ]
}
```

## 

## Referencing Data in Payload

To reference specific data within the payload, you can use the following format:

``` {{webhook_X.records.0.fields.company_name}} ```
:   This retrieves the company name from the payload.

``` {{webhook_X.records.0.fields.preferred_language.0}} ```
:   This references the preferred language, specifically the first index, which in this case is "English."

``` {{webhook_X.records.0.fields.preferred_language.2}} ```
:   This retrieves the preferred language at the second index, which is "French."

``` {{webhook_X.records.0.fields.available_subscriptions.1.REGULAR.price}} ```
:   This gets the price of the regular subscription from the payload.

``` {{webhook_X.records.0.id}} ```
:   This retrieves the ID from the payload.

``` {{webhook_X.records.0.fields.preferred_language}} ```
:   If you want to retrieve all preferred languages, you can use this reference. This will retrieve an array, not a string. If you want to reference all languages as a string you'll need to reference them all individually.

When using these references, remember to replace the "X" in "{{webhook\_X...}}" with the Node ID of the node in the journey. For example, if the Node ID is 1, you would use "{{webhook\_1}}" in your reference.

Here are some additional examples:

![Screenshot](https://support.regal.ai/hc/article_attachments/15931822450331)

``` {{webhook_2.records.0.fields.company_email}} ```
:   If your get request was in this webhook node you would use 2 instead of X to retrieve the company email.

![Screenshot](https://support.regal.ai/hc/article_attachments/15931808247067)

``` {{webhook_8.records.0.fields.domain}} ```
:   This retrieves the domain if the get request is in Node 8.

#### These are examples

Make sure to replace the data in the example payload with your actual payload for accurate referencing.

If you have any further questions or need assistance, feel free to [reach out to our support team.](https://support.regal.io/hc/en-us/requests/new)