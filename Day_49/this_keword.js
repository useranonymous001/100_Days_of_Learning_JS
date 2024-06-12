/*
 This keywords refers to the object it belongs to.
*/

// console.log(this); // global object
// (async () => {
//   console.log("Inside IIFE");
//   console.log(this); // also an global object
// })();

// let's make a function and try it with this keyword

// function simpFnc() {
//   console.log("this is a simple function");
// }
// simpFnc();
// console.log(this.simpFnc); // here this refers to the functon object instead of the global object.

const obj = {
  name: "Hacker Boy",
  qualification: "hacked google at 19",
  newFnc: function () {
    console.log("A function inside an object");
    console.log(this.qualification);
    console.log(this);
  },
};

// how will i call the function inside an object
obj.newFnc();

/*
Now what will be the scope of the this keyword here: 
==> Here the scope of the this keyword becomes only inside the object. 

==> Here, this will point to it's owner that is an object

But why? 
==> this keyword only refers to the global object when it is inside the regular function or at global level.


*/
