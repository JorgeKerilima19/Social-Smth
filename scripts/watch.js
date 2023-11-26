import videoComponent from "./components/watchComponents/videoComponent.js";
import { getUser } from "./functions/fetchUsers.js";

import { randomNumber10 } from "./functions/randomNumber.js";

const userId = randomNumber10() + 1;

console.log(userId);

getUser(userId).then((user) => {
  const videosContainer = document.getElementById("videos-container");

  const video = videoComponent(user);
  const video1 = videoComponent(user);

  // const a = interactionsComponent(1);

  // videosContainer.appendChild(a);
  videosContainer.appendChild(video);
  videosContainer.appendChild(video1);
});
