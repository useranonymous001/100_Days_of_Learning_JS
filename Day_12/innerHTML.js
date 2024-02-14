let x = document.body.firstElementChild;
console.log(x);
console.dir(x); // console.dir() is same like console.log() but represents the value in a object form HTMLcollection

console.log(x.nodeName); // returns the nodeName of elements just like child Nodes like text elements and so on.
let b = document.body.childNodes[3]; // returns the node present at index 3
console.log(b.nodeName);

// INNER  HTML

// document.getElementById("name").value;

// let res = document.getElementById("name").innerHTML;
// console.log(res);
// a = document.getElementById("hello").innerHTML;
// a = document.getElementById("hello").outerHTML;
// console.log(a);
// console.log(document.body.firstChild.data);
// console.log(document.body.firstChild.nodeValue);

// console.log(document.body.textContent);

let greeting = document.getElementById("greet");

console.log(greeting.firstChild.data);
