let button = document.querySelector(".clicker");
const changeBg = () => {
  document.body.style.background = "green";
};

button.addEventListener("dbclick", changeBg, true);
