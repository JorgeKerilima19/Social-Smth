import linksArray from "../helpers/linksArray.js";

function displayFriend(nameFriend) {
  const container = document.createElement("li");
  const containerLink = document.createElement("a");
  const friendImage = document.createElement("img");

  friendImage.src = linksArray[0];
  friendImage.classList.add("user__image-sm");

  linksArray.shift();

  const friendName = document.createElement("span");

  friendName.innerText = nameFriend;

  container.classList.add("menu__item-link");
  containerLink.classList.add("flex", "flex__gap-sm", "flex__item-center");

  containerLink.appendChild(friendImage);
  containerLink.appendChild(friendName);
  container.appendChild(containerLink);

  return container;
}

export default displayFriend;
