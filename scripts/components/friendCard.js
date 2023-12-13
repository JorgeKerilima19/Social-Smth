import friendsPhoto from "../helpers/photoLinkList.js";

export default function friendCard(user, userContact, index) {
  const cardContainer = document.createElement("article");

  const cardImage = document.createElement("img");
  const cardInfoContainer = document.createElement("div");

  const friendPhotoLink = friendsPhoto.filter((el) => el.id == index + 1);

  cardImage.src = friendPhotoLink[0]
    ? friendPhotoLink[0].src
    : friendsPhoto[friendsPhoto.length - 1].src;
  cardImage.classList.add("user__image");

  const userName = document.createElement("h4");
  const userEmail = document.createElement("h5");
  const cardInteractions = document.createElement("div");

  userName.innerText = user.name;
  userEmail.innerText = userContact;

  const profileButton = document.createElement("a");
  const removeButton = document.createElement("button");

  profileButton.addEventListener("click", () => {
    localStorage.setItem("friend", index + 1);
  });

  profileButton.innerText = "See Profile";
  profileButton.href = "/pages/friendPage.html";
  removeButton.innerText = "Remove Friend";

  cardContainer.classList.add(
    "container",
    "container__card",
    "container__bg-container",
    "pd-sm",
    "border__radius-sm"
  );
  cardImage.classList.add("container__card__image");
  cardInfoContainer.classList.add("container", "width__full", "flex__gap-md");
  cardInteractions.classList.add("flex", "flex__gap-sm", "width__full");

  profileButton.classList.add(
    "width__full",
    "border__radius-sm",
    "bg__primary"
  );
  removeButton.classList.add("width__full", "border__radius-sm");

  cardInteractions.appendChild(profileButton);
  cardInteractions.appendChild(removeButton);

  cardInfoContainer.appendChild(userName);
  cardInfoContainer.appendChild(userEmail);
  cardInfoContainer.appendChild(cardInteractions);

  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardInfoContainer);

  return cardContainer;
}
