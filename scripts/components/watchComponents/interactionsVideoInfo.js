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

export default function interactionsVideoInfo(parentContainer) {
  const infoWrapper = document.createElement("div");

  infoWrapper.innerText = "Xd";

  let modal;

  setTimeout(() => {
    modal = parentContainer.closest(".post__container");
    const modalId = modal.id;

    console.log(modalId.slice(modalId.indexOf("-") + 1));
  }, 100);

  return infoWrapper;
}
