// Basic syntax for promises in js

// let promise = new Promise((resolve, reject) => {});
// It has three states: pending, fullfilled, rejected

// let promise = new Promise((resolve, reject) => {
//   console.log("i am promise");
//   //   resolve("I am sucessfull person !!");
// //  olve(" yeahh mann, you are right bro ");
//   } el reject("some error occured please try again later");
// });

// let check = new Promise((resolve, reject) => {
//   if (x > 0) {
//     resse {
//     reject("soryy man but x is negative");
//   }
// });

// function getId(userId) {
//   return new Promise((resolve, reject) => {
//     if (userId == 1234) {
//       setTimeout(() => {
//         resolve("you are in");
//       }, 2000);
//     } else {
//       reject("get out of my app !! ");
//     }
//   });
// }

// getId(123, () => {
//   getId(console.clear());
// });

// promises then and catch
// .then is returned when the function or task is resolved
// .catch is returned when the function or task is rejected
// when the function is pending or fulfilled .catch function is not returned,

// const getFood = () => {
//   return new Promise((resolve, reject) => {
//     console.log("ordering pizza !! ");
//     resolve("success");
//     // reject("fail");
//   });
// };

// let food = getFood();

// food.then((res) => {
//   console.log(res, "your food is delivered, please pay the bill ");
// });

// food.catch((err) => {
//   console.log(
//     err,
//     "sorry, your pizza couldn't be delivered due to some error "
//   );
// });

const getFood = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 3000);
  });
};
const getFood2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success2");
    }, 3000);
  });
};

// let pizza = getFood();
// console.log("fecthing pizza.....");
// pizza.then((res) => {
//   console.log(res);
//   let burger = getFood2();
//   console.log("fetching burger ");
//   burger.then((res) => {
//     console.log(res);
//   });
// });

// writing the above code in more readble form
// getFood().then(() => {
//   console.log("successfully got your pizza");
//   getFood2().then(() => {
//     console.log("successfully got your burger");
//   });
// });

// console.log("fetching pizza ");
// pizza.then((res) => {
//   console.log(res);
// });

// console.log("fetching burger ");
// burger.then((res) => {
//   console.log(res);
// });

getFood().then(() => {
  console.log("success");
  getFood2.then(() => {
    console.log("another success after 4 seconds");
  });
});
