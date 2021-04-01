const inquirer = require('inquirer');
const path = require('path');

module.exports = async function react() {
  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Enter the folder name for your project',
  });
  const templatePath = path.join(__dirname, './cra-template-fusion');

  await this.asyncCommand('npx', ['create-react-app', projectName, '--template', `file:${templatePath}`, '--use-npm']);

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

  // Using a .temp extension in here to avoid eslint conflicts
  // await fse.rename(
  //   this.destinationPath('.eslintrc.js.temp'),
  //   this.destinationPath('.eslintrc.js'),
  // );

  // this.log('Adding dependencies to package.json');
  // await this.extendJson(this.destinationPath('package.json'), dependencies);

  // this.log('Adding scripts to package.json');
  // await this.extendJson(this.destinationPath('package.json'), packageJsonScripts);

  // this.log('Cleaning up package.json');
  // const destinationPkgJson = require(this.destinationPath('package.json')); // eslint-disable-line global-require, import/no-dynamic-require
  // delete destinationPkgJson.eslintConfig;

  // const devDeps = {};
  // const deps = {};
  // Object.keys(destinationPkgJson.devDependencies).sort().forEach((key) => {
  //   devDeps[key] = destinationPkgJson.devDependencies[key];
  // });

  // Object.keys(destinationPkgJson.dependencies).sort().forEach((key) => {
  //   deps[key] = destinationPkgJson.dependencies[key];
  // });
  // destinationPkgJson.devDependencies = devDeps;
  // destinationPkgJson.dependencies = deps;

  // await this.writeJson(this.destinationPath('package.json'), destinationPkgJson);

  // await fse.copy(this.destinationPath('.env.sample'), this.destinationPath('.env'));
};
