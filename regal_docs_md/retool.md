# Retool Embed

## Add Custom Component to Retool app

1. Navigate to you and existing or new Retool web app
2. Add the custom component building block to your app

![](https://files.readme.io/242127b-image.png)

3. Click on the custom component to reveal the inspector
4. Add the below pieces of code to the "Model" & "iFrame" sections on the component

   1. Model:

   json

   ```
   {"contactPhone": "", "agentEmail":"", "externalId":"","profileId":""}
   ```

   2. iFrame:

   HTML

   ```
   <iframe src="https://app.regal.io/agent" 
           allow="fullscreen;microphone" 
           sandbox="allow-scripts allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-top-navigation allow-same-origin" 
           width="740px" height="580px"> //this can be resized 
   </iframe>

   <script>
   function updateModel(dataObject) {
       for (const key in dataObject) {
           if (dataObject.hasOwnProperty(key)) {
               window.Retool.modelUpdate({ [key]: dataObject[key] });
           }
       }
   }

   window.addEventListener('message', (event) => {
       if (event.data && event.data.action === 'task-active') {
           console.log('Event received from regal', event.data);

           let eventKeys = ['contactPhone', 'agentEmail', 'externalId', 'profileId'];
           let updateData = {};

           eventKeys.forEach((key) => {
               if (event.data[key]) {
                   updateData[key] = event.data[key];
               }
           });

           updateModel(updateData);
       }
   }, false);
   </script>
   ```
5. Enable all the check boxes under "Interactions"
6. Now you can preview and interact with Regal within Retool

![](https://files.readme.io/01477ab-Screenshoot_2024-07-03_at_08.17.402x.png)
  
![](https://files.readme.io/69db2f9-Screenshoot_2024-07-11_at_09.09.122x.png)
  

## Using Regal contact data within your Retool web app

1. Now that you've success embedded Regal into Retool, you can now reference Regal data across your web app to dynamically power queries and other components
2. Regal will pass the below data we defined in the Model of the custom component for any active task. An active task is any task that is highlighted on the agent desktop.
3. To reference the Model data use the below syntax, note you will replace the "customComponentName" with the name of the custom component that houses Regal.
   1. Contact Phone:`{{ customComponentName.model.contactPhone}}`
   2. Agent Email:`{{ customComponentName.model.agentEmail}}`
   3. External Id:`{{ customComponentName.model.externalId}}`
   4. Regal Profile Id: `{{ customComponentName.model.profileId}}`

![](https://files.readme.io/611c460-Screenshoot_2024-07-03_at_08.32.21.gif)

Updated about 2 months ago

---
