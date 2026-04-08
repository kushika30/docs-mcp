# Klaviyo

This guide describes how to use Klaviyo to send data to Regal. It discusses how to set up Klaviyo to create contacts and send track events to Regal.

## Klaviyo Segments

Klaviyo does not support webhooks out, so instead the Regal Klaviyo integration relies on Regal polling Klaivyo segments or lists hourly. You can set up different lists or segments to represent the contacts you want to add to your Regal audience as well as track events you want to send to Regal that represent the important steps users take throughout their lifecycle, including purchase events.

For example, let's say you are a Pet Food Subscription company, and you want to send new contacts to Regal as well as events for the following key user actions: *checkout started*, *add to cart,* *purchase completed*, here's what you would do in Klaivyo:

## Contacts

**Step 1:** Create a segment or list for new contacts whom you want to have in your Regal audience.  
You can do this by either:

- defining a dynamic segment with the following criteria: people created in the last 1 day for whom you have a phone number
- defining a list that collects submissions from a Klaivyo form (for example if you use Klaviyo forms on your site to collect phone numbers and optin on exit intent).

![2514](https://files.readme.io/05c713f-Screen_Shot_2021-10-31_at_3.42.05_PM.png "Screen Shot 2021-10-31 at 3.42.05 PM.png")

Example Segment for New Contacts

> ## 🚧
>
> Last 1 Day Condition
>
> Adding the "in last 1 day" condition is important so that the segment never gets too long. As Regal needs to continuously poll the segment, the longer it gets the longer it will take to process and create new contacts.

## Events

**Step 2:** Create a segment for the *Checkout Started* event with the following criteria:

![1626](https://files.readme.io/b1fdd37-Screen_Shot_2021-10-31_at_3.59.08_PM.png "Screen Shot 2021-10-31 at 3.59.08 PM.png")

**Step 3:** Create a segment for the *Add to Cart* event with the following criteria:

![1642](https://files.readme.io/f62c548-Screen_Shot_2021-10-31_at_3.58.16_PM.png "Screen Shot 2021-10-31 at 3.58.16 PM.png")

**Step 4:** Create a segment for the Purchase Completed event with the following criteria:

![1638](https://files.readme.io/4b76d6f-Screen_Shot_2021-10-31_at_3.53.10_PM.png "Screen Shot 2021-10-31 at 3.53.10 PM.png")

**Step 5:** Provide the list ID or segment name for the lists/segments you created to Regal by emailing [[email protected]](/cdn-cgi/l/email-protection#592a2c2929362b2d192b3c3e3835773036)

**Step 6:** Create a Klaviyo API key for Regal and email it to [[email protected]](/cdn-cgi/l/email-protection#3e4d4b4e4e514c4a7e4c5b595f52105751)

1. Click on your company name on the top right corner of your Klaviyo account
2. Click the Settings dropdown
3. Select API Keys

![340](https://files.readme.io/a618b93-Screen_Shot_2021-10-31_at_4.01.30_PM.png "Screen Shot 2021-10-31 at 4.01.30 PM.png")

4. Click *Create Private API Key* button.

![2506](https://files.readme.io/915c20e-Screen_Shot_2021-10-31_at_4.02.32_PM.png "Screen Shot 2021-10-31 at 4.02.32 PM.png")

5. Name the key "Regal"
6. Click on the eye icon to reveal your API key
7. Copy the API key and email it to [[email protected]](/cdn-cgi/l/email-protection#d3a0a6a3a3bca1a793a1b6b4b2bffdbabc)

Updated about 1 year ago

---
