// document.write("Hello Baby");

document.body.style.background = "black";
document.body.style.color = "white";

console.log(document.body.firstChild);
console.log(document.body.lastChildChild);
console.log(document.body.childNodes);

console.log(document.body.firstChild === document.body.childNodes[0]);
console.log(document.documentElement.parentNode);

// let x = 1;
// for (let i = 0; i < x; i++) {
//   if (x > 0) {
//     location.href = "https://getbootstrap.com";
//   }
// }

let a = document.body.firstChild;
console.log(a.parentElement);
console.log(a.firstChild.parentElement);
