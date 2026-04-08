# Identity Resolution Settings

Every piece of data sent to Regal is attributed to a contact and stored on a contact profile. This includes custom events you send to Regal from other data sources (e.g., Segment, API, etc) and Regal events (e.g., call.completed, sms.received, etc.) Identity resolution is the process of determining which contact profile that event data should be added to. Generally, the order of operations is as follows:

1. An event containing one or more identifiers is produced/sent to Regal
2. Regal uses the identifiers according to the Identity Resolution Settings configured for your account to look for a matching contact profile.
3. If a matching profile is found, Regal adds the event and makes the necessary updates to the contact profile.
4. If no matching profile is found, Regal creates a new contact profile and adds the event there.

# Identifiers

Regal considers a few types of identifiers by default when looking for a matching contact profile:

**userId** (displayed as "External ID" in the Regal app) - meant to represent your application/database ID - i.e., the unique identifier for a user in your application. While `userId` is *typically* consistent across a customer’s lifetime, it can be updated. However, in the Regal app, a contact will only display the latest `userId` provided as External ID. `userId` should not be shared across users. Additionally, we recommend using a database or CRM IDs instead of sending emails or usernames as `userId` to guarantee uniqueness and not expose PII.

**phone** - a telephone number. A contact can have multiple phone numbers. While only one may be designated their primary phone number, even-non primary phones are used as identifier to find and match to profiles.

**email** - an email address. A contact can have multiple emails. While only one may be designated their primary email address, even-non primary emails are used as identifier to find and match to profiles.

**Integration IDs** - Regal also considers identifiers from our native Salesforce and Hubspot integrations, collectively called Integration IDs:

- **Regal's native Salesforce integration:** by default will include either the `salesforce_account_id`, `salesforce_contact_id`, or `salesforce_lead_id`, referring to the record ID of the object updated in your Salesforce account. ([read more here](https://developer.regal.io/docs/salesforce#sending-unique-identifiers-to-regal)).
- **Regal's native HubSpot integration:** by default will include the `hubspot_id` of the contact record updated in your HubSpot account.

**Anonymous IDs** - these are pseudo-identifiers from our native Segment and mParticle integrations which are used to track browser sessions before any other identifying information has been collected.

# Using Identifiers to Find Matching Profiles

Two settings apply when Regal uses identifiers to look for a matching contact profile: (1) Lookup Order and (2) Uniqueness Constraint.

## Setting 1: Lookup Order

This is the priority order of the different identifier types listed in the previous section that Regal will cycle through in order to find a matching contact profile. You may specify a global look up order that will apply to all of your data sources, or a different lookup order per source.

For example, let's say you specify the following look up order: `[external id, primary phone, phones, primary email, emails]`. For each event, Regal will search across all existing contact profiles to see if any have the same external\_id (aka `userId`) as the event because that is the first identifier in the lookup order. If so, the event will get added to that profile. If not, Regal will search by the next identifier in the lookup order: the primary phone. And so on until a matching profile is found. The search process stops as soon as a match is found even if additional identifiers are present. If no contact profile matches, on any of the identifiers, Regal will create a new contact profile and add the event to it.

## Setting 2: Uniqueness Constraint

A uniqueness constraint can be applied to Integration IDs and/or the `userId` (aka External Id), such that a single profile can have only one value for the identifier and it cannot be updated. For example, if an event containing a new `userId` finds an existing profile via a match on phone, but that existing profile already has a different value for `userId`, this constraint will force the system to create a new profile from the event rather than update the existing profile with a new `userId`. The result will be 2 contact profiles sharing the same phone number but with different External Ids.

The combination of making `userId` first in the lookup order and adding a uniqueness constraint to `userId`, means Regal will create a new contact profile for each unique `userId` observed by Regal (thereby making External Id your unique identifier for a profile in Regal).

Regal's default Identity Resolution Settings are the following:

