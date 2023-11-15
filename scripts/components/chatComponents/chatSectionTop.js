const options = [
  {
    name: "call",
    svg: "",
  },
  {
    name: "videochat",
    svg: "",
  },
  {
    name: "more info",
    svg: "",
  },
];

const chatSectionTop = (user) => {
  //top section

  const topWrapper = document.createElement("ul");

  chatterName.innerText = user.name;

  topWrapper.appendChild(chatterImage);
  topWrapper.appendChild(chatterName);

  return topWrapper;
};

export default chatSection;
