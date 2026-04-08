# Custom Actions

Custom Actions allow your AI Agent to interact with both the Regal platform (e.g., profiles, journeys) and external systems by posting structured data to a defined endpoint in the middle of an AI Agent conversation and reacting to the response. They’re essential when your agent needs to do more than just talk -- like updating profiles, logging activity, validating inputs, or triggering business logic.

This doc will walk you through how to define and configure a Custom Action using the Regal AI Agent builder.

## When to Use a Custom Action

Create a Custom Action when your agent needs to:

- Update a contact profile in Regal
- Trigger an event
- Trigger actions handled by code hosted outside of Regal (e.g., scheduling endpoints, validating data, getting information from a pricing sheet or integrating with any custom APIs)

## Why Do I Need Custom Actions When LLMs/AI are All-Knowing?!

LLMs are great at conversations, but they are not code. The combination of LLMs + code are incredibly powerful. So any time you need your AI agent to execute some deterministic logic that needs to manipulate data, do math, or interact with a 3rd party tool, you should use a custom action.

For example, even something seemingly as simply as knowing that today is Tuesday, so if the customer asks to schedule on Sunday, they mean next Sunday, not last Sunday is something LLMs are not good at knowing because that requires (1) an awareness of the calendar and (2) reasoning/logic -- that's different than predicting the next word to say.

While there are some LLMs that are better for reasoning, those are not the same models that are great at conversations, and they are slower / more costly. Custom actions effectively let you insert code into your prompts at the right moments so you get the best of both LLMs and code.

> ## 📘
>
> Custom Actions That Require Engineering
>
> Some custom actions like just posting data to an endpoint (even Regal's /events endpoint) can be entirely configured in Regal and you don't need to build an external function/middleware (e.g., Send Summary Event to Transfer Agent). However, for some custom actions, you'll want to run some code outside of Regal, and return a result for your agent to then action on (e.g., Lookup County Name Based on Zip code). These may require your engineers to write code, or one of our Regal AI Experts is happy to build and host it for you, depending on the complexity of the ask.

## Define the Action

To get started, open your AI Agent in the Regal builder, click New Action > Custom Action.

When creating a Custom Action, you’ll provide:

- **Name:** Use a clear, descriptive label (e.g., validate\_zipcode, update\_profile).
- **Description:** Describe what the action does and when the agent should use it.
- **AI Variables:** Add any variables your agent needs to collect during the conversation so they can be referenced in the payload.
- **Headers (Option**al): Add any headers the endpoint requires, such as authentication keys or content-type.
- **Payload Schema:** Define the structure of the data the action will send to your endpoint using a simple JSON schema.
- **Speak During Execution (Optional):** Message the AI should say while running the action if the action takes more than 2 seconds to execute.
- **Speak After Execution (Default, but Optional):** Choose whether the AI should continue the conversation automatically based on the function’s output, or wait for additional user input before continuing. In most cases, you will want this to be on, otherwise the agent will not progress the conversation.

## Configure the Payload

Custom Actions allow you to fully customize the payload sent to your endpoint. You can include both Contact Attributes (from the contact's profile) and AI Variables (values your AI agent collects during the conversation).

### Contact Attributes

Any field in the contact profile can be included using handlebar notation for example:

`"field_value": "{{contact.address.zipcode}}"`

### AI Variables

These allow the agent to pass dynamic values collected naturally during the conversation—like names, dates, preferences, a summary or other contextual info the AI picks up and stores as it talks to the contact.

- Name: What you’ll reference in the payload, using handlebar notation like `{{variables.product_preference}}`
- Type: String, number, boolean, etc.
- Description: Helps the model understand what kind of value to pass e.g., "The product the contact expressed interest in".

Once you’ve defined your AI Variables and identified which Contact Attributes you need, you’ll assemble the payload that gets sent when the action runs. Each key in the JSON body should map to a field your endpoint expects, and the value should be either a contact attribute, AI variable, or hard coded value.

- AI Variables using: `{{variables.variable_name}}`
- Contact Attributes using: `{{contact.attribute_name}}`
- Hardcoded values by typing them directly (e.g., strings, numbers)

Make sure to add quotes around your string variables.

Example Payload:

```
{  
  "zip": "{{contact.address.zipcode}}",  
  "product_preference": "{{variables.product_preference}}"  
}
```

Use these fields to build rich, dynamic payloads that allow your AI Agent to send exactly what your system expects.

Here's an example of a custom action that sends an event to Regal:

![](https://files.readme.io/793235979c0913721769d4b78c4fbbec434908aa050ce9fa4ddce30038c381ae-one.png)
![](https://files.readme.io/da2eca98781375514f0a5646b77f4b9f00d87544d11c6898491470992f921aae-two.png)
![](https://files.readme.io/c15e6fda0eecf6e15ccd8eb0034e9aaa42d582d1644de89283f2a09a94011ec6-three.png)

## Handling Responses

For some of your custom actions, you will want your AI agent to act differently depending on the response. For example, if you build a validate\_phone action that hits a twilio endpoint that responds with either "valid" or "invalid" and if valid, it also responds with "landline" or "mobile", then you'll want to prompt your agent how to behave after those different responses.

Prompt Example:

> 1. Ask the contact what's a good phone number to reach them after hours?
>
> - Invoke validate\_phone with the contact's response.
>
> Wait for the result.
>
> - If result returns "invalid", ask the contact to repeat their number.
> - If result returns "valid" and "mobile", ask the contact for SMS consent.
> - If result returns "valid" and "landline", go to step 2.
>
> You should only invoke validate\_phone two times at most.  
> If after the second time the contact has still not provided a valid phone, just continue to step 2.

Depending on the type of responses you expect and the format of those, you will need to prompt differently. The above is just an example.

## Summary

Custom Actions are one of the most powerful ways to make your AI Agent interactive and outcome-driven. By combining Contact Attributes, AI Variables, and well-structured payloads, you can create seamless, automated workflows that feel personalized and intelligent—without relying on the model to guess or improvise.

Whether you're updating records, routing calls, or triggering next steps, Custom Actions help ensure your AI Agents stay accurate, actionable, and aligned with your systems.

## ▶️ VIDEO TUTORIAL

Updated 10 months ago

---
