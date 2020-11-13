const inquire=require('inquirer');
const effEss=require('fs');
const utility=require('util');
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
            type:'choice',
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
//user's response to all these questions to be passed to a md file

const generationMD=(tabulateREADME)=>
`# ${tabulateREADME.title}:

## Description:
${tabulateREADME.description}

## Table of Contents:
1. ${tabulateREADME.description}

## Installation Guidlines:
-  

`;

promptUser()
    .then((tabulateREADME)=>writeFileAsync('myREADME.md',generationMD(tabulateREADME)))
    .then(()=>console.log('myREADME.md spawnded'))
    .catch((malware)=>console.error(malware));