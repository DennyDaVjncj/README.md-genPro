const inquire=require('inquirer');
const effEss=require('fs');
const utility=require('util');

// array of questions for user
const buildReadMe =()=>{
    return inquire.prompt([
        {
            type:'input',
            name:'github username',
            message:'enter your github username'
        },
        {
            type:'input',
            name:'email',
            message:'enter your email address'
        },
        {
            type:'input',
            name:'title',
            message:'whats the title for this stellar application?'
        },
        {
            type:'input',
            name:'description',
            message:'tell us all about your project, be as descriptive as possible while making use of brevity'
    
        },
        {
            type:'input',
            name:'contents',
            message:'provide a quick breakdown of how to traverse your project'
    
        },
        {
            type:'input',
            name:'installation',
            message:'provide clear instructions in setting up functionality for this project'
    
        },
        {
            type:'input',
            name:'usage',
            message:'tell prospective users how to make use of this application'
    
        },
        {
            type:'input',
            name:'contributing',
            message:'inform users how they may contribute to this project'
    
        },
        {
            type:'input',
            name:'test',
            message:'inform users how they may contribute to this project'
    
        }
    ])
}

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
