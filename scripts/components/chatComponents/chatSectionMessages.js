const icons = [
  { name: "audio", path: "../assets/svg/chatsection/audio.svg" },
  { name: "photo", path: "../assets/svg/chatsection/photo.svg" },
  { name: "gif", path: "../assets/svg/chatsection/gif.svg" },
];

const chatSectionMessages = () => {
  const section = document.createElement("section");
  const textArea = document.createElement("div");

  //form

  const form = document.createElement("form");

  //chat options icon
  const iconsWrapper = document.createElement("div");

  iconsWrapper.classList.add(
    "flex",
    "flex__gap-sm",
    "chat-section__icons-wrapper"
  );

  icons.forEach((icon) => {
    const optionWrapper = document.createElement("label");
    const optionIcon = document.createElement("input");

    optionWrapper.style.backgroundImage = `url(${icon.path})`;
    optionWrapper.classList.add("icon-container__bg");

    optionIcon.type = "file";

    optionIcon.id = icon.name;
    optionWrapper.htmlFor = icon.name;

    optionIcon.classList.add("chat-section__input");

    optionWrapper.appendChild(optionIcon);

    iconsWrapper.appendChild(optionWrapper);
  });

  //text area

  const labelText = document.createElement("label");
  const inputText = document.createElement("textarea");

  labelText.appendChild(inputText);

  inputText.classList.add("width__full", "chat-section__input-text");
  labelText.classList.add(
    "width__90",
    "margin__all-right",
    "flex",
    "flex__item-center"
  );
  form.classList.add(
    "flex",
    "flex__gap-sm",
    "flex__item-center",
    "chat-section__form"
  );

  form.appendChild(iconsWrapper);
  form.appendChild(labelText);

  section.appendChild(textArea);
  section.appendChild(form);

  return section;
};

export default chatSectionMessages;
