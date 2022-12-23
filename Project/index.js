const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({ projectTitle, description, installation, usage, contributing, license, email, github }) =>
`# ${projectTitle}

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)


## Description
${description}


## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## License
The license used for the project is ${license}

## Questions
Do you have any questions? You can reach me at  ${email}. You can also find me on github at [${github}](https://github.com/Buky-js) .

`

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