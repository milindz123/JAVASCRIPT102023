// Oops 


// Encapsulation 
// Inheritance 
// Polymorphism

// program 1 // incorrect way

// class student {
//     constructor(fn, ln, adharNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adharNo
//     }
// }
// let milind = new student("milind", "zurmure", 77)
// console.log(milind)

// class Teacher {
//     constructor(fn, ln, adharNo, salary) {
//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adharNo
//         this.salary = salary
//     }
// }
// let milindT = new Teacher("milindt","zurmure",777,100000)
// console.log(milindT)


// //program 2
// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn
//         this.lastName = ln 
//         this.adharNo = adharNo
//     }

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 10000
// }

// let milindT = new Teacher("milindT","zurmureT",777)

// console.log(milindT.firstName)
// console.log(milindT.lastName)
// console.log(milindT.adharNo)
// console.log(milindT.salary)
// milindT.displayName()



// program 3


// class Student {
//     constructor(fn, ln, adharNo) {

//         this.firstName = fn
//         this.lastName = ln
//         this.adharNo = adharNo

//     }

//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Teacher extends Student {

//     constructor(fn, ln, adharNo, salary) {
//         super(fn, ln, adharNo)
//         this.salary = salary
//     }

//     displaySalary() {
//         console.log(this.salary)
//     }

// }

// let shiv = new Teacher("shiv", "zurmuree", 123, 123213123123)

// console.log(shiv.firstName)
// console.log(shiv.lastName)
// console.log(shiv.adharNo)
// console.log(shiv.salary)

// shiv.displayName()
// shiv.displaySalary()

// program 4
// single  interitance

// class GrandFather {
//     constructor(fn, ln) {
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayGName() {
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Father extends GrandFather {

//     constructor(fn, ln, ffn) {
//         super(fn, ln)
//         this.fname = ffn
//     }

//     displayFName() {
//         console.log(this.fname + this.lastName)
//     }

// }

// let madhav = new Father("madhav", "zurmureee", "ramesh")

// console.log(madhav.firstName)
// console.log(madhav.lastName)
// console.log(madhav.fname)

// madhav.displayFName()
// madhav.displayGName()


// program 5
// Multi-level inheritance

class GrandFatherB {

    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayGName() {
        console.log(this.firstName + this.lastName)
    }

}

class FatherB extends GrandFatherB {
    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.fname = ffn
    }

    displayFName() {
        console.log(this.fname + this.lastName)
    }
}

class SonB extends FatherB {
    constructor(fn, ln, ffn, ssn) {
        super(fn, ln, ffn)
        this.sname = ssn
    }
    displaySName() {
        console.log(this.sname + this.lastName)
    }

}

let milind = new SonB("nagoba","zurmurer","ramesh","milind")

milind.firstName
milind.lastName
milind.fname
milind.sname

milind.displayFName()
milind.displayGName()
milind.displaySName()

// herarchial inheritance 

// class Mother {  
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayMName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Son extends Mother {
//     constructor(fn,ln,sn){
//         super(fn,ln)
//         this.sname = sn
//     }

//     displaySName(){
//         console.log(this.sname + this.lastName)
//     }

// }

// class Daughter extends Mother {
    
//     constructor(fn,ln,dn){
//         super(fn,ln)
//         this.dname = dn
//     }

//     displayDName(){
//         console.log(this.dname + this.lastName)
//     }
// }

// let chinmaye = new Son("kanchan","deshpande","chinmay")
// let gauri   = new Daughter("kanchan","deshpande","gauri")


// chinmaye.firstName
// chinmaye.lastName
// chinmaye.sname

// chinmaye.displayMName()
// chinmaye.displaySName()


// gauri.firstName
// gauri.lastName
// gauri.dname

// gauri.displayMName()
// gauri.displayDName()





