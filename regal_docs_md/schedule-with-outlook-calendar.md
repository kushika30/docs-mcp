# 📅 Schedule with Outlook Calendar

## Overview

Use this guide to configure your AI Agents to schedule with Google Calendar:

- ✅ Check calendar availability in Outlook Calendar
- 📅 Book a OutlookOutlook Calendar event

---

## Prerequisites

- You must have an Azure Project with Outlook
- **Somewhere to host your function** for the AI Agent to call (code snippets are below) or Regal can host it for you
  - Requires axios version ^1.4.0 as a dependency.
- **Regal AI Agent** to add the Custom Actions

---

## Azure Account Set Up

1. In the Azure Portal, navigate to Azure Active Directory > App registrations, click New registration.
2. Choose “Accounts in this organizational directory only” (if you’re only scheduling in your tenant).
3. After creation, note down the Application (client) ID and Directory (tenant) ID.
4. Under Certificates & secrets > New client secret, create a secret and copy its value. (You won’t be able to see it again.)
5. Under API permissions > Add a permission > Microsoft Graph > Application permissions > Search for and add Calendars.ReadWrite. Then click Grant admin consent.

## Host Function

Below is the full code needed to communicate with Outlook Calendar. Regal can host this for you if you prefer.

The function takes in a datetime and:

1. Checks if the slot is busy, if not creates a 30-min Google Calendar Event for that time
2. If time slot not available, searches other slots same day to find nearest available

### Create Environment Variables

Create new environment variables called MS\_CLIENT\_SECRET, MS\_TENANT\_ID, and MS\_CLIENT ID and copy values from Azure Portal.

### Add Code to Your Function

Copy paste this code into your function (may require small modifications).

```
const axios = require('axios');

/* ──────────────────────────────────────────────────────────────── */
/*  Helper: find the closest free 30‑min slot on the same UTC day  */
/* ──────────────────────────────────────────────────────────────── */
async function findNearestSlot(targetISO, accessToken) {
  const DURATION = 30 * 60 * 1_000;
  const target    = new Date(targetISO);
  const datePart  = target.toISOString().split('T')[0];
  const dayStart  = new Date(`${datePart}T00:00:00Z`);
  const dayEnd    = new Date(`${datePart}T23:59:59Z`);

  const url =
    `https://graph.microsoft.com/v1.0/me/calendarView` +
    `?startDateTime=${dayStart.toISOString()}` +
    `&endDateTime=${dayEnd.toISOString()}` +
    `&$select=start,end&$top=1000`;

  const { data: view } = await axios.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const merged = view.value
    .map(ev => [new Date(ev.start.dateTime), new Date(ev.end.dateTime)])
    .sort((a, b) => a[0] - b[0])
    .reduce((out, [s, e]) => {
      if (!out.length || s > out[out.length - 1][1]) {
        out.push([s, e]);
      } else {
        out[out.length - 1][1] = new Date(Math.max(out[out.length - 1][1], e));
      }
      return out;
    }, []);

  const free = [];
  let cursor = dayStart;
  for (const [s, e] of merged) {
    if (s - cursor >= DURATION) free.push([cursor, s]);
    if (e > cursor) cursor = e;
  }
  if (dayEnd - cursor >= DURATION) free.push([cursor, dayEnd]);

  let best = null;
  let bestDiff = Infinity;
  for (const [fStart, fEnd] of free) {
    const latestStart = new Date(fEnd - DURATION);
    const candidate =
      target < fStart ? fStart :
      target > latestStart ? latestStart :
      target;
    const diff = Math.abs(candidate - target);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = candidate;
    }
  }
  return best ? best.toISOString() : null;
}

