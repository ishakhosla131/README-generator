const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type:"input",
        message:"What is your GitHub username?",
        name: "userName",
    },
    {
        type:"input",
        message: "What is the title of your project?",
        name:"title"
    },
    {
        type:"input",
        message:"Describe your project.",
        name:"description"
    },
    {
        type:"input",
        message:"What are the installation instructions?",
        name:"installation"
    },
    {
        type:"input",
        message:"Describe the usage.",
        name:"usage"
    },
    {
        type:"input",
        message:"How do you test this app",
        name:"test"
    },
    {
        type:"checkbox",
        message:"Choose a liscence",
        choices:["APACHE","MIT","NONE"],
        name:"license"
    },
    {
        type:"input",
        message:"Who are the contributors",
        name:"contributors"
    },
    {
        type:"input",
        message:"What is your email address",
        name:"email"
    },
];


// function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data , function(err){
        if (err) {
            console.log(err)
        }
        console.log("sucess!")
    })
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(results){
    console.log(results);
    const markdown = generateMarkdown(results);
    console.log(markdown);
    writeToFile("README.md", markdown)
})

}

// function call to initialize program
init();
