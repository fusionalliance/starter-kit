import inquirer from 'inquirer';
import logo from './logo.mjs';

const frameWorkSelections = {
  type: 'list',
  name: 'selectedFramework',
  message: 'Which framework would you like to use?',
  choices: [
    {
      name: `Handlebars:
        For static websites`,
      value: 'handlebars',
    },
    {
      name: `Vue
        For `,
      value: 'vue',
    },
    {
      name: `React
        For `,
      value: 'react',
    },
  ],
};

(async function starterKit() {
  console.log(logo);

  const { selectedFramework } = await inquirer.prompt(frameWorkSelections);
  console.log(selectedFramework);
}());
