import interactionsComponent from "./components/commonComponents/interactionsComponent.js";

import videoComponent from "./components/watchComponents/videoComponent.js";

const videosContainer = document.getElementById("videos-container");

const video = videoComponent();
const video1 = videoComponent();

// const a = interactionsComponent(1);

// videosContainer.appendChild(a);
videosContainer.appendChild(video);
videosContainer.appendChild(video1);
