// let number = [123,123,12423,54,423]
// console.log(number)


// for(let i=0; i<number.length; i++){
//     console.log(i)
// }

// for ( let num of number){
//     console.log(num)
// }
// let object = {
//     name : 'rohan',
//     roll : 123
// }
// // console.log(object['name'])
// for(let items in object){
//     console.log(items + object[items])
// }
// // for...in loop prints the key of the value
// // for...of loop is used for iterating through itrables items only
// const prompt = require('prompt-sync')()


// console.log("Helelo ", prompt())

const prompt = require('prompt-sync')()


// let foodMenu = ["Chips","Soda","Candy Bar","Water","Cookies","Fruit Snacks","Popcorn","Pretzels","Trail Mix", "Gum","Chocolate","Nuts Mix","Energy Drink","Fruit Juice","Protein Bar","Iced Coffee","Muffin"]

// let price = [150,100,125,175,175,150,125,125,200,75,150,225,250,175,200,250,175]

// let balance = parseInt(prompt("Enter balance : "))

// console.log(price[0])
// console.log(foodMenu[1])
// console.log(foodMenu.length)

// for(let i = 0 ; i <foodMenu.length;i++){
//     console.log(price[i] + 1 + typeof price[i] + foodMenu[i] + balance)
// }
// for(let i = 1 ; i <foodMenu.length;i++){
//     if(balance > price[i]){
//         console.log(foodMenu[i] + ' = ' + price[i])
//     }
// }

// let newItem = []
// for(i in foodMenu){
//     if(balance > price[i]){
        
//     }
// }
// console.log(newItem)
// let choice = Number.parseInt(prompt("Enter the item number you want a purchase Sir : "))

// for(let i in newItem){
//     if(choice == i){
//         console.log(`You choosed ${newItem[i]} `)
//         console.log(`It Costs ${price[i]} `)
//         console.log(`Take your return ${Number.parseInt(balance - price[i])}`)
//     }
// }

// let laptops = ["dell","Acer","Lenevo","asus","Zenbook","mac"]

// laptops[6]= "honda"  //arryas are mutable
// console.log(laptops.length)
// console.log(laptops)

// console.log(typeof laptops) //object

// //converting an array to string

// let newArr = laptops.toString()
// console.log(newArr)
// console.log(typeof newArr)

// //joining the elements of the string

// let joined = laptops.join("_")
// console.log(joined)


// pop method


// // let poped = laptops.pop()
// // console.log(poped)
// // laptops.push("hello")
// console.log(laptops);
// console.log("Enter 4 brands name: ")
// for(let i = 1; i<5 ; i++){
//     let user = prompt(`${i}: `);
//     laptops.push(user)
// }
// console.log(laptops)

// let shifted = laptops.shift()
// console.log(shifted)

// console.log(laptops)
// let unshifted = laptops.unshift("hello")
// console.log(unshifted)
// console.log(laptops)



// num.sort((x,y) => y-x)
// console.log(num)
// let d = delete num[2]
// console.log(d)
// console.log(num)
// console.log(num.length)

// let newArray = laptops.concat(num)
// console.log(newArray)

// laptops.splice(0,2,"rohan","bandana")
// console.log(laptops)

// laptops.slice(1,3)
// console.log(laptops)

// laptops.reverse()
// console.log(laptops)

// let laptops = ["dell","Acer","Lenevo","asus","Zenbook","mac"]
// laptops.forEach(element => {
//     console.log(element)
// });

// for(let i =0 ;i<laptops.length;i++){
//     console.log(laptops[i])
// }

// let newNum = [];
// let num = [12,542,53,24,2,54,112]
// for(let i=0;i<num.length ;i++){
//     if(num[i]>100){
//         newNum.push(num[i])
//     }
// }
// console.log(newNum)

let foodMenu = ["Chips","Soda","Candy Bar","Water","Cookies","Fruit Snacks","Popcorn","Pretzels","Trail Mix", "Gum","Chocolate","Nuts Mix","Energy Drink","Fruit Juice","Protein Bar","Iced Coffee","Muffin"]
let price = [150,100,125,175,175,150,125,125,200,75,150,225,250,175,200,250,175]

let newPrice =[]
let newFood = []
for(let i=0;i<price.length ;i++){
    if(price[i]>=100){
        newPrice.push(price[i])
        newFood.push(foodMenu[i])
    }
}
console.log(newPrice)
console.log(newFood)