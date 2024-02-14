const prompt = require("prompt-sync")();

// let user = prompt("enter your name: ");

// if (user == "rohan") {
//   console.log("wait for 2 sec.....:");
//   setTimeout(() => {
//     console.log("your name is ", user);
//   }, 2000);
// } else {
//   console.log("OUT");

//   clearTimeout();
// }

// let number = Number.parseInt(prompt("Enter a number: "));
// console.log("Checking......");
// if (number > 0) {
//   setTimeout(() => {
//     console.log("the number is positive");
//   }, 2000);
// } else {
//   console.log("the number is negative");
// }

// we can write the setTimeout function in other way like
// setTimeout(function, delay, <arg1>,<arg2>,<arg3>)

// const product = (x, y) => {
//   console.log("11 * 6 = ", x * y);
// };
// setTimeout(product, 2000, 11, 6); // setTimeout(function,delay,arg1, arg2, arg3)

// lets create a function that checks  whether the number is prime or composite

// let number = Number.parseInt(prompt("Enter a number: "));
// console.log("Checking........");

// let temp = 0;
// const checkPrime = () => {
//   for (let i = 1; i < number; i++) {
//     if (number % i == 0) {
//       temp += 1;
//     }
//   }
//   if (temp == 1) {
//     console.log("The number is prime");
//   } else {
//     console.log("the number is composite.");
//   }
// };

// let runOnce = setTimeout(checkPrime, 3000);

// setInterval(function, delay, arg1, arg2)
// runs the associated program periodically in a given interval of time
// It's just like a inifinite while loop that runs in a given interval

// console.log("Checking........");
const result = (value) => {
  if (value == 1) {
    console.log("the number is prime.");
  } else {
    console.log("The number is composite.");
  }
};

const checkPrime = () => {
  let number = Number.parseInt(prompt("Enter a number: "));
  let temp = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      temp += 1;
    }
  }
  return result(temp);
};

let runAgain = setInterval(checkPrime, 2000);

// note:
// here runOnce / runAgain is the timerId for the setTimeout function

// clearTimeout(runOnce); // removing the time function by using its timerID
