---
id: 42340708645915
title: "How to Do Multi-Attempt Calling While Prioritizing Fresh Leads"
html_url: "https://support.regal.ai/hc/en-us/articles/42340708645915-How-to-Do-Multi-Attempt-Calling-While-Prioritizing-Fresh-Leads"
updated_at: "2025-11-04T20:46:36Z"
---

# How to Do Multi-Attempt Calling While Prioritizing Fresh Leads

When doing multi-attempt outbound outreach, it’s critical that calls to contacts on their first or early attempts are prioritized ahead of contacts who have already been called many times (and typically have a lower likelihood of answering/converting).

Regal allows you to do this automatically with **Dynamic Campaign Priority**: you can create a single campaign and elect for priority to decrease with every additional call attempt, so fresher attempts are naturally prioritized the highest.

![](https://support.regal.ai/hc/article_attachments/42340753054107)

### 

### How Dynamic Campaign Priority Works

When enabled, task priority automatically decreases by 1 for each subsequent call attempt:

**Task Priority = Starting Priority - (Call Attempt Number - 1)**

For example**,** If you set Campaign Priority at 1000:

- Attempt #1 = Priority 1000
- Attempt #2 = Priority 999
- Attempt #3 = Priority 998
- Attempt #10 = Priority 991

Note: The minimum priority is 1, so tasks never go below priority 1 regardless of attempt number.

### Tracking Campaign Call Attempts

Regal tracks campaign-specific call attempts in two places. Both of these are campaign-specific and profile-specific, allowing you to track how many call attempts within a specific campaign have been completed for each contact:

#### 1. Event Property

The **call.completed** event includes a **campaign\_call\_attempt** property that shows which attempt number was just completed for that contact in the specific campaign.

![](https://slabstatic.com/prod/assets/h2b7yidn/post/xje2muzy/preimages/e5WwJdYgttDBXcq4gTTviZnD.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzYxMDY4MTI4LCJpYXQiOjE3NjEwNjA5MjgsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzFvOG41Ymg5dTJ1MTI2cWJsZ2ZsdWs0IiwibmJmIjoxNzYxMDYwOTI4LCJwYXRoIjoicHJvZC9hc3NldHMvaDJiN3lpZG4vcG9zdC94amUybXV6eSJ9.QvfkPTm9LBcJSo4bm5c8Wr0jaiD7vy5rtt9YsKXLGYrSJOU8d1VOYJvu3LCPwzcr6P6EODPsMbsn5FklrpPcQ4FIy5TtVIBgW7hx6UlaQFIpXByrIOR0Pb3gRWVvLCWdO2z6hmRdVbEklrey4rnUuHIuH_soD9cgKb8hlYeVUrxT7hfNERo6Ll0E9xOoDs--SC8AXD7T74R_obOR7UeIUrqqAbAxZm_QOU88Na2Lj2i1T3muahFLBFy32_J2FK6ElIedAbamkyRlcTuvRvaY2uJRF_W-0-8NCGJ0oOtgPCr-zwY0fYa3fI7I5jslvGC36h6d3GFB0OWaaso6gKCaDg)

#### 

#### 2. Task Attribute

All campaign call tasks include a **campaignProfileCallAttempt** task attribute that indicates which campaign call attempt number this task represents.

![](https://slabstatic.com/prod/assets/h2b7yidn/post/xje2muzy/preimages/56xVMsBVIpLe5bProGWLiNBA.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzYxMDY4MTI4LCJpYXQiOjE3NjEwNjA5MjgsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzFvOG41Ymg5dTJ1MTI2cWJsZ2ZsdWs0IiwibmJmIjoxNzYxMDYwOTI4LCJwYXRoIjoicHJvZC9hc3NldHMvaDJiN3lpZG4vcG9zdC94amUybXV6eSJ9.QvfkPTm9LBcJSo4bm5c8Wr0jaiD7vy5rtt9YsKXLGYrSJOU8d1VOYJvu3LCPwzcr6P6EODPsMbsn5FklrpPcQ4FIy5TtVIBgW7hx6UlaQFIpXByrIOR0Pb3gRWVvLCWdO2z6hmRdVbEklrey4rnUuHIuH_soD9cgKb8hlYeVUrxT7hfNERo6Ll0E9xOoDs--SC8AXD7T74R_obOR7UeIUrqqAbAxZm_QOU88Na2Lj2i1T3muahFLBFy32_J2FK6ElIedAbamkyRlcTuvRvaY2uJRF_W-0-8NCGJ0oOtgPCr-zwY0fYa3fI7I5jslvGC36h6d3GFB0OWaaso6gKCaDg)

### 

### Configuring your Multi-Attempt Outreach

#### Step 1: Create a Campaign with Dynamic Campaign Priority

1. Create a new Phone Call campaign
2. In the Campaign Priority section, toggle on "Enable Dynamic Priority Decrease for Each Call Attempt"
3. Set your starting priority number as "Campaign Priority" (e.g., 1000)
4. Save your campaign

#### Step 2: Create Your [Initial Trigger Journey](https://support.regal.ai/hc/en-us/articles/19340065342875-How-to-Create-Your-First-New-Lead-Journey)

Set up a journey that triggers your first campaign call attempt from the relevant initial event (e.g., "Lead Created" event from your CRM).

![](https://slabstatic.com/prod/assets/h2b7yidn/post/xje2muzy/preimages/hzn1XKD7GZz5nRKcjh2dPwqQ.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzYxMDY4MTI4LCJpYXQiOjE3NjEwNjA5MjgsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzFvOG41Ymg5dTJ1MTI2cWJsZ2ZsdWs0IiwibmJmIjoxNzYxMDYwOTI4LCJwYXRoIjoicHJvZC9hc3NldHMvaDJiN3lpZG4vcG9zdC94amUybXV6eSJ9.QvfkPTm9LBcJSo4bm5c8Wr0jaiD7vy5rtt9YsKXLGYrSJOU8d1VOYJvu3LCPwzcr6P6EODPsMbsn5FklrpPcQ4FIy5TtVIBgW7hx6UlaQFIpXByrIOR0Pb3gRWVvLCWdO2z6hmRdVbEklrey4rnUuHIuH_soD9cgKb8hlYeVUrxT7hfNERo6Ll0E9xOoDs--SC8AXD7T74R_obOR7UeIUrqqAbAxZm_QOU88Na2Lj2i1T3muahFLBFy32_J2FK6ElIedAbamkyRlcTuvRvaY2uJRF_W-0-8NCGJ0oOtgPCr-zwY0fYa3fI7I5jslvGC36h6d3GFB0OWaaso6gKCaDg)

#### 

#### Step 3: Create your Journey for Follow-up Attempts

Create a journey for subsequent call attempts:

![](https://support.regal.ai/hc/article_attachments/42397602444059)

**1) Set the Triggering Event:** Use **call.completed** event with conditions to check:

- Call was completed for your specific campaign
- Call was not answered (check specific dispositions or conversation\_happened = false)
- Filter for specific **campaign\_call\_attempt** range to ensure the journey has defined stopping point (can also be controlled via Conditional Match)

![](https://slabstatic.com/prod/assets/h2b7yidn/post/xje2muzy/preimages/KWsTBuvEUJmiDSliQsqB5ga8.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzYxMDY4MTI4LCJpYXQiOjE3NjEwNjA5MjgsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzFvOG41Ymg5dTJ1MTI2cWJsZ2ZsdWs0IiwibmJmIjoxNzYxMDYwOTI4LCJwYXRoIjoicHJvZC9hc3NldHMvaDJiN3lpZG4vcG9zdC94amUybXV6eSJ9.QvfkPTm9LBcJSo4bm5c8Wr0jaiD7vy5rtt9YsKXLGYrSJOU8d1VOYJvu3LCPwzcr6P6EODPsMbsn5FklrpPcQ4FIy5TtVIBgW7hx6UlaQFIpXByrIOR0Pb3gRWVvLCWdO2z6hmRdVbEklrey4rnUuHIuH_soD9cgKb8hlYeVUrxT7hfNERo6Ll0E9xOoDs--SC8AXD7T74R_obOR7UeIUrqqAbAxZm_QOU88Na2Lj2i1T3muahFLBFy32_J2FK6ElIedAbamkyRlcTuvRvaY2uJRF_W-0-8NCGJ0oOtgPCr-zwY0fYa3fI7I5jslvGC36h6d3GFB0OWaaso6gKCaDg)

**2) Add a Conditional Match Node:** Reference the **campaign\_call\_attemp**t property on the **call.completed** event to:

- Control different behaviors (e.g., wait times between attempts)
- Ensure the journey has a defined stopping point
- Route to different paths of outreach strategy based on attempt number

![](https://slabstatic.com/prod/assets/h2b7yidn/post/xje2muzy/preimages/XmGjOlksQqta0OKEBRasLXT6.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL3NsYWJzdGF0aWMuY29tIiwiZXhwIjoxNzYxMDY4MTI4LCJpYXQiOjE3NjEwNjA5MjgsImlzcyI6Imh0dHBzOi8vYXBwLnNsYWIuY29tIiwianRpIjoiMzFvOG41Ymg5dTJ1MTI2cWJsZ2ZsdWs0IiwibmJmIjoxNzYxMDYwOTI4LCJwYXRoIjoicHJvZC9hc3NldHMvaDJiN3lpZG4vcG9zdC94amUybXV6eSJ9.QvfkPTm9LBcJSo4bm5c8Wr0jaiD7vy5rtt9YsKXLGYrSJOU8d1VOYJvu3LCPwzcr6P6EODPsMbsn5FklrpPcQ4FIy5TtVIBgW7hx6UlaQFIpXByrIOR0Pb3gRWVvLCWdO2z6hmRdVbEklrey4rnUuHIuH_soD9cgKb8hlYeVUrxT7hfNERo6Ll0E9xOoDs--SC8AXD7T74R_obOR7UeIUrqqAbAxZm_QOU88Na2Lj2i1T3muahFLBFy32_J2FK6ElIedAbamkyRlcTuvRvaY2uJRF_W-0-8NCGJ0oOtgPCr-zwY0fYa3fI7I5jslvGC36h6d3GFB0OWaaso6gKCaDg)

**⚠️ Important:** Always enforce a check on call attempts in your journeys using either the event trigger or a Conditional Match node. Without this, you could create a never-ending journey.

**3) Direct to the Same Campaign:** Route all attempts to the same campaign to maintain dynamic priority

### Migration Tips

If you're currently using multiple campaigns for different call attempts:

1) Create a NEW campaign with dynamic priority enabled (rather than updating existing campaigns)

2) Set up new journeys for the dynamic priority campaign

3) Once your new journey is tested and ready, *redirect* your initial Call 1 journey to the new dynamic priority campaign

**Important:**Keep your old followup attempts campaigns and journeys *live* until all contacts have reached the end of your journey. This way, new leads are directed to your new flow but prior leads are not dropped.

![ZRzduWWclkxBtkLnHUlU2wVy.png](https://support.regal.ai/hc/article_attachments/42399167567259)

4) Phase out the old multi-campaign setup and turn off their old associated journeys once all contacts have flowed through the entire journey

### Reporting and Monitoring

Dynamic Campaign Priority comes with several fields that make reporting on multi-attempt campaigns easy.

#### Key Fields

**1) Campaign Title:** A richer descriptive value of a campaign, indicating the call attempt number if using dynamic campaign priority strategies.

