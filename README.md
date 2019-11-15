# Fusion Starter Kit
Enforcing a consistent approach to start up new projects at Fusion Alliance.

## Table of Contents
- [Objectives](#objectives)
- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)
- [FAQ](#faq)
- [Contributing](#contributing)
- [License](#license)

## Objectives
- Maintain consistent tooling across projects
- Enforce standards
- Accelerate project start-up

## Features
- Code formatting enforced with EditorConfig
- JS linting with ESLint + AirBnB
- Sass (SCSS) + Stylelint > CSS

## Requirements
- A code editor that supports EditorConfig, or [install the EditorConfig extension for you code editor](https://editorconfig.org/#download)

## Usage

### SCSS
- Generally follow [Sass Guidelines](https://sass-guidelin.es) for code style and best-practices
- SCSS style is enforced with [stylelint-scss](https://github.com/kristerkari/stylelint-scss) + [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss)
  - All SCSS files are linted EXCEPT for files in the `/assets/scss/vendors/` directory
  - Rules can be overriden by adding exceptions to the `.stylelintrc.json` file. [See the docs for more details](https://github.com/kristerkari/stylelint-config-recommended-scss#extending-the-config).
- Uses the [The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern) for architecture


## FAQ


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
For more information see [LICENSE](https://github.com/quicksolutions/starter-kit/blob/master/LICENSE)