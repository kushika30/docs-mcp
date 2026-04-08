---
source: "https://developer.regal.ai/reference"
---

# List Business Profiles

Ask AI

get

https://api.regal.ai/v1/businessProfiles

Retrieve your business profile(s).

## Rate Limit

| Limit Type | Value |
| --- | --- |
| Requests per second | 10 |

If you exceed these limits, you will receive a 429 Rate Limit Exceeded response.

## API Details

- Default status of a business profile is "in review"; the Regal team will then adjust the status to "approved" or "rejected" based on a review of your business information.
- You must have an "approved" business profiles to brand your phone numbers or send text messages.

Query Params

nextCursor

string

Used for pagination to retrieve the next page of data. Optional

size

string

Defaults to 25

Specific the number of results per page, up to 100.

Headers

Authorization

string

required

Your Regal API Key

accept

string

enum

Defaults to application/json

Generated from available response content types

application/jsontext/plain

Allowed:

`application/json``text/plain`

Responses

# 200 200

# 400 400

# 401 401

# 403 403

# 429 429

Updated about 1 month ago

---
