import SVG from "./commonComponents/SVG.js";

export default function commentComponent(userName, content) {
  const container = document.createElement("div");

  const userImage = SVG.cloneNode(true);

  const infoContainer = document.createElement("div");
  const userEmail = document.createElement("span");
  const commentContent = document.createElement("p");

  container.classList.add("flex", "flex__gap-sm");
  infoContainer.style.width="90%"
  infoContainer.style.fontSize="0.9em"

  userEmail.innerText = userName;
  commentContent.innerText = content;

  infoContainer.appendChild(userEmail);
  infoContainer.appendChild(commentContent);

  container.appendChild(userImage);
  container.appendChild(infoContainer);

  return container;
}
