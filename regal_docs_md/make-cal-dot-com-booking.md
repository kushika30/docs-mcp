# 📅 Schedule with Cal.com

## Overview

Use this guide to configure your AI Agents to schedule with Cal.com:

- ✅ Check calendar availability on cal.com
- 📅 Book appointments on cal.com.

---

## Prerequisites

- You must have a Cal.com account:
  - Create a Cal.com account.
  - Set availability hours.
  - Create a new event type.
  - Create an API key: Settings → API Key → Add
- **Somewhere to host your function** for the AI Agent to call (code snippets are below) or Regal can host it for you
  - Requires axios version ^1.4.0 as a dependency.
  - Add your Cal.com API key as an environment variable.
- **Regal AI Agent** to add the Custom Actions

---

## Create / Host Function

Below is the full code needed to communicate with Cal.com. Regal can host this for you if you prefer.

The function takes in a datetime and:

1. Attempts to create a booking and if successful returns confirmation
2. If time slot not available, searches slots for next 7 days and finds nearest slot

```
const axios = require("axios");

exports.handler = async function (context, event, callback) {
    // Extract appointment details from request
    const { name, email, phone, dateTime, event_id } = event;

    const CAL_API_KEY = process.env.CAL_API_KEY;

    try {
        //Format payload
        const appointmentData = {
            start: dateTime,
            eventTypeId: event_id,
            attendee: {
                name: name,
                email: email,
                timeZone: "America/New_York",
                phoneNumber: phone,
            },
        };
        
        //Attempt to create booking
        const response = await axios.post(
            "https://api.cal.com/v2/bookings",
            appointmentData,
            {
                headers: {
                    Authorization: `Bearer ${CAL_API_KEY}`,
                    "cal-api-version": "2024-08-13",
                    "Content-Type": "application/json",
                },
            }
        );

        //If successful, return confirmation
        return callback(null, {
            success: true,
            bookingId: response.data.id,
            message: "Appointment created successfully.",
        });
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error && error.response.data.error.message === 'User either already has booking at this time or is not available') {

            // Time slot not available, find nearest slot
            try {
                // Search for slots within the next 7 days
                const startDate = new Date(dateTime);
                const endDate = new Date(startDate);
                endDate.setDate(endDate.getDate() + 7); 

                //Use Cal.com API to find available time slots
                const slotsResponse = await axios.get("https://api.cal.com/v2/slots", {
                    headers: {
                        Authorization: `Bearer ${CAL_API_KEY}`,
                        "cal-api-version": "2024-09-04",
                    },
                    params: {
                        eventTypeId: event_id,
                        start: startDate.toISOString().split('T')[0], // Extract date 
                        end: endDate.toISOString().split('T')[0], // Extract date 
                        timeZone: "America/New_York", 
                    },
                });

                //Search through available time slots
                if (slotsResponse.data && slotsResponse.data.data) {
                    const availableSlots = slotsResponse.data.data;
                    let nearestSlot = null;
                    let nearestSlotDate = null;

                    for (const date in availableSlots) {
                        if (availableSlots.hasOwnProperty(date)) {
                            if (availableSlots[date].length > 0) {
                                nearestSlotDate = date;
                                nearestSlot = availableSlots[date][0].start;
                                // Take the first available slot
                                break; 
                            }
                        }
                    }
                
                    if (nearestSlot) {
                        return callback(null, {
                            success: false,
                            error: "User not available at requested time. Nearest available slot: " + nearestSlot,
                            nearestSlot: nearestSlot,
                            nearestSlotDate: nearestSlotDate
                        });
                    } else {
                        return callback(null, {
                            success: false,
                            error: "User not available at requested time. No available slots found in the next 7 days.",
                        });
                    }
                } else {
                    return callback(null, {
                        success: false,
                        error: "Error retrieving available slots.",
                    });
                }
            } catch (slotsError) {
                console.error("Error finding available slots:", slotsError);
                return callback(null, {
                    success: false,
                    error: "User not available at requested time. Error finding slots.",
                    slotsError: slotsError.message,
                });
            }
        }

        console.error("Error booking appointment:", error.response?.data || error.message);
        return callback(null, { success: false, error: error.message });
    }
};
```

## Define the Custom Action in Regal Agent

In your AI Agent in the Regal builder, click New Action > Custom Action.

When creating a Custom Action, you’ll provide:

- **Name:** book\_cal
- **Description:** When the contact requests to schedule an appointment, call this function. Ask for the contact's name, and make sure to get the time the contact wants to schedule their appointment for.
- **Endpoint:** Add the endpoint to your function from above
- **AI Variables:** Define an AI variable for the datetime the customer suggested
- - **Name:** dateTime
  - **Data type:** String
  - **Description:** Appointment start time in EST (ISO 8601 UTC format). Here is a breakdown of the format. YYYY-MM-DDTHH:mm:ss.sssZ, where YYYY is the year, MM is the month, DD is the day, T separates the date and time, HH is the hour, mm is the minute, ss is the second, sss are milliseconds, and Z indicates UTC

  
> ## 📘
>
> You'll also need to send email and name in the payload
>
> If you already have that on the contact profile you can just send it as a contact attribute variable (if not, though you'll just have to ask the customer for it and create an AI Variable). Same goes for phone number if you want that included in the calendar invite.

- **Payload Schema:**

JSON

```
{
  "name": "{{contact.firstName}} {{contact.lastName}}",
  "email": "{{contact.email}}",
  "phone": "{{contact.contactPhone}}",
  "dateTime": "{{variables.dateTime}}",
  "event_id": "{{cal.com event id}}"
}
```

- **Speak After Execution:** Select this so that your AI agent confirms the booking after scheduling

## Handling Responses

You will want your AI agent to act differently depending on the response from your function, so you'll need to prompt your agent how to handle each response

Prompt Example:

> 1. Call function book\_cal with the customer's preferred datetime
>
> Wait for the result of the function.
>
> - If result returns "Appointment created successfully", let the contact know you've booked their appointment for their selected date and time.
> - If result returns "User not available at requested time. No available slots found in the next 7 days", say: "Unfortunately there's no availability for then nor in the next 7 days. Can you pick a later date?"
>   - If contact provides a new datetime, call function book\_cal

## ▶️ VIDEO TUTORIAL

Updated 10 months ago

---
