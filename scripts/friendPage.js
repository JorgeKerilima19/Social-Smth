import TopInfo from "./components/friendPage/TopInfo.js";
import { getUser } from "./functions/fetchUsers.js";

const friend = localStorage.getItem("friend");
const user = await getUser(friend);

document.title = user.name;

const upperContainer = document.getElementById("user-upper-info");

const topPart = TopInfo(user);

upperContainer.appendChild(topPart);

console.log(user);
