// document.querySelector("#sports").addEventListener("click", function (event) {
//   console.log("ul is clicked");

//   const target = event.target;

//   if (target.matches("#sports")) {
//     target.style.backgroundColor = "lightblue";
//   }
// });

// document.querySelector(".football").addEventListener("click", function (event) {
//   console.log("Football is clicked");

//   const target = event.target;

//   if (target.matches(".football")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

document.querySelector(".sports").addEventListener("click", function (event) {
  console.log(event.target.id + " is clicked");

  const target = event.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

let sports = document.querySelector(".sports");
let newSport = document.createElement("li");

newSport.innerText = "SkyDiving";

newSport.setAttribute("id", "skydiving");

sports.appendChild(newSport);

v;
