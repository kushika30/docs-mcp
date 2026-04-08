---
source: "https://developer.regal.ai/reference"
---

# Overview

Ask AI

Use the Regal API to send contact and event data to Regal.

This guide describes how to call the Regal API directly. This is typically the best integration option if a home grown CRM is going to be the main source of data for Regal Voice or any other source for which Regal Voice doesn't have a native integration.

The below documentation describes the required event format and endpoint.

# Authentication

Regal Voice uses API keys to authenticate requests. An API key must be included in the **Authorization** header for all requests unless otherwise noted.

For an API key please, reach out to [[email protected]](/cdn-cgi/l/email-protection#3b484e4b4b54494f7b495e5c5a57155a52).

# Rate Limits

API requests are rate limited to 300 requests per second. Reach out to [[email protected]](/cdn-cgi/l/email-protection#1f6c6a6f6f706d6b5f6d7a787e73317e76) if you require higher rate limits.

# Custom Events Endpoint

The Regal Voice API is designed as a single Custom Events endpoint (<https://events.regalvoice.com/events>) that lets you creates a contact, update a contact or add a custom event to a contact’s profile.

# Contacts

In Regal, a contact is defined as someone who is "contactable" in Regal - to be contactable they must have at least one phone or email. A contact is meant to represent a user of your application.

## Identifiers

Every piece of data you send to the Regal Custom Events Endpoint is attributed to a contact and stored on a contact profile. Identity resolution is the process of determining which contact profile incoming data should be added to.

**How Regal identifies contacts**

Identifiers tell us who an event belongs to. Identifiers can include:

- **userId** - this is meant to represent your application/database id - i.e., the unique identifier for a user in your application. A contact can only have one **userId** at a time, and while **userId** should be consistent across a customer’s lifetime, it can be updated. We recommend using database IDs instead of simple email addresses or user names, because database IDs don't include PII. The **userId** will appear as External ID in the Regal app, and should not be shared across users.
- **A phone number** - a contact can have multiple phone numbers
- **An email** - a contact can have multiple emails

There are three steps in the Regal identity resolution process:

1. **An event is sent to Regal** - This event can include one or multiple identifiers.
2. **Regal looks for a matching contact profile** - Regal iterates through the identifiers included in the event in the order phone number > email address > external id to see if there's already a profile with a matching identifier.
3. **Regal adds the event to a matching profile if one is found, or it creates a new profile** - As soon as a matching profile is found, the event is added, otherwise we will look for a match using the next identifier. If no matches are found, Regal creates a new profile.

## Create or Update a Contact

To **create** a contact in your Audience, you must at least include one phone or email in your API call because in a contact is defined as someone who is "contactable" in Regal, and to be contactable, they must have at least one phone or email.

To **update** a contact, you must include at least one of the following identifiers in your call:

- userId
- phones
- emails

However, you must ensure you've sent at least one event in the past tying these identifiers together. For example, if you first send an event that includes **phone** and **userId**, you can subsequently send events with just **userId** and they will tie to the correct contact profile. Same with **email**; if you first send an event with **phone** and **email**, you can subsequently send events with just email, and they will tie to the correct contact profile.

**We recommend your API calls include a userId as often as possible.**

**Traits** in your events get added to the contact's profile in Regal as contact attributes. There are a standard set of supported traits including:

- firstName
- lastName
- phones
- emails
- address
- Any other traits you add become custom properties on a contact's profile in Regal.

You can include also include originalTimestamp to indicate when the event originally happened and eventSource to indicate the source of the data.

Here's an example API call that will create a contact with the custom properties: salaryBracket, employmentStatus, and savingsGoal and opt them in to receive outbound phone calls.

JSON

```
{
 "userId": "123",
 "traits": {
 	"phones": {
    "+19545552399": {
			"voiceOptIn":{
     		"subscribed": true}
    }},
  "firstName": "Rebecca",
 	"lastName": "Greene",
 	"salaryBracket": "$100k-$500k",
 	"employmentStatus": "Employed",
 	"savingsGoal": "New Home"
},
"eventSource": "crm"
}
```

### Phones and Emails

As of July 2023, Regal has added support for a contact to have multiple phones and/or multiple emails on its profile.

The **phones** and **emails** objects allow you to include one or many phones/emails, and for each phone/email specify:

- **isPrimary** as `true` or `false`
- **label**
- (for phones only) **voiceOptIn**, **smsOptIn**
- (for emails only) **emailOptIn**

**You do not need to include all phones or emails in a single payload. If you first find out about only one phone number of a customer, and you later find about about other phone numbers, you can just add the new phone numbers to the phones trait and we will add those phones to the contact profile.**

**Primary:** The first phone added to a contact profile is set as the primary phone. If you provide multiple phone numbers, you can specify which to set as primary by specifying **isPrimary** as `true` for that number. For the other phones, you may explicitly specify **isPrimary** is `false` or just leave it out. If no phones have **isPrimary** as `true`, there is no pre-existing primary phone for that contact, then we will sort the phones alphanumerically and pick the first as primary. You can always update which phone is primary either via API or the Agent Desktop. **Journey triggered campaigns (SMS or call tasks) can only be sent to the primary phone.**

**Labels:** Labels are optional. If there is no label set for a phone/email, it will just appear as "Phone" or "Email" in the Regal UI. Labels can be added after the fact by agents or API. Common uses of labels include things like "Mobile" or "Landline", "Home" or "Work", "Weekend" or "Evening" or "Daytime", or even "Primary", "Backup 1", "Backup 2". Use them however they make sense for your use case.

**Opt In:** Each phone/email supports its own optIn. Within each opt in object, only **subscribed** is required if you want to subscribe (`true`) or unsubscribe (`false`) that phone or email; **timestamp**, **ip** and **text** are optional, but useful for maintaining an audit trail.

Below is an example API call that adds 4 phones and 3 emails to a contact profile. The +11115555555 number is set as the primary phone. It is subscribed to voice, and unsubscribed from SMS, and labeled as "Mobile". The other 3 phones are added to the contact profile and called "Work", "Home" and just "Phone" (since no label was specified for this fourth number). The email [[email protected]](/cdn-cgi/l/email-protection#87e2ffe6eaf7ebe2a9f7f5e8e1eeebe2c7f5e2e0e6ebf1e8eee4e2a9e4e8ea) is set as the primary email, subscribed and labeled as "Personal", etc.

JSON

```
{
    "userId": "xyz",
    "traits":{
        "phones": {
            "+11115555555": {
                "label": "Mobile",
                "isPrimary": true,
                "voiceOptIn":{
                    "subscribed": true,
                    "ip": "127.0.0.1",
                    "text": "I agree to receive marketing calls",
                    "timestamp": "2000-08-20 09:12:28 -04:00"
                },
              //it's not required to have all items of the optin
                "smsOptIn":{
                    "subscribed": true
                }
            },
            //for this next phone number no optin is provided; it is not necessary to specify isPrimary false. 
            // Leaving out accomplishes same thing
            "+13335555555":{
                "label": "Work"
            },
            "+12225555555":{
                "label": "Home",
                 "voiceOptIn":{
                    "subscribed": true,
                    "ip": "127.0.0.1",
                    "text": "I agree to receive marketing calls",
                    "timestamp": "2000-08-20 09:12:28 -04:00"
                   },
              "smsOptIn":{
                    "subscribed": true,
                    "ip": "127.0.0.1",
                    "text": "I agree to receive marketing calls",
                    "timestamp": "2000-08-20 09:12:28 -04:00"
                   }
            },
           //for this next phone number, no details are specified which is ok
            "+144455555555": {}
          
        },
        "emails":
        {
            "[email protected]":
            {
                "label": "Personal",
                "isPrimary": true,
                "emailOptIn":
                {
                    "subscribed": true
                }
            },
            "[email protected]":
            {
                "label": "Work",
                "isPrimary": false,
                "emailOptIn":
                {
                    "subscribed": false
                }
            },
            "[email protected]":
            {
                "label": "Other Work"
            }
        }
    }
}
```

> ## 📘
>
> Backwards compatibility with phone and email
>
> For customers who implemented Regal prior to July 2023 when support was added for phones and emails, the endpoint is backwards compatible. For events you currently send where you don't include **phones** or **emails**, but just **phone** and/or **email**, those values are defaulted to the primary phone and email. Over a series of events with shared **userId** but different phone values for example, that will still add those multiple phones to the same contact profile, but the latest phone will always become the primary. We also continue to support the optIn[] array which simply applies to whatever phone/email is specified in the event.

#### Updating the Primary Phone or Email of a Contact

Let's say on a call or on your website, you learn from the customer above that +1222555555 is their new primary phone and they provide opt in. You also learn that the +14445555555 number is actually their husband's cell. To update the primary phone to +12225555555 and subscribe it to calls and sms, and set a label for the +14445555555 number, send the following API call:

JSON

```
{
    "userId": "xyz",
    "traits":{
        "phones": {
            "+12225555555":{
                "isPrimary": true,
                "voiceOptIn": {
                  "subscribed": true
                },
                "smsOptIn": {
                  "subscribed": true
                }
            },
            "+14445555555": {
            		"label": "Husband's Cell"
            }
        }
    }
}
```

### Opt In

In order to trigger outbound calls or SMS from a Regal journey, you must collect the user’s explicit opt in for those channels. Opt in is by channel. Supported channels include voice, sms and email.

Anytime you collect opt in information, you should pass that information to Regal.

#### Opt In Scenarios

- No opt in option is presented to a user, don't include any opt in fields. (In the Regal Voice app, contact's subscription status will appear as "No Status")
- If a contact opts in to voice, **voiceOptIn** should contain **subscribed** set to `true` (In the Regal app, contact's subscription status will appear as "Subscribed"). Same applies for **smsOptIn** and **emailOptIn**.
- If a contact opts out of voice, **voiceOptIn** should contain **subscribed** set to `false` (In the Regal app, contact's subscription status will appear as "Unsubscribed"). Same applies for **smsOptIn** and **emailOptIn**.

**Make sure that if you update the primary phone/email of a contact, you are intentional about what the opt in status is of that new primary phone/email.** Technically, a contact is not opted in across all phones and emails - instead each phone and email carries its own opt in, which is consistent with regulatory standards. Therefore, if primary phone A has voice opt in but another phone B does not, and you update phone B to be primary, the contact will not be able to receive journey-triggered calls/texts unless you also provide optIn for phone B. If (when you receive opt in from customers) you are receiving it for all of the phones they provide at once, just make sure to specify that in your API call by including **voiceOptIn** with **subscribed** equal to `true` (and same for SMS/email, etc.) by including it for each phone/email.

# Add an Event

To create an event to add to a contact's profile (rather than just creating/updating the traits of a profile), send through a **name** of the event. And if there are any properties for that event, include those in the **properties** object.

In order for an event to be associated with a contact, you must include at least one of the following identifiers in the API call:

- userId
- phones
- emails

Here is an example payload for an event called Student Enrolled:

JSON

```
{
"userId": "xyz",
"name": "Student Enrolled",
"properties": {
  "course_title": "Introduction to Python",
  "course_amount": "$500",
  "course_start": "2021-11-21"
},
"originalTimestamp": "2000-03-06 11:12:28 -04:00",
"eventSource": "zapier"
}
```

> ## 📘
>
> Contact traits and event information in a single API call
>
> You can include both contact traits and event information in a single call. For example, if there's an event on your app called 'Sign Up Completed' - you can both create a 'Sign Up Completed' event and create or update the contact with whatever traits you collected in the Sign up form in a single call to the Regal Voice API.

## Common Events by Industry

If you're wondering which events to send to Regal to get started, here are some common events by industry that our customers send to Regal.

| Use Case | Education | Home Services | Healthcare | Subscription eComm |
| --- | --- | --- | --- | --- |
| Acquisition | - Lead Submitted  - Application Started  - Application Submitted  - Interview Scheduled  - Interview Completed  - Deposit Paid  - Student Enrolled | - Service Request Started  - Service Request Submitted  - Service Booked  - Service Request Completed  - Payment Completed | - Appointment Booked  - Monthly Wellness Approaching  - Patient Onboarded  - New Patient Submitted  - Appointment Completed | - Email Submitted  Question Flow Started  - Phone Submitted  - Question Flow Completed  - Plan Selected  - Purchase Completed |
| Retention | - Refund Requested  - Class Dropped | - Booking Canceled  - Service Request Issue | - Appointment No Show  - Appointment Canceled  - Appointment Not Scheduled | - Skip booking  - Pause Subscription  - Cancel Subscription Flow Started  - Subscription Save Offer Accepted  - Subscription Canceled |

| Use Case | Insurance | Banking | Lending | Legal | Tax |
| --- | --- | --- | --- | --- | --- |
| Acquisition | - Quote Requested - Priority Quote Generated - Quote Approved - Advisor Call Scheduled - Advisor Call Completed - Quote Signed | - Application Submitted - Account Approved - HNW Account Submitted - Card Activated - Deposit Submitted - Transfer Initiated | - Credit Check Initiated - Application Submitted - Rates Checked - Loan Funded - Payoff Requested - Loan Accepted | - Intake Submitted - Attorney Matched - New Intake | - Personal Advisory Request - Tax Assessment Completed - CPA Matched - CPA Job Completed |
| Retention | - Quote Rejected - Quote Denied | - Deposit Failed - Transfer Failed - Pre-Approval Offer Declined - Withdrawal Initiated | - Offer Rejected | - Intake Failed - Match Failed | - Tax Filing Incomplete |

# Bringing It All Together

Below is a logical series of events for an example onboarding flow, and how you could send events to Regal:

1 - Prospect visits your site and fills out a lead form that includes their email and opt in; You create a user in your application/database

JSON

```
{
"userId": "123",
"traits": {
  "emails": {
    "[email protected]":{
      "emailOptIn": {
        "subscribed": true,
        "text": "I agree to received marketing emails",
        "timestamp": "2000-08-20 09:12:28 -04:00"
      }
    }
  }
},
"name": "Lead Created",
"eventSource": "Application Flow"
}
```

2 - The next page in the onboarding flow asks for a phone and opt in

JSON

```
{
"userId": "123",
"traits": {
  "phones": {
    "+19545582399":{
      "voiceOptIn": {
        "subscribed": true,
        "text": "By clicking the 'Submit' button below, I agree to receive automated marketing SMS and calls",
        "timestamp": "2000-08-20 09:12:28 -04:00"
      },
      "smsOptIn": {
        "subscribed": true,
        "text": "By clicking the 'Submit' button below, I agree to receive automated marketing SMS and calls",
        "timestamp": "2000-08-20 09:12:28 -04:00"
      }
    }
  }
},
"name": "Phone Submitted",
"eventSource": "Application Flow"
}
```

3 - The final page asks for more info to complete onboarding

JSON

```
{
"userId": "123",
"traits": {
  "age": 23,
  "educational_attainment": "GED",
  "address": {
    "street": "525 Cinema Drive",
    "state": "Florida",
    "city": "Cooper City",
    "zipcode": "33026"
  }
},
"name": "Application Completed",
"properties": {
  "program": "Phlebotemy Course",
  "course_type": "In Person"
},
"eventSource": "Application Flow"
}
```

4 - Once the prospect becomes a member, they visit their account profile and update the label of their first phone and add another phone you can use to contact them.

JSON

```
{
"userId": "123",
"traits": {
  "phones": {
    "+19545582399":{
      "label": "mobile"
    },
    "+15155552355":{
      "label": "home"
    }
  }
},
"name": "Account Info Updated",
"eventSource": "Account Page"
}
```

# Warnings

## Data Types

> ## ❗️
>
> Contact attribute & event property data types
>
> Each contact attribute or event property has an associated data type. Once a property is cast, the data type cannot be overwritten, and API calls attempting to set or update an existing property with a value that cannot be coerced into the appropriate type will fail in journey conditional nodes. See more details about [acceptable data types here](https://regalvoice.slab.com/posts/property-data-types-name-limits-24yhvlg7).

## Event Property Names

> ## 🚧
>
> Event property names
>
> Your Regal account can contain up to 8,000 unique event property names. If the same field name is used on various events, each with a different event name, it counts multiple times against this limit. Mapping events to a single event name, and using properties and categories to capture specific information, cuts down on the number of field names in use. See more details [here](https://regalvoice.slab.com/posts/property-data-types-name-limits-24yhvlg7).

## Requirements to Trigger a Journey

> ## 🚧
>
> Only events related to a contact can be used to trigger a journey
>
> In order for an event to be used to trigger a journey in Regal, there must be an associated contact for whom you've provided a phone and/or email. For example, if you send in an event that only includes **userId** and **name** (without including a **phone** or **email** in the **traits**) AND you've never previously sent an event that **userId** and a **phone** or **email** in the **traits** (i.e., you've not created a contact), then the event will not be eligible to trigger a journey.

## Test your integration / Run in Postman

1 - You'll need your API key first. *Email [[email protected]](/cdn-cgi/l/email-protection#b8cbcdc8c8d7caccf8cadddfd9d496d9d1) to get one, if you don't already have it.*

2 - You can use the Regal Public Workspace on Postman to quickly send some test events and familiarize yourself with the payloads:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17258986-81c59f40-7e22-480e-bb40-aa29250b0e35?action=collection%2Ffork&collection-url=entityId%3D17258986-81c59f40-7e22-480e-bb40-aa29250b0e35%26entityType%3Dcollection%26workspaceId%3D87d54949-c69c-47fe-aab6-0799d0b0859d)

3 - Once you've sent an event, go to the Recent Activity page in the Regal app to view incoming events. Only events which include a "name" will appear on this page.

4 - Go to the Audience page in the Regal Voice app to view your contacts and profile information - remember in order for a contact to appear in your Audience they must have a phone.

Updated 9 months ago

---
