//Log in/sign up page functions

const signUpButtons = document.querySelectorAll(".sign-up-button");
const signUpContainer = document.querySelector("#sign-up-container");

signUpButtons.forEach((el) => {
  el.addEventListener("click", () => {
    signUpContainer.classList.toggle("open");
  });
});

//Log in page

const form = document.querySelector("#button-log-in");

form.addEventListener("click", () => {
  console.log("x");
  window.location.href = "/pages/main.html";
});
