export default function TopInfo(user) {
  const mainContainer = document.createElement("section");

  //cover Image
  const coverImage = document.createElement("img");
  const coverImageContainer = document.createElement("div");

  coverImage.src = "./covers/cover1.jpg";

  coverImageContainer.classList.add("friend-page__cover-container", "relative");
  coverImage.classList.add("friend-page__cover");

  coverImageContainer.appendChild(coverImage);

  //user info
  const userInfoContainer = document.createElement("div");

  const userImage = document.createElement("img");
  const userNameContainer = document.createElement("div");
  const userName = document.createElement("span");
  const userNickname = document.createElement("span");

  userImage.src = `./photos/${user.id}.jpg`;

  //user Name-nickname
  userNameContainer.appendChild(userName);
  userNameContainer.appendChild(userNickname);

  userName.innerText = user.name;
  userNickname.innerText = user.username;

  //classes
  userInfoContainer.classList.add(
    "flex",
    "flex__item-center",
    "flex__gap-bg",
    "relative",
    "friend-page__profile-container"
  );
  userImage.classList.add("friend-page__profile-img");
  userNameContainer.classList.add(
    "friend-page__profile-name",
    "flex",
    "flex__column"
  );

  userInfoContainer.appendChild(userImage);
  userInfoContainer.appendChild(userNameContainer);

  mainContainer.appendChild(coverImageContainer);
  mainContainer.appendChild(userInfoContainer);

  return mainContainer;
}
