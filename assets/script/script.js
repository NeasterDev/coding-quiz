// I need variables that link the buttons in html to javascript
// along with variables for the question and the correct/wrong response
// also need localstorage for the high scores
// also needs a timer along with a variable to change the number on the webpage dyamically
// also needs a way to know the correct answer and subtract time from wrong answers
var testQuestion = document.querySelector("#test-question");
var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button3 = document.querySelector("#button-3");
var button4 = document.querySelector("#button-4");
var isAnswered = false;
var buttonId = 0;

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

var writeQuestion = function(question) {
    // var currentQuestion = question.question;
    // testQuestion.textContent = currentQuestion;
    // button1.textContent = "1. " + question.answer1;
    // button1.textContent = "2. " + question.answer2;
    // button1.textContent = "3. " + question.answer3;
    // button1.textContent = "4. " + question.answer4;
    var currentButton = document.querySelector(".button[data-option='" + question)
}



var question1 = createQuestion("Question1", "answer1","answer2","answer3","answer4",);
// writeQuestion(question1);
console.log(testQuestion.textContent);
console.log(button1.textContent);
console.log(button2.textContent);
console.log(button3.textContent);

