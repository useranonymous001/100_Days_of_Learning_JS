// promises are the eventual comletion or failure of an asynchronous operations.

// let promise = new Promise((resolve, reject) => {
//   console.log("I am promise !! ");
//   //   resolve("I am resolves successfully");
//   reject(" aawww sorry mann ");
// });

// const getId = (userId) => {
//   return new Promise((resolve, reject) => {
//     console.log(userId);
//     setTimeout(() => {
//       console.log("i am promise and executed after 2 sec");
//       if (userId < 10) {
//         reject("yeah you are right");
//       } else {
//         resolve("okey i got it ");
//       }
//     }, 200);
//   });
// };

// getId(1);

// let getCar = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Searching the car......");
//     setTimeout(() => {
//       resolve("Here's the list of car you searched for: ");
//     }, 2000);
//   });
// };

// let gotCar = getCar();

// gotCar.then(() => {
//   console.log("1. Lambo 2. ferrrari 3. Thar ");
// });
// gotCar.catch(() => {
//   console.log("sorry couldn't found any of them");
// });

// promises chaining

const func1 = () => {
  return new Promise((resolve, reject) => {
    console.log("GETTING READYY !!  ");
    setTimeout(() => {
      resolve("got your first order !! ");
    }, 2000);
  });
};

const func2 = () => {
  return new Promise((resolve, reject) => {
    console.log("GETTING READY 2");
    setTimeout(() => {
      reject("sorry coudn't find it anymore !! ");
    }, 2000);
  });
};

let one = func1();
console.log("now ::");
one.then((res) => {
  console.log(res, " thank you for your order sir ");
  let two = func2();
  two.catch((err) => {
    console.log(err, " please try again !!");
  });
});
