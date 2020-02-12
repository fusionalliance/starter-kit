import DataService from './DataService.js';
import exampleComponent from './exampleComponent.js';
import handleClick from './handleClick.js';
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

  // Functions available to html event handlers (e.g. onclick)
  return {
    handleClick: handleClick(opts),
  };
};

window.app = context({
  dataService: new DataService(),
  option2: 'Overridden value 2',
});
