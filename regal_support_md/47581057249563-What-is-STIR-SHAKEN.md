---
id: 47581057249563
title: "What is STIR/SHAKEN?"
html_url: "https://support.regal.ai/hc/en-us/articles/47581057249563-What-is-STIR-SHAKEN"
updated_at: "2026-03-09T16:07:54Z"
---

# What is STIR/SHAKEN?

STIR/SHAKEN (Secure Telephone Identity Revisited / Signature-based Handling of Asserted information using toKENs) is an FCC-mandated call authentication framework designed to combat illegal robocalls and caller ID spoofing. When a call is placed, the originating carrier cryptographically signs it with an attestation level, which receiving carriers use to verify the call's legitimacy.

The result: your calls can display a **"Caller Verified"** trust indicator on recipients' phones instead of being flagged as "Potential Spam" or blocked entirely.

## Why It Matters for Your Outbound Calls

Without STIR/SHAKEN, your calls are subject to scrutiny from carrier-level analytics platforms that determine whether a call rings through, goes to voicemail, or gets blocked. With proper attestation, you can:

- **Increase answer rates:** Verified calls display trust indicators that give recipients confidence to pick up
- **Protect your reputation:** Your caller ID is authenticated, reducing the risk of your numbers being mislabeled as spam
- **Reduce spoofing risk**: STIR/SHAKEN makes it significantly harder for bad actors to impersonate your numbers, and fraudulent callers face near-instant traceback by regulators and law enforcement

## How It Works

Calls receive one of three attestation levels:

- **A (Full)**: The carrier can verify the caller's identity and their right to use the number. This is the highest level and the one that unlocks "Caller Verified" indicators.
- **B (Partial):** The caller is verified, but the number's origin cannot be fully confirmed.
- **C (Gateway)**: The call originated outside the STIR/SHAKEN ecosystem and could not be verified.

Regal works with carriers to help your calls achieve the highest possible attestation level.

## Inbound & Outbound Calls

Anyone receiving or placing calls from Regal phone numbers would benefit from STIR/SHAKEN.

STIR/SHAKEN applies to both inbound and outbound calls, but it works differently for each:

- **Outbound**: The originating carrier *signs* the call with an attestation level, which is what results in the "Caller Verified" indicator on the recipient's phone.
- **Inbound**: When calls come *into* your Regal numbers, the attestation signed by the *caller's* carrier travels with the call. Regal can pass that verification status through, which you could use to route or handle calls differently (e.g., treat unverified inbound calls with more scrutiny).

## How to Enable STIR/SHAKEN in Regal

STIR/SHAKEN is available to Regal customers. To get started, reach out to your **Customer Success Manager** or email [**support@regal.ai**](mailto:support@regal.ai) and our team will get you set up.

## FAQs

- **Do I have to pay for STIR/SHAKEN?** No. STIR/SHAKEN is included at no additional cost for Regal customers who provision their phone numbers through Regal. There's no reason not to enable it — just reach out to your CSM or support to get it turned on.
- **Does STIR/SHAKEN help with calls to mobile phones, landlines, or both?** Primarily mobile. STIR/SHAKEN operates over IP-based (VoIP/SIP) networks, which is where the vast majority of calls travel today. The "Caller Verified" trust indicator displays on supported mobile carriers and devices. Traditional landlines generally don't display the trust indicator, though the underlying authentication still travels with the call through the network.
- **Does STIR/SHAKEN make my brand name display on the recipient's phone?** No — that's a common misconception. STIR/SHAKEN only authenticates that the call is coming from a legitimate, non-spoofed source. It may show a "Caller Verified" checkmark or similar indicator, but it does not display your business name or logo. For your name to appear, you need **CNAM** (for basic name display) or **Branded Caller ID** (for a richer experience with name, logo, and call reason).
- **Does STIR/SHAKEN work together with Spam Remediation, or instead of it?** Together — they solve different problems. STIR/SHAKEN authenticates new calls going forward, proving they're legitimate. Spam Remediation fixes existing damage by removing spam flags that have already been applied to your numbers by carriers and analytics platforms. If your numbers have been labeled "Spam Likely," STIR/SHAKEN alone won't clear that label. For best results, use both: remediate your existing numbers first, then keep them clean with STIR/SHAKEN authentication going forward.
- **Is there any reason NOT to sign up for STIR/SHAKEN?** Rarely. For most Regal customers, there's no meaningful downside — it's free, low-effort to enable, and has no negative impact on call delivery. That said, a few edge cases are worth knowing: STIR/SHAKEN is a US-based framework, so if a significant portion of your calls are international, those calls won't benefit from it (the receiving carrier may not be part of the ecosystem). It also doesn't address calls where your numbers have already been flagged as spam — Spam Remediation is the right tool for that. In short: if you're receiving or making US-based outbound calls, you should enable it.

---

## Trusted Calling Products: How They Work Together

Regal offers four complementary trust products for outbound calling. Each solves a different piece of the problem — using them together gives you the best chance of reaching customers with a verified, recognizable identity.

|  | **STIR/SHAKEN** | **CNAM** | **Branded Caller ID** | **Spam Remediation** |
| --- | --- | --- | --- | --- |
| **What it is** | A carrier-level call authentication protocol mandated by the FCC | A database lookup that displays your registered business name on the recipient's phone | A rich call experience showing your business name, logo, and call reason | A process to identify and remove spam/fraud flags on your numbers |
| **What problem it solves** | Proves your call is legitimate and not spoofed, preventing it from being blocked or flagged before it even rings | Replaces the raw phone number with a recognizable name so recipients know who's calling | Goes beyond a name — gives recipients full brand context to decide whether to answer | Cleans up numbers that have been mislabeled as "Spam Likely" or "Scam" by carriers or analytics providers |
| **What the recipient sees** | "Caller Verified" checkmark or trust indicator (on supported carriers/devices) | Your business name (e.g., "Acme Insurance") next to the number | Your business name, logo, and a reason for the call (e.g., "Appointment Reminder") | A clean, unlabeled caller ID instead of a spam warning |
| **How it works** | Carrier cryptographically signs the call; receiving carrier verifies the signature and attestation level | Your number is registered to a name in CNAM databases queried by terminating carriers | Delivered via analytics platforms (e.g., Hiya, First Orion) that push display data to supported devices | Numbers are audited across carrier and analytics blocklists; disputes are filed to remove flags |
| **Works on** | All calls over the PSTN (US); display depends on carrier and device support | Most US carriers; display depends on terminating carrier querying the database | Supported devices and carriers enrolled with participating analytics platforms | All numbers; results vary by carrier and platform |
| **Complements** | CNAM, Branded Caller ID, Spam Remediation — authentication is the foundation for all other trust signals | STIR/SHAKEN (authentication + name), Spam Remediation (clean number + name) | STIR/SHAKEN (verified + branded), Spam Remediation (clean + branded) | All three — a spam-flagged number undermines every other trust investment |
| **How to enable in Regal** | Contact your CSM or email support | Contact your CSM or email support | In Regal App: Settings > Trust & Branding > Branding & Spam  or [Regal API](https://developer.regal.ai/reference/post-branded-phone-number) | In Regal App: Settings > Trust & Branding > Branding & Spam  or [Regal API](https://developer.regal.ai/reference/post-branded-phone-number) |