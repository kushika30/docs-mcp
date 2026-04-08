---
id: 37895120749851
title: "Enable Local Presence to Boost Answer Rates"
html_url: "https://support.regal.ai/hc/en-us/articles/37895120749851-Enable-Local-Presence-to-Boost-Answer-Rates"
updated_at: "2025-06-11T15:01:07Z"
---

# Enable Local Presence to Boost Answer Rates

## What Is Local Presence?

Local presence lets you call prospects from a phone number that shares their area code, so they’re more likely to pick up.

---

## Before You Start

- Reach out to support@regal.ai to purchase any new phone numbers you’ll need for local presence.
- Once the numbers are purchased, Regal Support will send you a list of the new numbers with their corresponding sub-brand attributes (used to match against rvProperties.sub\_brand on the contact profile). Regal Support will also create a custom event that lets you update rvProperties.sub\_brand directly from your journeys.

---

## Step 1: Choose How to Match Phone Numbers with Prospects

Decide how you want to match prospects to numbers. Common options:

- **Area code** (e.g. contacts with a 609 number get a 609-area-code caller ID)
- **Branch** (e.g. contacts assigned to “New York” get calls from a New York number)
- **Lead Type** (e.g. students receive calls from a college’s dedicated line, or patient contacts are called from their provider’s number)

---

## Step 2: Tag Your Contacts

1. **Add an Update Contact node**  
   In the journey(s) where new leads enter Regal, drag in an **Update Contact** action. This can be added at any point before a task is generated or an SMS is sent.
2. **Name the event**  
   Under **Trigger an Event**, enter a descriptive name, for example “Update Sub-Brand.” (It won’t affect functionality, but you’ll recognize it in your event history.)
3. **Configure the sub\_brand property** (the value for this property must match the Sub-Brand property on the phone lines on the [Active Phone Numbers page](https://app.regal.io/settings/phone-numbers?page=1&pageSize=25) exactly)
   - **Property Name:** sub\_brand (exactly)
   - **Data Type:** string
   - **Property Value:** choose one:
     - **Dynamic:** Pull directly from the contact (e.g.{{contact.rvProperties.area\_code}} )

       ![](https://support.regal.ai/hc/article_attachments/37895643121563)

       **Static:** Hard-code a value (e.g. "daniel\_direct\_line" or "provider\_line")

       ![](https://support.regal.ai/hc/article_attachments/37895643125531)
     - **Hybrid:** Combine both. This is useful if you need to map multiple numbers within the same area code (e.g. {{contact.rvProperties.area\_code}}\_1 and {{contact.rvProperties.area\_code}}\_2

       ![](https://support.regal.ai/hc/article_attachments/37895674199835)
4. **(Optional) Add more updates**  
   If you need to set other contact attributes or properties, add them here.
5. **Save the node**

This ensures every new lead gets the correct sub\_brand value for local-presence dialing.

---

## Step 3: Assign Numbers to Attributes

1. Go to the [**Active Phone Numbers page**](https://app.regal.io/settings/phone-numbers?page=1&pageSize=25) in the Regal app.
2. For each number you want to use for local presence:
   - Edit its **Sub-Brand** to match the attribute value (e.g. “609” for area-code 609 numbers).
   - Remember: you can’t reuse the same Sub Brand on two different numbers.
3. If your contacts have an attribute you haven’t bought a number for, they’ll be dialed from your **Default Number**.
   - For example, if you set up sub-brands using area codes and a contact has a value of 212 for rvProperties.sub\_brand but you don't have any 212 numbers, the campaign will automatically use the default number for your account.

---

## Step 4: Enable Local Presence in Your Campaign

1. **Navigate to the** [**campaigns page**](https://app.regal.io/campaigns?pageSize=25&orderBy%5B0%5D%5Bkey%5D=updatedAt&orderBy%5B0%5D%5Bvalue%5D=DESC&page=1) and select any campaign you would like to use local presence.
2. **Find the “From Number” field** and choose **“Set dynamically based on contact profile.”**
   - This tells Regal to match the sub-brand on the phone line to each contact’s sub\_brand value.

**Override Local Presence:** If you want certain calls, such as your first outreach, to use a single branded line instead of a local number, simply pick a fixed “From Number.”

---

## Step 5: Test & Go Live

1. Push a test contact through the journey.
2. Verify their contact record shows the correct **sub\_brand**.
3. Confirm they receive the call from the matching phone number.

Once it’s working, your outbound calls will automatically come from the number most familiar to each contact, driving higher answer rates and better engagement.