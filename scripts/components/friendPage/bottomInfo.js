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
    { name: "Nickname", value: user.username },
    { name: "Email", value: user.email },
    { name: "Website", value: user.website },
    { name: "Phone", value: user.phone },
    { name: "Company", value: user.company.name },
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

  profileInfo.appendChild(detailsContainer);

  //user Photos

  const userPhotosContainer = document.createElement("div");

  const photosTitle = document.createElement("h2");
  photosTitle.innerText = "Photos";

  userPhotosContainer.appendChild(photosTitle);
  profileInfo.appendChild(userPhotosContainer);

  //classes
  userPhotosContainer.classList.add(
    "menu-container",
    "container__bg-container"
  );

  //User friends
  const userFriendsContainer = document.createElement("div");

  const friendsTitle = document.createElement("h2");
  friendsTitle.innerText = "Friends";

  userFriendsContainer.appendChild(friendsTitle);
  profileInfo.appendChild(userFriendsContainer);

  //classes
  userFriendsContainer.classList.add(
    "menu-container",
    "container__bg-container"
  );

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

  userPosts.classList.add(
    "flex",
    "flex__column",
    "flex__gap-md",
    "user-page__posts-container"
  );

  profileInfo.classList.add(
    "user-page__details-container",
    "flex",
    "flex__column",
    "flex__gap-md"
  );
  container.classList.add("flex", "flex__gap-md");

  container.appendChild(profileInfo);
  container.appendChild(userPosts);

  return container;
}
