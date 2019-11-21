// Require CSS & SCSS to include in bundle
require('../scss/app.scss');

const context = (options = {}) => {
  const defaultOptions = {
    option1: 'Value 1',
    option2: 'Value 2',
  };

  const opts = {
    ...defaultOptions,
    ...options,
  };

  console.log(`Options supplied: ${Object.keys(options).join(', ')}`);
  console.log(opts);
};

context({
  option2: 'Overridden value 2',
});
