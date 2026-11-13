const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
    answer: "Central Processing Unit"
  },
  {
    category: "Geography",
    question: "What is the capital of Kenya?",
    choices: ["Nairobi", "Kampala", "Dodoma"],
    answer: "Nairobi"
  },
  {
    category: "Mathematics",
    question: "What is 5 multiplied by 6?",
    choices: ["25", "30", "35"],
    answer: "30"
  },
  {
    category: "Programming",
    question: "Which language is used for web page interactivity?",
    choices: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);

console.log(randomQuestion);
console.log(computerChoice);
console.log(getResults(randomQuestion, computerChoice));
