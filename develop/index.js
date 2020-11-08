const inquire=require('inquirer');
// array of questions for user
const questions = [
    {
        type:'input',
        name:'title',
        message:'what is the title of your project?'
    },
    {
        type:'input',
        name:'description',
        message:'tell us about your project in full detail'

    },
    {
        type:'input',
        name:'installInstructions',
        message:'install ?'

    },



];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

//build out question objects
//ensure inquire packagae is installed
//
