# 📅 Schedule with Google Calendar

## Overview

Use this guide to configure your AI Agents to schedule with Google Calendar:

- ✅ Check calendar availability in Google Calendar
- 📅 Book a Google Calendar event

---

## Prerequisites

- You must have Google with Google Calendar API access
- **Somewhere to host your function** for the AI Agent to call (code snippets are below) or Regal can host it for you
  - Requires axios google-auth-library as a dependency.
- **Regal AI Agent** to add the Custom Actions

---

## Google Calendar Set Up

1. In your Google account, search for Google Calendar API and click Enable.
2. Create a Service Account:
   1. In the Cloud Console, navigate to APIs & Services > Credentials.
   2. Click Create Credentials and choose Service Account.
   3. Fill in the necessary information and create the service account.
   4. In the service account details, go to the Keys tab.
   5. Click Add key > Create new key and select JSON. Download the JSON file. Note: This file includes your service account credentials which will be used to generate access tokens.
3. (Optional) Setup Domain-Wide Delegation: (Requires Extra Permissions) - If you need to invite attendees on events, enable Domain‑Wide Delegation for your service account and configure it in your Google Workspace Admin Console. For more details, see Google's documentation on Domain-Wide Delegation.

## Host Function

Below is the full code needed to communicate with Google Calendar. Regal can host this for you if you prefer.

The function takes in a datetime and:

1. Checks if the slot is busy, if not creates a 30-min Google Calendar Event for that time
2. If time slot not available, searches slots for next 7 days and finds nearest slot

### Add Assets to Your Function

1. Move your downloaded service-account.json file into the assets/ folder.
2. Rename it to service-account.private.json to set it to private (Note: your function should be public, but your assets should be private)

### Add Code to Your Function

Create a new file in your functions directory named create-calendar-event.js with the following code:

