/*
Let's revise some methods of array
*/

// let arr = [23, "234", 532, "123", 54, 2, 34, 252, 52, "rohan", 223.34];

// for (let elem of arr) {
//   console.log(elem + " = " + typeof elem);
// }

// let database = [];
// // database[0] = 123;
// database[0] = 321;

// console.log(database);

let arr = [23, "234", 532, "123", 54, 2, 34, 252, 52, "rohan", 223.34];
// some methods of an array
// array.pop()
arr.pop();
// console.log(arr);

// array.push()
arr.push(223.34);
// console.log(arr);

// array.shift()
arr.shift();
// console.log(arr);

// array.unshift()
let newArr = arr.unshift(23);
// console.log(arr, newArr);

// delete[i] ==> delete is an operator
delete arr[2]; // deletes but also creates an empty space of it.
// console.log(arr);

// array.concat()
let arr2 = ["concatenating", "ofa", "243"];
// console.log(arr.concat(arr2));

// array.toString()
let arrToString = arr.toString();
// console.log(arrToString);

// array.slice()   // remembere it creates an new array
let slicedArr = arr.slice(4, 9);
// console.log(slicedArr);

// array.splice()
// arr.splice(4, 2, "add1", "add2", "add3");
// console.log(arr);

// array.reverse()
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.reverse();
// console.log(num.reverse());

// array.sort()
let test = [1, 90, 54, 34, 12, 5];
// console.log(test.sort()); // sorts alphabetically

test.sort((a, b) => {
  return a - b;
});

// console.log(test);

// looping through an array

let array = [43, 25, 96, "rohan", "khatri"];
// array.forEach((value, index, array) => {
//   //   console.log(value + " " + index);
//   console.log(value + 10);
// });

// array.forEach((element, index, wholeArray) => {
//   console.log(element, index, wholeArray);
// });

// let userNum = [21, 24, 54, 65, 87];
// userNum.sort((a, b) => {
//   return a - b;
// });
// console.log(userNum);

// map ==> creates an new array by performing some operations on the existing array

// array.map((value, index, array) => {
//   console.log(value + 10, "position = " + index);
// });

// filter ==> filters an array with the values that passes the test conditions and store insides a new array
let randomNumber = [123, 35, 21, 6, 25, 90, 62, 53, 75];

let filteredArr = randomNumber.filter((element) => {
  return element > 50;
});
// console.log(filteredArr);

// reduce ==> reduces an array into an single value i.e.,

let reducedArr = randomNumber.reduce((a, b) => {
  return a + b;
});
console.log(reducedArr);

htmlCollection = [12, 54, 6, 58, 89, 54, 3, 423, 56, 57, 2];
console.log(Array.from(htmlCollection));
