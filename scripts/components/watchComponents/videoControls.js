export default function videoControls(video) {
  const controlsContainer = document.createElement("div");
  const playVideo = document.createElement("button");
  const muteVideo = document.createElement("button");
  const fullScreen = document.createElement("button");

  playVideo.innerText = "play";
  muteVideo.innerText = "mute";
  fullScreen.innerText = "fullScreen";

  playVideo.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  muteVideo.addEventListener("click", () => {
    if (video.muted) {
      video.mute = true;
      return;
    }
    video.mute = false;
  });
  fullScreen.addEventListener("click", () => {
    video.requestFullscreen();
  });

  controlsContainer.appendChild(playVideo);
  controlsContainer.appendChild(muteVideo);
  controlsContainer.appendChild(fullScreen);

  controlsContainer.classList.add("flex", "flex__gap-md");

  return controlsContainer;
}
