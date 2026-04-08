# 🔀 Branching Action

## Overview

This action helps you determine a path based on user input. You can branch by number, string/category, or date. Category branching also supports fuzzy (partial) matches. This is useful in cases where the agent struggle to follow the right path based on a numeric or categorical comparison.

## Endpoint

```
https://branching-function-1739.twil.io/branching
```

## Request Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | string | Yes | `"numeric"`, `"category"`, or `"date"` |
| `inputValue` | string/number | Yes | The value to check. For `"numeric"`, a number; for `"date"`, MM-DD-YYYY string |
| `conditions` | array | Yes | List of branching rules (see examples) |
| `fuzzyMatch` | boolean | No | Set to `true` for fuzzy category matching. Default: `false` |

## Examples

### Numeric Branching Example

**Request:**

JSON

```
{
  "type": "numeric",
  "inputValue": "7",
  "conditions": [
    { "operator": "greater_than", "threshold": 10, "path": "high" },
    { "operator": "between", "threshold": [5, 10], "path": "medium" },
    { "operator": "less_than", "threshold": 5, "path": "low" }
  ]
}
```

**Response:**

JSON

```
{ "path": "medium" }
```

### Category Branching Example (Exact Match)

**Request:**

JSON

```
{
  "type": "category",
  "inputValue": "VIP",
  "conditions": [
    { "categories": ["VIP", "premium"], "path": "priority_support" },
    { "categories": ["basic"], "path": "standard_support" }
  ]
}
```

**Response:**

JSON

```
{ "path": "priority_support" }
```

### Category Branching Example (Fuzzy Match)

**Request:**

JSON

```
{
  "type": "category",
  "inputValue": "premium user",
  "fuzzyMatch": true,
  "conditions": [
    { "categories": ["VIP", "premium"], "path": "priority_support" },
    { "categories": ["basic"], "path": "standard_support" }
  ]
}
```

**Response:**

JSON

```
{ "path": "priority_support" }
```

### Date Branching Example

**Request:**

JSON

```
{
  "type": "date",
  "inputValue": "07-01-2022",
  "conditions": [
    { "operator": "before", "threshold": "01-01-2023", "path": "old_policy" },
    { "operator": "after", "threshold": "12-31-2023", "path": "future_policy" },
    { "operator": "between", "threshold": ["01-01-2023", "12-31-2023"], "path": "current_policy" }
  ]
}
```

**Response (for `"07-01-2022"`):**

JSON

```
{ "path": "old_policy" }
```

## Behavior Details

- The function evaluates each condition in the order they are listed
- For `numeric` branching, supported operators are:
  - `greater_than`
  - `less_than`
  - `equal_to`
  - `not_equal_to`
  - `between` (inclusive, pass as array `[min, max]`)
- For `category` branching, checks if the input matches any in the `categories` array
  - If `fuzzyMatch` is true, it checks if the input *contains* the category (case-insensitive)
- Returns the `path` of the **first** matching condition
- If nothing matches, returns:

  JSON

  ```
  { "path": "default" }
  ```

## Notes

- Replace `{{variables.value}}` with your actual variable when implementing
- Date format must be MM-DD-YYYY
- Fuzzy matching is case-insensitive and checks for substring matches

  

## Prompt Example

![](https://files.readme.io/baf6e341316028dbf019731dee04a336c6164c71c88ff3957a1d804308e40833-image.png)
  

Prompt

```
## ROLE
You are an AI voice agent that determines if a caller qualifies for medicare

## STRUCTURE
- Ask the caller "How old are you?"
- call function branching and jump to the appropriate path based on its return value

### Over 65 Flow
Respond with: "It looks like you qualify for medicare!"

### Under 65 flow
Ask: "Unfortunately, you don't qualify for medicare at this time."
```

Updated 9 months ago

---
