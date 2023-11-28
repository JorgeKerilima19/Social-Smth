import { randomNumber, randomNumber5 } from "../../functions/randomNumber.js";

import commentSection from "../commentSection.js";

function handleClick(postId = 1, commentsNumber) {
  const mainContainer = document.getElementById(`post-${postId}`);
  const commentsContainer = commentSection(postId, commentsNumber);

  commentsContainer.setAttribute("id", `comment-container-${postId}`);

  mainContainer.appendChild(commentsContainer);
}

const interactions = [
  {
    name: "Like",

    svgPath: "../../assets/svg/like.svg",
  },
  {
    name: "Comment",

    svgPath: "../../assets/svg/comment.svg",
  },
  {
    name: "Share",

    svgPath: "../../assets/svg/share.svg",
  },
];

export default function interactionsComponent(postId) {
  //reactions

  const mainContainer = document.createElement("article");

  //Post Reactions

  const reactions = ["Reaction", "Comment", "Share"];

  const reactionContainer = document.createElement("div");

  reactionContainer.classList.add(
    "flex",
    "flex__sp-btw",
    "flex__item-center",
    "pd-sm",
    "width__full",
    "separator"
  );

  let commentsNumber;

  reactions.forEach((el) => {
    const container = document.createElement("div");
    const reactionNumber = document.createElement("span");
    const reactionDescription = document.createElement("span");

    container.classList.add("flex", "flex__gap-sm", "flex__item-center");

    let number;

    if (el === "Comment") {
      number = randomNumber5();
      commentsNumber = number;
    } else {
      number = randomNumber();
    }

    reactionNumber.innerText = number;
    number < 2 && number > 0
      ? (reactionDescription.innerText = el)
      : (reactionDescription.innerText = el + "s");

    container.appendChild(reactionNumber);
    container.appendChild(reactionDescription);
    reactionContainer.appendChild(container);
  });

  mainContainer.appendChild(reactionContainer);

  //Interactions section

  const postInteractions = document.createElement("section");

  interactions.forEach((el, index) => {
    const container = document.createElement("div");
    const imgSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const useTag = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );

    useTag.setAttribute(
      "href",
      `${el.svgPath + "#interaction-" + (index + 1)}`
    );

    imgSvg.appendChild(useTag);

    imgSvg.classList.add("svg-container__small", "interaction");

    const interactionDescription = document.createElement("span");

    interactionDescription.innerText = el.name;
    container.classList.add(
      "flex",
      "flex__gap-sm",
      "flex__item-center",
      "to-hover",
      "pd-sm",
      "border__radius-sm",
      "cursor__pointer"
    );

    if (el.name === "Comment") {
      container.classList.add("comment-button");
      container.addEventListener("click", () => {
        //return based on post nodes number
        const postWrapper = container.closest(".post__container");

        if (postWrapper.childNodes.length > 2) {
          return;
        }
        handleClick(postId, commentsNumber, container);
      });
    }

    container.appendChild(imgSvg);
    container.appendChild(interactionDescription);
    postInteractions.appendChild(container);
  });

  postInteractions.classList.add("flex", "flex__sp-ard", "width__full");

  mainContainer.appendChild(postInteractions);

  return mainContainer;
}
