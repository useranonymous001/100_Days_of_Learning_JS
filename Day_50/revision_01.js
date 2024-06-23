// browser context api
/*
Whenever we run/create a function, that function creates their own imaginery container that we call it its own execution context. That execution context contains: 
    1) variables 
    2) Function inside that parent function 
    3) lexical environment of that function 


    Lexical Environment defines the scope of an particurlar function like variables, features and so on.
*/

// How to copy referene values like

let a = [1, 2, 3, 4, 5];
let b = a; // the array will be referenced to the b as well and any changes made to the array of b will also affect the array in a.
b.pop();
console.log(b);
console.log(a);

// How to overcome this problem? For this we use a spread operator.
let copy_of_a = [...a];
console.log(copy_of_a);

// can we copy the objects in the same way
let obj = {
  name: "rohan",
  caste: "Khatri",
  id: 10,
  number: 12354,
};
console.log(obj);
let copy_of_obj = { ...obj };
copy_of_obj.username = "hackeroftheworld";
console.log(copy_of_obj);
