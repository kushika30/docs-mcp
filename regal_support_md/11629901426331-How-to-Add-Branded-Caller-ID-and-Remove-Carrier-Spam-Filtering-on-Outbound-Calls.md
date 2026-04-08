---
id: 11629901426331
title: "How to Add Branded Caller ID and Remove Carrier Spam Filtering on Outbound Calls"
html_url: "https://support.regal.ai/hc/en-us/articles/11629901426331-How-to-Add-Branded-Caller-ID-and-Remove-Carrier-Spam-Filtering-on-Outbound-Calls"
updated_at: "2026-03-09T16:07:54Z"
---

# How to Add Branded Caller ID and Remove Carrier Spam Filtering on Outbound Calls

Regal integrates with the major cell carriers in the United States to allow you to mitigate spam filtering and display your brand name across 400 million mobile phones. You can upload and manage your numbers for spam remediation and branding in the Regal app (Settings > Call Branding) or by using the [Regal API](https://developer.regal.ai/reference/post-branded-phone-number).

**Note:** If needed, please contact your Regal account team for questions about or help with branding and spam remediation.

## To Brand and/or Spam Remediate You Need a Business Profile

You first need to set up a business profile and go through an approval process to ensure you have correctly represented yourself. You can proceed to step 2 and upload phone numbers before business profile approval, however phone numbers will not be submitted to carriers until your business profile is approved.

Check that your business profile is accurate and up to date by visiting the Phone Numbers page > Business profile tab, and clicking Edit.

![Screen_Shot_2022-12-28_at_8.34.26_PM.png](https://support.regal.ai/hc/article_attachments/11629901112603)

## Adding/Updating Phone Numbers for Branding and/or Spam Remediation in the Regal App

#### (note: you can also do this programmatically through the [Regal API](https://developer.regal.ai/reference/post-branded-phone-number))

#### 

#### Step 1

Download the CSV template from the Branded Caller ID tab, or use this one for reference: [bcid\_template.csv](https://docs.google.com/spreadsheets/d/1u0f6VkXW04LpmgbUBrRFPbQDjGSOu-uZ3FuoAYVW9D0/export?format=csv)

Add your phone numbers to the downloaded CSV and fill out the fields for each number.

- Country Code: This should be 1 (unless your country code is different)
- Phone number: Upload in the format xxxxxxxxxx
  - Example: 2398429250
- Friendly Name: This is for internal use. Name the phone number something that is useful for you. This will not be passed to carriers.
- Verizon/AT&T/T-Mobile Spam and Branding: Indicators of if you would like the phone number to be spam remediated and branded on each carrier.
  - 'Spam Remediation' and 'Branded Caller ID' values must be Yes/No (not TRUE/FALSE).

Numbers can be spam remediated without being branded, but they **cannot** be branded without being spam remediated. If you would like a number to be branded you must also choose yes for spam remediation on that carrier.

- 32 and 15 Character Branding: If you chose 'yes' for branding on any carrier these are mandatory fields. If you chose no for all characters, you do not need to add anything here.
  - These are the display names that will show when you call someone. For example:

![bcid.png](https://support.regal.ai/hc/article_attachments/47584975282843)

- Reporting Group is optional: it's meant to be used if you wanted to group your phone numbers for reporting purposes; it won't be passed to carriers.

#### Step 3

Click **Add or Update Numbers**, and submit the CSV you filled out. Once submitted, you'll see the status marked as 'Submitted for Review' for each phone number. **The status will update to Approved once the phone number has been approved by the carrier, and your branding will start to display.**

![Screen_Shot_2022-12-28_at_8.36.26_PM.png](https://support.regal.ai/hc/article_attachments/11629830361115)

## Removing Spam/Branding

To remove spam remediation or branding from your phone numbers, the process is the same! Just write "No" instead of "Yes" in the CSV in the columns that correspond to the treatment you'd like to remove. To remove a phone number completely from all carriers, write "No" in all 6 carrier columns.

## How Long Do Updates Take?

The approval/removal process differs based on the carrier:

- AT&T spam remediation is typically updated within 1-2 business days.
- AT&T branding is handled only through TransUnion and Regal has no control over it. For questions related to AT&T branding please contact TU support.
- T-Mobile spam remediation and branding are typically updated in 1-3 business days.
- Verizon spam remediation and branding are typically updated in 2-5 business days.

## Call Logo Branding

To display the logo of your brand in addition to the name, you must also enable [Call Logo Branding](https://support.regal.ai/hc/en-us/articles/35104653217691-How-to-Set-Up-Call-Logo-Branding) (which carries an extra charge.)

## FAQs

- **Is Branding & Spam Remediation Free?** No, both are paid products, but the ROI is usually 2-10x depending on use case, brand recognition and your audience. Speak to your CSM to understand cost for your volume of calling.
- **How Is Branded Caller ID Different From CNAM?** CNAM is a free, text-only, 15-character name registered in carrier databases BUT it primarily applies to landlines. Branded Caller ID goes further, delivering your business name to 400M+ mobile devices. It also supports more content should you choose to send your logo and reason for calling. Branded Caller ID and Call Logo Branded carry a cost, but yield a good ROI for known brands with engaged contacts.
- **How is Spam Remediation Different From STIR/SHAKEN?** Both are trying to ensure your calls get answered and look reputable, but they work differently and in complement. STIR/SHAKEN is a free, FCC-mandated carrier protocol that cryptographically signs your calls to prove they're legitimate, which helps prevent them from being flagged in the first place. Spam Remediation is an active, ongoing process that audits your numbers across carrier and analytics blocklists and disputes flags that have already been applied. Think of it this way: STIR/SHAKEN is preventative, Spam Remediation is corrective. Ideally you use both. Spam Remediation carries a cost, but yields a good ROI, even if you don't have a recognizable brand name.

## Additional Best Practices for Outbound Dialing

In addition to using BCID and Spam Remediation, use these best practices to maximize connect rates and number health:

1. **Limit Calls per Number** – Keep dialing to a maximum of 50 calls per phone number per day to reduce the risk of spam flagging and call blocking.
2. **Ensure Sufficient Number Rotation** – Maintain at least three phone numbers per area code to distribute calls evenly and improve overall number reputation.
3. **Scale for Effective Call Distribution** – Use a minimum of 1,000 phone numbers to support proper rotation and maintain high connect rates.

Managing large volumes of phone numbers can be operationally intensive. Leverage our [OutboundANI integration](https://developer.regal.ai/docs/outboundani) to manage number rotation automatically and always select the best number to call from.