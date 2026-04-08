# Segment

# DATA IN

This section describes how to use Segment to send data to Regal. It discusses how to set up Segment, create and identify users, and track events. You can also refer to Regal's Segment developer documentation [here](https://segment.com/docs/connections/destinations/catalog/regal-voice/) , but this guide is kept up to date more regularly:

## Sending Data from Segment to Regal

Get started by enabling the Regal Destination in your Segment.

## Enable the Regal Destination

1. Go to Settings > Integrations to get your Regal API Key. (Otherwise, email [[email protected]](/cdn-cgi/l/email-protection#abd8dedbdbc4d9dfebd9cecccac785cac2))
2. In Segment, navigate to the Sources tab. Open the source from which you'd like to send data to Regal.
3. Click Add Destination.
4. From the list of possible destinations, choose Regal.
5. Click Configure Regal.
6. Enable the toggle at the top of the Regal integration.
7. Segment will now send data from the selected source to Regal.

## What data to send to Regal

Segment allows you to pass all events to Regal; however, you can also filter out events and only send those that are Relevant to Regal. Events that are relevant include:

- Identify events - when new users are created or user traits are updated; when optIn for sms and calls is collected. Regal treats optIn as a user trait
- Track events - related to key moments of the user lifecycle that you wish to reference in your Regal journeys; this can include email send, click, open events

> ## 📘
>
> Page and Screen Events
>
> Regal no longer supports page view and screen events from Segment. This decision was made as we found these events only created noise and were not used to trigger journeys.

## Identifying users

Identify events are used to create users and update user properties. The identify call specifies a customer identity that you can reference across the customer’s whole lifetime. Every identify call must have a User ID or an Anonymous ID, depending on how much you know about the user in question.

### Anonymous ID

There are certain cases where you don’t actually know who the user is according to your database, but you still want to be able to tie them to traits, events, or page views. For example, you may not know who a user is when tracking newsletter signups or anonymous page views.

In these cases, you should use an Anonymous ID. The Anonymous ID can be any pseudo-unique identifier. For example, on your servers you can use a session id. If you don’t have any readily available identifier, you can always generate a new random one—we recommend UUIDs.

Note: Segment’s browser and mobile libraries automatically use Anonymous IDs to keep track of users as they navigate around your website or app, so you don’t need to worry about them when using those libraries.

### User ID

Once a user has created an account in your application, we recommend sending along the **userId** with the payload instead of an Anonymous ID. A User ID is usually the unique identifier that you recognize a user by in your own database or CRM.

User IDs should be consistent across a customer’s lifetime and identify calls should include a User ID as often as possible.

The **userId** will appear as **External ID** in the Regal app, and should not be shared across users.

We recommend using database IDs instead of simple email addresses or usernames, because database IDs never change and don't include PII. Instead email address or a username can be sent along along as traits.

### Traits

If an identify event contains a phone number or an email, Regal will create a contact in your Regal Audience.

Traits in your identify events get added to the contact's profile in Regal. There are a standard set of supported **traits** including:

- firstName
- lastName
- phones
- emails
- address

Any other traits you add become custom properties on a contact's profile in Regal.

Here's an example call to Segment's identify method, using their Analytics.js (JavaScript) Source. In this example, custom properties include: *salaryBracket*, *employmentStatus*, and *savingsGoal*

JavaScript

```
analytics.identify("92980cfccc067", {
  phone: "+19545555555",
  email: "[email protected]",
  firstName: "Rebecca",
  lastName: "Greene",
  address: {
    AddressLine1: "201 Maiden Lane.",
    AddressLine2: "11M",
    City: "New York",
    ZipOrPostcode: "10128",
    StateProvinceCounty: "NY",
    CountryId: "US"
  },
  salaryBracket: "$100k-$500k",
  employmentStatus: "Employed",
  savingsGoal: "New Home"
});
```

## Tracking events

The track call is how you record any actions your users perform, along with any properties that describe the action. We recommend calling track on any event you'd like Regal to use for scoring a lead or as a trigger or condition when sending and sms campaigns.

An example for a financial services company might be that you want to tigger an outbound call to a user for whom a ‘Loan Application Approved’ event has been received, but not a ‘Loan Signed’ event (with some parameter around timing).

In that case, an example track call for the ‘Loan Application Approved’ event using Segment's Analytics.js (JavaScript) Source would look like the following:

JavaScript

```
analytics.track("Loan Application Approved", {
  loanType: "Personal loan", 
  amount: 30000,
  currency: "USD",
  term: 12
})
```

> ## 🚧
>
> Important
>
> Calling track for a user that doesn't already exist in your Regal project creates a user in Regal for them and associates it with the custom event data. However, until you call identify for that user with a phone number and/or email, their Regal profile is not available in your audience for journeys and messaging. After you've called identify for them, their contact profile—along with all previously tracked events—is accessible.

## Passing opt in to Regal

In order to trigger outbound calls or sms messages from Regal, you must collect the user’s explicit opt-in for those channels along with the user’s phone number.

There are 2 options for how you can let Regal know a user has opted in:

1. Anytime you collect opt-in for sms or voice calls, you can trigger a track event after a user opts in and let the Regal team know what track event is synonymous with opt-in collected (there is no required format for this event). The product will then automatically subscribe users who perform that event. (Note: for Regal to subscribe a user, there must already be a phone provided for that user.)
2. Alternatively, anytime you collect opt-in for sms or voice calls, you can use an identify call to pass that opt-in information to Regal by adding an optIn object within each phone number like in the example below.

Below is an example of what an identify call would look like for a user who opted into multiple channels (SMS, phone call and email) at once:

JavaScript

```
analytics.identify("92980cfccc067", {
  phone: "+19545555555",
  email: "[email protected]",
  optIn: [
    {
      channel: "sms",
      subscribed: true,
      timestamp: "2020-08-25T21:23:43Z",
      ip: "172.16.254.1",
      source: "booking_flow",
      text: "By clicking the 'Submit' button below, I agree to receive automated marketing SMS and calls."
    }, 
    {
      channel: "voice",
      subscribed: true,
      timestamp: "2020-08-25T21:23:43Z",
      ip: "172.16.254.1",
      source: "booking_flow",
      text: "By clicking the 'Submit' button below, I agree to receive automated marketing SMS and calls."
  }]
});
```

Supported messaging channels are **sms** and **voice**.

For the identify method, the *ip* field is required if you are opting in users server side. (If you are opting in users client side, Segment automatically adds ip to the context, so you are not required to add it to the optIn object)

Make sure to include *timestamp* with the exact time the user opted in. **Since traits are cached and sent with subsequent Identify calls, Regal ignores opt-ins that do not have a timestamp date.**

## Multiple Phones and Emails for a Contact

> ## 📘
>
> Support for Multiple Phones and Emails
>
> As of July 2023, Regal has added support for sending multiple phones and emails for a contact in a single payload in order to make it easier to add multiple phones and emails to a contact profile in Regal. The original Segment implementation outlined above will still work with this feature: Should you send multiple payloads each specifying a different phone but the same anonymous or userId, then all of those phones will be added to the same contact profile.
>
> However, there are certain limitations. For example, you cannot specify which phone number is the primary one - instead, we will interpret the latest phone number to be the primary phone by default. And you cannot provide a label for each phone.
>
> Should you want to take full advantage of the multiple phones and emails feature, you may instead use the below payload. As this will require more work to integrate, it will only make sense to use this new payload if you have a common use case for multiple phones and emails for each of your contacts. Ask your Implementation Manger to help guide your decision.

JavaScript

```
analytics.identify("92980cfccc067", {
  {
    userId: "xyz",
    traits:{
        phones: {
            "+11115555555": {
                label: "Mobile",
                isPrimary: true,
                voiceOptIn:{
                    subscribed: true,
                    ip: "127.0.0.1",
                    text: "I agree to receive marketing calls",
                    timestamp: "2000-08-20 09:12:28 -04:00"
                },
              //it's not required to have all items of the optin
                smsOptIn:{
                    subscribed: true
                }
            },
            //for this next phone number no optin is provided; it is not necessary to specify isPrimary false. 
            // Leaving out accomplishes same thing
            "+13335555555":{
                label: "Work"
            },
            "+12225555555":{
                label: "Home",
                voiceOptIn:{
                    subscribed: true,
                    ip: "127.0.0.1",
                    text: "I agree to receive marketing calls",
                    timestamp: "2000-08-20 09:12:28 -04:00"
                   },
              	smsOptIn:{
                    subscribed: true,
                    ip: "127.0.0.1",
                    text: "I agree to receive marketing calls",
                    timestamp: "2000-08-20 09:12:28 -04:00"
                   }
            },
           //for this next phone number, no details are specified which is ok
            "+144455555555": {}
          
        },
        emails:
        {
            "[email protected]":
            {
                label: "Personal",
                isPrimary: true,
                emailOptIn:
                {
                    subscribed: true
                }
            },
            "[email protected]":
            {
                label: "Work",
                isPrimary: false,
                emailOptIn:
                {
                    subscribed: false
                }
            },
            "[email protected]":
            {
                label: "Other Work"
            }
        }
    }
}

});
```

## Testing your integration

To check the success of your integration:

- Go to the **Recent Activity** page in the Regal app to view incoming track and page events
- Go to the **Audience** page in the Regal app to view your contacts (created from identify events) - remember in order for a user to appear in your audience they must have a phone. You can also view their optIn status from the Audience page

# DATA OUT

This section describes how to set up the Regal Segment Source to receive real-time events from Regal.

## Enable the Regal Source

**Step 1:** Go to your Segment account and search for Regal in the Sources catalogue

![](https://files.readme.io/8c777bf-step_1.png "step 1.png")

**Step 2:** Select and add Source

![2104](https://files.readme.io/db3bf9d-step_2.png "step 2.png")

Add Source

![1712](https://files.readme.io/e3a992a-step_2-2.png "step 2-2.png")

Name and Label Source

**Step 3:** Copy the Write Key from the Segment UI and email it to [[email protected].](/cdn-cgi/l/email-protection#f4878184849b8680b48691939598da9d9bda) (You can use <https://pwpush.com> to share it in a more secure way)

![1782](https://files.readme.io/08b121b-step_3.png "step 3.png")

Write Key

> ## 📘
>
> Wait for Regal Confirmation
>
> Once we have your write key, we will respond within a couple of hours and let you know that you're all set. You should then see data flowing through.

**Step 4:** Add any Destinations you want the Regal data to flow to and enable the Source

![1856](https://files.readme.io/e28b32d-step_4.png "step 4.png")

Connect to a Destination

## Events & Event Schema

See [Regal's Segment Source documentation](https://segment.com/docs/connections/sources/catalog/cloud-apps/regal-voice/) for the list of events and properties Regal publishes to Segment.

Updated about 1 month ago

---

What’s Next

Once you've finished setting up the Regal Segment Destination, you can set up the Regal Segment Source to receive Regal events back in real-time.

- [Segment Source](/docs/segment-source)
