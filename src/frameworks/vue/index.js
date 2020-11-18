const fse = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');

/* eslint-disable no-useless-escape */
const packageJsonScripts = {
  scripts: {
    'build:watch': 'nodemon --watch src --exec \"vue-cli-service build\" --ext scss,js,vue',
    dev: 'concurrently \"npm run build:watch\" \"env-cmd npm start\"',
    start: 'node server/index.js',
    stylelint: 'stylelint \"src/assets/scss/**/*.scss\"',
    lint: 'vue-cli-service lint && npm run stylelint',
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
    '@vue/eslint-config-airbnb': '^5.1.0',
    '@vue/cli-plugin-eslint': '^4.5.8',
    stylelint: '^11.1.1',
    'stylelint-config-recommended': '^3.0.0',
    'stylelint-config-recommended-scss': '^4.0.0',
    'stylelint-config-standard': '^19.0.0',
    'stylelint-scss': '^3.12.1',
    'vue-cli-plugin-style-resources-loader': '~0.1.4',
    scss: '^0.2.4',
    'node-sass': '^5.0.0',
  },
};

module.exports = async function vue() {
  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Enter the folder name for your project',
  });

  await this.asyncCommand('npx', ['@vue/cli@4.x', 'create', projectName, '-p', 'default']);
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

  // Using a .temp extension in here to avoid eslint conflicts
  await fse.rename(
    this.destinationPath('.eslintrc.js.temp'),
    this.destinationPath('.eslintrc.js'),
  );

  this.log('Adding dependencies to package.json');
  await this.extendJson(this.destinationPath('package.json'), dependencies);

  this.log('Adding scripts to package.json');
  await this.extendJson(this.destinationPath('package.json'), packageJsonScripts);

  this.log('Cleaning up package.json');
  const destinationPkgJson = require(this.destinationPath('package.json')); // eslint-disable-line global-require, import/no-dynamic-require
  delete destinationPkgJson.eslintConfig;

  const devDeps = {};
  const deps = {};
  Object.keys(destinationPkgJson.devDependencies).sort().forEach((key) => {
    devDeps[key] = destinationPkgJson.devDependencies[key];
  });

  Object.keys(destinationPkgJson.dependencies).sort().forEach((key) => {
    deps[key] = destinationPkgJson.dependencies[key];
  });
  destinationPkgJson.devDependencies = devDeps;
  destinationPkgJson.dependencies = deps;

  await this.writeJson(this.destinationPath('package.json'), destinationPkgJson);

  await fse.copy(this.destinationPath('.env.sample'), this.destinationPath('.env'));
};
