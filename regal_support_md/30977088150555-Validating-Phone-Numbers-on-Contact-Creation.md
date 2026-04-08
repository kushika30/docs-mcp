---
id: 30977088150555
title: "Validating Phone Numbers on Contact Creation"
html_url: "https://support.regal.ai/hc/en-us/articles/30977088150555-Validating-Phone-Numbers-on-Contact-Creation"
updated_at: "2024-11-15T19:47:55Z"
---

# Validating Phone Numbers on Contact Creation

When you create a Contact via the Regal Events endpoint, the contact may or may not be created in the Audience page if one of the contact’s phone numbers is invalid in the payload. This depends on:

1. **Contact will not be created in Audience:** If there are no other valid contact identifiers on the event (e.g., no other valid phone numbers or emails)
2. **Contact will be created in Audience:** If there are other valid contact identifiers on the event (e.g., another number that’s valid or a valid email), however, we will not add the invalid phone number to their profile

Regal’s API will not return an error for invalid phone numbers, as a valid phone number is not necessary to create an event, and therefore the phone number validation process happens downstream from the API response.

Instead, if you want to set up a process to know or validate whether a contact was created in your Regal Audience as intended (and whether it contains the phone number submitted), you may subscribe to Regal events (via Reporting Webhooks or Segment). Each time Regal creates a contact, a contact.created event is emitted. And each time Regal adds a phone number to a contact profile, a contact.phone.created event is emitted. If you don’t receive a contact.phone.created event when submitting a new phone number for a contact, that means our phone validation found the number to be invalid.

We use Google’s [libphonenumber library](https://github.com/google/libphonenumber) to validate phone numbers. If you’d like, you can build a phone number validation process into your workflow prior to sending data to Regal in order to have higher confidence the numbers are valid. If you’re on a Java, JavaScript, TypeScript, or C++ type of stack, [Google has a library you can pull from](https://github.com/google/libphonenumber). If you’re on Python, [there’s a project you can reference here](https://pypi.org/project/phonenumbers/).

Note: this won’t actually result in a different outcome, it may just give you more transparency ahead of time that the numbers are invalid.