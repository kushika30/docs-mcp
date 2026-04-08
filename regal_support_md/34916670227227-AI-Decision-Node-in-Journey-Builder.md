---
id: 34916670227227
title: "AI Decision Node in Journey Builder"
html_url: "https://support.regal.ai/hc/en-us/articles/34916670227227-AI-Decision-Node-in-Journey-Builder"
updated_at: "2025-03-25T09:13:40Z"
---

# AI Decision Node in Journey Builder

Journey Builder previously has been rule-based, deterministic decision-making—meaning it follows predefined logic like: IF SMS includes “NO” THEN do nothing.

**Starting now our Journey Builder is AI-Powered!**

Now, with AI Decision Node, Journey Builder is evolving into a context-aware, language-based decision-making tool. This means:

- It understands sentiment, intent, and language.
- It makes smarter, more dynamic decisions.
- It enables better personalization with less manual effort.

# What Is AI Decision Node?

An AI-powered decision node dynamically routes contacts based on prompt. User can configure the potential paths a contact can be routed, and the instructions on how to make such decision.

![User-uploaded Image](https://slabstatic.com/prod/assets/h2b7yidn/post/cyzjlaxa/preimages/k6j7_BiJlNop7hleWEVQwcEP.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0MTg5NjU0OSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2N5empsYXhhLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJjeXpqbGF4YSIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0MzA5ODk0OSwiaWF0IjoxNzQxODg5MzQ5LCJqdGkiOiIzMG02dThpZ29wMDZuNTBicmxhb2RtYzMiLCJuYmYiOjE3NDE4ODkzNDl9.A9AQQ-WUHSUBuPaaBVE9t1xowGAJoN5usHxRoKO2qRrguxl69cAkzlByGeOjOH59uDtHkvAOiCz91IAKI_H9a9zsUSFcNPlPOFWd3N6snMosiv46x3Ed_SHPXehZf23WN4GAdY8hXeO_Lpbx9QE4AiIDQenfzqMZ_c4Q-dpyEC3t2EjooFjPxUQSktx-7KBQ2Nvs20cJhn2kM3_V9TRdgjCcfyrjdV5bmCzPRWqYgL92mX00lufJ4u3ohM2xyZOFc4bLA1YOVAWc_y2tWDrf-bNpiZuRWzSfoegkmH1p3E6T5hiDC2DcfZTOppCc9wWbjxv731sCu3okYYuujzDuDQ)

![User-uploaded Image](https://slabstatic.com/prod/assets/h2b7yidn/post/cyzjlaxa/preimages/txWizJfYXUmbDPEdd43-K2ns.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0MTg5NjU0OSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2N5empsYXhhLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJjeXpqbGF4YSIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0MzA5ODk0OSwiaWF0IjoxNzQxODg5MzQ5LCJqdGkiOiIzMG02dThpZ29wMDZuNTBicmxhb2RtYzMiLCJuYmYiOjE3NDE4ODkzNDl9.A9AQQ-WUHSUBuPaaBVE9t1xowGAJoN5usHxRoKO2qRrguxl69cAkzlByGeOjOH59uDtHkvAOiCz91IAKI_H9a9zsUSFcNPlPOFWd3N6snMosiv46x3Ed_SHPXehZf23WN4GAdY8hXeO_Lpbx9QE4AiIDQenfzqMZ_c4Q-dpyEC3t2EjooFjPxUQSktx-7KBQ2Nvs20cJhn2kM3_V9TRdgjCcfyrjdV5bmCzPRWqYgL92mX00lufJ4u3ohM2xyZOFc4bLA1YOVAWc_y2tWDrf-bNpiZuRWzSfoegkmH1p3E6T5hiDC2DcfZTOppCc9wWbjxv731sCu3okYYuujzDuDQ)

The node is composed of two sections: prompt and outputs. **Prompt** section is where you define the what AI should do and how to do it.

- Select AI Decision Type to start
- Add custom name for the node in second field

![User-uploaded Image](https://slabstatic.com/prod/assets/h2b7yidn/post/cyzjlaxa/preimages/634EtHXyaYVBHhdjf8eSiOVs.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0MTg5NjU0OSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2N5empsYXhhLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJjeXpqbGF4YSIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0MzA5ODk0OSwiaWF0IjoxNzQxODg5MzQ5LCJqdGkiOiIzMG02dThpZ29wMDZuNTBicmxhb2RtYzMiLCJuYmYiOjE3NDE4ODkzNDl9.A9AQQ-WUHSUBuPaaBVE9t1xowGAJoN5usHxRoKO2qRrguxl69cAkzlByGeOjOH59uDtHkvAOiCz91IAKI_H9a9zsUSFcNPlPOFWd3N6snMosiv46x3Ed_SHPXehZf23WN4GAdY8hXeO_Lpbx9QE4AiIDQenfzqMZ_c4Q-dpyEC3t2EjooFjPxUQSktx-7KBQ2Nvs20cJhn2kM3_V9TRdgjCcfyrjdV5bmCzPRWqYgL92mX00lufJ4u3ohM2xyZOFc4bLA1YOVAWc_y2tWDrf-bNpiZuRWzSfoegkmH1p3E6T5hiDC2DcfZTOppCc9wWbjxv731sCu3okYYuujzDuDQ)

**Output** details is where you define the output options AI can choose from for the user to exit.

![User-uploaded Image](https://slabstatic.com/prod/assets/h2b7yidn/post/cyzjlaxa/preimages/6zAPLzwGMC6FY0BEdvAxCLwj.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0MTg5NjU0OSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2N5empsYXhhLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJjeXpqbGF4YSIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0MzA5ODk0OSwiaWF0IjoxNzQxODg5MzQ5LCJqdGkiOiIzMG02dThpZ29wMDZuNTBicmxhb2RtYzMiLCJuYmYiOjE3NDE4ODkzNDl9.A9AQQ-WUHSUBuPaaBVE9t1xowGAJoN5usHxRoKO2qRrguxl69cAkzlByGeOjOH59uDtHkvAOiCz91IAKI_H9a9zsUSFcNPlPOFWd3N6snMosiv46x3Ed_SHPXehZf23WN4GAdY8hXeO_Lpbx9QE4AiIDQenfzqMZ_c4Q-dpyEC3t2EjooFjPxUQSktx-7KBQ2Nvs20cJhn2kM3_V9TRdgjCcfyrjdV5bmCzPRWqYgL92mX00lufJ4u3ohM2xyZOFc4bLA1YOVAWc_y2tWDrf-bNpiZuRWzSfoegkmH1p3E6T5hiDC2DcfZTOppCc9wWbjxv731sCu3okYYuujzDuDQ)

## Use Cases

We have predefined some use cases in the product to help you get started! Select the type in dropdown for AI Decision Type to get started.

1. **Sentiment Analysis** - determine message or call transcript sentiment and send users down the selected sentiment path
2. **Intent Categorization**- determine message intent or call transcript topics and send users down the selected intent path
3. **Language Detection** - determine inbound message language and send users down the selected language path
4. **Yes/No** - based on given task steps, determine whether user satisfies the condition, and send users down the selected yes/no path
5. **Custom** - start from scratch and add custom AI decision tasks! Follow best practice below for optimal AI performance.

# Best Practices

Poorly constructed prompt and output details can lead to unwanted outcome.  Following below AI best practices can improve the accuracy of your AI decision result!

## Prompt Best Practices

Prompt section is where you define the what AI should do and how to do it- by including  background,  dynamic input, and task details for AI. **Keep in mind below best practice:**

- Provide background for the role of AI for each node
- **Define dynamic variables you want to leverage in the task upfront**, e.g. inbound sms content, or contact zipcode,
  - Specifically in format like this:  **field description: "{{field}}"**
  - Make sure to add quotes around the field name itself
- Give clear, concise, and non-conflicting instructions
  - Break down complex task into multiple steps where needed
  - Task steps are not always needed if the background gives sufficient instructions

See examples below for an intent classification prompt (output options are defined separately later)

---------------

### Background  
You are an intent classification AI. Your task is to analyze the content of a customer email and identify its primary intent.

#Input  
- Contact’s email content: "{{event.properties.content}}"

# Task Steps  
1. Analyze the email content and determine its main intent.  
2.Classify the email into one of the predefined categories.

---------------

A simple task prompt with no steps in UI:

![User-uploaded Image](https://slabstatic.com/prod/assets/h2b7yidn/post/cyzjlaxa/preimages/f_lGbFU9Nw-y01OL5Vbm_WY5.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0MTg5NjU0OSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2N5empsYXhhLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJjeXpqbGF4YSIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0MzA5ODk0OSwiaWF0IjoxNzQxODg5MzQ5LCJqdGkiOiIzMG02dThpZ29wMDZuNTBicmxhb2RtYzMiLCJuYmYiOjE3NDE4ODkzNDl9.A9AQQ-WUHSUBuPaaBVE9t1xowGAJoN5usHxRoKO2qRrguxl69cAkzlByGeOjOH59uDtHkvAOiCz91IAKI_H9a9zsUSFcNPlPOFWd3N6snMosiv46x3Ed_SHPXehZf23WN4GAdY8hXeO_Lpbx9QE4AiIDQenfzqMZ_c4Q-dpyEC3t2EjooFjPxUQSktx-7KBQ2Nvs20cJhn2kM3_V9TRdgjCcfyrjdV5bmCzPRWqYgL92mX00lufJ4u3ohM2xyZOFc4bLA1YOVAWc_y2tWDrf-bNpiZuRWzSfoegkmH1p3E6T5hiDC2DcfZTOppCc9wWbjxv731sCu3okYYuujzDuDQ)

## Testing is key for good prompting!

Test out your prompt by using the testing modal - click on the {x} icon at the bottom of the prompt input to initiate the modal. You can input sample customer responses or attribute values to see what outcome AI would generate based on those input.

![](https://slabstatic.com/prod/assets/h2b7yidn/post/cyzjlaxa/preimages/rzZ-gG_SgJkK0GE885QY4ewP.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0MTg5NjU0OSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2N5empsYXhhLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJjeXpqbGF4YSIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0MzA5ODk0OSwiaWF0IjoxNzQxODg5MzQ5LCJqdGkiOiIzMG02dThpZ29wMDZuNTBicmxhb2RtYzMiLCJuYmYiOjE3NDE4ODkzNDl9.A9AQQ-WUHSUBuPaaBVE9t1xowGAJoN5usHxRoKO2qRrguxl69cAkzlByGeOjOH59uDtHkvAOiCz91IAKI_H9a9zsUSFcNPlPOFWd3N6snMosiv46x3Ed_SHPXehZf23WN4GAdY8hXeO_Lpbx9QE4AiIDQenfzqMZ_c4Q-dpyEC3t2EjooFjPxUQSktx-7KBQ2Nvs20cJhn2kM3_V9TRdgjCcfyrjdV5bmCzPRWqYgL92mX00lufJ4u3ohM2xyZOFc4bLA1YOVAWc_y2tWDrf-bNpiZuRWzSfoegkmH1p3E6T5hiDC2DcfZTOppCc9wWbjxv731sCu3okYYuujzDuDQ)

Some considerations:

- A straightforward scenario tend to require less instructions and clarification. The complexity can come from both to the task itself as well as the customer response.
- If the answer doesn't match your expectation, examine dynamic input values and instructions given to AI. Add necessary prompt to guide AI towards making the correct answer. E.g. For an intent classification with multiple defined categories and an "other" category, if the customer message contains multiple categories, AI may sometimes choose the "other" option. In order to prioritize any of the defined category, make sure to mention it explicitly in the prompt.

![User-uploaded Image](https://slabstatic.com/prod/assets/h2b7yidn/post/cyzjlaxa/preimages/IQ0aDyZTYGTbbSJqXBLvvmzf.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0MTg5NjU0OSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2N5empsYXhhLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJjeXpqbGF4YSIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0MzA5ODk0OSwiaWF0IjoxNzQxODg5MzQ5LCJqdGkiOiIzMG02dThpZ29wMDZuNTBicmxhb2RtYzMiLCJuYmYiOjE3NDE4ODkzNDl9.A9AQQ-WUHSUBuPaaBVE9t1xowGAJoN5usHxRoKO2qRrguxl69cAkzlByGeOjOH59uDtHkvAOiCz91IAKI_H9a9zsUSFcNPlPOFWd3N6snMosiv46x3Ed_SHPXehZf23WN4GAdY8hXeO_Lpbx9QE4AiIDQenfzqMZ_c4Q-dpyEC3t2EjooFjPxUQSktx-7KBQ2Nvs20cJhn2kM3_V9TRdgjCcfyrjdV5bmCzPRWqYgL92mX00lufJ4u3ohM2xyZOFc4bLA1YOVAWc_y2tWDrf-bNpiZuRWzSfoegkmH1p3E6T5hiDC2DcfZTOppCc9wWbjxv731sCu3okYYuujzDuDQ)

## Output Best Practice

Output Details section is where you define the output options for AI to choose from. **AI will only be able to choose one of the options provided by you.** **Keep in mind below best practice:**

1. Give **mutually exclusive, collectively exhaustive** output options.
   1. E.g. for use cases such as "language detection", if you do not give an "other" option, AI can only choose one of the languages provided which may result in undesired outcome for an unlisted language.
2. For each option, add descriptions and provide examples to enhance the prompt. If there is unique context or terminology for your company, make sure to add that clarification.
3. Use concise and non-conflicting language where possible.
4. Max 10 options are allowed for each node.

**Note:** If you notice your necessary options are in different *hierarchies*, try breaking them into two different nodes, starting with the primary then followed by a secondary level. E.g. "Billing Question" and "Account Management Question" can be considered primary category with the first AI decision node, and "Add a payment method" and "Reset password" can be the secondary category with another node

![User-uploaded Image](https://slabstatic.com/prod/assets/h2b7yidn/post/cyzjlaxa/preimages/5wsfaBZdTtlaU6LLoI-J06eE.png?jwt=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicG9zdCIsImV4cCI6MTc0MTg5NjU0OSwicGF0aCI6Ii9wcm9kL2Fzc2V0cy9oMmI3eWlkbi9wb3N0L2N5empsYXhhLyIsImlzcyI6InJlZ2Fsdm9pY2Uuc2xhYi5jb20iLCJlaWQiOiJjeXpqbGF4YSIsImVuZm9yY2UiOiJpZ25vcmUiLCJhdWQiOiJzbGFic3RhdGljLmNvbSIsImV4cCI6MTc0MzA5ODk0OSwiaWF0IjoxNzQxODg5MzQ5LCJqdGkiOiIzMG02dThpZ29wMDZuNTBicmxhb2RtYzMiLCJuYmYiOjE3NDE4ODkzNDl9.A9AQQ-WUHSUBuPaaBVE9t1xowGAJoN5usHxRoKO2qRrguxl69cAkzlByGeOjOH59uDtHkvAOiCz91IAKI_H9a9zsUSFcNPlPOFWd3N6snMosiv46x3Ed_SHPXehZf23WN4GAdY8hXeO_Lpbx9QE4AiIDQenfzqMZ_c4Q-dpyEC3t2EjooFjPxUQSktx-7KBQ2Nvs20cJhn2kM3_V9TRdgjCcfyrjdV5bmCzPRWqYgL92mX00lufJ4u3ohM2xyZOFc4bLA1YOVAWc_y2tWDrf-bNpiZuRWzSfoegkmH1p3E6T5hiDC2DcfZTOppCc9wWbjxv731sCu3okYYuujzDuDQ)

# Looker Dashboard - Coming Soon!

Check your past executions to understand which option AI chose, AI reasoning, and the prompt that was used at the time.