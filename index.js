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
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief summary of this project."
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use."
  },
  {
    type: "input",
    name: "credits",
    message: "Who contributed to this project?(First Last)"
  },
  {
    type: "list",
    name: "license",
    message: "Which license is needed for this project?",
    choices: ["MIT", "Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "GNU GPL v3", "None"]
  },

];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file has been generated!');
    };
  });
};

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data)
    writeToFile("README.md", generateMarkdown(data))
  })
}

init();