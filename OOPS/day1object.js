// //Object literal

// let milind = {
//     firstName: "milind",
//     lastName: "zurmure",
//     age: 25,
//     rollNo: 32,
//     skill: "js"
// }

// //add
// milind.language = "Marathi"
// console.log(milind)


// //update

// milind['rollNo'] = 50
// console.log(milind)

// // //retrive
// console.log(milind.lastName)

// delete milind.firstName
// console.log(milind)


// let vaibhav = {
//     firstName: "vaibhav",
//     lastName: "puri",
//     age: 12,
//     rollNumber: 44,
//     skills: "java"
// }

// let ram = {
//     firstName: "ram",
//     lastName: "katwe",
//     age: 27,
//     rollNumber: 66,
//     skills: "SQL"
// }


//template
//1. function constructor
//2. Es6 class  => class => 2015
//3. Object.create()

//function constructor

function Human(firstName, lastName, age, rollNumber, skills) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollNumber = rollNumber
    this.skills = skills
}

let milind = new Human("milind","zurmure",25,123,"js")
console.log(milind)

// let sham = new Human("sham", "kumar", 34, 67, "selenium")
// console.log(sham)

//Es6 class
//without constructor / with constructor

// class Person {
//     firstName = "mayuri"
//     lastName = "katwe"
//     age = "25"
//     rollNumber = 56
//     skills = "py"
// }
// let dinga = new Person()
// console.log(dinga)

// let pinga=new Person()
// console.log(pinga)


class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNumber = undefined
    skills = undefined
}

let sathish = new Person()
console.log(sathish)
sathish.firstName = "sathish"
sathish.lastName = "shete"
sathish.age = 45
sathish.rollNumber = 89
sathish.skills = 'java'
console.log(sathish)

//with consructor
class Student {
    constructor(firstName, lastName, age, rollNo, skill) {
        this.fn = firstName
        this.ln = lastName
        this.ag = age
        this.rNo = rollNo
        this.sk = skill
    }
}
let raviraj=new Student("raviraj",'dhale',31,45,"python")
console.log(raviraj)

let manjiri=new Student("manjiri","kshatriya",56,89,"math")
console.log(manjiri)










