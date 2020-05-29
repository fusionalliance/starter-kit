/* eslint-disable */
import FPOGIF from '../img/fpo-test.gif';
import FPOJPG from '../img/fpo-test.jpg';
import FPOPNG from '../img/fpo-test.png';
import FPOSVG from '../img/fpo-test.svg';
import FPOWEBP from '../img/fpo-test.webp';

const imageGif = new Image();
imageGif.src = FPOGIF;

const imageJpg = new Image();
imageJpg.src = FPOJPG;

const imagePng = new Image();
imagePng.src = FPOPNG;

const imageSvg = new Image();
imageSvg.src = FPOSVG;

// const imageWebp = new Image();
// imageWebp.src = FPOWEBP;

import components from './addAllComponentsHere.js';
import eventHandlers from './addEventHandlersHere.js';
import services from './addServicesHere.js';

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
