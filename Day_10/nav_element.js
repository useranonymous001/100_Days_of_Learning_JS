console.log(document.body.childNodes);

let a = document.body;

console.log(a.firstChild);
console.log(a.lastElementChild);
console.log(a.firstElementChild);
console.log(a.previousElementSibling);
console.log(a.nextElementSibling);

document.body.firstElementChild.style.background = "cyan";

let b = document.body.childNodes[3];

const changeBgColor = () => {
  console.log((b.style.background = "grey"));
};
changeBgColor();
