# Digioh

This guide outlines how you can send events to Regal based on customer interactions with your site via Digioh.

# Standard App Functionality for Regal Voice

The Regal Voice Standard App activates integration with the Regal Voice tracking API, without having to directly modify any Custom JS. You install the App one time when creating your client’s Digioh account, and where configuration is needed, you use metadata - we strongly recommend you review this documentation before attempting to configure real accounts. The app implementation is based on Regal Voice documentation.

## Setup Process

For new Digioh mutual clients:

1. Provision a Digioh account as normal
2. From Custom JS (Apps), install app #53: Regal Voice
3. As a Super User, from Admin menu, configure required “Account Metadata”
   1. rv\_write\_key: API client account identifier, e.g. mTy0BRd\_aYsOclUvjYlttR
   2. rv\_channels\_optin\_default: when not specified on box e.g. email,phone,sms
4. Create boxes and configure metadata as described below

![](https://files.readme.io/4ac1110-unnamed.png)

You must avoid installing the App more than once, as this will result in JavaScript errors that may prevent Digioh from activating. Heed any warnings about this. Also, note that this app will not function in Box Preview mode within the Digioh Editor, it will only activate on a live site.

## Tracking

By default, the App will track several user activities, carrying a “standard payload” of Digioh data and additional data based on the particular tracking operation:

- Pageview track: standard payload
- Impression track: standard payload + box information
- Click track: standard payload + CTA information
- Submission track: standard payload + box information
- Submission identify: standard payload + box information + form data

## Metadata Controls

General metadata configuration is described here. Custom Regal Voice metadata is as follows:

| Metadata Key | Config Level | Purpose |
| --- | --- | --- |
| rv\_write\_key | Account | Client identifier (required) |
| rv\_channels\_optin\_default | Account | Default channels csv when not specified at Box level (optional, default if not configured is “email,phone,sms”) |
| rv\_channels\_optin | Field (Opt In) | For a specific Opt In checkbox, e.g. “phone,sms” |
| rv\_cta\_name | Button Element | Set the CTA sent to RV API, defaults to the button text |
| rv\_trait | Field (Any) | Set the trait name for a form field value passed to the RV API. This is required for all custom fields on form input. Otherwise the trait names would be ambiguous, e.g. “custom\_2”. If rv\_trait is not set, the value will still be passed to any Box integrations, but not to the Regal Voice API. |

## For Developers

The app can be put into “test mode” by configuring a value in Parent JS:

const TEST\_MODE = true;

In test mode, no data is sent to the Regal Voice API, it is available via the Console in dev tools by calling:

DIGIOH\_API.print();

You can change the API endpoint by modifying Parent JS:

const RV\_TRACK\_ENDPOINT = "<https://rv-apps.io/track/>

";

For iterative testing, we recommend clearing cookies and calling:

DIGIOH\_API.clearDataLayer();

Normally, form submission data is preserved in Local Storage and re-presented on form submission if no override value is entered. This is appropriate for real-life situations, but can cause unexpected behavior during testing. Alternatively, you can use a fresh Incognito window for each test.

To remove the App after installation, you need to physically delete its Custom JS in both Parent and Box JS (3 snippets), indicated by “app installed” comments in the JS editor.

Updated over 3 years ago

---
