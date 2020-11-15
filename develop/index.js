const inquire=require('inquirer');
const effEss=require('fs');
const utility=require('util');
const generationMarkDown=require("./utils/generateMarkDown");
const writeFileAsync=utility.promisify(effEss.writeFile);

// array of questions for user
const  promptUser=()=>inquire.prompt([
        {
            type:'input',
            name:'moniker',
            message:'whats your github username?'
        },
        {
            type:'input',
            name:'title',
            message:'whats the name to this stellar app of yours?'
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
            message:'which license did you decide on making use of for this app? an abbreviated selection provided',
            choices:[
                'Apache License 2.0', 'GNU General Public License v3.0','MIT License','Boost Software License 1.0','non applicalble'
            ]    
        },                
        {
            type:'input',
            name:'contribute',
            message:'inform users of the steps required in contributing to this repository'
    
        },
        {
            type:'list',
            name:'test',
            message:'what command is required for running a test within the terminal?',
            choices:['npm i','npm run test','npm install test','npm init run-test']
        },
        {
            type:'input',
            name:'email',
            message:'what is your eMail address?'
        }
    ])

promptUser()
    .then((data)=>writeFileAsync('README.md',generationMarkDown(data)))
    .then(()=>console.log('README.md spawnded'))    
    .catch((malware)=>console.error(malware));