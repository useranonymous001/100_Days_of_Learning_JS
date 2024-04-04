// collecting variables

let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let modalContainer = document.getElementById("container");

// adding some events to the elements

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
