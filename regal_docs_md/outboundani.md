# OutboundANI

The Regal OutboundANI integration automatically selects the optimal phone number for each dial using real-time analytics to ensure optimal connect rates and number health.

To achieve optimal results, dialing should be limited to 50 calls per number per day, with at least three phone numbers per area code to enable effective rotation. This approach typically requires a minimum of 1,000 phone numbers to ensure effective call distribution.

## Set Up the Integration

Reach out to your CSM to get set up with your outboundANI account. Then, follow these steps to set up the integration in Regal:

1. In your outboundANI portal, select OUTBOUNDANI API from the Lead Management nav section.

![](https://files.readme.io/dda4d7dfd122df011aca06f37018844b87bdcd22c4049b688ecd5e3e05011793-Screenshot_2025-02-26_at_4.17.23_PM.png)

2. Click on 'Create Api Key'

![](https://files.readme.io/b892bdf9c1d26b6d3b9359b6676c42578ea990c818e16ed6c5084f2591c11089-Screenshot_2025-02-26_at_4.34.23_PM.png)

3. Select any option from the dropdown (it doesn't matter) and save. This API key will work for any dialing mode.

![](https://files.readme.io/ff7c8f3cc24f4f496e31f88990eb5533ef2ce37307bb4dce32909dfdf6bfa508-Screenshot_2025-02-26_at_1.02.01_PM.png)

You'll see the API key appear on the page. In the Actions columns, activate the key. Activated keys will have a status of 'Active'.

![](https://files.readme.io/c5ec9e83f9aacae18b0044ddf8b70e75690a0f7802fc445a91fd44cc252922a1-Screenshot_2025-02-26_at_4.34.32_PM.png)

4. In Regal, go to Settings > Integrations. Click to connect the outboundANI integration.

![](https://files.readme.io/b7adfbafbb1e556e138dfd4681524e76ab8e3a63bf1744a86461a0a935caec3c-outboundani_connect.png)

5. Input your API key from step 3 and save.

![](https://files.readme.io/6db9650782891b2974f12a84cee149124cff52bc4b067ec3983b38bc8d2a9dff-outbound_ani_api_key_input.png)

If you've successfully connected with a valid API key, you'll see the integration marked as 'Connected' with an option to disconnect at any time.

![](https://files.readme.io/5557f2a745ff18d2066d24a1eed5c01e32a09ff8b1750af68da0200fbabb868e-outbound_ani_connected.png)
  

## Enable the Regal OutboundANI integration for your Campaign

Once the integration is connected, you can enable it to be used for any outbound phone campaign with these steps. After selecting the campaign you want to enable, flip on the 'Enable OutboundANI' toggle.

![](https://files.readme.io/70c1295a2940b48bebfbc02f71ec213b30614fbfd5bfac8d74a9f0022ef55332-outboundani_campaign_setting.png)

And you're done! The Regal OutboundANI integration will automatically select the number calls are dialed from. In the case that the integration is not able to select a number (e.g., the API key is invalid, or there is an account setup issue), Regal will fall back to the static or dynamic FROM number selected in campaign setup.

![](https://files.readme.io/3af1d94092abf41636dc12cdd801afaff756bc6ceea0025a444ccfc9f9f7bbe9-Screenshot_2025-02-26_at_4.27.15_PM.png)

NOTE: outboundANI may take **up to one hour to process changes** to campaigns or your list of active phone numbers.

Updated about 1 year ago

---
