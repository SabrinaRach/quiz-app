
/* Bookmark Button
When the user clicks the bookmark icon the bookmark icon should change it's visual state (e. g. another color or image)
When the user clicks the bookmark icon again the bookmark icon should change to its former style
The user can click on the bookmark endlessly and the bookmark will toggle between both stylings */

const bookmarkQuestion1 = document.querySelector('[data-js="bookmark-question1"]');

bookmarkQuestion1.addEventListener("click", () => {
    const svg = bookmarkQuestion1.querySelector("svg")
 const isActive = bookmarkQuestion1.classList.toggle("active");

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

/