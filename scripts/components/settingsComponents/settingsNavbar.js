const items = [
  {
    to: "#darkMode",
    name: "Dark Mode",
    svg: "",
  },
  {
    to: "#privacy",
    name: "Privacy",
    svg: "",
  },
  {
    to: "#feedback",
    name: "Feedback and Recomendations",
    svg: "",
  },
];

const settingsNavbar = () => {
  const container = document.createElement("ul");
  container.classList.add(
    "menu-container",
    "height-full",
    "pd-md",
    "container__bg-container"
  );

  items.forEach((el) => {
    const itemContainer = document.createElement("li");
    const linkContainer = document.createElement("a");
    const spanElement = document.createElement("span");
    const svgElement = document.createElement("img");

    linkContainer.innerText = el.name;
    linkContainer.href = el.to;

    itemContainer.classList.add("flex");
    linkContainer.classList.add("width__full");

    linkContainer.appendChild(spanElement);
    linkContainer.appendChild(svgElement);
    itemContainer.appendChild(linkContainer);

    container.appendChild(itemContainer);
  });

  return container;
};

export default settingsNavbar;
