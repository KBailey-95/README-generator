const inquirer = require('inquirer');
const fs = require('fs');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project about?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Are there any installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does your project do?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Are there any additional contributors you would like to list?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Would you like to describe any tests in place for the application?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose the license we need to utilize.',
      choices: ['a', 'b'],
    },
  ]);
};