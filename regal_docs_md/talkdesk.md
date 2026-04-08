# Talkdesk

This integration enables real-time synchronization between Talkdesk and Regal, allowing organizations to automatically trigger personalized customer journeys based on call center interactions. Teams can create sophisticated follow-up sequences, automate SMS/email communications based on call outcomes, and deliver timely customer engagement without manual intervention.

# Create Talkdesk Custom Integration

1. Navigate to the "Builder" section within Talkdesk
2. Click on the "Integrations" tab

![](https://files.readme.io/3539b878ab807539b45a8defcb95a297323678cdb20c1f525f4aaca264d5e33d-CleanShot_2024-12-05_at_08.58.55.png)

3. Search for "Custom Integration" and click "Add Integration"

![](https://files.readme.io/135d2bd353363ada2c62425acefd0edb2bec1e0eb6167aa4e87bf210f7bf9f00-CleanShot_2024-12-05_at_09.00.45.png)

4. Configure the Basic Information:
   1. Name: Regal Integration
   2. Desc: Send data from Talkdesk to Regal
   3. Base path: <https://events.regalvoice.com/events>
   4. Authentication Type: Http Api Key
   5. Api Key Header Name: Authorization
   6. Key Value: YOUR\_REGAL\_API\_KEY

![](https://files.readme.io/6cc05926710df2f754eefab11fb98e17efef2d35f114c84b2a809d5e0cf4eaf6-CleanShot_2024-12-05_at_09.01.51.png)

5. Hit "Save"

# Create Talkdesk Actions

Once you have create the custom integration, we'll now want to add actions which will define the data schema for use in the automation to send data to Regal.

1. Click into the new Integration you created
2. Navigate to the "Actions" tab and click on "Add Action"
3. Name your action (e.g. "Outbound Call Disposition")
4. Note: You will be create actions for each Talkdesk trigger you plan on using
5. Give your action a brief description
6. URL Settings:
   1. Set to POST
   2. Leave the relative path blank
7. Inputs & Outputs:
   1. Define your Input schema which defines the data you want to send to Regal (example)
   2. Leave the output schema blank
   3. Leave the timeout setting at 10 seconds
8. Hit "Publish"
   1. Note: Once an action is published, you cannot edit it

![](https://files.readme.io/c104b64ae9e4a3199e2223add5b524aa937095de20154d3aa40c38c4ec102ba0-CleanShot_2024-12-05_at_09.22.262x.png)

# Create a Talkdesk Automation

Now that we have created a custom integration and action(s) we can now put everything together to send data to Regal

1. Within the custom integration, click on the "Automations" tab
2. Click "Create Automation"
3. Name your automation (ex: Send Outbound Call Disposition Data)
4. Note: there will be multiple automations created depending on your use case
5. Configure the automation:
   1. In: Talkdesk
   2. When: Select the relevant Trigger (ex: an outbound call disposition is set)
      1. Note: The available data to be passed within an Action is dependent on the trigger
   3. Then: Select the relevant Action
   4. Filter the event (optional): Add any additional filters, such as call type to narrow down when the event is sent
6. Configure the action:
   1. Fill out the desired fields within the schema that was defined
   2. Ensure you have add at least one identifier (e.g. phone number, email, or userId) that match the users identifier in Regal
   3. Name your event or use the Talkdesk "Event Name" dynamic property (e.g. {{event}})
   4. Add in the event properties
      1. Example Event Properties:

      JSON

      ```
      {
          "agent_fullname": "{{agent.name}}",
          "agent_email": "{{agent.email}}",
          "direction": "Outbound",
          "talkdesk_phone": "{{talkdesk_phone_number}}",
          "call_id": "{{call_id}}",
          "type": "{{call_type}}",
          "disposition": "{{call_disposition}}"
      }
      ```

      7. Set event source to "talkdesk"

![](https://files.readme.io/5b261c03ba47da4d2b3ed32068559fceba8bcd6be2794631f0e48e40aeb70c40-CleanShot_2024-12-05_at_09.52.41.png)

# Appendix

## Action Input Schema Example:

YAML

```
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "title": "Input",
    "required": [
      "traits",
      "name",
      "properties",
      "eventSource"
    ],
    "properties": {
      "userId": {
        "type": "string",
        "title": "User ID"
      },
      "traits": {
        "type": "object",
        "title": "User Traits",
        "properties": {
          "phone": {
            "type": "string",
            "title": "Phone Number"
          },
          "email": {
            "type": "string",
            "title": "Email"
          }
        },
        "additionalProperties": false
      },
      "name": {
        "type": "string",
        "title": "Event Name"
      },
      "properties": {
        "type": "object",
        "title": "Event Properties",
        "properties": {
          "agent_fullname": {
            "type": "string",
            "title": "Agent Full Name"
          },
          "agent_email": {
            "type": "string",
            "title": "Agent Email"
          },
          "direction": {
            "type": "string",
            "title": "Call Direction"
          },
          "talkdesk_phone": {
            "type": "string",
            "title": "Talkdesk Phone"
          },
          "call_id": {
            "type": "string",
            "title": "Call ID"
          },
          "type": {
            "type": "string",
            "title": "Call Type"
          },
          "disposition": {
            "type": "string",
            "title": "Call Disposition"
          },
          "notes": {
            "type": "string",
            "title": "Notes"
          },
          "campaign_name": {
            "type": "string",
            "title": "Campaign Name"
          },
          "campaign_friendly_id": {
            "type": "string",
            "title": "Campaign ID"
          },
          "started_at": {
            "type": "integer",
            "title": "Started At"
          },
          "completed_at": {
            "type": "integer",
            "title": "Completed At"
          },
          "talk_time": {
            "type": "integer",
            "title": "Talk Time"
          },
          "wrapup_time": {
            "type": "integer",
            "title": "Wrapup Time"
          },
          "handle_time": {
            "type": "integer",
            "title": "Handle Time"
          }
        },
        "additionalProperties": true
      },
      "eventSource": {
        "type": "string",
        "title": "Event Source"
      }
    },
    "additionalProperties": false
  }
```

Updated 11 months ago

---
