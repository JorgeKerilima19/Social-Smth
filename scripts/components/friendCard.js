export default function friendCard(profileImage, username) {
  const cardContainer = document.createElement("article");

  const cardImage = document.createElement("img");
  const cardInfoContainer = document.createElement("div");

  cardImage.src = profileImage;

  const userName = document.createElement("h4");
  const cardInteractions = document.createElement("div");

  userName.innerText = username;

  const textButton = document.createElement("button");
  const removeButton = document.createElement("button");

  textButton.innerText = "Text Friend";
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

  textButton.classList.add("width__full", "border__radius-sm", "bg__primary");
  removeButton.classList.add("width__full", "border__radius-sm");

  cardInteractions.appendChild(textButton);
  cardInteractions.appendChild(removeButton);

  cardInfoContainer.appendChild(userName);
  cardInfoContainer.appendChild(cardInteractions);

  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardInfoContainer);

  return cardContainer;
}
