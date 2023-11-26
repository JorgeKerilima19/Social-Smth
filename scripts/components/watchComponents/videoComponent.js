import postContainer from "../commonComponents/postContainer.js";
import displayFriend from "../friend.js";

import interactionsComponent from "../commonComponents/interactionsComponent.js";
import postOptions from "../commonComponents/postOptions.js";
import videoControls from "./videoControls.js";

let index = 0;

export default function videoComponent(user, post) {
  const mainWrapper = postContainer.cloneNode(true);
  //wrapper to ensure commentComponentwork
  const upperMainWrapper = document.createElement("div");
  const upperWrapper = document.createElement("div");
  const midWrapper = document.createElement("div");
  const bottomWrapper = document.createElement("div");

  mainWrapper.setAttribute("id", index);

  //adding id to identify component part

  upperWrapper.setAttribute("data-part", `upper-${index}`);
  midWrapper.setAttribute("data-part", `mid-${index}`);
  bottomWrapper.setAttribute("data-part", `upper-${index}`);

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

  return mainWrapper;
}
