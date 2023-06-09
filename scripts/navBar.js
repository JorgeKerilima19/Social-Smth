import createMenuItem from "./components/menuItem.js";

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
  document.body.classList.toggle("dark-mode");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") == "light") {
  darkModeButton.classList.remove("on");
  document.body.classList.remove("dark-mode");
} else if (localStorage.getItem("theme") == "dark") {
  darkModeButton.classList.add("on");
  document.body.classList.add("dark-mode");
} else {
  localStorage.setItem("theme", "light");
}

//responsive right menu

const menuRight = document.querySelector("#menu-right");
const hamburgerButtonRight = document.querySelector(
  "#hamburger-btn__menu-right"
);

hamburgerButtonRight.addEventListener("click", () => {
  menuRight.classList.toggle("show-menu-left");
});

//Right Menu display items

const menuRightItems = [
  {
    itemTitle: "Friends",
    itemImage: false,
    itemTo: "../pages/friends.html",
  },
  {
    itemTitle: "Saved",
    itemImage: false,
    itemTo: "../pages/saved.html",
  },
  {
    itemTitle: "Watch",
    itemImage: false,
    itemTo: "../pages/watch.html",
  },
  {
    itemTitle: "Notifications",
    itemImage: false,
    itemTo: "../pages/notifications.html",
  },
  {
    itemTitle: "Settings and Privacy",
    itemImage: false,
    itemTo: "../pages/settings.html",
  },
];

const menuRightContainer = document.getElementById("menu-right-container");

menuRightItems.forEach((el) => {
  const item = createMenuItem(el.itemImage, el.itemTitle, el.itemTo);

  menuRightContainer.appendChild(item);
});
