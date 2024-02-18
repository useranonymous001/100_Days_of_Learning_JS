// let a = [123, 234, 37544, 3, 5547, 642, 54];

// let x = a.reduce((value1, value2) => {
//   return value1 + value2;
// });

// let x = a.filter((value) => {
//   return value > 100;
// });
// let x = a.map((value, index, array) => {
//   return value + 1, index, array;
// });
// console.log(x);

// learning DOM
// lets practice some console methods
// let fruits = {
//   apple: "vitamin A",
//   lemons: "vitamin C",
//   litchi: "vitamin C",
//   mango: "vitamin C",
// };

// console.table(fruits);

const bigBox = () => {
  let accessBox = document.getElementById("container");
  let currentWidth = accessBox.offsetWidth;
  let currentHeight = accessBox.offsetHeight;

  let newWidth = currentWidth * 1.1; // increases by 10%
  let newHeight = currentHeight * 1.1; // increases by 10%

  // converting the % to px;
  accessBox.style.width = newWidth + `px`;
  accessBox.style.height = newHeight + `px`;
};
document.querySelector("#increase").addEventListener("click", bigBox);
// let a = document.getElementById("increase");
// // let user  = document.getElementById("username")
// let user = document.querySelector("#username").value;

// if (user == "rohan") {
//   a.addEventListener("click", function (e) {
//     container.innerHTML = "i am clicked";
//   });
// } else {
//   a.removeEventListener("click", function (e) {
//     container.innerHTML = "actual me is removed";
// //   });
// // }
// let num = Number.parseInt(prompt("Enter a number: "));
// const factorial = () => {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   document.querySelector(".box").innerHTML = fact;
// };

// let x = setInterval(factorial, 3000);
// console.log(x);
