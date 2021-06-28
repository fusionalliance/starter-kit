const getMfs = require('./getMfs');

module.exports = function transform(srcPath, captureRegExp, replacerString) {
  const mfs = getMfs();
  return new Promise((resolve, reject) => {
    try {
      const content = mfs.read(srcPath);
      const newContent = content.replace(captureRegExp, replacerString);
      mfs.write(srcPath, newContent);
      mfs.commit(() => resolve());
    } catch (err) {
      reject(err);
    }
  });
};
