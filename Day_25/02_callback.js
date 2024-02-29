// callback function
// basically callback function is a type of function which is passed as an argument to another function

// const sum = (a, b) => {
//   console.log(a + b);
// };

// const loadScript = (a, b, callbackSum) => {
//   console.log(" Hey i am called");
//   if (callbackSum) {
//     callbackSum(a, b);
//   }
// };
// loadScript(12, 14, sum);

// const getId = (userId, callBackNextId) => {
//   setTimeout(() => {
//     console.log(userId);
//     if (callBackNextId) {
//       callBackNextId();
//     }
//   }, 2000);
// };
// const getId = (id, nextId) => {
//   setTimeout(() => {
//     console.log(id);
//     if (nextId) {
//       nextId();
//     }
//   }, 2000);
// };
// getId(123, () => {
//   getId(234, () => {
//     getId(12314);
//   });
// });

// we use callback function in many cases like

// let ipo = ["parxa", "pardaina", "kaile pardaina", "aaba ko chai parxa hola"];

// let result = ipo.filter((value) => {
//   return value != "kaile pardaina" && value != "pardaina";
// });
// console.log(result, typeof result);

//revision:

// function ==> parameter ==> argument

// what are promises
// promises in js are the eventual completion or failure of an asynchronious operation and its resulting value

// let promise = new Promise((resolve, reject) => {
//   console.log("wait for 2 secs ....");
//   setTimeout(() => {
//     if (5 == 3) {
//       resolve("It is true");
//     } else {
//       reject("it is false");
//     }
//   }, 2000);
// });
// console.log(promise);

// let promise = new Promise ((resolve, reject))

// promise chaining with setTimeout()

// const menuList = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("List of items");
//     }, 3000);
//   });
// };

// const getItem = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("The items is not available sir !!");
//     }, 3000);
//   });
// };
// console.log("Getting the list......");
// menuList().then((res) => {
//   console.log(res);
//   console.log("Checking the item,.....");
//   getItem().catch((err) => {
//     console.log(err);
//   });
// });

const getId = (getData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", getData);
      resolve("successfully got the data");
    }, 2000);
  });
};

// promise chaining at highest level

getId(12).then((res) => {
  return getId(2).then((res) => {
    return getId(423).then((res) => {
      console.log(res);
    });
  });
});
