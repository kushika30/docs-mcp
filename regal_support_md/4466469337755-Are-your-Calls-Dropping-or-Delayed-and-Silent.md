---
id: 4466469337755
title: "Are your Calls Dropping, or Delayed and Silent?"
html_url: "https://support.regal.ai/hc/en-us/articles/4466469337755-Are-your-Calls-Dropping-or-Delayed-and-Silent"
updated_at: "2025-05-09T20:14:29Z"
---

# Are your Calls Dropping, or Delayed and Silent?

### Regal offers a 24 hour call service accessibility.

Customers/prospects will be able to call into your activated phone lines during the business hours set under the Settings page (admin access only). You will receive these calls as tasks in the order of priority set by your business representatives. Priority and business hours can be adjusted as needed by your representatives.

We will make every effort to report any downtimes in our call service. You may, however, experience issues intermittently as you use Regal call feature. These issues are usually a result of network issues. Since Regal is a web-based application, issues may arise in response to the changing nature of the network environment that it is housed in. You may not experience these issues with SMS tasks or other websites, because there are stricter network requirements for a seamless internet phone connection (VoIP).

Our application will serve a red banner message if we are detecting a sub-optimal network connection for your workstation or if we are unable to connect your device to calls.

**Error Message for Sub-Optimal Network Connection![mceclip0.png](https://support.regal.ai/hc/article_attachments/11626198545691)****Error Message for Difficulty Connecting your Device to Calls****![Screen Shot 2024-12-10 at 11.44.16 AM.png](https://support.regal.ai/hc/article_attachments/31727264543515)**

If you see either of those error messages **but your calls are not affected**, you can ignore them and continue to place calls. These errors usually resolve themselves.

If calls are dropping or you're experiencing other call quality problems, it is recommended that you follow the troubleshooting steps below even if you have yet to have trouble with completing a call.

To begin with troubleshooting your call connection issues, ensure you went through [the steps](https://support.regal.ai/hc/en-us/articles/4466197655579-Setting-up-your-environment-to-use-Regal-Voice-) to set up your Regal environment correctly:

- You are using a wired ethernet connection and WiFi is disabled
- You are not using a VPN (if you are using a VPN, please reach out to the Regal team for a list of domains that need to be whitelisted in order to use Regal properly)
- You are using a wired, not wireless, headset (and the device is not muted, especially if there is a physical control on the device)
- You are using Google Chrome **(only supported browser)**
- You have **microphone** permissions enabled for your browser

Regal requires access to your microphone via your browser settings. Your microphone settings can be edited via the following steps:

1. Select the lock icon in the address bar of the Chrome browser
2. Toggle the microphone option to on (if it is available and set to off), if not proceed to step 3.
3. Select Site Settings
4. Set the Microphone permission option to "Allow"
5. Close settings and refresh the Regal page

After the above steps, if the issue persists, try closing out bandwidth hogging applications across your network like video and music streaming services (Netflix, YouTube, Spotify, Apple Music, etc.), games, social media sites, and conferencing software (like Zoom, Google Meets, etc.).

Next, try to clear your DNS cache, and cookies.

- Click the three dots at the top right of your Google Chrome window
- Select "More Tools" and then select "Clear Browsing Data"
- Change the time period to go back to the last time you had no call issues with the Regal app.
- Ensure "Cookies and other site data", and "Cached images and files" is checked then hit Clear Data
- **Restart your browser once this process is completed, login to Regal and place a test call to your cell phone to ensure the issues are resolved.**

If you are still experiencing intermittent issues in your call quality, run the [*Twilio Network Test*](https://networktest.twilio.com/) to verify whether there are some underlying network issues affecting your connection to Regal.   
  
On the left side of the test, ensure you receive a ![Screen_Shot_2022-02-25_at_11.19.33_AM.png](https://support.regal.ai/hc/article_attachments/4471466652315) on all of the **NTS** and **VOICE** checks. See below:  
  
![Screen_Shot_2022-02-25_at_11.23.26_AM.png](https://support.regal.ai/hc/article_attachments/4471523528987)

If you fail one of these tests then there may be a network issue or a port issue. **We suggest reaching out your IT department or ISP for further help in resolving the underlying issue.**

If you passed all of these tests, read the right side (**Log Output**) to verify the stability and strength of your connection.

- Take note of any red text as this will indicate an issue.
- You should successfully establish a UDP, TCP, and TLS connection to Twilio in no more than 1000 milliseconds (ms), and your lowest bandwidth should not be lower than 8000 kBits/sec.  
  ![Screen_Shot_2022-02-25_at_11.39.40_AM.png](https://support.regal.ai/hc/article_attachments/4471646711323)
- Ensure your lowest PCMU and Opus connection does not drop below the following: ![Screen_Shot_2022-02-25_at_11.37.04_AM.png](https://support.regal.ai/hc/article_attachments/4471542420379)
- Ensure you are connected to the right endpoint to reduce delay. Use [this list](https://www.twilio.com/docs/global-infrastructure/edge-locations/legacy-regions) for your reference. A VPN may affect whether you connect to the right endpoint and increase your delay on calls. ![Screen_Shot_2022-02-25_at_11.40.40_AM.png](https://support.regal.ai/hc/article_attachments/4471686086939)
- Average RTT should not exceed 150ms, jitter should not exceed 20s and you should have 0% packet loss. ![Screen_Shot_2022-02-25_at_11.44.16_AM.png](https://support.regal.ai/hc/article_attachments/4471708761243)

⚠️

If your results do not meet these minimum standards, try rebooting your modem and/or router. If the issue persists, connect with your IT department or ISP (internet service provider) for help with resolving your network issues.

✅

Place a manual outbound call to yourself or an internal phone number to confirm the issue is resolved after following all the steps.

As always, we are available to assist you in any of the above troubleshooting steps through the in-app Chat icon when you are logged into Regal!