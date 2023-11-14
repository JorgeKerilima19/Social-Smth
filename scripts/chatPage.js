import displayFriend from "./components/friend.js";

console.log("friend1");

const friendList = document.querySelector("#friend-list");

friendList.classList.add("width-full")

const friend1 = displayFriend("Jogn", false, 1);

friendList.appendChild(friend1);
console.log(friend1);
