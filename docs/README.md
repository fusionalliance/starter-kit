# Delivery Quality

This document describes some basic processes to follow to ensure delivery of
quality projects.

## Code Reviews

**Each changeset should be reviewed by a peer and refined till it is considered
approved.** This process can take many different forms, in Github, Bitbucket,
CodeCommit this can be formal Pull Request reviews. You can
[review some general guidelines here](https://github.com/thoughtbot/guides/tree/master/code-review).

If you are alone on a project you can solicit feedback from the
[Code Review Requests](https://teams.microsoft.com/l/channel/19%3a8929835273204ea2b478e82e83157d6f%40thread.skype/Code%2520Review%2520Requests?groupId=b761a911-128d-4f51-8927-d148840882e6&tenantId=4a042743-373a-43d2-827b-003f4c7ba1e5)
channel in Fusion Teams.

## Testing

### Unit Tests

Unit tests should be incorporated to test business logic of the application. This
starter kit includes Jest, which is a good tool for unit-testing JavaScript-based
projects, but does not include any example unit tests. Jest will run
automatically when running the command `npm run test`.

### Functional Testing

Testing the project's functional requirements has been [outlined here](./functional-testing-process.md).

### Accessibility Testing

This starter kit includes some automated accessibility tests from `Pa11y` which
give some basic guidance on covering general accessibility cases. These tests
can be run by running `npm run test:accessibility`.
