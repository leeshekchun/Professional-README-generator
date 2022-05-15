// TODO: Include packages needed for this application
const fs = require ('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: 'Please enter the project title!',
    },
    {
       type: 'input',
       name: 'description',
       message: 'Please enter project description!',
    },
    {
        type: 'input',
        name: 'instruction',
        message: 'Please enter installation instructions!',
        default: 'None',
     },
     {
        type: 'input',
        name: 'language',
        message: 'Please enter the usage for the project! ',
        default: 'Not applicable'
     },
     {
        type: 'checkbox',
        name: 'contribute',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
        default: 'None'
      },
     {
        type: 'input',
        name: 'test',
        message: 'Please enter test intructions!',
        default: 'None'
     },
     {
        type: 'list',
        name: 'license',
        message: 'Please select a license!',
        choices: ['Apache', 'MIT', 'GNU GPL'],
        default: 'MIT',
     },
     {
        type: 'input',
        name: 'Github',
        message: 'Please enter your Github username!',
     },
     {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address!',
     },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if (err) throw err;
        console.error('The file has been created!')
    })
}

// TODO: Create a function to initialize app
function init() {
   inquirer
      .prompt(questions)
      .then((answers) => {
         writeToFile('profREADME.md', generateMarkdown(answers))
      })
}

// Function call to initialize app
init();
