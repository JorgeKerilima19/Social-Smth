import friendCard from "./components/friendCard.js";
import { getUsers } from "./functions/fetchUsers.js";

const friendContainer = document.getElementById("friendList-container");

getUsers().then((friends) => {
  friends.forEach((user, index) => {
    const newUser = friendCard(user, user.email, index);

    friendContainer.appendChild(newUser);
  });
});
