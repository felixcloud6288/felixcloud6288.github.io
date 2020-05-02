
const projects = [
    {
        name: "Employee Directory",
        url:"https://afternoon-everglades-46457.herokuapp.com/"
    },
    {
        name: "Budget Tracker",
        url: "https://damp-tor-20091.herokuapp.com/"
    },
    {
        name: "Game Guru",
        url: "https://gameguru.herokuapp.com/"
    },
    {
        name: "Eat-da-Borger",
        url:"https://eat-da-borger.herokuapp.com/"
    },
    {
        name: "Exercise Tracker",
        url:"https://fierce-cove-13177.herokuapp.com/"
    },
    {
        name: "Password generator",
        url:"submodules/passwordGen/password.html"
    },
    {
        name: "Day planner",
        url:"Schedule/Develop/index.html"
    },
    {
        name: "Coding Quiz",
        url:"codingQuiz/index.html"
    },
    {
        name: "Weather Report",
        url:"WeatherReport/index.html"
    },
    {
        name: "Note Taker",
        url: "https://ancient-shelf-45017.herokuapp.com/"
    },
    {
        name: "Food Explorer",
        url: "FoodExplorer/index.html"
    },
]

function makeProjectArray(indexArray){
    let projectArray=[];
    indexArray.forEach(index=>{
        projectArray.push(projects[index]);
    })
    return projectArray;
}
function getProjects(){
    let indexArray = [];
    while (indexArray.length < 6){
        const index = Math.floor(Math.random()*projects.length);
        if (!indexArray.includes(index)){
            indexArray.push(index);
        }
    }
    return makeProjectArray(indexArray);
}
const randProjects = getProjects();

export default randProjects;