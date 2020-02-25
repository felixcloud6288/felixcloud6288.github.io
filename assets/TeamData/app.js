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
            await addEngineer();
        }
        else if(response.action === "Add Intern"){
            await addIntern();
        }
        else if(response.action === "Add Manager"){
            await addManager();
        }
        else if(response.action === "Create Profile"){
            await createProfile();
        }

        else{
            return;
        }
        menu();
    })

}
async function addManager(){
    await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Manager name:"
        },
        {
            name: "ID",
            type: "input",
            message: "Manager ID:"
        },
        {
            name: "email",
            type: "input",
            message: "Manager Email:"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Manager Office Number:"
        }
    ]).then((response)=>{
        const manager = new Manager(response.name, response.ID, response.email, response.officeNumber);
        team.push(manager);
    })
}
async function addEngineer(){
    await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Engineer name:"
        },
        {
            name: "ID",
            type: "input",
            message: "Engineer ID:"
        },
        {
            name: "email",
            type: "input",
            message: "Engineer Email:"
        },
        {
            name: "github",
            type: "input",
            message: "Engineer Github account:"
        }
    ]).then((response)=>{
        const engineer = new Engineer(response.name, response.ID, response.email, response.github);
        team.push(engineer);
    })
}
async function addIntern(){
    await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Intern name:"
        },
        {
            name: "ID",
            type: "input",
            message: "Intern ID:"
        },
        {
            name: "email",
            type: "input",
            message: "Intern Email:"
        },
        {
            name: "school",
            type: "input",
            message: "Intern School:"
        }
    ]).then((response)=>{
        const intern = new Intern(response.name, response.ID, response.email, response.school);
        team.push(intern);
    })
}
async function createProfile(){
    console.log(team);
}

menu();
