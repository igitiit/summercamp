const puzzles = [
  {
    question: "Three boxes: A, B, and C. One has the key. A says 'The key is in C.' B says 'The key is not in A.' C says 'The key is not here.' Only one tells the truth. Where is the key?",
    answer: "a",
    hint: "Try assuming each one is telling the truth and see what contradicts."
  },
  {
    question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with the wind. What am I?",
    answer: "echo",
    hint: "Think about sound bouncing."
  },
  {
    question: "What comes next in the sequence: 2, 3, 5, 9, 17, ?",
    answer: "33",
    hint: "Look at the difference between the numbers."
  }
];

let current = 0;
let code = [];

function startGame() {
  current = 0;
  code = [];
  document.getElementById("feedback").textContent = "";
  document.getElementById("hint-text").textContent = "";
  document.getElementById("answer-input").value = "";
  document.getElementById("puzzle-text").textContent = puzzles[current].question;
  updateCodeProgress();
}

function submitAnswer() {
  const input = document.getElementById("answer-input").value.trim().toLowerCase();
  if (input === puzzles[current].answer) {
    document.getElementById("feedback").textContent = "Correct!";
    code.push((current + 3) * 3); // Simple code generation
    current++;
    if (current < puzzles.length) {
      document.getElementById("puzzle-text").textContent = puzzles[current].question;
      document.getElementById("answer-input").value = "";
      document.getElementById("hint-text").textContent = "";
    } else {
      document.getElementById("puzzle-text").textContent = "You escaped! The code was: " + code.join("-");
    }
  } else {
    document.getElementById("feedback").textContent = "Try again!";
  }
  updateCodeProgress();
}

function showHint() {
  document.getElementById("hint-text").textContent = puzzles[current].hint;
}

function updateCodeProgress() {
  document.getElementById("code-progress").textContent = "Code Progress: " + code.join("-");
}
