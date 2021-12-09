var questionTextEl = document.querySelector("#question-text");
var buttonContainerEl = document.querySelector("#question-options");
var button1El = document.querySelector("#button-1");
var button2El = document.querySelector("#button-2");
var button3El = document.querySelector("#button-3");
var button4El = document.querySelector("#button-4");
var hiddenAnswer = document.querySelector("#question-answer");
var startButtonEl = document.querySelector("#start-button");
var buttonsEl = document.querySelectorAll(".button");


var questionCounter = 0;


var questionArray = [
    {
        question: "Commonly used Data Types do not include:",
        answers: {
            a: "1. Strings",
            b: "2. Booleans",
            c: "3. alerts",
            d: "4. numbers"
        },
        correctAnswer: "c",
        isAnswered: "false"
    },
    {
        question: "The condition in an if/else statement is enclosed with ____:",
        answers: {
            a: "1. Quotes",
            b: "2. Curly braces",
            c: "3. Square brackets",
            d: "4. Parenthesis"
        },
        correctAnswer: "b",
        isAnswered: "false"
    },
    {
        question: "Arrays in Javascript can be used to store ___:",
        answers: {
            a: "1. Numbers and strings",
            b: "2. Booleans",
            c: "3. Other arrays",
            d: "4. All of the above"
        },
        correctAnswer: "d",
        isAnswered: "false"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            a: "1. Commas",
            b: "2. Curly brackets",
            c: "3. Quotes",
            d: "4. Parenthesis",
        },
        correctAnswer: "c",
        isAnswered: "false"
    },
    {
        question: "A very useful tool used during development and debugging for printing" +
        "content to the debugger is:",
        answers: {
            a: "1. JavaScript",
            b: "2. Terminal/Bash",
            c: "3. For loops",
            d: "4. console.log",
        },
        correctAnswer: "d",
        isAnswered: "false"
    }
]

var writeQuestion = function(question) {
    questionTextEl.textContent = question.question;
    button1El.textContent = question.answers.a;
    button2El.textContent = question.answers.b;
    button3El.textContent = question.answers.c;
    button4El.textContent = question.answers.d;

    hiddenAnswer.style.visibility = "visible";
    questionCounter++;
}

var buttonClickHandler = function (event) {
    hiddenAnswer.style.visibility = "hidden";
    console.log("Question 0" + JSON.stringify(questionArray[0]));
    console.log(event.target.getAttribute('data-correct'));
    console.log(questionArray[0].correctAnswer);


    if (event.target.textContent === "Start") {
        writeQuestion(questionArray[0]);
        hiddenAnswer.style.visibility = "hidden";
        for (var i = 0; i < buttonsEl.length; i++) {
            buttonsEl[i].style.visibility = "visible";
        }
        startButtonEl.remove();
    } else if (event.target.getAttribute('data-correct') === questionArray[0].correctAnswer && questionArray[0].isAnswered === "false" && questionCounter === 1) {
        questionArray[0].isAnswered = "true";
        writeQuestion(questionArray[1]);
    } else if (event.target.getAttribute('data-correct') === questionArray[1].correctAnswer && questionArray[1].isAnswered === "false" && questionCounter === 2) {
        questionArray[1].isAnswered = "true";
        writeQuestion(questionArray[2]);
    } else if (event.target.getAttribute('data-correct') === questionArray[2].correctAnswer && questionArray[2].isAnswered === "false" && questionCounter === 3) {
        questionArray[2].isAnswered = "true";
        writeQuestion(questionArray[3]);
    } else if (event.target.getAttribute('data-correct') === questionArray[3].correctAnswer && questionArray[3].isAnswered === "false" && questionCounter === 4) {
        questionArray[3].isAnswered = "true";
        writeQuestion(questionArray[4]);
    } else if (event.target.getAttribute('data-correct') === questionArray[4].correctAnswer && questionArray[4].isAnswered === "false" && questionCounter === 5) {
        questionArray[4].isAnswered = "true";
        //writeQuestion(questionArray[5]);
    }
}
console.log(buttonContainerEl);
console.log(questionArray[0].question);
buttonContainerEl.addEventListener("click", buttonClickHandler);

