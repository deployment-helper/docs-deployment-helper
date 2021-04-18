---
title: Wire frames
---

What user will need for deployment

* A template
* A deployment platform and strategy

What user inputs will require

* Template selection
* Deployment platform and strategy selection
* Platform tokens for deployment

## What will be a template structure

A Template will be have all initial code of the project with

* deployment information
* what need to be replaced with

## Deployment file/folder

Deployment file will have information about

* Supported deployment platforms
* Supported tags
* Required credentials
* Required pre-requisites[repo, database, other services]
* Supported deployment engine
* Template meta-data
* Deployment engine definition[ ::TODO::]

## How to list and manage templates?

Management: Use a github project to manage all templates

Listing: We will use a JSON file to list all templates and JSON file will be generated automatically by scrapping all available repositories.

### How this will help?

* To follow open standards
* To track template changes
* To incorporate open-source templates(By Forking in this project)

### Template stats management

How we will manage a template stats like

* Total number of deployments till today
* Last deployment status
* Deployment stats

## User Journeys

* User want to see all current and previous deployment status[Dashboard]
* User want to see all logs of the deployment
* User want to trigger a new deployment
* User want to save credentials for future deployments
* User want to check status of supported services/platforms
* User want to log an issue related to template deployment
