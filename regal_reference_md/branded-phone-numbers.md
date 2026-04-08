---
source: "https://developer.regal.ai/reference"
---

# List Branded Phone Numbers

Ask AI

get

https://api.regal.ai/v1/brandedPhoneNumbers

Retrieve a list of phone numbers submitted for branding and/or spam remediation.

## Rate Limit

| Limit Type | Value |
| --- | --- |
| Requests per second | 10 |

If you exceed these limits, you will receive a 429 Rate Limit Exceeded response.

## API Details

- API supports optional filtering using query params. All query params except `phoneNumber` and `businessProfileId` allow you to include the same query parameter multiple times with different values. The API will return results that match any of the provided values
- **detailedStatus** (Carrier/Feature Level) is a granular status that tells you where each carrier is in the approval process of your phone number for Spam and Branding.
  - `pending.initialOptIn` - first-time registration (new number or coming from opt-out).
  - `pending.optIn` - Re-registration (number has been through the process before). Both are "pending" states, but initialOptIn indicates it's the first submission, while optIn indicates a subsequent change.
  - `submitted.optIn` - Opt-in submitted to carrier
  - `approved.optIn` - Opt-in approved by carrier
  - `rejected.optIn` - Opt-in rejected by carrier
  - `submitted.optOut` - Opt-out submitted to carrier
  - `pending.optOut` - Opt-out pending
  - `approved.optOut` - Opt-out approved by carrier
  - `rejected.optOut` - Opt-out rejected by carrier
- **status** (Phone Number Level) is an overall summary status of where your phone number is in the review process:
  - `submitted for review` (highest priority) - if there are any `pending.\*` or `submitted.\*` detailedStatuses
  - `rejected` - for `rejected.\*` detailedStatuses
  - `approved` - for `approved.\*` detailedStatuses
  - `unregistered` (lowest priority) - fallback OR `approved.optOut` detailedStatus

**Phone Number Status Flow**

- When you submit a phone number for spam remediation and/or branding, its **status** follows this progression:
  - `submitted for review`: The number enters this status immediately upon submission and remains here while carrier/feature approvals are pending.
  - `approved`: All requested carriers and features have been approved.
  - `rejected`: One or more carriers or features have been rejected. (If even a single carrier/feature is rejected, the overall status becomes rejected.)

The number only transitions from `submitted for review` once all carriers and features have received a final decision (`approved` or `rejected`).

- **Deregistration**: When removing spam and/or branding designations, the same flow applies. The number shows as `submitted for review` until all opt-outs are processed. If opting out from only some carriers/features, status will appear as `approved` or `rejected` (as in the opt outs have been approved or rejected). However, if a number is opted out of every carrier/status combination, the status will appear as `unregistered`.

## Example Requests

- Get all branded phone numbers: `GET /v1/brandedPhoneNumbers`
- Get information for a specific phone number: `GET /v1/brandedPhoneNumbers?phoneNumber=%2B15551234567`
- Get all phone numbers that are still in review: `GET /v1/brandedPhoneNumbers?status=submitted+for+review`
- Get phone numbers with status of approved or rejected: `GET /v1/brandedPhoneNumbers?status=approved&status=rejected`
- Get phone numbers with approved branded caller ID on AT&T: `GET /v1/brandedPhoneNumbers?carrier=AT%26T&feature=brandedCallerId&status=approved.optIn`
- Get phone numbers with spam remediation enabled on any carrier: `GET /v1/brandedPhoneNumbers?feature=spamRemediation&status=approved.optIn`

Query Params

nextCursor

string

Used for pagination to retrieve the next page of data. Optional

size

string

Defaults to 25

Specific the number of results per page, up to 100.

phoneNumber

string

Filter by exact phone number (E.164 format, e.g., "%2B15551234567") - supports only one value at a time, not multiple. Optional

businessProfileId

string

Filter by business profile UUID - supports only one value at a time, not multiple. You can retrieve your business profile uuid by making a GET request to businessProfiles. Optional

carrier

string

enum

Filter by carrier. Optional

AT%26TT-MobileVerizon

Allowed:

`AT%26T``T-Mobile``Verizon`

feature

string

enum

Filter by feature. Optional

brandedCallerIdspamRemediation

Allowed:

`brandedCallerId``spamRemediation`

status

string

enum

Filter by phone number level status. Optional

submitted for reviewapprovedrejectedunregistered

Allowed:

`submitted for review``approved``rejected``unregistered`

detailedStatus

string

enum

Filter by carrier/feature level status. Optional

pending.initialOptInpending.optInapproved.optInrejected.optInsubmitted.optOutpending.optOutapproved.optOutrejected.optOut

Show 8 enum values

internalName

string

Filter by internal name. Optional

reportingGroup

string

Filter by reporting group. Optional

Headers

Authorization

string

required

The API key used to authenticate requests.

Responses

# 200 200

# 400 400

# 401 401

# 403 403

# 429 429

Updated about 1 month ago

---
