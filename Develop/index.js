// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt ([
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
            choices: ['MIT', 'Apache 2.0 License', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            message: "What is your Github handle?",
            name: "github",
        },
        {
            message: "What is your email address?",
            name: "email"
        }
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var inputs = "";
    inputs += `${data.name}'s README\n\n`;
    inputs += ` # ${data.title}\n\n`;
    inputs += `${generateLicense(data.license)}\n\n`;
    inputs += ' # Table of Contents\n\n';
    inputs += `* [Description](#description)\n * [Installation](#installation)\n * [Usage](#usage)\n * [Contributing](#contribute)\n * [Tests](#test)\n * [License](#license)\n * [Questions](#questions)\n\n`;
    inputs += `## Description\n${data.description}\n\n`;
    inputs += `## Installation\n${data.installation}\n\n`;
    inputs += `## Usage Information\n${data.usage}\n\n`;
    inputs += `## Contribution Guidelines\n${data.contribute}\n\n`;
    inputs += `## Test Instructions\n${data.test}\n\n`;
    inputs += `## License\nThis application is covered under the ${data.license}.\n\n`;
    inputs += `## Questions?\nFollow the link to my Github account to see additional respositories or click my email address to send me a message.\n\n`;
    inputs += `[Link to Github](http://gitbuh.com/${data.github})\n\n`;
    inputs += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;

    fs.writeFile(fileName, inputs, (err) => 
        err ? console.error(err) : console.log("Sucessful data collection."));
}

//need function to generate licensing badges
function generateLicense(license) {
    if(license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if(license === "Apache 2.0 License") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;    
    } else if(license === "BSD 3-Clause License") {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;    
    } else if(license === "Mozilla Public License 2.0") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;    
    } else if(license === "The Unlicense") {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;    
    }  

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
