# Amazon S3

Regal can publish data directly to an Amazon S3 bucket, so that you can easily pull down the CSV file directly onto your computer or your data engineering team can easily bring the data into your reporting database.

## Configure Your Amazon S3 Bucket

1. Set up a bucket in Amazon S3 for Regal to send your data to

(Optional) Create a path inside the bucket where you want your data delivered

2. Email [[email protected]](/cdn-cgi/l/email-protection#f3808683839c8187b3819694929fdd9a9c) with the following:
   1. Your bucket ARN (in the form `s3://<bucket name>/<dir>`)
   2. Your AWS Key
   3. Your AWS Secret Key
   4. Your AWS Region
   5. Which of the "Available Tables" from the following section you want included. Additionally what schedule you want the data delivered (ie: Daily, Weekly, Hourly)

**To securely share your AWS Secret Key, please make sure to first use <https://pwpush.com/>.**

## Data Available via S3

Regal makes the following data available via S3:

| Dataset | Description |
| --- | --- |
| Daily created tasks | A record for every task created in the last 24 hours |
| Daily completed tasks | A record for every task dispositioned by an agent in the last 24 hours |
| Daily created messages | A record for every message sent in the last 24 hours, including customer messages received, agent messages sent and automated messages sent |

> ## 📘
>
> Custom Request
>
> If Regal does yet support a data destination or set of events you need, you can email [[email protected]](/cdn-cgi/l/email-protection#364543464659444276445351575a185f59) to request additional data be sent to S3.

Updated over 2 years ago

---
