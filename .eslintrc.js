module.exports = {
  extends: 'airbnb-base',
  rules: {
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
  },
  globals: {
    document: true
  }
};
