const inquirer = require('inquirer');

const handlebarsAction = require('./frameworks/handlebars');
const logo = require('./logo');
const reactAction = require('./frameworks/react');
const util = require('./util');
const vueAction = require('./frameworks/vue');


const frameworks = [
  {
    name: 'Handlebars',
    value: 'handlebars',
    func: handlebarsAction,
  },
  {
    name: 'Vue',
    value: 'vue',
    func: vueAction,
  },
  {
    name: 'React',
    value: 'react',
    func: reactAction,
  },
];

const frameWorkSelections = {
  type: 'list',
  name: 'selectedFramework',
  message: 'Select one of the frameworks below to create a new project. Not sure? Check out <link to framework selection aid>',
  choices: frameworks,
};

async function starterKit() {
  console.log(logo); // eslint-disable-line no-console

  Object.keys(util).forEach((func) => {
    this[func] = util[func].bind(this);
  });

  const { selectedFramework } = await inquirer.prompt(frameWorkSelections);

  const frameworkAction = frameworks.find((a) => a.value === selectedFramework);
  if (frameworkAction) {
    this.log = this.log(`starter-kit:${selectedFramework}`);
    await frameworkAction.func.call(this);
  }
}

module.exports = starterKit;
