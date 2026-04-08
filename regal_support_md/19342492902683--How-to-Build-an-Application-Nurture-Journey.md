---
id: 19342492902683
title: "How to Build an Application Nurture Journey"
html_url: "https://support.regal.ai/hc/en-us/articles/19342492902683--How-to-Build-an-Application-Nurture-Journey"
updated_at: "2023-10-05T16:21:14Z"
---

# How to Build an Application Nurture Journey

## Overview

Applications, especially in sectors like insurance, finance, and education, serve as a pivotal gateway to sales.

Unlike lead generation forms which often capture the mere interest of a potential customer, applications signify a deeper intent, potentially reflecting a customer's readiness to make a commitment. This higher engagement level demands a more structured outreach cycle.

#### Commit To Your Commitments

While lead generation forms are often the first touchpoint and capture an initial interest, applications intrinsically dive deeper. They indicate not just interest but commitment. Applicants are much closer to the finish line than leads are. Thus, nurturing someone who has filled out an application requires a unique approach that recognizes their intent.

---

## Leveraging High Engagement

Given the high engagement level of applicants, it's essential to have an outreach cycle that's more involved. Combining regular calls with timely application reminder messages and emails that resonate with your audience will ensure they remain engaged and are more likely to convert. For the purposes of this article, we'll design our application nurture journey with the fictitious *Regal Coding Academy* as an example. In the context of our example, this could mean:

- **6 Calls Attempts:**
  - Day 1 - Immediate
  - Day 1 - A few hours later
  - Day 2 - Morning
  - Day 2 - Afternoon
  - Day 4 - Midday
  - Day 6 - Late Afternoon
- **9 SMS Messages**:
  - Day 1 - Immediate,
  - Day 4 - Morning,
  - Day 6 - Midday,
  - Day 8 - Afternoon,
  - Day 10 - Late Afternoon,
  - Day 14 - Afternoon,
  - Day 16 - Midday,
  - Day 20 - Morning,
  - Day 24 - Midday
- **6 Emails immediately following each call attempt**
  - See [this guide](https://support.regal.io/hc/en-us/articles/16898964611739-How-to-Work-with-Email) for how to set up email for your agents

#### The Cost-Efficiency of Using SMS Messaging

Considering the potential sales value of a most applications, the cost margin of SMS messages is exceedingly efficient for this type of nurture. This low-cost, high-impact strategy ensures that prospects are constantly reminded of their intent to apply and are nudged towards finalizing their application.

### Determine the Right Cadence

Your outreach's cadence should be aligned with the application/sales cycle period specific to your business and adjusted based on data about what times lead to better answer/response rates. This ensures your messages are timely and relevant.

---

## Putting The Journey Together

### Part 1 - The Constant Journey (Call 1 & All SMS)

This journey triggers from the application event and contains your first call, and the SMS outreach. Any SMS experiments would be added here as well.

#### SMS Requirement!

If you did not already, send the applicant confirmation of their subscription to calling and sms messaging. This should include language to opt out if they so choose. This ensures your outreach stays consistent with legal regulations.

Every Regal account comes equipped with a default sms "Subscribed" message that includes your business name. This can be customized at your convenience but must at minimum include a confirmation of the consent to messaging and opt out information.

#### *Step 1 - Trigger & Subscribe SMS*

*![Screenshot 2023-10-05 at 11.07.09 AM.png](https://support.regal.ai/hc/article_attachments/19344309469595)*

Choose your trigger event carefully. This should be your initial application event. Ensure you don't trigger on duplicates or subsequent update events.

![Screenshot 2023-10-05 at 10.25.17 AM.png](https://support.regal.ai/hc/article_attachments/19343127104283)

#### *STEP 2 - Create The Call Task and wait a brief period before sending the first nurture SMS*

![Screenshot 2023-10-05 at 11.14.14 AM.png](https://support.regal.ai/hc/article_attachments/19344319798171)

#### *STEP 3 - Add the remaining SMS*

Ensure that you always check to see whether the application was submitted or not before you send a message!

![Screenshot 2023-10-05 at 11.34.27 AM.png](https://support.regal.ai/hc/article_attachments/19345074585755)

The messaging conditional flow would look consistent for as many SMS as you choose to send. Use the delay nodes to add more variation to your messaging frequency.

### Part 2 - The Dynamic Journey (Call 2)

#### *Step 1 - Trigger with Filters*

This journey triggers from a non-connected application call, in the filters you want to check for a shared attribute among all your Application Call Campaigns, such as the word "Application" in the campaign name. Then you want to ensure your checking for the right disposition(s). Additionally, as a best practice, you should only trigger if the contact is still eligible for calls, for example, their application status is still in the "Submitted" stage.

![Screenshot 2023-10-05 at 12.13.56 PM.png](https://support.regal.ai/hc/article_attachments/19346877744027)

#### *Step 2 - Dynamic Call Creation*

Finally, you check for the specific campaign ID of the call in question and then create the follow up call.

![Screenshot 2023-10-05 at 12.20.37 PM.png](https://support.regal.ai/hc/article_attachments/19346918832283)

---

**Best Practices for SMS**

1. **Content Experiments:** Regularly [test and refine](https://support.regal.io/hc/en-us/articles/5724713528219-How-to-Run-an-A-B-Test-in-a-Journey) your SMS content to resonate best with your audience.
2. **Personalization:** [Personalizing sms messages](https://support.regal.io/hc/en-us/articles/5721570540699-What-are-SMS-Campaigns-) can significantly improve engagement and conversion rates.
3. **Call to Action:** Each message should have a clear call to action guiding the applicant towards the next step in their journey.

---

The key to a successful application nurture journey is to recognize the intent of the applicant and to offer them consistent, personalized, and timely engagements that guide them towards a final commitment. With the right approach, you can maximize conversions and drive significant growth for your business.