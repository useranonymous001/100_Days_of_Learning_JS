// // let's revise the concept of call back function , promises in js and async and await function

// // callback function

// const guessWeather = () => {
//   let weather = ["rainy", "sunny", "cloudy", "windy", "foggy", "stormy"];
//   let randomIndex = Math.floor(Math.random() * weather.length);
//   let finalWeather = weather[randomIndex];
//   //   console.log(finalWeather);
//   return finalWeather;
// };

// const weatherForecaster = (todayWeather, callbacks) => {
//   console.log("Getting weather condition.....");
//   setTimeout(() => {
//     console.log("According to analysis, Today will be ", todayWeather);
//     // greeting();
//     callbacks();
//     // ask();
//   }, 3000);
// };

// // const goodMorning = () => {
// //   console.log("Heyy, good morning---I think today will be");
// // };

// // this is an callback hell--- prefer not to use it

// weatherForecaster(guessWeather, () => {
//   weatherForecaster(12314, () => {
//     weatherForecaster("no casting today", () => {
//       weatherForecaster("yes casting today");
//     });
//   });
// });

// now let's have a look at what promises are
// syntax : let  variable = new Promise((resolve, reject) => {
//     code to execute
// })
// promises are generally returned by the functions promising either to fullfill the given task or reject the task if not fulfilled...
// A promise is an assurance or guarantee that something will happen in the future.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = Math.random() * 100;
    if (number > 50) {
      resolve("success");
    } else {
      reject("failed");
    }
  }, 2000);
});

promise.then((res) => {
  console.log(res);
});
promise.catch((err) => {
  console.log(err);
});

// to be continue ............
