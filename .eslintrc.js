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
  },
  globals: {
    document: true
  },
};