```
const axios = require("axios");
const { GoogleAuth } = require("google-auth-library");

async function getAccessToken() {
  let credentials;
  try {
    // Log the available asset keys to see the exact path
    const assetKeys = Object.keys(Runtime.getAssets());
    console.log("Available assets:", assetKeys);

    // Try the key with a leading slash first.
    let asset = Runtime.getAssets()['/service-account.json'];
    // If not found, try without the leading slash.
    if (!asset) {
      asset = Runtime.getAssets()['service-account.json'];
    }

    if (!asset) {
      throw new Error("Asset 'service-account.json' not found. Check your file name and path.");
    }

    // Open the asset, convert Buffer to string, then parse JSON.
    credentials = JSON.parse(asset.open().toString());
  } catch (err) {
    console.error("Error reading service-account.json asset:", err);
    throw err;
  }

  // Create the GoogleAuth client using the credentials from the asset.
  const auth = new GoogleAuth({
    credentials,
    scopes: 'https://www.googleapis.com/auth/calendar',
  });
  const client = await auth.getClient();
  const tokenResponse = await client.getAccessToken();
  return tokenResponse.token;
}

exports.handler = async function (context, event, callback) {
  // Extract appointment details from the incoming request.
  const { name, email, phone, dateTime } = event;

  // Compute the event's start and end times (default duration: 30 minutes).
  const startTime = new Date(dateTime);
  const endTime = new Date(startTime);
  endTime.setMinutes(endTime.getMinutes() + 30);

  // Retrieve the Google Calendar ID from environment variables.
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  
  // Generate the access token dynamically using the service account asset.
  let accessToken;
  try {
    accessToken = await getAccessToken();
    console.log("Generated access token:", accessToken);
  } catch (tokenError) {
    console.error("Error generating access token:", tokenError);
    return callback(null, {
      success: false,
      error: "Error generating access token",
      tokenError: tokenError.message,
    });
  }

  // Build the event data for the Google Calendar API.
  const eventData = {
    summary: `Appointment with ${name}`,
    description: `Phone: ${phone}`,
    start: {
      dateTime: startTime.toISOString(),
      timeZone: "America/New_York",
    },
    end: {
      dateTime: endTime.toISOString(),
      timeZone: "America/New_York",
    },
  };

  // First, check if the requested slot is free using the freeBusy query.
  const freebusyRequest = {
    timeMin: startTime.toISOString(),
    timeMax: endTime.toISOString(),
    items: [{ id: calendarId }],
  };

  try {
    const freebusyResponse = await axios.post(
      "https://www.googleapis.com/calendar/v3/freeBusy",
      freebusyRequest,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const busySlots = freebusyResponse.data.calendars[calendarId].busy;
    if (busySlots && busySlots.length > 0) {
      // The requested time is busy; find the next available 30-minute slot within the next 7 days.
      const searchStart = new Date(startTime);
      const searchEnd = new Date(startTime);
      searchEnd.setDate(searchEnd.getDate() + 7);

      const freebusySearchRequest = {
        timeMin: searchStart.toISOString(),
        timeMax: searchEnd.toISOString(),
        items: [{ id: calendarId }],
      };

      const freebusySearchResponse = await axios.post(
        "https://www.googleapis.com/calendar/v3/freeBusy",
        freebusySearchRequest,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const busyPeriods = freebusySearchResponse.data.calendars[calendarId].busy;
      let earliestSlot = null;
      let pointer = new Date(searchStart);

      // Sort busy periods in chronological order.
      busyPeriods.sort((a, b) => new Date(a.start) - new Date(b.start));

      for (let busy of busyPeriods) {
        const busyStart = new Date(busy.start);
        if (busyStart - pointer >= 30 * 60 * 1000) {
          earliestSlot = pointer;
          break;
        } else {
          const busyEnd = new Date(busy.end);
          if (busyEnd > pointer) {
            pointer = busyEnd;
          }
        }
      }

      if (!earliestSlot && searchEnd - pointer >= 30 * 60 * 1000) {
        earliestSlot = pointer;
      }

      if (earliestSlot) {
        return callback(null, {
          success: false,
          error: "Requested time is not available.",
          nearestSlot: earliestSlot.toISOString(),
          message: "User not available at requested time. Nearest available slot provided.",
        });
      } else {
        return callback(null, {
          success: false,
          error: "Requested time is not available and no free 30-minute slot found in the next 7 days.",
        });
      }
    }
  } catch (freebusyError) {
    console.error("Error checking freebusy:", freebusyError);
    return callback(null, {
      success: false,
      error: "Error checking calendar availability.",
      freebusyError: freebusyError.message,
    });
  }

  // If the time slot is free, create the event on the calendar.
  const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`;
  try {
    const createResponse = await axios.post(calendarUrl, eventData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return callback(null, {
      success: true,
      eventId: createResponse.data.id,
      message: "Appointment created successfully.",
    });
  } catch (createError) {
    console.error("Error creating event:", createError.response?.data || createError.message);
    return callback(null, {
      success: false,
      error: createError.message,
    });
  }
};
```

  

## Define the Custom Action in Regal Agent

In your AI Agent in the Regal builder, click New Action > Custom Action.

When creating a Custom Action, you’ll provide:

- **Name:** book\_google\_cal
- **Description:** When the contact requests to schedule an appointment, call this function. Ask for the contact's name, and make sure to get the time the contact wants to schedule their appointment for.
- **Endpoint:** Add the endpoint to your function from above
- **AI Variables:** Define an AI variable for the datetime the customer suggested
- - **Name:** dateTime
  - **Data type:** String
  - **Description:** When the user requests to schedule an appointment, call this function. Ask for the user's name, and make sure to get the time the user wants to schedule their appointment for. convert the Appointment start time in EST to ISO 8601 UTC format (don't mention this to caller).

> ## 📘
>
> You'll also need to send email in the payload
>
> If you already have that on the contact profile you can just send it as a contact attribute variable (if not, though you'll just have to ask the customer for it and create an AI Variable). Same goes for name and phone number if you want those included in the calendar invite.

- **Payload Schema:**

JSON

```
{
  "name": "{{contact.firstName}} {{contact.lastName}}",
  "email": "{{contact.email}}",
  "phone": "{{contact.phone}}",
  "dateTime": "{{variables.dateTime}}"
}
```

- **Speak After Execution:** Select this so that your AI agent confirms the booking after scheduling

## Handling Responses

You will want your AI agent to act differently depending on the response from your function, so you'll need to prompt your agent how to handle each response

Prompt Example:

> 1. Call function book\_google\_cal with the customer's preferred datetime
>
> Wait for the result of the function.
>
> - If result returns "Appointment created successfully", let the contact know you've booked their appointment for their selected date and time.
> - If result returns "User not available at requested time. No available slots found in the next 7 days", say: "Unfortunately there's no availability for then nor in the next 7 days. Can you pick a later date?"
>
> If contact provides a new datetime, call function book\_google\_cal

## ▶️ VIDEO TUTORIAL

Updated 10 months ago

---
