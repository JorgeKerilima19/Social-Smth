const icons = [
  { name: "audio", path: "" },
  { name: "photo", path: "" },
  { name: "gif", path: "" },
];

const chatSectionMessages = () => {
  const section = document.createElement("section");
  const textArea = document.createElement("div");

  //form

  const form = document.createElement("form");
  const inputAudio = document.createElement("input");
  const inputPhoto = document.createElement("input");
  const inputGif = document.createElement("input");
  const inputText = document.createElement("input");

  inputAudio.type = "checkbox";
  inputAudio.type = "file";

  section.innerText = "xdxd";

  form.appendChild(inputAudio);
  form.appendChild(inputPhoto);
  form.appendChild(inputGif);
  form.appendChild(inputText);

  section.appendChild(textArea);
  section.appendChild(form);

  return section;
};

export default chatSectionMessages;
