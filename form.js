/*NEUE QUESTION CARD ERSTELLEN */
console.log("JS FILE IS RUNNING");
console.log("Cards found:", document.querySelectorAll('.question-card').length);
/*Daten aus dem form.html holen */

const yourQuestionForm = document.querySelector('[data-js="yourQuestionForm"]');

/*title (h2) jeder question card soll mitzählen und bei jeder neuen question +1 addieren - also "question 7", "question 8" usw. */
/* Das funktioniert nach aktuellem Stand noch nicht. Bisher können nur in der form bei neuen questions ab 1 hochgezählt werden*/

let nextNumber = document.querySelectorAll('[data-js="titleh2"]').length; /* titleh2 ist aus dem index.html, querySelectorAll sucht nach allen Elementen, deren Attribut data-js den Wert titleh2 hat*/
console.log(nextNumber) /* zeigt 0, da das Vorgehen so nicht funktioniert*/

/*Question, answer, tag submitted*/
yourQuestionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  /*Daten aus Form holen */
  const formData = new FormData(
    event.target,
  ); /* collects all data from the form*/
  const data = Object.fromEntries(formData); /* creates an object */
 

  /*configure new elements */
  const card = document.createElement("div");
  const question = document.createElement("p");
  const answer = document.createElement("p");
  const tag = document.createElement("a");
  const title = document.createElement("h2");
  const bookmarkButton = document.createElement("button");
  const answerButton = document.createElement("button");


  
  /* Inhalte einfügen */
  nextNumber++; /*zählt immer +1 bei jeder neuen hinterlegten Frage */
  title.textContent = "Question " + nextNumber;
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
    
  /* gleiche class zu answer, answerButton, bookmarkButton, tag wie in bookmark.html hinzufügen */
  answerButton.classList.add("show-answer");
  answer.classList.add("answer");
  answer.classList.add("hidden");
  bookmarkButton.classList.add("bookmark");
  tag.classList.add("tag");

  /*aus dem neuen Element <div> </div> wird: <div class="question-card"></div> */
  card.classList.add("question-card");

  /* ADD EVENT LISTENERS TO BOOKMARK AND SHOW ANSWER BUTTON */

  /* Zweiter EventListener innerhalb des Submit-EventListener immer wenn User auf Bookmark klickt*/
  bookmarkButton.addEventListener("click", () => {
    /*das svg innerhalb des Buttons finden */
    const svg = bookmarkButton.querySelector("svg");
    /* Klasse umschalten:  vorher: <button class="bookmark">, nachher: <button class="bookmark active">; toggle() gibt den Wert true zurück*/
    /*beim zweiten Klick ist es umgekehrt */
    const isActive = bookmarkButton.classList.toggle("active");

    /* if (isActive) { ist dasselbe wie if (isActive === true) {*/
    if (isActive) {
      svg.setAttribute("fill", "antiquewhite");
    } else {
      svg.setAttribute("fill", "rgb(248, 117, 117)");
    }
  });
 
  /* Dritter EventListener innerhalb des Submit-EventListener immer wenn User auf den showAnswer-Button klickt*/
answerButton.addEventListener("click", () => {
  /* Bei jedem Klick wird der hidden-Zustand einfach umgedreht (true ↔ false). Dieses */
  const isHidden = answer.classList.toggle("hidden");

  /* If the user clicks on an answer button, we want the button to say "hide answer" when the answer is displayed and "show answer" when the answer is not displayed. */
  answerButton.textContent = isHidden ? "show answer" : "hide answer";
  });

  /* 1. Question, Answer, Tag, usw. (children) zu Card hinzufügen; 2. Card zu Form hinzufügen */
  card.append(title, question, answerButton, answer, bookmarkButton, tag);

  yourQuestionForm.after(card);
});

/* FORM FIELD TEXT COUNTER */

/*Daten aus dem form.html holen */
const questionInput =
  document.querySelector(
    "#yourQuestion",
  ); /*referencing the <textarea> elements */
const answerInput =
  document.querySelector(
    "#yourAnswer",
  ); /*referencing the <textarea> elements */
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

