export default function videoControls(video) {
  const controlsContainer = document.createElement("div");

  const playVideo = document.createElement("img");
  const muteVideo = document.createElement("img");
  const fullScreen = document.createElement("img");

  playVideo.src = "../../../assets/svg/pause.svg";
  muteVideo.src = "../../../assets/svg/mute.svg";
  fullScreen.src = "../../../assets/svg/fullscreen.svg";

  playVideo.classList.add("video__button");
  muteVideo.classList.add("video__button");
  fullScreen.classList.add("video__button");

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
