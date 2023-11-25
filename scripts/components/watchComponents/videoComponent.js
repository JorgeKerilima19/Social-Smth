import postContainer from "../commonComponents/postContainer.js";

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

  upperWrapper.setAttribute("data-part", `upper-${index}`);
  midWrapper.setAttribute("data-part", `mid-${index}`);
  bottomWrapper.setAttribute("data-part", `upper-${index}`);

  const postInteractions = interactionsComponent(index);

  bottomWrapper.appendChild(postInteractions);

  upperMainWrapper.appendChild(upperWrapper);
  upperMainWrapper.appendChild(midWrapper);
  mainWrapper.appendChild(upperMainWrapper);
  mainWrapper.appendChild(bottomWrapper);

  index++;

  return mainWrapper;
}
