# Reporting Webhooks

Reporting Webhooks send real-time activity events (e.g. contact.subscribed, sms.sent, call.completed) as JSON in an HTTP POST to an endpoint of your choosing.

## Enable Reporting Webhooks

To set up Reporting Webhooks,

- Go to the **Regal app > Settings > Integrations** page.
- In the section labeled "Reporting Webhooks", click "New Webhook."
- Enter the URL of the endpoint you'd like us to send events to, configure headers and API key if one is required. Then select which events you want to receive, and click "Save"

> ## 👍
>
> Testing
>
> To quickly test that the endpoint is receiving events, you can include the agent.activity.updated event. Then navigate to the Agent Desktop and change your activity status in the top right dropdown to a different status. You should receive an agent.activity.updated event. Then you can remove that event from the webhook, if it's not needed.

![](https://files.readme.io/7313e7ceffc00cdcf81180ecb47a3e600012e0eae837b185184772e63a1b598c-Reporting_Webhook.png)
> ## 📘
>
> Updating an Endpoint
>
> When you edit an endpoint, it can take up to 5 minutes for the cache to refresh and start sending events to your new endpoint instead.

> ## 🚧
>
> Retries
>
> Currently there are no retries on these events. If a response is not received within 5 seconds, the event is dropped and not retried. Please email [[email protected]](/cdn-cgi/l/email-protection#2e5d5b5e5e415c5a6e5c4b494f42004f47) to enable retries.

## Events

Regal publishes the following events to the Reporting Webhooks:

| Event Name | Description |
| --- | --- |
| agent.activity.updated | An agent’s activity status was changed |
| call.analysis.available | Custom AI Analysis has been completed for a call |
| call.completed | An inbound or outbound call with a contact was completed. This includes calls that were not answered |
| call.placed | An outbound call was started |
| call.recording.available | A call recording link is available |
| call.transcript.available | A transcript, AI call summary, and trackers are available |
| call.ivr.triggered | An inbound call has entered one of the IVR flows in Regal |
| call.wrapup | A call has ended and the task is now in wrapping |
| cancel.all.automated.tasks | An agent cancels all automated tasks of a contact from the agent desktop |
| contact.attribute.edited | A contact’s attributes were edited by an agent |
| contact.created | A contact was created in your Regal account |
| contact.email.created | A new email address was created in your Regal account |
| contact.experiment.assigned | A contact was assigned to an experiment |
| contact.phone.created | A new phone number was created in your Regal account |
| contact.subscribed | A contact was subscribed to a marketing channel |
| contact.unsubscribed | A contact was unsubscribed from a marketing channel |
| contacted.after.hours | A contact texted or called in outside of business hours |
| custom.task.completed | A custom task was completed |
| email.received | An email was received from contact to Regal (inbound) |
| email.sent | An email was sent from Regal to contact (outbound) |
| email.conversation.completed | An email task was completed in the Regal agent desktop |
| mms.received | An mms was received from contact to Regal (inbound) |
| mms.sent | An mms was sent from Regal to contact (outbound) |
| object.created | A custom object was created on a contact |
| object.attribute.edited | A contact's custom object attribute was edited |
| scheduled.reminder.created | An agent scheduled a reminder |
| scheduled.callback.requested | An agent schedules a callback |
| sms.conversation.completed | An SMS conversation between a contact and an agent was completed in the Regal agent desktop |
| sms.queued | An sms was queued to be sent from Regal to contact (outbound) |
| sms.received | An sms was received from a contact (inbound) |
| sms.sent | An sms was sent from Regal to contact (outbound) |
| sms.failed | An sms from Regal to contact failed to send (outbound) |
| sms.undelivered | An sms from Regal to contact was sent but couldn't be delivered (outbound) |
| task.canceled | A call or sms task was canceled |
| task.created | A call or sms task was created |
| task.reservation.accepted | A reservation was accepted by an agent |
| task.reservation.created | A reservation was created for a task |
| voicemail.recording.available | A voicemail recording is available |
| voicemail.transcript.available | A voicemail transcript and trackers are available |
| voicemail.completed | A voicemail task was completed in the Regal agent desktop |

## Event Properties

Below are the properties and definitions included in Regal events.

| Property Name | Description | Data Type |
| --- | --- | --- |
| agent\_activity\_name | Name of agent’s new availability status | string |
| agent\_availability | Availability of agent’s previous activity status. Can be true or false | boolean |
| agent\_email | Email of the agent who took an action | string |
| agent\_previous\_activity\_name | Name of agent’s previous availability status | string |
| agent\_previous\_availability | Availability of agent’s previous activity status. Can be true or false | boolean |
| agent\_time\_in\_previous\_activity | Time (in seconds) agent spent in previous activity status | integer |
| call\_id | Task Id for the call | string |
| campaign\_id | Campaign UUID | string |
| campaign\_friendly\_id | Campaign Friendly Id as seen in the App | integer |
| campaign\_name | Campaign Name | string |
| cancelation\_reason | Reason the task was canceled | string |
| cancelation\_source | Source of where the task was canceled | string |
| canceled\_by | Includes the email of the user who canceled the task, if applicable | string |
| changes | Changes made for the contact.attribute.edited event; includes name of attribute edited with the "old\_value" and "new\_value" | object |
| channel | The marketing channel: “voice” or “sms” | string |
| completed\_at | UTC Timestamp when the task was completed | UTC timestamp |
| contact\_phone | Phone number of the contact | string |
| content | In sms events: Content of the message   In sms.conversation events: Contents of the conversation | **string** in sms.queued, sms.sent, sms.undelivered and sms.received events  **array** in sms.conversation.completed event |
| conversation\_happened | Based on the disposition of the task, whether or not a conversation happened | boolean |
| direction | INBOUND or OUTBOUND | string |
| disposition | Task disposition | string |
| email | The last email associated with the contact | string |
| ended\_at | UTC timestamp when the conversation was ended | timestamp |
| error\_code | The error code for failed or undelivered sms | string |
| experiment\_id | Experiment ID | integer |
| experiment\_name | Name of experiment | string |
| experiment\_variant | Variant a contact was assigned to in an experiment | string |
| from\_number | Phone number that sent the message | string |
| handle\_time | Full duration task was being handled, including talk time and wrap time (completed\_at - started\_at) | integer |
| ip | The IP address from where the subscription update was initiated | string |
| isPrimary | Whether the phone or email is the primary one for the contact | boolean |
| ivr\_flow\_id | IVR UUID | string |
| ivr\_flow\_name | IVR name shown in app | string |
| ivr\_flow\_version | The version number of that particular IVR | integer |
| ivr\_flow\_trigger\_id | Trigger ID of a specific inbound call to an IVR | string |
| label | Custom label set by you or your agents to describe a phone number or email address of a contact | string |
| media\_url | Media URL (for MMS) | string |
| notes | Task notes | string |
| objections | Task tags | array |
| phone | Same as contact\_phone | string |
| queue | Name of task queue | string |
| recording\_link | Call recording link | string |
| regal\_voice\_phone | Regal phone number | string |
| regal\_voice\_phone\_internal\_name | Internal name of phone line displayed to agents | string |
| reserved\_agent\_email | Email of the agent the task reservation is for | string |
| reserved\_agent\_fullname | Full name of the agent the task reservation is for | string |
| scheduling\_agent\_fullname | Full name of the agent who scheduled the Callback | string |
| scheduling\_agent\_id | Email of the agent who scheduled the Callback | string |
| sms\_conversation\_id | Task ID for the conversation. (If the sms was part of a two-way conversation with an Agent, rather than just an automated outbound sms) | string |
| source | Source of the subscription update. A source value that starts with “Brand.” indicates that the subscription update was initiated by the Brand (outside of the Regal platform). A source value that starts with “Regal.” indicates that the subscription update was initiated through the Regal platform. | string |
| started\_at | UTC timestamp when the conversation was started | UTC timestamp |
| talk\_time | Duration of conversation (ended\_at - started\_at) | integer |
| target\_agent\_fullname | Full name of the agent who contact (and all contact’s tasks) are assigned to | string |
| target\_agent\_id | Email of the agent who contact (and all contact’s tasks) are assigned to | string |
| task\_id | Unique identifier for the task. Will match the call\_id or sms\_conversation\_id of a completed task event | string |
| text | The exact text the contact was presented for opt in | string |
| timestamp | Unix timestamp for when the event took place | unix timestamp |
| to\_number | Phone number to which the message was sent | string |
| type | Task Type (e.g., Outbound SMS, Outbound Call, Scheduled Callback) | string |
| wrapup\_time | Duration task was in wrap up (completed\_at - ended\_at) | integer |

## Event Schema

Events from Reporting Webhooks follow the below schema:

JSON

```
{
"userId": "123",
"originalTimestamp": "1636666068",
"traits":{"email": "[email protected]", "phone": "+17625551796"},
"name": "event.name",
"eventId":"f49a3cf9cb1336683bd5f19db4c61147",  //unique identifier for each event
"properties": {
  "property": "value1", 
  "property2": "value2"
},
"eventSource": "Regal Voice"
}
```

## agent.activity.updated

JSON

```
{
  "name": "agent.activity.updated",
  "properties": {
    "agent_email": "[email protected]",
    "agent_activity_name": "Offline",
    "agent_availability": false,
    "agent_previous_activity_name": "Available",
    "agent_previous_availability": true,
    "agent_time_in_previous_activity": "3829"
  },
  "originalTimestamp": "1657836812",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5f19db4c61149"
}
```

## call.analysis.available

JSON

```
{
  "traits": {
    "phone": "+1XXXXXXXXXX",
    "email": "[email protected]"
  },
  "name": "call.analysis.available",
  "brand": "circle-bank",
  "contact_email": "[email protected]",
  "contact_phone": "+1XXXXXXXXXX",
  "created_at": "1754079836",
  "entity_type": "event",
  "event_id": "9f5d8dbb2973b0e2359c6fd34111111",
  "event_type": "regal_voice_event",
  "external_id": "41dd1aa2-1111-f011-a2d5-00505611111",
  "name": "call.analysis.available",
  "original_timestamp": "1754079835",
  "profile_id": "62653af1111111173af128291e92",
  "properties": {
    "agent_email": "[email protected]",
    "call_analysis": {
      "no_ai": false,
      "qualification_decision": "no decision",
      "follow_up_required": true,
      "budget_confirmed": false,
      "decision_maker_present": true,
      "compliance_acknowledged": false
    },
    "contact_phone": "+1XXXXXXXXXX",
    "incoming_sip_headers": {
      "Via": "SIP/2.0/UDP srv1.example.com;branch=z9hG4bK776asdhds",
      "From": "<sip:[email protected]>;tag=1928301774",
      "Call-ID": "a84b4c76e66710"
    },
    "is_ai_agent": true,
    "outgoing_sip_headers": {
      "Via": "SIP/2.0/TCP srv2.example.com;branch=z9hG4bKgsdh7723",
      "To": "<sip:[email protected]>",
      "User-Agent": "RegalVoiceAI/1.0"
    },
    "task_id": "WT7f3ea47fa6e6055aa847f0a62111111"
  },
  "originalTimestamp": "1754079835",
  "source": "Regal Voice"
}
```

  

## call.completed

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "call.completed",
  "properties": {
    "agent_firstname": "Rebecca",
    "agent_fullname": "Rebecca Greene",
    "agent_email": "[email protected]",
    "direction": "OUTBOUND",
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Sales Line",
    "contact_phone": "+176255517965",
    "call_id": "WTxxxxx9",
    "type": "Outbound Call",
    "disposition": "Converted During Convo",
    "notes": null,
    "objections": null,
    "campaign_name": "Life Insurance Quote Follow Up",
    "campaign_friendly_id": "445",
    "conversation_happened": true,
    "started_at": 1657855046,
    "ended_at": 1657855053,
    "completed_at": 1657855059,
    "talk_time": 7,
    "wrapup_time": 6,
    "handle_time": 13,
    "journey_uuid": null,
    "journey_name": null,
    "journey_friendly_id": null
  },
  "originalTimestamp": "1657855059",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5f19db4c61148"
}
```

## call.placed

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "call.placed",
  "properties": {
    "agent_fullname": "Rebecca Greene",
    "agent_email": "[email protected]",
    "scheduling_agent_fullname": null,
    "scheduling_agent_email": null,
    "direction": "OUTBOUND",
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Sales Line",
    "contact_phone": "+176255517965",
    "task_id": "WTxxxxx9",
    "type": "Outbound Call",
    "queue": "Outbound Call",
    "channel": "voice",
    "campaign_name": "Call 1",
    "campaign_friendly_id": "445",
    "journey_uuid": "6f7cd128-6c19-43b7-a87d-9dbaf0ea7615",
    "journey_name": "Welcome Journey",
    "journey_friendly_id": 936,
    "journey_execution_name": "profile_8f89d2635d0247b098ae1967d8cee394_2024-06-15t02_19_40",
    "journey_node_uuid": "de5215c6-4f68-4706-bb38-734f6b05fb94",
    "journey_node_friendly_id": 4,
    "related_object_id": null,
    "related_object_type": null
  },
  "originalTimestamp": "1657855059",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5f19db4c61148"
}
```

## call.ivr.triggered

JSON

```
{
  "brand":"circle-bank-segment",
  "contact_phone":"+19179167272",
  "created_at":"1714678908",
  "event_id":"1bea15a0438dd0800363ef92d64be2ed",
  "event_type":"regal_voice_event",
  "name":"call.ivr.triggered",
  "original_timestamp":"1714678905",
  "profile_id":"e75f80218e4c28d0deec70e29e803ece",
  "properties":{
    "contact_number":"+19179167272",
    "direction":"INBOUND",
    "ivr_flow_id":"2c6914d0-7122-421a-97a2-01b58386bffa",
    "ivr_flow_name":"Test Lily Send to agent",
    "ivr_flow_trigger_id":"CA1f0c3c2abe2c0499e77a1313acbdd0d2",
    "ivr_flow_version":5,
    "regal_voice_phone":"+12027984273",
    "regal_voice_phone_internal_name":"New Cobra Kai Test",
  },
  "source":"Regal Voice",
  "traits":{
    "phone":"+19179167272"
	}
}
```

## call.recording.available

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "call.recording.available",
  "properties": {
    "agent_email": "[email protected]",
    "direction": "OUTBOUND",
    "regal_voice_phone": "+19032823158",
    "regal_voice_phone_internal_name": "Acquisition Line",
    "contact_phone": "+13523182825",
    "call_id": "WT953358e8822dd9333fc38dfbac25e1e1",
    "call_sid": "CA01d01f4cb78cb54882137838375bb549",
    "type": "Outbound Call",
    "disposition": "Converted On Call",
    "notes": "The customer was just confirming pricing. Said pricing was unclear on our iOS app.",
    "objections": ["Pricing"],
    "campaign_name": "Abandoned Cart",
    "campaign_friendly_id": "13",
    "recording_link": "https://api.twilio.com/2010-04-01/Accounts/ACxxx/Recordings/xxx.mp3",
    "started_at": 1657799128,
    "ended_at": 1657799136,
    "talk_time": 8,
    "journey_uuid": "xxx-xxx-xxx-xxxx",
    "journey_name": "Welcome Journey",
    "journey_friendly_id": 130
  },
  "originalTimestamp": "1657843308",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5f19db4c61127"
}
```

## call.transcript.available

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "call.transcript.available",
  "properties": {
    "agent_email": "[email protected]",
    "task_id": "WT953358e8822dd9333fc38dfbac25e1e1",
    "call_summary": "The agent Zoe explained insurance options to Joe and he said he'll need to think about it before moving forward Agent politely ended the call.",
    "contact_name": "Joe Smith",
    "contact_phone": "+13523182825",
    "is_voicemail": false,
    "moments_count": 18,
    "recording_id": "RE0118052841b7299d0630d1dff610c1fb",
    "recording_link": "https://api.twilio.com/2010-04-01/Accounts/ACxxx/Recordings/xxx.mp3",
    "recording_duration": 78.75987,
    "request_timestamp": 1657799128,
    "response_timestamp": 1657799136,
    "sentiments": {
      "contact_sentiment": 70,
      "agent_sentiment": 75,
      "agent_sentiment_reason": "Zoe was polite and attentive, effectively gathering information and providing a resource, which contributed to a positive interaction.",
      "contact_sentiment_reason": "Joe was satisfied with the information provided but may have wanted more assistance regarding insurance options."
    },
    "trackers": [
      {
        "tracker_id": "4be87957-9140-4451-894a-bdbaed1f2460",
        "tracker_name": "Refinance"
      },
      {
        "tracker_id": "eb2577c6-5e23-4c65-9e04-5cc5d49eee7e",
        "tracker_name": "High Intent"
      }
    ],
    "transcript": "[handling agent]: Hi Joe, this is Zoe with BrightCover Insurance. I’ll be going over some insurance options with you today. [contact]: Sounds good. [handling agent]: Before we start, I’m going to transfer you to a specialist for a moment. One sec. [transfer agent]: Hi Joe, this is Mark. Just verifying a few details before sending you back to Zoe. [contact]: Okay. [handling agent]: Thanks, Joe. Based on what you shared, here are some plan options... [contact]: I’ll need to think about it. [handling agent]: Totally understandable. Feel free to reach out anytime. Have a great day! END OF TRANSCRIPT",
		"transcript_is_truncated": false,
    "transcript_url": "https://app.regalvoice.com/transcripts/WT953358e8822dd9333fc38dfbac25e1e1"
  },
  "originalTimestamp": "1657843308",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5f19dwe4c61147"
}
```

