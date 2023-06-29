//Log in/sign up page functions

const signUpButtons = document.querySelectorAll(".sign-up-button");
const signUpContainer = document.querySelector("#sign-up-container");

signUpButtons.forEach((el) => {
  el.addEventListener("click", () => {
    signUpContainer.classList.toggle("open");
  });
});

//MainPage functions

const select = document.querySelector("#select");
