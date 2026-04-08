# Using Regal Events in Reporting

In order to build reports and analytics off of Regal's real-time reporting events, you can use the data model we've built to power our In-App Reporting Dashboards as a blue print.

This table describes which raw events roll up into which reporting tables (focusing on the most useful, not all) and what types of metrics or reports you can power off of them.

| Regal Events | Tables | Table Descriptions | Example Metrics / Analysis |
| --- | --- | --- | --- |
| agent.activity.updated | Agent Activity | - Unique record for each Agent activity period with dimensional columns like agent\_email, activity\_name, and start and end timestamps.  - Composite primary key of agent\_name and start\_timestamp | - Total and avg. time spent in each activity by agent  - Can join to Aggregated Tasks table for tasks completed per available agent hour |
| task.created  task.canceled  call.completed  call.recording.available  sms.conversation.completed  task.reservation.accepted | Aggregated Tasks | - Unique record for each task with dimensional columns like task id, disposition, recording link, handling\_agent, etc. as well as lifecycle timestamps - created\_at, canceled\_at, completed\_at, etc.  - Unique identifier = Task Id | - Completed tasks per day  - Inbound answer rates  - Outbound answer rate and connect rate (based on agent disposition and/or call duration)  - Completed Tasks by disposition  - Avg talk and handle time |
| task.reservation.created  task.reservation.accepted | Reservations | - Unique record for each reservation  - Unique identifier = reservation\_id | - Reservation acceptance rate by Agent  - Speed to accept reservations  - Avg. number of reservations per task to get it accepted |
| contact.created  contact.subscribed  contact.unsubscribed | - Aggregated Contacts  - User Rollup | - Aggregated Contacts - single record for each contact that includes dimensional data (“what we know about who the user is”)  - User Rollup - single record for each contact that includes activity metrics and flags (“we know what the user has done”)  - Unique identifier = contact\_phone | - Count of contacts created by day  - Count of contacts by source  - % of contacts subscribed  - Cohort analyses  - Can join to Aggregated Tasks to get “speed to lead” metrics |
| scheduled.callback.requested | Scheduled Callback Requests | - Unique record for each scheduled callback requests joined to the scheduled callback task created from that request  - Composite primary key of agent\_email and created\_at | - Count of scheduled callback requests by agent by hour of day  - % of scheduled callback requests completed by the scheduling agent |
| sms.received  sms.sent  sms.undelivered | Messages | - Unique record for each SMS sent or received  - Dimensional data such as the direction (inbound/outbound), automated vs. manual, the number the sms is sent from and to, the content of the message, and the associated campaign (if applicable)  - Primary key = message\_id | - Count of sms sent by campaign by day  - SMS delivery rate  - SMS response rate by campaign |
| contact.experiment.assigned | Experiment Assigned Events | Record for each assignment | Conversion rate by experiment variant |
| Track events sent to Regal | Important Events | - Subset of track events that represent lifecycle/funnel milestones e.g., Lead Created, Lead Converted, Lead Canceled Subscription (the events are tagged and unique to each brand)  - Composite primary key of event\_name and created\_at | - Can join to aggregated contacts and aggregated tasks to get % of conversations that lead to a conversion, % of leads who convert |

Updated over 1 year ago

---