## call.wrapup

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "call.wrapup",
  "properties": {
    "campaign_friendly_id": 123,
    "campaign_name": "Campaign",
    "channel": "voice",
    "contact_email": "[email protected]",
    "contact_phone": "+19173016303",
    "direction": "OUTBOUND",
    "journey_friendly_id": 123,
    "journey_name": "Journey",
    "journey_uuid": "uuid",
    "queue": "Everyone",
    "regal_voice_phone": "+14062956306",
    "regal_voice_phone_internal_name": "Square Local Services",
    "reserved_agent_email": "[email protected]",
    "reserved_agent_fullname": "Agent A",
    "scheduling_agent_email": "[email protected]",
    "scheduling_agent_fullname": "Agent B",
    "target_agent_email": "[email protected]",
    "target_agent_fullname": "Agent Smith",
    "task_id": "WT2159ebfc197f77ed3c5174a963f6b268",
    "type": "Scheduled Callback",
   },
   "originalTimestamp": "1657843308",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5f19ab4c61147"
}
```

## cancel.all.automated.tasks

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "cancel.all.automated.tasks",
  "properties": {
    "campaign_friendly_id": 445,
    "canceled_by": "[email protected]",
    "cancelation_source": "Agent Desktop",
    "original_task_id": "WTxxxxxx",
    "timestamp": "1657855043"
  },
  "originalTimestamp": "1657855043",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb3336683bd5f19db4c61147"
}
```

