// Asynchronous
// It is a kind of architecture in which a block of code is runned simultaneously. So the execution of one task is independent of the other
// Eg. setTimeout()

console.log("Start");
setTimeout(() => {
  console.log(
    "I will run after 3 second but others don't wait for me to execute."
  );
}, 3000);
console.log("END");

// Synchronous
// It is a blocking architecture that execution of each operation depends on completing the one before it. Each task requires an answer before moving on to the next iteration
// Eg: prompt()
const prompt = require("prompt-sync")();
let a = prompt("say nanme");
let b = prompt("say age");
let c = prompt("say dog");
console.log("hahahah you are ", c);
