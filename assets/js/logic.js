
// setting variable for start quiz button
var startQuizBtn = document.getElementById("start");
// setting variable for start screen div
var startScreen = document.getElementById("start-screen");
// setting variable for questions container
var questionScreen = document.getElementById("questions");
// setting variable for question div
var questionTitle = document.getElementById('question-title');
// setting variable for choices div
var questionChoices = document.getElementById('choices');
// setting variable for time
var timer = document.getElementById('time');
// setting variable for feedback div
var feedback = document.getElementById('feedback');
// setting variable for final-score
var score = document.getElementById('final-score');
// setting variable for end-screen
var endScreen = document.getElementById('end-screen');
// setting variable for initials input box
var initialsInput = document.getElementById('initials');
// setting variable for submit button
var submitBtn = document.getElementById('submit');


// setting current question to 0
var currentQuestionIndex = 0;

// setting start time to 40s
var timeLeft = 40;

var timerInterval;

// set variable for highScores
var highScores = [];

// when start quiz button clicked, run startQuiz function
startQuizBtn.addEventListener("click", startQuiz);

// function to start the quiz
function startQuiz() {

    // // if startScreen is showing, hide it
    if (startScreen.style.display === "none") {
        startScreen.style.display = "block";
    } else {
        startScreen.style.display = "none";
    }
    // run showQuestions function and show the questions div
    showQuestionScreen();
    // run startTimer function
    startTimer();

};

// function which removes 'hide' class and shows the questions screen
function showQuestionScreen() {
    questionScreen.classList.remove("hide");
    // startNextQuestion();
    showQuestion();
};

// function to start timer
function startTimer() {
    timerInterval = setInterval(function () {
        // set timer text to timeLeft
        timer.innerText = timeLeft;
        // set final-score text to timeleft
        score.innerText = timeLeft;
        // make timeleft go down each second
        timeLeft--;
        // if score is less than 0 or all questions answered, time is up
        if (timeLeft < 0 || currentQuestionIndex === quizQuestions.length) {
            stopQuiz();
        }
        // setting countdown interval to 1s
    }, 1000);
};

function showQuestion() {
    // Adding question text to questionTitle based on current question index
    questionTitle.innerText = quizQuestions[currentQuestionIndex].question;
    // Removing previous question and answer
    questionChoices.innerText = "";

    // Setting variable for answer length
    var answersLength = quizQuestions[currentQuestionIndex].answers.length;

    for (i = 0; i < answersLength; i++) {

        // create a button element for each answer
        var answerBtn = document.createElement("button");
        // add each answer text to button with numbered prefix
        answerBtn.textContent = (i + 1) + ". " + quizQuestions[currentQuestionIndex].answers[i];
        // add buttons to choices div
        questionChoices.appendChild(answerBtn);
        // listen for click of each button, run checkAnswer function
        answerBtn.addEventListener("click", checkAnswer);
    }
};


// Function to check users answer and move on to next question
function checkAnswer(event) {

    // Setting variable for selected answer to whatever the user clicked
    // slice(3) is removing the numbered prefix
    var selectedAnswer = event.target.innerText.slice(3);

    // assigning correctAnswer to the correct answer for that question
    var correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    // Checking to see if user has correct answer
    if (selectedAnswer === correctAnswer) {
        // if not the first question, unhide feedback div
        if (currentQuestionIndex <= 1) {
            feedback.classList.remove("hide");
        }
        // display correct in feedback
        feedback.textContent = "Correct!"
    } else {
        if (currentQuestionIndex <= 1) {
            feedback.classList.remove("hide");
        }
        feedback.textContent = "Wrong!"
        timeLeft -= 10;
    }

    // adding 1 to current question index so it can go through each of the questions
    currentQuestionIndex++;

    // Checking that there are more questions, if so - go to next question. if not finish quiz
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        stopQuiz();
    }
    // when submit button clicked, run enterInitials function
submitBtn.addEventListener("click", enterInitials);
};


// function to stop quiz
function stopQuiz() {
    // clear countdown
    clearInterval(timerInterval);

    // store score in score text
    // Math.max to make sure score is always greater than or equal to 0
    score.innerText = Math.max(timeLeft + 1, 0);

    // add class to questionScreen to hide it
    questionScreen.classList.add("hide");
    // remove hide class so endScreen shows
    endScreen.classList.remove("hide");
};


// Function to add initials and score to highscore
function enterInitials() {

    // if user enters more than 3 characters for initials
    if (initialsInput.value.length > 3) {
        alert("You must only enter a maximum of 3 initials");
        // clear the input field
        initialsInput.value = "";
    } else {
    // create new scoreInitials object
    var scoreInitials = {
        // Math.max to make sure score is always greater than or equal to 0
        score: Math.max(timeLeft + 1, 0),
        initials: initialsInput.value
    };

    // adding uniqueKey so that localStorage data isn't overidden
    var uniqueKey = Date.now();

    // Store highScores array in local storage with unique key
    localStorage.setItem(uniqueKey, JSON.stringify(scoreInitials));

    // Redirect to highscores page
    window.location.href = "highscores.html";
}
};