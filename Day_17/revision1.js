// today i am gonna revise everything i have learned till now and then build a small project

// expressions

// let a = 2;
// let b = 3;

// console.log(a++); // post increment
// console.log(--b); // pre decrement

// console.log(a ** b);

// let c = "1";
// let d = 1;
// console.log(c != d);
// console.log(c !== d);

// if (a == b && c == d) {
//   console.log("True");
// } else {
//   console.log("false");
// }

// let h = 123;
// console.log(!h);

// ternary operators

let a = 12;
let b = 3;
let c = 9;
// let check = a > b ? "true" : "false";
// console.log(check);

// let check =
//   a > b && a > c
//     ? "a is the greatest"
//     : b > c
//     ? " b is the greatest"
//     : "c is the greatest";
// console.log(check);

// loops and functions

// for loop
// for in
// for of
// while loop
// do while loop

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// const object = {
//   country: "nepal",
//   language: "nepali",
//   religion: "hindu",
// };
// object.country = "canada";  // we can update the value of an object

// console.log(object.country);
// for (let items in object) {
//   // for in loops are used to loop througn the keys of an object
//   console.log(items + " = " + object[items]);
// }

// cars = ["rolls royce", "lambo", "maruti"];
// for (let items of cars) {
//   console.log(items);
// }

let i = 1;
// while (i > 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i > 10);

// factorial using while loop

// fact = 1;
// while (i <= 8) {
//   fact *= i;
//   i++;
// }
// console.log(fact);

// function rohan(){
//     code
// }
// rohan()

// const func_name = () => {
//   console.log(" i am inside the function");
//   return "hello";
// };
// // console.log(func_name());

// const sum = (x, z) => {
//   console.log("halefh");
//   return x + z;
// };
// console.log(sum(4, 2));

// STRINGS
// string.concat()
// string.replace("string","newString")
// string.trim()
// string.slice(index:start , index:end(but not included))

let str = "string-";
let str1 = "string-";
let str2 = `string-`;
let str3 = 'string"';
// console.log(str3.length);

// console.log(str3);
// console.log(str + str1 + str2 + str3);

let str4 = `i am learning ${str1}`;
// console.log(str4);

// console.log("hellodude\rrohan\rrob");
// console.log("hello \t hell");
// console.log("hello \n hell");

let str5 = "iamrevisngjavascriptuptoday16";
let str6 = "--youalsostartlearningjavascript";
// .slice

// console.log(str5.slice(2, 6)); // from 2 to 6(not included)
// it does not change the actual string value

let hell = str5.replace("am", "is");
// console.log(hell);

let concatenation = str5.concat(str6);
// console.log(concatenation);

let str7 = "     rohan khatri      ";
// console.log(str7.trim());
// console.log(str7);

// arrays
let arr1 = ["hello", 12, "bhai", 34, "kaise hoo"];
let arr2 = ["hello", 12, "bhai", 34, "kaise hoo"];

// arr1.pop();
// arr1.push("thik hu bhai");
// arr1.shift();
// let ar = arr1.unshift("hey ");
// delete arr1[2];

// let newArr = arr1.concat(arr2);
// console.log(newArr);
// console.log(newArr);
// console.log(arr1, ar);
// console.log(arr1[0]);
// console.log(arr1[1]);

// let numbers = [12, 234, 123, 254, 23, 4, 323, 231, 786];

// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

// const asscend = (a, b) => {
//   return b - a;
// };
// console.log(numbers.sort(asscend));

// // arr1.toString();
// console.log(arr1.toString());
// console.log(arr1.join("---"));
// console.log(typeof arr1.join("---"));

// slice
// numbers.slice(3);
// console.log(numbers);

// splice

// numbers.splice(2, 3, "hello", "hello2", "hello3");
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// for each loops
let numbers = [12, 234, 123, 254, 23, 4, 323, 231, 786];

// for each element runs a given function to each elements
// numbers.forEach((value, index) => {
//   console.log(value + index );
// });

// const add = (item) => {
//   return item + 1;
// };
// let x = numbers.map(add);
// console.log(x);

// const adding = (item) => {
//   return "Rs. " + item;
// };
// let newArr = numbers.map(adding);
// console.log(newArr);

// we can also do the same thing by using the below method as per our easyness

// numbers.map((item) => {
//   console.log("Rs. " + item);
// });

// numbers.filter((element) => {
//   console.log(element > 100);
// });

// let x = numbers.reduce((one, two) => {
//   return one + two;
// });

// console.log(x);

let asd = Array.from("Rohan");
console.log(asd);
