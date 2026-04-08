---
id: 14987900394523
title: "How to create and save a new Dynamic Segment using Segment Builder?"
html_url: "https://support.regal.ai/hc/en-us/articles/14987900394523-How-to-create-and-save-a-new-Dynamic-Segment-using-Segment-Builder"
updated_at: "2023-09-14T19:16:12Z"
---

# How to create and save a new Dynamic Segment using Segment Builder?

# Regal's Segmentation Tool

Regal's Segmentation tool allows you to define audience segments and save them as dynamic lists. You can create highly tailored segments based on conditions using a simple interface, and easily trigger relevant campaign actions within the Regal platform. See video below for an end to end demonstration of the feature.

![Regal Segmentation Tool](https://lh3.googleusercontent.com/c3THLnroZpcggrpLn5nf9dzrQ34G-kZAlZ-15MuG1L6T3Bt3ubjP_fbvqCzs73MVDUlyHT6TWMwjRkApixir4eUNbp-L9Lg12jFeQzOzfhu6Ys4ZS0lsxmZeqm68a69HJIzjuz-Z7vB734kyd6DBcgShpw=s2048)

---

## How to Create Dynamic Segments

### Step 1 - Define Segment Condition

1. Navigate to the **Segments** section in the app to set up a new segment.
2. Under the Define Segment section, select Segment Conditions.
3. Select Condition Type and relevant attributes to define the desired audience.

### Condition Type - Contact Attribute

Use *Contact Attribute* to query any attributes on the contact profile. Select the attribute, operator, and value to define each condition. [See link here](https://regalvoice.slab.com/posts/untitled-5azgs0dp) for list of operators supported.

Need to use Events data to define your segment? Check out [these default contact fields](https://support.regal.io/hc/en-us/articles/18788837463323) that represent useful event level information. They can be powerful addition to help you build action oriented dynamic Segment.

### Logic Framework

You can use All/And or Any/Or logic within each condition group. Further, All/And and Any/Or logic can be used between multiple condition groups.

### Step 2 - View Segment Results

Refresh by hitting the "See Results" button to see the contacts that qualify for the conditions.

- **Contact Card**: Total count of contacts in the segment, only updated upon hitting See Results.
- **Contact Table**: Table contains a detailed list of contacts that fit the criteria. Click on individual contacts to see additional information.

### Step 3 - Save Segment Results

Save new segment or re-save existing segments as a ***dynamic segment***.

---

## How to Trigger Journey Actions for a Dynamic Segment

1. Follow the steps above to save a dynamic segment.
2. Create a new Journey and select the Scheduled trigger type. For how to use Scheduled Journeys, follow [this instruction guide](https://support.regal.io/hc/en-us/articles/12493341501723-How-To-Create-A-Scheduled-Journey-with-Segments).
3. Select the desired dynamic segment in the Scheduled trigger options.

Dynamic segments are *live*. Upon triggering, the segment will evaluate conditions and use the **latest** set of contacts to trigger the Journey.

---

## Commonly Asked Questions

### Will my contact data always be up-to-date for Segmentation?

- Yes. All audience data is updated in real-time and reflected in the Segmentation UI.

### When will my dynamic segment be refreshed?

- The segments refresh when necessary:
  1. Upon hitting See Results, the UI will refresh and show the latest set of contacts.
  2. Upon saving the segment, the latest contact count is fetched and saved in the Segments table.
  3. Upon triggering Journeys via Scheduled, the segment will refresh right before triggering.

### Can I snapshot "point-in-time" segment contacts instead of having dynamic segments?

- Soon! We are working on this feature and will release it as a follow-up.