# Test Logic (Web chat)

Iteratively test your AI agent while building using the "Test Logic" web chat experience in the Regal builder.

Web chat is useful for testing your agent while building, because it lets you test your agent before hooking up a phone number and routing, and specifically debug function calling (i.e.agent actions). The feature lets you easily rewind to earlier parts of a conversation and take it in a new direction to iteratively test different potential conversational paths. However, it does not support testing all functionality, and final E2E testing should be done through actual SMS or phone calls.

![](https://files.readme.io/dd537cc21571dbc2f6feb40f2cff0d24d1d93271db81940a31f704d5adf6b4e9-window.png)

## Test Dynamic Variables

You can add test values for your dynamic variables to see how the agent would use them in the course of the conversation. Any dynamic variables you refer to in the Agent Prompt are automatically added to this modal for you to add test values.

![](https://files.readme.io/d03054656edf5a8bceb3db66af02a9b0a7a3a71f5c6e34867f81b259117865d3-Test.png)

## Action Invocations & Results

In the Test Logic UI you can see when an action is invoked, what payload was sent, and what result was returned to the AI agent so you can see what the agent can make use of in the conversation. This is useful for constructing and debugging custom actions.

![](https://files.readme.io/bb496698f6fdf8eae58eed27dd02d1e9aeb5beef258de3634d1de83f58fe88dc-sms.png)

See Action Result details:

![](https://files.readme.io/c63e4d4e77bb015288ebb36d959a36b6937b39012cac20e942691b87b68e77cd-sms_2.png)

## Custom AI Analysis & Disposition

When a test conversation "ended", you can see the data extractions and disposition outcome for the conversation. Click the summarize icon in Test Logic to initiate the call for **both** actions together. It may take a few seconds for the request to complete.

![](https://files.readme.io/1f7544702db138eba56f8d6dde3d00828e9d267889dd4febc2cac8dcaa9440da-image.png)

See Disposition results:

- If qualified, system dispos will be chosen first. E.g. "AI Callback Scheduled" is used when a scheduled\_callback function is called during the conversation. And "AI Transferred" is used when any of the Regal transfer function types are called.
- If no system disposition chose, AI will select best fit custom disposition, based on description given in Settings. AI Reason will be generated for why this particular custom disposition was chosen.

![](https://files.readme.io/e36b213741720318c7d242feda69dccc6b0fba5d4562cf5434338dbf00d8b1fa-image.png)
![](https://files.readme.io/70ef4729870d6dc22129a7e64762825ff329941e3a1d20373a18c3349b0e65ea-image.png)

See Custom AI results:

![](https://files.readme.io/9975d3d6c6b4a02a2cde18d69e6c01fd32db5beb3d59b1b334bb4f2604fae1d4-image.png)

Don't like what you see? Iterate live to see how the edits impact outcome:

- Remove the disposition and custom AI analysis outputs using the delete icon (BOTH will be deleted as a pair.) Then edit list of dispositions/descriptions (Settings tab), or custom AI analysis (Conversation Intelligence tab). Re-trigger requests by using the summarize button again to see new outcome.
- Alternatively, rewind conversation by deleting a response that you want to change, and start over from there.

## ✅ What you **can** test with "Test Logic" feature

- Conversational logic e.g., how it follows your task under different scenarios or objection/question handling or RAG responses
- Agent actions
- Personalization using test values for dynamic variables
- Custom AI analysis
- Dispositions

## ❌ What you **cannot** test with "Test Logic" feature

- Unsubscribe
- Delivery
- E2E Latency over SMS or phone calls
- Transfers
- Routing

  
  

## ▶️ VIDEO TUTORIAL

Updated 5 months ago

---