![](https://files.readme.io/2f56260-image.png)

where integration ids only apply to the Salesforce and Hubspot sources, and anonymous Id only applies to the Segment source.

But now you may override these defaults by specifying your own custom Lookup Orders and uniqueness constraints.

Here's a diagram illustrating Regal's Identity Resolution Process leveraging both Look Up Order and Uniqueness Constraint:

![Identity Resolution Process](https://files.readme.io/4bf35c4-d4wg6EjZ8gH2LxDKIdXZ_B5_.png)

Identity Resolution Process

# Common Use Cases & Reasons to Create Custom Identity Resolution Settings

## 1 - Shared Phones

It might be that members living within the same household have independent accounts with your brand, but they share some of the same contact information — such as in the case of a landline or parent/child where the child still uses the parent's cell phone.

In these cases you'd want to have separate profiles, each with the same phone number but different external ids.

### Recommended Settings:

Lookup order: `[external id, primary phone, phones, primary email, emails]`, with a uniqueness constraint on `external id`

### Example Sequence of Events:

**1st Action:**

- New event with userId A and phone A

**Result:**

- Search by userId does not find a match
- Search by phone does not find a match
- No matches found, so new profile is created
- Profile 1 created with userId A, phone A

**2nd Action:**

- New inbound event with userId B and phone A

**Result:**

- Search by userId does not find a match
- Search by phone finds Profile 1, but the uniqueness constraint does not allow adding userId B to Profile 1 so new profile must be created
- Profile 2 is created with userId B, phone A

> ## 📘
>
> What if the unique identifier is not included in an event?
>
> In the example above, custom events sent to Regal are correctly attributed to the right profiles (or correctly create new profiles) so long as the unique `userId` is included in the events. But without the `userId`, and only `phone` or `email` identifiers in the event, it's not possible for Regal to know which of the matching profiles with that `phone` or `email` should be updated. There's a similar problem for inbound calls, texts and emails.
>
> In these situations, Regal will attribute the custom event, call, text or email to the last updated profile.

## 2 - BPOs, OPMs, or 3rd Party Administrators Managing Multiple Sub-Brands

Some businesses manage outreach on behalf of other organizations, and run into the problem where the same contact is a customer of more than one of those organizations.

For example, a company might be managing student applications on behalf of multiple schools. It would be expected that the same student might have open applications with several schools, but it's imperative to keep the profile/application data and conversations for one school distinct from another for the same student.

**Keeping the profile/application data separate** can be achieved by creating distinct contacts in Regal for each school a student is applying to. As in the previous example, you would send a unique External Id for each student-school combination, and put `external id` first in the lookup order with a uniqueness constraint.

This is sufficient for ensuring custom events and outbound agent actions go to the right profile, but in order to ensure inbound emails, calls and texts (which cannot contain an External Id) also get added to the right profile, you need to additionally leverage the `subBrand` feature and associate different Regal phone lines and email domains to each of those sub-brands. You would also attribute each contact to one of those sub-brands by sending a `subBrand` in the traits. An example event might look like:

JSON

```
{
"userId": "003ao000000oQLtAAM",
"traits": {
    "phone": "+1 555 555 5555",
    "firstName": "John",
    "lastName": "Smith",
    "subBrand": "alpha university"
},
"name": "New Student Registration"
}
```

For inbound calls and texts, Regal will use the sub-brand of the Regal phone number that receives the call or text to determine which contact profile to update. The example below illustrates how this works.

Note: This is in contrast to the to the landline example above where Regal would just use the last updated profile to determine which profile the incoming call or text belongs to. Because we have sub\_brand to disambiguate in this case, that's what we use to pick the right profile.

Similarly, for inbound emails, Regal will use the sub-brand of the receiving-agent's email domain to find the contact. E.g. if a contact emails an agent at [[[email protected]](/cdn-cgi/l/email-protection)], the domain is alphauniversity.com, and identity resolution process will use the contact email + the sub-brand mapped to alphauniversity.com in the lookup.

> ## 📘
>
> Using sub-brand in this way must be enabled in your account by request.
>
> Contact [[email protected]](/cdn-cgi/l/email-protection#71020401011e030531031416101d071e1812145f121e1c) to get started.

> ## 🚧
>
> Inbound events without the unique identifier:
>
> If a custom event is sent to Regal without userId but with phone and subBrand, then Regal will use the subBrand to determine which contact profile to update.
>
> But if the event does not have subBrand either, then Regal will reject the event as it is not clear which profile to update.

### Recommended Settings:

Note: this example is from the perspective of a brand that is not using the Salesforce or Hubspot integration so we used external id as the unique identifier - but this set up can also work with integration ids:

- Lookup order: `[external id, primary phone, phones, primary email, emails]`, with a uniqueness constraint on `external id`
- Sub-brands are activated
  - Regal phone line 1 associated with sub-brand "alpha university"
  - Regal phone line 2 associated with sub-brand "beta college"

**1st Action:**

- Max starts an application with Alpha University > send new custom event with userId A, phone A, email A, and subBrand = "alpha university"

**Result:**

- Search by userId, then phone, then email does not find any matching profiles
- Profile 1 is created in Regal with userId A, phone A, email A, and subBrand = "alpha university"

**2nd Action:**

- Max also applies to Beta College > send new custom event with userId B, phone A, email A, and subBrand = "beta college"

**Result:**

- Search by userId does not find a match
- Search by phone finds Profile 1, but the uniqueness constraint does not allow adding userId B to Profile 1, so a new profile must be created
- Profile 2 is created with userId B, phone A, email A, subBrand = "beta college"

**3rd Action:**

- Max has an update to his application with Alpha University > send a new custom event with only phone A and subBrand = "alpha university" (note: alternatively could have included just userIdA instead of (phone A and subBrand), but phone A alone is insufficient)

**Result:**

- Search by phone finds Profile 1 and 2, but the additional subBrand info enables Regal to correctly select Profile 1  
  Profile 1 is updated with the event

**4th Action:**

- Max texts in to Regal phone 2 (which is associated with "beta college") to ask about their application

**Result:**

- The phone of the incoming message could match with Profile 1 or Profile 2
- The receiving phone, Regal phone 2, is mapped to sub-brand "beta college", so Regal associates the inbound text with Profile 2
- In Agent Desktop, the agent will see chat history and contact attributes associated with Profile 2

# What identity resolution settings are best for me?

The default settings work for most brands. The most common reason to deviate from the default settings is if you need contacts in Regal to share phones or emails, as shown in the examples above. Any changes from the default settings must be made manually by the Regal team, so reach out to [[email protected]](/cdn-cgi/l/email-protection#fc8f898c8c938e88bc8e999b9d908a93959f99d29f9391) if you believe an alternative identity resolution setting would be more appropriate for you.

Updated over 1 year ago

---