## contact.attribute.edited - when an attribute is changed

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]",
  },
  "name": "contact.attribute.edited",
  "properties": {
    "agent_email": "[email protected]",
    "contact_phone": "+17625551796",
    "changes": {
      "custom_properties": {
        "annual_income": {
          "old_value": "150,000",
          "new_value": "300,000"
        }
      }
    },
    "created_at": "1657855462"
  },
  "originalTimestamp": "1657855462",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5f1ydb4c61147"
}
```

## contact.attribute.edited - when a phone/email is added to a contact

JSON

```
//in this example +12312259768 was added to the contact by the agent and  made the primary number
//both phone changes (b/c that contains the primary number) and phones changes because
//that's the array of all the phone numbers
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]",
  },
  "name": "contact.attribute.edited",
  "properties": {
    "agent_email": "[email protected]",
    "contact_phone": "+17625551796",
    "changes": {
      "phone": {
        "new_value": "+12312259768", //+12312259768 was made the primary number
        "old_value": "+19545582399"
      },
      "phones": {
				"new_value":["+12312259768", "+14706466940", "+18565016294", "+19545582399"], //+12312259768 was added
				"old_value":["+14706466940", "+18565016294", "+19545582399"]
			}
    },
    "created_at": "1657855462"
  },
  "originalTimestamp": "1657855462",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bz5f19db4c61147"
}
```

## contact.created

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "contact.created",
  "properties": {
    "contactPhone": "+17625551796",
    "email": "[email protected]",
    "firstName": "Katherine",
    "lastName": "TheGreat",
    "customProperty1": "value1", // whatever custom attributes the contact was created with will also appear here
    "customProperty2": "value2"
  },
  "originalTimestamp": "1657839234",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336n83bd5f19db4c61147"
}
```

