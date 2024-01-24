import settingsNavbar from "./components/settingsComponents/settingsNavbar.js";

const settinsWrapper = document.getElementById("settings-container");
const navbarContainer = document.getElementById("navbar-settings");

const settingsNavigation = () => {
  const hash = window.location.hash.substring(1);

  switch (hash) {
    case "darkMode":
      console.log("object2");
      break;

    case "privacy":
      console.log("object3");
      break;

    case "feedback":
      console.log("object4");
      break;

    default:
      console.log("123");
  }
};

const settingNavbar = settingsNavbar();

navbarContainer.appendChild(settingNavbar);

window.addEventListener("hashchange", settingsNavigation);
