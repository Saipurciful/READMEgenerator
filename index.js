const inquirer = require('inquirer');
const fs = require('fs');


const promptUser = () =>
  inquirer.prompt([{
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please explain what is your projects about?',
    },

    {
      type: 'input',
      name: 'installation',
      message: 'What need to be installed to run this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What technologies use in this project?.',
    },
    {
      type: "list",
      message: "Please select your license",
      name: "license",
      choices: [
        "Boost",
        "Apache",
        "BSD",
        "MIT",
        
      ]},
    {
      type: 'input',
      name: 'contributing',
      message: 'Please describe your contributing?',
    },

    {
      type: 'input',
      name: 'tests',
      message: 'How do you use the project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
  
    {
      type: 'input',
      name: 'githubLink',
      message: 'What is the link to your github profile?',
    },
  
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  
    {
      type: 'input',
      name: 'deployed',
      message: 'What is the link of your deployed project?',
    },
  ]).then((answers) => {
    console.log(answers);

    const readMe = `README.md

# ${answers.title} [![License](https://img.shields.io/badge/License-${answers.license}%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)


## Table of Content

* [Installation Instructions](#Installation-Instruction)
* [Description](#Description )
* [Usage Information](#Usage-Information)
* [License](#License)
* [Contributing Guildline](#Contributing-Guildline)
* [Tests Instructions](#Tests-Instructions)
* [Questions](#Questions)



## Installation Instructions
${answers.installation}

## Description
${answers.description}

## Usage Information

${answers.usage}

## License
[![License](https://img.shields.io/badge/License-${answers.license}%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

## Contributing Guildeline

${answers.contributing}

## Tests Instructions

${answers.tests}

## Questions

  * Github user name : ${answers.github}  
  * Github link : ${answers.githubLink}
  * How to reach me with additional questions : ${answers.email}

## Link to the project site. 
* ${answers.deployed}
`

    fs.writeFile("README.md", readMe, err => {
      if (err) console.log(err)
    })
  });
promptUser();