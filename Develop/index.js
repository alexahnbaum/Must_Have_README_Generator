// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Created a variable called license choices so that I can put a value on each license choice.  This will allow me to use the values in the license functions
const licenseChoices = [
  { name: "MIT License", value: "mit" },
  { name: "Apache License 2.0", value: "apl" },
  { name: "Mozilla Public License 2.0", value: "mpl" },
  { name: "no license", value: "none" },
];

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the name of your project?",
    type: "input",
    name: "title",
  },
  {
    message: "Describe your project in 1-2 sentences.",
    type: "input",
    name: "description",
  },
  {
    message:
      "Describe the installation procedure of your project in 1-2 sentences.",
    type: "input",
    name: "installation",
  },
  {
    message:
      "Describe how your project is intended to be used in 1-2 sentences.",
    type: "input",
    name: "usage",
  },
  {
    message: "Describe the contribution guidelines in 1-2 sentences.",
    type: "input",
    name: "contribution",
  },
  {
    message: "What are the testing instructions",
    type: "input",
    name: "testing",
  },
  {
    message: "What license is the app covered under?",
    type: "list",
    name: "license",
    choices: licenseChoices,
  },
  {
    message: "What is your GitHub username?",
    type: "input",
    name: "GitHub",
  },
  {
    message: "What is your email address?",
    type: "input",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err
      ? console.log(`Error: ${err}`)
      : console.log("high quality README saved");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

    .then((data) => {
      console.log(data);
      // const markDown = generateMarkdown(data);
      const fileName = "HQ_README.md";
      writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
