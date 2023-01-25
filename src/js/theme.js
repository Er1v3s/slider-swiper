// dark mode
const themeBtn = document.querySelector("input");
const bg = document.body;

themeBtn.addEventListener("click", () => {
  bg.classList.toggle("dark-mode");
});
