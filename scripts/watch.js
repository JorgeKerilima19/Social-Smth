import videoComponent from "./components/watchComponents/videoComponent.js";
import { getUser } from "./functions/fetchUsers.js";

import { randomNumber10 } from "./functions/randomNumber.js";

const generateMainVideos = async (wrapper, common = false) => {
  const randomUser = randomNumber10();
  const user = await getUser(randomUser);
  const video = common ? videoComponent(user) : videoComponent(user, true);
  wrapper.appendChild(video);
};

// Main videos-trending videos
const mainVideosContainer = document.getElementById("main-videos-container");
Array.from(Array(3)).forEach(() => {
  generateMainVideos(mainVideosContainer);
});

//Rest of the videos
const videosContainer = document.getElementById("videos-container");

Array.from(Array(10)).forEach(() => {
  generateMainVideos(videosContainer, true);
});
