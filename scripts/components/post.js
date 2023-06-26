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

  postWrapper.appendChild(postContainer);
}
createPost();
