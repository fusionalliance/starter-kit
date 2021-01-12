# Fusion Starter Kit

Enforcing a consistent approach to start up new projects at Fusion Alliance.

## Table of Contents

- [Objectives](#objectives)
- [Features](#features)
- [Roadmap](#roadmap)
- [Requirements](#requirements)
- [Usage](#usage)
- [FAQ](#faq)
- [Contributing](#contributing)
- [License](#license)

## Objectives

- Maintain consistent tooling across projects
- Enforce standards
- Accelerate project start-up
- Outline delivery quality processes

## Features

- Quick creation site boilerplates using several different frameworks.
- Code formatting enforced with EditorConfig
- JS linting with ESLint + AirBnB
- Sass (SCSS) + Stylelint > CSS
- Markdown linting
- Delivery quality [processes + templates](./docs/)

## Roadmap

A separate [Roadmap doc](ROADMAP.md) has been created to manage the phases of
development on this starter kit.

## Requirements

- A code editor that supports EditorConfig, or
  [install the EditorConfig extension for you code editor](https://editorconfig.org/#download)

## Usage

### Local starter kit development

- Before using please understand:
  - Starter Kit can be thought of as a "utility" that is installed on your computer that helps you to create new website projects.
  - Once installed, when you run Starter Kit it will scaffold a basic app that adheres to the goals in the #Objectives and #Features sections above.
  - The starter-kit repo itself is not meant to used as an website/app repo.

Directions to use:

1. Clone the starter-kit repo to your machine.
2. In the fusion starter-kit repo run `npm link`. This will create an alias to the Starter Kit so that it can be run from anywhere. Think of it as a Starter Kit "utility".
3. From a command line, navigate to where you want to create a new web project. For most developers they have a folder (i.e. "sites" or "projects") where they keep many projects.
4. You can now run `fusion-starter-kit` in the command line to run the package.
5. The starter kit utility will ask you questions:
   - Which framework you would like to use - select one
   - What to name your project
   - All other questions can be answered with the default by pressing Enter
6. Wait for it to finish running
7. In the command line, change to the folder for the new project.
8. Run `npm install`.
9. Your project is now ready to start using for development.
10. You can run it with `npm run dev`.

### As a package

TODO: Package needs to be on npm or something

### Scripts

- **Install server and website**: `npm install`
- **Develop locally**: `npm run dev`
- **Build**: `npm run build`
- **Watch for lint**: `npm run dev`
- **Run tests**: `npm test`

### SCSS

- Uses the [The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern) for architecture
- Generally follows [Sass Guidelines](https://sass-guidelin.es/#the-7-1-pattern)
  for code style
- See the [SCSS README](assets/scss/README.md) for more information

## FAQ

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
For more information see [LICENSE](https://github.com/quicksolutions/starter-kit/blob/main/LICENSE)
