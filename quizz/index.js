const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const question = document.querySelector(".question");
const answerContent = document.querySelector(".answers");
const submitBtn = document.querySelector(".submit");
const resultScreen = document.querySelector(".result");
const playAgainBtn = document.querySelector(".play-again");

let qIndex = 0;
let selectedAnswer;
let counterCorrect = 0;
let counterWrong = 0;

const resetValue = () => {
  qIndex = 0;
  counterCorrect = 0;
  counterWrong = 0;
};

playAgainBtn.addEventListener("click", () => {
  resetValue();
  gameScreen.style.display = "block";
  resultScreen.style.display = "none";
});

const showResult = () => {
  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  resultScreen.querySelector(
    ".correct-answer"
  ).textContent = `Correct Answers: ${counterCorrect}`;
  resultScreen.querySelector(
    ".wrong-answer"
  ).textContent = `Wrong Answers: ${counterWrong}`;
  resultScreen.querySelector(".score").textContent = `Score: ${
    (counterCorrect - counterWrong) * 10
  }`;
};

const showQuizz = (quizzIndex) => {
  if (quizzIndex === data.length) return showResult();
  selectedAnswer = null;
  const qData = data[quizzIndex];
  question.textContent = qData.question;
  answerContent.innerHTML = qData.answers
    .map((item, index) => {
      return `
        <div class="answer">
            <input name="answer" id="${index}" type="radio" value="${item.isCorrect}" />
            <label for="${index}">${item.answer}</label>
        </div>
    `;
    })
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answerContent.querySelectorAll("input").forEach((item) => {
    item.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitValue = () => {
  if (selectedAnswer) {
    selectedAnswer === "true" ? counterCorrect++ : counterWrong++;
    qIndex++;
    showQuizz(qIndex);
  } else {
    alert("Please select an answer!");
  }
};

showQuizz(qIndex);

submitBtn.addEventListener("click", () => {
  submitValue();
});
