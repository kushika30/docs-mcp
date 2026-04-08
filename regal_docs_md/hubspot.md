# HubSpot

This guide describes how to sync your HubSpot and Regal contact, and how to bring Regal events into your HubSpot contact profile's activity feed as a custom Regal timeline event.

# DATA IN

## Install the Regal HubSpot app

**Step 1:** Log into the Regal app. And navigate to "Integrations."

**Step 2:** In the HubSpot Integration card, click "Connect."

![1152](https://files.readme.io/bfcd5a6-Screen_Shot_2022-04-08_at_9.26.09_AM.png "Screen Shot 2022-04-08 at 9.26.09 AM.png")

Connect

**Step 3:** This will prompt you to auth into your Hubspot account.

**Step 4:** Select the relevant HubSpot account, click "Choose Account."

![](https://files.readme.io/a2d6bab-Screen_Shot_2022-01-23_at_8.08.24_PM.png "Screen Shot 2022-01-23 at 8.08.24 PM.png")

**Step 5:** On the next screen, click "Connect app" and complete the Captcha.

![](https://files.readme.io/f244f5b-Screen_Shot_2022-01-23_at_7.08.34_PM.png "Screen Shot 2022-01-23 at 7.08.34 PM.png")

**Step 6:** This will take you back to your Regal account, and once the integration completes installation, it will say "Connected."

![](https://files.readme.io/424075b-Screen_Shot_2022-04-08_at_9.27.29_AM.png "Screen Shot 2022-04-08 at 9.27.29 AM.png")

## Configure the app

**Step 7:** Back in the Regal app, on the HubSpot card, click "Edit."

**Step 8:** Map the relevant contact attributes from HubSpot to Regal. For the Hubspot attributes you must use the internal\_name of the attribute, not the display name.

To find the **internal\_name** of your HubSpot attributes, go to your HubSpot account and navigate to "Contacts" > "Edit properties" > "Export all properties." That will allow you to download a csv of all your contact properties with a column for the internal\_name.

![670](https://files.readme.io/2497f5c-Screen_Shot_2022-01-23_at_7.18.20_PM.png "Screen Shot 2022-01-23 at 7.18.20 PM.png")

Edit properties

![2108](https://files.readme.io/7349a3b-Screen_Shot_2022-01-23_at_7.18.48_PM.png "Screen Shot 2022-01-23 at 7.18.48 PM.png")

Export all properties

- There are certain contact attributes like first name and phone that Regal expects and has already named, so you just need to tell Regal which attributes on your HubSpot contacts map to those.
- For opt in, if all of your contacts are opted in, you can toggle on "Opt in all"; if however, not all of your contacts are opted in, you will need to have contact properties in HubSpot that represents opt in. For those properties Regal expects a value of "true" if the contact is opted in or "false", if not.  
  For any other contact property you'd like to map to Regal, just click "Add Attribute." You can add as many as you'd like.

![628](https://files.readme.io/386d293-Screen_Shot_2022-04-08_at_9.37.39_AM.png "Screen Shot 2022-04-08 at 9.37.39 AM.png")

Map Attributes

**Step 9:** Select what you want Regal to do if a contact is edited in Regal or if there is no matching contact in HubSpot.

![816](https://files.readme.io/7937c93-Screen_Shot_2022-04-08_at_9.42.50_AM.png "Screen Shot 2022-04-08 at 9.42.50 AM.png")

Additional configurations

## Contacts

### Create new contacts

When a new contact is created in your HubSpot account, a new contact will be created in your Regal account and appear in the Audience tab.

The attributes you mapped in the above configuration step will appear on the contact's profile if you click on the contact in Regal. We automatically pass the unique link to the hubspot contact profile into an attribute called "hubspotLink" so your agents can have quick access to the contact's HubSpot profile from Regal.

> ## 📘
>
> Phone number required
>
> A phone number is required for Regal to create a contact. If a contact is created in HubSpot without a phone number, it will not push to Regal. If a phone number is later added, it will.

### Update contact attributes

Anytime an update is made in HubSpot to one of the attributes you've mapped, that will push an update to the contact in Regal with the new attribute values.

## Deals

### Create new deals

If a new deal is created in your HubSpot account, it will create an event in Regal called "HubSpot Deal Created" with all of the properties of the deal.

### Update deals

As deals are moved through the funnel stages in HubSpot or updated, it will create an event in Regal called "HubSpot Deal Updated" with the properties that were updated.

![1458](https://files.readme.io/df9a0a5-Screen_Shot_2022-02-19_at_1.28.06_PM.png "Screen Shot 2022-02-19 at 1.28.06 PM.png")

HubSpot Deal Created & Updated Events

> ## 🚧
>
> Limitations
>
> 1. By default the only events Regal receives from Hubspot are: Hubspot Deal Created and Hubspot Deal Updated. Additionally, Regal does generate contact.created and contact.subscribed events when new Hubspot contacts are created or subscribed. If you want to send more events from Hubspot to Regal (for example, Lead Owner Assigned), you’ll need your Hubspot plan to include [Operations Hub](https://www.hubspot.com/products/operations?utm_id=633905396803&utm_medium=paid&utm_source=google&utm_term=marketing_hubspot%20operations%20hub_EN&utm_campaign=Marketing_MQLs_EN_NAM_NAM_OperationsHub-Brand-NF_e_c_campaignid16178231962_agid136250618867_google&utm_content=&hsa_ver=3&hsa_net=adwords&hsa_acc=2734776884&hsa_kw=hubspot%20operations%20hub&hsa_grp=136250618867&hsa_mt=e&hsa_cam=16178231962&hsa_ad=633905396803&hsa_tgt=kwd-1237012546949&hsa_src=g&gad=1&gclid=CjwKCAjw1YCkBhAOEiwA5aN4ASG7_hXSDwak1s1D9aNFFRQLFjvB6L3nkUsGNW6iNcbKSnUecR-gNhoCJbwQAvD_BwE).
> 2. You are not able to map Custom Hubspot Dropdown drop down fields in Regal sync bi-directionally by default. Instead, this will require a Regal journey to map the friendly value to the hubspot value id.

## Regal events on HubSpot contact activity feed

As part of the integration, Regal publishes sms and call events back to HubSpot so that they appear as cards on a contact's activity feed in HubSpot.

Events include:

- Call completed
- Call recording link available
- SMS conversation completed
- SMS message sent
- SMS message received
- MMS message received

![](https://files.readme.io/bdc8c5a-Screen_Shot_2022-02-17_at_5.14.02_PM.png "Screen Shot 2022-02-17 at 5.14.02 PM.png")

> ## 📘
>
> Each agent needs to select to see Regal events
>
> Filtered activities are set on an individual agent basis. In order to see Regal events on the timeline of a contact, each of your agents will need to click Filter activity, then check Regal. They only need to do this once.

![1438](https://files.readme.io/8e0443e-Screen_Shot_2022-02-19_at_1.22.47_PM.png "Screen Shot 2022-02-19 at 1.22.47 PM.png")

Filter activity - Select Regal

## Testing your integration

Once you've completed the above steps, try:

- Creating a new contact in your HubSpot account. After a couple of minutes, you should see that contact appear on the Audience tab in your Regal account. Click on the contact to see that their contact properties came through correctly.
- Updating a contact property of an existing contact. After a couple of minutes, check the contact in the Audience tab in your Regal account.
- From the agent desktop, initiate an outbound sms to one of those contacts. You don't need to actually text anything, just complete the Conversation Summary, and you should see that event appear on the activity feed of the contact in HubSpot. If you don't see Regal events on the activity timeline in HubSpot, make sure to click "Filter activity" and check Regal events.

## Backfilling already existing contacts

If you'd like to backfill existing HubSpot contacts into Regal, download your contacts and properties from HubSpot and share the file in a secure way (for example, you can password protect the excel file then email it [[email protected]](/cdn-cgi/l/email-protection#4d3e383d3d223f390d3f282a2c21632422) and share the password over slack).

To download your contacts:

1. Click the Contacts tab in HubSpot, select all or the subset of relevant contacts, and click "Table actions" > "Export view".

![2598](https://files.readme.io/e7eb05b-Screen_Shot_2022-01-23_at_7.58.55_PM.png "Screen Shot 2022-01-23 at 7.58.55 PM.png")

Export View

2. Select "All properties on records", then "Export."

![1210](https://files.readme.io/2728ec1-Screen_Shot_2022-01-23_at_8.00.56_PM.png "Screen Shot 2022-01-23 at 8.00.56 PM.png")

Export

If you have any questions about how to install the Regal HubSpot app or which contact properties are important to send to Regal, reach out to [[email protected]](/cdn-cgi/l/email-protection#d9aaaca9a9b6abad99abbcbeb8b5f7b0b6).

# DATA OUT

To receive call and sms events from Regal back into HubSpot as HubSpot timeline events, see [this section of our HubSpot guide](https://developer.regal.io/docs/hubspot#regal-events-on-hubspot-contact-activity-feed). As a prerequisite, you should first follow the steps to install and configure the Regal HubSpot app from [this guide](https://developer.regal.io/docs/hubspot).

As part of the integration, Regal publishes sms and call events back to HubSpot so that they appear as cards on a contact's activity feed in HubSpot.

Events include:

- Call completed
- Call recording link available
- SMS conversation completed
- SMS message sent
- SMS message received
- MMS message received

![](https://files.readme.io/bdc8c5a-Screen_Shot_2022-02-17_at_5.14.02_PM.png "Screen Shot 2022-02-17 at 5.14.02 PM.png")

If you have any questions about how to install the Regal HubSpot app, reach out to [[email protected]](/cdn-cgi/l/email-protection#e3909693938c9197a3918684828fcd8a8c).

Updated 11 months ago

---
