# Personal Portfolio Website

Built using React, Tailwind CSS, and Vite.

## Deployment
- Register new domain name on AWS Route 53
- Create a new AWS ACM certificate using the new domain name
- Create AWS CloudFront distribution for distributing the website
- Connect the CloudFront distribution to the S3 bucket
- Create a new AWS Route 53 record set for the new domain name and point it to the CloudFront distribution


### Deployment Stack
- AWS Route 53
- AWS ACM
- AWS S3 Buckets
- AWS CloudFront