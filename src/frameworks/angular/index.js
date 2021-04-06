const inquirer = require('inquirer');
const path = require('path');

/* eslint-disable no-useless-escape */
const packageJsonScripts = {
  scripts: {
    stylelint: 'stylelint \"**/*.scss\"',
    lint: 'ng lint && npm run stylelint',
  },
};
/* eslint-enable */

const dependencies = {
  dependencies: {
  },
  devDependencies: {
    stylelint: '^11.1.1',
    'stylelint-config-recommended': '^3.0.0',
    'stylelint-config-recommended-scss': '^4.0.0',
    'stylelint-config-standard': '^19.0.0',
    'stylelint-scss': '^3.12.1',
  },
};

module.exports = async function angular() {
  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Enter the folder name for your project',
  });

  const pathToModules = path.resolve(__dirname, '../../../node_modules');

  // https://angular.io/cli/new#options
  await this.asyncCommand('npx', ['@angular/cli@11.x',
    'new', projectName,
    '--collection', `${pathToModules}/@angular-eslint/schematics`, // https://github.com/angular-eslint/angular-eslint - tslint is deprecated
    '--routing',
    '--no-strict', // https://angular.io/guide/strict-mode
    '--style', 'scss',
  ]);
  process.chdir(projectName); // change directory to new folder

  this.log('Copying common files');
  await this.copy(
    path.join(__dirname, '../common'),
    this.destinationPath(),
  );

  this.log('Copying template files');
  await this.copy(
    path.join(__dirname, './template'),
    this.destinationPath(),
  );

  this.log('Adding dependencies to package.json');
  await this.extendJson(this.destinationPath('package.json'), dependencies);

  this.log('Adding scripts to package.json');
  await this.extendJson(this.destinationPath('package.json'), packageJsonScripts);

  await this.sortDeps();
};
