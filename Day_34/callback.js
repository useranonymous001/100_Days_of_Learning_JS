const prompt = require("prompt-sync")();
// console.log("first");

// console.log("seconf");

// // setTimeout(() => {
// //   console.log("I was late due to setTimeout called me on the way.");
// // }, 3000);

// i = 0;
// setInterval(() => {
//   i += 1;
//   console.log(i);
// }, 1000);

// console.log("fourth");

// callback function
// passing one function as an argument to another function

// eg for accessing the array inside the object.
// console.log(ingridients.fruits[2]);

let ingridients = {
  fruits: ["mango", "apple", "strawberry", "oranges"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

const order = (fruitName, callProduction, callServe) => {
  setTimeout(() => {
    console.log(`${ingridients.fruits[fruitName]} is selected`);
    callProduction();
  }, 1000);
};

const production = () => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("The fruits are chopped successfully");

      setTimeout(() => {
        console.log(
          `${ingridients.liquid[0]} and ${ingridients.liquid[1]} was added successfully`
        );
        setTimeout(() => {
          console.log("The machine has been started ");
          let container = prompt("Choose container: ");
          for (items of ingridients.holder) {
            if (container == items) {
              setTimeout(() => {
                console.log(`${container} was selected`);

                let topping = prompt("peanut or chocolate: ");
                for (cream of ingridients.toppings) {
                  if (cream == topping) {
                    setTimeout(() => {
                      console.log(`${topping} was selected`);

                      // serving the icecream
                      setTimeout(() => {
                        callServe();
                      }, 2000);
                    }, 3000);
                  }
                }
              }, 2000);
            }
          }
        }, 1000);
      }, 1000);
    }, 2000);

    console.log("The production has started");
  }, 0);
};

const serve = () => {
  console.log("Your ice cream is ready sir");
};
// choosing the flavor
let flavor = prompt("Enterr your flavor : ");

for (i = 0; i < ingridients.fruits.length; i++) {
  if (ingridients.fruits[i] == flavor) {
    order(i, production, serve);
  }
}
