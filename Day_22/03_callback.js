// const loadScript = (source, callBack) => {
//   let newScript = document.createElement("script");
//   newScript.src = source;
//   document.body.appendChild(newScript);
//   newScript.onload = function () {
//     console.log("Successfully done with " + callBack());
//   };
// };

// function hello() {
//   alert("hello");
// }

// loadScript("i the  as the source", hello);

// function sum(a, b) {
//   console.log(a + b);
// }

function loadFunc(a, b, callBack) {
  callBack(a, b);
}

loadFunc(12, 12, (a, b) => {
  console.log(a + b);
});