## contact.email.created

JSON

```
/This is an example payload: your payload will change based on the fields updated upon creation./
{
  "firstName": "J",
  "lastName": "Smith",
  "leadStatus": "New",
  "new_email_properties": {
    "email": "[email protected]",
    "emailOptIn": {
      "ip": "",
      "source": "crm",
      "subscribed": null,
      "text": null,
      "timestamp": "1737128116",
      "timestampTransformed": "2025-01-17 15:35:16 +00:00"
    },
    "isPrimary": true,
    "label": null,
    "source": "crm"
  }
}
```

## contact.experiment.assigned

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]",
  },
  "name": "contact.experiment.assigned",
  "properties": {
    "experiment_name": "Post Call Offer Test",
    "experiment_id": "xxxx-xxxx-xxxx-xxxx",
    "experiment_variant": "Aggressive Offer - 50%",
    "journey_uuid": "xxxx-xxxx-xxxx-xxxx",
    "journey_friendly_id": 220,
    "journey_name": "Post Call Follow Up"
  },
  "originalTimestamp": "1657855118",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1z36683bd5f19db4c61147"
}
```

## contact.phone.created

JSON

```
{
  "traits": {
    "phone": "+17625551796", //the primary phone for the contact
    "email": "[email protected]" //the primary email for the contact
  },
  "name": "contact.phone.created",
  "properties": {
    "contactPhone": "+13332311433", //the new phone created
    "firstName": "Rebecca",
    "lastName": "Greene",
    "isPrimary": false, //false if not primary, true if primary
    "label": "Mobile",
    "source": "circle-bank.api"
  },
  "originalTimestamp": "1694458444",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336b83bd5f19db4c61147"
}
```

## contact.subscribed

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]",
    "ip": "78.97.213.166"
  },
  "name": "contact.subscribed",
  "properties": {
    "new_subscription": true,
    "channel": "voice",
    "text": "By clicking “Next”, I agree to receive automated marketing, including calls and recurring text messages from Circle Bank at the telephone number provided. Consent is not a condition of purchase. Reply HELP for help and STOP to cancel. Msg & data rates may apply.*",
    "ip": "78.97.213.166",
    "source": "circle-bank.booking_flow",
    "timestamp": "1611245052"
  },
  "originalTimestamp": "1657839189",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336jk3bd5f19db4c61147"
  }
}
```

