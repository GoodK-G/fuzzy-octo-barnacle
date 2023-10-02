// Define quiz questions and answers
const questions = [
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does 'JS' stand for?",
        options: ["JavaScript", "Just Saying", "Jumpy Snake"],
        correctAnswer: "JavaScript"
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60; // in seconds
let timerInterval; 

var timer;
var count = 60;
// Event listener for the start button
document.getElementById("startButton").addEventListener("click", startQuiz);

// Function to update the countdown timer display
function updateTimer() {
    document.getElementById("updateTime").textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timerInterval); // Stop the timer when it reaches 0
        endQuiz();
    } else {
        timeLeft--;
    }
}




// Function to start the quiz
function startQuiz() {
    //start the timer and display questions
    timerInterval = setInterval(updateTimer, 1000);
}

// Function to check the answer
function checkAnswer(answer) {
    // Code to validate the answer and update score
}

// Function to end the quiz
function endQuiz() {
    // Code to display the final score and save high score
    alert("Time's up! Your score is " + score);
}



// Call startQuiz() to initiate the quiz when the page loads
startQuiz();