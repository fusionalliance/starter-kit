const getMfs = require('./getMfs');

module.exports = function readJson(filepath, options) {
  const mfs = getMfs();
  return new Promise((resolve) => {
    const json = mfs.readJSON(
      filepath,
      options,
    );
    resolve(json);
  });
};
