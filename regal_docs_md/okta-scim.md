# Okta SCIM

This guide describes how to set up the [Regal Okta app](https://www.okta.com/integrations/regal-voice/#overview) in order to enable SCIM to create, update or deprovision Regal users directly from your Okta org.

## Supported Features

- **Create Users**: Create users in the Regal app by assigning it to them through your Okta organization.
- **Update User Attributes**: Update users attributes in Regal by changing them in your Okta organization.
- **Deactivate Users**: Remove users' Regal access by deprovisioning them from your Okta organization.

## Prerequisites

You'll need a **Username**, and **Password** to complete setup. Email [[email protected]](/cdn-cgi/l/email-protection#14676164647b66605466717375783a7d7b) to request these.

## Requirements

### Configure SCIM for Regal

**Step 1:**  Click the **Sign On** Tab.

**Step 2:**  Ensure that **Application username format** is set to **Email**. If it is not, click **Edit**, navigate to **Credentials Details** and select **Email** from the dropdown before saving.

![713](https://files.readme.io/6dd355e-Screen_Shot_2021-12-17_at_9.24.12_AM.png "Screen Shot 2021-12-17 at 9.24.12 AM.png")

Set Application Username Format

**Step 3:** Click the **Provisioning** tab.

**Step 4:** Click the **Configure API Integration**.

![1023](https://files.readme.io/3fa0d81-Screen_Shot_2021-11-28_at_3.31.27_PM.png "Screen Shot 2021-11-28 at 3.31.27 PM.png")

Configure App

**Step 5:** Check the **Enable API Integration** box.

**Step 6:** A username and password is required to set up the integration. *Email [[email protected]](/cdn-cgi/l/email-protection#fe8d8b8e8e918c8abe8c9b999f92d09791) to get your username and password.*

**Step 7:** Enter the username and password provided and click **Test Connection**. You will see a success message if the credentials are valid.

![1025](https://files.readme.io/cf2bbf0-Screen_Shot_2021-11-28_at_3.35.13_PM.png "Screen Shot 2021-11-28 at 3.35.13 PM.png")

Test Connection

**Step 8:** After validating the connection, click **Save**.

**Step 9:** Click **Edit** and choose the SCIM features you would like to use. Click **Save** after all have been chosen.

![794](https://files.readme.io/274b4fb-Screen_Shot_2021-12-17_at_9.21.18_AM.png "Screen Shot 2021-12-17 at 9.21.18 AM.png")

Selecting SCIM Features

There are 4 required attributes that will be mapped to Regal users created through provisioning:

- User Name (**userName**, which will be the email of the user)
- First Name (**firstName**)
- Last Name (**lastName**)
- Email (**email**)

**userType** is a field that is required when assigning a user or a group to the Regal app. This *will not* be mapped from your Okta organization. Instead, this will need done at the time of provisioning. The value can be either **agent** or **admin** depending on the role of the agent.

### Assigning Regal App to Users and Groups

To assign users from your Okta organization to the Regal application:

**Step 1:** Navigate to **Applications > Applications** through the Okta sidebar when logged in to the admin dashboard.

**Step 2:** Click on **Regal**.

**Step 3**: Click on the **Assign** dropdown and choose whether you'd like to assign the application to Users or Groups.

![753](https://files.readme.io/eff4be2-Screen_Shot_2021-11-28_at_3.37.38_PM.png "Screen Shot 2021-11-28 at 3.37.38 PM.png")

Assigning Users to the Regal App

**Step 4:**

**If assigning to Users:**

- Go through the list of Users and click **Assign** to the ones you'd like to add to the application.
- After clicking **Assign**, choose a role for the User.
- Click **Save and Go Back**.
- Click **Done** once finished to assign the chosen users to the Regal app.

**If assigning to Groups:**

- Go through the list of Groups and click **Assign** to the ones you'd like to add to the application.
- After clicking **Assign**, choose a role for the Group.
- Click **Save and Go Back**.
- Click **Done** once finished to assign the chosen Groups to the Regal app.

![677](https://files.readme.io/83ade2a-Screen_Shot_2021-11-18_at_10.02.24_PM.png "Screen Shot 2021-11-18 at 10.02.24 PM.png")

Selecting a userType for Provisioned Users.

Once finished, users will be able to log into Regal through their Okta dashboard.

![765](https://files.readme.io/98a084c-Screen_Shot_2021-11-18_at_10.30.05_PM.png "Screen Shot 2021-11-18 at 10.30.05 PM.png")

Regal as displayed on the End User Dashboard

### Deprovisioning Users from Regal

To remove a Okta user's access to Regal:

**Step 1:** Navigate to **Applications > Applications** through the Okta sidebar when logged in to the admin dashboard.

**Step 2:** Click on **Regal**.

**Step 3:** Choose either **Users** or **Groups** from the left menu.

![1100](https://files.readme.io/34ddc07-Screen_Shot_2021-11-18_at_10.39.55_PM.png "Screen Shot 2021-11-18 at 10.39.55 PM.png")

Current Regal Assignments

**Step 4:** Click the **x** next to the User or Group you want to remove Regal access from.

**Step 5:**  Click **Ok** on the unassign confirmation dialog.

![737](https://files.readme.io/c9f5539-Screen_Shot_2021-11-28_at_3.47.09_PM.png "Screen Shot 2021-11-28 at 3.47.09 PM.png")

Confirm User Unassignment

The user or group has now been unassigned from Regal. They will no longer see it on their Okta dashboard or be able to log in to Regal.

## Known Issues/Troubleshooting

*If you have any issues setting up Okta, please email [[email protected]](/cdn-cgi/l/email-protection#fe8d8b8e8e918c8abe8c9b999f92d09791).*

Updated over 3 years ago

---
