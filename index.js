// Include necessary packages
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  }
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
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data))
  })
}

// Function call to initialize app
init();

