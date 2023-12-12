import friendsPhoto from "../helpers/photoLinkList.js";

function displayFriend(
  nameFriend,
  status = undefined,
  index = 1,
  toHover = true,
  redirect = false
) {
  const container = toHover
    ? document.createElement("li")
    : document.createElement("div");
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
    ? friendStatus.classList.add("none")
    : friendStatus.classList.add("user__offline");

  redirect ? (containerLink.href = "./friendPage.html") : "";

  containerLink.addEventListener("click", () => {
    localStorage.setItem("friend", index + 1);
  });

  containerLink.classList.add(
    "flex",
    "flex__gap-sm",
    "flex__item-center",
    "friend-info__container"
  );

  friendImageContainer.appendChild(friendImage);
  friendImageContainer.appendChild(friendStatus);
  containerLink.appendChild(friendImageContainer);
  containerLink.appendChild(friendName);
  container.appendChild(containerLink);

  //FriendComponent hover?
  toHover
    ? container.classList.add("menu__item-link")
    : container.classList.add("menu__item-link", "notHover");

  return container;
}

export default displayFriend;
