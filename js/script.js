"use strict";

let poll = {
  question: "What is your favourite programming language?",
  answers: ["Html", "Css", "Jacascript", "React,js"],
  pollCount: 20,
  answersWeight: [7, 7, 6, 5],
  selectedAnswer: -1,
};

let pollDom = {
  question: document.querySelector(".poll .question"),
  answers: document.querySelector(".poll .answers"),
};

pollDom.question.innerHTML = poll.question;
pollDom.answers.innerHTML = poll.answers
  .map(function (answer, i) {
    return `
      <div class="answer" onclick="markAnswer(${i})">
        ${answer}
        <span class="percentage-bar"></span>
        <span class="percentage-value"></span>
      </div>
    `;
  })
  .join("");

function markAnswer(i) {
  poll.selectedAnswer = +i;
  try {
    document
      .querySelector(".poll .answers .answer .selected")
      .classList.remove("selected");
  } catch (msg) {
    document
      .querySelectorAll(".poll .answers .answer")
      [+i].classList.add("selected");
  }

  showResults();
}

function showResults() {
  let answers = document.querySelectorAll(".poll .answers .answer");
  for (let i = 0; i < answers.length; i++) {
    let percentage = 0;
    if (i === poll.selectedAnswer) {
      percentage = Math.round(
        (poll.answersWeight[i] * 100) / (poll.pollCount + 1)
      );
    }
    answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
    answers[i].querySelector(".percentage-value").innerHTML = percentage + "%";
  }
}
