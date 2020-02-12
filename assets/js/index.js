
import components from './addAllComponentsHere.js';
import eventHandlers from './addEventHandlersHere.js';
import services from './addServicesHere.js';
import './scss';

const loadEverything = (options) => {
  // Functions available to html event handlers (e.g. onclick)
  window.app = {
    ...options,
    ...eventHandlers,
  };

  Object.keys(services).forEach((serviceName) => {
    window.app[serviceName] = new services[serviceName]();
  });

  components.forEach((component) => component());
};

// If you need to wait for jQuery or something, call this inside of a jQuery ready event.
loadEverything({
  // Global values, such as unsecured environment variables replaced at build-time
  option1: 'Value 1',
  option2: 'Value 2',
});
