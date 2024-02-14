

const prompt = require('prompt-sync')()
// function my_func(){
//     console.log("Hellop")
// }
// my_func()

// function yourName(name){
//     console.log("Hello"+ name)
// }
// let name = prompt("Enter your name ")
// yourName(name)


// function addNumber(a,b){
//     console.log(a+b)
// }

// addNumber(12,123)
// addNumber(12325,122343)
// addNumber(12342,234)
// addNumber(15322,14223)

// let isAdmin = 'rohan'
// let yourName = prompt("Enter your name : ")

// function check(){
//     console.log("Welcome to the admin page");
//     console.log("Your Flag is : SUCCESSFULL_PERSON")
// }

// if(yourName == isAdmin){
//     check();
// }
// else{
//     console.log("Permission denied")
//     console.log("this page is only visible to admin")
// }

// function sum(a,b){
//     return a+b   // == 12 + 12 = 24
// }

// let num1 = parseFloat(prompt("Enter num1 : "))
// let num2 = parseFloat(prompt("Enter num2 : "))

// let result = sum(num1,num2);
// console.log(result)

// let x = function(num) {return num * num}
// console.log(x(4))


// function x2(num){
//     return num * num 
// }
// console.log(x2(4))

// let a = 123

// function num(){
//     a = 'hello'
// }
// console.log(a)

// num()
// console.log(a)

// function recurse(number){
//     console.log(number)
//     const newNumber = number - 1;
//     if(newNumber > 0 ){
//         recurse(newNumber)
//     }
// }
// recurse(5)

// function product(num1, num2){
//     let result = num1 * num2
//     console.log(`${num1} * ${num2} = ${result}`)

//     const newNum = num2 + 1;
//     if(newNum > 0 && newNum < 11){
//         product(num1, newNum)
//     }
// }
// product(5,1)


// let value = 5
// let fact = 1;
// for(let i = 1 ; i <=value ; i++){
//     fact *= i
// }
// console.log(fact)



// function factorial(number){
//     if(number == 0 ){
//         return 1;
//     }
//     else{
//         return number * factorial(number - 1)
//     }
// }
// const num = 5

// if(num>0){
//     let result = factorial(num)
//     console.log(result)
// }






// function isPrime(number, divisor = 2){

//     if(number ==  divisor){
//         return true
//     }
//     if(number <= 2){
//         return true
//     }
//     if(divisor>Math.sqrt(number)){
//         return true
//     }
//     if(number%divisor===0){
//         return false
//     }
//     return isPrime(number, divisor+1)
// }
// const  numberToCheck = parseInt(prompt("Enter a number : "))
// if(isPrime(numberToCheck)){
//     console.log("The number is prime")
// } else{
//     console.log("the number is not")
// }
