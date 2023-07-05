export default function commentSection(postId) {
  const container = document.createElement("div");
  container.classList.add("flex", "flex-column", "height__min-sm");
  if (postId) {
    container.innerText = "Loading... " + postId;
  } else {
    container.innerText = "No comments";
  }
  return container;
}
