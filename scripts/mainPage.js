import displayFriend from "./components/friend.js";
import { getUsers } from "./functions/fetchUsers.js";

// Post creating privacy

const select = document.querySelector("#select");

select.addEventListener("change", () => {
  const privateConfig = document.querySelector("#post-privacy");
  privateConfig.innerText = select.value;
});

//responsive right menu

const menuRight = document.querySelector("#menu-right");
const hamburgerButtonRight = document.querySelector(
  "#hamburger-btn__menu-right"
);

hamburgerButtonRight.addEventListener("click", () => {
  menuRight.classList.toggle("show-menu-left");
});

//Display User Friends active and non-active

const onlineFriendsContainer = document.getElementById("active-friends");
const offlineFriendsContainer = document.getElementById("offline-friends");

getUsers().then((users) => {
  const onlineFriendList = document.createDocumentFragment();
  const offlineFriendList = document.createDocumentFragment();
  users.forEach((el) => {
    const friend = displayFriend(el.name);
    if (el.id % 2 === 0) {
      onlineFriendList.appendChild(friend);
    } else {
      offlineFriendList.appendChild(friend);
    }
  });
  offlineFriendsContainer.appendChild(offlineFriendList);
  onlineFriendsContainer.appendChild(onlineFriendList);
  console.log(offlineFriendList);
  console.log(onlineFriendList);
});
