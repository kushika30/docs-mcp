---
id: 35534441894555
title: "How Should I Incorporate a Pricing Sheet for My AI Agent to Use?"
html_url: "https://support.regal.ai/hc/en-us/articles/35534441894555-How-Should-I-Incorporate-a-Pricing-Sheet-for-My-AI-Agent-to-Use"
updated_at: "2025-05-29T15:10:59Z"
---

# How Should I Incorporate a Pricing Sheet for My AI Agent to Use?

If your AI Agent needs to reference pricing during the conversation (or similar lookup data), it’s important to get that information accurate and reliable – every time. While it might seem easy to paste a pricing table into the prompt or upload a PDF to your knowledge base, those approaches often don’t work well for structured, lookup-style data.

**Why Not Just Use the Prompt or Knowledge Base?**

- **Prompt Limitations**: Copying a table or json object or array into the prompt isn’t reliable. LLMs can struggle with reading and referencing tabular data consistently, especially if the pricing varies by product type, geography, or tier.
- **Knowledge Base Limitations**: While a Knowledge Base (RAG) is great for long-form content, it’s not built for precise data lookups like prices. It may retrieve the wrong row, average across items, or hallucinate if it’s not confident.

### **The Best Solution: Use a Custom Action**

The most reliable way to handle pricing is to build a custom action that calls a function that takes in inputs like product name and location, then returns the correct price for the agent to say.

In your function, you can:

- Upload your pricing sheet as a CSV
- Have your function that looks up pricing from that sheet based on inputs like:
  - Product type
  - Zip code, state, or other geo input
  - Customer tier or account type
- Call that function from your agent’s prompt using a custom action when pricing is needed
- Your Custom Action would send the necessary inputs to your function and receive the results
- Prompt your agent to reference the results of the custom action

#### **Example Pricing Lookup Function (the example below is a Javascript function)**

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

**Dependencies Required:**

- The **fs** module in Node.js is a built-in module that provides an API for interacting with the file system.

![](https://support.regal.ai/hc/article_attachments/35534447864475)

**CSV Uploaded (looks something like this):**

```
Product,Price  
8ft container,$169 per month  
12ft container,$199 per month  
16ft container,$219 per month  
20ft container,$249 per month  
Short distance move, starting at $800  
Long distance move, starting at $2500
```

**Example Custom Action in Regal:**

|  |  |
| --- | --- |
|  |  |

```
{  
  "type": "object",  
  "properties": {  
    "product_type": {  
      "type": "string",  
      "description": "{{variables.product_type}}",  
      "enum": [  
        "8ft container",  
        "12ft container",  
        "16ft container",  
        "20ft container",  
        "Short distance move",  
        "Long distance move"  
      ]  
    }  
  },  
  "required": [  
    "product_type"  
  ]  
}
```

**Example Prompt:**

```
As soon as the customer states the product they are interested in,   
immediately invoke fetch_pricing to determine the price.   
- If function does return a price,   
Say: "Unfortunately I don't have pricing information for that product."  
- If function response is a price, let the contact know the price.
```

### **Other Use Cases for Lookup Functions**

This approach isn’t just for pricing. It works for any structured data your agent needs to access, such as:

- Zip code → County/State lookup
- Product + Geo → Service availability
- Extension or phone number lookups
- Shipping times or rates based on location
- Inventory or SKU-level info

### **Building and Hosting Look Up Functions**

If you’re looking for a place to build and host your functions for AI agents, here are some suggestions.

**Technical users:**

1. Your cloud provider: AWS lambda, Azure Functions or Google Cloud Functions
2. Vercel

**Non-technical users:**

3. Replit
4. Twilio functions: easy, javascript-based, but have 10s timeouts

**Need help building or hosting a function like this?** Just reach out—a Regal AI Expert can walk you through it or build and host it for you.