## contact.unsubscribed

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]",
    "ip": "78.97.213.166"
  },
  "name": "contact.unsubscribed",
  "properties": {
    "new_subscription": true,
    "channel": "voice",
    "text": null,
    "ip": "207.38.149.143",
    "source": "regalvoice.agent_desktop",
    "timestamp": "1657855229"
  },
  "originalTimestamp": "1657855230",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb133668zjbd5f19db4c61147"
}
```

## contacted.after.hours

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]",
  },
  "name": "contacted.after.hours",
  "properties": {
    "channel": "voice",
    "contact_phone": "+17625551796",
    "contact_email": "[email protected]",
    "regal_voice_phone": "+14062956306",
    "regal_voice_phone_internal_name": "Main",
    "timestamp": "1689125232"
  },
  "originalTimestamp": "1657863441",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb13668nmbd5f19db4c61147"
}
```

## custom.task.completed

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "call.completed",
  "properties": {
    "agent_email":"[email protected]",
    "agent_firstname":"Kelly",
    "agent_fullname":"Kelly Chen",
    "agent_id":"[email protected]",
    "completed_at":1706736615,
    "contact_phone":"+16404008616",
    "custom_task_name":"test custom task",
    "disposition":"React Upgrade",
    "journey_friendly_id":866,
    "journey_name":"New Journey",
    "journey_uuid":"76446a0a-2874-46ea-aa76-c951adc7bae9",
    "notes": "some notes",
    "objections": null,
    "type":"Custom Task"
  },
  "originalTimestamp": "1657855059",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb133668hbd5f19db4c61147"
}
```

## scheduled.reminder.created

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]",
  },
  "name": "scheduled.reminder.created",
  "properties": {
    "scheduling_agent_email": "[email protected]",
 		"scheduling_agent_fullname": "Rebecca Greene",
    "contact_phone": "+17625551796",
    "originating_task_id": "WTxxxx",
    "scheduled_at": "2022-07-16T14:00:00.000-04:00",
    "notes_from_agent": "Remember to email the insurance form.",
    "timezone": "America/New_York",
    "regal_voice_phone": "+19545558563"
  },
  "originalTimestamp": "1657863441",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bk5f19db4c61147"
}
```

## email.conversation.completed

JSON

```
{
  "userId":"123",
  "traits": {
    "email":"[email protected]",
    "phone":"+16505217070",
  },
      "brand":"circle-bank-segment",
      "contact_email":"[email protected]",
      "contact_phone":"+19173910966",
      "created_at":"1738869410",
      "entity_type":"event",
      "event_id":"97b22bb420506a802c1894cd146e0c76",
      "event_type":"regal_voice_event",
      "name":"email.conversation.completed",
      "original_timestamp":"1738869402",
      "profile_id":"188daa066f0e9a60387d38c21406adc1",
      "properties":{
   	     "agent_email":"[email protected]",
         "agent_firstname":"Taylor",
         "agent_fullname":"Taylor Swift",
         "agent_id":"[email protected]",
         "agent_tags":"ABC",
         "agent_teams":
       		[0:"Sales Team"],
         "campaign_friendly_id":null,
         "campaign_id":"null",
         "campaign_name":"null",
         "completed_at":1738869402,
         "contact_phone":"+19173910966",
         "conversation_happened":false,
         "direction":"INBOUND",
         "disposition":"Interested",
         "ended_at":1738869402,
         "handle_time":4,
         "journey_execution_name":null,
         "journey_friendly_id":null,
         "journey_name":null,
         "journey_node_friendly_id":null,
         "journey_node_uuid":null,
         "journey_uuid":null,
         "notes":null,
         "objections":null,
         "related_object_id":null,
         "related_object_type":null,
         "started_at":1738869398,
         "talk_time":4,
         "task_id":"WTa68ab439a93d258008aa5796ca833473",
         "type":"Inbound Email",
         "wrapup_time":0
          },
    "source":"Regal Voice",
    "source_workflow":"Internal"
}
```

## email.received

JSON

```
{
  "userId":"123",
  "traits": {
    "email":"[email protected]",
    "phone":"+16505217070",
  },
  "name":"email.received",
  "properties": {
    "attachments":[],
    "bcc_emails":[],
    "body_snippet":"inbound content",
    "cc_emails":[],
    "contact_email":"[email protected]",
    "direction":"inbound",
    "message_id":"fed720247fc5398e",
    "sender_email":"[email protected]",
    "subject":"inbound subject",
    "thread_id":"fed720247fc5398e",
    "to_emails":[]
  },
  "eventSource": "Regal Voice",
  "originalTimestamp":"1706892040",
  "eventId":"f49a3cf9cb1336683bd5f19db4c61147"
}
```

## email.sent

JSON

```
{
  "userId":"123",
  "traits": {
    "email":"[email protected]",
    "phone":"+16505217070",
  },
  "name":"email.sent",
  "properties": {
    "attachments":[],
    "bcc_emails":[],
    "body_snippet":"content goes here! attaching an image for kicks",
    "cc_emails":[],
    "contact_email":"[email protected]",
    "direction":"outbound",
    "message_id":"fed720247fc5398e",
    "sender_email":"[email protected]",
    "subject":"subject goes here!",
    "thread_id":"fed720247fc5398e",
    "to_emails": [
      "[email protected]"
    ],
  },
  "originalTimestamp":"1706892040",
  "eventSource":"Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5f19db4c61147"
}
```

## mms.received

JSON

```
{
  "userId":"123",
  "traits":{
    "email":"[email protected]",
    "phone":"+19732626158"
	},
  "name":"mms.received",
  "properties":{
    "agent_email":null,
    "agent_fullname":null,
    "agent_id":null,
    "contact_phone":"+19732626158",
    "content":null,
    "direction":"INBOUND",
    "from_number":"+19732626158",
    "media_url":"https://media.staging.rv-apps.io/circle-bank-segment/mms/CH8078e71b1571428e8a57ff87a6e6bf8a/IM7a9a0e7a1285472682cdf4e1c902939d/MEd3a10a0bb28072d7dccb7ae97b6d3e2b/IMG_9307.jpg",
    "regal_voice_phone":"+14062956306",
    "regal_voice_phone_internal_name":"Cobra Kai 2: This Time It's Personal",
    "related_object_id":null,
    "related_object_type":null,
    "sms_conversation_id":"WTf04373a2af7e11427340d12915bc968e",
    "sms_message_id":"IM7a9a0e7a1285472682cdf4e1c902939d",
    "to_number":"+14062956306"
	},
  "originalTimestamp":"1714685591",
  "eventSource":"Regal Voice",
  "eventId":"f49a3cd9cb1336683bd5f19db4c61147"
}
```

