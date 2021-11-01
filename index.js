// include inquirer and file system i/o
const inquirer = require("inquirer");
const fs = require("fs");

//use the prompt method with input and checkbox type questions and default values 
inquirer.prompt([

    {
        type: 'input',
        message: 'What is the title of your project?',
        default: 'README GENERATOR README',
        name: 'title',
    },
    {
        type: "input",
        message: "Write a short description about this project?",
        default: 'This README Generator makes it easier for a developer to create a README file for their project by answering a few questions about the project and where to store the created README.md file.',
        name: "description",
    },
    {
        type: "input",
        message: "What was the motivation for the project?",
        default: 'The Motivation for creating this application comes from the need of developers to be more efficient and effective when coding.',
        name: "motivation",
    },
    {
        type: "input",
        message: "What problems were encountered and was a solution provided?",
        default: 'Being able to focus more time on aspects of the coding process that demand more intellectual attention rather than on mindless and redundant activities allows the developer to be more productive.',
        name: "solutions",
    },
    {
        type: "input",
        message: "What was learned from completing this project?",
        default: 'I learned many new coding concepts, File I/O, some npm skills, how to organize and set up a project for gorup development and how to make tools that I can utilize to be more productive.',
        name: "lessons",
    },
    {
        type: "checkbox",
        message: "check all items you want to include in your README",
        name: "Table_of_contents",
        default: ["Installation", "Usage", "License", "Contributors", "Test", "Questions", "Demo", "Badges", "Features", "Contribute"],
        choices: ["Installation", "Usage", "License", "Contributors", "Test", "Questions", "Demo", "Badges", "Features", "Contribute"],
    },
    {
        type: "input",
        message: "Describe the intallation process?",
        default: 'This section explains the process of installing this README Generator application for use. \nClone an empty repository to an empty folder.\nOpen an editor like VS Code that has a terminal with node.js and npm installed,\nCopy the index.js file from into the folder the README file is going in.\nIn the command line interface, navigate inside the folder containing index.js \nEnter the command "npm init -y" then "npm install inquirer" then run "node index.js"',
        name: "installation",
    },
    {
        type: "input",
        message: "Describe the usage?",
        default: 'Simply answer all the prompts and a README.md file will be created using the responses provided by the user.',
        name: "usage",
    },
    {
        type: "input",
        message: "Describe the license under which this project is created?",
        default: "MIT License, Copyright (c) 2021 Landon Hinkle Jr",
        name: "license",
    },
    {
        type: "input",
        message: "Who are the contributors?",
        default: 'Landon Hinkle',
        name: "contributors",
    },
    {
        type: "input",
        message: "Describe the test?",
        default: 'This very README file was created using this application and all of these responses are designated as the default values',
        name: "test",
    }, 
    {
        type: "input",
        message: "Describe how to submit questions?",
        default: 'Email me at llh9@yahoo.com\n\n### Repository link\n\n[https://github.com/llh9/README-Gnerator](https://github.com/llh9/README-Gnerator)',
        name: "questions",
    }

])
.then((answers) => {

    console.log(answers);

    fs.writeFile(`README.MD`, `# ${answers.title}\n
    \n## [Description](#description)
    \n${answers.description}
    \n### Motivation
    \n${answers.motivation}
    \n### Problems Solved 
    \n${answers.solutions}
    \n### What I learned 
    \n${answers.lessons}
    \n## [Table of Contents](#table-of-contents)\n 
    \n1. [${answers.Table_of_contents[0]}](#installation)
    \n1. [${answers.Table_of_contents[1]}](#usage)
    \n1. [${answers.Table_of_contents[6]}](#demo)
    \n1. [${answers.Table_of_contents[4]}](#test)
    \n1. [${answers.Table_of_contents[7]}](#badges)
    \n1. [${answers.Table_of_contents[8]}](#features)
    \n1. [${answers.Table_of_contents[3]}](#contributors)
    \n1. [${answers.Table_of_contents[9]}](#contribute)
    \n1. [${answers.Table_of_contents[5]}](#questions)
    \n1. [${answers.Table_of_contents[2]}](#license)

    \n## [${answers.Table_of_contents[0]}](#installation)
    \n${answers.installation}
    \n## [${answers.Table_of_contents[1]}](#usage)
    \n${answers.usage}
    \n## [Walkthrough Video](https://drive.google.com/file/d/1Qp05CiAGjZm47CEd0F0o0-C7Hpe5Y7dI/preview)
    \n### [Demo Screenshot 1](#demo-screenshot-1)
    \n![screenshot demo ](./SS1.PNG)
    \n### [Demo Screenshot 2](#demo-screenshot-2)
    \n![screenshot demo](./SS2.PNG)
    \n### [Demo Screenshot 3](#demo-screenshot-3)
    \n![screenshot demo](./SS3.PNG)
    \n## [${answers.Table_of_contents[4]}](#test)
    \n${answers.test}
    \n## [${answers.Table_of_contents[7]}](#badges)
    \n![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    \nYou can get badges hosted by [shields.io](https://shields.io/). 
    \n## [${answers.Table_of_contents[8]}](#features)
    \nIf your project has a lot of features, list them here.
    \n## [${answers.Table_of_contents[3]}](#contributors)
    \n${answers.contributors}
    \n## [${answers.Table_of_contents[9]}](#contribute)
    \n[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
    \nIf you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    \n## [${answers.Table_of_contents[5]}](#questions)
    \n${answers.questions}
    \n## [${answers.Table_of_contents[2]}](#license)
    \n${answers.license}
    `,"utf-8", function (error) {    
        error ? console.error(error) : console.log("Succesfully wrote the file!");
        }
    )

})
