// Include necessary packages
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  // You can add more questions as needed
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file has been generated!');
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = `
# ${answers.projectName}

## Description
${answers.description}

## Installation
// Add installation instructions here

## Usage
// Add usage instructions here

## License
// Add license information here

## Contributing
// Add contribution guidelines here

## Tests
// Add test instructions here
`;

      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();

