const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const team = [];

function menu(){
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What do you want to do?",
        choices: ["Add Manager", "Add Engineer", "Add Intern", "Create Profile", "Exit"]
    }).then(async function(response){

        if(response.action === "Add Engineer"){
            addEngineer();
        }
        else if(response.action === "Add Intern"){
            addIntern();
        }
        else if(response.action === "Add Manager"){
            await addManager();
        }
        else if(response.action === "Create Profile"){
            createProfile();
        }

        else{
            return;
        }
        menu();
    })

}
async function addManager(){
    console.log("Manager");
    await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Manager name"
        },
        {
            name: "ID",
            type: "input",
            message: "Manager ID"
        },
        {
            name: "email",
            type: "input",
            message: "Manager Email"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Manager Office Number"
        }
    ]).then((response)=>{
        const manager = new Manager(response.name, response.ID, response.email, response.officeNumber);
        console.log(manager);
    })
}
function addEngineer(){
    console.log("Engineer")
}
function addIntern(){
    console.log("Intern")

}
function createProfile(){
    console.log("Profile")

}

menu();
