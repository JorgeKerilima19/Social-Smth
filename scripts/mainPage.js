select.addEventListener("change", () => {
  const privateConfig = document.querySelector("#post-privacy");
  privateConfig.innerText = select.value;
});
