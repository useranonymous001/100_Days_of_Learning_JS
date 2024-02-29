// async function always returns a promise
// any normal function can be made async
// async function generally is used to make an asynchronious function more simpler unlike callbacks, callback hell, promises and promise chaining.

// keyword : async normal function(){}

// function weatherData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data.");
//       resolve(200);
//     }, 2000);
//   });
// }

// // await weatherData()  ==> this throws an error because await function can only be called inside the async function

// async function getWeatherData() {
//   await weatherData(); // i can call an await function as much as i can which executes upon the completion of the before ones
//   await weatherData();
//   await weatherData();
// }

// getWeatherData();

// let's take an another example of how it works..

let resturant = () => {
  return new Promise((resolve, reject) => {
    let menuList = ["momo", "chowmin", "thukpa", "burger", "pizza", "sandwich"];
    console.log(menuList);
    let customerChoice = prompt("Enter your choice sir : ");
    console.log("Wait for a while.......");
    setTimeout(() => {
      for (items of menuList) {
        if (customerChoice == items) {
          console.log(`Here is your ${customerChoice} sir !!`);
          resolve(200);
        }
      }
    }, 3000);
  });
};

async function getItems() {
  await resturant();
  await resturant();
}
