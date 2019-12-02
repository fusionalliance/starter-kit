// Require CSS & SCSS to include in bundle
require('../scss/app.scss');

function loadExampleComponent({ option2 }) {
  const componentSelector = '.example-component';
  const exampleComponents = document.querySelectorAll(componentSelector);
  exampleComponents.forEach((component) => {
    const componentEl = component;
    componentEl.innerText = option2;
  });
}

const context = (options = {}) => {
  const defaultOptions = {
    option1: 'Value 1',
    option2: 'Value 2',
  };

  const opts = {
    ...defaultOptions,
    ...options,
  };

  // eslint-disable-next-line no-console
  console.log(`Options supplied: ${Object.keys(options).join(', ')}`);
  // eslint-disable-next-line no-console
  console.log(opts);

  loadExampleComponent(opts);
};

context({
  option2: 'Overridden value 2',
});
