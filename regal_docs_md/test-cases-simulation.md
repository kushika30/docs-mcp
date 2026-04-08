# Simulation Testing

# Overview

Simulation testing is a powerful step in your agent development process that enables scalable, automated validation of conversational flows. It helps catch complex scenario gaps or unexpected behaviors that manual tests might miss, so you can confidently iterate and deploy your AI agent.

Use [Test Audio](/docs/webcall-testing) and [Test Logic](/docs/test-logic-chat) during the agent-building phase to verify each component of your agent works as intended. Then leverage simulation testing before go-live to catch potentially missed issues across multiple scenarios or after live iterations to ensure expected behaviors remain consistent.

![](https://files.readme.io/f1ea1c6bff510b6bc4cec7e1b0c070d100ee7b9d3087a208932e9c6a1e737e8b-image.png)

## ✅ What you **can** test with simulation testing

- Conversational logic: Verify the agent follows task flow correctly under diverse scenarios, handles objections/questions, and integrates RAG (retrieval-augmented generation) responses.
- Custom actions triggered during conversation.
- Simultaneous testing of multiple scenarios using the same agent prompt.

## ❌ What you **cannot** test with simulation testing

- Sound, speed, volume of the voice
- Responsiveness and interruption handling of your agent
- Call transfers or E2E latency over telephony
- Personalization using test values for dynamic variables (coming soon)
- Personalization from actual profile data
- Dispositions (coming soon)

# Create Test Cases

- **Name**A brief identifier summarizing what the test case covers
- **Contact Prompt**A descriptive input prompt that defines the contact’s behavior and dialogue during simulation, including how the contact responds and relevant behavioral traits.
  - Best practice: Treat this like a mini prompt. Use ## to separate sections (similar to agent prompts).
  - Include a Custom Scenario describing what the contact says in your test scenario (most important).
  - Optionally add Customer Persona and Customer Attributes to add personality or traits.
  - Note: This section does not populate personalization variables in the agent prompt; it only shapes contact behavior in the simulation.
- **Success Criteria**Definition of the expected agent behavior (e.g. agent should transfer customer at the end of the call) to drive the auto-eval outcome, and stats for performance for each run. Deviations may indicate performance gaps.
- **Test Variable**Save variable values to give agent context and personalization data (e.g. state), so that you can simulate realistic conversations and assess agent handling in different scenarios.

![](https://files.readme.io/beac4ca1345fd5a7ca38fcbb19e10dbb07e3e46e69d2f183960347e060ebd44e-image.png)

### Auto-generate Test Cases

Click **Get Me Started**to auto-generate a list of 10 test cases based on existing agent prompt.This option is available only when no test cases exist yet.

![](https://files.readme.io/0a57828dee1483ea9da6b146336b9379661b71c7d7cdb70102ae783bf78ab098-image.png)

You can edit generated test cases to better suit your needs.

### Save Test Cases from Transcripts

Another convenient and effective way to increase test coverage is to save test cases from post-call transcripts.

![](https://files.readme.io/68c1131f949468690dfa9b2be0e1e3fe703d59313d9112bbf7307d7cc484a521-image.png)

- On any post-call transcripts, hit create test case button.
- In the modal, input success criteria for this test. All the contact variables and transcripts will be automatically captured.
- Save test case. See saved test cases in the AI Agent Testing tab.
- Run test to repro the conversation using the real world transcript.

  

# Simulate Tests

Select the test cases to run simulations. Run individually or in bulk.

![](https://files.readme.io/a9fba2da4ad39de577d928fea149c7625c3ee49fea5f5779827f6ec708c90d36-image.png)

  

- During simulation, the outcome column will show In Progress until the conversation concludes.
- Click the test case name to view transcripts, knowledge base retrievals, and function calls.
- Review transcripts carefully to identify next steps.

![](https://files.readme.io/3433af7cea60891930e32ece2f9a8bdd3f54cc34eee4193226f7e42c0a2406ae-image.png)

![](https://files.readme.io/136aec3585ff997b4119d15fadfa9ca1c5965244e60fdd37cfb52812e2248dd3-image.png)

  

## Iterate Test Cases

At your first simulation round, the contact may behave unexpectedly (e.g., long paragraphs instead of succinct answers). Focus first on refining test cases by editing the contact prompt and rerunning simulations. This upfront effort is critical — once test cases are reliable, you can run them repeatedly without manual retesting.

**What's important to cover?**

- **End-to-end Task Steps**: If your agent has multiple task steps with branching logic, create enough test cases to cover the key paths.
- **Objections & Questions**: Include varied objection handling and common questions.
- **Guardrails**: Test agent adherence to defined guardrails and script boundaries.
- **Edge Cases:** Add stress tests with odd or unexpected customer behaviors.

## Iterate Agent

After finalizing test cases, run test cases to Review the test case pass/fail outcomes. Observe the agent’s behavior for:

- Consistent triggering of expected functions, even in complex conversations.
- Accurate and prompt responses to multiple customer questions.
- Effective retrieval and use of relevant knowledge base content.
- Adherence to guardrails and agent style guidelines.

  
  
  

Have feedback? We'd love to hear from you - reach out to us with your thoughts!

Updated 3 months ago

---
