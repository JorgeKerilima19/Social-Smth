import friendCard from "./components/friendCard.js";
import { getUsers } from "./functions/fetchUsers.js";

const friendContainer = document.getElementById("friendList-container");

getUsers().then((friends) => {
  friends.forEach((el) => {
    const newUser = friendCard(el.name, el.email);

    friendContainer.appendChild(newUser);
  });
});
