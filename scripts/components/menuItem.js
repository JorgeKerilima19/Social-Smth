import SVG from "./commonComponents/SVG.js";

export default function createMenuItem(
  itemLogo = false,
  itemText = "No text Given",
  to = "#"
) {
  const liContainer = document.createElement("li");
  const aContainer = document.createElement("a");
  aContainer.href = to;
  
  aContainer.classList.add("to-hover");

  const logo = itemLogo ? document.createElement("img") : SVG.cloneNode(true);
  if (itemLogo) {
    logo.src = itemLogo;
    logo.classList.add("menu-left__item-logo");
  }
  const text = document.createElement("span");
  text.innerText = itemText;

  aContainer.classList.add("menu__item-link");

  aContainer.appendChild(logo);
  aContainer.appendChild(text);
  liContainer.appendChild(aContainer);

  return liContainer;
}
