---
source: "https://developer.regal.ai/reference"
---

# Post Branded Phone Number

Ask AI

post

https://api.regal.ai/v1/brandedPhoneNumbers

Post a phone number for spam remediation and/or branding.

## Rate Limit

| Limit Type | Value |
| --- | --- |
| Requests per second | 10 |

If you exceed these limits, you will receive a 429 Rate Limit Exceeded response.

## API Details

- **Carrier Registrations:** Specify only the carriers and features (`spamRemediation`, `brandedCallerId`) you need (minimum one carrier with at least one feature).
  - No need to specify all three carriers. Omitted features default to false (and will return with a `detailedStatus` of `pending.initialOptOut`). Note: This differs from, and is more flexible than, the in-app **CSV Upload** submission process which requires all carrier columns in the template (AT&T, T-Mobile, Verizon) even if the value is "No", and takes in `true`/`false` values rather than "Yes"/"No", but the outcome will be the same.
  - Use a value of `true` to opt in a phone number to branding or spam remediation for a given carrier feature. Response will return with a `detailedStatus` of `pending.initialOptIn`
  - Use the GET brandedPhoneNumbers to check on the status of your phone number as it goes through the review process (`pending.initialOptIn` --> `submitted.OptIn` --> `approved.OptIn` or `rejected.OptIn`)
- POST endpoint is only used to add a phone number for the first time; PATCH endpoint allows for updating existing registrations including changing carriers or features.

Body Params

phoneNumber

string

required

E.164 format (e.g., +15551234567)

businessProfileId

string

required

Business profile id phone number is associated with. Use GET business profiles API to retrieve your business profile ID(s) or copy from the Business Profiles page in Regal app

carrierFeatures

array of objects

required

Array of carrier configurations (at least one carrier required)

carrierFeatures\*

ADD  object

brandingNameShort

string

Display name (max 15 characters)

brandingNameLong

string

Display name (max 32 characters)

internalName

string

Internal friendly name for your phone number (e.g. Main Line, NE Region). Optional

reportingGroup

string

Name of reporting group for analytics. Optional

Headers

Authorization

string

required

The API key used to authenticate requests.

Responses

# 201 201

# 400 400

# 403 403

# 409 409

# 429 429

Updated about 2 months ago

---
