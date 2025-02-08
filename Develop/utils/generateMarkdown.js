// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
    } else {
      return "";
    } 
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return ``;
} else if(license === "Apache 2.0 License") {
    return ``;    
} else if(license === "BSD 3-Clause License") {
    return ``;    
} else if(license === "Mozilla Public License 2.0") {
    return ``;    
} else if(license === "The Unlicense") {
    return ``;    
} else {
  return "";
} 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var inputs = "";
  inputs += `${data.name}'s README\n\n`;
  inputs += ` # ${data.title}\n\n`;
  inputs += `${renderLicenseBadge(data.license)}\n\n`;
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
}

export default generateMarkdown;
