const getMfs = require('./getMfs');

module.exports = function copy(srcPath, destinationPath, options = { globOptions: { dot: true } }) {
  const mfs = getMfs();
  return new Promise((resolve) => {
    mfs.copy(
      srcPath,
      destinationPath,
      options,
    );
    mfs.commit(() => resolve());
  });
};
