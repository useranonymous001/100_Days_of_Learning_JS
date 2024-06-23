/*
1) Higher order function   
    ==> a function that takes an function itsef as an parameeter. Like, if we passed a new function as an parameter to the existing function than the existing function is an higher order function
*/

// function advanced_js() {
//   return "hello ";
// }

// function higher_order_func(new_func) {
//   console.log(new_func);
// }

// higher_order_func(advanced_js);

// forEach is also an higher order function
// arr = [1, 12, 54, 65, 2, 23, 5];
// arr.forEach((elem, index, values) => {
//   //   console.log(elem + "    " + index + "    " + values);
//   console.log(elem);
// });

// // sorting array
// let newArr = arr.sort((a, b) => {
//   return a - b;
// });
// console.log(newArr);

// // for in loop ==> used for iterating an array
// for (let elem of arr) {
//   console.log(elem);
// }

// // for in loop ==> used for iterating through an object
// let obj = {
//   name: "random",
//   age: 23,
//   address: "mars",
// };
// // console.log(obj.name);
// for (let data in obj) {
//   console.log(obj[data]);
// }

/**
 
NEGATIVE INDEXES IN JAVASCRIPT
==> yes is possible and this proves that an array is also an object
 
 */

// negative indexing in array
// let arr = [12, 23, 45, 65, 76, 87, 98];

// arr[-2] = 21;
// console.log(arr);

// how to check when is the array and when it is an object

// Array.isArray([]);

const weatherForecastaData = async () => {
  const response = await fetch("http://localhost:5500", {
    headers: {
      Referrer: " 127.0.0.1:5500",
    },
    method: "GET",
  });

  const weatherData = await response.json();

  return weatherData;
};

const displayWeatherData = async () => {
  try {
    const response = await weatherForecastaData();
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
  } catch (error) {
    console.log("error fetching the data");
  }
};

displayWeatherData();
