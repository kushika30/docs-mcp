# Dynamic Variables

Dynamic Variables help your AI Agent personalize conversations using data from a contact's profile, task attributes or incoming SIP headers, like their name, lead source, appointment time, etc. Incorporating variables into your prompt ensures your Agent speaks more naturally, accurately and in a personalized way, just like your best reps.

## Available Dynamic Variables

When configuring your agent, you have access to all contact attributes from the contact profile. This includes:

- Standard fields like contact.firstName or contact.contactPhone
- Custom properties you've added such as contact.address.zipCode, contact.customProperties.current\_promo, or contact.customProperties.preferred\_language
- Regal properties like contact.rvProperties.last\_handling\_agent or contact.rvProperties.area\_code.

You also have access to all task attributes, including any SIP headers (for those you transfer calls to Regal via SIP).

## Reference Variables in Your Prompt

1. To insert a variable type {{ in the prompt editor or click the variables button
2. A dropdown list of available **Contact attributes** from the contact profile will appear
3. Select the one you want to use (e.g., {{contact.firstName}}). Regal will then insert the real value from the contact profile

Example Prompt:

> > “Hi {{contact.firstName}}, I’m following up on your interest in  
> > our {{contact.customProperties.service\_type}} offer.”  
> > If contact.firstName = Jordan and contact.customProperties.service\_type = home security,  
> > the Agent will say: “Hi Jordan, I’m following up on your interest in our home security offer.”

> ## 🚧
>
> For task attributes you have to type {{task.xyz}} - there is no dropdown list that will appear like there is for contact attributes, but you can see what task attributes are available to you by doing a call and viewing the task slide out)

**Where to find Task Attributes:**

![](https://files.readme.io/bbf7a2f66add27c9411594898d4933499369ccf076f86554997627d6b76f7aba-task_attributes.png)

Example Prompt:

> Thanks for calling into {{task.originalTaskQueueName}}. How can I help you today?

## Use Dynamic Variables in Conditional Logic

You can reference dynamic variables to instruct the agent to behave differently depending on their values:

1. Provide Variable Descriptions - In the Contact Attributes Modal, make sure to provide a short, clear description for each variable. This helps the AI Agent interpret what each value represents in context.
2. Reference that Variable name in your prompt

Example:

![](https://files.readme.io/4db9f1bbf61efcad6e0803fb960cb6af8c56293cafa026d06cd7a20bdce63314-permission.png)

Example Prompt:

> **Qualification Questions**  
> Before asking any questions, decide if you already have the customer's permission to be called back.  
> This is the customer's permission setting: {{contact.customProperties.TCPAoptIn}}
>
> - If Permission for callbacks = True, that means they already gave permission so you should skip question 1a and start with 1b. (don't mention that you already have their permission for callbacks)
> - If Permission for callbacks = False, that means they have not given permission, so you should get permission by starting with question 1a.
>
> 1a. "Do we have your permission to give you a call back in case we get disconnected?"  
> 1b. What type of fence are you interested in?  
> (e.g., wood, vinyl, chain link, aluminum, wrought iron)

> ## 👍
>
> TIP - Handling Missing or Optional Values
>
> If a variable might be empty, be sure to instruct the Agent in the prompt on how to behave when the value is missing. Always test your Agent with both complete and incomplete variables to verify it handles missing data gracefully.

## Controlling What the Agent Can Reveal

By default, your AI Agent only has access to the dynamic variables you reference in the prompt - but it won't know when/whether it's allowed to share that information unless you tell it.

If you want to allow or prevent the Agent from revealing certain data (like name, address, promo code, etc.) in response to a customer question, you must define that in your prompt.

Examples:

> “If the customer asks ‘What address do you have on file for me?’, do not share the address.”  
> “If the customer asks about the value of their Permission for callbacks setting, you may share it if it has a value.”

Be specific about what’s permitted to prevent your Agent from disclosing something it shouldn't—or withholding something it could share.

## Reference Current Date and Time

You're able to reference the current date and time using `{{current_time}}`. If you'd like to use your local date and time - according to the timezone you configured on the General Settings page - use `{{current_time_local}}`.

## Summary

Using variables in your AI Agent prompt is the key to scaling personalized conversations. Combine clear descriptions, fallback logic, and instructions on data usage to make your Agent smarter, safer, and more human.

## ▶️ VIDEO TUTORIAL

Updated 3 months ago

---
