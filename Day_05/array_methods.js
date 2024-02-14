

// let random = [123,'rohna','1234',true, 29, 912,13]

// -=-=-=-=-=-=-=-pop(method)-=-=-=-=-=-=-=-=-=-=-=-
// let result1 = random.pop()
// console.log(result1)
// console.log(random)
// console.log(random.length) // this actually changes the real array


// =-=-=-=-=-=-=-=push(method)-=-=-=-=--=-=--
// let random = [123,'rohna','1234',true, 29, 912,13]
// let result = random.push('rohan')
// console.log(result) // gives the length of new array created
// console.log(random) //creates an new array 

// -=--=-=-=-=-=-toString()-=-=-=-=-=-=-=-=

// let random = [123,'rohna','1234',true, 29, 912,13]
// let arrToString = random.toString()
// console.log(arrToString, typeof arrToString)


// --=-=-=-=-=-=-=--.join("param")-=-=-=-=-=-=-
// let random = [123,'rohna','1234',true, 29, 912,13]
// let result = random.join("__")
// console.log(result)

/// -=-=-=-=-=--shift(method)-=-=-=--=-=--=-=-=
// let random = [123,'rohna','1234',true, 29, 912,13]
// let result = random.shift()
// console.log(result) // prints the removed item
// console.log(random) // prints the new array


/// -=-=-=-=-=--unshift(method)-=-=-=--=-=--=-=-=
// let random = [123,'rohna','1234',true, 29, 912,13]
// let result = random.unshift("hello", "user") 
// console.log(result) // returns the length of the new array 
// console.log(random) // returns the new array created


// delete function

// let random = [123,'rohna','1234',true, 29, 912,13]
// console.log(random.length)
// delete random[1]
// console.log(random)

// splice function 
// ar.splice(index,deleteCount,items)

// let random = [123,'rohna','1234',true, 29, 912,13]
// let result = random.splice(1,3,"rohan","fuck")
// // random.splice(1,1,"rohan")
// console.log(random ,typeof result)

// -=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-==-=-=


// slice method 
// ar.slice(start,end)

// let random = [123,'rohna','1234',true, 29, 912,13]
// let result = random.slice(1,3)
// console.log(result, random)

// concat(method)

// let passwd = ['random','rohan123','pentester','john doe',111223314]
// let random = [123,'rohna','1234',true, 29, 912,13]

// let concatinated = passwd.concat(random)
// console.log(concatinated, concatinated.length)



// sort() method
// let random = [123,'rohna','1234',true, 29, 912,13]
// console.log(random.sort())

// let ascend = (a,b) => {
//     return a - b
// }
// let code = [1122,1234,5334,2345,4535,9898,1106,10111]
// code.sort(ascend)
// console.log(code)

// console.log(code.sort()) //sorts alphabetically



// reverse()

let num = [1,2,3,4,5,6,7,8]
num.reverse()
console.log(num)







