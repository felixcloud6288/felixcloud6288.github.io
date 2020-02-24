const inquirer = require("inquirer");
const manager = require("./lib/Manager");
const intern = require("./lib/Intern");
const engineer = require("./lib/Engineer");

const team = [];

function menu(){
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What do you want to do?",
        choices: ["Add Manager", "Add Engineer", "Add Intern", "Create Profile", "Exit"]
    }).then(function(response){
        console.log(response);
        if(response.action === "Exit"){
            return;
        }
        menu();
    })

}
menu();
