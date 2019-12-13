import exampleComponent from './exampleComponent.js';
import './scss';

const components = [
  exampleComponent,
];

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

  components.forEach((component) => component(opts));
};

context({
  option2: 'Overridden value 2',
});
