

  /* aktuell hat nur die profile Seite ein toggle */

const toggle = document.querySelector('input[name="darkmode"]');

if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", toggle.checked);
  });
    // sicherstellen, dass default AUS ist
  document.body.classList.remove("dark");
}
