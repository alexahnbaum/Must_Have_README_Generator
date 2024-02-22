// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the name of your project?",
    type: "text",
    name: "title",
  },
  {
    message: "Descripe your project in 1-2 sentences.",
    type: "text",
    name: "description",
  },
];

inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
