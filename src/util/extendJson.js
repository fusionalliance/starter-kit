const getMfs = require('./getMfs');

module.exports = function extendJson(srcPath, contents) {
  const mfs = getMfs();
  return new Promise((resolve) => {
    mfs.extendJSON(
      srcPath,
      contents,
    );
    mfs.commit(() => resolve());
  });
};
