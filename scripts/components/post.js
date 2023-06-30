import { randomNumber } from "../functions/randomNumber.js";

//General Variables
const SVG = document.createElement("svg");
SVG.classList.add("image-holder__small");

const postWrapper = document.getElementById("post-container");

function createPost() {
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
  const authorName = document.createElement("h4");
  const postPrivacy = document.createElement("span");

  authorName.innerText = "Username";
  postPrivacy.innerText = "Public";
  authorAppInfo.classList.add("flex-container__row");

  authorAppInfo.appendChild(authorName);
  authorAppInfo.appendChild(postPrivacy);

  //Post settings

  const postSettings = document.createElement("div");
  const hidePost = document.createElement("img");
  const postOptions = document.createElement("img");

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

  postContentContainer.classList.add("container", "flex__gap-sm");

  const postMainContent = document.createElement("div");

  const postMainContentDescription = document.createElement("p");
  const postMainContentImg = document.createElement("img");

  postMainContent.classList.add("container", "flex__gap-sm");
  postMainContentImg.classList.add("post__image");
  postMainContentImg.src = "../assets/postImages/minecraftMeme.jpg";
  postMainContentDescription.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad perferendis accusantium odio animi aperiam id?";

  postMainContent.appendChild(postMainContentDescription);
  postMainContent.appendChild(postMainContentImg);

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

  postWrapper.appendChild(postContainer);
}
createPost();
