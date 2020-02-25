const inquirer = require("inquirer");
const fs = require("fs");
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
    fs.writeFile("./output/team.html", await createHTML(), async function(err){
        if (err) console.log("Error finding file");
        console.log("Success");
    })
}
async function createHTML(){
    let HTML = 
    `<!DOCTYPE html>
    <html>
        <head>
            <title>
                My team
            </title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            <style>
                .header{
                    background-color:#ff344f;
                    height: 100px;
                }
                h1{
                    text-align: center;
                    padding: 22px;
                    color: white;
                }
                .padded-container {
                padding: 50px;
                padding-left: 100px;
                padding-right: 100px;
                }
                .card-title{
                    background-color:blue;
                    text-align:center;
                }
                .row{
                    margin: 20px;
                }
            </style>
        </head>
        <body>
    
            <header class = "header">
                <h1>My Team</h1>
            </header>
            <div class = "padded-container">
            `
    
    for (let i = 0; i < team.length; i++){

        if (i % 3 === 0){
            HTML = HTML.concat(
                `<div class = "row justify-content-center">`
            )
        }
        HTML = HTML.concat(
                    `<div class = "col-sm-4">
                        <div class = "card">    
                            <header class = "card-title">
                                <h3 class = "card-title">
                                    ${team[i].name}
                                </h3>
                                <h6 class = "card-subtitle">${team[i].getRole()}</h6>
                            </header>
                            
                            <div class = "card-body">
                                <div class = "container">
                                    <div class = "row">
                                        <a>ID: ${team[i].id}</a>
                                    </div>
                                    <div class = "row">
                                        <a>Email: ${team[i].email}</a>
                                    </div>
                                    <div class = "row">
                                        <a>${getUniqueToken(team[i])}</a>
                                    </div>
                                </div>
                            </div>
                        </div>`
        )
    if (i % 3 == 2){
        HTML = HTML.concat(
                    `</div>`);
    }

    HTML = HTML.concat(
        `        </div>
        </body>
    </html>`
    )
    }
    return HTML;
}

function getUniqueToken(employee){
    switch(employee.getRole()){
        case "Manager":
            return "Office Number: " + employee.officeNumber;
        case "Engineer":
            return "Github: "+ employee.github;
        default:
            return "School: "+ employee.school;
    }
}

menu();
