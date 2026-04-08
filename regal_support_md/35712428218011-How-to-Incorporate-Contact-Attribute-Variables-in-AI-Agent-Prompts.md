---
id: 35712428218011
title: "How to Incorporate Contact Attribute Variables in AI Agent Prompts?"
html_url: "https://support.regal.ai/hc/en-us/articles/35712428218011-How-to-Incorporate-Contact-Attribute-Variables-in-AI-Agent-Prompts"
updated_at: "2025-05-29T15:10:59Z"
---

# How to Incorporate Contact Attribute Variables in AI Agent Prompts?

Contact Attribute Variables help your AI Agent personalize conversations using data from a contact's profile—like their name, lead source, or appointment time. Incorporating variables into your prompt ensures your Agent speaks more naturally, accurately and in a personalized way, just like your best reps.

Here’s how to use contact attributes effectively when writing your AI Agent prompt.

### Accessing Contact Attributes

When configuring your agent, you have access to all contact attributes from the contact profile. This includes:

- Standard fields like contact.firstName or contact.contactPhone
- Custom properties you've added such as contact.address.zipCode, contact.customProperties.current\_promo, or contact.customProperties.preferred\_language and
- Regal properties like contact.rvProperties.last\_handling\_agent or contact.rvProperties.area\_code.

### How to Reference Variables in Your Prompt

To insert a variable:

1. Type {{ in the prompt editor or click the variables button
2. A dropdown list of available attributes will appear
3. Select the one you want to use (e.g., {{contact.firstName}})
4. Regal will then insert the real value from the contact profile

**Tip:** You can use contact attribute variables for the agent to speak, or to use in conditional logic:

Example (Agent should speak the variable):

```
“Hi {{contact.firstName}}, I’m following up on your interest in   
our {{contact.customProperties.service_type}} offer.”
```

If contact.firstName = Jordan and contact.customProperties.service\_type = home security,   
the Agent will say: “Hi Jordan, I’m following up on your interest in our home security offer.”

![Screen Shot 2025-04-06 at 2.15.52 PM.png](https://support.regal.ai/hc/article_attachments/35712428214299)

Example (Variable is used to determine what the agent should do):

```
If contact.customProperties.service_preference is 'Insurance',   
say: "Great, let's continue"  
If contact.customProperties.service_preference is 'Servicing',   
say: "Ok, I'm going to transfer you to our services department now"
```

## **Provide Variable Descriptions**

In the Contact Attributes Modal, make sure to provide a short, clear description for each variable. This helps the AI Agent interpret what each value represents in context.

For example:

- contact.customProperties.current\_promo: “The current promotion the contact is eligible for”
- contact.customProperties.address.zipCode: “The zip code submitted by the user on our form”

Clear descriptions improve the Agent’s understanding and reduce confusion, especially for custom fields.

![Screen Shot 2025-04-06 at 2.32.21 PM.png](https://support.regal.ai/hc/article_attachments/35712444193307)

![Screen Shot 2025-04-06 at 2.32.05 PM.png](https://support.regal.ai/hc/article_attachments/35712428214811)

### Handling Missing or Optional Values

If a variable might be empty (e.g., {{contact.customProperties.upcomingAppointment}}), be sure to **instruct the Agent in the prompt** on how to behave when the value is missing. For example:

- “If {{contact.customProperties.upcomingAppointment}} is empty, don’t mention it.”
- Provide **test values** in the prompt or during testing to help the Agent understand how to behave in both cases (with and without data)

This helps avoid awkward phrasing like “your appointment at .”

**Tip:** Always test your Agent with both complete and incomplete variables to verify it handles missing data gracefully.

### Controlling What the Agent Can Reveal

By default, your AI Agent has access to all contact attributes you added to the prompt—but it won't know when/whether it's allowed to **share** that information unless you tell it.

If you want to **allow or prevent** the Agent from revealing certain data (like name, address, promo code, etc.) in response to a customer question, **you must define that in your prompt**.

Examples:

- “If the customer asks ‘What address do you have on file for me?’, do not share the address.”
- “If the customer asks about {{contact.customProperties.current\_promo}}, you may share it if it has a value.”

Be specific about what’s permitted to prevent your Agent from disclosing something it shouldn't—or withholding something it could share.

### Summary

Using variables in your AI Agent prompt is the key to scaling personalized conversations. Combine clear descriptions, fallback logic, and instructions on data usage to make your Agent smarter, safer, and more human.

**Need help testing your prompt or reviewing variable setup?** Reach out - a Regal AI Expert is ready to help!