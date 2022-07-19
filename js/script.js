"use strict";

let poll = {
  question: "What is your favourite programming language?",
  answers: ["Html", "Css", "Jacascript", "React,js"],
  pollCount: 20,
  answersWeight: [4, 4, 2, 10],
  selectAnswers: -1,
};

let pollDom = {
  question: document.querySelector(".poll .question"),
  answers: document.querySelector(".poll .answers"),
};

pollDom.question.innerHTML = poll.question;
