export default function postOptions() {
  const postSettings = document.createElement("div");
  const hidePost = document.createElement("img");
  const postOptions = document.createElement("img");

  hidePost.addEventListener("click", () => {
    const articleParent = postOptions.closest(".post__container");
    if (articleParent) {
      articleParent.remove();
    }
  });

  postSettings.classList.add("flex", "flex__gap-sm");
  hidePost.src = "../assets/svg/cross.svg";
  postOptions.src = "../assets/svg/dotsHorizontal.svg";
  postOptions.classList.add("svg-container__small");
  hidePost.classList.add("svg-container__small");

  postSettings.appendChild(postOptions);
  postSettings.appendChild(hidePost);

  return postSettings;
}
