
const axios = require("axios").default;
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML.js");


function init(){
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
      ]).then(function(response){
        console.log(generateHTML.generateHTML(response));
        console.log(generateHTML.test());
        axios.get("https://api.github.com/users/"+response.username)
        .then(function(response){
            console.log(response);
        }).catch(function(err){
            console.log("Username not found")
        })
      })

}

init();