// let greet = document.getElementById("greeting");
// console.log(greet.dataset);
let user = document.getElementById("hello");
// console.log(user.getAttribute("id"));
console.log(user.setAttribute("hidden", "false"));

// let random = document.getElementsByClassName("yourName");
// console.log(random.dataset);

// let a = document.getElementsByTagName("div")[0];
// a.innerHTML = "<h1>Hello</h1>";

// let div = document.createElement("div");
// div.innerHTML = "<h3> I am a new div created using createElement.</h3>";
// // a.prepend(div); // adds the new div to the upper part of the div
// // a.append(div); // adds the new div created to the end of the div
// // a.before(div);

// creating a div using createElement and inserting it into the div with id="second"

let parentDiv = document.getElementById("second");

// let childDiv = document.createElement("div");
// childDiv.innerHTML =
//   "<p>Hey folks i am a child div created using js createElement() method";
// parentDiv.appendChild(childDiv);
// parentDiv.appendChild(childDiv); // this creates a child div inside the main div

// parentDiv.append(childDiv);
// parentDiv.prepend(childDiv);
// parentDiv.before(childDiv); // it creates a div just above the parent div
// parentDiv.after(childDiv); // just like before, it creates a div just below the parent div

// Exercise
// insert one div inside example div
// and perform different methods
// solution

// creating a variable that contains an element using its id
let topDiv = document.getElementById("example");

// creating an element named childDiv to insert it inside the topDiv
let childDiv = document.createElement("div");

// inserting <p> element inside the div using innerHTML method
childDiv.innerHTML = "<p>i am a div created using createElement() method</p>";

// now let's perform some methods
topDiv.appendChild(childDiv);
// topDiv.append(childDiv);
// topDiv.prepend(childDiv);
// topDiv.before(childDiv);
// topDiv.after(childDiv);
