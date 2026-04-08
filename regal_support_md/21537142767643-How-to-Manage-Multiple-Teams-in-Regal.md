---
id: 21537142767643
title: "How to Manage Multiple Teams in Regal"
html_url: "https://support.regal.ai/hc/en-us/articles/21537142767643-How-to-Manage-Multiple-Teams-in-Regal"
updated_at: "2023-12-26T18:42:35Z"
---

# How to Manage Multiple Teams in Regal

Managing multiple teams in a single Regal Account has gotten much easier; however, not all parts of Regal can be split logically organized by team. Here are the key ways to manage your teams separately so you don't step on each other's toes.

- Agent Teams
- Saved Views
- Team-Specific Permissions
- Other

# Agent Teams

The most common need to separate by teams in a single Regal account is for different groups of agents that are managed by different supervisors. You can create Agent Teams in **Settings > User Management > Teams.**

![Screen Shot 2023-12-26 at 1.30.48 PM.png](https://support.regal.ai/hc/article_attachments/21537142755611)

You can then assign agents to teams from **Settings > User Management > Users** or from the Agents page.

![Screen Shot 2023-12-26 at 1.30.20 PM.png](https://support.regal.ai/hc/article_attachments/21537142756251)

**Note:** Agents can belong to more than one team at a time (as is common for teams that want to shift resources between them depending on staffing needs).

# Saved Views

**Agents Page - Saved Views**

On the Agents page, you can filter by team and create a Saved View to just see the Agents and data associated with your team(s).

![Screen Shot 2023-12-26 at 1.32.54 PM.png](https://support.regal.ai/hc/article_attachments/21537147322011)

**Past Tasks and Recordings Pages  - Saved Views**

The Past Tasks and Recording pages can all be filtered by Handling Agent. You can then create a Saved View with just those agents' tasks or recordings that relate to your team(s).

**Upcoming Tasks - Saved Views**

Tasks that have not yet been completed do not have a Handling Agent to filter by; however, if you use the concept of Target Agent, you may filter by that and create a Saved View. Just remember that based on how you've set up your Routing Rules, the Target Agent may not be the actual agent who handles the task.

**Queues Page - Saved Views**

It is common to create and organize your Queues by team. For example, you can create a Retention Outbound Calls queue separate from your Acquisition Outbound Calls queue. If you take this approach, then you can filter the Queues page by Queue name and create a saved view just of the Queues that related to your team(s).

**Reporting Dashboards**

Depending on the data included, Reporting dashboards can be filtered by Target Agent Team, Handling Agent Team, Queue, etc. You can also reach out to [support@regal.io](mailto:support@regal.io) to help you set up Custom Dashboards just for your team.

**Phone Numbers**

While the Phone Numbers page cannot be filtered by team, phone number is another common way to separate incoming or outbound calls for particular teams, for example using one number for acquisition calls and one for retention calls. However, while some pages and reports in Regal can be filtered by phone number, we don't recommend this approach because once a customer has one of your phone numbers, they tend to continue to use it throughout their lifecycle even if you intended it just for a specific purpose/team.

# Team-Specific Permissions

**Dispositions, Tags and Cancelation Reasons**

When setting up dispositions, tags or cancelation reasons **(Settings > Task Preferences)**, you can assign them to All Users or Specific Agent Teams. If assigned to Specific Agent Teams, those options will only appear for agents associated to those teams you specify.

*![Screen Shot 2023-12-26 at 1.31.43 PM.png](https://support.regal.ai/hc/article_attachments/21537147323931)*

**Contact Attributes**

When determining which Contact Attributes should appear on the Agent Desktop to which agents **(Settings > Data Management)**, you can can select All Users or Specific Agent Teams. If assigned to Specific Agent Teams, those attributes will only appear for agents associated to those teams you specify.

*![Screen Shot 2023-12-26 at 1.32.21 PM.png](https://support.regal.ai/hc/article_attachments/21537147327387)*

**Other Settings & Permissions**

There are still some settings & permissions in Regal that cannot be applied at the Agent Team level, such as Business Hours, Quiet Hours, Task Autocompletion, Auto Accept Incoming Calls and Templates.

To put in a feature request to have certain settings be at the Team or User Level, please email [support@regal.io](mailto:support@regal.io).

# Other

**Contacts**

Contacts belong to a company (not an individual team) and therefore are at the Account level. However, contacts may move through certain lifecycle stages and have a "Target Agent Team" or "Contact Owner" at those different stages. You can add those as attributes on a contact and then have tasks route to those specific teams or owners. Reach out to [support@regal.io](mailto:support@regal.io) to help you set this up as there is not a one-size-fits-all approach in Regal depending on your set up and aims.

**Campaigns, Journeys, Segments**

Because Campaigns, Journeys, and Segments can apply to contacts at multiple points of lifecycle, again there is no concept in Regal of assigning them to a specific team. However, if there are specific Campaigns, Journeys or Segments that are created by/owned by certain teams you can use naming conventions to separate them such as prefixing the names by ACQ or RET. (Journeys also have tags which can be used for this and the Journeys list view and be filtered by tags. We expect to release tags for Campaigns and Segments in 2024.)

**Routing Rules**

Currently, Routing Rules cannot be separated by team. Remember that Routing Rules are evaluated from top to bottom and the first rules a task satisfies will be the rule that routes it, so make sure rules are in order of importance in case a task satisfies multiple rules.