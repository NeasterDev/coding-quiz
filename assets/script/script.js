// I need variables that link the buttons in html to javascript
// along with variables for the question and the correct/wrong response
// also need localstorage for the high scores
// also needs a timer along with a variable to change the number on the webpage dyamically
// also needs a way to know the correct answer and subtract time from wrong answers
var testQuestionEl = document.querySelector("#test-question");
var questionOptionsEl = document.querySelector('#question-options')
var button1El = document.querySelector("#button-1");
var button2El = document.querySelector("#button-2");
var button3El = document.querySelector("#button-3");
var button4El = document.querySelector("#button-4");
var currentTimerEl = document.querySelector('#current-timer');
var answerResponseEl = document.querySelector("#question-answer");
var answerResponseTextEl = document.querySelector("#question-answer-text");
var isAnswered = false;
var buttonId = 0;
var timeLeft = 5;
var questions = [];

// display a question with options on screen
// when the user clicks an option it tells them if they were correct or not
// and goes to the next question


// function to create new questions
var createQuestion = function(question, a1, a2, a3, a4) {
    var createdQuestion = {
        question: question,
        answer1: a1,
        answer2: a2,
        answer3: a3,
        answer4: a4,
        isAnswered: "false"
    }
    questions.push(createdQuestion);
    return createdQuestion;
}

var writeQuestion = function(question, correctButton) {
    button1El.setAttribute('data-correct', "false");
    button2El.setAttribute('data-correct', "false");
    button3El.setAttribute('data-correct', "false");
    button4El.setAttribute('data-correct', "false");

    testQuestionEl.textContent = question.question;
    button1El.textContent = "1. " + question.answer1;
    button2El.textContent = "2. " + question.answer2; 
    button3El.textContent = "3. " + question.answer3;
    button4El.textContent = "4. " + question.answer4;

    correctButton.setAttribute('data-correct', "true");
}

var subtractTime = function () {
    currentTimerEl.textContent = timeLeft;
    if (timeLeft > 0 ) {
        timeLeft--;
        console.log(currentTimerEl.textContent);
    } else {
        timeLeft = 0;
        clearInterval(timeInterval);
        console.log(currentTimerEl.textContent);
    }
}

var checkCorrectAnswer = function (eventTarget, questionIsAnswered) {
    console.log("Inside checkCorrectAnswer = " + eventTarget);
    console.log("Question.isAnswered value = " + question.isAnswered);
    if (eventTarget === "true" && questionIsAnswered === "false") {
        answerResponseTextEl.textContent = "Correct!";
        answerResponseEl.visibility = "visible";
        questionIsAnswered = true;
        console.log("Correct!");
        return true;
    } else if (eventTarget === "false" && questionIsAnswered === "false") {
        timeLeft = timeLeft - 6;
        answerResponseTextEl.textContent = "Wrong!";
        answerResponseEl.visibility = "visible";
        questionIsAnswered = true;
        console.log("Wrong!!");
        return false;
    }   
}

var buttonClickHandler = function(event) {
    // if the button clicked has a data-correct attribute of true
    // then that is the correct answer, show the correct text, go to next question
    // if the button clicked and its data-correct attribute is false
    // subtract their time and display wrong text, go to next question
    //console.log(event.target.getAttribute('data-correct'));
    for(var i = 0; i <= questions.length; i++){
        if (checkCorrectAnswer(event.target.getAttribute('data-correct'), questions[i].isAnswered) === true) {
            if (i === 0) {
                console.log("i" + " = " + i);
                var question2 = createQuestion("Question2", "answer1","answer2","answer3","answer4");
                writeQuestion(question2, button3El);
                return;
            } else if (i === 1){
                console.log("i" + " = " + i);
                var question3 = createQuestion("Question3", "answer1","answer2","answer3","answer4");
                writeQuestion(question3, button1El);
                return;
            } else if (i === 2){
                console.log("i" + " = " + i);
                var question4 = createQuestion("Question4", "answer1","answer2","answer3","answer4");
                writeQuestion(question4, button2El);
                return;
            } else if (i === 3){
                console.log("i" + " = " + i);
                var question5 = createQuestion("Question5", "answer1","answer2","answer3","answer4");
                writeQuestion(question5, button4El);
                return;
            }
        }
    }
}

var timeInterval = setInterval(subtractTime, 1000);
var question1 = createQuestion("Question1", "answer1","answer2","answer3","answer4"); // correct asnwer 3
writeQuestion(question1, button3El);
// var question2 = createQuestion("Question2", "answer1","answer2","answer3","answer4", button3El); // correct asnwer 3
// var question3 = createQuestion("Question3", "answer1","answer2","answer3","answer4", button4El); // correct asnwer 4
// var question4 = createQuestion("Question4", "answer1","answer2","answer3","answer4", button1El); // correct answer 1
// var question5 = createQuestion("Question5", "answer1","answer2","answer3","answer4", button2El); // correct asnwer 2
questionOptionsEl.addEventListener("click", buttonClickHandler);




