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

  items.forEach((el) => {
    const itemContainer = document.createElement("li");
    const linkContainer = document.createElement("a");
    const spanElement = document.createElement("span");
    const svgElement = document.createElement("img");

    linkContainer.innerText = el.name;
    linkContainer.href = el.to;

    linkContainer.appendChild(spanElement);
    linkContainer.appendChild(svgElement);
    itemContainer.appendChild(linkContainer);

    container.appendChild(itemContainer);
  });

  return container;
};

export default settingsNavbar;
