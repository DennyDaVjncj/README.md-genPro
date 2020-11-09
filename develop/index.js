const inquire=require('inquirer');
const effEss=require('fs');
const utility=require('util');

// array of questions for user
const questions = [
    {
        type:'input',
        name:'title',
        message:'what is the title for your project?'
    },
    {
        type:'input',
        name:'description',
        message:'tell us all about your project, be as descriptive as possible while making use of brevity'

    },
    {
        type:'input',
        name:'installInstructions',
        message:''

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
