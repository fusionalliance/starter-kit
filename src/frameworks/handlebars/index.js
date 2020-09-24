const fse = require('fs-extra');
const path = require('path');

// TODO: Put npm scripts back into package json
//  "lint": "npm run eslint && npm run stylelint && npm run markdownlint",
// "eslint": "eslint \"assets/js/**/*.js\"",
// "stylelint": "stylelint \"assets/scss/**/*.scss\"",

/* TOOD:

1. copy files
2. Install package.json scripts
3. Cleanup

*/

module.exports = async function handlebars() {
  this.log('Coyping templates');
  await this.copy(
    path.join(__dirname, './template'),
    this.destinationPath(),
  );

  const packageJsonExists = await fse.pathExists(this.destinationPath('package.json'));
  if (!packageJsonExists) {
    this.log('No package.json exists. Runnint npm init');
    await this.asyncCommand('npm', ['init']);
  }
};
