import { darkMode } from "./components/settingsComponents/darkMode.js";
import { feedback } from "./components/settingsComponents/feedBack.js";
import { privacy } from "./components/settingsComponents/privacy.js";

import settingsNavbar from "./components/settingsComponents/settingsNavbar.js";

const settingsWrapper = document.getElementById("settings-container");
const navbarContainer = document.getElementById("navbar-settings");

settingsWrapper.classList.add("width__60");
navbarContainer.classList.add("width__30");

const settingsNavigation = () => {
  const hash = window.location.hash.substring(1);

  switch (hash) {
    case "":
      settingsWrapper.innerText = "";

    case "darkMode":
      settingsWrapper.innerText = "";
      settingsWrapper.appendChild(darkMode());
      break;

    case "privacy":
      settingsWrapper.innerText = "";
      settingsWrapper.appendChild(privacy());
      break;

    case "feedback":
      settingsWrapper.innerText = "";
      settingsWrapper.appendChild(feedback());
      break;

    default:
      settingsWrapper.innerText = "";
  }
};

const settingNavbar = settingsNavbar();

navbarContainer.appendChild(settingNavbar);

window.addEventListener("hashchange", settingsNavigation);
