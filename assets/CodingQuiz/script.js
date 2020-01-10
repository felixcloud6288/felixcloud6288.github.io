// Quiz Content
var quiz = {
    questions: [
        "Which of the following languages are not used for web development?", 
        "What style property determines font color?",
        "What is the index of '5' in this array: [4, 8, 5]?",
        "What tag would you use to insert an image?",
        "What type of data is var x = \"50\"?"
    ],
    answers:[
        ["CSS", "Java", "HTML", "Javascript"],
        ["font", "color", "font-color", "text-color"],
        [ "0", "1", "2", "3"],
        ["img", "image", "picture", "insert-image"],
        ["integer", "char", "string", "boolean"]
    ],
    correct:[
        [false, true, false, false],
        [false, true, false, false],
        [false, false, true, false],
        [true, false, false, false],
        [false, false, true, false]
    ]
}
function beginQuiz(event){
    console.log("Entered quiz")
    // Create the components of the page
    var questionCount = document.createElement("div")
    var question = document.createElement("div")
    var button1 = document.createElement("button")
    var button2 = document.createElement("button")
    var button3 = document.createElement("button")
    var button4 = document.createElement("button")
    // Add attributes to them. Buttons are given an ID to determine which has the right answer
    
    // Append to the page

    // loop through the quiz
}

var button = document.createElement("button")
button.textContent = "Click here to begin"
button.addEventListener("click", beginQuiz)
document.body.appendChild(button)