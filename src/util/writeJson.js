const getMfs = require('./getMfs');

module.exports = function extendJson(srcPath, contents, replacer, spacer) {
  const mfs = getMfs();
  return new Promise((resolve) => {
    mfs.writeJSON(
      srcPath,
      contents,
      replacer,
      spacer,
    );
    mfs.commit(() => resolve());
  });
};
