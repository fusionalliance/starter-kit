module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'max-len': ['error', 100, {
      'ignoreComments': true,
    }],
  },
  globals: {
    app: true,
    document: true
  },
};
