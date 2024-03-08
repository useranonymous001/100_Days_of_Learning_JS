// dom attributes

// creating a new element
let ul = document.querySelector("ul");
let divBox = document.createElement("li");

//adding the element in the page
ul.append(divBox);

// adding content to the list
divBox.textContent = "hey i am a new list";

// some attributes that can be performed

//setting attributes to the element
divBox.setAttribute("id", "mouse");
// divBox.setAttribute("hidden", "false");

console.log(divBox.hasAttribute("class"));
console.log(divBox.getAttribute("hidden"));

// modifying the attributes

//adding multi class attribute to an element
divBox.classList.add("list1");
divBox.classList.add("red");
divBox.classList.add("yellow");
divBox.classList.add("orange");
divBox.classList.add("pink");
// console.log(divBox.classList.toggle("mouse"));

divBox.classList.remove("yellow");

// inorder to remove an element

// divBox.remove();

// to be continued
