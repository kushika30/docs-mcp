---
source: "https://developer.regal.ai/reference"
---

# Send Message

Ask AI

post

https://api.regal.ai/v1/messages/send

Send messages at scale.

## Rate Limit

| Limit Type | Value |
| --- | --- |
| Requests per second | 10 |

If you exceed these limits, you will receive a 429 Rate Limit Exceeded response.

## API Details

- For messaging without the use of campaigns, `content` and `from` are required.
  - If a `campaignId`for an SMS campaign *is* provided, the campaign’s default content, sender number, and opt-in behavior are used unless overridden in the request (via `content`, `from`, or `to.bypassOptIn`). The message will be attributed to that campaign in reporting.
- If a `phoneNumber` is provided that does not belong to an existing profile, a new profile will be created.

Body Params

to

object

required

The message recipient.

to object

from

object

The message sender.

from object

channel

string

enum

required

The communication channel.

Allowed:

`"sms"`

content

object

The message content.

content object

campaignId

int32

If an SMS campaign is provided, the campaign supplies default content, from number, and opt-in behavior. Any values included in the request (via content, from, or to.bypassOptIn) override the campaign defaults.

Headers

Authorization

string

required

Your Regal API Key

Content-Type

string

required

Defaults to application/json

Responses

# 202 202

# 400 400

# 401 401

# 403 403

# 429 429

Updated about 2 months ago

---
