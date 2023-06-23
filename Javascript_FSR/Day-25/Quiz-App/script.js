const data = [
  {
    question: "Capital of India",
    a: "Bhopal",
    b: "Delhi",
    c: "Mumbai",
    d: "Punjab",
    correct: "b",
  },
  {
    question: "Capital of US",
    a: "Texas",
    b: "Atlanta",
    c: "New York",
    d: "Washington D.C",
    correct: "d",
  },
  {
    question: "Prime Minister of India",
    a: "Arvind Kejriwal",
    b: "Amit Shah",
    c: "Narendra Modi",
    d: "Rahul Gandhi",
    correct: "c",
  },
  {
    question: "Calculate 2+2",
    a: "8",
    b: "10",
    c: "6",
    d: "4",
    correct: "d",
  },
  {
    question: "Calculate 6*2",
    a: "12",
    b: "10",
    c: "20",
    d: "100",
    correct: "a",
  },
  {
    question: "Capital of India",
    a: "Bhopal",
    b: "Delhi",
    c: "Mumbai",
    d: "Punjab",
    correct: "b",
  },
  {
    question: "Capital of India",
    a: "Bhopal",
    b: "Delhi",
    c: "Mumbai",
    d: "Punjab",
    correct: "b",
  },
  {
    question: "Capital of US",
    a: "Texas",
    b: "Atlanta",
    c: "New York",
    d: "Washington D.C",
    correct: "d",
  },
  {
    question: "Prime Minister of India",
    a: "Arvind Kejriwal",
    b: "Amit Shah",
    c: "Narendra Modi",
    d: "Rahul Gandhi",
    correct: "c",
  },
  {
    question: "Calculate 2+2",
    a: "8",
    b: "10",
    c: "6",
    d: "4",
    correct: "d",
  },
  {
    question: "Calculate 6*2",
    a: "12",
    b: "10",
    c: "20",
    d: "100",
    correct: "a",
  },
];

let question = document.getElementById("question");

let aOption = document.getElementById("a_option");
let bOption = document.getElementById("b_option");
let cOption = document.getElementById("c_option");
let dOption = document.getElementById("d_option");

let answers = document.getElementsByClassName("answer");

let quizNumber = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  // Un Check all radio button if there are any check
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      answers[i].checked = false;
    }
  }

  question.innerText = data[quizNumber]["question"];
  aOption.innerText = data[quizNumber]["a"];
  bOption.innerText = data[quizNumber]["b"];
  cOption.innerText = data[quizNumber]["c"];
  dOption.innerText = data[quizNumber]["d"];
}

let button = document.getElementById("button");
button.addEventListener("click", function () {
  // Get User Answer.
  let userAnswer = null;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked == true) {
      userAnswer = answers[i].id;
    }
  }

  if (userAnswer) {
    // Check if Answer is Correct or Not.

    if (userAnswer == data[quizNumber]["correct"]) {
      score++;
    }

    console.log("score ===> ", score);
    // Load new Question.
    quizNumber++;
    if (quizNumber < data.length) {
      loadQuiz();
    } else {
      let header = document.getElementById("header");
      header.innerHTML = `
        <h1> Your Score ${score} out of ${data.length} </h1>
      `;

      button.innerText = "Double to Reload Your Quiz";
      button.style.fontSize = "16px";
    }
  }
});

button.addEventListener("dblclick", function () {
  location.reload();
});
