const mainContainer = document.getElementById("saved-container");

mainContainer.style.fontSize = "1.5rem";

mainContainer.classList.add(
  "width__full",
  "flex",
  "flex__item-center",
  "flex__sp-center"
);

const savedContent = localStorage.getItem("saved");

if (savedContent) {
  mainContainer.innerText = "Content to load";
} else {
  mainContainer.innerText = "No content saved";
}
