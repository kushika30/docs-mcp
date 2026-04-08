---
source: "https://developer.regal.ai/reference"
---

# Delete Branded Phone Number

Ask AI

delete

https://api.regal.ai/v1/brandedPhoneNumbers/{phoneNumber}

Delete an existing phone number from spam remediation and/or branding.

## Rate Limit

| Limit Type | Value |
| --- | --- |
| Requests per second | 10 |

If you exceed these limits, you will receive a 429 Rate Limit Exceeded response.

## API Details

- API deletes existing phone numbers in your account.
- **Deletion Requirements:** Phone numbers with active carrier submissions cannot be deleted. You must first opt out of all carrier features and wait for the opt-out to be approved by carriers. Statuses that block deletion include:
  - `submitted.optIn` / `submitted.optOut`- Submission in progress with carrier. To delete, first submit 'false' through the PATCH endpoint, and wait for the number to be approved for opt out.
  - `approved.optIn` - Feature is live with carrier. To delete, first submit 'false' through the PATCH endpoint, and wait for the number to be approved for opt out.
  - `pending.optIn` / `pending.optOut` - Opt-in/opt-out change pending submission. Wait for number to be approved for opt out.
- Use the GET request to check the status of your numbers.

Path Params

phoneNumber

string

required

E.164 format (e.g., +15551234567)

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
