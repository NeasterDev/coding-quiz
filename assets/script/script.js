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
var isAnswered = false;
var buttonId = 0;
var timeLeft = 5;

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
        isAnswered: false
    }
    return createdQuestion;
}

var writeQuestion = function(question,correctAnswer) {
    var currentQuestion = question.question;
    correctAnswer.setAttribute('data-correct', "true");
    testQuestionEl.textContent = currentQuestion;
    button1El.textContent = "1. " + question.answer1;
    button2El.textContent = "2. " + question.answer2; 
    button3El.textContent = "3. " + question.answer3;
    button4El.textContent = "4. " + question.answer4;

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

var buttonClickHandler = function(event) {
    // if the button clicked has a data-correct attribute of true
    // then that is the correct answer, show the correct text, go to next question
    // if the button clicked and its data-correct attribute is false
    // subtract their time and display wrong text, go to next question

    console.log(event.target.getAttribute('data-correct'));

    if (event.target.getAttribute('data-correct') === "false") {
        timeLeft = timeLeft - 6;

    } else if (event.target.getAttribute('data-correct') === "true") {

    }

}

var timeInterval = setInterval(subtractTime, 1000);
var question1 = createQuestion("Question1", "answer1","answer2","answer3","answer4",); // correct asnwer 3
var question2 = createQuestion("Question2", "answer1","answer2","answer3","answer4",); // correct asnwer 3
var question3 = createQuestion("Question3", "answer1","answer2","answer3","answer4",); // correct asnwer 4
var question4 = createQuestion("Question4", "answer1","answer2","answer3","answer4",); // correct answer 1
var question5 = createQuestion("Question5", "answer1","answer2","answer3","answer4",); // correct asnwer 2
writeQuestion(question1, button1El);
questionOptionsEl.addEventListener("click", buttonClickHandler);



