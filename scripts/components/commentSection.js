import { getComments } from "../functions/fetchPostComments.js";

import clearSpaces from "../functions/clearSpaces.js";

import commentComponent from "./commentComponent.js";

export default function commentSection(postId, numberComments) {
  const container = document.createElement("div");
  const closeComments = document.createElement("img");

  closeComments.src = "../../assets/svg/cross.svg";
  closeComments.classList.add("svg-container__small", "margin__all-left");

  container.appendChild(closeComments);

  closeComments.addEventListener("click", () => {
    const commentContainer = document.getElementById(
      `comment-container-${postId}`
    );
    const videoMainContainer = document.getElementById(`post-${postId}`);

    console.log(commentContainer);
    console.log(videoMainContainer);

    videoMainContainer.removeChild(commentContainer);
  });

  container.classList.add("flex", "flex__column", "flex__gap-md");

  if (numberComments > 0) {
    getComments(postId).then((comments) => {
      comments.forEach((el, index) => {
        if (index < numberComments) {
          const comment = commentComponent(el.email, clearSpaces(el.body));
          container.appendChild(comment);
        }
        return;
      });
    });
  } else {
    container.classList.add("flex__item-center");
    container.innerText = "Be the first one to comment";
  }

  return container;
}
