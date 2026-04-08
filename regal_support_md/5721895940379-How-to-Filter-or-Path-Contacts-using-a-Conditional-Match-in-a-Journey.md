---
id: 5721895940379
title: "How to Filter or Path Contacts using a Conditional Match in a Journey"
html_url: "https://support.regal.ai/hc/en-us/articles/5721895940379-How-to-Filter-or-Path-Contacts-using-a-Conditional-Match-in-a-Journey"
updated_at: "2023-04-20T20:14:04Z"
---

# How to Filter or Path Contacts using a Conditional Match in a Journey

### A Conditional Match node lets you split customers down a different path depending on criteria you define.

For example, let's say you message customers asking if they prefer to engage over phone or by text. For customers who respond "phone" you can continue onto a**`Create Call Task`** node, while for customers who responded "text", you can continue onto a`Send SMS` node.

You can also use Conditional Match nodes to have customers "drop out" of a journey. For example, you could set up a journey that triggers when an item is added to cart, then delays 30 minutes, then checks using a Conditional Match whether customers have already "Completed Purchase" and if so, lets them drop out of the journey, and if not, sends them a text or call.

#### Dynamic Conditions

You can also use properties in conditional nodes to make your filters more dynamic. See [this guide](https://support.regal.ai/hc/en-us/articles/14157351216027).

#### Supported condition operators include:

- Exists / Does Not Exist
- Equals / Does Not Equal
- Is One Of\* - property matches any one of a list of options)
- Is Set - property exists and is a not null value
- Starts With\* / Ends With\*
- Contains\*
- Is Greater Than / Less Than
- Is Greater or Equal To
- Is Less Than or Equal To
- Is Before / After
- Is On or Before
- Is On or After

\*Available for strings and numbers only

#### Relative Date Filters

You can use ***now***to reference the current time in UTC, and add "date math expressions" to create a relative filter. Learn more [here](https://regalvoice.slab.com/posts/relative-dates-udcoeepu).

#### Supported data types include:

- Number - integers e.g., "loneliest\_number": 1 and decimals e.g., "pie": 3.141519
- String - letter, word or phrase e.g., "disposition": "voicemail"
- Date/time - date e.g., "birthday": "2019-02-28" or timestamp e.g., "birth\_time": "2019-02-28 04:30:00". See accepted [datetime formats here](https://regalvoice.slab.com/posts/property-data-types-name-limits-24yhvlg7#hsn7u-dates)
- List - an array of values e.g., "super\_pets": ["krypto", "merton", "ace", "pb", "chip"]
- Object - such as "address" or or a nested field within an object such "address.zip"

#### Attribute Selection

Attribute values have a (non-case sensitive) search function in conditional nodes. This is especially useful when you aren't sure of the case of value, or you only know the relative direction of the attribute name. You can enter the closest matching value, and select the correct one from the drop-down. `Note - Actual conditional matching in the journey WILL BE CASE SENSITIVE!`

> #### 📘 Matching on Last Event vs. All Events
>
> When referencing a property of an event in a Conditional Match, you can specify whether you want to only look at the last event to satisfy the condition or any even in the customer's history. For example, you can check whether the customer has ever had a call.completed event with a disposition of "Voicemail" or whether their last call.completed event has a disposition of "Voicemail".