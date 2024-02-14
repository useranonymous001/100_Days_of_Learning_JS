
// let dataTypes = ["string", Number, null, BigInt, Symbol, undefined, Boolean]

// let value = 'rohan'
// let key = 'Name'

// // console.log(key +": "+ value)

// console.log(`His ${key} is ${value}`)
// console.log(typeof value)

// let large = 788738754738348n;
// let result = large + 1n;
// console.log(result)
// console.log(typeof large)

// let user1 = Symbol('Rohan')
// let user2 = Symbol('Rohan')
// console.log(user1)

// let a = 12
// let b = 25

// console.log(a&b)
// console.log(a|b)
// console.log(a^b)
// console.log(~a)
// console.log(~b)

// let c = 8
// let d= 2
// let e = -3

// let result1 = c << d;
// let result2 = d >> c;
// let result3 = c >>> e
// console.log(result1)
// console.log(result2)
// console.log(result3)

// let user = "rohan"
// let num = 23
// let num2 = 123
// result = num + num2 + user
// console.log(result)
// console.log(typeof result)

// let num = '2342'
// let actualNum= Number.parseInt(num)
// console.log(typeof actualNum)

// let num = Number('123e - 1')
// console.log(num)
// console.log(typeof num)

// let checked = undefined
// let sum = 1 + checked
// console.log(sum)

// let random;
// random = parseInt('123.4')
// let random2 = parseFloat('123.4')
// let random3 = +'2432342'
// let random4 = Math.floor('3423523')
// console.log(random)
// console.log(random2)
// console.log(random3)
// console.log(typeof random3)
// console.log(random4)
// console.log(typeof random4)

// let id = 23424
// let idString =  id.toString()
// console.log(idString)
// console.log(typeof idString)


// let num = parseInt(prompt("Enter a number : "))

// let sum= 0;

// while(num >= 0){
//     sum += num

//     num = parseInt(prompt("Entera number : "))
// }
// console.log(sum)

// for (let i = 0; i< 100 ; i++){
//     console.log(i)
//     if (i == -12){
//         continue
//     }
//     // if(i==10){
//     //     break
//     // }
// }

// for(let i = 1; i<=3; i++){

//     for(let j = 1; j <= 5 ; j++){
        // if(i==2){
        //     continue // it skips 2 and conitnues
        // }
//         console.log(`i = ${i} and j = ${j}`)
//     }
//     console.log("\n")

// }
const prompt = require('prompt-sync')()
let user_input = prompt("Entr your fav car: ");

switch(user_input){
        case "bugati":
                console.log("your are correct")
                break;
        case "ferrari":
                console.log("Sorry")
                break;
        default:
                console.log("not correct")
        
        }

        