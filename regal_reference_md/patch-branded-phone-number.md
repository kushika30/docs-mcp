---
source: "https://developer.regal.ai/reference"
---

# Patch Branded Phone Number

Ask AI

patch

https://api.regal.ai/v1/brandedPhoneNumbers/{phoneNumber}

Update an existing phone number for spam remediation and/or branding.

## Rate Limit

| Limit Type | Value |
| --- | --- |
| Requests per second | 10 |

If you exceed these limits, you will receive a 429 Rate Limit Exceeded response.

## API Details

- API updates existing phone numbers in your account.
- Accepts partial requests. All body params are optional and can be updated except phoneNumber (which is the identifier for the resource). Body params specified in the request are updated; omitted params are left unchanged.
- If you believe a phone number was rejected (`optIn.rejected`) in error and you want to resubmit for branding or spam remediation, note that sending `true` for a carrier feature in the `optIn.rejected` status does NOT update the status. You first need to send a request with a value of `false` for the carrier feature; then send another request with a value of `true` for the carrier feature.

Path Params

phoneNumber

string

required

E.164 format (e.g., +15551234567)

Body Params

businessProfileId

string

Business profile id. Optional

carrierFeatures

array of objects

Array of carrier configurations. Optional

carrierFeatures

ADD  object

brandingNameShort

string

Display name (max 15 characters). Optional

brandingNameLong

string

Display name (max 32 characters). Optional

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

# 200 200

# 400 400

# 403 403

# 404 404

# 429 429

Updated about 1 month ago

---
