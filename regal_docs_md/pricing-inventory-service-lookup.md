# 🔍 Pricing / Inventory / Service Lookup

## Overview

Create a custom function that looks up pricing, inventory, or service details or coverage in a spreadsheet

## Prerequisites

**Somewhere to host your function** for the AI Agent to call (code snippets are below) or Regal can host it for you

- Requires axios version ^1.4.0 as a dependency.

## Use Cases

Look up actions are useful for many use cases:

| Use Case | What It Solves |
| --- | --- |
| **Pricing** | Ensures AI Agents can accurately quote pricing. |
| **Service / Geographic Coverage** | Checks if a specific service is available in a given state. |
| **Inventory** | Looks up if inventory of a particular item is available and/or can bring back specs about the item. |

## Host Function

### Add Dependency

  

### Add Assets to Your Function

1. Upload a CSV of your items with whatever columns makes sense. For example, here is a sample pricing sheet for a Storage company:

```
Product,Price
8ft container,$169 per month
12ft container,$199 per month
16ft container,$219 per month
20ft container,$249 per month
Short distance move, starting at $800
Long distance move, starting at $2500
```

### Add Code to Your Function

Here is a code snippet for the above pricing function:

JSON

```
const fs = require('fs');
exports.handler = function(context, event, callback) {
  console.log("Received event:", event);
  
// Validate input parameter
  const productType = event.args.product_type;
  if (!productType) {
    const errorMsg = "Missing 'product_type' parameter.";
    console.error(errorMsg);
    return callback(null, { error: errorMsg });
  }
  try {
    const asset = Runtime.getAssets()['/product_pricing.csv'].open;
    if (!asset) {
      throw new Error("Asset file 'product_pricing.csv' not found.");
    }
    const csvData = asset();
    console.log("CSV file read successfully.");

    // CSV Parsing
    const lines = csvData.split('\n').filter(line => line.trim() !== "");
    if (lines.length === 0) {
      throw new Error("CSV file is empty or improperly formatted.");
    }
    const headers = lines[0].split(',').map(header => header.trim());
    const snakeHeaders = headers.map(header =>
      header.toLowerCase().replace(/ /g, '_')
    );
    let result = null;

    // Match Product Row
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(val => val.trim());

    // Compare the product name (first column) case-insensitively
      if (values[0] && values[0].toUpperCase() === productType.toUpperCase()) {
        result = {};
        snakeHeaders.forEach((key, index) => {
          result[key] = values[index];
        });
        break;
      }
    }

    // Return matched row or a message if no match is found
    if (result) {
      console.log("Found product pricing:", result);
      return callback(null, result);
    } else {
      const msg = "No pricing found";
      console.log(msg, "for product:", productType);
      return callback(null, { message: msg });
    }
  } catch (error) {
    console.error("Error processing CSV file:", error);
    return callback(error);
  }
};
```

## Create Custom Action in Regal AI Agent

In your AI Agent in the Regal builder, click New Action > Custom Action.

When creating a Custom Action, you’ll provide:

- **Name:** fetch\_pricing
- **Description:** When asks how much a particular service costs, check the price
- **Endpoint:** Add the endpoint to your function from above
- **AI Variables:** Define AI Variables for product:
  - **Name:** product\_type **Data type:** String **Description:** The product the user mentioned. Must be one of "8ft container", "12ft container", "16ft container", "20ft container", "Short distance move", or "Long distance move")
- **Payload**: no payload needed

## Update Agent Prompt

Prompt your agent for when it should invoke your custom action, for example:

> As soon as the customer states the product they are interested in,  
> immediately invoke fetch\_pricing to determine the price.
>
> - If function does return a price,  
>   Say: "Unfortunately I don't have pricing information for that product."
> - If function response is a price, let the contact know the price.

Updated 10 months ago

---
