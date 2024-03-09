// dom attributes

// // creating a new element
// let ul = document.querySelector("ul");
// // let divBox = document.createElement("li");

// //adding the element in the page
// ul.append(divBox);

// // adding content to the list
// // divBox.textContent = "hey i am a new list";

// // some attributes that can be performed

// //setting attributes to the element
// divBox.setAttribute("id", "mouse");
// // divBox.setAttribute("hidden", "false");

// console.log(divBox.hasAttribute("class"));
// console.log(divBox.getAttribute("hidden"));

// // modifying the attributes

// //adding multi class attribute to an element
// divBox.classList.add("list1");
// divBox.classList.add("red");
// divBox.classList.add("yellow");
// divBox.classList.add("orange");
// divBox.classList.add("pink");
// // console.log(divBox.classList.toggle("mouse"));

// divBox.classList.remove("yellow");

// inorder to remove an element

// divBox.remove();

// to be continued
document.body.style.backgroundColor = "grey";
document.body.style.color = "white";

// console.log(divBox.classList);

// let ul = document.querySelector("ul");
// // creating a new list element
// let newList = document.createElement("li");
// //adding the new list inside the ul
// ul.append(newList);
// // adding some content to the new element
// newList.textContent = "MINATO";
// // giving the same attribute as other
// // newList.setAttribute("class", "red");
// newList.classList.remove("list");
// newList.classList.add("list");

// to be continued

// LETS LEARN ABOUT PARENT CHILD CHILDREN NODES AND ELEMENTS IN JAVASCRIPT

let myDiv = document.querySelector("div");

// note:
/**
 node ==> includes all text, whitespaces
 element ==> specific elements
 */

//present parentNode
// console.log(myDiv.parentNode);
// // 1 step above the previous parentNode
// console.log(myDiv.parentElement.parentElement);
// // abocve the html document
// console.log(myDiv.parentElement.parentElement.parentElement);

// myDiv.childNodes;
// myDiv.firstChild;
// myDiv.lastChild;
// myDiv.firstElementChild;
// myDiv.lastElementChild;

console.log("i am the starter");
console.log(document.body.children);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
