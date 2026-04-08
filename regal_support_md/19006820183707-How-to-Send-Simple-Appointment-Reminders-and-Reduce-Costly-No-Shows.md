---
id: 19006820183707
title: "How to Send Simple Appointment Reminders and Reduce Costly No Shows"
html_url: "https://support.regal.ai/hc/en-us/articles/19006820183707-How-to-Send-Simple-Appointment-Reminders-and-Reduce-Costly-No-Shows"
updated_at: "2023-10-05T16:23:44Z"
---

# How to Send Simple Appointment Reminders and Reduce Costly No Shows

## Overview

Appointment No-Shows can impact revenue targets and decrease employee morale. However, implementing scheduled reminder texts for your appointments is a proven strategy to mitigate no-shows and encourage engagement from your contacts.

In the following sections, you'll understand how to set up a simple appointment reminder journey with the sample message copy provided. The examples are generally applicable, however each case is different. Feel free to alter the journey or messaging to best fit your use case.

Reminder texts stand on a fine line between helpful and annoying. Be mindful not to send too many messages, but also be sure to send timely messages.

---

## Step One - Create the SMS Campaigns

You'll need to decide on a reminder schedule that makes sense for your case. For the purpose of this article demo, we're going to go with a cadence of 3 reminder messages. This fits the majority of appointment types, both virtual and in-person.

- A confirmation message when the appointment is booked
- A reminder 24 hours before
- A reminder 1 hour before with additional instructions for the appointment start

#### Reminder Message Sequence

![](https://support.regal.ai/hc/article_attachments/19007175938843)

These messages make use of [dynamic contact attributes](https://support.regal.io/hc/en-us/articles/5721570540699) that populate with the appointment data of the contact. The sample message content used is below.

### SMS 1 Sample - Booking Confirmed

```
Hi {{contact.firstName}}, your {{contact.customProperties.appointmentType}} 
appointment with {{contact.customProperties.appointmentHost}} 
on {{contact.customProperties.prettyAppointmentDate}} 
at {{contact.customProperties.prettyAppointmentTime}} is confirmed.

Reply directly to this message, or call us at +19179059128, 
if you have any questions or want to make any changes.
```

### SMS 2 Sample - 24 Hour Confirmation

```
{{contact.firstName}}, your {{contact.customProperties.appointmentType}}   
appointment with {{contact.customProperties.appointmentHost}}   
is tomorrow at {{contact.customProperties.prettyAppointmentTime}}. 

Reply "Y" to confirm or "N" to cancel.   
Call us at +19179059128 if you have any questions or concerns.
```

### SMS 3 Sample - Final Confirmation One Hour Before

```
{{contact.firstName}}, your {{contact.customProperties.appointmentType}}   
appointment with {{contact.customProperties.appointmentHost}}   
is starting in one hour. Please test your hardware at least 15 minutes   
before your appointment starts. 
Join your appointment 5 minutes before {{contact.customProperties.prettyAppointmentTime}}.

Appointment Link:
---
https://mybrandeddomain.com/appointments/{{contact.customProperties.appointmentId}} 
---
```

---

## Step Two - Build the Journey

The journey should trigger from the appointment booking confirmation. Ideally, this is an event you are passing to us with specific appointment data for the contact in question. However, the same journey flow could be implemented through a disposition from an agent task, for example, provided the appointment details (like appointment time) are updated on the [contact by the agent.](https://support.regal.io/hc/en-us/articles/11628109052315)

![Screenshot 2023-09-22 at 11.56.08 AM.png](https://support.regal.ai/hc/article_attachments/19008642133659)

### 1 - Trigger

- Appointment Booked or some equivalent appointment booking confirmation
- Can be an event or a task completion

![Screenshot 2023-09-22 at 1.06.00 PM.png](https://support.regal.ai/hc/article_attachments/19008703168155)

### 2 - Send Confirmation SMS

- It should be personal and precise. It should contain all of the relevant information about the contacts specific appointment.
- It should give the attendee a clear and direct way to get in touch, or make changes to the appointment.

### 3 - Wait until one day before the appointment starts

- This is subject to your own appointment update / cancel policy.
- Reach out to customers to confirm one last time before they enter the confirmation deadline to minimize the risk of a costly no-show

![Screenshot 2023-09-22 at 1.06.10 PM.png](https://support.regal.ai/hc/article_attachments/19008770298011)

### 4 - Check to ensure the appointment is still booked before continuing the reminders

- This node assumes that cancelations are coming into Regal through an event

### 5 - Send Last Courtesy Reminder SMS

- This SMS should have a clear call to action to confirm the appointment, for example "Reply Y to confirm"

### 6 - Wait until one hour before the appointment starts

### 7 - Check to ensure the appointment is still booked before continuing the reminders

### 8 - Send Appointment Instructions SMS

- Is there a video link?
- Is the appointment room at the far end of a building?
- This last SMS should be an alert to the attendee that provides clear instructions for a smooth appointment start at the designated time.

---

## Best Practices & Next Steps

### Track Cancelations

The only thing worse than a no-show, is not responding to a cancelation request. If an attendee cancels an appointment in your system, send the event to Regal to ensure that the journey has up to date information before sending SMS.

Use [Dynamic References](https://support.regal.io/hc/en-us/articles/14157351216027) to Check for A Cancelation

![Screenshot 2023-09-22 at 12.59.04 PM.png](https://support.regal.ai/hc/article_attachments/19008642145051)

If a user responds to one of the reminders to cancel, ensure that a follow up journey will update your system. Use [journey webhooks](https://support.regal.io/hc/en-us/articles/5725272620187) to communicate with your system or to create an "Appointment Canceled" event in Regal.

### Monitor Appointment Attendance / Answer Rate

The goal of this journey is to boost attendance and reduce no shows, so keep track of these metrics after you implement the journey. Experiment by adjusting the message content, frequency and/or timing to find the most effective strategy for your use case.