import { getComments } from "../functions/fetchPostComments.js";

import clearSpaces from "../functions/clearSpaces.js";

import commentComponent from "./commentComponent.js";

export default function commentSection(postId, numberComments) {
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "flex__column",
    "height__min-sm",
    "flex__gap-md"
  );
  console.log(numberComments);
  if (postId) {
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
  } else {
    container.innerText = "No comments";
  }
  return container;
}
