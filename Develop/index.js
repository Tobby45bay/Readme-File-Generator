// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Discrip what your projects dose?',
    },
    {
        type: 'input',
        name: 'insallation',
        message: 'What are the insallation steps?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage of your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is the github Acount of those who contributed to the project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the steps to run the test?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What are the steps to run the test?',
        choices: ['MIT','Apache 2.0','BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your email?',
    },
    

];
console.log('hello');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) =>{
        if(err){
            console.log(err);
        } else{
            console.log();
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
        const readmeData = generateMarkdown(answers);

        writeToFile("README.md",readmeData);
    })
}

// Function call to initialize app
init();
