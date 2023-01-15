
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

// setting current question to 0
var currentQuestionIndex = 0;

function showQuestion() {
    // Adding question text to questionTitle based on current question index
    questionTitle.innerText = quizQuestions[currentQuestionIndex].question;
    // Removing previous question and answer
    questionChoices.innerText = "";

    // Setting variable for answer length
    var answersLength = quizQuestions[currentQuestionIndex].answers.length;

    // creating an ordered list element
    var ol = document.createElement("ol");

    // Adding ordered list to the choices div
    questionChoices.appendChild(ol);
    
    for (i = 0; i < answersLength; i++) {
            
         // For every answer in question, add a list element
            var li = document.createElement("li");
            // Set the text to the answer using index
            li.textContent = quizQuestions[currentQuestionIndex].answers[i];
            // add li to ol element
            ol.appendChild(li);
            // listen for click of li and run checkAnswer function
            li.addEventListener("click", checkAnswer);
}
}

// Function to check users answer and move on to next question
function checkAnswer(event) {

    // Setting variable for selected answer to whatever the user clicked
    var selectedAnswer = event.target.innerText;

    // assigning correctAnswer to the correct answer for that question
    var correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    // Checking to see if user has correct answer
    if (selectedAnswer === correctAnswer) {
        alert("Correct");
    } else {
        alert("Incorrect. The correct answer is " + correctAnswer);
    }

    // adding 1 to current question index so it can go through each of the questions
    currentQuestionIndex++;

    // Checking that there are more questions, if so - go to next question. if not finish quiz
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        alert("You've completed the quiz!");
    }
}

// Add event listener to the answer choices that call the 'checkAnswer' function when clicked
var answerChoices = document.querySelectorAll("li");

for (i = 0; i < answerChoices.length; i++) {
    answerChoices[i].addEventListener("click", checkAnswer);
}

// function which removes 'hide' class and shows the questions screen
function showQuestionScreen() {
    questionScreen.classList.remove("hide");
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