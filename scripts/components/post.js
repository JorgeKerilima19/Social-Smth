const postWrapper = document.getElementById("post-container");

function createPost() {
  //main Container
  const postContainer = document.createElement("article");
  postContainer.classList.add(
    "post__container",
    "flex",
    "flex__column",
    "flex__gap-sm"
  );

  const authorInfo = document.createElement("section");
  authorInfo.classList.add("flex", "flex__sp-btw");

  const postAuthorInfo = document.createElement("div");

  postAuthorInfo.classList.add("flex", "flex__gap-sm");

  const authorProfileImage = document.createElement("svg");
  authorProfileImage.classList.add("image-holder");

  //Post author app info

  const authorAppInfo = document.createElement("div");
  const authorName = document.createElement("h4");
  const postPrivacy = document.createElement("span");

  authorName.innerText = "Username";
  postPrivacy.innerText = "Public";
  authorAppInfo.classList.add("flex-container__row");

  authorAppInfo.appendChild(authorName);
  authorAppInfo.appendChild(postPrivacy);

  //Post settings

  const postSettings = document.createElement("div");
  const hidePost = document.createElement("svg");
  const postOptions = document.createElement("svg");

  postSettings.classList.add("flex", "flex__gap-sm");
  hidePost.classList.add("image-holder__small");
  postOptions.classList.add("image-holder__small");

  postSettings.appendChild(hidePost);
  postSettings.appendChild(postOptions);

  postAuthorInfo.appendChild(authorProfileImage);
  postAuthorInfo.appendChild(authorAppInfo);

  authorInfo.appendChild(postAuthorInfo);
  authorInfo.appendChild(postSettings)

  postContainer.appendChild(authorInfo);
  postWrapper.appendChild(postContainer);
}
createPost();
