import {staticArray} from "../helpers/linksArray.js";
import { randomNumber5 } from "../functions/randomNumber.js";

export default function commentComponent(userName, content) {
  const container = document.createElement("div");

  const userImage = document.createElement("img");

  const imageId = randomNumber5();

  userImage.src = staticArray[imageId];

  userImage.classList.add("user__image-smaller");

  const infoContainer = document.createElement("div");
  const userEmail = document.createElement("span");
  const commentContent = document.createElement("p");

  container.classList.add(
    "flex",
    "flex__gap-sm",
    "border__radius-sm",
    "container__bg-main",
    "pd-sm"
  );
  infoContainer.style.width = "90%";
  infoContainer.style.fontSize = "0.9em";
  userEmail.style.fontWeight = "bold";

  userEmail.innerText = userName;
  commentContent.innerText = content;

  infoContainer.appendChild(userEmail);
  infoContainer.appendChild(commentContent);

  container.appendChild(userImage);
  container.appendChild(infoContainer);

  return container;
}
