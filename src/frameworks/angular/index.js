// const fse = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');

/* eslint-disable no-useless-escape */
// const packageJsonScripts = {
//   scripts: {
//     stylelint: 'stylelint \"src/assets/scss/**/*.scss\"',
//     lint: 'vue-cli-service lint && npm run stylelint',
//   },
// };
/* eslint-enable */

module.exports = async function angular() {
  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Enter the folder name for your project',
  });

  // saying no to strict mode https://angular.io/guide/strict-mode
  await this.asyncCommand('npx', ['@angular/cli@11.x', 'new', projectName, '--routing', '--no-strict', '--style', 'scss']);
  process.chdir(projectName); // change directory to new folder

  this.log('Copying common files');
  await this.copy(
    path.join(__dirname, '../common'),
    this.destinationPath(),
  );

  // this.log('Copying template files');
  // await this.copy(
  //   path.join(__dirname, './template'),
  //   this.destinationPath(),
  // );
};
