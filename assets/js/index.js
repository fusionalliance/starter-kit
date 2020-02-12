import DataService from './DataService.js';
import components from './addAllComponentsHere';
import handleClick from './handleClick.js';
import './scss';

const loadEverything = (options) => {
  // Functions available to html event handlers (e.g. onclick)
  window.app = {
    ...options,
  };

  components.forEach((component) => component());
};

loadEverything({
  dataService: new DataService(),
  handleClick,
  option1: 'Value 1',
  option2: 'Value 2',
});
