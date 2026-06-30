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
const bookmarkButton = document.createElement('button')
const answerButton = document.createElement('button')

/* Inhalte einfügen */
title.textContent = "Your Question"; /*hier steht bei jeder neuen Frage dann "Your Question" - kann man die Anzahl der bisherigen Questions zählen und eine neue Zahl hinzufügen?*/
question.textContent = data.yourQuestion;
answer.textContent = data.yourAnswer;
tag.textContent = data.tag;
answerButton.textContent = "show answer";
bookmarkButton.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-bookmark-icon lucide-bookmark"
        >
          <path
            d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
          />
        </svg>`;


/* gleiche class zu answer, answerButton, bookmarkButton wie in bookmark.html hinzufügen */
answerButton.classList.add("show-answer")
answer.classList.add("answer")
bookmarkButton.classList.add("bookmark")
tag.classList.add("tag")


/*aus dem neuen Element <div> </div> wird: <div class="question-card"></div> */
card.classList.add("question-card");

/* 1. Question, Answer, Tag, usw. (children) zu Card hinzufügen; 2. Card zu Form hinzufügen */
card.append(title, question, answer, bookmarkButton, answerButton, tag);

yourQuestionForm.after(card);
});

/* FORM FIELD TEXT COUNTER */

/*Daten aus dem form.html holen */
const questionInput = document.querySelector("#yourQuestion"); /*referencing the <textarea> elements */
const answerInput = document.querySelector("#yourAnswer"); /*referencing the <textarea> elements */
const questionCount = document.querySelector('[data-js="questionCount"]');
const answerCount = document.querySelector('[data-js="answerCount"]');
const maxLength = 150;

/*Counter ausrechnen - eine Funktion für beide Rechnungen*/
/* input steht für questionInput bzw. answerInput und counterElement für questionCount bzw. answerCount */
function updateCounter(input, counterElement) {
    const remaining = maxLength - input.value.length;
    counterElement.textContent = remaining;
}

/*Input Event erstellen jeweils für Question und Answer Counter*/
questionInput.addEventListener("input", () => {
    updateCounter(questionInput, questionCount);
});

answerInput.addEventListener("input", () => {
  updateCounter(answerInput, answerCount);
});