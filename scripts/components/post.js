import postContainer from "./commonComponents/postContainer.js";

import interactionsComponent from "./commonComponents/interactionsComponent.js";
import postOptions from "./commonComponents/postOptions.js";

export default function createPost(
  postId = 0,
  username,
  nickname,
  postContent,
  postImage = false
) {
  //main Container

  const mainPostContainer = postContainer.cloneNode(true);

  mainPostContainer.setAttribute("id", postId);

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
  const postSettings = postOptions();

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

  //Post Interactions

  const postInteractionData = interactionsComponent(postId);

  postInteractionData.classList.add(
    "flex",
    "flex__column",
    "flex__gap-md",
    "width__full"
  );

  postContentContainer.appendChild(postMainContent);
  postContentContainer.appendChild(postInteractionData);

  mainPostContainer.appendChild(authorInfo);
  mainPostContainer.appendChild(postContentContainer);

  return mainPostContainer;
}
