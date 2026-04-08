# Kindly

> ## 📘
>
> To set up your Kindly.ai integration with Regal, please submit a Regal support ticket.

## Create Regal Application Integration in Kindly.ai

1. Navigate to the Kindly.ai workspace you'd like to connect to Regal
2. Click on the "Connect" page

![](https://files.readme.io/dc53081-Screenshoot_2024-07-05_at_08.24.572x.png)

3. Click on "Applications"
4. Select "New Application" and name it "Regal"
5. Enter the URL provided to you by Regal
6. Click "Create Application"

![](https://files.readme.io/a7bf925-Screenshoot_2024-07-05_at_08.28.122x.png)

7. Copy the API Key and share it in a secure way with your Regal POC via the open support ticket
   1. You can use <https://pwpush.com/> to share your API key

## Add Fallback Dialogue to Transfer to Agent In Regal

1. Navigate to "Build" where we will configure the fallback dialogue
2. Click on "Dialogues" on the left hand side
3. Select the "+" button to create a new Dialogue
4. Click on "Fallback" to create a new Fallback Dialogue

![](https://files.readme.io/a2454e3-Screenshoot_2024-07-05_at_08.47.252x.png)

5. Within the new Fallback Dialogue, add "TRANSFER TO HUMAN" under the Bot Reply

![](https://files.readme.io/f096649-Screenshoot_2024-07-05_at_08.49.462x.png)

6. Click "Save"

> ## ❗️
>
> Before moving onto the next section, wait for Regal to confirm they have added the Application API key to the backend

## Create Regal Journeys

There are a minimum of two Journeys you will need to build in order to post inbound messages from Regal to Kindly.ai and a second journey to listen to Kindly.ai events and ultimately send outbound message to the contact.

### Sending Inbound SMS to Kindly.ai

1. Create a new journey
2. Set the trigger to the Regal event called `sms.received`
   > ## 🚧
   >
   > This will trigger the journey anytime an SMS is received in Regal so you'd likely want to add additional filter criteria to the trigger to prevent unintended messages
3. Add in a "Cancel Task" action node and select "Task Type" & "Inbound SMS" to prevent the inbound SMS from being assigned to an agent
4. Add a "Webhook" action node to send the reply to Kindly.ai
   1. Name: Kindly.ai - Send Message
   2. Endpoint URL: `https://bot.kindly.ai/api/v1/send`
   3. Method: POST
   4. Custom Headers:
      1. Authorization: Bearer {{Your Kindly Regal Application API Key}}
      2. Content-Type: application/json
   5. JSON Payload:
      1. JSON

         ```
         {
         "user_id": "{{contact.externalId}}",
         "message": "{{event.properties.content}}",
         "language_code": "en"
         }
         ```

![](https://files.readme.io/a76e9cf-Screenshoot_2024-07-05_at_09.23.302x.png)
  

### Receiving Kindly.ai Events and Sending them via Regal SMS

1. Create Kindly.ai response SMS campaign

   1. The message content will only contain the dynamic variable: `{{{contact.customProperties.kindly_last_response}}}`![](https://files.readme.io/54b4985-Screenshoot_2024-07-05_at_09.53.082x.png)
2. Create a Kindly.ai "Transfer to Human" agent SMS campaign or outbound Call campaign

   1. This campaign will be used in the journey to prompt the agent to outreach to contact if Kindly.ai is not able to handle the inbound message

1. Create a new Regal journey and name it however you'd like
2. Set the trigger to the "Kindly Bot Response" custom event
3. Add a "Conditional Match" logic node

   1. Name: Kindly - Transfer to Human?
   2. Condition Type: Triggering Event
   3. Property Name: properties.kindly\_last\_response
   4. Operator: Equals
   5. Property Value: TRANSFER TO HUMAN
4. Add the automated SMS campaign for the automated response for the "No" path
5. Add the agent sms or call campaign for the "Yes" path
6. Save the journey as live

![](https://files.readme.io/b219122-Screenshoot_2024-07-05_at_09.58.062x.png)
> ## 🚧
>
> Test your integration thoroughly to ensure everything is working as expected

Updated about 1 year ago

---
