# Fusion Starter Kit

Enforcing a consistent approach to start up new projects at Fusion Alliance.

## Table of Contents

- [Summary](#summary)
- [Features](#features)
- [Roadmap](#roadmap)
- [Requirements](#requirements)
- [Usage](#usage)
- [FAQ](#faq)
- [Contributing](#contributing)
- [License](#license)

## Summary

A 1-2 paragraph summary of the project. Subsections should be added if there are
multiple goals for the project, e.g. public-facing site and administrative features.
The scope for the project should be described here or linked to.

## Requirements

Provide link to a requirements document if it exists.

## Usage

### Install

Needed for running the site locally:

1. [Node.js](https://nodejs.org/en/download/)
1. A code editor that supports EditorConfig, or [install the EditorConfig
   extension for you code editor](https://editorconfig.org/#download)

### Scripts

- **Install server and website**: `npm install`
- **Develop locally**: `npm run dev`, then go to "localhost:8080"
- **Build**: `npm run build`
- **Watch for lint**: `npm run dev`
- **Run tests**: `npm test`

### Deployment

1. Install the project
1. Build the project
   > `npm run build`
1. Copy the built files from `public` to the production server.

## FAQ

If your question is not answered here, please send questions to [insert email
address here].

## Contributing

[Pull requests](https://www.atlassian.com/git/tutorials/making-a-pull-request)
are welcome. For major changes, please open an issue first to discuss what you
would like to change. Pull requests should follow
[Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
See the previous link for an in-depth explanation, however the highlights are
illustrated below:

- the `master` branch ALWAYS reflects the code in production
- a `develop` branch reflects stable changes that are not in production.
- `feature` branches hold development of added, changed, or removed features,
  following pattern of `feature/123-feature-name` for features linked to
  task/story/requirement numbers and `feature/feature-name` when
  tasks/stories/requirements do not have numbers
- `bugfix` branches hold bug fixes grouped with a larger release, following
  pattern of `bugfix/123-bug-name` for features linked to bug tracking numbers
  and `bugfix/bug-name` when bugs do not have numbers
- `release` branches hold the state of a `develop` branch while it is prepped
  for release, following pattern of `release/v1.2.3` matching the version number
  inside `package.json` and `CHANGELOG.md`
- `hotfix` branches hold bug fixes inteded to be implemented by themselves,
  following pattern of `hotfix/v1.2.3` matching the version number inside
  `package.json` and `CHANGELOG.md`
- `feature` and `bugfix` branches are created from `develop` and get merged back
  into `develop`
- `release` branches are created from `develop` and always get merged into
  `master` AND `develop`
- `hotfix` branches are created from `master` and get merged into `master` AND `develop`
- Don't forget to update the CHANGELOG!

## License

[MIT](https://choosealicense.com/licenses/mit/)
For more information see [LICENSE](https://github.com/quicksolutions/starter-kit/blob/master/LICENSE)
