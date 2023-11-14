import displayFriend from "./components/friend.js";
import { getUsers } from "./functions/fetchUsers.js";

const menuLeft = document.getElementById("menu-right");

menuLeft.classList.add("menu-left-chat");

console.log("friend1");

const friendList = document.querySelector("#friend-list");

friendList.classList.add("width-full");

getUsers().then((data) =>
  data.map((user, index) => {
    const friend = displayFriend(user.name, undefined, index);
    friendList.appendChild(friend);
  })
);
