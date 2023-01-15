
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

var currentQuestionIndex = 0;


// function to show the next question
// function startNextQuestion() {
//     showQuestion();

// }

function showQuestion() {
    questionTitle.innerText = quizQuestions[currentQuestionIndex].question;

    var answersLength = quizQuestions[currentQuestionIndex].answers.length;
    var ol = document.createElement("ol");
    questionChoices.appendChild(ol);

    for (i = 0; i < answersLength; i++) {
            
            var li = document.createElement("li");
            li.textContent = quizQuestions[currentQuestionIndex].answers[i];
            ol.appendChild(li);
            li.addEventListener("click", checkAnswer);
}
}


// function which removes 'hide' class and shows the questions screen
function showQuestionScreen() {
    questionScreen.classList.remove("hide");
    currentQuestionIndex = 0;
    // startNextQuestion();
    showQuestion();
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