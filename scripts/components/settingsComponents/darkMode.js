export const darkMode = () => {
  const container = document.createElement("div");
  const description = document.createElement("p");

  description.innerText = "Turn on the dark mode to give your eyes a rest";

  const darkModeContainer = document.createElement("div");

  const darkMode = document.createElement("div");
  const darkModeButton = document.createElement("span");
  const darkText = document.createElement("span");

  darkText.innerText = "Dark mode";

  darkText.classList.add("text-subtitle");

  darkMode.appendChild(darkModeButton);
  darkModeContainer.appendChild(darkText);
  darkModeContainer.appendChild(darkMode);

  //dark mode styles

  darkModeContainer.classList.add(
    "flex",
    "flex__sp-btw",
    "flex__item-center",
    "width__full"
  );
  darkMode.classList.add("menu-dark-mode__bg", "flex");
  darkModeButton.classList.add("menu-dark-mode__button");

  darkMode.addEventListener("click", () => {
    darkModeButton.classList.toggle("on");
    document.body.classList.toggle("dark-mode");

    if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  container.classList.add("container__bg-container", "pd-md");

  container.appendChild(darkModeContainer);
  container.appendChild(description);

  return container;
};
