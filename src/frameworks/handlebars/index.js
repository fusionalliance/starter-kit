const fse = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');

/* eslint-disable no-useless-escape */
const packageJsonScripts = {
  scripts: {
    build: 'npm-run-all build:clean build:html build:js',
    'build:clean': 'rm -rf ./dist/ && rm -rf ./public/',
    'build:html': 'env-cmd handlebars-transpile',
    'build:js': 'webpack --config webpack.prod.js --mode production',
    dev: 'npm-run-all -p watch:*',
    'watch:html': 'nodemon -e hbs --exec \"npm run build:html\"',
    'watch:js': 'webpack-dev-server --config webpack.dev.js --mode development',
    'watch:lint': 'nodemon -e js,scss --exec \"npm run lint\" --ignore public',
    lint: 'npm run eslint && npm run stylelint && npm run markdownlint',
    eslint: 'eslint \"assets/js/**/*.js\"',
    stylelint: 'stylelint \"assets/scss/**/*.scss\"',
    markdownlint: 'markdownlint \"**/*.md\"  --ignore node_modules',
    scss: 'npm run build:scss -- --watch',
    start: 'http-server public',
    test: 'jest && npm run test:accessibility',
    'test:accessibility': 'npm run build && start-server-and-test start 8080 pa11y-ci',
    postinstall: 'cp -n ./.env.sample ./.env || true',
  },
};

const dependencies = {
  devDependencies: {
    '@babel/core': '^7.0.0',
    '@babel/plugin-proposal-object-rest-spread': '^7.6.2',
    '@babel/preset-env': '^7.6.3',
    '@fullhuman/postcss-purgecss': '^1.1.0',
    autoprefixer: '^9.3.1',
    'babel-loader': '^8.0.0',
    bootstrap: '^4.3.1',
    'clean-webpack-plugin': '^0.1.19',
    'css-loader': '^3.4.1',
    cssnano: '^4.1.10',
    dotenv: '^8.2.0',
    'dotenv-webpack': '^1.7.0',
    'env-cmd': '^10.0.1',
    eslint: '^6.1.0',
    'eslint-config-airbnb-base': '^14.0.0',
    'eslint-plugin-import': '^2.18.2',
    'favicons-webpack-plugin': '^2.1.0',
    'file-loader': '^5.0.2',
    'fs-extra': '^8.1.0',
    glob: '^7.1.5',
    'handlebars-transpiler': '^1.0.3',
    'html-webpack-plugin': '^3.2.0',
    'http-server': '^0.12.3',
    husky: '^3.1.0',
    'image-webpack-loader': '^6.0.0',
    jest: '^26.0.1',
    'markdownlint-cli': '^0.23.1',
    'mini-css-extract-plugin': '^0.5.0',
    'node-sass': '^4.14.1',
    nodemon: '^1.19.4',
    'npm-run-all': '^4.1.5',
    'optimize-css-assets-webpack-plugin': '^5.0.0',
    'pa11y-ci': '^2.3.0',
    'postcss-loader': '^2.1.3',
    'sass-loader': '^6.0.7',
    'source-map-loader': '^0.2.3',
    'start-server-and-test': '^1.11.0',
    'style-loader': '^0.20.3',
    stylelint: '^11.1.1',
    'stylelint-config-recommended': '^3.0.0',
    'stylelint-config-recommended-scss': '^4.0.0',
    'stylelint-config-standard': '^19.0.0',
    'stylelint-scss': '^3.12.1',
    'url-loader': '^3.0.0',
    webpack: '^4.41.2',
    'webpack-cli': '^3.3.10',
    'webpack-dev-server': '^3.11.0',
  },
};

/* eslint-enable */

module.exports = async function handlebars() {
  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Enter the folder name for your project',
  });

  await fse.mkdir(this.destinationPath(projectName));
  process.chdir(projectName); // change directory to new folder

  this.log('Copying templates');
  await this.copy(
    path.join(__dirname, './template'),
    this.destinationPath(),
  );

  this.log('Coyping common files');
  await this.copy(
    path.join(__dirname, '../common'),
    this.destinationPath(),
  );

  const packageJsonExists = await fse.pathExists(this.destinationPath('package.json'));
  if (!packageJsonExists) {
    this.log('No package.json exists. Runnint npm init');
    await this.asyncCommand('npm', ['init']);
  }

  this.log('Adding scripts to package.json');
  await this.extendJson(this.destinationPath('package.json'), packageJsonScripts);

  this.log('Adding dependencies to package.json');
  await this.extendJson(this.destinationPath('package.json'), dependencies);
};
