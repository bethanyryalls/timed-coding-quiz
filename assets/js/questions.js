const quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<javascript>", "<js>", "<script>", "<scripting>"],
        correctAnswer: "<script>"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element: <p id='demo'>This is a demonstration.</p>?",
        answers: ["document.getElementById('demo').innerHTML = 'Hello World';", "#demo.innerHTML = 'Hello World';", "document.getElement('p').innerHTML = 'Hello World';", "document.getElementByName('p').innerHTML = 'Hello World';"],
        correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World';"
    },
    {
        question: "Where is the correct place to insert Javascript?",
        answers: ["Both the <head> section and the <body> section", "The <head> section", "The <body> section"],
        correctAnswer: "The <body> section"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>"],
        correctAnswer: "<script src='xxx.js'>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: ["True", "False"],
        correctAnswer: "False"
    }
];