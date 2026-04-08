# 📍Validate U.S. Zip Codes for Smarter Routing or Compliance

## Overview

This custom action verifies whether a 5-digit U.S. zip code provided by a caller is valid—and instantly identifies its associated state and counties. That means your AI Agent can confidently decide whether to continue, qualify, or route the call to the right destination.

Whether you’re routing based on state licensing laws, coverage zones, or county-based programs, this tool gives your phone agent the accuracy it needs—without depending on guesswork or luck.

---

### Why This Matters

In industries like healthcare, insurance, local services or utilities, your business is often regulated by geography.

- Routing a New York caller to a California advisor? ***That’s a compliance red flag***.
- Offering coverage that doesn’t apply to their zip? ***That’s a wasted call.***

This action removes the risk. It confirms the zip is real, and that your next step is legal, logical, and more likely to convert.

---

## Why not let the LLM handle it?

### LLMs Predict Words—Not Always Logic

Large Language Models (LLMs) like GPT are brilliant with natural language and conversations—but when it comes to validation and precision, they sometimes drop the ball. Why?

- Most LLMs are trained to predict the most likely next word, not evaluate if a piece of information is correct.
- They don’t [check databases](https://support.regal.ai/hc/en-us/articles/35534441894555-How-Should-I-Incorporate-a-Pricing-Sheet-for-My-AI-Agent-to-Use), so if a caller says “55555” or a zip that looks plausible but isn’t real—it might accept it anyway.
- They don’t map geography, meaning they can’t reliably connect a zip code to a state or county for routing.

**Even though newer models like GPT-4o have significantly improved on logic, math, and reasoning [(see our guide on choosing an LLM)](https://support.regal.ai/hc/en-us/articles/35462414263451-What-LLM-Should-I-Choose-for-My-AI-Agent), we still don’t leave it to chance.**

> ## 👍
>
> That’s why we built this tool:
>
> A real-time zip code validator that checks against a trusted database and returns valid state/county results your workflow can use—without hallucinating.

---

## Key Use Cases

Here are some of the top ways businesses are using zip code validation in their AI flows:

| Use Case | What It Solves |
| --- | --- |
| **Healthcare Compliance Routing** | Ensures calls are routed only to practitioners licensed in the caller’s zip-based state/county. |
| **Insurance Eligibility** | Checks if a specific plan or product is available in that area before proceeding. |
| **Service Area Checks** | Schedule or prevents offering services in regions where they aren’t available (***moving***, ***telecom***, ***energy***, etc.). |
| **Coverage Filtering** | Enables dynamic flows that explain plan differences or exclusions by location. |
| **Tax/Benefit Programs** | Identifies the correct county to route callers for localized services. |

> ## 🎯
>
> Whether your call center supports government services, private benefits, or regional offers, this action ensures your AI is smart about location—and doesn’t need a human to double-check.

---

## Requirements

Before adding this function to your AI workflow, make sure your setup meets the following requirements:

- **Zip Code Prompt:** Your agent prompt must clearly ask the user to provide a zip code (e.g., “What’s your zip code?”).
- **Fallback Ready**: Always prepare a next step in case of invalid zip (e.g., retry prompt, escalate, or offer additional resources).
- **Brand Slug**: Make sure the endpoint URL includes your correct brand slug. Reach out to [[email protected]](/cdn-cgi/l/email-protection#83f0f6f3f3ecf1f7c3f1e6e4e2efade2ea) if you don't know it.

---

## Set Up: How to Configure Zip Code Validation

1. **Create the Action**

   ![**Basic Example of Set Up**](https://files.readme.io/033361df8892a8e03ff06ffb7bc6b5a1df0577a4d37d884edf5e6a5b66d44dec-Screenshot_2025-05-09_at_9.27.06_AM.png)

   **Basic Example of Set Up**

- **Name**: validate\_zip\_code
- **Description**: Call this function to validate a user-provided 5-digit zip code and return their affiliated U.S. state and county.
- **Endpoint:** `https://rv-apps.io/ai-agents?b=<your-brand-slug>&fn_name=validate_postal_code`

2. **Define AI Variables**

   ![**Basic Example of Variable**](https://files.readme.io/1f00dc742bdbb8bc5a56681e317fc9d33a799cf5ba0bc525f029ece81971c3df-Screenshot_2025-05-09_at_9.26.35_AM.png)

   **Basic Example of Variable**

   **Just one!**

   | Variable | Description |
   | --- | --- |
   | **input\_text** | The five digit zip code provided by the contact. |
3. **Speak During Execution**: *"One moment while I check the zip code."*

   ![**Example Speak Configuration**](https://files.readme.io/fd82b381e084af227b7407e4ce16c95374c7d5fe7303f13eae1b20d1168fcb2f-Screenshot_2025-05-07_at_2.17.59_PM.png)

   **Example Speak Configuration**

---

### Practical Example

Let’s say a user says:

*“My zip code is 33162.”*

**This value gets passed into the function as input\_text.**

33162 is a valid U.S. zip code, so the function returns:

JSON

```
{
    "is_valid": true,
    "input_text": "33162",
    "normalized_input": "33162",
    "zip_code": "33162",
    "counties": [
        {
            "state": "FL",
            "county_name": "Miami-Dade County"
        }
    ],
    "county_names": [
        "Miami-Dade County"
    ],
    "matches_multiple_counties": false
}
```

> ## 👍
>
> Your AI can now confidently route to a licensed Florida advisor or check regional eligibility—without guessing or hallucinating!

---

## Understanding the Response

When your AI agent calls the validate\_zip\_code function, it receives a structured JSON response—either a valid (success) or invalid (fail) result.

This helps the agent decide how to respond and route the call accurately. Below are both formats explained side by side.

---

### ✅ Success Response

This response confirms that the zip code is valid and includes all relevant location data: state, counties, and whether the zip overlaps multiple counties.

| Field | Type | Description |
| --- | --- | --- |
| **is\_valid** | boolean | Always **true** when the zip code is valid |
| **input\_text** | string | The original input the user said or typed |
| **normalized\_input** | string | The cleaned-up version used for validation (e.g., stripped of words) |
| **zip\_code** | string | The 5-digit zip code used for lookup |
| **counties** | array | List of county objects with state and county\_name for each match |
| **county\_names** | array | A simplified list of just county names for easy reference or routing |
| **matches\_multiple\_counties** | boolean | **true if zip code covers more than one county** (can be used in fallback routing decisions), else false |

> ## 📘
>
> Use is\_valid to decide what the AI should do next
>
> Example: retry, escalate, or continue. If necessary, prompt the AI not to mention the validation result to the caller directly.

> ## 💡
>
> If matches\_multiple\_counties is true
>
> Your AI may want to confirm the county with the user.

---

### ❌ Failure Response

This response means the zip code is invalid—either malformed, incomplete, or not a recognized U.S. postal code. Use this result to retry, re-ask, or exit the flow.

  

| Field | Type | Description |
| --- | --- | --- |
| **is\_valid** | boolean | Always **false** for failed lookups |
| **input\_text** | string | The original input the user said or typed |
| **normalized\_input** | string | The cleaned-up version used for validation (e.g., stripped of words) |
| **matches\_multiple\_counties** | boolean | Always false in failure cases |
| **error** | string | Human-readable explanation of what went wrong (e.g., formatting issue, truly invalid) |

> ## ❗️
>
> Don’t read the error message to the caller verbatim—that's best for logs or debugging.
>
> **Instead, have the AI respond with something more natural like:**  
> *“Hmm, I couldn’t quite catch that. Could you say your zip code for me again?”*

---

## Example Prompt

You can use this prompt as a general template for when your agent needs to collect and validate a five-digit U.S. zip code. **Be sure to edit the specific details in the flows, task steps and rules to match your own use-case and next steps.**

```
## Zip Code Validation Rules
	1.	Do not call the validation function before explicitly asking the user for a zip code.
	2.	Always let the function determine if the zip has five digits—never count digits manually.
	3.	Always call the function with the user’s input if they say anything resembling a zip code.
	4.	Always proceed to the next step as soon as is_valid = true.
	5.	If invalid, ask again politely. Stay in this loop until a valid zip is received or the user refuses.
	6.	If they refuse, explain why it’s required, and offer a final chance before ending the call.
  
  
## Goal
Collect a five-digit U.S. zip code, validate it, and then proceed to the next step.

Task Steps
	1.	Ask: "May I have your five-digit zip code?"
	2.	Call function validate_zip_code with the user’s response.
	3.	Evaluate response:
  	- If is_valid = true, proceed to confirm their phone number.
    - If is_valid = false, re-prompt politely:
"Hmm, I didn't quite catch that. Can you please repeat your zip code?"

- If they refuse to provide one, say:
"We’d need your zip code to move forward. Would you like to provide it?"
	•	If still no, proceed to the not qualified steps.
  

### ✅ Flow: Valid Zip Code Provided
Contact: "Hi, I’m just looking at plan options.”
Agent: "Absolutely. To make sure we check plans in your area, may I have your five-digit zip code?"
Contact: "90210."
→ immediately call function validate_zip_code
result: is_valid = true
Agent: "Great, thanks!"
→ proceed to next step

### ❌ Flow: Invalid Zip → Retry → Still Invalid → Ends Flow
Contact: "Yeah I’d like to look at plans."
Agent: "Of course. May I have your five-digit zip code?"
Contact: "Nine nine nine nine nine."
→ call function validate_zip_code
result: is_valid = false
Agent: "Hmm, it doesn't look like that one worked. Could you repeat the zip code for me?"
Contact: "Sure. It’s twelve thirty five."
→ call function validate_zip_code again
result: is_valid = false
Agent: “"Zip codes should be five digits long. We need a valid zip code to check eligibility. Would you like to try again?"
Contact: "No, I don’t want to."
→ proceed to the end call steps
```

> ## 📘
>
> Context, context, and more context!
>
> Always give the AI Agent a specific response and handling instructions to questions and objections like:
>
> - ***Why do you need my zip code?***
> - ***I don't want to provide my zip code.***
> - ***Why can't you just use my state?***

---

## Test Your Setup

Don’t skip this part—test thoroughly to make sure validation logic behaves correctly before deploying.

1. **Place a Test Call**
   1. Say a valid zip (e.g., “90210”) → expect is\_valid = true
   2. Say an invalid one (e.g., “three three one six”) → expect is\_valid = false
2. **Confirm Flow Behavior**
   1. Does the agent confidently move forward on valid zips?
   2. Does the agent re-ask or exit gracefully on invalid ones?
3. **Check Transcripts After Going Live**
   1. Visit the [Transcripts Page](https://app.regal.io/transcripts)
   2. Look for the part where the agent asked for the zip code
   3. Verify the correct result based on how the AI responded

> ## 🧠
>
> Pro Tip: Use test zip codes that trigger edge cases, like repeated numbers (10001), multiple counties (38583) or invalid formats (55555, “twelve”) to make sure the agent handles all situations cleanly based on your logic.

---

## Troubleshooting & FAQ

How do I know if it’s working?

Check the [Transcripts page](https://app.regal.io/transcripts) to confirm that the agent behaved correctly after zip entry.

The AI isn’t catching bad zip codes—what now?

Review the transcript to check if `input_text` was passed correctly. Also confirm the URL endpoint is correct, and the brand brand name and fn\_name are spelled correctly.

Can the AI validate a zip code by itself?

Some times. But LLMs are not reliable for logic-based checks like postal codes. Use this function for trustworthy validation.

How can I route based on counties?

You can use a custom function to update the profile with the user's county! Then use that country in your routing rules.

Does it support PO Boxes and military zip codes?

Yes—as long as they are actual U.S. zip codes, these will return `is_valid: true` if correct.

Can I validate non-U.S. zip codes?

No, this function only supports 5-digit U.S. zip codes at this time.

Can this work in chat/SMS too?

Absolutely. Typed input will be parsed the same as voice input. Works in any channel.

I still need help!

Email [[email protected]](/cdn-cgi/l/email-protection#1c6f696c6c736e685c6e797b7d70327d75) with your call transcript and AI Agent link. We’ll help troubleshoot.

Updated 10 months ago

---
