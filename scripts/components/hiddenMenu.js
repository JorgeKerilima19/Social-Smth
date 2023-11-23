import footer from "./footer.js";

const options = [
  {
    name: "Settings and privacy",
    logo: "../../assets/svg/chatSection/call.svg",
  },
  {
    name: "Help center and feedback",
    logo: "../../assets/svg/chatSection/call.svg",
  },
  { name: "Log out", logo: "../../assets/svg/chatSection/call.svg" },
];

const hiddenMenu = () => {
  const sectionContainer = document.createElement("section");

  const profileWrapper = document.createElement("a");
  const username = document.createElement("span");
  const text = document.createElement("span");
  const userPhoto = document.createElement("img");

  profileWrapper.href = "#";

  userPhoto.src = "../assets/userImage.jpg";
  username.innerText = "Username";
  text.innerText = "See profile";

  //classes

  text.classList.add("footer__a");
  userPhoto.classList.add("hidden__menu-img", "user__image-sm");
  profileWrapper.classList.add("hidden__menu-grid");

  profileWrapper.appendChild(userPhoto);
  profileWrapper.appendChild(username);
  profileWrapper.appendChild(text);

  //dark Mode
  const darkModeContainer = document.createElement("div");
  const textDark = document.createElement("span");

  textDark.innerText = "Dark mode";

  const darkMode = document.createElement("div");
  darkMode.setAttribute("id", "dark-mode");

  const darkModeButton = document.createElement("span");
  darkModeButton.setAttribute("id", "dark-mode__button");

  darkMode.appendChild(darkModeButton);
  darkModeContainer.appendChild(darkMode);
  darkModeContainer.appendChild(textDark);

  //dark mode styles
  darkModeContainer.classList.add("flex", "flex__sp-btw", "flex__item-center");
  darkMode.classList.add("menu-dark-mode__bg", "flex");
  darkModeButton.classList.add("menu-dark-mode__button");

  //Option Container

  const optionsContainer = document.createElement("ul");
  optionsContainer.classList.add("menu-container");

  options.map((option) => {
    const container = document.createElement("div");
    const optionImage = document.createElement("img");
    const optionName = document.createElement("span");

    optionImage.src = option.logo;
    optionName.innerText = option.name;

    container.classList.add("flex", "flex__item-center", "flex__gap-sm");
    optionImage.classList.add("svg-container__small");

    container.appendChild(optionImage);
    container.appendChild(optionName);

    optionsContainer.appendChild(container);
  });

  darkMode.addEventListener("click", () => {
    darkModeButton.classList.toggle("on");
    document.body.classList.toggle("dark-mode");

    if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  //footer

  const footerContainer = footer();

  //parent Elements append

  sectionContainer.appendChild(profileWrapper);
  sectionContainer.appendChild(darkModeContainer);
  sectionContainer.appendChild(optionsContainer);
  sectionContainer.appendChild(footerContainer);

  sectionContainer.setAttribute("id", "hidden-menu");
  sectionContainer.classList.add("hidden-menu");

  return sectionContainer;
};

export default hiddenMenu;
