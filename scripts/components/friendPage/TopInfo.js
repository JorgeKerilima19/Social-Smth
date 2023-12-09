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

  userImage.src = `./photos/${user.id}.jpg`;

  userName.innerText = user.name;

  userInfoContainer.appendChild(userImage);
  userInfoContainer.appendChild(userName);

  mainContainer.appendChild(coverImage);
  mainContainer.appendChild(userInfoContainer);

  return mainContainer;
}
