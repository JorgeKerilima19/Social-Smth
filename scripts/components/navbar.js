import hiddenMenu from "./hiddenMenu.js";

const navRoutes = [
  {
    itemlogo: "../assets/svg/chat.svg",
    name: "ROute1",
    to: "./messages.html",
  },
  {
    itemlogo: "../assets/svg/watch.svg",
    name: "ROute1",
    to: "./watch.html",
  },
  {
    itemlogo: "../assets/svg/notifications.svg",
    name: "ROute1",
    to: "./notifications.html",
  },
];

export default function NavbarComponent() {
  const header = document.querySelector("#header");

  //parent containers

  const logoContainer = document.createElement("a");
  const navbarContainer = document.createElement("nav");
  const MenuHamburger = document.createElement("div");
  const menuHidden = hiddenMenu();
  const profileImage = document.createElement("img");

  //Logos
  const appLogo = document.createElement("picture");

  //small screens
  const sourceSmall = document.createElement("source");
  sourceSmall.media = "(max-width: 600px)";
  sourceSmall.srcset = "../assets/logos/alternativeLogo.svg";

  // large screens

  const sourceLarge = document.createElement("source");
  sourceLarge.media = "(min-width: 601px)";
  sourceLarge.srcset = "../assets/logos/mainLogo.svg";

  // default && styles

  const fallbackImage = document.createElement("img");
  fallbackImage.src = "../assets/logos/alternativeLogo.svg";
  fallbackImage.alt = "My Image";

  // Applogo parent nodes
  appLogo.appendChild(sourceSmall);
  appLogo.appendChild(sourceLarge);
  appLogo.appendChild(fallbackImage);

  logoContainer.href = "/Social-Smth/pages/main.html";
  logoContainer.appendChild(appLogo);

  appLogo.classList.add("logo-container");

  //nav-itemList

  const listContainer = document.createElement("ul");
  listContainer.classList.add("header__nav__navbar");

  //Navbar Items
  navRoutes.map((item) => {
    const listItemContainer = document.createElement("li");
    const ItemLinkContainer = document.createElement("a");
    const itemImage = document.createElement("img");
    const itemText = document.createElement("span");

    ItemLinkContainer.href = item.to;

    ItemLinkContainer.appendChild(itemImage);
    ItemLinkContainer.appendChild(itemText);

    //addons
    itemImage.src = item.itemlogo;
    itemText.innerText = item.name;
    profileImage.src = "../assets/userImage.jpg";
    profileImage.classList.add("image-holder", "profile-img");

    //classes
    listItemContainer.classList.add("navbar-item");
    ItemLinkContainer.classList.add("navbar-item__link");
    itemText.classList.add("navbar-item__text");

    listItemContainer.appendChild(ItemLinkContainer);
    listContainer.appendChild(listItemContainer);
  });

  const responsiveNavbar = document.createElement("svg");
  responsiveNavbar.classList.add("button-menu-responsive", "image-holder");
  responsiveNavbar.setAttribute("id", "button-menu-responsive");

  navbarContainer.appendChild(listContainer);
  navbarContainer.appendChild(responsiveNavbar);
  navbarContainer.appendChild(profileImage);
  navbarContainer.appendChild(menuHidden);
  navbarContainer.classList.add("header__nav");

  //Hamburguer menu

  MenuHamburger.id = "hamburger-btn__menu-right";
  MenuHamburger.classList.add("hamburger-btn");

  Array.from(Array(3)).map(() => {
    const bar = document.createElement("span");
    bar.classList.add("bar");
    MenuHamburger.appendChild(bar);
  });

  //navbar items

  // buttonResponsive
  const buttonResponsive = document.createElement("svg");
  buttonResponsive.setAttribute("id", "button-menu-responsive");

  //add parents to Navbar

  navbarContainer.appendChild(buttonResponsive);

  // userImage

  profileImage.setAttribute("id", "profile-img");

  profileImage.addEventListener("click", () => {
    menuHidden.classList.toggle("show");
  });

  logoContainer.appendChild(appLogo);

  //addParentNodes

  const main = document.getElementById("main");

  //navbar container
  const navbarMainContainer = document.createElement("div");

  navbarMainContainer.appendChild(logoContainer);
  navbarMainContainer.appendChild(navbarContainer);

  navbarMainContainer.classList.add(
    "flex",
    "width__full",
    "width__limit",
    "flex__sp-btw",
    "flex__item-center"
  );

  header.appendChild(navbarMainContainer);
  main.appendChild(MenuHamburger);
}
