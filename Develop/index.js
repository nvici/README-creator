// TODO: Include packages needed for this application
//packages for the application
const inquirer = require('inquirer');
const fs = require('fs')
const genRead = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
//array of questions asked to generate readme
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How is the project installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide any testing instructions',
        },
        {
            type: 'list',
            message: 'Which license is this project covered under?',
            name: 'license',            
            choices: ['MIT' , 'EPL', 'Apache'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ];


// TODO: Create a function to write README file



// TODO: Create a function to initialize app
//this function initalizes the application
function init() {
    
    return inquirer.prompt(questions)
    .then((data) => {
        const input = genRead.generateMarkdown(data);
        fs.writeFile('README.md', input, function(err){
          if (err) {
            console.log('Could not save file', err)           
          } else {
            console.log('Success: new README.md file generated inside the current folder')
          }
        })
      })
      .catch((error) => {
          console.log(error)
      }) 
}
// Function call to initialize app
//calls the function above

init();

