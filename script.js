const questions = [
    {
        question: "What is your name?",
        options: ["Chirag Sharma", "Chinurag", "Chinu", "XChirxg"],
        correct: "A",
        explanation: "Chirag Sharma is the correct name as displayed in the context."
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correct: "B",
        explanation: "Delhi is the capital of India."
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Makeup Language", "Hyper Transfer Machine Language", "Hyper Text Markup Language", "High Tech Markup Language"],
        correct: "C",
        explanation: "HTML stands for Hyper Text Markup Language."
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionBox = document.getElementById("question-box");
    const answerBox = document.getElementById("answer-box");
    const questionEl = document.getElementById("question");
    const options = document.querySelectorAll(".option-text");
    const lineTimer = document.querySelector(".line-timer");

    questionBox.classList.remove("hidden");
    answerBox.classList.add("hidden");

    questionEl.textContent = questions[currentQuestion].question;
    options.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
    });

    lineTimer.style.animation = "none";
    setTimeout(() => {
        lineTimer.style.animation = "";
    }, 0);

    setTimeout(showAnswer, 10000); // Show answer after 10 seconds
}

function showAnswer() {
    const questionBox = document.getElementById("question-box");
    const answerBox = document.getElementById("answer-box");
    const answerText = document.getElementById("answer-text");
    const explanation = document.getElementById("explanation");

    questionBox.classList.add("hidden");
    answerBox.classList.remove("hidden");

    const correctAnswer = questions[currentQuestion].correct;
    const explanationText = questions[currentQuestion].explanation;

    answerText.textContent = `Correct Answer: ${correctAnswer}`;
    explanation.textContent = explanationText;

    setTimeout(nextQuestion, 10000); // Load next question after 10 seconds
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        alert("Quiz Completed!");
        currentQuestion = 0; // Restart quiz
    }
    loadQuestion();
}

function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].correct;
    if (selected === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong Answer!");
    }
}

window.onload = loadQuestion;