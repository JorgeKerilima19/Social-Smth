import friendsPhoto from "../helpers/photoLinkList.js";

function displayFriend(nameFriend, status = undefined, index = 1) {
  const container = document.createElement("li");
  const containerLink = document.createElement("a");
  const friendImageContainer = document.createElement("div");
  const friendImage = document.createElement("img");
  const friendStatus = document.createElement("div");

  //defining user friendImg

  const friendPhotoLink = friendsPhoto.filter((el) => el.id === index + 1);

  friendImage.src = friendPhotoLink[0]
    ? friendPhotoLink[0].src
    : friendsPhoto[friendsPhoto.length - 1].src;
  friendImage.classList.add("user__image-sm");

  const friendName = document.createElement("span");

  friendName.innerText = nameFriend;

  friendImageContainer.style.position = "relative";

  status === true
    ? friendStatus.classList.add("user__active")
    : status === undefined
    ? friendStatus.classList.add("xd")
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