- Format for dynamic campaigns: **[Campaign Name] | Attempt X** (e.g., “Outbound Sales | Attempt 3”)
- For static campaigns (not using dynamic priority), Campaign Title = Campaign Name

![Campaign Title Example](https://support.regal.ai/hc/article_attachments/42960224855835)

**2) Call Attempt:** The number of call attempts for this profile/contact within this campaign (e.g., if this task is the 3rd call attempt to this contact, Call Attempt = 3).

- Note: This information is populated on all campaign tasks, regardless of priority strategy.

![Call Attempt Example](https://support.regal.ai/hc/article_attachments/42960224856731)

**3) Campaign Priority Strategy:** The priority strategy (dynamic or static) chosen for this campaign/call.

- **Dynamic (Call Attempt)** – Campaign has dynamic priority enabled.
- **Static** – Traditional static priority (dynamic priority is not enabled).
- You can use this field to filter campaigns or campaign tasks by whether they use dynamic priority.

![Campaign Priority Strategy Example](https://support.regal.ai/hc/article_attachments/42960253184283)

![Reporting Fields Overview](https://slabstatic.com/prod/assets/h2b7yidn/post/xje2muzy/preimages/T6oArmuMXLKx1FDewq39opaa.png)

#### Analyzing Campaign Performance

To evaluate campaign performance (answer rate, transfer rate, conversions, etc.) across attempts within a dynamic campaign, split your analysis by **Campaign Title** or **Call Attempt**.

![](https://support.regal.ai/hc/article_attachments/42961081997339)

To compare outreach across campaigns without attempt breakdowns, group by **Campaign Name** instead. This aggregates all attempts for a campaign-level view.

![](https://support.regal.ai/hc/article_attachments/42961043845147)