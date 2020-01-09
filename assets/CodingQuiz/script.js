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