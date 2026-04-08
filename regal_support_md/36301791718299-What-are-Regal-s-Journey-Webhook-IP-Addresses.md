---
id: 36301791718299
title: "What are Regal's Journey Webhook IP Addresses?"
html_url: "https://support.regal.ai/hc/en-us/articles/36301791718299-What-are-Regal-s-Journey-Webhook-IP-Addresses"
updated_at: "2025-05-09T19:32:05Z"
---

# What are Regal's Journey Webhook IP Addresses?

Regal's Journey webhooks origina from AWS's `us-east-1` region, which uses a dynamic range of IP address blocks. **We do *not* have a single static IP for Journey webhooks. And No, there is no subset of IP Address. Instead, you should allowlist all AWS US-East-1 prefixes.**

To retrieve the up-to-date list of IP prefixes yourself, use the AWS public JSON file:

- **📄 AWS ranges JSON:** `https://ip-ranges.amazonaws.com/ip-ranges.json`
- ✂️ **Filter** for `region === "us-east-1"`

---

## Download the Latest IP List for us-east-1

You can either download as a CSV file or a JSON file. Choose your format:

📥 Download CSV 📦 Download JSON