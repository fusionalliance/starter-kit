module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'max-len': ['error', 200, {
      'ignoreComments': true,
    }],
  },
  globals: {
    app: true,
    document: true
  },
  overrides: [
    {
      files: [ '**/template/**' ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
