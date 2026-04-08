# Kustomer Embed

1. Within your Kustomer box, generate an API Key as documented in the [Kustomer docs](https://developer.kustomer.com/kustomer-apps-platform/docs/getting-started-with-kustomer#obtaining-an-api-key).
2. Once you have the API Key (please store it securely as you will not be able to read it again from the Kustomer website, if you lose it you'll have to create a new one), you'll have to hit the Kustomer API to create the private widget within your box. This is the command to do it from a terminal:

   cURL

   ```
   curl --location 'https://api.kustomerapp.com/v1/apps/available' \
   --header 'Content-Type: application/json' \
   --header 'Authorization: Bearer REPLACE_THIS_WITH_THE_API_KEY' \
   --data '{
       "app":"regal_dialer_widget",
       "version":"0.0.1",
       "iconUrl":"https://cdn.regal.io/regal-128-widget-logo.png",
       "title":"Regal Dialer",
       "meta":{
         "externalQueue":"regal_dialer"
       },
       "dataSubscriptions":[
         "click-to-dial",
          "status-sync"
       ],
       "widgets":[
         {
           "url":"https://cdn.regal.io/embed-adapter/index.html",
           "icon":"https://cdn.regal.io/regal-128-widget-logo.png",
           "width":"464px",
           "height":"480px"
         }
       ]
     }'
   ```
3. Once you've successfully ran that, you can go to Kustomer, and click Apps on the sidebar:

   ![](https://files.readme.io/43becaae8b69de00b2efb64a5b0f5f32bc08ecf55fdf71ce4fb6c9d750070ac8-kustomer_nav.png)
4. Search for the Regal Dialer within the Applications Directory. Click on it and install it.

   ![](https://files.readme.io/fc8806cbdae3872c5e3e73df5c1e3ead0118b118d90a04c6e44f2057f9731a84-regal_kustomer_app.png)
5. The widget should now be available for all your users in Kustomer. You can open the Widget from the Widgets icon in the sidebar:

   ![](https://files.readme.io/f790a315eda2dde5f7c4f73a2e7086737282b324ffd27b204be1ea9a8901c8d8-widgets_nav.png)
6. You're all done! Agents can now interact with the Regal app in Kustomer.

![](https://files.readme.io/72180c9181fc4ad8f240509333ba68497aabdd918f96a95d2f211cc84a06c02c-Kustomer_widget.png)

Updated about 2 months ago

---
