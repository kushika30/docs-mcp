---
source: "https://developer.regal.ai/reference"
---

# List Dispositions

Ask AI

get

https://api.regal.ai/v1/dispositions

Retrieve a list of dispositions.

## Rate Limit

| Limit Type | Value |
| --- | --- |
| Requests per second | 10 |

If you exceed these limits, you will receive a 429 Rate Limit Exceeded response.

## API Details

- Includes your configured dispositions and Regal system dispositions

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
