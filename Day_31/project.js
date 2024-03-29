document
  .querySelector("#container")
  .addEventListener("click", function (event) {
    console.log(event.target.id + " is clicked");
    target = event.target;

    if (target.matches("div")) {
      //   let currentColor = event.target.id;
      document.body.setAttribute("id", event.target.id);
    }
  });

// let's add a white div box for white background using js with same proporties as others

let container = document.querySelector("#container");
let whiteDiv = document.createElement("div");

whiteDiv.innerText = "White";

whiteDiv.setAttribute("id", "white");

container.appendChild(whiteDiv);