## object.created

JSON

```
/This is an example custom object: payload details will change based on your custom object fields./ 
{
  "Id": "006TI000009zilKYAQ",
  "Name": "Jane Smith",
  "accountId": "001TI00000ABBCCCDD",
  "createdDate": "2025-01-01T14:11:57.000Z",
  "opportunityOwner": "agent1@00d3h000003wchsea2",
  "opportunityOwnerFirstName": "Kylie",
  "product": "Term Life Insurance",
  "regalName": "Jane Smith",
  "related_object_id": "006TI000009zilKYAQ",
  "related_object_source": "Salesforce",
  "related_object_type": "salesforce_opportunity",
  "related_object_type_name": "salesforce-opportunity",
  "stageName": "Application Created"
}
```

## object.attribute.edited

JSON

```
/This is an example custom object: payload details will change based on your custom object fields./ 
{
  "changes": {
    "properties": {
      "ApptConfirmedCheckbox": {
        "new_value": true,
        "old_value": false
      }
    }
  },
  "related_object_id": "006Pm00000RxOl7IAF",
  "related_object_type": "salesforce_opportunity",
  "related_object_type_name": "salesforce-opportunity"
}
```

## scheduled.callback.requested

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]",
  },
  "name": "scheduled.callback.requested",
  "properties": {
    "scheduling_agent_email": "[email protected]",
    "scheduling_agent_fullname": "Rebecca Greene",
    "contact_phone": "+17625551796",
    "callback_timestamp ": "2022-07-13 14:00:00 -07:00",
    "notes_from_agent": "The customer was excited to chat but was on the road.",
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Retention Line",
    "originating_task_id": "WTxxxx",
    "callback_friendly_date": "07/13/2022",
    "callback_friendly_day": "Wednesday",
    "callback_friendly_time": "02:00 PM",
    "callback_friendly_timezone": "Pacific Time",
    "callback_friendly_timestamp": "Wednesday 07/13/2022 at 02:00 PM Pacific Time"
  },
  "originalTimestamp": "1657863426",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cfzcb1336683bd5f19db4c61147",
}
```

## mms.sent

JSON

```
{
	"userId":"1009254",
	"traits": {
    "phone": "+17625551796",
    "email": "[email protected]",
  },
  "name":"mms.sent",
  "properties":{
    "agent_email":"[email protected]",
    "agent_fullname":"Regal Voice Support",
    "agent_id":"[email protected]",
    "contact_phone":"+16103296880",
    "content":null,
    "direction":"OUTBOUND",
    "from_number":"+14075558661",
    "media_url":"https://media.rv-apps.io/kin-insurance/mms/CH1084fdbb5fad49319971c760a4ec80bd/IM9b8017ee010b47198faaf21fcd29f6fa/ME729b47cbddf2578aeedc3ca27354dbe7/ME729b47cbddf2578aeedc3ca27354dbe7",
    "regal_voice_phone":"+14075558661",
    "regal_voice_phone_internal_name":"regal test",
    "related_object_id":null,
    "related_object_type":null,
    "sms_conversation_id":"WT26bdbd5eaa491f82cdafa78690281487",
    "sms_message_id":"IM9b8017ee010b47198faaf21fcd29f6fa",
    "to_number":"+16103296880"
    },
  "originalTimestamp":"1713992186",
  "eventSource":"Regal Voice",
  "eventId":"f49a3cfzcb1339683bd5f19db4c61147",
}
```

## sms.conversation.completed

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "sms.conversation.completed",
  "properties": {
    "content": [
      [
        "2022-07-15 03:17:50",
        "Agent",
        "sent",
        "Hi there, I see you're looking to cancel. Can I ask why?"
      ],
      [
        "2022-07-15 03:19:49",
        "Contact",
        "received",
        "Yeah - it hasn't been the right fit for my pup."
      ],
      [
        "2022-07-15 03:19:58",
        "Agent",
        "sent",
        "Let's hop on a call quickly so I can help out! ☺️"
      ]
    ],
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Retention Line",
    "contact_phone": "+176255517965",
    "sms_conversation_id": "WTxxxxxx",
    "agent_id": "[email protected]",
    "agent_firstname": "Rebecca",
    "agent_fullname": "Rebecca Greene",
    "direction": "OUTBOUND",
    "type": "Outbound SMS",
    "disposition": "Interested",
    "objections": ["Product Issues"],
    "notes": "Dog was having stomach issues after eating the all-fish plan. Changed up plan and extended trial 2 months.",
    "started_at": 1657855067,
    "ended_at": 1657855198,
    "completed_at": 1657855211,
    "conversation_happened": true,
    "talk_time": 600,
    "wrapup_time": 13,
    "handle_time": 144,
    "journey_uuid": null,
    "journey_name": null,
    "journey_friendly_id": null
  },
  "originalTimestamp": "1657855211",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cj1336683bd5f19db4c61147",
}
```

> ## 🚧
>
> Content Property on Automated SMS Events
>
> The **content** property is available on all sms events from automated sms triggered by journeys, but originates from the **sms.queued** event. In up to ~.05% of cases, the content field may not populate on sms.sent events from automated sms due to **sms.queued** and **sms.sent** events coming out of order, so if you need to build reporting off of the content property, use the **sms.queued** events for that.

## sms.queued

JSON

