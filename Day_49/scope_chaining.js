/*

  scope chain ==> resolve the value of the variables name 
  use script mode
*/

// use Script Mode ==> it instructs the browser to use the strict mode, which  is reduced  and safe feature set of javascript

// hoisiting needs to be avoided.

"use strict"; // enabling the strict mode

// function add() {
//   sum = 123 + 123;
//   console.log(sum);
// }
// add();
// the above code executes because of the hoisting in javascript but if we need to remove such kind of things from the code then we can use javascript strict mode that avoids such hoisting methods\

// another example of avoiding duplicating parameter

function add(a, a) {
  var sum = a + 20;
  console.log(sum);
}
add(10, 20); // if not used strict mode, second parameter will be given priority as an arguments.
// we can avoid the use of duplicating the parameters in java script by using the same strict keywords.
