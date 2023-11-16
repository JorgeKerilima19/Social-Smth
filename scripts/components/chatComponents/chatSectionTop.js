const options = [
  {
    name: "call",
    svg: "../../assets/svg/chatSection/call.svg",
  },
  {
    name: "videochat",
    svg: "../../assets/svg/chatSection/video.svg",
  },
  {
    name: "more info",
    svg: "../../assets/svg/chatSection/moreinfo.svg",
  },
];

const chatSectionTop = () => {
  //top section

  const topWrapper = document.createElement("div");

  options.map((el) => {
    const img = document.createElement("img");
  });

  // topWrapper.appendChild(img);

  return topWrapper;
};

export default chatSectionTop;