```
/ This this is an automated sms example./

{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "sms.queued",
  "properties": {
    "direction": "OUTBOUND",
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Sales Line",
    "contact_phone": "+17625551796",
    "from_number": "+19545558563",
    "to_number": "+17625551796",
    "sms_message_id": "SMxxxxxxx",
    "campaign_id": "xxx-xxx-xxx-xxx",
    "campaign_friendly_id": "2",
    "campaign_name": "Welcome",
    "journey_uuid": "xxx-xxx-xxx-xxx",
    "journey_name": "Welcome Journey",
    "journey_friendly_id": 211,
    "content": "Circle Bank: Thanks for signing up for a new savings account. Can I help you fund your account?",
    "media_url": null
  },
  "originalTimestamp": "1657846990",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1i36683bd5f19db4c61147",
}
```

## sms.received

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "sms.received",
  "properties": {
    "agent_fullname": "Rebecca Greene",
    "agent_id": "[email protected]",
    "direction": "INBOUND",
    "content": "Hey thx for messaging me ☺️ ",
    "media_url": null,
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Sales Line",
    "contact_phone": "+17625551796",
    "from_number": "+19545558563",
    "to_number": "+17625551796",
    "sms_conversation_id": "WTxxxx",
    "sms_message_id": "IMxxxx"
  },
  "originalTimestamp": "1657855189",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cbn336683bd5f19db4c61147",
}
```

## sms.sent

JSON

```
/ This this is an agent-sent sms example./

{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "sms.sent",
  "properties": {
    "agent_fullname": "Rebecca Greene",
    "agent_id": "[email protected]",
    "direction": "OUTBOUND",
    "content": "any time! 😎",
    "media_url": null,
    "regal_voice_phone": "+19545558563",
    "contact_phone": "+17625551796",
    "from_number": "+19545558563",
    "to_number": "+17625551796",
    "sms_conversation_id": "WTxxxxx",
    "sms_message_id": "IMxxxxx"
  },
  "originalTimestamp": "1657855198",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb13l6683bd5f19db4c61147",
}
```

## sms.undelivered

JSON

```
/ This this is an automated sms example./

{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "sms.undelivered",
  "properties": {
    "direction": "OUTBOUND",
    "regal_voice_phone": "+19545558563",
    "contact_phone": "+17625551796",
    "from_number": "+19545558563",
    "to_number": "+17625551796",
    "sms_message_id": "SMxxxx",
    "error_code": "30034",
    "campaign_id": "xxx-xxx-xxx-xxx",
    "campaign_friendly_id": "2",
    "campaign_name": "Welcome",
    "journey_uuid": "xxx-xxx-xxx-xxx",
    "journey_name": "Welcome Journey",
    "journey_friendly_id": 211,
    "content": "Circle Bank: Thanks for signing up for a new savings account. Can I help you fund your account?",
    "media_url": null
  },
  "originalTimestamp": "1657846990",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cbn336683bd5f19db4c61147",
```

## sms.failed

JSON

```
{
  "campaign_friendly_id": "2",
  "campaign_id": "ce3669eb-0396-42d6-874f-47d65756602a",
  "campaign_name": "After Hours Auto Responder",
  "contact_phone": "+18705550001",
  "content": "Hi there! Thank you for contacting us, our team is currently away. We'll get back to you as soon as we can! Thanks for your patience.",
  "direction": "OUTBOUND",
  "from_number": "+15016002615",
  "journey_friendly_id": 31,
  "journey_name": "Default: After Hours Autoresponder",
  "journey_uuid": "b1b5a0f8-6cfa-4144-bda0-fc68991695b9",
  "media_url": null,
  "regal_voice_phone": "+15016002615",
  "regal_voice_phone_internal_name": null,
  "sms_message_id": "SMf06702a7040ba1017906db6bb2172ac8",
  "to_number": "+18705550001"
}
```

  

## task.canceled

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "task.canceled",
  "properties": {
    "direction": "OUTBOUND",
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Retention Line",
    "contact_phone": "+176255517965",
    "task_id": "WTxxxxxxx",
    "type": "Outbound Call",
    "campaign_name": "Post-purchase Call",
    "campaign_friendly_id": "393",
    "queue": "Outbound Call",
    "channel": "voice",
    "target_agent_fullname": "Rebecca Greene",
    "target_agent_id": "xxx.yourbrand.com",
    "canceled_by": "regal_voice",
    "cancelation_reason": "task_timeout",
    "cancelation_source": "system",
    "cancelation_notes": null,
    "journey_uuid": "xxx-xxx-xxx-xxxx",
    "journey_name": "Welcome Journey",
    "journey_friendly_id": 130
  },
  "originalTimestamp": "1657839466",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5f19kl4c61147",
}
```

## task.created

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "task.created",
  "properties": {
    "target_agent_fullname": "Rebecca Greene",
    "target_agent_id": "[email protected]",
    "scheduling_agent_fullname": null,
    "scheduling_agent_id": null,
    "direction": "OUTBOUND",
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Retention Line",
    "contact_phone": "+176255517965",
    "task_id": "WTxxxxxxxx",
    "type": "Outbound Call",
    "campaign_name": "Post-purchase Call",
    "campaign_friendly_id": "393",
    "queue": "Outbound Call",
    "channel": "voice",
    "journey_uuid": "xxx-xxx-xxx-xxxx",
    "journey_name": "Welcome Journey",
    "journey_friendly_id": 130
  },
  "originalTimestamp": "1657839344",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb13366uibd5f19db4c61147",
}
```

## task.reservation.accepted

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "task.reservation.accepted",
  "properties": {
    "target_agent_email": null,
    "scheduling_agent_fullname": null,
    "scheduling_agent_email": null,
    "reserved_agent_email": "[email protected]",
    "reserved_agent_fullname": "Rebecca Greene",
    "direction": "OUTBOUND",
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Retention Line",
    "contact_phone": "+176255517965",
    "task_id": "WTxxxxxxx",
    "type": "Outbound SMS",
    "campaign_name": null,
    "campaign_friendly_id": null,
    "queue": "Outbound SMS",
    "channel": "sms",
    "journey_uuid": null,
    "journey_name": null,
    "journey_friendly_id": null
  },
  "originalTimestamp": "1657855220",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336nk3bd5f19db4c61147",
}
```

