import TopInfo from "./components/friendPage/TopInfo.js";
import bottomInfo from "./components/friendPage/bottomInfo.js";
import { getUser } from "./functions/fetchUsers.js";

//reset main padding top

const main = document.getElementById("main");

main.style.paddingTop = "0rem";

const friend = localStorage.getItem("friend");
const user = await getUser(friend);

document.title = user.name;

const container = document.getElementById("user-upper-info");

const topPart = TopInfo(user);

const bottomPart = await bottomInfo(user);

bottomPart.classList.add("flex", "flex__gap-bg", "user-page__container");
container.classList.add("width__limit");

container.appendChild(topPart);
container.appendChild(bottomPart);
