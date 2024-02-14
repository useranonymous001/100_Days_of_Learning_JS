// practicing for in loops 

const sample = {
    mouse : " animal ",
    google : "company"
}
console.log(sample["google"])

// using the same example

const random = {
    location : "Bhadrapur",
    food : "DallBhat ",
    brand : "Acer"
}
for(let i in random){
    // console.log(i[0])  // prints the first letter of each key
    console.log(i + " is " + random[i])
}

console.log("---------------------------------")

// Now lets learn For of loops 

let username = "Rohan";
// to iterate through each letter we use for of loops 
for(let j of username){
    console.log(j)
}
console.log("-----------------------------")

// Now usnin for loops 
// program to print the armstrong number


const prompt = require('prompt-sync')()

// let number = prompt("Enter number : ");
// for(let i = 1 ; i < number ; i++)
// {
//     let numStr = i.toString();
//     let numlen = numStr.length;
//     let sum = 0;

//     for(let j = 0 ;j<numlen ;j++)
//     {
//         sum += Math.pow(parseInt(numStr[j]),3);
//     }
//     if(sum === i)
//     {
//         console.log(i)
//     }

// }

// program to print a pattern

let row = prompt("Enter the number of row : ");

// let string = "";
// for(let i = 1; i <=row ; i++)
// {
//     for(let j = 0; j<i ; j++)
//     {
//         string +=  "*";
//     }
//     string += "\n"
// }
// console.log(string)

// lets reverse the triangle

let string_r = "";
for(let i = 1; i<=row ; i++)
{
    for(let j = 0 ; j < row-i ; j++)
    {
        string_r += "x"
    }
    string_r += "\n"
}
console.log(string_r)