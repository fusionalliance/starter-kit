const DataService = require('./DataService');
const handleClick = require('./handleClick');

const context = (options = {}) => {
  const defaultOptions = {
    option1: 'Value 1',
    option2: 'Value 2',
  };

  const opts = {
    ...defaultOptions,
    ...options,
  };

  const {
    dataService,
  } = opts;

  console.log(`Options supplied: ${Object.keys(options).join(', ')}`);
  console.log(opts);

  return {
    handleClick: handleClick.bind(null, dataService),
  };
};

window.app = context({
  option2: 'Overridden value 2',
  dataService: new DataService(),
});
