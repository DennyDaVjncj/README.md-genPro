const inquire=require('inquirer');
const effEss=require('fs');
const utility=require('util');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
//enter markDown code within tempLiterals;
const writeFileAsync=utility.promisify(effEss.writeFile);

// array of questions for user
const  promptUser=()=>inquire.prompt([
        //complete development of questions
        {
            type:'input',
            name:'title',
            message:'whats the name for this stellar app of yours?'
        },
        {
            type:'input',
            name:'description',
            message:'provide a description for this app'
        },
        {
            type:'input',
            name:'installation',
            message:"narrate to users how they can install this app, brevity is essential"
        },
        {
            type:'input',
            name:'use',
            message:'what is the intended usage for this novel application?'
        },
        {
            type:'list',
            name:'license',
            message:'which license did you decide on making use of for this app?',
            choices:[

            ]
    
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
//user's response to all these questions to be passed to a md file

const generationMD=(tabulateREADME)=>
`# ${tabulateREADME.title}:

## Description:
${tabulateREADME.description}

## Table of Contents:
- [Description](##Description)
- [Guidlines for installation](##installation-guidlines)

## Installation Guidlines:
${tabulateREADME.installation}

`;

promptUser()
    .then((tabulateREADME)=>writeFileAsync('myREADME.md',generationMD(tabulateREADME)))
    .then(()=>console.log('README.md spawnded'))
    .catch((malware)=>console.error(malware));