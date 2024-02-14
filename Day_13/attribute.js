let a = document.getElementById("intro").innerHTML;
console.log(a);

// getAttibute()
// gives the defined attribute to the certain element
// Eg:
let check = intro.getAttribute("class");
console.log(check);

// hasAttribute()
// checks whether the element has that attribute or not

console.log(intro.hasAttribute("class")); // checks whether the element have class attribute or not

// setAttribute(name,value)
// sets html attributes to an element
let change = document.getElementById("empty");
let set = change.setAttribute("hidden", "true");
console.log(set);

// removeAttribute (name)
// removes the attribute of an element
let coding = document.getElementById("coder");
console.log(coding.removeAttribute("class")); // removes the class attribute of an element

// element.attributes
// returns every attributes of an element in the form of html collections/arrays
console.log(coding.attributes);

let hacked = document.getElementById("hacker");
console.log(hacked.setAttribute("hidden", "true"));

let gamer = document.getElementById("pubg");
console.log(gamer.dataset);
