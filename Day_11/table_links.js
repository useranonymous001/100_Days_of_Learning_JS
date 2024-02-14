// // let a = document.body.firstElementChild.firstElementChild;
// // console.log(a);

// // console.log(a.rows);

// // console.log(a.caption);

// // console.log(a.tHead);

// // let b =
// //   document.body.firstElementChild.firstElementChild.firstElementChild
// //     .nextElementSibling;
// // console.log(b);

// // console.log(typeof document);
// // console.log(typeof window);
// document.body.style.background = "lightgrey";

// // learning searching the DOM
// // document.getElementByClassName("ClassName") is used to search the element having the particular class name.
// // and that class name can be used by their particular indexes
// // let title = document.getElementsByClassName("container");
// // console.log(title);
// // title[0].style.color = "blue";

// // let button = document.getElementsuByClassName("suscribe");
// // console.log(button);
// // button[0].style.color = "red";
// // APPYING QUERY SELECTOR INSTEAD OF GET METHOD
// let button = document.querySelectorAll(".suscribe");
// // button[0].style.color = "white";
// // button[0].style.background = "black";
// button[1].style.color = "black";
// button[1].style.background = "white";
// button[2].style.color = "red";
// button[2].style.background = "green";

// let button2 = document.querySelector(".suscribe");
// button2.style.background = "purple";

// // Document.getElementById

// let website = document.getElementById("portfolio");

// console.log(website);
// website.style.color = "red";

// // QuerySelectorAll
// let robans = document.querySelectorAll(".container");
// console.log(robans);
// robans[0].style.color = "green";
// robans[1].style.color = "red";
// robans[2].style.color = "blue";

// let tagName = document.getElementsByTagName("div");
// console.log(tagName);

// let yourName = document.getElementsByName("username");
// console.log(yourName);

// // revision
// // inorder to change the background of the table header we can use table links like below
// let getTable = document.body.firstElementChild.firstElementChild;
// console.log((getTable.rows[0].style.background = "green"));

// // Here we will be learning abour the Closest Matches Contains

// let hack = document.getElementById("hack");
// console.log(hack);

// console.log(hack.matches(".rohan")); // true
// console.log(hack.matches(".khatri")); // false

// let sp1 = document.getElementById("span1");
// console.log(sp1);
// console.log(sp1.contains(secure));
// let = num = parseInt(document.getElementById("input").value);
// const factorize = () => {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   //   alert(fact);
//   alert(num);
// };

const prompt = require("prompt-sync")();
let characters = "hfkaiytwqa8o7r423liulrywlifrbreyoraw6o37or5bo";
let passLength = Number.parseInt(prompt("enter the length: "));
let result = "";
const generatePass = () => {
  for (let i = 1; i <= passLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(result);
};
console.log(generatePass());
