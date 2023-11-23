const footerItems = [
  { name: "about", to: "#" },
  { name: "privacy", to: "#" },
  { name: "cookies", to: "#" },
  { name: "help center", to: "#" },
  { name: "contact us", to: "#" },
];

export default function footer() {
  const footer = document.createElement("footer");

  footerItems.forEach((el) => {
    const a = document.createElement("a");

    a.innerText = el.name;
    a.href = el.to;

    a.classList.add("footer__a");

    footer.appendChild(a);
  });

  footer.classList.add(
    "flex",
    "flex__gap-sm",
    "flex__wrap",
    "flex__sp-evl",
    "flex__item-center",
    "width__full"
  );

  return footer;
}
