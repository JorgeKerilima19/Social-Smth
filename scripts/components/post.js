import { randomNumber, randomNumber5 } from "../functions/randomNumber.js";

import postContainer from "./commonComponents/postContainer.js";

import commentSection from "./commentSection.js";

export default function createPost(
  postId = 0,
  username,
  nickname,
  postContent,
  postImage = false
) {
  //main Container

  const mainPostContainer = postContainer.cloneNode(true);

  //Post AuthorInfo

  const authorInfo = document.createElement("section");
  authorInfo.classList.add("flex", "flex__sp-btw");

  const postAuthorInfo = document.createElement("div");

  postAuthorInfo.classList.add("flex", "flex__gap-sm");

  const authorProfileImage = document.createElement("svg");
  authorProfileImage.classList.add("image-holder");

  //Post author app info

  const authorAppInfo = document.createElement("div");
  const authorNickName = document.createElement("h4");
  const authorName = document.createElement("span");
  const postPrivacy = document.createElement("span");

  authorNickName.innerText = nickname || "Nickname";
  authorName.innerText = username || "Username";
  postPrivacy.innerText = "Public";
  authorName.classList.add("profile-nickname");
  authorAppInfo.classList.add("flex-container__row");

  authorNickName.appendChild(authorName);
  authorAppInfo.appendChild(authorNickName);
  authorAppInfo.appendChild(postPrivacy);

  //Post settings

  const postSettings = document.createElement("div");
  const hidePost = document.createElement("img");
  const postOptions = document.createElement("img");

  hidePost.addEventListener("click", () => {
    const articleParent = postOptions.closest(".post__container");
    if (articleParent) {
      articleParent.remove();
    }
  });

  postSettings.classList.add("flex", "flex__gap-sm");
  hidePost.src = "../../assets/svg/cross.svg";
  postOptions.src = "../../assets/svg/dotsHorizontal.svg";
  postOptions.classList.add("svg-container__small");
  hidePost.classList.add("svg-container__small");

  postSettings.appendChild(postOptions);
  postSettings.appendChild(hidePost);

  postAuthorInfo.appendChild(authorProfileImage);
  postAuthorInfo.appendChild(authorAppInfo);

  authorInfo.appendChild(postAuthorInfo);
  authorInfo.appendChild(postSettings);

  //Post Content

  const postContentContainer = document.createElement("section");

  postContentContainer.classList.add("flex", "flex__gap-sm", "flex__column");

  const postMainContent = document.createElement("div");

  const postMainContentDescription = document.createElement("p");
  const postMainContentImg = document.createElement("img");

  postMainContent.classList.add("flex", "flex__gap-sm", "flex__column");
  postMainContentImg.classList.add("post__image");
  postMainContentImg.src = postImage || "";
  postMainContentDescription.innerText = postContent || "No content given";

  postMainContent.appendChild(postMainContentDescription);
  postImage ? postMainContent.appendChild(postMainContentImg) : "";

  const postReactions = document.createElement("section");

  postReactions.classList.add(
    "flex",
    "width__full",
    "flex__sp-btw",
    "pd-sm",
    "separator"
  );

  //Post Reactions

  const reactions = ["Reaction", "Comment", "Share"];

  let commentsNumber;

  const reactionContainer = document.createElement("div");
  reactionContainer.classList.add("flex", "flex__gap-sm", "flex__item-center");
  reactions.forEach((el) => {
    const container = reactionContainer.cloneNode(true);
    const reactionNumber = document.createElement("span");
    const reactionDescription = document.createElement("span");

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
    postReactions.appendChild(container);
  });

  //Post Interactions

  const postInteractions = document.createElement("section");

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

  interactions.forEach((el, index) => {
    const container = reactionContainer.cloneNode(true);
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

    imgSvg.classList.add("svg-container__small","interaction");

    const interactionDescription = document.createElement("span");

    interactionDescription.innerText = el.name;
    container.classList.add(
      "to-hover",
      "pd-sm",
      "border__radius-sm",
      "cursor__pointer"
    );

    function handleClick() {
      const commentsContainer = postId
        ? commentSection(postId, commentsNumber)
        : commentSection((postId = 1), commentsNumber);
      mainPostContainer.appendChild(commentsContainer);

      container.removeEventListener("click", handleClick);
    }

    if (el.name === "Comment") {
      container.classList.add("comment-button");
      container.addEventListener("click", handleClick);
    }

    container.appendChild(imgSvg);
    container.appendChild(interactionDescription);
    postInteractions.appendChild(container);
  });

  postInteractions.classList.add("flex", "flex__sp-ard", "width__full");

  postContentContainer.appendChild(postMainContent);
  postContentContainer.appendChild(postReactions);
  postContentContainer.appendChild(postInteractions);

  mainPostContainer.appendChild(authorInfo);
  mainPostContainer.appendChild(postContentContainer);

  return mainPostContainer;
}
