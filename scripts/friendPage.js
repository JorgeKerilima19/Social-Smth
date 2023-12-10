import TopInfo from "./components/friendPage/TopInfo.js";
import bottomInfo from "./components/friendPage/bottomInfo.js";
import { getUser } from "./functions/fetchUsers.js";

const friend = localStorage.getItem("friend");
const user = await getUser(friend);

document.title = user.name;

const upperContainer = document.getElementById("user-upper-info");

const topPart = TopInfo(user);

const bottomPart = await bottomInfo(user);

bottomPart.classList.add("flex", "flex__gap-bg");

upperContainer.appendChild(topPart);
upperContainer.appendChild(bottomPart);

console.log(user);
