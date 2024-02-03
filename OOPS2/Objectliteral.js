// object literal

let shivansh = {
    firstName:"shivansh",
    lastName:"zurmure",
    age:4,
    rollNo:4
}

let milind = {
    firstName:"milind",
    lastName:"zurmure",
    age:30,
    rollNo:77
}

// 1 object ------> 4 lines 
// 100 object ------> 400 lines 
// template ------> object

// user defined data type 

// program 2
// comment
// class Person {
//     firstName
//     lastName
//     age 
//     rollNo

// }

// let shivash1 = new Person()
// console.log(shivansh1)
// shivash1.firstName = "shivash1"
// shivash1.lastName = "zurmures"
// shivash1.age = 22
// shivash1.rollNo = 44
// console.log(shivash1)

// // retrive  // dot notation and bracket notation
// console.log(shivash1.firstName)
// console.log(shivash1['firstName'])
// // add   // dot notation and bracket notation
// shivash1.language = "Marathi"
// shivash1['city'] = "Pune"
// // update  // dot notation and bracket notation
// shivash1['city'] = "nagpur"
// shivash1.language = "Hindi"
// //delete  // dot notation and bracket notation
// delete shivash1.city
// delete shivash1['city']

// Program 2

class PersonB {
    // properties 
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rollNo
    }
    // method
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let shivanshB = new PersonB("shivanshB","zurmureB",3,88)
console.log(shivanshB)
shivanshB.city = "pune"
shivanshB.displayName()

// set and get method

class PersonC{
    // properties value - set
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }

    // properties values - get
    getAge(){
        console.log(this.age)
    }

    getRollNo(){
        console.log(this.rollNo)
    }

    getFirstName(){
        console.log(this.firstName)
    }

    getLastName(){
        console.log(this.lastName)
    }

}

let shivanshC = new PersonC()
console.log(shivanshC)

shivanshC.setAge(13)
shivanshC.setFirstName("milind")
shivanshC.setLastName("zurmure")
shivanshC.setRollNo(23)
console.log(shivanshC)

shivanshC.getAge()
shivanshC.getFirstName()
shivanshC.getLastName()
shivanshC.getRollNo()

// program 4


let info = {
    fullName:'milind',
    lastName:'zurmure'
}
info.city = "nagpur"


// set and get


class PersonD {

    set firstN(fn){
        this.firstName = fn
    }
    get firstN(){
        return this.firstName
    }


    set lastN(ln){
        this.lastName = ln
    }
    get lastN(){
      return this.lastName 
    }

    set Age(ag){
        this.age = ag
    }
    get Age(){
       return this.age
    }
    set RollN(rn){
        this.rollNo = rn
    }
    get RollN(){
        return this.rollNo
    }

}

let shivanshD = new PersonD()

shivanshD.Age = 12
shivanshD.lastN = "zurmure"
shivanshD.firstN = "milind"
shivanshD.RollN = 77

console.log(shivanshD)

console.log(shivanshD.Age)
console.log(shivanshD.lastN)
console.log(shivanshD.firstN)
console.log(shivanshD.RollN)