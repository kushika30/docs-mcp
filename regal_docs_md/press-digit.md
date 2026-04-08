# Press Digit

## Overview

The Press Digit action allows your AI Agent to press a key (0–9, \*, #) during a call. This is most commonly used to help the AI Agent navigate through IVRs, enter menu selections, or provide keypad inputs requested by automated phone systems. The action gives your AI Agent the ability to move through phone trees and access the correct destination before continuing the conversation or completing a workflow step.

With Press Digit, you can configure:

- **Name of the action** – A label used to reference this Press Digit action within your flow.
- **Press Digit Action Description** – A simple explanation of when the AI Agent should use this action and what the desired outcome is.
- **Pause Detection Delay** – The amount of time (in milliseconds) the AI Agent should wait after detecting silence before pressing the digit, ensuring the IVR has finished speaking.

This action can be added anywhere in an AI Agent prompt where you're expecting an IVR or automated system to require a keypad input.

## Configuration

When creating a Press Digit action, you will see a configuration modal as shown:

![Press Digit Configuration](https://files.readme.io/beae29730f8d5ed446c9a3cb092ecef2c7e0a1ca892814d58867ab580ff09e9d-Screenshot_2025-11-17_at_12.32.25PM.png)

Press Digit Configuration

### Name of Press Digit Action

Provide an internal name such as `press_digit_1`, `ivr_selection_sales`, or `press_pound_to_continue`. This name identifies the action within your prompt.

### Press Digit Action Description

Write a short description that explains when the AI Agent should trigger the action and what the expected result should be. For example: “Follow the IVR instructions to speak with a live human representative."

Clear descriptions help the AI Agent understand which prompt corresponds to each Press Digit action.

### Pause Detection Delay (ms)

This value determines how long the AI Agent should wait after the IVR stops speaking before pressing the digit.

- Default is 1000 ms (1 second).
- Increase the delay if the IVR has longer pauses or speaks slowly.
- Decrease the delay if the IVR responds quickly and you want to speed up call progression.

## Summary

The Press Digit action allows your AI Agent to successfully navigate IVRs by pressing the correct keypad inputs at the right time. By naming the action, describing when to use it, and specifying the appropriate pause delay, you can ensure the AI Agent interacts with automated systems smoothly and reaches the correct destination in the call flow.

Updated 5 months ago

---
