---
source: "https://developer.regal.ai/reference"
---

# FAQ

Ask AI

Below are some commonly asked questions about the Regal Custom Events API and how identifiers work.

## Can I send data to Regal from other sources in addition to the Regal API?

Yes, Regal helps you build a unified view of your customer by bringing together customer data from different systems into a single contact profile. You can send customer data to Regal from any of your data sources such as Segment, Salesforce, Calendly, as well as to the Regal API. For many of these sources you can leverage our native integrations (visit Settings > Integrations in your Regal Account).

## How does Regal stitch together contact profiles from different data sources?

Every piece of data you send to Regal is attributed to a contact and stored on a contact profile. Identity resolution is the process of determining which contact profile incoming data should be added to. Regal supports the following identifiers:

- **userId** - this is meant to represent your application/database id - i.e., the unique identifier for a user in your application. Ideally this id is consistent across all your sources of data and can be used to connect data from across sources to the right contact profile, but we understand that's not always the case.
- **A phone number** - a contact can have one or multiple phone numbers. Phone can also be used to stitch data from across sources to the right profile.
- **An email** - a contact can have one or multiple emails. Email can also be used to stitch data from across sources to the right profile.

There are three steps in the Regal identity resolution process:

1. **An event is sent to Regal** - This event can include one or multiple identifiers.
2. **Regal looks for a matching contact profile** - Regal iterates through the identifiers included in the event in the order **primary phone > any other phone > primary email > any other email > userId** to see if there's already a profile with a matching identifier.
3. **Regal adds the event to a matching profile if one is found, or it creates a new profile** - As soon as a matching profile is found, the event is added, otherwise we will look for a match using the next identifier. If no matches are found, Regal creates a new profile.

## Can a contact have just an email? Or just a phone?

Yes - a contact is defined in Regal as has having at least one email or phone number. They don't need both to be a contact.

## Does a contact have to have a userId (External Id)?

No - a contact is defined in Regal as having at least one email or phone number. There is not requirement to have an External Id. While it's ideal for a contact to eventually have an External Id, once your application has assigned one, there are many cases where a contact would not have an External Id. For example, if they've filled out a lead form, but have not yet created an account in your system. Or they were created through an inbound call and don't have an account in your system.

## Can a contact have more than phone number (or email)?

Yes - as of July 2023, Regal has added support for a contact to have multiple phones and/or multiple emails on its profile. Each phone can have a custom label and carry its own opt in status. Only one phone or email can be considered "Primary" at a time, and only a primary phone can receive campaigns from journeys, but any phone (or email) can be contacted by an agent. The primary phone can be updated programmatically or by an agent.

## Is there a limit on the number of phone numbers / emails within the phones / emails object?

No - there is no limit on the number of phones or emails that a contact profile can have.

## Which phone number will a journey create SMS or call campaigns for?

While any phone/email on a profile can be contacted by an agent, only a primary phone can receive campaigns from journeys.

## Can we change the phone number a contact received campaigns to while they are midway through a journey?

Yes - each time a contact reaches an SMS or call campaign node in a Journey, whatever is the Primary phone at that moment what the journey will create the SMS message or call task for.

## Can more than one contact share the same phone number, such as a landline?

No - currently in Regal, a phone number cannot be shared across more than one contact profile. If the phone number already exists on a contact profile, and a new event comes with that phone (even if the new event has different userId or email than the existing contact profile with that number), Regal's identity resolution process will look for a matching contact profile by iterating through the identifiers included in the event in the order **primary phone > any other phone > primary email > any other email > userId** to see if there's already a profile with a matching identifier. As soon as a matching profile is found, the event is added, otherwise we will look for a match using the next identifier. If no matches are found, Regal creates a new profile. So in this case, we would find a matching profile and any info from that incoming event will just be added to that existing profile rather than creating a second one that shares the same phone number.

## Is it possible for one of my users to have duplicate/multiple contact profiles created in Regal?

