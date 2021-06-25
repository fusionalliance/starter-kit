module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  // plugins: [
  //   'react',
  // ],
  globals: {
    app: true,
    document: true
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
  overrides: [
    {
      files: [ '**/template/**' ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off'
      }
    }
  ]
};
