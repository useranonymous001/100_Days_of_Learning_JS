// alert(" i have enteered inside the browser an i am the boss here !! ");

let database = {
  username: "rohan",
  password: "rohan123",
};

// for (let data in database) {
//   console.log(database[data]);
// }

let username = prompt("Enter your name: ");
let password = prompt("Enter password");

let checked = 0;
if (username == database.username && password == database.password) {
  document.querySelector(".home").innerHTML =
    "<h1> Successfully logged in</h1>";
  location.href = "https://securebyteacademy.blogspot.com";

  checked = 1;
} else {
  document.querySelector(".home").innerHTML = "<h1> Incorrect credential</h1>";
  console.error("Incorrect credentials");
}

if (checked == 0) {
  let userCheck = confirm("Verify you are not a robot");
}
