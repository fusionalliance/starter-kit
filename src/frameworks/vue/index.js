const fse = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');

/* eslint-disable no-useless-escape */
const packageJsonScripts = {
  scripts: {
    'build:watch': 'nodemon --watch src --exec \"vue-cli-service build\" --ext scss,js,vue',
    dev: 'concurrently \"npm run build:watch\" \"env-cmd npm start\"',
    start: 'node server/index.js',
  },
};
/* eslint-enable */

const dependencies = {
  dependencies: {
    express: '^4.17.1',
    'serve-static': '^1.14.1',
    'vue-router': '^3.4.8',
  },
  devDependencies: {
    concurrently: '^5.3.0',
    'env-cmd': '^10.1.0',
    nodemon: '^2.0.6',
    'sass-loader': '^10.0.3',
    'style-resources-loader': '^1.3.3',
    '@vue/cli': '^4.5.8',
  },
};

module.exports = async function vue() {
  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Enter the folder name for your project',
  });

  await this.asyncCommand('vue', ['create', projectName]);
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

  await fse.copy(this.destinationPath('.env.sample'), this.destinationPath('.env'));
};
