<script>
const toggle = document.querySelector('input[name="darkmode"]');

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});
</script>