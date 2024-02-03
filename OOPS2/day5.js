// Object literal 

let milind = {
    firstName: "milind",
    lastName: "zurmure",
    display: function(){
        console.log(this.firstName + this.lastName)
    }
}

let shivansh = {
    firstName: "shivash",
    lastName: "zurmuree",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

// function  constructor 
function person(fn,ln){
this.firstName=fn
this.lastName=ln
this.display=function(){
    console.log(this.firstName + this.lastName)
}
}
let nayana = new Person("nayana","darware")
let gudiya = new Person("gudiya","darwaree")

console.log(nayana)
console.log(gudiya)

// Everything in js is object 
// Object__proto__ == Parent.Proptype



console.log(sarika.__proto__ == Person.prototype)
Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.lanaguage ="marathi"

sarika.display()
poorva.display()
console.log(poorva.lanaguage)

console.log(poorva instanceof Person)
console.log(poorva.hasOwnProperty('firstName'))
console.log(poorva.hasOwnProperty('language'))

// let names = ["sarika","poorva"]
// console.log(Array.prototype == names.__proto__)
// console.log(names)

// Array.prototype.hello = function(){
//     console.log("hello chinmay")
// }













