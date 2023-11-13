const navRoutes = [
  { itemlogo: "/assets/svg/chat.svg", name: "ROute1", to: "#" },
  { itemlogo: "/assets/svg/watch.svg", name: "ROute1", to: "#" },
  { itemlogo: "/assets/svg/notifications.svg", name: "ROute1", to: "#" },
];

export default function NavbarComponent() {
  const header = document.querySelector("#header");

  //parent containers

  const logoContainer = document.createElement("a");
  const navbarContainer = document.createElement("nav");
  const MenuHamburger = document.createElement("div");
  const hiddenMenu = document.createElement("section");

  //Logos
  const appLogo = document.createElement("picture");

  //small screens
  const sourceSmall = document.createElement("source");
  sourceSmall.media = "(max-width: 600px)";
  sourceSmall.srcset = "../../assets/logos/alternativeLogo.svg";

  // large screens

  const sourceLarge = document.createElement("source");
  sourceLarge.media = "(min-width: 601px)";
  sourceLarge.srcset = "../../assets/logos/mainLogo.svg";

  // default && styles

  const fallbackImage = document.createElement("img");
  fallbackImage.src = "../../assets/logos/alternativeLogo.svg";
  fallbackImage.alt = "My Image";

  // Applogo parent nodes
  appLogo.appendChild(sourceSmall);
  appLogo.appendChild(sourceLarge);
  appLogo.appendChild(fallbackImage);

  logoContainer.href = "/pages/main.html";
  logoContainer.appendChild(appLogo);

  logoContainer.classList.add("Xd");

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

    ItemLinkContainer.appendChild(itemImage);
    ItemLinkContainer.appendChild(itemText);

    //addons
    itemImage.src = item.itemlogo;
    itemText.innerText = item.name;

    //classes
    listItemContainer.classList.add("navbar-item");
    ItemLinkContainer.classList.add("navbar-item__link");

    listItemContainer.appendChild(ItemLinkContainer);
    listContainer.appendChild(listItemContainer);
  });

  navbarContainer.appendChild(listContainer);
  navbarContainer.classList.add("header__navs");

  //Hamburguer menu

  MenuHamburger.id = "hamburger-btn__menu-right";

  Array.from(Array(3)).map(() => {
    const bar = document.createElement("span");
    bar.classList.add("bar");
    MenuHamburger.appendChild(bar);
  });

  //navbar items

  // userImage
  const userImage = document.createElement("img");

  userImage.setAttribute("id", "profile-img");

  userImage.addEventListener("click", () => {
    // showMenu.classList.toggle("show");
    console.log("object");
  });

  // buttonResponsive
  const buttonResponsive = document.createElement("svg");
  buttonResponsive.setAttribute("id", "button-menu-responsive");

  //add parents to Navbar

  navbarContainer.appendChild(userImage);
  navbarContainer.appendChild(buttonResponsive);

  //HiddenMenu

  hiddenMenu.setAttribute("id", "hidden-menu");

  const darkMode = document.createElement("div");
  darkMode.setAttribute("id", "dark-mode");

  const darkModeButton = document.createElement("span");
  darkModeButton.setAttribute("id", "dark-mode__button");

  darkMode.appendChild(darkModeButton);

  hiddenMenu.appendChild(darkMode);

  logoContainer.appendChild(appLogo);

  //addParentNodes

  header.appendChild(logoContainer);
  header.appendChild(navbarContainer);
  header.appendChild(MenuHamburger);
  header.appendChild(hiddenMenu);
}