# Cal.com

# Cal.com Configuration

## Phone Call Booking

1. Log into your Cal.com account and navigate to the event you'd like to send events to Regal
2. Click into the event to edit it
3. In the "Event Set Up" tab ensure the event location is set to "Attendee Phone Number"
4. Hit "Save"
5. Now navigate to the "Webhooks" section
6. Click "New Webhook" to create a new webhook
7. Configure the Webhook
   - Subscriber URL: Regal Provided Endpoint (Reach our to [[email protected]](/cdn-cgi/l/email-protection#473432373728353307352220262b692e28) to get you endpoint)
   - Enable Webhook: True
   - Event Triggers: Booking Created, Booking Canceled, Booking Rescheduled
   - Secret: N/A
   - Payload Template: Default
   - Select: "Save Webhook"
8. Submit a test booking to ensure the data flows into Regal

![](https://files.readme.io/247e377-Screenshoot_2024-08-13_at_15.05.382x.png)

## Video Call Booking

> ## 📘
>
> Video Call Support
>
> At this time Regal only supports Cal Video. If you choose to use Cal Video, Regal will create a custom task and agents can use the Video URL on the contact attributes to link out to the video call.
>
> Ensure Regal has enabled the "Email Contact Only Journey" feature as the Booking events for Cal Video calls do not include phone number, only email.

1. Log into your Cal.com account and navigate to the video event you'd like to send events to Regal
2. Click into the event to edit it
3. In the "Event Set Up" tab ensure the event location is set to "Cal Video (Global)".
4. Hit "Save"
5. Navigate to "Advanced Settings" on the left hand rail to add a require field for phone number
6. Under "Booking questions" click "Add a question"
   1. Input Type: Phone
   2. Identifier: contactPhone
   3. Label: Phone Number
   4. Placeholder: Leave Blank
   5. Required: Yes

![](https://files.readme.io/12bb90b-Screenshoot_2024-08-13_at_17.00.022x.png)
  

7. Now navigate to the "Webhooks" section
8. Click "New Webhook" to create a new webhook
9. Configure the Webhook

- Subscriber URL: Regal Provided Endpoint (Reach our to [[email protected]](/cdn-cgi/l/email-protection#0e7d7b7e7e617c7a4e7c6b696f62206761) to get you endpoint)
- Enable Webhook: True
- Event Triggers: Booking Created, Booking Canceled, Booking Rescheduled
- Secret: N/A
- Payload Template: Default
- Select: "Save Webhook"

10. Submit a test booking to ensure the data flows into Regal

### Agent Experience Demo:

![](https://files.readme.io/9c1e82ddffb931ec412ea98a7c7490bbb47e4431df8d80413870fd238875110d-Screenshoot_2024-09-06_at_09.54.42.gif)

# Cal Integration Journeys

In order to action off of the inbound booking events from Cal.com you'll need to configure 3 journeys within Regal.

## Booking Created

The purpose of this journey is to send a confirmation SMS when a contact books a call, send them a reminder SMS 1 hour before the call and then finally create outbound call task and or custom task for an agent in Regal to complete.

1. **Trigger Node**:

- Condition Type: Custom Event
- Event Name: Cal Booking Created
- Filters (Optional): Depending on your use case you might want to filter on the event properties to further limit contact entrances.

2. **Update Contact Node 1**: This will allow us to dynamically send the booking details in SMS campaigns to power SMS reminders.

- Name: Add Booking Details to Contact
- Contact Attribute 1
  - Contact Attribute: calBookingLocalTimezone
  - Type: String
  - Attribute Value: `{{event.properties.calBookingLocalTime}}`
- Contact Attribute 2
  - Contact Attribute: calBookingLocation
  - Type: String
  - Attribute Value: `{{event.properties.location}}`
- Contact Attribute 3
  - Contact Attribute: calBookingDayOfWeek
  - Type: String
  - Attribute Value: `{{event.properties.calBookingDayOfWeek}}`
- Contact Attribute 4
  - Contact Attribute: calBookingLocalTime
  - Type: String
  - Attribute Value: `{{event.properties.calBookingLocalTime}}`
- Contact Attribute 5
  - Contact Attribute: calBookingLink
  - Type: String
  - Attribute Value: `{{event.properties.calBookingLink}}`
- Contact Attribute 6 (optional)
  - Contact Attribute: calVideoUrl
  - Type: String
  - Attribute Value: `{{event.properties.videoCallUrl}}`
  - > ## 📘
    >
    > Map the videoCallUrl property to the agent desktop

![](https://files.readme.io/d085806-Screenshoot_2024-08-13_at_15.06.342x.png)

3. **Automated SMS Node**: To send an SMS confirmation to the bookie.

- Example Confirmation Campaign Copy:  
  Circle Health: Confirming you have booking an Intake Appointment on {{contact.customProperties.calBookingDayOfWeek}} at {{contact.customProperties.calBookingLocalTime}} {{contact.customProperties.calBookingLocalTimezone}}.  
  To cancel or reschedule your booking please your booking link:  
  🔗 {{contact.customProperties.calBookingLink}}

4. **Delay Node**:

- Delay Type: Delay Using Time from Property
- Delay Until: Triggering Event
- Property: properties.startTime
- Minus: 1 hour

![](https://files.readme.io/d59ef62-Screenshoot_2024-08-13_at_15.07.382x.png)

5. **Conditional Match Node 1**: Check if the booking has been canceled by seeing if there was a Cal Booking Cancelled event with the same bookingId as the original Cal Booking Created event.

- Name: Booking Cancelled?
- Condition Type: Custom Event
- Operator: Exists
- Click "Add Property Condition"
- Property Name: `properties.bookingld`
- Operator: Equals
- Property Value: `{{event.properties.bookingld}}`

![](https://files.readme.io/40585c4-Screenshoot_2024-08-13_at_15.08.112x.png)

6. **"No" Path**: Connect to "Conditional Match Node 2"
7. **Conditional Match Node 2**: Check if the booking has been rescheduled by seeing if there was a Cal Booking Rescheduled event with the same rescheduleId as the original Cal Booking Created event.

- Name: Booking Rescheduled?
- Condition Type: Custom Event
- Operator: Exists
- Click "Add Property Condition"
- Property Name: `properties.rescheduleId` (note this is different than the above node)
- Operator: Equals
- Property Value: `{{event.properties.bookingld}}`

![](https://files.readme.io/e542633-Screenshoot_2024-08-13_at_15.09.122x.png)

8. **"No" Path**: Connect to "Update Contact Node"
9. **Update Contact Node 2**: Duplicate the original Update contact node and place it here. We want to add the correct data to the contact every time as there might have been a new booking that could have overridden the data.
10. **Automated SMS Node**: To send an SMS reminder 1 hour before the call.

- Example Reminder Campaign Copy:  
  Circle Health: Reminder you have an Intake Appointment today at {{contact.customProperties.calBookingLocalTime}} {{contact.customProperties.calBookingLocalTimezone}}.  
  To cancel or reschedule your booking please your booking link:  
  🔗 {{contact.customProperties.calBookingLink}}

11. **Delay Node**:

- Delay Type: Delay Using Time from Property
- Delay Until: Triggering Event
- Property: properties.startTime
- Minus: 2 minutes

12. **Conditional Match Node 3**: Check if the booking has been canceled by seeing if there was a Cal Booking Cancelled event with the same bookingId as the original Cal Booking Created event.

- Name: Booking Cancelled?
- Condition Type: Custom Event
- Operator: Exists
- Click "Add Property Condition"
- Property Name: `properties.bookingld`
- Operator: Equals
- Property Value: `{{event.properties.bookingld}}`

13. **"No" Path**: Connect to "Conditional Match Node 2"
14. **Conditional Match Node 4**: Check if the booking has been rescheduled by seeing if there was a Cal Booking Rescheduled event with the same rescheduleId as the original Cal Booking Created event.

- Name: Booking Rescheduled?
- Condition Type: Custom Event
- Operator: Exists
- Click "Add Property Condition"
- Property Name: `properties.rescheduleId` (note this is different than the above node)
- Operator: Equals
- Property Value: `{{event.properties.bookingld}}`

15. **"No" Path**: Connect to "Update Contact Node 3"
16. **Update Contact Node 3**: Duplicate the original Update contact node and place it here. We want to add the correct data to the contact every time as there might have been a new booking that could have overridden the data.
17. **Conditional Match Node 5**: Check if the booking is a phone call or video call based on the location of the trigging event.

- Name: Phone Call?
- Condition Type: Custom Event
- Operator: Exists
- Click "Add Property Condition"
- Property Name: properties.location
- Operator: Equals
- Property Value: Phone Call

18. **"Yes" Path**: Connect to "Create Call Task"
19. **"No" Path**: Connect to "Create a Custom Task"

![](https://files.readme.io/c2a00a2-Screenshoot_2024-08-13_at_15.11.272x.png)
> ## 👍
>
> Video Walkthrough [Link](https://www.loom.com/share/034b6a9df81a4f3282097fd9ce2feee1?sid=5c0a925f-8c7e-4e7d-a813-bdc439358273)

## Booking Rescheduled

The purpose of this journey is to create outbound call task and or customer task for calls scheduled in Cal using the Cal Booking Rescheduled event.

1. Duplicate "Booking Created" journey you built
2. Rename it to "Booking Rescheduled"
3. Update the Triggering event to "Cal Booking Rescheduled"
4. Save journey

  

## Booking Canceled

The purpose of this journey is to remind contacts to book another call if they cancel their scheduled call.

1. **Trigger Node**:

- Condition Type: Custom Event
- Event Name: Cal Booking Canceled
- Filters (Optional): Depending on your use case you might want to filter on the event properties to further limit contact entrances.

2. **Update Contact Node 1**: This will allow us to dynamically send the booking details in SMS campaigns to power SMS reminders.

- Name: Add Booking Details to Contact
- Contact Attribute 1
  - Contact Attribute: calBookingLocalTimezone
  - Type: String
  - Attribute Value: `{{event.properties.calBookingLocalTimezone}}`
- Contact Attribute 2
  - Contact Attribute: calBookingLocation
  - Type: String
  - Attribute Value: `{{event.properties.location}}`
- Contact Attribute 3
  - Contact Attribute: calBookingDayOfWeek
  - Type: String
  - Attribute Value: `{{event.properties.calBookingDayOfWeek}}`
- Contact Attribute 4
  - Contact Attribute: calBookingLocalTime
  - Type: String
  - Attribute Value: `{{event.properties.calBookingLocalTime}}`
- Contact Attribute 5
  - Contact Attribute: calBookingLink
  - Type: String
  - Attribute Value: `{{event.properties.calBookingLink}}`
- Contact Attribute 6
  - Contact Attribute: calVideoUrl
  - Type: String
  - Attribute Value: `{{event.properties.videoCallUrl}}`

![](https://files.readme.io/d085806-Screenshoot_2024-08-13_at_15.06.342x.png)

3. **Automated SMS Node**: To send an SMS Canceled Confirmation

- Example Confirmation Campaign Copy:  
  Circle Health: Circle Health: Confirming you have canceled your Intake Appointment. Please reschedule using the link below:  
  🔗 {{contact.customProperties.calBookingLink}}

![](https://files.readme.io/6bdd05f-Screenshoot_2024-08-13_at_15.19.262x.png)
  

# Example Events

## Cal Booking Created:

### Phone Call

JSON

```
{
  "name": "Cal Booking Created",
  "properties": {
    "type": "regal-test",
    "bookingTitle": "Regal Test between Noah Mogil and Regal Demo",
    "eventTitle": "Regal Test",
    "description": "This is a demo",
    "startTime": "2024-08-14T17:00:00Z",
    "ownerEmail": "[email protected]",
    "bookingId": "2905110",
    "status": "ACCEPTED",
    "location": "Phone Call",
    "calBookingDayOfWeek": "Wednesday",
    "calBookingTimeZone": "PT",
    "calBookingLocalTime": "10:00 AM",
    "calBookingLink": "https://cal.com/booking/gWnHHwotdYKF1B3mz7FvRu"
  },
  "eventSource": "cal.com",
  "traits": {
    "firstName": "Regal",
    "lastName": "Demo",
    "phones": {
      "+12062271647": {
        "voiceOptIn": { "subscribed": true },
        "smsOptIn": { "subscribed": true }
      }
    }
  }
}
```

  

### Video Call

JSON

```
{
  "name": "Cal Booking Created",
  "properties": {
    "type": "regal-test",
    "bookingTitle": "Regal Test between Noah Mogil and Demo Contacts",
    "eventTitle": "Regal Test",
    "description": "This is a video call",
    "startTime": "2024-08-14T22:00:00Z",
    "ownerEmail": "[email protected]",
    "bookingId": "2905131",
    "status": "ACCEPTED",
    "videoCallUrl": "https://app.cal.com/video/sraSRLXw3RJ7weikKPXuhg",
    "location": "Video Call",
    "calBookingDayOfWeek": "Wednesday",
    "calBookingTimeZone": "PT",
    "calBookingLocalTime": "03:00 PM",
    "calBookingLink": "https://cal.com/booking/sraSRLXw3RJ7weikKPXuhg"
  },
  "eventSource": "cal.com",
  "traits": {
    "firstName": "Demo",
    "lastName": "Contacts",
    "emails": { "[email protected]": { "emailOptIn": { "subscribed": true } } }
  }
}
```

  

## Cal Booking Rescheduled:

### Phone Call

JSON

```
{
  "name": "Cal Booking Rescheduled",
  "properties": {
    "type": "regal-test",
    "bookingTitle": "Regal Test between Noah Mogil and Regal Demo",
    "eventTitle": "Regal Test",
    "description": "This is a demo",
    "startTime": "2024-08-14T22:00:00Z",
    "ownerEmail": "[email protected]",
    "bookingId": "2905114",
    "status": "ACCEPTED",
    "location": "Phone Call",
    "calBookingDayOfWeek": "Wednesday",
    "calBookingTimeZone": "PT",
    "calBookingLocalTime": "03:00 PM",
    "calBookingLink": "https://cal.com/booking/nPDNJq5SMKUeDKxmhed6Bb",
    "rescheduleId": "2905110"
  },
  "eventSource": "cal.com",
  "traits": {
    "firstName": "Regal",
    "lastName": "Demo",
    "phones": { "+12062271647": {} }
  }
}
```

  

### Video Call

JSON

```
{
  "name": "Cal Booking Rescheduled",
  "properties": {
    "type": "regal-test",
    "bookingTitle": "Regal Test between Noah Mogil and Demo Contacts",
    "eventTitle": "Regal Test",
    "description": "This is a video call",
    "startTime": "2024-08-16T18:30:00Z",
    "ownerEmail": "[email protected]",
    "bookingId": "2905134",
    "status": "ACCEPTED",
    "videoCallUrl": "https://app.cal.com/video/2NL5ZqEsfxRj6maD3sQZ8W",
    "location": "Video Call",
    "calBookingDayOfWeek": "Friday",
    "calBookingTimeZone": "PT",
    "calBookingLocalTime": "11:30 AM",
    "calBookingLink": "https://cal.com/booking/2NL5ZqEsfxRj6maD3sQZ8W",
    "rescheduleId": "2905131"
  },
  "eventSource": "cal.com",
  "traits": {
    "firstName": "Demo",
    "lastName": "Contacts",
    "emails": { "[email protected]": {} }
  }
}
```

  

## Cal Booking Canceled:

### Phone Call

JSON

```
{
  "name": "Cal Booking Cancelled",
  "properties": {
    "type": "regal-test",
    "bookingTitle": "Regal Test between Noah Mogil and Regal Demo",
    "eventTitle": "Regal Test",
    "description": "This is a demo",
    "startTime": "2024-08-14T22:00:00+00:00",
    "ownerEmail": "[email protected]",
    "bookingId": "2905114",
    "status": "CANCELLED",
    "location": "Phone Call",
    "calBookingDayOfWeek": "Wednesday",
    "calBookingTimeZone": "PT",
    "calBookingLocalTime": "03:00 PM",
    "calBookingLink": "https://cal.com/booking/nPDNJq5SMKUeDKxmhed6Bb",
    "cancellationReason": "testing"
  },
  "eventSource": "cal.com",
  "traits": {
    "firstName": "Regal",
    "lastName": "Demo",
    "phones": { "+12062271647": {} }
  }
}
```

  

### Video Call

JSON

```
{
  "name": "Cal Booking Cancelled",
  "properties": {
    "type": "regal-test",
    "bookingTitle": "Regal Test between Noah Mogil and Demo Contacts",
    "eventTitle": "Regal Test",
    "description": "This is a video call",
    "startTime": "2024-08-16T18:30:00+00:00",
    "ownerEmail": "[email protected]",
    "bookingId": "2905134",
    "status": "CANCELLED",
    "location": "Video Call",
    "calBookingDayOfWeek": "Friday",
    "calBookingTimeZone": "PT",
    "calBookingLocalTime": "11:30 AM",
    "calBookingLink": "https://cal.com/booking/2NL5ZqEsfxRj6maD3sQZ8W",
    "cancellationReason": ""
  },
  "eventSource": "cal.com",
  "traits": {
    "firstName": "Demo",
    "lastName": "Contacts",
    "emails": { "[email protected]": {} }
  }
}
```

Updated over 1 year ago

---
