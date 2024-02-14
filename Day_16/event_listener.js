document.body.style.background = "black";
document.body.style.color = "white";

// addEventListener and removeEventListener

// EXPLANATION :

let a = document.getElementById("touch");

// Here addEventListener(events, handler);

// handler is a function that is executed when event occurs

/* Eg: a.addEventLister('click',function(e){
    alert("i am clicked !!!")
})
*/

// In the above example, the event is 'click' and handler is a function that happens when something is clicked
// here, when the button is clicked, the handler handles the event and executes the statement it is assigned.
// In the function(e) the 'e' can be given any name, just t needs to be same for other handler too
// e in the function stores PointerEvents, you can check it by using console.log(e)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-CODE FOR PRACTICE: -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let choice = prompt("do you want to play: y/n ");

// let yes = function (e) {
//   alert("okey come on baby !! ");
// };
// let no = function (e) {
//   console.log(e);
//   alert("you bastard unromantic fellow !! ");
// };

// if (choice == "y") {
//   a.addEventListener("click", yes);
// } else if (choice == "n") {
//   a.addEventListener("click", no);
// } else {
//   a.removeEventListener("click", function (e) {
//     alert("Bhak behn le lowda!!");
//   });
// }
// if (choice == "y") {
//   a.addEventListener("click", function (e) {
//     alert("ahh ahh ahh !! ");
//   });
// } else if (choice == "n") {
//   a.addEventListener("click", function (e) {
//     alert("ahh yemete kuda saii !!");
//   });
// }
// // a.addEventListener("click", function (e) {
// //   alert("ahhh dont touch me ! ");
// // });
// else {
//   a.removeEventListener("click", function (e) {
//     alert("helo mann !!");
//   });
// }

// a.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(e.clientX);
//   console.log(e.clientY);
// });
