# CallRail

# Overview

This guide explains how to integrate CallRail with Regal to automatically trigger personalized customer journeys based on call center interactions. The integration uses CallRail's webhook functionality to send real-time data to Regal's journey orchestration platform.

# Prerequisites

- An active CallRail account with admin access
- A Regal webhook URL (provided by your Regal Implementation Manager)
- CallRail tracking numbers configured for your business
- Review CallRail's Webhook Documentation: <https://apidocs.callrail.com/#webhooks>

# Integration Steps

## 1. Log Into CallRail

1. Navigate to the CallRail Admin Console
2. Click "Settings" in the left navigation
3. Select "Integrations"
4. Click "Add Integration" and select "Webhooks"

![](https://files.readme.io/886a9ff07ec37ffb2ff358e0229462f5b1fc3c051c45ba0f620ff2a08a783ea2-CleanShot_2024-11-12_at_12.44.052x.png)

  

## 2. Configure Webhook Settings

Enter the following settings:

- **Webhook URL**: Enter the unique URL provided by your Regal Implementation Manager
- **Events**: Select which events you want to trigger journeys in Regal:
  - Pre-Call: Fires when a call begins
  - Call Routing Complete: Fires when a call has been routed
  - Post-Call: Fires after a call ends (including recording and transcription)
  - Call Modified: Fires when call data is updated
  - Text Message Received: Fires when a text is received
  - Text Message Sent: Fires when a text is sent
  - Form Submission: Fires when a form is submitted

# Error Handling

- Regal does not support automatic retries for failed webhook deliveries
- If Regal's endpoint is temporarily unavailable, events during that period will not be captured
- Monitor your CallRail webhook dashboard for any delivery failures

# Best Practices

- Start Small: Begin by enabling one event type and verify it's working before enabling additional events.
- Monitor Performance: Regularly check your CallRail webhook logs to ensure events are being delivered successfully.
- Data Validation: Ensure your CallRail setup provides the required customer\_phone\_number field for all events.

Updated over 1 year ago

---
