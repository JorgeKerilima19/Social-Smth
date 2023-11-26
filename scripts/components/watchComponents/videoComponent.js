import postContainer from "../commonComponents/postContainer.js";
import displayFriend from "../friend.js";

import interactionsComponent from "../commonComponents/interactionsComponent.js";

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
  
  upperWrapper.appendChild(videoUserContainer);
  //mid component part

  //bottom component part

  const postInteractions = interactionsComponent(index);

  bottomWrapper.appendChild(postInteractions);

  upperMainWrapper.appendChild(upperWrapper);
  upperMainWrapper.appendChild(midWrapper);
  mainWrapper.appendChild(upperMainWrapper);
  mainWrapper.appendChild(bottomWrapper);

  //classes
  mainWrapper.classList.add(
    "bg__container",
    "flex__container",
    "video-card__container"
  );

  index++;

  return mainWrapper;
}
