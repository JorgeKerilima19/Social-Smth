import { randomNumber } from "../functions/randomNumber.js";
import SVG from "./commonComponents/SVG.js";
//General Variables

export default function createPost(
  username,
  nickname,
  postContent,
  postImage = false
) {
  //main Container
  const postContainer = document.createElement("article");
  postContainer.classList.add(
    "post__container",
    "flex",
    "flex__column",
    "flex__gap-sm"
  );

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

  const reactionContainer = document.createElement("div");
  reactionContainer.classList.add("flex", "flex__gap-sm", "flex__item-center");
  reactions.forEach((el) => {
    const container = reactionContainer.cloneNode(true);
    const reactionNumber = document.createElement("span");
    const reactionDescription = document.createElement("span");

    const number = randomNumber();
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

  const interactions = ["Like", "Comment", "Share"];

  interactions.forEach((el) => {
    const container = reactionContainer.cloneNode(true);
    const interactionSVG = SVG.cloneNode(true);
    const interactionDescription = document.createElement("span");

    interactionDescription.innerText = el;

    container.appendChild(interactionSVG);
    container.appendChild(interactionDescription);
    postInteractions.appendChild(container);
  });

  postInteractions.classList.add("flex", "flex__sp-ard", "width__full");

  postContentContainer.appendChild(postMainContent);
  postContentContainer.appendChild(postReactions);
  postContentContainer.appendChild(postInteractions);

  postContainer.appendChild(authorInfo);
  postContainer.appendChild(postContentContainer);

  return postContainer;
}
