
const prompt = require('prompt-sync')()


// let user_option = prompt("Enter the operation you want to perform :");

// let num1 = parseFloat(prompt("Enter first number: "))
//     let num2 = parseFloat(prompt("Enter Second number: "))
// switch(user_option){
    
//     case "add":
//         result = num1+num2;
//         console.log(`${num1} + ${num2} = ${result}`)
//         break
//     case "sub":
//         result = num1+num2;
//         console.log(`${num1} - ${num2} = ${result}`)
//         break
//     case "div":
//         result = num1+num2;
//         console.log(`${num1} / ${num2} = ${result}`)
//         break
//     case "mul":
//         result = num1+num2;
//         console.log(`${num1} * ${num2} = ${result}`)
//         break
//     default:
//         console.log("Enter definite operator")
//         break

// }

let fruit = 'apple'
switch(fruit){
    case 'apple':
    case 'pineapple':
        console.log("It is a fruit")
        break
    default:
        console.log("Not a fruit")
        break
}
