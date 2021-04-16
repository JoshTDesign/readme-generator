// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Title of project, 
// Description - motivation, problem it solves, what did you learn
// Table of contents -
// Installation instructions -
// Credits - collaborators, inspiration, etc...
// License - badges - checkout badges hosted by shields.io
// features -
// how to contribute to
// screenshot? links to deployed projects

const questions = [
    {
        type: 'input',
        message: 'Project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description of project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Challenges encountered:',
        name: 'challenges'
    },
    {
        type: 'input',
        message: 'How to install:',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Credits and contributors:',
        name: 'credits'
    },
    {
        type: 'list', 
        message: 'license:',
        choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The UnLicense', 'None'],
        name: 'licenses'
    },
    {
        type: 'input',
        message: 'Features:',
        name: 'features'
    },
    {
        type: 'input',
        message: 'How to contribute:',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'My email address:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'My gitHub profile:',
        name: 'github'
    }
];


// Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename + '.md', data, (err) => 
    err ? console.error(err) : console.log('Your README.md has been created!')
    );
};


// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {

        const thisMD = generateMarkdown.generateMarkdown(response);
        writeToFile('README', thisMD);

        });
    }


// Function call to initialize app
init();