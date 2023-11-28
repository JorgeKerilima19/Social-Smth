import postContainer from "../commonComponents/postContainer.js";
import displayFriend from "../friend.js";

import interactionsComponent from "../commonComponents/interactionsComponent.js";
import postOptions from "../commonComponents/postOptions.js";
import videoControls from "./videoControls.js";

let index = 1;

export default function videoComponent(user, post) {
  const mainWrapper = postContainer.cloneNode(true);
  //wrapper to ensure commentComponentwork
  const upperMainWrapper = document.createElement("div");
  const upperWrapper = document.createElement("div");
  const midWrapper = document.createElement("div");
  const bottomWrapper = document.createElement("div");

  mainWrapper.setAttribute("id", `post-${index}`);

  //adding id to identify component part

  upperWrapper.setAttribute("data-part", `upper-${index}`);
  midWrapper.setAttribute("data-part", `mid-${index}`);
  bottomWrapper.setAttribute("data-part", `bottom-${index}`);

  //upper component part

  const videoUserContainer = displayFriend(user.name, undefined, index, false);
  const videoOptions = postOptions();

  upperWrapper.appendChild(videoUserContainer);
  upperWrapper.appendChild(videoOptions);

  //mid component part (VIDEO)

  const video = document.createElement("video");
  const source = document.createElement("source");
  const controllers = videoControls(video);

  // video.controls = true;
  source.src = "../../../assets/videos/randomvideo.mp4";

  video.appendChild(source);

  video.classList.add("video-wrapper");

  midWrapper.appendChild(video);
  midWrapper.appendChild(controllers);

  //bottom component part

  const postInteractions = interactionsComponent(index);

  bottomWrapper.appendChild(postInteractions);

  upperMainWrapper.appendChild(upperWrapper);
  upperMainWrapper.appendChild(midWrapper);
  mainWrapper.appendChild(upperMainWrapper);
  mainWrapper.appendChild(bottomWrapper);

  //classes
  upperWrapper.classList.add("flex", "flex__gap-sm", "flex__sp-btw");
  mainWrapper.classList.add(
    "bg__container",
    "flex",
    "flex__column",
    "flex__gap-sm",
    "video-card__container",
    "pd-md"
  );

  index++;

  //video page
  video.addEventListener("click", (e) => {
    e.stopPropagation();

    const videoModalContainer = document.createElement("div");
    const videoComponent = document.createElement("div");

    // Video part
    const videoInfo = document.createElement("div");
    const userInfo = videoUserContainer.cloneNode(true);
    const videoSrc = video.cloneNode(true);

    videoSrc.play();
    videoSrc.controls = true;

    videoInfo.appendChild(userInfo);
    videoInfo.appendChild(videoSrc);

    // Comment section
    const videoComments = document.createElement("div");
    const videoInteractions = postInteractions.cloneNode(true);

    console.log(videoInteractions);

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
      "flex",
      "flex__gap-md",
      "width__90"
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
  });

  return mainWrapper;
}
