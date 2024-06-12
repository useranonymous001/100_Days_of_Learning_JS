/**
 Execution Context and Execution Stack in JavaScript

 Execution Context is an environment where our javascript code is executed and evaluated
 JavaScript By default creates global execution context before it starts to execute.

 Execution Stack also known as calling stack with LIFO(last in first out  ) structure , which is used to store the execution context created during code execution.

 Execution Context also has two phases:
    Creation Phase
        1) Variable Object 
        2) Scope Chaining
        3) This variable
    Execution Phase
        1) Execute the stact one by one
    
 Hoisiting In JavaScript
    JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

    1) Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")




 */

// let exampleEC = "execution context";

// function a() {
//   let func_a = "function a executed";
//   console.log(func_a);
//   debugger;
//   b();
//   console.log("let's see what will happen in the console.");
// }
// function b() {
//   console.log("function b");
//   debugger;
//   c();
// }
// function c() {
//   debugger;
//   console.log("function c executed");
// }
// debugger;
// a();

// // hoisting in JavaScript

// // it works with the variable that starts with the var keyword and those functions that uses function keyword to define a function

// // function sumFunc(a, b) {
// //   return a + b;
// // }

// // // function call
// // console.log(`sumFunc (5, 2 ) => ${sumFunc(5, 2)}`);
// // console.log(`sumConst (2, 2 ) => ${sumConst(2, 2)}`);

// // // function definition
// // const sumConst = (a, b) => a + b;
// var a;
// console.log(a); // undefined
// a = 1;

// function whoAmI() {
//   console.log("I am a " + job);
//   var job = "Full Stack";
//   console.log("I am a " + job);
// }

// var job = undefined;
// console.log("I am a " + job);
// var job = "Web Developer";
// console.log("I am a " + job);

// whoAmI();

const url = "https://api.github.com/users/useranonymous001";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return [data];
};

let value = fetchData();
console.log(value);
