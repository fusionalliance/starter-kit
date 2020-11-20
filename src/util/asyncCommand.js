const spawn = require('cross-spawn');

const spawnCommand = (command, args, opt = {}) => spawn(
  command, args, { ...{ stdio: 'inherit' }, ...opt },
);

module.exports = function asyncCommand(command, args) {
  return new Promise((resolve, reject) => {
    spawnCommand(command, args)
      .on('close', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      })
      .on('exit', () => {
        // Exit fires before close. Do nothing here for now.
      });
  });
};
