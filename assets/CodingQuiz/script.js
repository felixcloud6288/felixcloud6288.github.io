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
function intervalTimer(){
    var timerInterval = setInterval(function(){
        console.log("entered timer")
        secondsRemaining--
        console.log(secondsRemaining)
        timer.textContent = "remaining time: " + secondsRemaining
        if (secondsRemaining === 0){
            clearInterval(timerInterval)
            i++
        }
    }, 1000)
}
function beginQuiz(event){
    console.log("Entered quiz")
    // Create the components of the page
    var questionCount = document.createElement("div")
    var question = document.createElement("div")
    var timer = document.createElement("h1")
    var button1 = document.createElement("button")
    var button2 = document.createElement("button")
    var button3 = document.createElement("button")
    var button4 = document.createElement("button")
    // Add attributes to them. Buttons are given an ID to determine which has the right answer
    button1.setAttribute("data-align", 0)
    button2.setAttribute("data-align", 1)
    button3.setAttribute("data-align", 2)
    button4.setAttribute("data-align", 3)
    
    // Append to the page
    document.body.appendChild(timer)
    document.body.appendChild(questionCount)
    document.body.removeChild(document.getElementById("start"))
    // loop through the quiz
    var i = 0

    // Doesn't work, rewrite so timer is not in while loop
    while (i < quiz.questions.length){
        console.log("i = " + i)
        var secondsRemaining = 10
        questionCount.innerHTML = "Question "+(i+1)+":"
        question.innerHTML = quiz.questions[i]
        questionCount.appendChild(question)
        question.appendChild(button1)
        question.appendChild(button2)
        question.appendChild(button3)
        question.appendChild(button4)
        button1.textContent = quiz.answers[i][0]
        button2.textContent = quiz.answers[i][1]
        button3.textContent = quiz.answers[i][2]
        button4.textContent = quiz.answers[i][3]
        console.log("i = " + i + " seconds Remaining = " + secondsRemaining)
        intervalTimer()
    }
}

var startButton = document.createElement("button")
startButton.textContent = "Click here to begin"
startButton.setAttribute("id", "start")
startButton.addEventListener("click", beginQuiz)
document.body.appendChild(startButton)
