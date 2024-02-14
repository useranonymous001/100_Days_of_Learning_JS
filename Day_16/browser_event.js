document.body.style.background = "black";
document.body.style.color = "white";

// js browser events basically controls the events of mouse and keyboards
// like clickin thr buttons hovering and so on..

// using function to add events on the elements

let a = document.getElementsByClassName("container")[0];

a.onclick = () => {
  a.innerHTML = "hello whats up mann";
};

const userInfo = () => {
  let uservalue = document.getElementById("username").value;
  let result = document.getElementById("output");

  result.innerHTML = uservalue;
};
