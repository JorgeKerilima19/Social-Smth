const options = [
  {
    name: "call",
    svg: "../assets/svg/chatsection/call.svg",
  },
  {
    name: "videochat",
    svg: "../assets/svg/chatsection/video.svg",
  },
  {
    name: "more info",
    svg: "../assets/svg/chatsection/moreinfo.svg",
  },
];

const chatSectionTop = () => {
  //top section

  const topWrapper = document.createElement("div");

  options.map((el) => {
    const svg = document.createElement("img");

    svg.src = el.svg;

    svg.classList.add("chat-section__img");

    topWrapper.appendChild(svg);
  });

  topWrapper.classList.add("flex", "flex__gap-sm");

  return topWrapper;
};

export default chatSectionTop;
