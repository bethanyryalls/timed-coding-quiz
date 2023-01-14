const quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<javascript>",
            b: "<js>",
            c: "<script>",
            d: "<scripting>"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element: <p id='demo'>This is a demonstration.</p>?",
        answers: {
            a: "document.getElementById('demo').innerHTML = 'Hello World';",
            b: "#demo.innerHTML = 'Hello World';",
            c: "document.getElement('p').innerHTML = 'Hello World';",
            d: "document.getElementByName('p').innerHTML = 'Hello World';"
        },
        correctAnswer: "a"
    },
    {
        question: "Where is the correct place to insert Javascript?",
        answers: {
            a: "Both the <head> section and the <body> section",
            b: "The <head> section",
            c: "The <body> section",
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: {
            a: "<script src='xxx.js'>",
            b: "<script href='xxx.js'>",
            c: "<script name='xxx.js'>",
        },
        correctAnswer: "a"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "b"
    }
];