const path = require('path');

module.exports = function destinationPath(folder = '') {
  return path.join(process.cwd(), folder);
};
