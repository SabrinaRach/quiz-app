/*NEUE QUESTION CARD ERSTELLEN */

/*Daten aus dem form.html holen */

const yourQuestionForm = document.querySelector('[data-js="yourQuestionForm"]');

/*Question, answer, tag submitted*/
yourQuestionForm.addEventListener("submit", (event) => {
event.preventDefault();

/*Daten aus Form holen */
const formData = new FormData (event.target); /* collects all data from the form*/
const data = Object.fromEntries(formData); /* creates an object */

/*configure new elements */
const card = document.createElement('div');
const question = document.createElement('p');
const answer = document.createElement('p');
const tag = document.createElement('a');
const title = document.createElement('h2')

/* Inhalte einfügen */
title.textContent = "Your Question"; /*hier steht bei jeder neuen Frage dann "Your Question"*/
question.textContent = data.yourQuestion;
answer.textContent = data.yourAnswer;
tag.textContent = data.tag;

card.classList.add("question-card");

/* 1. Question, Answer, Tag (children) zu Card hinzufügen; 2. Card zu Form hinzufügen */
card.append(title, question, answer, tag);
yourQuestionForm.after(card);
});

/* FORM FIELD TEXT COUNTER */

/*Daten aus dem form.html holen */
const questionInput = document.querySelector("#yourQuestion");
const answerInput = document.querySelector("#yourAnswer");
const questionCount = document.querySelector('[data-js="questionCount"]');
const answerCount = document.querySelector('[data-js="answerCount"]');
const maxLength = 150;

/*Counter ausrechnen*/
function updateCounter(input, counterElement) {
    const remaining = maxLength - input.value.length;
    counterElement.textContent = remaining;
}

/*Input Event erstellen jeweils für Question und Answer */
questionInput.addEventListener("input", () => {
    updateCounter(questionInput, questionCount);
});

answerInput.addEventListener("input", () => {
  updateCounter(answerInput, answerCount);
});