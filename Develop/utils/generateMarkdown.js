// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === "MIT License") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if(license === "Apache 2.0 License") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;    
    } else if(license === "BSD 3-Clause License") {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;    
    } else if(license === "Mozilla Public License 2.0") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;    
    } else if(license === "The Unlicense") {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;    
    } else if (license === "None") {
      return "";
    } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT License") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
} else if(license === "Apache 2.0 License") {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;    
} else if(license === "BSD 3-Clause License") {
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;    
} else if(license === "Mozilla Public License 2.0") {
    return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;    
} else if(license === "The Unlicense") {
    return `[The Unlicense](https://unlicense.org/)`;    
} else if (license === "None") {
  return "";
} 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `This application is covered under the ${renderLicenseLink(license)}.\n\n`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  var inputs = "";
  //inputs += `${questions.name}'s README\n\n`; Don't usually want to include
  inputs += `# ${questions.title}\n\n`;
  inputs += `${renderLicenseBadge(questions.license)}\n\n`;
  inputs += '## Table of Contents\n\n';
  inputs += `* [Description](#description)\n * [Installation](#installation)\n * [Usage](#usage)\n * [Contributing](#contributing)\n * [Tests](#tests)\n * [Credits](#credits)\n * [License](#license)\n * [Questions](#questions)\n\n`;
  inputs += `## Description\n${questions.description}\n\n`;
  inputs += `## Installation\n${questions.installation}\n\n`;
  inputs += `## Usage Information\n${questions.usage}\n\n`;
  inputs += `## Contributing\n${questions.contribute}\n\n`;
  inputs += `## Tests\n${questions.test}\n\n`;
  inputs += `## Credits\n${questions.credits}\n\n`;
  inputs += `## License\n${renderLicenseSection(questions.license)}`;
  inputs += `## Questions?\nFollow the link below to see my Github account and additional respositories. Click on my email address to send me a message if you have any questions!.\n\n`;
  inputs += `[Link to Github](http://github.com/${questions.github})\n\n`;
  inputs += `<a href="mailto:${questions.email}">${questions.email}</a>\n\n`;

  return inputs
}

export default generateMarkdown;
