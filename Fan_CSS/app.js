const bodyInElement = document.querySelector(".body-in");
const switcher = document.getElementById("toggle");

switcher.addEventListener("change", () => {
  if (bodyInElement.classList.contains("animate")) {
    bodyInElement.classList.remove("animate");
  } else {
    bodyInElement.classList.add("animate");
  }
});
