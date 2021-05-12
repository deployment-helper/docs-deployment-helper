---
title: Template Management
---

We are using two type of templates 

* Code Templates
* DevOps Templates

## Objective

* Should be a Git repo
* Need to be listed on web platform
* Should support sorting and filtering of templates
* Should provide detailed templates description

### Listing and sorting

We need bellow information to provide listing, sorting and filtering of the templates

| InfoType | Information Source | Comment |
|----------|--------------------|---------|
| name     | Github repo title  |         |
| sortDesc | Github repo desc   |         |
| author   | Github repo creator user details| |
| supportedPlatform | Github tags| |
| templateIcon | Github| `logo.png` images in readme file|

### Detailed templated description

Detailed template description will be the content of `README.md` file.

## Development Details

* We need a platform to crawl provided repositories and organizations.
platform will push this collected information to respective stream for further work.
* We need scheduled and trigger based runner for this platform

### Development References

| Reference| Link | Comment|
|----------|------|--------|
| Gtihub Repo | https://github.com/deployment-helper/api-template-crawler | 