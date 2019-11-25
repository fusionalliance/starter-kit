"use strict";

// plugins:
//   https://github.com/kristerkari/stylelint-scss
// extends:
//   https://github.com/stylelint/stylelint-config-recommended
//   https://github.com/stylelint/stylelint-config-standard
//   https://github.com/kristerkari/stylelint-config-recommended-scss
// ignoreFiles:
//   We won't lint vendor files (Normalize, Bootstrap, etc...)
// rules:
//   Overrides to allow properly formatted @if/@else blocks. See:
//     https://sass-guidelin.es/#conditional-statements
//   Override rules adapted from:
//     https://github.com/kristerkari/stylelint-scss/blob/master/docs/examples/if-else.md

module.exports = {
  plugins: [
    "stylelint-scss"
  ],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-standard",
    "stylelint-config-recommended-scss"
  ],
  ignoreFiles: [
    "assets/scss/vendors/**/*"
  ],
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        "except": [
          "blockless-after-same-name-blockless",
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ],
        "ignoreAtRules": [
          "else"
        ]
      }
    ],
    "block-closing-brace-newline-after": [
      "always",
      {
        "ignoreAtRules": [
          "if",
          "else"
        ]
      }
    ]
  }
}
