const options = [
  { name: "Settings and privacy", logo: "" },
  { name: "Help center and feedback", logo: "" },
  { name: "Log out", logo: "" },
];

const hiddenMenu = () => {
  const sectionContainer = document.createElement("section");

  const profileWrapper = document.createElement("section");
  const username = document.createElement("span");
  const text = document.createElement("span");
  const userPhoto = document.createElement("img");

  userPhoto.src = "";
  username.innerText = "Username";
  text.innerText = "Username";

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

  options.map((option) => {
    const container = document.createElement("div");
    const optionImage = document.createElement("img");
    const optionName = document.createElement("span");

    optionImage.src = option.logo;
    optionName.innerText = option.name;

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


  //parent Elements append

  sectionContainer.appendChild(profileWrapper);
  sectionContainer.appendChild(darkModeContainer);
  sectionContainer.appendChild(optionsContainer);

  sectionContainer.setAttribute("id", "hidden-menu");
  sectionContainer.classList.add("hidden-menu");

  return sectionContainer;
};

export default hiddenMenu;
