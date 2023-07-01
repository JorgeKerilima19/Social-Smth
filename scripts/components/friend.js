import SVG from "./commonComponents/SVG.js";

function displayFriend(nameFriend) {
  const container = document.createElement("li");
  const containerLink = document.createElement("a");
  const friendImage = SVG.cloneNode(true);
  const friendName = document.createElement("span");

  friendName.innerText = nameFriend;

  containerLink.classList.add("flex", "flex__gap-sm", "flex__item-center");

  containerLink.appendChild(friendImage);
  containerLink.appendChild(friendName);
  container.appendChild(containerLink);

  return container;
}

export default displayFriend;
