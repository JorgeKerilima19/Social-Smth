import friendCard from "./components/friendCard.js";

const friendContainer = document.getElementById("friendList-container");

const newFriend = friendCard("../assets/postImages/minecraftMeme.jpg", "Jose");
const newFriend1 = friendCard("../assets/postImages/minecraftMeme.jpg", "Jose");
const newFriend2 = friendCard("../assets/postImages/minecraftMeme.jpg", "Jose");

friendContainer.appendChild(newFriend);
friendContainer.appendChild(newFriend1);
friendContainer.appendChild(newFriend2);
