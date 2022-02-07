const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your project title.' }
        },
    },


    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter a project description' }
        },
    },
    

    {
        type: 'input',
        name: 'install',
        message: 'How does the user install your app?*',
        validate: (value) => {
            if (value) { return true } else { return 'Please include how to install app' }
        },
    },


    {
        type: 'input',
        name: 'usage',
        message: 'Explain how user will use your app',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter a user story' }
        },
    },


    {
        type: 'input',
        name: 'contribution',
        message: 'Enter GitHub usernames of all contributors.*'
    },


    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your test instructions.' }
        },
    },


    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ["MIT", "ISC", "GNU GPLv3"],
        validate: (value) => {
            if (value) { return true } else { return 'Please choose a license.' }
        },
    },


    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your username.' }
        },
    },


    {
        type: 'input',
        name: 'contact',
        message: 'enter your email address.*',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Your email address is required.');
                return false;
            }
        }
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README file successfully created!');
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile('./output/README.md', generateMD(data));
    })
};

// Function call to initialize app
init();
