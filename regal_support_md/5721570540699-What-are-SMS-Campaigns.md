---
id: 5721570540699
title: "What are SMS Campaigns?"
html_url: "https://support.regal.ai/hc/en-us/articles/5721570540699-What-are-SMS-Campaigns"
updated_at: "2025-05-02T20:22:15Z"
---

# What are SMS Campaigns?

### SMS campaigns let you craft and send personalized, automated SMS messages to your customers.

To create an SMS campaign, title the campaign, select SMS as the message type and select the phone number you’d like the message to be sent from.

![Screen_Shot_2022-05-24_at_1.43.52_PM.png](https://support.regal.ai/hc/article_attachments/6158879690395)

Then add your message content and preview your message on the right.

In addition to text content, you're able to use emojis (📱 👑 🤩 ) and reference contact attributes in the SMS content.

#### SMS Personalization with Handlebars

You can even include variables in the message content to personalize your campaigns. For example, you can reference the Contact’s first name by adding the {{{firstName}}} variable to the message.

Any Contact attribute that you are sending to Regal can be referenced in the SMS campaign, including custom properties by prepending them with customProperties e.g., {{{customProperties.subscriptionStatus}}} , {{{customProperties.dog\_breed}}} - or Regal properties by prepending them with rvProperties e.g., {{{rvProperties.friendly\_timezone}}}.

To see the full list of attributes available for you to reference, go to the **Audience page**, click on a contact's name or phone number and you'll see a list of attributes you can use.

#### Handlebars can also be used to help format SMS content. Examples are below.

| Function | Description | Example Input | Example Output |
| --- | --- | --- | --- |
| capitalize | Capitalizes the referenced property. | {{{capitalize firstName}}} | rebecca --> Rebecca |
| default | Specifies a fallback default if a referenced property doesn't exist. | {{{default firstName "hello"}}}, nice to meet you | Rebecca, nice to meet you  hello, nice to meet you |
| ordinalize | Ordinalizes a number. | {{{ordinalize 28}}} | 28th |
| moment (Date and Time) | Returns the current date and time in a readable format. | {{{moment "dddd, DD MMMM YYYY HH:mm"}}} | Thursday, 06 October 2022 16:06 |
| moment (Time) | Returns the current time in a readable, 24-hour format. | {{{moment "HH:mm"}}} | 16:06 |
| moment (Date and Time) | Returns a specified (epoch timestamp) date and time in a readable format. | {{{moment 1664644416000 format ="dddd, DD MMMM YYYY HH:mm"}}} | Saturday, 01 October 2022 17:13 |

#### Using Shortened URLs

When sending SMS messages containing shortened URLs to users in the United States, use a dedicated, branded short domain that belongs to your business.

Sending messages containing unbranded URLs is a common technique used for fraud/malicious messages. Because of this, consumers are less likely to click on the link, because they are not confident of where the landing page will take them to. Additionally, the wireless carriers may filter/block such messages containing unbranded URLs.

According to T-Mobile’s Code of Conduct, and US carrier expectations in general, a short link should be both:

- proprietary – a dedicated custom domain that belongs to your business, not a free shared public link shortener
- properly branded – the domain aligns with the message sender identified in the text message itself

#### MMS Media URL

You can include an image in your campaign by adding a publicly available link that ends in .gif, .png or .jpg, and preview how that will appear. The image must be less than 5 MB in file size. Recommended aspect ratios are 4:3, 15:9, 3:2.

You can [send a Test SMS](#h_01JSCT108CP9TDACYSQAERXGD2) to see how the message will look.

**MMS Media Personalization with Handlebars**

You can use variables to include dynamic, personalized images in your MMS campaigns. This allows you to send different images to different Contacts based on the URL in the referenced attribute (instead of using the same static URL for every Contact).

How to Set Up Dynamic MMS:

1. Store the image URL(s) in the desired contact attribute

2. Enter this attribute into the MMS Media URL field using the handlebars syntax (eg. {{{customProperties.dynamicImageUrl}}}

![](https://support.regal.ai/hc/article_attachments/36191629708955)

3. (Optional) Set a default image URL for the campaign. If configured, the campaign will fall back to this default image if the contact attribute is: missing, empty, contains an invalid URL, or contains an invalid Image URL.

- - To configure a default MMS URL: Within the handlebars of the contact attribute, add the word default followed by a space before the contact attribute. Then after the contact attribute, enter the default image URL in quotation marks("").
    - Sample format: **{{{default customProperties.personalizedImageUrl "https://example.com/default-image.jpg"}}}**

**![](https://support.regal.ai/hc/article_attachments/36191623101211)**

Dynamic MMS Behavior to Expect:

- If you've entered a contact attribute as the MMS Media URL (with no default configured):
  - If the attribute is empty, doesn't exist, contains an invalid URL, or contains an invalid Image URL, the SMS will still be sent *without the MMS image*(text only).
- If you've set a default value with your contact attribute:
  - If the attribute is empty, doesn't exist, contains an invalid URL, or contains an invalid Image URL, the SMS will still be sent *with the default MMS image used.*
    - If the default URL is empty, doesn't exist, is an invalid URL, or is an invalid Image URL, the SMS will still be sent *without the MMS image*(text only).

#### Conversion Event

If your SMS campaign is driving toward a certain action you want the customer to take, add the name of that Conversion event here. In the future, this field may be used for reporting purposes.

![SMS Campaign Preview](https://files.readme.io/2834c04-sms.png "sms.png")

Once your campaign is ready to be triggered, you can save it as Ready.

> ### 📘 Test Your Campaign!
>
> After saving your campaign, you can preview it and even send yourself a test by putting a phone number into the **Message Preview** input and clicking either **Preview** to display what the SMS would look like if sent to the phone number provided, or **Send test** to actually send a test SMS.
>
> Note, you must save your campaign before you can preview it.