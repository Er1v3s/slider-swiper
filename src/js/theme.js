// dark mode
const themeBtn = document.querySelector("input");
const body = document.body;

const handleDarkTheme = () => {
  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
  }
};

themeBtn.addEventListener("change", handleDarkTheme);
