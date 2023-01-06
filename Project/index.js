const inquirer = require('inquirer');
const fs = require('fs');

function showLicenseBadge(license) {
  
  let selectedLicense = '';
  if(license === 'Apache License 2.0') {
    selectedLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'MIT License') {
    selectedLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Mozilla Public License') {
    selectedLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'The Unlicense') {
    selectedLicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else if (license === 'GNU General Public License v3.0') {
    selectedLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }else if (license === 'Boost Software License 1.0') {
    selectedLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }else {
    selectedLicense = "";
  }
  return selectedLicense;
};

const generateMarkdown = ({ projectTitle, description, installation, usage, tests, contributing, license, email, github }) =>
`${showLicenseBadge(license)}
# ${projectTitle}

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [URLs](#urls)
* [License](#license)
* [Questions](#questions)


## Description
${description}

![Alt text](./img/readmeGenGif.gif)


## Installation
${installation}

## Usage
${usage}

## Tests
${tests}

## Contributing
${contributing}

## URLs
The demo of the application can be found [here](https://youtu.be/iTBkbaYOnDw)

The URL of the GitHub repository containing the code is: https://github.com/Buky-js/README-Generator

## License
The license used for the project is ${license}

## Questions
Do you have any questions? You can reach me at ${email}. You can also find me on github at [${github}](https://github.com/${github})`

inquirer.prompt([
{
    type: 'input',
      message: 'What is project title?',
      name: 'projectTitle',
},
{
    type: 'input',
      message: 'Provide a brief description of the project',
      name: 'description',
},
{
    type: 'input',
      message: 'How is the application installed? Press ENTER if its not applicable',
      name: 'installation',
      default: 'N/A',
},
{
    type: 'input',
      message: 'Describe the usage of this application. Press ENTER if its not applicable',
      name: 'usage',
      default: 'N/A',
},
{
    type: 'list',
      message: 'Select the license used',
      name: 'license',
      choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License', 'The Unlicense', 'GNU General Public License v3.0', 'Boost Software License 1.0']
},
{
  type: 'input',
    message: 'Is there any test information for this application? Press ENTER if its not applicable',
    name: 'tests',
    default: 'There is none at this time'
},
{
    type: 'input',
      message: 'Mention your contributors. Press ENTER if its not applicable',
      name: 'contributing',
      default: 'N/A'
},
{
    type: 'input',
      message: 'Enter your github username',
      name: 'github',
      default: 'N/A',
},
{
    type: 'input',
      message: 'Enter your email address',
      name: 'email',
      default: 'N/A',
},

])
.then(response =>
    {
        // console.log(response);
        const readmeContent = generateMarkdown(response);
        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md!")
         );
    })