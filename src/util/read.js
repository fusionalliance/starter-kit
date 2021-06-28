const getMfs = require('./getMfs');

module.exports = function read(filepath, options) {
  const mfs = getMfs();
  return new Promise((resolve) => {
    const content = mfs.read(
      filepath,
      options,
    );
    resolve(content);
  });
};
