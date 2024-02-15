const nepDict = {
  eat: "kha",
  sleep: "sut",
  stand: "uth",
  go: "jaa",
  come: "aaija",
};
console.table(nepDict);

// let x = confirm("do you want to do this? ");
// if (x) {
//   console.log("ahh yaaa");
// } else {
//   console.log("okeyy ");
// }

// document.body.style.background = "grey";

// let x = confirm("do you want to go there");
// if (x) {
//   location.href = "https://codewithharry.com";
// } else {
//   console.log("okeyy ");
// }

// let's learn about some insertElements

let a = document.getElementById("demo");

console.log(a.nodeName);

a.innerHTML = " <div><h1>hehheheheheh</h1></div>";

let funny = document.getElementById("set");
funny.hasAttribute("class");
funny.getAttribute("class");
funny.setAttribute("hidden", "true");
funny.removeAttribute("class");

// methods to get an collection of attrubutes
// funny.attributes;

// addeventlisteners
alert("ha");
let touched = document.getElementById("hello");

// touched.addEventListener("click", function (e) {
//   alert("aslkjfhlkasifh");
// });

let play = function (e) {
  alert("alshflasef yasufyhlfu rilkev lfruweslob ");
};

touched.addEventListener("click", play);
