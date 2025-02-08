// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = [
        {
            message: "What is your name?",
            name: "name",
        },
        {
            message: "What is the title of your project?",
            name: "title",
        },
        {
            message: "Add a description of the project:",
            name: "description",
        },
        {
            message: "Add installation instructions for the project:",
            name: "installation",
        },
        {
            message: "Describe the usage information about the project:",
            name: "usage",
        },
        {
            message: "What are the contribution guidelines for the project?",
            name: "contribute",  
        },
        {
            message: "What are the test instructions for this project?",
            name: "test",
        },
        {
            type: "list",
            message: "Select the type of license you would like to add to the project:",
            name: "license",
            choices: ['MIT', 'Apache 2.0 License', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'The Unlicense', 'None']
        },
        {
            message: "What is your Github handle?",
            name: "github",
        },
        {
            message: "What is your email address?",
            name: "email"
        }
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
        err ? console.error(err) : console.log("Sucessful data collection."));
}

// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions)
 .then((data) => {
    writeToFile("sample-README.md", data);
 });
}

// Function call to initialize app
init();
