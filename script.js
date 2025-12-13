const TIME_LIMIT = 25;
let timeLeft;
let timerInterval;
let answered = false;

let questions = [
    {
        question: "O que é um cabo DROP na fibra óptica?",
        answers: [
            { text: "Cabo de acesso final até o cliente", correct: true },
            { text: "Cabo do backbone", correct: false },
            { text: "Cabo submarino", correct: false },
            { text: "Cabo metálico", correct: false }
        ]
    },
    {
        question: "O que significa ASU em cabos ópticos?",
        answers: [
            { text: "Auto Sustentado Tubo Único", correct: true },
            { text: "Alta Sensibilidade Única", correct: false },
            { text: "Amplificador de Sinal Urbano", correct: false },
            { text: "Aterramento de Sistema Único", correct: false }
        ]
    },
    {
        question: "Para que serve o cabo AS?",
        answers: [
            { text: "Instalação aérea com mensageiro", correct: true },
            { text: "Uso exclusivo interno", correct: false },
            { text: "Backbone submarino", correct: false },
            { text: "Cabo metálico blindado", correct: false }
        ]
    },
    {
        question: "Qual conector é usado em cabos de rede?",
        answers: [
            { text: "RJ45", correct: true },
            { text: "RJ11", correct: false },
            { text: "BNC", correct: false },
            { text: "SC", correct: false }
        ]
    },
    {
        question: "Qual padrão é comum em cabos GTS Network?",
        answers: [
            { text: "Cat5e e Cat6", correct: true },
            { text: "Cat3", correct: false },
            { text: "Coaxial RG6", correct: false },
            { text: "Fibra multimodo", correct: false }
        ]
    },
    {
        question: "Qual marca faz parte da Bluecom?",
        answers: [
            { text: "Lan Expert", correct: true },
            { text: "Cisco", correct: false },
            { text: "Huawei", correct: false },
            { text: "Ubiquiti", correct: false }
        ]
    },
    {
        question: "A GTS Network atua principalmente em:",
        answers: [
            { text: "Infraestrutura e cabeamento", correct: true },
            { text: "Telefonia móvel", correct: false },
            { text: "Cloud pública", correct: false },
            { text: "Rádios digitais", correct: false }
        ]
    },
    {
        question: "Transcend é conhecida por:",
        answers: [
            { text: "Cabos ópticos", correct: true },
            { text: "Memória e armazenamento", correct: false },
            { text: "Switches", correct: false },
            { text: "Roteadores Wi-Fi", correct: false }
        ]
    },
    {
        question: "Qual fibra é mais usada em FTTH?",
        answers: [
            { text: "Monomodo", correct: true },
            { text: "Multimodo", correct: false },
            { text: "Metálica", correct: false },
            { text: "Coaxial", correct: false }
        ]
    },
    {
        question: "Ferramenta correta para RJ45:",
        answers: [
            { text: "Alicate de crimpagem", correct: true },
            { text: "OTDR", correct: false },
            { text: "Multímetro", correct: false },
            { text: "Furadeira", correct: false }
        ]
    }
];

let currentQuestion = 0;
let correctAnswers = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const correctCountEl = document.getElementById("correct-count");
const questionCountEl = document.getElementById("question-count");
const finalScoreEl = document.getElementById("final-score");
const timerBar = document.getElementById("timer-bar");

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
    questions = shuffle(questions); // 🔀 embaralha perguntas
    currentQuestion = 0;
    correctAnswers = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    loadQuestion();
}

function startTimer() {
    timeLeft = TIME_LIMIT;
    timerBar.style.width = "100%";

    timerInterval = setInterval(() => {
        timeLeft--;
        timerBar.style.width = (timeLeft / TIME_LIMIT) * 100 + "%";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeExpired();
        }
    }, 1000);
}

function loadQuestion() {
    clearInterval(timerInterval);
    answered = false;
    nextBtn.style.display = "none";
    answersEl.innerHTML = "";

    questionEl.innerText = questions[currentQuestion].question;
    correctCountEl.innerText = correctAnswers;
    questionCountEl.innerText = currentQuestion;

    const shuffledAnswers = shuffle([...questions[currentQuestion].answers]);

    shuffledAnswers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerText = answer.text;
        btn.classList.add("answer");
        btn.onclick = () => selectAnswer(btn, answer.correct);
        answersEl.appendChild(btn);
    });

    startTimer();
}

function selectAnswer(selectedButton, isCorrect) {
    if (answered) return;
    answered = true;

    clearInterval(timerInterval);
    const buttons = document.querySelectorAll(".answer");
    buttons.forEach(btn => btn.disabled = true);

    buttons.forEach(btn => {
        const text = btn.innerText;
        const correct = questions[currentQuestion].answers.find(a => a.text === text)?.correct;
        if (correct) btn.classList.add("correct");
    });

    if (isCorrect) {
        correctAnswers++;
    } else {
        selectedButton.classList.add("wrong");
    }

    nextBtn.style.display = "block";
}

function timeExpired() {
    if (answered) return;
    answered = true;

    const buttons = document.querySelectorAll(".answer");
    buttons.forEach(btn => btn.disabled = true);

    buttons.forEach(btn => {
        const text = btn.innerText;
        const correct = questions[currentQuestion].answers.find(a => a.text === text)?.correct;
        if (correct) btn.classList.add("correct");
    });

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.remove("active");
    endScreen.classList.add("active");
    finalScoreEl.innerText =
        `Você respondeu ${currentQuestion} perguntas e acertou ${correctAnswers}.`;
}

function restartQuiz() {
    endScreen.classList.remove("active");
    startScreen.classList.add("active");
}
