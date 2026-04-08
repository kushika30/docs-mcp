---
id: 22109501863579
title: "How does Regal Voice Determine a Contact's Time Zone?"
html_url: "https://support.regal.ai/hc/en-us/articles/22109501863579-How-does-Regal-Voice-Determine-a-Contact-s-Time-Zone"
updated_at: "2024-08-01T14:49:26Z"
---

# How does Regal Voice Determine a Contact's Time Zone?

**Regal Uses the Following Logic to Determine a Contact's Time Zone**

1. If a zip code is present, it will be used to determine time zone (must be stored on the contact as customProperties.address.zipcode)  
   ![](https://support.regal.ai/hc/article_attachments/27905153662491)
2. If there is no zip code present on the contact, Regal will default to the area code to determine time zone

The contact's time zone is referenced in delay nodes and determines a contact's quiet hours.

Time zone is stored on contacts as a Regal Voice Property. The source of the time zone, as well as the abbreviated time zone are also listed.

![](https://support.regal.ai/hc/article_attachments/22125258491547)