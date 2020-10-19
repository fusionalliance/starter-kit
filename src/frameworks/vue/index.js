const inquirer = require('inquirer');
const path = require('path');

const dependencies = {
  devDependencies: {
    'sass-loader': '^10.0.3',
    'style-resources-loader': '^1.3.3',
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

  this.log('Copying template files');
  await this.copy(
    path.join(__dirname, './template'),
    this.destinationPath(),
  );

  this.log('Copying common files');
  await this.copy(
    path.join(__dirname, '../common'),
    this.destinationPath(),
  );

  this.log('Adding dependencies to package.json');
  await this.extendJson(this.destinationPath('package.json'), dependencies);
};
