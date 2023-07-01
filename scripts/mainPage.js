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

const friend = displayFriend("Carlos");

onlineFriendsContainer.appendChild(friend);

const Users = getUsers().then((users) => {
  users.forEach((el) => console.log(el.name));
});

console.log(Users);
