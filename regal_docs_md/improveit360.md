# Improveit360

> ## 🚧
>
> Follow the [Salesforce guide](https://developer.regal.io/docs/salesforce) before proceeding with the steps outlined in this guide.

Once you have installed the Regal Voice Salesforce app and completed the necessary configurations in the guide, you may proceed with the remaining steps specific to Improveit360.

The Improveit360 relies on Salesforce flows to send data to Regal from non standard Salesforce objects (i.e. Improveit360 objects).

## Create new permission set in Salesforce

1. Once you are logged in as a System Admin, navigate to "Set Up"
2. Click into "Permission Sets" by searching in the search bar

![](https://files.readme.io/27e8848-CleanShot_2024-07-22_at_15.04.472x.png)

3. Click the "New" button and Create a Permission Set called "RVNamedCredentials"

   1. Label: RVNamedCredentials
   2. API Name:
   3. Click Save![](https://files.readme.io/ee013cb-image.png)
4. Add yourself and any other team members to the new permission set

   1. Click Manage Assignments on the "RVNamedCredentials" screen
   2. Add Assignment
   3. Select the user that has been configured to run the Salesforce Flows
      1. Note: We've found that all Salesforce users need to be added to this permission set for it to work for everyone making changes in Salesforce
   4. Click Next
   5. Click Assign
   6. Click Done

## Create a new External Credential in Salesforce

1. Navigate to Setup > SETTINGS > Security > Named Credentials
2. Click on the "External Credentials" tab and click "New"

![](https://files.readme.io/a5d90aa-image.png)
  

1. Create New External Credential

   1. Label: regalCustomEventsAPIext
   2. Name: regalCustomEventsAPIext
   3. Authentication Protocol: Custom
   4. Click Save
2. Scroll down to the Principals section, click "New"

   1. Parameter Name: RVPrincipal1
   2. Sequence Number: 1
   3. Authentication Parameters
      1. Parameter 1
         1. Name: authorization
         2. Value:
3. Scroll down to the Custom Headers section and click "New"

   1. Name: authorization
   2. Value:
   3. Click Save![](https://files.readme.io/6dc5622-image.png)
4. Now, navigate to Setup > ADMINISTRATION > Users > Permission Sets
5. Click on RVNamedCredentials
6. Click on the External Credential Principal Access link
7. Click Edit
8. Add the regalCustomEventsAPIext
9. Click Save

> ## 📘
>
> TROUBLESHOOTING: If needed, ensure that the perm set has access to the standard object : "User External Credentials"

## Create a new Named Credential in Salesforce

1. Navigate to Setup > SETTINGS > Security > Named Credentials
2. Click on the "Named Credentials" tab and click "New"
3. Create New Named Credential using the blow info

   1. Label: regalCustomEventsAPI
   2. Name: regalCustomEventsAPI
   3. URL: <https://events.regalvoice.com>
   4. CHECK 'Enabled for Callouts'
   5. External Credential: regalCustomEventsAPIext
   6. UNCHECK 'Generate Authorization Header'
   7. Click Save![](https://files.readme.io/6de1fd7-CleanShot_2024-07-22_at_15.30.282x.png)

## Create a new External Service in Salesforce

1. Navigate to Setup > PLATFORM TOOLS > Integrations > External Services
2. Click "Add an External Service"
3. Create a new external service using the below information

   1. Choose 'From API Specification'
   2. Click "Next"
   3. External Service Name: regalCustomEventsAPIservice
   4. Service Schema: Complete Schema
   5. Select a Named Credential: regalCustomEventsAPI
   6. JSON: 
      1. [Example JSON](https://regalvoice.slab.com/posts/external-example-salesforce-event-flow-json-m99gmgwk?shr=cfgawwhF1BY3vvSwmwdy7igf)
      2. You can customize the JSON to add additional custom event & contact properties. If you have additional questions reach out to [[email protected]](/cdn-cgi/l/email-protection#90e3e5e0e0ffe2e4d0e2f5f7f1fcbef9ff)
   7. Click "Save" & "Next"
   8. Check the box for 'postEvents'
   9. Click Next
   10. Click Done/Finish

   ![](https://files.readme.io/10db79a-CleanShot_2024-07-22_at_18.56.582x.png)

   ## Build a Salesforce Flow

   Flows allow you to build highly customizable back end jobs & integrations. We'll be using Flows to send data from i360 custom object to Regal's Events API to trigger journeys.

> ## 📘
>
> Note: The trigger steps below are for example purposes only; you'll want to choose the appropriate trigger and conditions.

1. Confirm that you are configured as the 'Default Workflow User' (PLATFORM TOOLS > Process Automation > Process Automation Settings)
2. Launch Flows (Setup > PLATFORM TOOLS > Process Automation > Flows)

   1. Click "New Flow"
   2. Choose "Build from Scratch" > "Record-Triggered Flow" and click Create
   3. For Select Object, search for and choose 'Lead"
   4. For Configure Trigger, choose "A record is updated"
   5. For Set Entry Conditions:

      1. Condition Requirements: All Conditions Are Met (AND)
      2. Field: City
      3. Operator: Is Changed
      4. Value: {!$GlobalConstant.True}
   6. When to Run the Flow for Updated Records:

      1. Every time a record is updated and meets the condition requirements
   7. For Optimize the Flow for, choose "Actions and Related Records"
   8. Check the box for 'Include a Run Asynchronously path to access an external system after the original transaction for the triggering record is successfully committed'

      1. This will prevent Salesforce from slowing down by allowing the API call to be sent to Regal asynchronously.
   9. Click Done
   10. Click Save (so we don't lose our work)

       1. Flow Label: TestAPICallToRegal1
       2. Flow API Name:
       3. Description:
       4. Click Save
       5. Close the 'Review these issues' modal since you are only getting it since we haven't actually added enough items yet.![](https://files.readme.io/da5d072-CleanShot_2024-07-22_at_19.03.552x.png)
3. Open the Flow Toolbox in the top left corner and click "New Resource"

   1. Resource Type: Variable
   2. API Name: RVBodyApex
   3. Description:
   4. Data Type: Apex-Defined
   5. UNCHECKED Allow multiple values (collection)
   6. Apex Class: search for 'regal' and choose 'ExternalService\_\_regalCustomEventsAPIservice\_postEvents\_IN\_body'
   7. CHECKED Available for input
   8. CHECKED Available for output
   9. Click Done![](https://files.readme.io/b9bd8aa-CleanShot_2024-07-22_at_19.06.202x.png)
4. Click the "+" for the "Run Asynchronously" path

   1. Choose the 'Assignment' element
   2. Label: setRVBodyApex
   3. API Name:
   4. Description:
   5. Set Variable Values
      1. Variable: {!RVBodyApex.traits.phone}
      2. Operator: Equals
      3. Value: {!$Record.Phone}
         1. Note: if Phone is not in the proper format, you may need to set another variable to properly format it
      4. Variable: {!RVBodyApex.name}
      5. Operator: Equals
      6. Value: <this will be a static value containing the name of the event that you want to send to Regal; e.g. Conversion Event>
   6. Click "Done"![](https://files.readme.io/325efcb-image.png)
5. Below the 'Assignment' element, click the +

   1. Choose the 'Action' element
   2. Search for 'external' and you should see the external service that you set up earlier; choose it (postEvents)

      1. Label: callToRegal1
      2. API Name:
      3. Description:
      4. Set Input Values
         1. body - Include
         2. {!RVBodyApex}
         3. Advanced
            1. Unchecked 'Manually assign variables'
         4. Click "Done"
         5. Click "Save"
         6. Click "Activate"![](https://files.readme.io/c191840-image.png)

> ## 🚧
>
> Ensure you test your flow to verify that events are reaching Regal.

Updated 11 months ago

---

What’s Next

Ensure you have tested your integration End 2 End
