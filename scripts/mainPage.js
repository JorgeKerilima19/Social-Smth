import displayFriend from "./components/friend.js";
import { getUsers } from "./functions/fetchUsers.js";

const select = document.querySelector("#select");

select.addEventListener("change", () => {
  const privateConfig = document.querySelector("#post-privacy");
  privateConfig.innerText = select.value;
});

const menuRight = document.querySelector("#menu-right");
const hamburgerButtonRight = document.querySelector(
  "#hamburger-btn__menu-right"
);

hamburgerButtonRight.addEventListener("click", () => {
  menuRight.classList.toggle("show-menu-left");
});

const onlineFriendsContainer = document.getElementById("active-friends");
const offlineFriendsContainer = document.getElementById("offline-friends");

getUsers().then((users) => {
  const friendList = document.createDocumentFragment();
  users.forEach((el) => {
    const friend = displayFriend(el.name);
    friendList.appendChild(friend);
  });
  onlineFriendsContainer.appendChild(friendList);
});
getUsers().then((users) => {
  const friendList = document.createDocumentFragment();
  users.forEach((el) => {
    const friend = displayFriend(el.name);
    friendList.appendChild(friend);
  });
  offlineFriendsContainer.appendChild(friendList);
});
