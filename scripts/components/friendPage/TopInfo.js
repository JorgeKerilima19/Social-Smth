export default function TopInfo(user) {
  const mainContainer = document.createElement("section");

  //cover Image
  const coverImage = document.createElement("img");

  coverImage.classList.add("width__full");
  coverImage.src = "./covers/cover1.jpg";

  //user info
  const userInfoContainer = document.createElement("div");

  const userImage = document.createElement("img");
  const userName = document.createElement("span");
  const userNickname = document.createElement("span");

  userImage.src = `./photos/${user.id}.jpg`;

  userName.innerText = user.name;
  userNickname.innerText = user.username;

  userInfoContainer.appendChild(userImage);
  userInfoContainer.appendChild(userName);
  userInfoContainer.appendChild(userNickname);

  mainContainer.appendChild(coverImage);
  mainContainer.appendChild(userInfoContainer);

  return mainContainer;
}
