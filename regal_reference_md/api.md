---
source: "https://developer.regal.ai/reference"
---

# Post Custom Event

Ask AI

post

https://events.regalvoice.com/events

Create and update contacts or add events to contacts.

Example creates (or updates) a contact and adds an "Order Completed" event

Body Params

userId

string

Defaults to 12345

Unique identifier for your contact

traits

object

Attributes about the contact

traits object

name

string

Defaults to Order Created

Name of event

properties

object

Arbitrary object of properties

properties object

eventSource

string

Defaults to Website

Source of the event. E.g. salesforce, hubspot

originalTimestamp

string

Defaults to 2000-08-20 09:12:28 -04:00

Time of the event on the client device

Headers

Authorization

string

required

Your Regal API Key

Responses

# 200 200

# 400 400

# 401 401

Updated about 2 months ago

---
