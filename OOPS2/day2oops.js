// program1 

// class Student {
//     constructor(fn,ln,rollNo){
//         this.firstName = fn 
//         this.lastName  = ln 
//         this.rollNo = rollNo
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher {
//     constructor(fn,ln,rollNo,sl){
//         this.firstName = fn 
//         this.lastName  = ln 
//         this.rollNo = rollNo
//         this.salary = sl
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//                  console.log(this.salary)
//            }
//          }

//      let  shivansh = new Teacher("shivansh","zurmure",4,77)
//     console.log(shivansh.firstName)
//     console.log(shivansh.lastName)
//     console.log(shivansh.rollNo)
//      console.log(shivansh.salary)

//     shivansh.displaySalary()
//     shivansh.displayName()

// let shiv = new Student("milind","zurmure",8)
// console.log(shiv.firstName)
// console.log(shiv.lastName)
// console.log(shiv.rollNo)
// shiv.displayName()


// program 2
// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharNo = adharNo
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher extends Student{
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let milindSP = new Teacher("milindSP","zurmureSP",444)
// console.log(milindSP.firstName)
// console.log(milindSP.lastName)
// console.log(milindSP.adharNo)
// console.log(milindSP.salary)
// milindSP.displayName()
// milindSP.displaySalary()


// program 3

// class StudentB{

//     constructor(fn,ln,adharNo){
//         this.firstName = fn
//         this.lastName = ln 
//         this.adharNo = adharNo
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// class TeacherB extends StudentB{
//     constructor(fn,ln,adharNo,salary){
//         super(fn,ln,adharNo)
//         this.salary = salary
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }

// }
// let milindIP = new TeacherB("milindIP","zurmureIP",123,789456)
// console.log(milindIP.firstName)
// console.log(milindIP.lastName)
// console.log(milindIP.adharNo)
// console.log(milindIP.salary)
// milindIP.displayName()
// milindIP.displaySalary()



// program 4
// class GrandFather{
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln 
//     }
//     displayGName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Father extends GrandFather {
//     constructor(fn,ln,ffn){
//         super(fn,ln)
//         this.fname = ffn
//     }
//     displayFName(){
//         console.log(this.fname + this.lastName)
//     }
// }
// class Son extends Father {
//     constructor(fn,ln,ffn,ssn){
//         super(fn,ln,ffn)
//         this.sname = ssn
//     }
//     displaySName(){
//         console.log(this.sname  + this.lastName)
//     }
// }
// let  shivIS = new Son("nagoba","zurmure","ramesh","milind")
// console.log(shivIS.firstName)
// console.log(shivIS.lastName)
// console.log(shivIS.fname)
// console.log(shivIS.sname)

// shivIS.displayFName()
// shivIS.displaySName()
// shivIS.displayGName()


// program 5


class Mother {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayMname() {
        console.log(this.firstName + this.lastName)
    }

}

class Son extends Mother {
    constructor(fn, ln, sn) {
        super(fn, ln)
        this.sname = sn
    }

    displaySName(){
        console.log(this.sname + this.lastName)
    }

}

class Daughter extends Mother {
    constructor(fn, ln, dn) {
        super(fn, ln)
        this.dname = dn
    }

    displayDName(){
        console.log(this.dname + this.lastName)
    }

}


let milinsS = new Son("vijaya","zurmure","milind")
let shivaniS = new Daughter("vijaya","zurmure","shivani")

console.log(milinsS.firstName)
console.log(milinsS.lastName)
console.log(milinsS.sname)

milinsS.displayMname()
milinsS.displaySName()

console.log(shivaniS.firstName)
console.log(shivaniS.lastName)
console.log(shivaniS.dname)

milinsS.displayMname()
//milinsS.displayDName()




