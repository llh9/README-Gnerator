const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([

    {
        type: 'input',
        message: 'What is the title of your project?',
        default: 'Title',
        name: 'title',
    },
    {
        type: "input",
        message: "Write a short description about this project?",
        default: 'This COOL project...',
        name: "description",
    },
    {
        type: "input",
        message: "What was the motivation for the project?",
        default: 'for the love of coding',
        name: "motivation",
    },
    {
        type: "input",
        message: "What problems were encountered and was a solution provided?",
        default: 'Not enough hours in a day',
        name: "solutions",
    },
    {
        type: "input",
        message: "What was learned from completing this project?",
        default: 'File I/O, some npm skills, how to organize and set up a project for gorup development...',
        name: "lessons",
    },
    {
        type: "checkbox",
        message: "check all items you want to include in your README",
        name: "Table_of_contents",
        default: ["Installation", "Usage", "License", "Contributors", "Test", "Questions"],
        choices: ["Installation", "Usage", "License", "Contributors", "Test", "Questions"],
    },
    {
        type: "input",
        message: "Describe the intallation process?",
        default: 'run it',
        name: "installation",
    },
    {
        type: "input",
        message: "Describe the usage?",
        default: 'use it',
        name: "usage",
    },
    {
        type: "input",
        message: "Describe the license under which this project is created?",
        default: 'one of em',
        name: "license",
    },
    {
        type: "input",
        message: "Who are the contributors?",
        default: 'just me',
        name: "contributors",
    },
    {
        type: "input",
        message: "Describe the test?",
        default: 'this is it',
        name: "test",
    }, 
    {
        type: "input",
        message: "Describe how to submit questions?",
        default: 'not just yet',
        name: "questions",
    }

])
.then((answers) => {

    console.log(answers);

    fs.writeFile(`README.MD`, `# ${answers.title}\n
    \n## Description
    \n${answers.description}
    \n### Motivation
    \n${answers.motivation}
    \n### Problems Solved 
    \n${answers.solutions}
    \n### What I learned 
    \n${answers.lessons}
    \n## Table of Contents\n 
    \n1. [${answers.Table_of_contents[0]}](#installation)
    \n1. [${answers.Table_of_contents[1]}](#usage)
    \n1. [${answers.Table_of_contents[2]}](#license)
    \n1. [${answers.Table_of_contents[3]}](#contributors)
    \n1. [${answers.Table_of_contents[4]}](#test)
    \n1. [${answers.Table_of_contents[5]}](#questions)
    \n## ${answers.Table_of_contents[0]}
    \n${answers.installation}
    \n## ${answers.Table_of_contents[1]}
    \n${answers.usage}
    \n[![walk through video](https://watch.screencastify.com/v/IOT0hvabAnM155hevj0y)]
    \n## ${answers.Table_of_contents[4]}
    \n${answers.test}
    \n## Badges
    \n![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    \nBadges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    \n## Features
    \nIf your project has a lot of features, list them here.
    \n## ${answers.Table_of_contents[3]}
    \n${answers.contributors}
    \n## How to Contribute
    \nIf you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    \n## ${answers.Table_of_contents[5]}
    \n${answers.questions}
    \n## ${answers.Table_of_contents[2]}
    \n${answers.license}
    `,"utf-8", function () {    
            console.log("Succesfully wrote the file!");
        }
    )

})
