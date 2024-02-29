// document.body.style.background = "black";
// document.body.style.color = "white";

// const getId = (id, nextId) => {
//   setTimeout(() => {
//     console.log(id);
//     if (nextId) {
//       nextId();
//     }
//   }, 2000);
// };

// getId(1, () => {
//   getId(2, () => {
//     getId(3);
//   });
// });

// const userId = (getId, getNextId) => {
//   setTimeout(() => {
//     console.log(getId);
//     if (getNextId) {
//       getNextId();
//     }
//   }, 2000);
// };

// userId(2, () => {
//   userId(3, () => {
//     userId(4);
//   });
// });

// let username = ["admin", "rohan", "bandana", "auraj", "amrit"];
// let password = ["admin", "khatri", "mishra", "dahal", "tamanag"];
// let items;

// const checkUsername = (userInput, getPass) => {
//   for (items in username) {
//     if (userInput == username[items]) {
//       getPass();
//     }
//   }
// };
// const checkPass = () => {
//   let passInput = prompt("Enter password");
//   for (i in password) {
//     if (items == i) {
//       console.log("Welcome dost");
//       break;
//     } else {
//       console.log("wrong password");
//       break;
//     }
//   }
// };
// let userInput = prompt("Enter username: ");
// checkUsername(userInput, checkPass);

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const loadFunction = (a, b, callBackSum) => {
//   callBackSum(a, b);
// };

// loadFunction(12, 12, sum);

// const sum = (a, b) => {
//   console.log(a, b);
// };

// setTimeout(sum, 2000, 23, 23);

// console.log("jfalofal");

// let clk = document.getElementById("cliker");

// clk.addEventListener("click", () => {
//   alert("you just clicked me right");
// });

// const getPass = (gotPassword) => {
//   gotPassword();
// };
// const enterPass = () => {
//   // let a = prompt("Enter the password: ");
//   // alert(a);
// };

// getPass(enterPass);

// const loadScript = (callBackScript) => {
//   // setTimeout(() => {
//   //   callBackScript();
//   //   callBackReply();
//   // }, 2000);
//   let script = document.createElement("script");

//   script.onerror = function () {
//     console.log("succssfully loaded ! ");
//     callBackScript();
//   };
//   document.body.appendChild(script);
// };

// const script = () => {
//   let space = document.getElementById("container");
//   space.innerHTML = "Hey i am just fine and how are you mannnnnnnn ";
// };
// const reply = () => {
//   alert(" yoo i am good toooo !! ");
// };

// loadScript(script);
