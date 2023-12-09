export default function bottomInfo(user) {
  const container = document.createElement("section");

  //user info
  const profileInfo = document.createElement("div");

  const detailsContainer = document.createElement("ul");
  //User Info
  const detailsTitle = document.createElement("h2");
  detailsTitle.innerText = "Details";

  detailsContainer.appendChild(detailsTitle);

  const basicUserInfo = [
    { name: "nickname", value: user.username },
    { name: "email", value: user.email },
    { name: "website", value: user.website },
    { name: "phone", value: user.phone },
    { name: "company", value: user.company.name },
  ];

  basicUserInfo.forEach((el) => {
    const elementContainer = document.createElement("li");
    const elementName = document.createElement("h5");
    const elementValue = document.createElement("span");

    elementName.innerText = el.name;
    elementValue.innerText = el.value;

    elementContainer.appendChild(elementName);
    elementContainer.appendChild(elementValue);

    detailsContainer.appendChild(elementContainer);
  });

  //classes
  detailsContainer.classList.add("menu-container");

  //   detailsContainer.appendChild(userNickname);

  profileInfo.appendChild(detailsContainer);

  container.classList.add("flex", "flex__gap-md");

  container.appendChild(profileInfo);

  const userPosts = document.createElement("div");
  container.appendChild(userPosts);

  return container;
}
