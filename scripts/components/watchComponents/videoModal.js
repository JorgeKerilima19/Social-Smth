import interactionsVideoInfo from "./interactionsVideoInfo.js";


export default function videoModal(
  mainWrapper,
  videoUserContainer,
  video,
  postInteractions
) {
  const videoModalContainer = document.createElement("div");
  const videoComponent = document.createElement("div");

  // Video part
  const videoInfo = document.createElement("div");
  const userInfo = videoUserContainer.cloneNode(true);
  const videoSrc = video.cloneNode(true);

  videoSrc.play();
  videoSrc.controls = true;

  videoInfo.classList.add("grid", "place-items-center");
  videoSrc.classList.add("video-modal__video");

  videoInfo.appendChild(videoSrc);

  // Comment section
  const videoComments = document.createElement("div");
  const modalInteractions = postInteractions.cloneNode(true);
  const videoInteractions = interactionsVideoInfo(videoComments);

  videoComments.appendChild(userInfo);
  videoComments.appendChild(modalInteractions);
  videoComments.appendChild(videoInteractions);

  videoModalContainer.classList.add(
    "video-component",
    "flex",
    "flex__item-center",
    "flex__sp-center",
    "pd-md"
  );

  videoComponent.appendChild(videoInfo);
  videoComponent.appendChild(videoComments);

  videoModalContainer.appendChild(videoComponent);

  mainWrapper.appendChild(videoModalContainer);

  // Classes
  videoComponent.classList.add(
    "video-modal",
    "width__90",
    "pd-md",
    "overflow-y"
  );

  // Remove modal
  const closeModal = document.createElement("img");
  closeModal.src = "../../assets/svg/cross.svg";
  closeModal.classList.add("video__close-modal");

  videoInfo.appendChild(closeModal);

  closeModal.addEventListener("click", (e) => {
    e.stopPropagation();
    mainWrapper.removeChild(videoModalContainer);
  });
}
