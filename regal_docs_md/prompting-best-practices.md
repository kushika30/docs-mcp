# ✨ Prompting Best Practices

How your agents perform is very dependent on Prompt Engineering which is a new and evolving practice. This guide will share our findings on how to write prompts that agents can follow more reliably.

# General Guidelines

1. **Start with Regal's template agents** when building a new agent, as we already incorporate many of these best practices in those template, and then you can just follow the same pattern.
2. **Different LLM models require slightly different prompting.** 4o mini for example, is much more sensitive to the specific way a prompt is written, vs. 4.0 or even 4.1 mini can handle less explicit prompts or different ways of prompting for the same thing. So if you change your model, do not assume the prompt you have will perform exactly the same. You need to retest it with the different model.
3. **ChatGPT is your friend.** If you're on your third approach for how to prompt your agent to achieve something, and it's still not working, copy your prompt into ChatGPT, explain what you want to happen vs. what is happening, and ChatGPT will give you some helpful suggestions. Make sure to tell it what model you are using.
4. **Upgrade model.** Depending on the complexity of your agent, it may not be possible to prompt it to do what you want, without upgrading to a more sophisticated LLM model. See our [LLM guide](/docs/llm-models) to understand what each model is best at.
5. **We're here to help.** If you're still having trouble prompting your agent, reach out to [[email protected]](/cdn-cgi/l/email-protection#45363035352a37310537202224296b242c) and one of our AI experts can help you out.

# Common Prompting Techniques

## 🧠 Chain of Thought Prompting

**What it is:** You guide the model step-by-step by explicitly showing its reasoning process. This is helpful when logic, judgment, or decision-making is needed.

**Use case for AI agent:** Help the agent decide whether the customer is qualified before transferring the call.

**Example Prompt:**

Prompt

```
Goal: Determine if the caller qualifies for a life insurance quote.

Qualification Criteria:
- Age >= 18 and <= 80
- Not a smoker

If you need to disqualify the customer end_call and say "I'm sorry you don't qualify to move forward. Best of luck"

Instructions: Think step by step.

1. Greet the customer.
2. Ask how old they are.
3. Ask if they smoke.
4. If age >= 18 and <= 80 and they are not a smoker, confirm they're qualified and transfer.
```

## 🎯 Few Shot Prompting

**What it is:** You give a few examples to teach the model how to respond in a certain way. It's great when the model needs to learn a format or tone.

**Use case for AI agent:** Make sure the agent responds naturally and politely while collecting information.

**Example Prompt:**

Prompt

```
You are a friendly AI life insurance agent who is attentive and responsive to the information customer's are sharing. 

Example 1:  
Customer: I'm 35.  
Agent: Great, thanks for sharing your age!

Example 2:  
Customer: I just had a baby.  
Agent: That’s a wonderful reason to get life insurance—congrats!

Example 3:  
Customer: I do smoke.  
Agent: Thanks for being honest—this just helps us find the right plan for you.
```

**Use case for AI agent:**

**Example Prompt:** Make sure the agent summarizes without using lists.

Prompt

```
✅ SAY (CLEAR RESPONSE):
Contact: "Summarize this article."
Agent: "This article explains how mobile shopping trends are driving e-commerce sales, AI-driven recommendations are improving customer retention, and sustainability efforts are shaping brand loyalty."

❌ DON’T SAY (VAGUE RESPONSE):
Contact: "Summarize this article."
Agent: "This article discusses various topics and provides some insights on the subject."
```

## 🔀 Go To / Jump to State Prompting

**What it is:** This is basically the idea of "breaking off into sections". A common example is creating a section for "Callback Scheduling", and somewhere else in the prompt, you can direct the agent to these callback scheduling steps. This is a structured prompt engineering technique that introduces state-based flow control. This pattern attempts to combine the constraints provided by "conversation flow" and the flexibility provided by "single prompt".

**Use case for AI agent:**Allow the agent to dynamically navigate / jump around in a conversation rather than progressing linearly through task steps which can be especially useful for inbound calls where the customer's need is unknown at the start of the call

prompt

```
## ROLE
You are an AI voice agent handling customer inquiries.

## STRUCTURE
- If the user asks about pricing, GOTO [SALES_FLOW]
- If the user asks about order status, GOTO [SERVICE_FLOW]
- If the user is confused or unresponsive, GOTO [GENERAL_FLOW]

### SALES_FLOW
Respond with: "Our pricing starts at $99/month. Would you like more details?"
If the user asks for a free trial, GOTO [TRIAL_FLOW]

### SERVICE_FLOW
Ask: "Can you provide your order number for tracking?"

### GENERAL_FLOW
Say: "I'm here to help! What would you like to know?"
```

# Empty Values for Dynamic Variables

When you refer to a dynamic variable such as a contact attribute in your agent prompt, we automatically insert the value of that attribute into the prompt when delivering it to the LLM. For example, if you want to refer to the customer's first name on an outbound call, you can write `"Hi, is this {{contact.firstName}}?"` and we will replace that variable with the first name from the contact's profile, if there is a value. Such as "Hi, is this Rebecca?". However, if there is no value, it gets replaced with a default value of `"identify#user_properties#0##first_name"` so you'll need to add some prompting to handle situations where there is no value, so that the conversation still starts naturally.

**Best Practice:**

1. Make sure to define the dynamic variable first by clicking "Edit Variable Definitions" (in this example, we're using first name so we defined it as "Contact's first name" and then we refer to that in the prompt in the next step)

![](https://files.readme.io/c4a62096558809f3f07294c5aeb2bac6b8f936629075deddc0581c90fe628ca2-dynamic.png)
![](https://files.readme.io/de910750fd508383709a1708042f011a73f817c0aeff32ad52630505670130bf-define.png)

2. Add this to your prompt in your Task Steps (in this example we're using first name, but you can modify and apply this for any variable you need to refer, if there's a chance it won't have a value)

Prompt

```
1. First determine if you have a proper first name for the contact.
- If the value for Contact's First Name contains a # or 0, then that means you don't know the contact's first name, so you should say "Hi there", then go to step 2
- Else say: Say: "Hi, is this {{contact.firstName}}?"
→ wait for the user to confirm their identity, and then proceed to step 2.

2. "Hi, I'm Jane with Circle Bank calling about your mortgage inqury...."
```

# Reliable Action Invocation

One of the weakest points of LLMs still is reliable "tool calling" (that's what Regal calls agent actions). LLMs were built for language, but as they've been increasingly leveraged for AI Agents who don't just speak but take action, the LLM providers have been improving their models to better follow instructions for more predictable tool calling. OpenAI's GPT 4.1 models for example are already much better than the GPT 4.0 models, and they are continuing to invest in improving this.

To achieve consistent, reliable actions, you have to:

1. Provide good names and descriptions for your agent actions
2. Provide explicit instruction for when to invoke those actions in the prompt:
   1. Use the syntax "call function action\_name"
   2. Order the action before the phrase you want the agent to say (even though this is counter intuitive) e.g., call function end\_call and say "Goodbye", NOT Say "Goodbye" and call function end\_call

**Best Practice:**

Prompt

```
Say: "Would you like to speak to a licensed advisor?"
 - If yes, call function transfer_call and say "Ok, great transferring you now"
 - If no, call function end_call and say "No worries, have a great day"
 - If customer has a question or is unsure, address their question or hesitation
```

✅ call function end\_call and say "No worries, have a great day"

❌ invoke end\_call and say "No worries, have a great day"

❌ use end\_call and say "No worries, have a great day"

❌ say "No worries, have a great day" and call function end\_call

> ## 👍
>
> Tip: If the above isn't sufficient to reliably call your actions, upgrade to 4.1mini or 4.1. In our tests, OpenAI's GPT 4.1 models performed significantly better at action calling. They are both more sensitive/responsive to action descriptions and to prompt instructions for calling actions.

# Spelling / Pronouncing Names Correctly

> ## 🎤
>
> This applies to voice agents only

Getting a customer's name right when asking for it on a call is important. Names are not spelled or pronounced in a universal way and customer's often speak quickly or with an accent or a call may have poor audio quality - for all these reasons when your AI agent ask a customer their name, the transcription will not get it right 100% of the time. The good news is human agents are also not 100% at this so customers don't expect perfection, and there are some technique to get your AI agents to increase their accuracy of understanding a customer's name.

**Best Practice:**

**Option 1: Prompt the agent to ask the customer how to spell their name rather than just say it. And if needed, you can also confirm it.**

Prompt

```
1. Say: "Can I have your first and last name to get started?"
2. Say: "Can you spell your first name for me?"
3. Say: "And can you spell your last name for me?"
4. Confirm the first name and last name's spelling. (for example: "so your first name is spelled as J A N E and then your last name is H A N K S, is that right?")
- Let user confirm the spelling.
- If user makes a change, only repeat the part of the name that needs a change. Do not repeat the part that's confirmed.
```

**✅ Pros:** Higher accuracy

**❌ Cons:** Higher friction, slows down the conversation for every customer

**💡Best for:** When it's critical to get the spelling right such as because it's needed to authenticate or lookup a customer in your system before continuing.

**Option 2: Account for name spelling as an objection**

For this option we don't force the agent to ask for spelling of every customer's name, but if the customer either proactively spells their name or they specifically object to the way the agent pronounced their name, then we handle those cases.

In the "Questions & Objection Handling" section of your prompt, add this:

Prompt

```
### Name Spelling or Pronunciation Corrections
If the customer spells their name out letter by letter, you must use the spelled version as the correct first name going forward, even if the earlier transcription was different.

For example, if the customer says:
“My name is Alex Jones… A-L-E-C J-O-N-E-S,”
then respond:
“Thank you, Alec. It’s nice to meet you,”
(not “Alex”).

Always treat the letter-by-letter spelling as the authoritative source for the customer's first name. Ignore previous transcriptions if they differ.

- Another Example:
Agent: "Thank you, Soban! That's perfect."
User: "That's not how you say my name."
Agent: "I apologize. Could you help me by spelling it out your first name letter by letter?"
User: "It's S I O B H A N"
Agent: "Thank you, Siobhan! Now..."
User: "You're still saying it wrong!"
Agent: "I apologize. Let's move onto the next step..."

Note: If user shows dissatisfaction with name pronunciation, first ask to spell out letter by letter. If frustration continues, stop using name in conversation and rephrase standard responses to remove name references (e.g., use "Thank you! That's perfect." instead of "Thank you, {{firstName}}! That's perfect.")
```

**✅ Pros:** Less friction

**❌ Cons:** Doesn't account for people who don't correct the name

**💡Best for:** When it's good to get names right from an experience standpoint, but not critical to get spelling perfect for an API call.

> ## 📊
>
> We find without these techniques AI agents get names right with reasonable spelling 90%+ of the time, and with these it can increase to 95%+, but it depends on use case and demographic of audience.

# Stating Business Hours in Local Time

JSON

```
## "What are your business hours?"
- If the contact asks "What are your business hours?" and {{contact.rvProperties.timezone}} is one of the following:
    - 'America/New_York': Respond with "Business hours are Monday through Friday, 9am to 7pm Eastern."
    - 'America/Chicago': Respond with "Business hours are Monday through Friday, 8am to 6pm Central."
    - 'America/Salt_Lake_City': Respond with "Business hours are Monday through Friday, 7am to 5pm Mountain."
    - 'America/Los_Angeles': Respond with "Business hours are Monday through Friday, 6am to 4pm Pacific."
    - 'America/Anchorage': Respond with "Business hours are Monday through Friday, 5am to 3pm Alaska Time."
    - 'America/Honolulu': Respond with "Business hours are Monday through Friday, 4am to 2pm Honolulu Time."
- If the timezone is not recognized, respond with: "Business hours are Monday through Friday, 9am to 7pm Eastern."
```

# Pauses

> ## 🎤
>
> This applies to voice agents only

Use a dash with space on both sides for short pause

Prompt

```
Say: "Thanks - appreciate it"
```

For longer pauses use more dashes

Prompt

```
Say: "Great! You'll want to visit circlebank.com - - - then tap the three lines in the top right corner, - - - select "Account" - - - and enter your email. - - - Then, check your email for the login link. - - - If you don't see the email, be sure to check your spam or junk folder."
```

# Number / ID Speed or Repetition

> ## 🎤
>
> This applies to voice agents only

AI Agents often default to one-shot delivery of phone numbers, dumping the entire phone number in a single response. This can be a UX issue, especially for elderly or stressed callers. These are two Number Repetition Templates that have worked to address this issue. They each work by breaking down the numbers / IDs into segments.

If it's a number / ID you need your agent to collect:

Prompt

```
1. Request the user's policy number

2. Repeat the policy number in a way that slows the speech output to ensure the user can confirm that it's correct. Use dashes with a space to indicate a natural pause, DO NOT OMIT THE SPACES AROUND THE DASHES.
- For the alphabet part of the membership number, say it with simple words such as C for Cat,  D for Dog to ensure accuracy.

If the membership number is TNSV19604846:
Say: "Okay the first part of the membership number is: T for Toy, N for No, S for Salad, V for Voice and then the rest is: 1 9 6 0 4 8 4 6. Is that correct, or would you like me to repeat it?"
- If user makes a change, repeat the corrected policy number.
```

If it's a number that's static, you can simply use:

Prompt

```
The number you can call for that is: 
 - First Segment: "one, eight-eight-eight." 
 - Middle Segment: "Next, three-seven-eight." 
 - Final Segment: "And finally, four-three-two-nine."
```

Note: if the speed of how your AI agent is saying a phone number is not a problem, you can also just use brackets like this. Agents knows to say "one eight hundred" in this case for example.

```
The number is [1-800-MEDICARE]
```

# Saying Websites and Emails Naturally

> ## 🎤
>
> This applies to voice agents only

It's best to spell out websites and emails to avoid agents adding the https:// or pronouncing the email/website oddly

```
Email do-not-call-at-cirlce-health-dot-com

Visit w-w-w-dot-circle-health-dot-com
```

# Other Resources

- [OpenAI's GPT 4.1 Models Prompting Guide](https://cookbook.openai.com/examples/gpt4-1_prompting_guide#4-instruction-following)
- [PromptHub's Few Shot Prompting Guide](https://www.prompthub.us/blog/the-few-shot-prompting-guide)

Updated 10 months ago

---
