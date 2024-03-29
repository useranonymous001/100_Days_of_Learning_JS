// event propagation
// It consists of two phases

// BUBBLING phases
/*
 BUBBLING phase is activated by default that has false parameters in the addEventListener. It starts from bottom to the root of the program
*/

// CAPTURING PHASE
/*
CAPTURING phase is true
 when the third option or third parameter of the addEventListener is set to true.
It starts capturing events from top to the target event.
*/

let container = document.querySelector(".container");
let outer = document.querySelector(".div1");
let inner = document.querySelector(".innerdiv1");

window.addEventListener(
  "click",
  function (e) {
    // alert("i am windo");
    console.log("Window");
  },
  false
);

container.addEventListener(
  "click",
  function (e) {
    console.log("container");
  },
  { once: true }
);
outer.addEventListener(
  "click",
  function (e) {
    console.log("outer");
  },
  false
);
inner.addEventListener(
  "click",
  function (e) {
    console.log("inner");
  },
  false
);

document.querySelector(".clicker").addEventListener(
  "click",
  function (e) {
    console.log(e);
    console.log((e.target.innerText = "clicked"));
    e.preventDefault();
    e.stopPropagation();
  },
  false
);

// event bubbling : false
// event capturing : true
// e.stopPropagation : stops the propagation from the target itself
// e.preventDefault() : prevents the default behaviour of the browser
// e.target : gives the element/ events being targetted
// e.shiftKey : captures the event of shiftKey being pressed
// {once:true} : capture the event only once
