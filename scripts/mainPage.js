const signUpButtons = document.querySelectorAll(".sign-up-button");
const signUpContainer = document.querySelector("#sign-up-container");

signUpButtons.forEach((el) => {
  el.addEventListener("click", () => {
    signUpContainer.classList.toggle("open");
  });
});
console.log("object");
