# Universal Embeddable iFrame

This document outlines how to embed Regal into your web platform, providing agents with a seamless way to handle calls, sms and other workflows from within their existing toolkit. By embedding Regal as an iFrame, agents can access Regal’s core functionality without leaving their primary platform, creating a more efficient "single pane of glass" experience.

> ## 📘
>
> Who is this option best for?
>
> Regal's universal embeddable iFrame is best for support agents already using a homegrown or 3rd party ticketing system or CRM that houses the key customer information and operational actions they need to access. The embeddable iFrame does not contain the full agent functionality available in Regal, only the subset of functionality sufficient for these agents.
>
> Sales and other outbound agents are not advised to use this option. Using Regal as their main desktop - with full access to Regal's unified profile, campaign information, and custom contact lists - will lead to a better agent experience and better business outcomes. Additionally, support agents who are not happy with their current platform may also benefit from using Regal as their main desktop, and simply having the other platform open in another tab. Regal can automatically pop the relevant record of that platform to maintain agent efficiency.

The widget offers native support for features like click-to-dial and changing an agent's availability status. Additionally, Regal sends events (e.g., agent placed a call, agent was assigned a task) that you can act on in your platform, for example, surface relevant context to the agent about the contact or conversation.

For platforms with native support—like [Salesforce](https://developer.regal.io/docs/how-to-enable-regal-dialer-widget-in-salesforce), [Kustomer](https://developer.regal.io/docs/kustomer-1), and [Retool](https://developer.regal.io/docs/retool)—the integration is plug-and-play. For all other web platforms, you can integrate Regal with a small custom implementation following the documentation below.

[DEMO VIDEO](https://www.loom.com/share/b8e05783dbee41eab7bf08544b8ca6d7)

![](https://files.readme.io/6a83e41b3d8c568bcc1afe1a64338b26fe030455250924d0a6eb3806a16f6ad8-uni-widget.png)

# Setup

### Step 1

In order to embed Regal into your platform, email [[email protected]](/cdn-cgi/l/email-protection#e794929797889593a7958280868bc98e88) with the list of domains your platform operates on. This step is necessary to ensure that we can allow these domains in our content security policies; otherwise, Regal will not load on your site.

### Step 2

Add an iFrame in your platform pointing to the Regal app: <https://app.regal.io.> Make sure you include the `allow` directive on the iFrame with at least these values: `allow="microphone; clipboard-read; clipboard-write"`.

You can check our [code snippets](https://developer.regal.io/docs/embed-regal-anywhere#sample-code-snippets) below for reference. At this point, if **Step 1** and **Step 2** have been completed, Regal should be running within your platform!

### Step 3

Now it's time to set up the interaction between Regal and your platform. iFrames communicate through the window's [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) function. You can communicate with Regal in two directions: posting messages to the Regal iFrame, and receiving messages from the Regal iFrame. Our [sample snippets](https://developer.regal.io/docs/embed-regal-anywhere#sample-code-snippets) can help visualize a basic example of how to set up this bidirectional communication.

# What can Regal's Embeddable iFrame do?

While working with an embedded version of Regal, there are two categories of supported interactions:

**Events:** Consider this the outbound flow. These are actions that the user takes in the Regal application that will emit an event which can be captured by your platform and acted upon. Examples include changing the current status or accepting a task.

**Actions:** This would be considered the inbound flow. Your platform notifies the Regal app that it needs to perform a certain action. Examples include making an outbound call or changing the agent's status.  
All of these interactions are powered by messages sent back and forth between your platform and the Regal iFrame via javascript. Messages have a predefined structure that needs to be fulfilled for these interactions to work as expected.

## Events

Regal sends the following events:

| Event | Sample Usage | Payload |
| --- | --- | --- |
| Agent Changed their Status | Sync the status your agent has in Regal with your platform's status. | {  "data": {  "source": "regal",  "action": "status-changed",  "status": "Online"  }  } |
| Agent Opened a Task | Show contextual contact information related to the current task the agent is working on. | {  "data": {  "source": "regal",  "action": "task-active",  "contactPhone": "+17778886899",  "contactEmail": "[[email protected]](/cdn-cgi/l/email-protection#86e5e9e8f2e7e5f2c6e3e7a8e5e9eb) ",  "externalId": "1234567890",  "profileId": "0987654321",  "taskType": "Outbound Call",  }  } |
| Agent Accepted a Task | Show contextual contact information related to the current task the agent is working on. | {  "data": {  "source": "regal",  "action": "task-accepted",  "contactPhone": "+17778886899",  "contactEmail": "[[email protected]](/cdn-cgi/l/email-protection#65060a0b110406112500044b060a08) ",  "externalId": "1234567890",  "profileId": "0987654321",  "taskType": "Outbound Call",  }  } |
| Task is Assigned to Agent | Show contextual info for the task in the your platform. | {  "data": {  "source": "regal",  "action": "task-assigned",  "contactPhone": "+17778886899",  "contactEmail": "[[email protected]](/cdn-cgi/l/email-protection#f1929e9f85909285b19490df929e9c) ",  "externalId": "1234567890",  "profileId": "0987654321",  "taskType": "Outbound Call",  }  } |
| Task was Moved to Wrapping | Trigger an internal summary flow when the agent's call has ended to collect additional information beyond Regal's Task Summary form. | {  "data": {  "source": "regal",  "action": "task-wrapping",  "contactPhone": "+17778886899",  "contactEmail": "[[email protected]](/cdn-cgi/l/email-protection#1e7d71706a7f7d6a5e7b7f307d7173) ",  "externalId": "1234567890",  "profileId": "0987654321",  "taskType": "Outbound Call",  }  } |
| Agent Completed a Task | Remove any context related to the task since it is now complete. | {  "data": {  "source": "regal",  "action": "task-completed",  "contactPhone": "+17778886899",  "contactEmail": "[[email protected]](/cdn-cgi/l/email-protection#a2c1cdccd6c3c1d6e2c7c38cc1cdcf) ",  "externalId": "1234567890",  "profileId": "0987654321",  "taskType": "Outbound Call",  }  } |
| Agent Cancelled a Task | Remove any context related to the task since it is cancelled. | {  "data": {  "source": "regal",  "action": "task-cancelled",  "contactPhone": "+17778886899",  "contactEmail": "[[email protected]](/cdn-cgi/l/email-protection#94f7fbfae0f5f7e0d4f1f5baf7fbf9) ",  "externalId": "1234567890",  "profileId": "0987654321",  "taskType": "Outbound Call",  }  } |
| Manager Started Barging | Show contextual info for the task in your platform for the manager. | {  "data": {  "source": "regal",  "action": "started-barging",  "contactPhone": "+17778886899",  "externalId": "1234567890",  "profileId": "0987654321",  "taskType": "Outbound Call",  "agentEmail": "[[email protected]](/cdn-cgi/l/email-protection#2d4c4a4843591c6d59485e59034e4240) ",  }  } |
| Manager Started Listening | Show contextual info for the task in your platform for the manager. | {  "data": {  "source": "regal",  "action": "started-listening",  "contactPhone": "+17778886899",  "externalId": "1234567890",  "profileId": "0987654321",  "taskType": "Outbound Call",  "agentEmail": "[[email protected]](/cdn-cgi/l/email-protection#a3c2c4c6cdd792e3d7c6d0d78dc0ccce) ",  }  } |

  

## Actions

Regal supports the following actions:

| Action | Sample Usage |  |
| --- | --- | --- |
| Make a Call | Clicking on a customer's phone number to trigger an outbound call in Regal. | {  "data": {  "source": "your-platform",  "action": "create-task",  "type": "Manual Outbound Call",  "phoneNumber": "+17778886899"  }  } |
| Create an Outbound SMS Task | Clicking on a customer's phone number to trigger an outbound SMS task in Regal. | {  "data": {  "source": "your-platform",  "action": "create-task",  "type": "Outbound SMS",  "phoneNumber": "+17778886899"  }  } |
| Create an Outbound Email Task | Clicking on a customer's email address to trigger an outbound email task in Regal. | {  "data": {  "source": "your-platform",  "action": "create-task",  "type": "Manual Outbound Email",  "email": "[[email protected]](/cdn-cgi/l/email-protection#c0b3afada5a5ada1a9ac80ada1a9aceea3afad) "  }  } |
| Change Agent Availability Status | Sync your platform's users statuses with the agent statuses in Regal. Enable agents to change their statuses in Regal directly from your platform. | {  "data": {  "source": "your-platform",  "action": "change-status",  "status": "Online",  } |

  

# Sizing Guidelines

Depending on the functionality you want to expose to your agents using the Regal iFrame, we recommend using the sizing guidelines below.

| Version | Description | Recommended iFrame Size |
| --- | --- | --- |
| Full | Embed the full Regal UI within your platform with no hidden sections or limitations. | Width: `1024px`  Height: `662px` |
| Medium | Embed a slimmer version of the Regal app to work through your tasks, without the navigation bar nor contact/campaign details panel. Agents will see their tasks, their contacts, and the activity feed. | Width: `720px`  Height: `530px` |
| Small | Embed a very slimmed down version of the Regal dialer within your platform. By default, the navigation bar, activity feed, and contact/campaign details panel are all hidden. This is for agents who only need to field and summarize calls using Regal. | Width: `464px`  Height: `480px` |

  

**Full**

![](https://files.readme.io/0d6f7a750fc6d23d3612221b9d4aa04d17efbc33afe6f802c6ebdb92e7aac219-Full_App.png)
  

**Medium**

![](https://files.readme.io/c732d6ce8a2bba3cf3cd8fa13107875432762243018b8cd6d0ff385f9dbd9ca7-Reduced_App.png)
  

**Small**

![](https://files.readme.io/a67fc63b89fa55bbb659f78c987150e048aeaee085ee59021897ad51f14a87fb-Standard_Widget.png)

# Sample Code Snippets

Here are sample code snippets for React and JavaScript.

ReactJavaScript

```
function App() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // send Actions to Regal
    function becomeAvailable() {
        const message = {
            source: "my-platform",
            action: "change-status",
            status: "Available",
        };
        iframeRef.current?.contentWindow?.postMessage(message);
    }

    // listen for Regal Events
    useEffect(() => {
      function handler (event: MessageEvent) {
        const { data, source } = event;
        if (source === iframeRef.current?.contentWindow) {
          // received a message from the Regal iframe
          const { action, source } = data;
          if (source !== "regal") {
              // not from the Regal app, ignoring
              return;
          }
          switch (action) {
              case "task-active":
              case "task-assigned":
              case "task-accepted":
              case "task-cancelled":
              case "task-completed":
              case "task-wrapping":
              case "status-changed":
              case "started-barging":
              case "started-listening":
                  // handle any of these cases separately
                  // you can trigger any desired actions in your platform
                  break;
              default:
                  console.log("unsupported action", action);
          }
        }
      }
      window.addEventListener("message", handler);
      return () => window.removeEventListener("message", handler);
    }, []);

    return (
        <div>
            <iframe
                ref={iframeRef}
                id="regal-frame"
                src="https://app.regal.io"
                allow="microphone; fullscreen; clipboard-read; clipboard-write"
            ></iframe>
            <div>
                <button onClick={becomeAvailable}> Click to Become Available </button>
            </div>
        </div>
    );
}
```

```
//send Actions to Regal
const regalIframe = document.getElementById("regal-frame");
if (regalIframe) {
    const message = {
        source: "my-platform",
        action: "change-status",
        status: "Available",
    };
    regalIframe.contentWindow.postMessage(message);
}

// receive Events from Regal
function handler (event: MessageEvent) {
  const { data, source } = event;
  if (source === regalIframe.contentWindow) {
    // received a message from the Regal iframe
    const { action, source } = data;
    if (source !== "regal") {
        // not from the Regal app, ignoring
        return;
    }
    switch (action) {
        case "task-active":
        case "task-assigned":
        case "task-accepted":
        case "task-cancelled":
        case "task-completed":
        case "task-wrapping":
        case "status-changed":
        case "started-barging":
        case "started-listening":
            // handle any of these cases separately
            // you can trigger any desired actions in your platform
            break;
        default:
            console.log("unsupported action", action);
    }
  }
}
window.addEventListener("message", handler);
```

Updated over 1 year ago

---
