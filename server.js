const fs = require('fs');
const inquirer = require('inquirer');
const { generateSVG } = require('./src/svgGenerator');

async function main() {
  console.log('Welcome to SVG Logo Maker!');

  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three chracters:',
      validate: (input) => input.length <= 3,
    },

    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color:',
    },

    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },

    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color:',
    },
  ]);

  generateSVG(userInput);

  console.log('Generated logo.svg');
}

main();
