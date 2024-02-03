//Map

//Object
//Array
//String
//Number
//Undefined
//Null
//NaN
//Boolean
//Class


// let student = {
//     firstName: "Milind",
//     lastName: "Zurmure",
//     Family: {
//         Father: "Ramesh",
//         Sibling: 1

//     },
//     1000: true,
//     true: ["java", "Js", "Py"],
//     rollNumber: 500,
//     age: undefined

// }

// for (let key in student){
//     console.log(typeof(key))
// }


//Object => key value
//string => any datatype

//MAP==> key value
//any datatype ==> any datatype

let myMap = new Map()
console.log(myMap)

//1.Set()==> add property
let val=[1,2,3]
let val2={a:20,b:30}
myMap.set(val,"rollNumber")
myMap.set(val,"Object")

myMap.set(true,"isMarried")
console.log(myMap)


//get() key==>retrive

let a=myMap.get(val)
console.log(a)
console.log(myMap.get(true))

//has(key)
console.log(myMap.has(true))
console.log(myMap.has("rollNumber"))

//delet() => boolean
console.log(myMap.delete(val))
console.log(myMap)

//clear()
myMap.clear()
console.log(myMap)


let myMap2=new Map([[true,"isDoingJob"],["firstName","mayuri"],[200,"rollNo"]])
console.log(myMap2)

















