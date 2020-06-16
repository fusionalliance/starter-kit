# Functional Testing Process

This document provides a basic framework for how to conduct general functional
end-to-end testing of a project, and what artifacts should be generated as part
of the process.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Process](#process)
- [Important Notes](#%EF%B8%8F-important-notes)
- [Templates](#templates)

## Prerequisites

- There must be defined, itemized functional requirements for the project. You
  may use [this template](./templates/functional-requirements-template.xls) to
  create them if they are not documented.
- Testing the project must not introduce bad data to the production environment.
- Development for each requirement must be complete.

## Process

This is the general process for functionally testing a project.

1. Create a document which outlines all steps required by a user to validate
   each functional requirement for a given feature.
1. Document the expected result or output for each specific step.
1. Perform each step, acting as a user of your project.
1. Document the actual result or output for each specific step.
1. If all actual results match all expected results, the feature is validated
   and testing passes. If not all actual results match the expected results,
   the feature has failed testing, and each failure should be tracked as a bug
   ticket.
   - If no formal bug-tracking exists for the project, a spreadsheet which
     itemizes each bug in a client-shared folder or Fusion Teams will suffice.

At the end of running a round of tests, each functional requirement of the
project should be either validated or invalidated, and there should
be actionable bugs for each of the failures.

## ⚠️ IMPORTANT NOTES

- **Revise all test scripts to keep them up to date as requirements change during
the life of the project.**
- **Re-run any test script after bug fixes are implemented.**
- **Re-run any test script that covers a feature which changes to detect
  potential regressions.**

## Templates

- [functional-requirements-template.xlsx](./templates/functional-requirements-template.xlsx)
- [functional-test-script-template.docx](./templates/functional-test-script-template.docx)
