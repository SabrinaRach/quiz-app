/* Bookmark Button
When the user clicks the bookmark icon the bookmark icon should change it's visual state (e. g. another color or image)
When the user clicks the bookmark icon again the bookmark icon should change to its former style
The user can click on the bookmark endlessly and the bookmark will toggle between both stylings */

/*Daten von Bookmark aus Question 1 aus dem html holen */
const bookmarkQuestion1 = document.querySelector(
  '[data-js="bookmark-question1"]',
);

/* EventListener immer wenn User auf Bookmark klickt*/
bookmarkQuestion1.addEventListener("click", () => {
  /*das svg innerhalb des Buttons finden */
  const svg = bookmarkQuestion1.querySelector("svg");
  /* Klasse umschalten:  vorher: <button class="bookmark">, nachher: <button class="bookmark active">; toggle() gibt den Wert true zurück*/
  /*beim zweiten Klick ist es umgekehrt */
  const isActive = bookmarkQuestion1.classList.toggle("active");

  /* if (isActive) { ist dasselbe wie if (isActive === true) {*/
  if (isActive) {
    svg.setAttribute("fill", "antiquewhite");
  } else {
    svg.setAttribute("fill", "rgb(248, 117, 117)");
  }
});

/*später für alle bookmarks
//const bookmarks = document.querySelectorAll(".bookmark");

//bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("active");
  });
}); */

/* Hidden Answer 
When the user clicks on the button the previously hidden answer should be displayed
When the user clicks this button again the answer is hidden again
The user can click on this button endlessly and the answer will either be displayed or hidden after each click
The toggle functionality should be applied by using a class which is named "hidden" */

/* funktiniert nur beim ersten Element, da querySelector das erste Element zurückgibt, das es findet*/
const answer = document.querySelector('[data-js="showAnswer"]');
const button = document.querySelector('[data-js="clickShowAnswer"]');

button.addEventListener("click", () => {
  /* Bei jedem Klick wird der hidden-Zustand einfach umgedreht (true ↔ false).*/
  answer.hidden = !answer.hidden;

  /* If the user clicks on an answer button, we want the button to say "hide answer" when the answer is displayed and "show answer" when the answer is not displayed. */
  button.textContent = answer.hidden ? "show answer" : "hide answer";

  /* längere Variante mit if else:
if (!answer.hidden) {
    button.textContent = "hide answer";
}
else {
    button.textContent = "show answer";
}*/
});
