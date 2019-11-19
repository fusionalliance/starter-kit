# Plan for Starter Kit(s)

_Contributors: Tim Gardner, Travis Moser (chair), David Ragsdale, Dustin Rea_

This document outlines the plan for providing consistent approaches to start up new projects at Fusion Alliance. Specific projects might require deviations from outlined starters, so none of the following is mandated in order to create a new project. The effort is split up into phases:

* **Phase 0** creates nearly universally applicable configuration and process for front end development. Opinionated configuration provided here will attempt to create a more seamless transition between front end projects. The focus will be on static HTML sites.

* **Phase 1** creates additional tooling and configuration for pre-rendering websites deployed as static HTML. It will build on Phase 0 artifacts while adding a more consistent developer experience (live-reloading development server, auto-injection of assets, etc.). It will introduce web best practices such as asset optimization and script bundling.

* **Phase 2** connects the opinionated configuration of Phase 0 to standard front end frameworks. It will include aid for choosing a framework and example use cases for each. Outcomes achieved during Phase 1 should be leveraged unless otherwise replaced by tooling specific to a framework. A generator will be created that can scaffold supported frameworks as well as non-framework sites as defined in Phase 1. Tests will be created that could be triggered by Continuous Integration.

* **Phase 3** establishes the full stack of a web application including web services and data backends. It should leverage all outcomes of Phase 2 in such a way that the resulting web server could be used to deploy all chosen websites utilizing front end frameworks and static deployment. Optional CI/CD pipelines will be created to provide a holistic solution for small-to-medium web applications.

At every phase, the following standards must be maintained:

* Intellectual Property of the starter kit(s) is either owned by Fusion Alliance, Creative Commons, or Public Domain.
* Compatibility with top 95% of web browser market share.
* No client information is disclosed in open source repositories.

The following subitems should be used to maintain visibility into starter kit development:

* Once a phase has begun, add `**Status**` to each item in phase.
* If a discussion happens regarding a particular item, add `Discussion: [link]`.
* If a Pull Request has been created for an item, add `PR: [link]`.
* If an item has a lack of consensus, create a PR subitem for each option. Add a subitem of `**Tabled**: [description]` with a description of the disagreement. This should be discussed with wider input or at a dedicated meeting.

## Phase 0: Universal Configuration (released 2019-11-18)

Starting from scratch, create standard configuration that can be used with almost every web project.

* Environment configuration
  - `.editorconfig`
  - `.gitignore`
* Javascript configuration
  - `.eslintrc.js`
  - `.eslintignore`
* Stylesheet configuration
  - Sass architecture specifications (e.g. 7+1, @use vs. @import)
  - `.stylelintrc.js`
* Lint scripts
  - `eslint`
  - `stylelint`
* Documentation
  - `README.md`
    - Standard data formats
  - `CHANGELOG.md`
  - Versioning strategy
  - Contribution instructions


## Phase 1: Pre-rendered Static Websites

Create a consistent developer experience for projects requiring a static website deployment.

* Development server
  - Live-reload
  - Preview of static build
  - **Status**: Pending
* Update strategy
  - version control
  - merge workflow (e.g. Gitflow)
  - **Status**: Pending
* Build process
  - HTML pre-rendering
  - Script bundling
  - CSS pre-processing
  - Image optimization
  - Minification
  - **Status**: Pending
* Quality assurance
  - Accessibility (e.g. pa11y)
  - Lint scripts
  - Functional testing process and reviews
  - Automated testing framework(s), configuration, and usage example(s) (e.g. Jest, Cypress.io)
  - **Status**: Pending

## Phase 2: Front End Frameworks

Use generator to apply configuration to front end frameworks.

* Aid for choosing a framework
  - Changelog within the document
  - List of recommended frameworks (including no-framework option)
  - Strengths and weaknesses of each framework
* _Each framework_
  - Dev server working with the framework
  - Configuration applied to framework via utility
  - Automated testing scripts

## Phase 3: Full Stack Applications

Add standard backend including web services and data storage.

* Web server
  - Serve static sites
  - Serve SPAs
  - 404 handling
* Web services
  - Service specification
  - Web form validation
  - Data population service
  - CRUD services
* Database
  - Could be run on web server or separate server
  - Configuration can be read by web services
* CI/CD Pipelines
  - Auto-deployment from master branch
  - Automated testing run on Pull Requests
