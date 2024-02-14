console.log("Hello World");

// document.getElementsByTagName("li")[0].style.color = "red";
// document.getElementsByTagName("li")[1].style.color = "green";

let a = document.firstElementChild.firstElementChild;

document.getElementsByTagName("li")[0].style.color = "red";
document.getElementsByTagName("li")[4].style.color = "green";

Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});
document.getElementsByTagName("ul")[0].style.background = "green";
