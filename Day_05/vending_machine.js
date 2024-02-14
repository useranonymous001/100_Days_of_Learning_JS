const prompt = require("prompt-sync")();

const vendingMachineItems = {
  Chips: 150,
  Soda: 100,
  "Candy Bar": 125,
  Water: 175,
  Cookies: 60,
  "Fruit Snacks": 150,
  Popcorn: 125,
  Pretzels: 125,
  "Trail Mix": 200,
  Gum: 75,
  Chocolate: 150,
  "Nuts Mix": 225,
  "Energy Drink": 250,
  "Fruit Juice": 175,
  "Protein Bar": 200,
  "Iced Coffee": 250,
  Muffin: 175,
};
let foodMenu = [
  "Chips",
  "Soda",
  "Candy Bar",
  "Water",
  "Cookies",
  "Fruit Snacks",
  "Popcorn",
  "Pretzels",
  "Trail Mix",
  "Gum",
  "Chocolate",
  "Nuts Mix",
  "Energy Drink",
  "Fruit Juice",
  "Protein Bar",
  "Iced Coffee",
  "Muffin",
];

let price = [
  150, 100, 125, 175, 60, 150, 125, 125, 200, 75, 150, 225, 250, 175, 200, 250,
  175,
];

let newFoodMenu = [];
let newPrice = [];

console.log(
  "\n================== Welcome to Roban's Vending Machine ========================"
);
console.log(
  "Here, you can find the different snacks at affordable price starting at Rs.75: "
);
console.log(
  "==============================================================================\n"
);

// for (let items in foodMenu) {
//   console.log(foodMenu[items] + "\t\t = " + price[items]);
// }
console.table(vendingMachineItems);

console.log("\n=======================================================");
let userBalance = Number.parseInt(prompt("Enter the amount you have Sir : "));
console.log("=======================================================");
if (userBalance >= 50) {
  for (let i = 0; i < price.length; i++) {
    if (price[i] <= userBalance) {
      newFoodMenu.push(foodMenu[i]);
      newPrice.push(price[i]);
    }
  }
  console.log(
    "\n==================== Items you can Buy are =================================== \n"
  );
  for (let snacks = 0; snacks < newFoodMenu.length; snacks++) {
    console.log(`${snacks}. ${newFoodMenu[snacks]}    ==> ${newPrice[snacks]}`);
  }
} else {
  console.log("\nInsufficient Balance !!");
}

if (userBalance >= 50) {
  userChoice = Number.parseInt(
    prompt("\nEnter the snacks number as indicated(Eg.0,1..): ")
  );
}

console.log("\n");
for (let j = 0; j < newFoodMenu.length; j++) {
  if (userChoice == j) {
    console.log(
      "|-------------------------------------------------------------|"
    );
    console.log(`|Your purchase ${newFoodMenu[j]} is Successfull     `);
    console.log(`|Take Your return ${userBalance - newPrice[j]}      `);
    console.log(`|Thanks for the Purchase                            `);
    console.log(
      "|-------------------------------------------------------------|"
    );
  }
}
console.log("\n");
