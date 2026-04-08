# Balto

[Balto](https://www.balto.ai/) allows you to create Smart Checklists for your agents to ensure they follow your best practices and coaching.

- The Smart Checklist shows agents key talking points
- Dynamic Prompts show agents phrases and questions when they need them most
- Notifications discourage bad habits
- Live Chat lets agents chat with managers to get immediate guidance for critical calls

Balto checklists work on top of the Regal Agent Desktop.

![**Two separate UIs:** Agents stay in **Regal Agent Desktop** (left). Balto provides real-time guidance with its **Smart Checklist** (right), triggered by Regal reporting events.](https://files.readme.io/5d1e9aa-Screen_Shot_2023-11-03_at_4.11.15_PM.png)

**Two separate UIs:** Agents stay in **Regal Agent Desktop** (left). Balto provides real-time guidance with its **Smart Checklist** (right), triggered by Regal reporting events.

Balto contracts and charges a separate fee from Regal, and you pay them directly. Once you've contracted with Balto, follow these steps:

1. Set up a Balto webhook endpoint that Regal can send events to. The URL is typically: <https://agent-connectors.baltocloud.com/webhooks/regal>
2. An Authorization header with a unique value is also needed.
3. Then, reach out to [[email protected]](/cdn-cgi/l/email-protection#d8abada8a8b7aaac98aabdbfb9b4f6b1b7) in order to turn on the Balto integration for your Regal account.

The way the Balto integration knows when to display each checklist for a new call is based on Regal's Reporting event webhooks. The median latency is 2 seconds for a Balto checklist to appear when a call starts ringing, but if you need better responsiveness just let us know.

Updated about 1 month ago

---
