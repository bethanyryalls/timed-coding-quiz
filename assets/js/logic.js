
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

var currentQuestionIndex;


// function to show the next question
function startNextQuestion() {
    showQuestion(currentQuestionIndex);

}

function showQuestion() {
    for (i = 0; i < )
    questionTitle.innerText = quizQuestions[0].question;
    questionChoices.innerText = quizQuestions[0].answers['a'];
}

// function which removes 'hide' class and shows the questions screen
function showQuestionScreen() {
    questionScreen.classList.remove("hide");
    currentQuestionIndex = 0;
    startNextQuestion();
}

// function to start the quiz
function startQuiz() {
    alert("You've started the quiz");

    // // if startScreen is showing, hide it
    if (startScreen.style.display === "none") {
        startScreen.style.display = "block";
    } else {
        startScreen.style.display = "none";
    }

    // run showQuestions function and show the questions div
    showQuestionScreen();
    
}

// when start quiz button clicked, run startQuiz function
startQuizBtn.addEventListener("click", startQuiz);