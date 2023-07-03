//Show user menu

const userImage = document.querySelector("#profile-img");
const showMenu = document.querySelector("#hidden-menu");

userImage.addEventListener("click", () => {
  showMenu.classList.toggle("show");
});

//Display hamburger menu on small screens

const menuResponsiveButton = document.getElementById("button-menu-responsive");
const menuResponsive = document.querySelector(".header__nav__navbar");

menuResponsiveButton.addEventListener("click", () => {
  menuResponsive.classList.toggle("show-navbar");
});

//handle dark mode

const darkModeContainer = document.getElementById("dark-mode");
const darkModeButton = document.getElementById("dark-mode__button");

darkModeContainer.addEventListener("click", () => {
  darkModeButton.classList.toggle("on");
});
