import clearSpaces from "../../functions/clearSpaces.js";
import { getUserPost } from "../../functions/fetchPosts.js";
import createPost from "../post.js";

export default async function bottomInfo(user) {
  const container = document.createElement("section");

  //user info
  const profileInfo = document.createElement("div");

  const detailsContainer = document.createElement("ul");
  //User Info
  const detailsTitle = document.createElement("h2");
  detailsTitle.innerText = "Details";

  detailsContainer.appendChild(detailsTitle);

  //create elements for each basic info element
  const basicUserInfo = [
    { name: "nickname", value: user.username },
    { name: "email", value: user.email },
    { name: "website", value: user.website },
    { name: "phone", value: user.phone },
    { name: "company", value: user.company.name },
  ];

  basicUserInfo.forEach((el) => {
    const elementContainer = document.createElement("li");
    const elementName = document.createElement("h5");
    const elementValue = document.createElement("span");

    elementName.innerText = el.name;
    elementValue.innerText = el.value;

    elementContainer.appendChild(elementName);
    elementContainer.appendChild(elementValue);

    detailsContainer.appendChild(elementContainer);
  });

  //classes
  detailsContainer.classList.add("menu-container", "container__bg-container");

  //   detailsContainer.appendChild(userNickname);

  profileInfo.appendChild(detailsContainer);

  //User posts
  const userPosts = document.createElement("div");

  const posts = await getUserPost(user.id);

  let postId = 1;
  posts.forEach((post) => {
    const newPost = createPost(
      postId,
      user.name,
      user.username,
      user.id,
      clearSpaces(post.body),
      undefined
    );
    newPost.classList.add("container__bg-container");

    userPosts.appendChild(newPost);
    postId++;
  });

  userPosts.classList.add("flex", "flex__column", "flex__gap-md");
  container.classList.add("flex", "flex__gap-md");

  container.appendChild(profileInfo);
  container.appendChild(userPosts);

  return container;
}
