//object

// let Student = {
//     firstname: "Milind",
//     lastname: "Zurmure",
//     age: 45,
//     rollNumber: 13,
//     skills: ["Java","python"]

// }
 //console.log(Student.firstname)
// console.log(student.lastname)
// console.log(student.rollNumber)
//console.log(Student.skills[1])
//add
//Student["skills"].unshift("typescript")
//console.log(Student)
//   Student['city'] = "Nagpur"
//  console.log(Student)

// // //update
// Student.city = "nashik"
// console.log(Student)

//Error

// // //delete
//delete Student.city
 //delete Student['lastname']
 //console.log(Student)

//  let car = {
//     color: "white",
//     model: "SUV",
//     numberPlate: 12345,
//     color: "red"
// }

//  console.log(car)


let student1 = {
    firstName: "Mayuri",
    lastName: "katwe",
    rollNumber: 34,
    skills: ["java", "python", "cypress"],
    isDoingJob: false
}

// //1 way
// // for in
// //values
// //objectName.key => value
// //objectName[key]=> value


// for (let key in student1) {
//     console.log(student1[key])//values
// }

// //keys

// for(let key in student1){
//     console.log(key)
// }

// //key , value

// for(let key in student1){
//     console.log(key, student1[key])
// }


//======================================================================

let student = {
    firstName: "Mayuri",
    lastName: "katwe",
    rollNumber: 34,
    skills: ["java", "python", "cypress"],
    isDoingJob: false
}

//print keys

//for of

// for (let key of Object.keys(student)) {
//     console.log(key)
// }

// //values

// for (let val of Object.values(student)) {
//     console.log(val)
// }

// //key value

for (let [k, v] of Object.entries(student)) {
    console.log(k, v)
}



