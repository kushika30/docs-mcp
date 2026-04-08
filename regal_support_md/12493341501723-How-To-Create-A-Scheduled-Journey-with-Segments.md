---
id: 12493341501723
title: "How To Create A Scheduled Journey with Segments"
html_url: "https://support.regal.ai/hc/en-us/articles/12493341501723-How-To-Create-A-Scheduled-Journey-with-Segments"
updated_at: "2023-10-04T02:13:00Z"
---

# How To Create A Scheduled Journey with Segments

### Scheduled Journeys allow you to trigger a journey to a Segment of contacts at a pre-specified time. This is commonly used for seasonal promotions, lapsed customer re-engagement or end of month/quarter pushes.

#### 

#### **Setting up a Scheduled Journey**

1. To create a Scheduled Journey, click on the trigger node to activate the trigger form on the right.
2. Select Schedule as the Trigger Type.
3. Select an existing Segment from the list to trigger your journey to - either a Dynamic segment or a static CSV-uploaded segment. (See articles for [how to create a Dynamic segment](https://support.regal.io/hc/en-us/articles/14987900394523-How-to-create-and-save-a-new-Dynamic-Segment-) or [how to upload a CSV to create a static segment](https://support.regal.io/hc/en-us/articles/6771680286619-Adding-Updating-Users-Through-a-Manual-CSV-Upload)).
4. Under Start Date & Time, select when you want the Journey to trigger.
5. This Journey will trigger for the contacts included in the selected segment (at the time of the send).
6. Journey will be triggered once at the specified time.

![mceclip1.png](https://support.regal.ai/hc/article_attachments/12493139538459)

#### **How fast do Scheduled Journeys trigger?**

- **Each Scheduled Journey will trigger at 1k contacts/minute**. i.e. For a segment of 20k contacts, it will take 20 minutes for the Journey to finish triggering to all contacts. If it is set to start at 10:00AM ET, it will finish triggering around 10:20AM ET.
- **For each Regal account**, no more than 1k contacts can be triggered in any given minute, which means **there can only be one Scheduled Journey processing at a time**. In the example above, the second Scheduled Journey can start triggering at 10:21AM after the first one is completed.

#### 

#### **Can I reuse a previously triggered Scheduled Journey?**

Yes! A Scheduled Journey can be re-triggered and does not need to be duplicated. If you want to reuse the Journey for a new segment or the same segment of contacts, simply follow these steps:

- Open trigger node and select the target segment
- Set a **new** trigger time
- Resave **Journey as Live** to trigger at the selected time

**🚧 WARNING:** Be careful when duplicating or resaving pre-existing Scheduled Journeys as Live. While the UI will warn and prevent you from saving a scheduled trigger node in the past, if you've already saved the trigger node (before it was in the past), and then you save the Journey as Live, it will instantly trigger your journey.

#### **S****egment upload still in progress?**

- If you recently created the segment, you may see a yellow banner noting that the segment upload is still in progress.
- To ensure all contacts in segments are triggered for properly, allow additional time before the scheduled trigger time
  - **Note: For a large CSV at max 50k contacts), we recommend allowing at least 2 hours between upload and trigger time**

                                   ![mceclip3.png](https://support.regal.ai/hc/article_attachments/12493687747227)

#### **Why do I sometimes see certain times grayed out in the scheduler?**

- Given the current brand level limit to process/trigger no more than 1k/minute for Scheduled Journeys. Therefore only one Journey can be triggering during any given minute.
- The grayed out times indicate time-slots that have been taken up by already Scheduled Journeys. To see other scheduled Journeys, check those with a trigger type as Scheduled in Journeys table.

![User-uploaded Image](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/lJodR3NiRWtmsmoZZTOjtD3g.png)

#### **Why can't I save certain time slots even though they are available to be picked?**

- If you encounter this error, it means the available time after the selected start time is not sufficient to trigger all contacts in the segment. This is typically because there is another Journey scheduled to start after.
- Try to select a different time based on the segment size (i.e. 10k segment will need about 10 minutes.)

![User-uploaded Image](https://slabstatic.com/prod/uploads/h2b7yidn/posts/images/21OoyR72xLaPRyqquW2ek57F.png)

If you have further questions, please contact your CSM for support. Happy Journeying. ✌