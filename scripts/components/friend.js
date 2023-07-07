import linksArray from "../helpers/linksArray.js";

function displayFriend(nameFriend, status = false) {
  const container = document.createElement("li");
  const containerLink = document.createElement("a");
  const friendImageContainer = document.createElement("div");
  const friendImage = document.createElement("img");
  const friendStatus = document.createElement("div");

  friendImage.src = linksArray[0];
  friendImage.classList.add("user__image-sm");

  linksArray.shift();

  const friendName = document.createElement("span");

  friendName.innerText = nameFriend;

  friendImageContainer.style.position = "relative";
  
  status
    ? friendStatus.classList.add("user__active")
    : friendStatus.classList.add("user__offline");

  container.classList.add("menu__item-link");
  containerLink.classList.add("flex", "flex__gap-sm", "flex__item-center");

  friendImageContainer.appendChild(friendImage);
  friendImageContainer.appendChild(friendStatus);
  containerLink.appendChild(friendImageContainer);
  containerLink.appendChild(friendName);
  container.appendChild(containerLink);

  return container;
}

export default displayFriend;
