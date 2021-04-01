const fse = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');

/* eslint-disable no-useless-escape */
const packageJsonScripts = {
  scripts: {
    'build:watch': 'nodemon --watch src --exec \"react-scripts build\" --ext scss,js,jsx',
    dev: 'concurrently \"npm run build:watch\" \"env-cmd npm start\"',
    start: 'node server/index.js',
    stylelint: 'stylelint \"src/assets/scss/**/*.scss\"',
    lint: 'eslint . && npm run stylelint',
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
    'eslint-config-airbnb-base': '^14.0.0',
    eslint: '^7.23.0',
    nodemon: '^2.0.6',
    'sass-loader': '^10.0.3',
    'style-resources-loader': '^1.3.3',
    stylelint: '^11.1.1',
    'stylelint-config-recommended': '^3.0.0',
    'stylelint-config-recommended-scss': '^4.0.0',
    'stylelint-config-standard': '^19.0.0',
    'stylelint-scss': '^3.12.1',
    scss: '^0.2.4',
    'node-sass': '^5.0.0',
  },
};

module.exports = async function react() {
  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Enter the folder name for your project',
  });

  await this.asyncCommand('npx', ['create-react-app', projectName]);
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

  // TODO: Tell the developer they can use npm instead of yarn
  // Do I use webvitals at all?
  // Should I just run eslint --fix?
};
