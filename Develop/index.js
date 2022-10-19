// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const {generateMarkdown} = require('./utils/generateMarkdown')
// const generateMarkdown = require('./utils/generateMarkdown');
// const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Please write a general description of your project.',
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
            name: 'Contribution',
            message: 'What are the contribution guidelines.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide any testing instructions',
        },
    ]) .then((answers) => {
        console.log(answers)
        const readMeContent = generateMarkdown(answers);
        console.log(readMeContent)

        fs.writeFile('README.md', readMeContent, (err) => err ? console.log(err): console.log('File was created'));
    });


// TODO: Create a function to write README file
// const generateMarkdown = ({description, installation, usage, contribution,test }) => ``



// TODO: Create a function to initialize app
// const init = () => {
//     promptUser()
//         .then((answers) => writeFile('README.md', generateMarkdown(answers)))
//         .then(() => console.log('Successfully wrote to README.md'))
//         .catch((err) => console.error(err));

// };

// Function call to initialize app

// init();

