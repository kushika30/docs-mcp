---
id: 6744950315035
title: "Hardware and network requirements"
html_url: "https://support.regal.ai/hc/en-us/articles/6744950315035-Hardware-and-network-requirements"
updated_at: "2024-06-18T20:44:36Z"
---

# Hardware and network requirements

# Network & Connectivity:

Having a strong and reliable network connection is a critical component of ensuring that Regal will work properly on your machine. Slow or unstable connections can lead to dropped calls, poor quality (delays, static, dropped sounds, etc), as well as issues like tasks becoming "stuck" in the Regal UI. 

Four components are used to determine network quality (upload & download speeds, ping, and jitter). We recommend taking the below speed test and comparing your results to the requirements listed.

Regal's recommended [connection test is here](https://speed.cloudflare.com/), and the recommended [VOIP test is here](https://networktest.twilio.com/).

Our application will serve a red banner message if we are detecting a sub-optimal network connection for your workstation. This error message (pictured below) may not always lead to poor quality or failed/dropped calls, but it is recommended that you review the network requirements and recommendations below, even if you have yet to have trouble with completing a call.

![mceclip0.png](https://support.regal.ai/hc/article_attachments/26701549219227)

### 

### **Upload & Download Speeds**

The upload and download speeds of a network are measured in megabytes per second (MB/s). The higher your download and upload speeds are, the faster the data can travel. This is critical in maintaining call quality and Regal user-interface speed.

Speed isn’t everything. This is an approximation using typical qualities 50MB+ plans also include. Important factors like Jitter and Ping are affected by environmental conditions and are not constant values over time.

The below numbers represent the absolute minimum requirements assuming no other network congestion. If you're experiencing call quality issues, but meet the minimum upload/download speeds above, please check your network latency (ping and jitter), which has an equally important role in driving VOIP quality.

**Residential / At Home connection, service advertised as:**

- **Download: >50MB/s advertised minimum**
- **Upload: >25MB/s advertised minimum**

For residential service, we recommend the above service package or better. Residential internet service, as compared to commercial internet service, typically advertises service levels but does not guarantee minimums. Additionally, there are typically only one or a small number of people working simultaneously on the same connection and the above numbers typically work for most hard-wired users.

**Commercial / In-office connection, per machine:**

- **Download: >1 MB per machine**
- **Upload: >1 MB per machine**

For commercial service, connections are often shared across many devices and workers. As a result, we recommend a per machine minimum. Typically these commercial connections have different guaranteed minimums and hardware stacks than residential service which cause the per-user requirements to be significantly different than a residential connection.

### **Ping**

Ping (latency is the technically more correct term) is the time it takes a piece of data to travel from your device to a server on the Internet and back to your device again. Put simply, the delay between a person speaking, and the recipient on the other end of the phone hearing those words is due to a high latency. 

- **Recommended ping: *Under* 150 ms**

### **Jitter**

Jitter refers to the data packets being delivered to the destination at irregular intervals instead of being delivered at the same time. In other words, one packet is delivered after the rest of the packet. This can lead to low call quality with missing or jumbled audio.

- **Recommended jitter: *Under* 30 ms**

# Hardware:

- Operating System (OS): Windows 10 / OSX 10.14+ / Chrome OS
- RAM: Recommended 16GB of DDR4 Memory
- CPU: 10th Gen Intel i5+ / AMD Ryzen 5 3000 Series+
- Wired headphones
- Ethernet cable (using WiFi is not recommended for optimal call stability)

Of the hardware requirements above, the CPU and RAM requirements are impacted by user or environmental behavior. Put simply, if you're running many applications at once, or an application is being used heavily (for example: having many Chrome tabs open at the same time) you will likely see a slowdown in overall performance if your hardware does not meet these requirements.