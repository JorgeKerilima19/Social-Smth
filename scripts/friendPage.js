import friendCard from "./components/friendCard.js";

const friendContainer = document.getElementById("friendList-container");

const newFriend = friendCard("Jose");
const newFriend1 = friendCard("Jose");
const newFriend2 = friendCard("Jose");

friendContainer.appendChild(newFriend);
friendContainer.appendChild(newFriend1);
friendContainer.appendChild(newFriend2);