Yes - depending on your implementation and use cases, there can be cases where multiple profiles are created for a single contact in Regal, however, only the latest profile for that customer will appear in your Audience. These should be the exception not the norm, but here is a series of events for example, that could cause this:

1 - A prospect fills out an email lead form and you first send an event that just includes the email of a contact as the only identifier:

JSON

```
{
  "traits": {
    "emails": {
      "[email protected]":{}
  }},
  "name": "Email Lead Created"
}
```

This event will generate contact profile A with just the email [[email protected]](/cdn-cgi/l/email-protection#c3b1a6a1a6a0a0a283b1a6a4a2afeda2aa).

2 - That same prospect sees a phone number on your site and calls in from their phone: +19545582399. This will create contact profile B with just the phone +19545582399.

At this point, neither your application nor Regal know that these contact profiles relate to the same prospect.

3 - Later, encouraged by their conversation with your agent, that same prospect continues to fill out and complete your onboarding form. In that form, they add their email, phone and some other information. It even creates an account for them in your application. You send Regal an event like the following:

JSON

```
{
  "userId": "XPSX-1922-XXJF-1054",
  "traits": {
    "emails": {
      "[email protected]":{}
  },
   "phones": {
      "+19545582399":{}
  }},
  "name": "Application Submitted"
}
```

Now, Regal's identity resolution process searches for a matching contact profile, first by phone and finds profile B. This event will be added to profile B. While, profile A still exists, only profile B (as the latest to be updated) will appear in your Audience. It will be missing the initial "Email Lead Created" event; however, all events from then on that contain any one of the identifiers userId (XPSX-1922-XXJF-1054), phone (+19545582399) or email ([[email protected]](/cdn-cgi/l/email-protection#760413141315151736041311171a58171f)) will be added to profile B because it's now known those all belong to the same person.

## Can I merge two contact profiles into one?

  

## Can I remove a phone number (or email) from a contact's profile?

Not at this time in a self serve way (email [[email protected]](/cdn-cgi/l/email-protection#ec9f999c9c839e98ac9e898b8d80c28d85) and our team can merge them for you). Note: removing a phone or email, will not remove historical events or conversations related to those phones/emails, but it will remove the identifiers so that future events for those phones/emails will not match to profile they were removed from, and will create a new contact profile.

## Can I update the userId (External Id) of a contact?

Yes - the userId (which appears as External Id in the Regal app) is meant to represent your application/database id - i.e., the unique identifier for a user in your application. A contact can only have one **userId** at a time, and while **userId** should be consistent across a customer’s lifetime, it can be updated. To update the userId of a contact, simply send in an event that contains a different identifier of the contact (a phone and/or an email) with the new **userId**.

For example, let's say initially your application used numeric ids and you created a contact with **userId** `123`:

JSON

```
{
  "userId": "123",
  "traits": {
   "phones": {
      "+19545582399":{}
  }}
}
```

Later, you want to replace your numeric ids with uuids. In order to update the **userId** from `123` to `03fb8dd368d34c4f85225fbd1933ba3a` for example, you can send the following:

JSON

```
{
  "userId": "03fb8dd368d34c4f85225fbd1933ba3a",
  "traits": {
   "phones": {
      "+19545582399":{}
  }}
}
```

What's required is that in this event that you update your **userId**, you must also include another identifier - a phone or an email - of the contact, so that Regal's identity resolution process knows which contact profile to match it to.

This will update the **userId** (External Id in the Regal app) of that contact to `03fb8dd368d34c4f85225fbd1933ba3a`. And future events sent with that External Id as the identifier will match to that profile.

## Can I remove the userId (External Id) of a contact (and start using it for a different contact)?

No - External Ids are expected to be unique and not reused across contacts. As such, currently there is no way to remove a userId of a contact. We only support updating **userId**, but the old userId's continue to be associated with that contact, so if you sent in a new event with that old **userId**, it would still match to the original profile it belonged to. If you have a use case for this, please let your customer success rep know so that we can understand it better and suggest alternatives.

Updated 11 months ago

---
