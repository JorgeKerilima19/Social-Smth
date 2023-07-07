import displayFriend from "./components/friend.js";
import createPost from "./components/post.js";

import { getUsers, getUser } from "./functions/fetchUsers.js";
import { getPost } from "./functions/fetchPosts.js";
import clearSpaces from "./functions/clearSpaces.js";

import { randomNumber100 } from "./functions/randomNumber.js";

//Posts container

const postWrapper = document.getElementById("post-container");

// Post creating privacy

const select = document.querySelector("#select");

select.addEventListener("change", () => {
  const privateConfig = document.querySelector("#post-privacy");
  privateConfig.innerText = select.value;
});

//Write / create a post

const form = document.getElementById("create-post");
const textarea = document.getElementById("write-post-textarea");

let postContent = "";

textarea.addEventListener("input", (e) => {
  postContent = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPost = createPost(0, "userEmail@gmail.com", "Username", postContent);
  const firstPost = postWrapper.firstChild;

  postWrapper.insertBefore(newPost, firstPost);
});

//Generate default Post

const postDefault = createPost(
  0,
  "quispechilojorge@gmail.com",
  "Jorge Luis",
  "This is an example on how a post should look like",
  "../assets/postImages/minecraftMeme.jpg"
);
const postDefault1 = createPost(
  0,
  "Ervin Howell",
  "Antonette",
  clearSpaces(
    "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  )
);
postWrapper.appendChild(postDefault);
postWrapper.appendChild(postDefault1);

//Generate more Posts

const loadMorePost = document.getElementById("load-more-button");

loadMorePost.addEventListener("click", () => {
  const postId = randomNumber100();

  getPost(postId).then((post) => {
    getUser(post.userId).then((el) => {
      const newPost = createPost(
        postId,
        el.email,
        el.name,
        clearSpaces(post.body)
      );
      postWrapper.appendChild(newPost);
    });
  });
});

//Display User Friends active and non-active

const onlineFriendsContainer = document.getElementById("active-friends");
const offlineFriendsContainer = document.getElementById("offline-friends");

getUsers().then((users) => {
  const onlineFriendList = document.createDocumentFragment();
  const offlineFriendList = document.createDocumentFragment();
  users.forEach((el) => {
    if (el.id % 2 === 0) {
      const friend = displayFriend(el.name, true);
      onlineFriendList.appendChild(friend);
    } else {
      const friend = displayFriend(el.name);
      offlineFriendList.appendChild(friend);
    }
  });
  offlineFriendsContainer.appendChild(offlineFriendList);
  onlineFriendsContainer.appendChild(onlineFriendList);
});
