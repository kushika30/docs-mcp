---
id: 17259719183643
title: "Creating & Using Moments"
html_url: "https://support.regal.ai/hc/en-us/articles/17259719183643-Creating-Using-Moments"
updated_at: "2025-05-29T18:25:10Z"
---

# Creating & Using Moments

# Overview

Moments are special tags added to calls based on rules you define. Admins will see a “Moments” page in the left sub-nav menu where they can manage Moment definitions.

![](https://support.regal.ai/hc/article_attachments/28041660985499)

# Setting Up Moments

To define a Moments, input a comma-separated list of keywords & phrases. If any of those terms are detected in the transcript, the call will be tagged with that Moment. Only new calls after creating/updating a Moment will be tagged. Old calls will not be retroactively tagged**.**

## **AI Moment**

If you're unsure about the keywords & phrases that you're trying to capture or are having trouble making a list of all of the keywords you'd like to track, enable **AI Moment**! AI Moments use the tracker's name, description, and existing keywords to tag any moments in calls that contain similar concepts.

![basic.png](https://support.regal.ai/hc/article_attachments/28041683033499)

Any moment tagged using AI will be denoted by a ✨ in the tag shown in the transcript. Any moment tagged because it matches the keywords & phrases defined will not have the ✨ designation regardless of whether it's an AI Moment.

![Detail Page-Call Details.png](https://support.regal.ai/hc/article_attachments/28041683036955)

# Using Moments

Moments can be used in powerful ways across the app. Here are some ideas to get you started:

## Filter for Calls with (or without) Specific Moments

Select one or more Moments in the list view to filter down to interesting calls. All calls with any of the selected Moments will be shown. Similarly, you're able to filter for calls missing certain Moments.

![](https://support.regal.ai/hc/article_attachments/20239956999323)

## Finding Turns Tagged by Moments in Transcripts

When clicking into a specific transcript, you can see all the Moments that were detected for that call. They will appear directly in the relevant parts of the transcript, as well as in the Search pane where you can click them to quickly find where in the transcript they appeared.

![](https://support.regal.ai/hc/article_attachments/20239982046619)

## Triggering Outreach Using Moments

Use Moments to automatically power desired follow-up actions by using them in Journey trigger nodes or conditional nodes. After every call, a call.transcript.available event will be emitted (similar to the call.recording.available event) which you can reference in the Journey nodes. Use the property conditions to check the *trackers* json element in the event, which contains a list of all Moments found in that call.

![](https://support.regal.ai/hc/article_attachments/28041683043867)