/* ──────────────────────────────────────────────────────────────── */
/*  Main Twilio Function handler                                   */
/* ──────────────────────────────────────────────────────────────── */
exports.handler = async function (context, event, callback) {
  console.log('function started');

  const { start, refreshToken, email, phone, name } = event;
  console.log(event);
  if (!refreshToken) return callback(null, { success:false, error:'Missing refreshToken' });
  if (!start)        return callback(null, { success:false, error:'Missing start' });
  if (!email)        return callback(null, { success:false, error:'Missing email' });
  if (!phone)        return callback(null, { success:false, error:'Missing phone' });
  if (!name)         return callback(null, { success:false, error:'Missing name' });

  const tenant       = 'consumers';
  const clientId     = process.env.MS_CLIENT_ID;
  const clientSecret = process.env.MS_CLIENT_SECRET;

  try {
    /* ─── 1.  Access token ─────────────────────────────────────── */
    const tokenUrl = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;
    const params   = new URLSearchParams({
      client_id:     clientId,
      grant_type:    'refresh_token',
      refresh_token: refreshToken,
      scope:         'offline_access https://graph.microsoft.com/Calendars.ReadWrite',
    });

    const { data: tokenRes } = await axios.post(tokenUrl, params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    const accessToken = tokenRes.access_token;

    /* ─── 2.  Conflict check ───────────────────────────────────── */
    const end = new Date(new Date(start).getTime() + 30 * 59_999).toISOString();
    const filter =
      `start/dateTime le '${end}' and end/dateTime ge '${start}'`;
    const checkUrl =
      `https://graph.microsoft.com/v1.0/me/events` +
      `?$filter=${encodeURIComponent(filter)}` +
      `&$select=id&$top=1`;

    const { data: conflicts } = await axios.get(checkUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    /* ─── 3a. Free → create event ──────────────────────────────── */
    if (conflicts.value.length === 0) {
      const eventData = {
        subject: `Meeting with ${name}`,
        body:    { contentType: 'HTML', content: 'Discussing project updates and next steps.' },
        start:   { dateTime: start, timeZone: 'UTC' },
        end:     { dateTime: end,   timeZone: 'UTC' },
        location:{ displayName: phone },
        attendees: [
          { emailAddress: { address: '[email protected]', name: 'Vaibhav Turaga'}, type:'required' },
          { emailAddress: { address: email, name }, type:'required' },
        ],
        isOnlineMeeting:       true,
        onlineMeetingProvider: 'teamsForBusiness',
      };

      const { data: created } = await axios.post(
        'https://graph.microsoft.com/v1.0/me/events',
        eventData,
        { headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' } }
      );

      return callback(null, {
        success:     true,
        booked:      true,
        eventId:     created.id,
        meetingLink: created.onlineMeeting?.joinUrl,
        scheduledAt: start,
      });
    }

    /* ─── 3b. Busy → suggest nearest slot without booking ──────── */
    const alt = await findNearestSlot(start, accessToken);
    return callback(null, {
      success:        true,
      booked:         false,
      available:      !!alt,
      suggestedStart: alt,
      message:        alt
        ? 'Requested slot is busy. Nearest available slot returned.'
        : 'Requested slot is busy and the day has no 30‑minute openings.',
    });

  } catch (err) {
    console.error('Graph error:', err.response?.status, err.response?.data || err.message);
    callback(null, { success:false, error:err.response?.data || err.message });
  }
};
```

## Define the Custom Action in Regal Agent

In your AI Agent in the Regal builder, click New Action > Custom Action.

When creating a Custom Action, you’ll provide:

- **Name:** book\_outlook\_cal
- **Description:** When a user asks to schedule an appointment, use this function to store their information and schedule the appointment.
- **Endpoint:** Add the endpoint to your function from above
- **AI Variables:** Define an AI variable for the datetime the customer suggested
- - **Name:** time
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
    "start": "{{variables.time}}",
    "refreshToken": "[COPY FROM OUTLOOK]",
    "email": "{{variables.email}}",
    "name": "{{contact.firstName}} {{contact.lastName}}",
    "phone": "{{contact.contactPhone}}"
}
```

- **Speak After Execution:** Select this so that your AI agent confirms the booking after scheduling

## Handling Responses

You will want your AI agent to act differently depending on the response from your function, so you'll need to prompt your agent how to handle each response

Prompt Example:

> 1. Call function book\_outlook\_cal with the customer's preferred datetime
>
> Wait for the result of the function.
>
> - If result returns "'Requested slot is busy and the day has no 30‑minute openings", say: "Unfortunately there's no availability for that day. Can you pick a later date?"
>
> If contact provides a new datetime, call function book\_outlook\_cal

## ▶️ VIDEO TUTORIAL

Updated 10 months ago

---
