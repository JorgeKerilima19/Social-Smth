import chatSectionTop from "./components/chatComponents/chatSectionTop.js";
import displayFriend from "./components/friend.js";
import { getUsers } from "./functions/fetchUsers.js";

//menu Left
const menuLeft = document.getElementById("menu-right");

menuLeft.classList.add("menu-left-chat");

const friendList = document.querySelector("#friend-list");

friendList.classList.add("width-full");

const chatWrapper = document.getElementById("chat-section");
chatWrapper.classList.add(
  "width__full",
  "flex",
  "flex__sp-btw",
  "flex__item-center"
);

getUsers().then((data) =>
  data.map((user, index) => {
    const friend = displayFriend(user.name, undefined, index);

    //set chatter

    friend.addEventListener("click", () => {
      const chatter = displayFriend(user.name, undefined, index, false);
      const options = chatSectionTop();
      chatWrapper.innerHTML = "";
      chatWrapper.appendChild(chatter);
      chatWrapper.appendChild(options);
    });

    friendList.appendChild(friend);
  })
);

//chat section
