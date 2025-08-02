// This simple line will confirm if the script is running
console.log("Quiz script loaded successfully!");

// Get DOM elements
const contentsPage = document.getElementById('contents-page');
const quizApp = document.getElementById('quiz-app');
const resultsPage = document.getElementById('results-page');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupMessage = document.getElementById('popup-message');
const examButtonsContainer = document.getElementById('exam-buttons');
const progressBar = document.getElementById('progress-bar');
const finalScoreElement = document.getElementById('final-score');
const disclaimerPopup = document.getElementById('disclaimer-popup');

// Quiz state variables
let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let currentExamIndex = -1;

// Quiz data is now inside the script for simplicity
const exams = [
    {
        title: "Trauma",
        questions: [
            {
                question: "What is the definition of 'Trauma'?",
                options: [
                    "Any injury caused by a fall from height.",
                    "The acute physiological and structural change that occurs in a patient’s body when an external source of energy transfers to the body faster than the body’s ability to sustain and dissipate it.",
                    "A minor injury that does not require hospital admission.",
                    "A psychological response to a distressing event."
                ],
                correctAnswerIndex: 1,
                explanation: "Trauma is defined as the acute physiological and structural change that occurs in a patient’s body when an external source of energy transfers to the body faster than the body’s ability to sustain and dissipate it."
            },
            {
                question: "How is 'Major Trauma' defined?",
                options: [
                    "An injury requiring only basic first aid.",
                    "An injury that is life-threatening but not life-changing.",
                    "An injury or combination of injuries that are life-threatening and could be life changing because it may result in long-term disability.",
                    "Any injury sustained in a road traffic collision."
                ],
                correctAnswerIndex: 2,
                explanation: "Major trauma is defined as an injury or combination of injuries that are life-threatening and could be life changing because it may result in long-term disability."
            },
            {
                question: "What is the primary concern of 'Mechanism of Injury (MOI)'?",
                options: [
                    "The patient's medical history.",
                    "The sum of all physical forces that result in the patient's injury, primarily concerned with the transfer of energy.",
                    "The time elapsed since the injury occurred.",
                    "The emotional impact of the injury on the patient."
                ],
                correctAnswerIndex: 1,
                explanation: "Mechanism of Injury (MOI) is the sum of all physical forces that result in the patient's injury and is primarily concerned with the transfer of energy."
            },
            {
                question: "What is the 'Golden Hour' in trauma care?",
                options: [
                    "The first hour after a patient arrives at the hospital.",
                    "The critical first 60 minutes after a traumatic injury during which there is the highest likelihood that prompt medical and surgical treatment will prevent death.",
                    "The hour before a traumatic event occurs.",
                    "The time it takes for emergency services to arrive on scene."
                ],
                correctAnswerIndex: 1,
                explanation: "The 'Golden Hour' refers to the critical first 60 minutes after a traumatic injury, where timely medical intervention can significantly improve outcomes and prevent death."
            },
            {
                question: "Which of these is a component of the 'Trauma Triad of Death'?",
                options: [
                    "Hypotension",
                    "Hyperglycemia",
                    "Alkalosis",
                    "Coagulopathy"
                ],
                correctAnswerIndex: 3,
                explanation: "The Trauma Triad of Death consists of hypothermia, acidosis, and coagulopathy. These three conditions often occur together in severely injured patients and can lead to a vicious cycle of physiological deterioration."
            },
            {
                question: "What is the initial management priority for a patient with severe trauma?",
                options: [
                    "Detailed patient history taking.",
                    "Airway, Breathing, Circulation (ABC) assessment and management.",
                    "Pain management.",
                    "Wound dressing."
                ],
                correctAnswerIndex: 1,
                explanation: "The primary survey in trauma care prioritizes Airway, Breathing, and Circulation (ABC) to address immediate life-threatening conditions."
            }
        ]
    },
    {
        title: "Burns",
        questions: [
            {
                question: "What is a first-degree burn characterized by?",
                options: [
                    "Blistering and severe pain.",
                    "Redness, pain, and superficial skin damage (epidermis only).",
                    "Charring of tissue and exposed bone.",
                    "Full thickness destruction of skin and underlying tissue."
                ],
                correctAnswerIndex: 1,
                explanation: "First-degree burns, also known as superficial burns, only affect the epidermis, causing redness, minor pain, and no blistering."
            },
            {
                question: "Which layer of skin is affected in a second-degree (partial thickness) burn?",
                options: [
                    "Epidermis only.",
                    "Epidermis and dermis.",
                    "Subcutaneous tissue and muscle.",
                    "Bone."
                ],
                correctAnswerIndex: 1,
                explanation: "Second-degree burns involve both the epidermis and a portion of the dermis, often resulting in blisters, redness, and significant pain."
            },
            {
                question: "What is a key characteristic of a third-degree (full thickness) burn?",
                options: [
                    "Intense pain and swelling.",
                    "Blanching of the skin when pressed.",
                    "Painless, dry, leathery appearance, often with no sensation.",
                    "Rapid healing without scarring."
                ],
                correctAnswerIndex: 2,
                explanation: "Third-degree burns destroy all layers of the skin and may extend into underlying fat, muscle, or bone. Nerve endings are destroyed, leading to a painless, white, waxy, or charred appearance."
            },
            {
                question: "What is the immediate first aid for a chemical burn?",
                options: [
                    "Neutralize the chemical with an acid or base.",
                    "Apply ice directly to the burn.",
                    "Flush the affected area with copious amounts of water.",
                    "Cover the burn with a dry, sterile dressing."
                ],
                correctAnswerIndex: 2,
                explanation: "For chemical burns, immediately flush the affected area with large amounts of cool water for at least 15-30 minutes to dilute and remove the chemical."
            },
            {
                question: "The 'Rule of Nines' is used to estimate what in burn patients?",
                options: [
                    "The depth of the burn.",
                    "The patient's age.",
                    "The total body surface area (TBSA) affected by burns.",
                    "The time until wound healing."
                ],
                correctAnswerIndex: 2,
                explanation: "The Rule of Nines is a standardized tool used in emergency medicine to estimate the total body surface area (TBSA) affected by second- and third-degree burns in adults."
            },
            {
                question: "Why should ice NOT be applied directly to a burn?",
                options: [
                    "It can cause frostbite and further tissue damage.",
                    "It is ineffective for pain relief.",
                    "It speeds up infection.",
                    "It makes the burn deeper."
                ],
                correctAnswerIndex: 0,
                explanation: "Applying ice directly to a burn can cause vasoconstriction, leading to further tissue damage (frostbite) and can also lead to hypothermia in larger burns."
            }
        ]
    }
];

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// --- Initial setup: Populate exam buttons on the contents page ---
function initializeExamButtons() {
    examButtonsContainer.innerHTML = '';
    exams.forEach((exam, index) => {
        const button = document.createElement('button');
        button.className = 'exam-btn';
        button.textContent = `${index + 1}. ${exam.title}`;
        button.onclick = () => startExam(index);
        examButtonsContainer.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', initializeExamButtons);

// --- Navigation Functions ---

function goToContentsPage() {
    quizApp.classList.add('hidden');
    resultsPage.classList.add('hidden');
    contentsPage.classList.remove('hidden');
}

function startExam(index) {
    currentExamIndex = index;

    let allExamQuestions = [...exams[index].questions];
    shuffleArray(allExamQuestions);

    questions = allExamQuestions.slice(0, 55);

    currentQuestionIndex = 0;
    score = 0;

    contentsPage.classList.add('hidden');
    resultsPage.classList.add('hidden');
    quizApp.classList.remove('hidden');

    displayQuestion();
}

function retakeQuiz() {
    if (currentExamIndex !== -1) {
        startExam(currentExamIndex);
    } else {
        goToContentsPage();
    }
}

function goToContentsPageFromResults() {
    goToContentsPage();
}

// --- Quiz Logic Functions ---

function displayQuestion() {
    progressBar.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    const current = questions[currentQuestionIndex];

    if (!current) {
        showResultsPage();
        return;
    }

    questionElement.innerText = current.question;
    optionsElement.innerHTML = '';

    const shuffledOptions = [...current.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = option;
        button.onclick = () => checkAnswer(current.options.indexOf(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const current = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === current.correctAnswerIndex;

    popupTitle.innerText = isCorrect ? "Correct!" : "Incorrect.";
    popupTitle.classList.remove('correct', 'incorrect');
    popupTitle.classList.add(isCorrect ? 'correct' : 'incorrect');

    popupMessage.innerText = current.explanation;

    if (isCorrect) {
        score++;
    }
    showPopup(popup);
}

// Function to show any popup element
function showPopup(popupElement) {
    popupElement.classList.remove('hidden');
}

// Closes the answer explanation popup and continues
function closePopupAndContinue() {
    popup.classList.add('hidden');
    currentQuestionIndex++;
    displayQuestion();
}

function showResultsPage() {
    quizApp.classList.add('hidden');
    contentsPage.classList.add('hidden');
    resultsPage.classList.remove('hidden');
    finalScoreElement.innerText = `You scored ${score} out of ${questions.length} questions correctly!`;
}

function showDisclaimerPopup() {
    disclaimerPopup.classList.remove('hidden');
}

function closeDisclaimerPopup() {
    disclaimerPopup.classList.add('hidden');
}
