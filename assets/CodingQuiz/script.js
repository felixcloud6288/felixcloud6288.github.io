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
function setButtonDetails(button, index, id){
    button.setAttribute("data-index", index)
    button.setAttribute("id", id)
}

function buildQuiz(i){
    // Create the components of the page
    var questionCount = document.createElement("div")
    var question = document.createElement("div")
    var button1 = document.createElement("button")
    var button2 = document.createElement("button")
    var button3 = document.createElement("button")
    var button4 = document.createElement("button")
    // Add attributes to them. Buttons are given an ID to determine which has the right answer
    questionCount.setAttribute("id", "question")
    setButtonDetails(button1, i, "0")
    setButtonDetails(button2, i, "1")
    setButtonDetails(button3, i, "2")
    setButtonDetails(button4, i, "3")
    
    // Append to the page
    document.body.appendChild(questionCount)

    questionCount.innerHTML = "Question "+(i+1)+":"
    question.innerHTML = quiz.questions[i]
    questionCount.appendChild(question)
    question.appendChild(button1)
    question.appendChild(button2)
    question.appendChild(button3)
    question.appendChild(button4)

    // Set button text
    button1.textContent = quiz.answers[i][0]
    button2.textContent = quiz.answers[i][1]
    button3.textContent = quiz.answers[i][2]
    button4.textContent = quiz.answers[i][3]

    button1.addEventListener("click", function(event){
        answerClick(event)
    })
    button2.addEventListener("click", function(event){
        answerClick(event)
    })
    button3.addEventListener("click", function(event){
        answerClick(event)
    })
    button4.addEventListener("click", function(event){
        answerClick(event)
    })
}

function answerClick(event){
    var index = event.target.getAttribute("data-index")
    var answer = event.target.getAttribute("id")
    console.log(answer)

    if (quiz.correct[index][answer])
    {
        console.log("correct")
    }
    else{
        console.log("incorrect")
    }
    if (index >= 4){
        clearInterval(timerInterval)
        return;
    }
    else{
        document.body.removeChild(document.getElementById("question"))
        buildQuiz(++index)
    }
}

function beginQuiz(event){
    console.log("Entered quiz")
    var i = 0;
    var secondsRemaining = 9

    var timer = document.createElement("h1")
    timer.textContent = "remaining time: " + secondsRemaining
    document.body.removeChild(document.getElementById("start"))
    document.body.appendChild(timer)

    buildQuiz(i)

    var timerInterval = setInterval(function(){
        console.log("entered timer")
        console.log(secondsRemaining)
        if (secondsRemaining == 0){
            i = document.getElementById("0").getAttribute("data-index")
            console.log("i = "+i)
            if (i >= 4){
                clearInterval(timerInterval)
                return;
            }
            else{
                document.body.removeChild(document.getElementById("question"))
                secondsRemaining = 10
                buildQuiz(++i)
            }
        }
        secondsRemaining--
        timer.textContent = "remaining time: " + secondsRemaining
    }, 1000)
}


var startButton = document.createElement("button")
startButton.textContent = "Click here to begin"
startButton.setAttribute("id", "start")
startButton.addEventListener("click", beginQuiz)
document.body.appendChild(startButton)