## task.reservation.created

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "task.reservation.created",
  "properties": {
    "target_agent_email": null,
    "scheduling_agent_fullname": null,
    "scheduling_agent_email": null,
    "reserved_agent_email": "[email protected]",
    "reserved_agent_fullname": "Rebecca Greene",
    "direction": "OUTBOUND",
    "regal_voice_phone": "+19545558563",
    "regal_voice_phone_internal_name": "Retention Line",
    "contact_phone": "+176255517965",
    "task_id": "WTxxxxxxx",
    "type": "Inbound SMS",
    "campaign_name": null,
    "campaign_friendly_id": null,
    "queue": "Outbound SMS",
    "channel": "sms",
    "journey_uuid": null,
    "journey_name": null,
    "journey_friendly_id": null
  },
  "originalTimestamp": "1657836811",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336683bd5ll9db4c61147",
}
```

## voicemail.recording.available

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "name": "voicemail.recording.available",
  "properties": {
    "agent_email": "[email protected]",
    "direction": "INBOUND",
    "regal_voice_phone": "+19032823158",
    "regal_voice_phone_internal_name": "Acquisition Line",
    "contact_phone": "+13523182825",
    "channel": "voice",
    "call_id": "WT953358e8822dd9333fc38dfbac25e1e1",
    "call_sid": "CA01d01f4cb78cb54882137838375bb549",
    "type": "Voicemail",
    "recording_link": "https://api.twilio.com/2010-04-01/Accounts/ACxxx/Recordings/xxx.mp3",
    "started_at": 1657799128,
    "ended_at": 1657799136,
    "talk_time": 8
  },
  "originalTimestamp": "1657843308",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336123bd5f19db4c61147",
}
```

## voicemail.transcript.available

JSON

```
{
  "userId": "123",
  "traits": {
    "phone": "+17625551796",
    "email": "[email protected]"
  },
  "brand": "circle-bank",
  "contact_email": "[email protected]",
  "contact_phone": "+13523182825",
  "name": "voicemail.transcript.available",
  "properties": {
    "agent_email": "[email protected]",
    "agent_id": "[email protected]",
    "agent_name": "Ollie Owner",
    "call_id": "WT953358e8822dd9333fc38dfbac25e1e1",
    "call_sid": "CA01d01f4cb78cb54882137838375bb549",
    "call_summary": "John called in to get more information regarding his loan application status.",
    "contact_name": "Joe Smith",
    "contact_phone": "+13523182825",
    "is_voicemail": true,
    "moments_count": 1,
    "recording_link": "https://api.twilio.com/2010-04-01/Accounts/ACxxx/Recordings/xxx.mp3",
    "recording_id": "RE953358e8822dd9333fc38dfbac25e1e1",
    "recording_duration": "35",
    "request_timestamp": 1657799128,
    "response_timestamp": 1657799136,
    "task_sid": "WT953358e8822dd9333fc38dfbac25e1e1",
    "trackers": [
      {
        "tracker_id": "4be87957-9140-4451-894a-bdbaed1f2460",
        "tracker_name": "Refinance"
      },
      {
        "tracker_id": "eb2577c6-5e23-4c65-9e04-5cc5d49eee7e",
        "tracker_name": "High Intent"
      }
    ],
    "transcript": "Hi this is Joe calling in to check on the status of my loan application. It was a refinancing of my home mortgage. I filled it out like 3 weeks ago. Please call me back when possible.",
    "transcript_is_truncated": true,
    "transcript_url": "https://app.regalvoice.com/transcripts/WT953358e8822dd9333fc38dfbac25e1e1"
  },
  "originalTimestamp": "1657843308",
  "eventSource": "Regal Voice",
  "eventId":"f49a3cf9cb1336zf3bd5f19db4c61147",
}
```

## voicemail.completed

JSON

```
{
  "userId":"123",
  "traits": {
    "email":"[email protected]",
    "phone":"+16505217070",
  },
      "brand":"circle-bank-segment",
      "contact_email":"[email protected]",
      "contact_phone":"+19173910966",
      "created_at":"1738869410",
      "entity_type":"event",
      "event_id":"97b22bb420506a802c1894cd146e0c76",
      "event_type":"regal_voice_event",
      "name":"email.conversation.completed",
      "original_timestamp":"1738869402",
      "profile_id":"188daa066f0e9a60387d38c21406adc1",
      "properties":{
   	     "agent_email":"[email protected]",
         "agent_firstname":"Taylor",
         "agent_fullname":"Taylor Swift",
         "agent_id":"[email protected]",
         "agent_tags":"ABC",
         "agent_teams":
       		[0:"Sales Team"],
         "campaign_friendly_id":12,
         "campaign_id":"123456abcd",
         "campaign_name":"ABC",
         "completed_at":1738869402,
         "contact_phone":"+19173910966",
         "conversation_happened":false,
         "direction":"INBOUND",
         "disposition":"Interested",
         "ended_at":1738869402,
         "handle_time":4,
         "journey_execution_name":null,
         "journey_friendly_id":null,
         "journey_name":null,
         "journey_node_friendly_id":null,
         "journey_node_uuid":null,
         "journey_uuid":null,
         "notes":null,
         "objections":null,
         "regal_voice_phone":"+12027984273",
				 "regal_voice_phone_internal_name":"New Cobra Kai Test",
         "started_at":1738869398,
         "talk_time":4,
         "task_id":"WTf78ff489d8bb812fb3552cebcf430a61",
         "type":"Voicemail",
         "wrapup_time":0
          },
    "source":"Regal Voice",
    "source_workflow":"Internal"
}
```

Updated about 22 hours ago

---
