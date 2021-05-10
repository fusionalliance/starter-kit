const fse = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');

/* eslint-disable no-useless-escape */
const packageJsonScripts = {
  scripts: {
    // 'build:watch': 'node scripts/start.js',
    // dev: 'concurrently \"npm run build:watch\" \"env-cmd npm start\"',
    dev: 'react-scripts start',
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
  },
  devDependencies: {
    concurrently: '^5.3.0',
    'env-cmd': '^10.1.0',
    'eslint-config-airbnb-base': '^14.0.0',
    // nodemon: '^2.0.6',
    // 'sass-loader': '^10.0.3',
    // 'style-resources-loader': '^1.3.3',
    // stylelint: '^11.1.1',
    // 'stylelint-config-recommended': '^3.0.0',
    // 'stylelint-config-recommended-scss': '^4.0.0',
    // 'stylelint-config-standard': '^19.0.0',
    // 'stylelint-scss': '^3.12.1',
    // scss: '^0.2.4',
    // 'node-sass': '^5.0.0',
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
  // Don't eject, this just clutters up dependencies and custom scripts

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

  // make src/util/sortDeps.js use this.readJson so we don't get a cached version
  const destinationPkgJson = await this.readJson(this.destinationPath('package.json'));

  const mergedDependencies = {
    dependencies: dependencies.dependencies,
    devDependencies: {
      ...destinationPkgJson.dependencies,
      ...destinationPkgJson.devDependencies,
      ...dependencies.devDependencies,
    },
  };

  this.log('Moving dependencies to devDependencies while adding our own');
  await this.writeJson(this.destinationPath('package.json'), {
    ...destinationPkgJson,
    ...mergedDependencies,
  });

  this.log('Adding scripts to package.json');
  await this.extendJson(this.destinationPath('package.json'), packageJsonScripts);

  this.log('Cleaning up package.json');
  const updatedPkgJson = await this.readJson(this.destinationPath('package.json'));
  delete updatedPkgJson.eslintConfig;

  const devDeps = {};
  const deps = {};
  Object.keys(updatedPkgJson.dependencies).sort().forEach((key) => {
    deps[key] = updatedPkgJson.dependencies[key];
  });

  Object.keys(updatedPkgJson.devDependencies).sort().forEach((key) => {
    devDeps[key] = updatedPkgJson.devDependencies[key];
  });

  updatedPkgJson.devDependencies = devDeps;
  updatedPkgJson.dependencies = deps;

  await this.writeJson(this.destinationPath('package.json'), updatedPkgJson);

  await fse.copy(this.destinationPath('.env.sample'), this.destinationPath('.env'));

  // Add parentheses around arrow function parameter
  await this.transform(
    this.destinationPath('src/reportWebVitals.js'),
    /^(const \w+ = )(\w+)( => {\n[\S\s]+)/,
    '$1($2)$3',
  );

  // Add newlines for web vitals arguments
  // { getCLS, getFID, getFCP, getLCP, getTTFB }
  // import('web-vitals').then(({
  //   getCLS,
  //   getFID,
  //   getFCP,
  //   getLCP,
  //   getTTFB,
  // }) => {
  await this.transform(
    this.destinationPath('src/reportWebVitals.js'),
    /( +)(\S+)\({ getCLS, getFID, getFCP, getLCP, getTTFB }\)/g,
    '$1$2({\n$1  getCLS,\n$1  getFID,\n$1  getFCP,\n$1  getLCP,\n$1  getTTFB,\n$1})',
  );

  // Add dangling comma for ReactDOM.render method arguments
  await this.transform(
    this.destinationPath('src/index.js'),
    /(ReactDOM.render\([\S\s]+)(document.getElementById\('root'\))(\n\);)/,
    '$1$2,$3',
  );

  // Gitignore .env files
  await this.transform(
    this.destinationPath('.gitignore'),
    /\.env\.local/,
    '.env\n.env.local',
  );
};
