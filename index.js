// Include necessary packages
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [

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
  
}

// Function call to initialize app
init();

