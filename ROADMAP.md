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

## Phase 0: Universal Configuration

These changes were implemented in https://github.com/quicksolutions/starter-kit/pull/1.

Starting from scratch, create standard configuration that can be used with almost every web project.

* Environment configuration
  - `.editorconfig` ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - `.gitignore` ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - **Status**: Complete
* Javascript configuration
  - `.eslintrc.js` ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - `.eslintignore` ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - **Status**: Complete
* Stylesheet configuration
  - Sass architecture specifications (e.g. 7+1, @use vs. @import) ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - `.stylelintrc.js` ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - **Status**: Complete
* Lint scripts
  - `eslint` ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - `stylelint` ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - **Status**: Complete
* Documentation
  - `README.md` ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
    - Standard data formats
  - `CHANGELOG.md` ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - Versioning strategy ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - Contribution instructions ~~[#1](https://github.com/quicksolutions/starter-kit/pull/1)~~
  - **Status**: Complete

## Phase 1: Pre-rendered Static Websites

Create a consistent developer experience for projects requiring a static website deployment.

* Development server
  - Live-reload ~~[#9](https://github.com/quicksolutions/starter-kit/pull/9)~~
  - Preview of static build ~~[#9](https://github.com/quicksolutions/starter-kit/pull/9)~~
  - **Status**: In progress.
* Update strategy
  - version control ~~[#8](https://github.com/quicksolutions/starter-kit/pull/8)~~
  - merge workflow (e.g. Gitflow) ~~[#8](https://github.com/quicksolutions/starter-kit/pull/8)~~
  - **Status**: Done.
* Build process
  - HTML pre-rendering ~~[#9](https://github.com/quicksolutions/starter-kit/pull/9)~~
  - Script bundling ~~[#9](https://github.com/quicksolutions/starter-kit/pull/9)~~
  - CSS pre-processing ~~[#9](https://github.com/quicksolutions/starter-kit/pull/9)~~ ~~[#11](https://github.com/quicksolutions/starter-kit/pull/11)~~
  - Image optimization
  - Minification ~~[#9](https://github.com/quicksolutions/starter-kit/pull/9)~~
  - **Status**: In review. HBS, JS, and SCSS builds complete. Image optimization pending.
* Quality assurance
  - Accessibility (e.g. pa11y)
  - Lint scripts ~~[#12](https://github.com/quicksolutions/starter-kit/pull/12)~~
  - Commit hooks (e.g. Husky, prettier, eslint fix) ~~[#12](https://github.com/quicksolutions/starter-kit/pull/12)~~
  - Functional testing process and reviews
  - Automated testing framework(s), configuration, and usage example(s) (e.g. Jest, Cypress.io) ~~[#13](https://github.com/quicksolutions/starter-kit/pull/13)~~
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
