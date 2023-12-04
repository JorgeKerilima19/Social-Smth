import commentSection from "../commentSection.js";

const interactions = ["Reaction", "Comment", "Share"];

export default function interactionsVideoInfo(parentContainer) {
  const infoWrapper = document.createElement("div");

  let modal;

  //simulating async component to get the correct id

  setTimeout(() => {
    modal = parentContainer.closest(".post__container");
    const videoComponentId = modal.id.slice(modal.id.indexOf("-") + 1);

    const likesNumber = document.getElementById(
      `reaction-${videoComponentId}`
    ).innerText;
    const commentNumber = document.getElementById(
      `comment-${videoComponentId}`
    ).innerText;
    const sharesNumber = document.getElementById(
      `share-${videoComponentId}`
    ).innerText;

    const comments = commentSection(videoComponentId, commentNumber, true);
    infoWrapper.appendChild(comments);
  }, 100);

  return infoWrapper;
}
