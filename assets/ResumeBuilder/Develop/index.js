const inquirer = require("inquirer");
const generate = require("./generateHTML.js");

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {
    inquirer.prompt([
        {
          type: "input",
          message: "What is your user name?",
          name: "username"
        },
        {
          type: "input",
          message: "What is your favorite color?",
          name: "color"
        }
      ])
      .then(function(response) {
    questions.push(response);
    console.log(response)
     console.log(generate.test());
    })

    
}

init();
