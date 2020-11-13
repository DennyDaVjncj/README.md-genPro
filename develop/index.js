const inquire=require('inquirer');
const effEss=require('fs');
const utility=require('util');
const Choices = require('inquirer/lib/objects/choices');
const generationMarkDown=require("./utils/generateMarkDown");
//enter markDown code within tempLiterals;
const writeFileAsync=utility.promisify(effEss.writeFile);

// array of questions for user
const  promptUser=()=>inquire.prompt([
        //complete development of questions
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
            message:'which license did you decide on making use of for this app? an abbreviated selection',
            choices:[
                'Apache License 2.0', 'GNU General Public License v3.0','MIT License','Boost Software License 1.0'
            ]
    
        },
        {
            type:'input',
            name:'contents',
            message:'provide a quick breakdown of how to traverse your project'
    
        },        
        {
            type:'input',
            name:'contribute',
            message:'inform users how they may contribute to this project'
    
        },
        {
            type:'input',
            name:'test',
            message:'inform users how they may contribute to this project'
    
        }
    ])
//user's response to all these questions to be passed to a md file

const generationMD=()=>{
    //what should go within this function
}

promptUser()
    .then((generationMarkDown)=>writeFileAsync('README.md',generationMD(generationMarkDown)))
    .then(()=>console.log('README.md spawnded'))
    .catch((malware)=>console.error(malware));
