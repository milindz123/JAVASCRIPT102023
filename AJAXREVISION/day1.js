//AJAX ==> Asynchronous javascript

//synchrous javascript => line by line 

function add1(){
    console.log('i am add one function')
}
function add2(){
    console.log('i am add two function')

}
//add2()
//add1()
//settimout

function add3(){
    setTimeout(function(){
        console.log('i am add3')
    },2000)
    }   
    function add4(){
        console.log('i am add4')
    }
//add3()
//add4()

// synch ==> Asynch => synch
//dependancy
// Multiple user  => get id => user Info

// function getUser(){
//     setTimeout(function(){
//         console.log("Multiple user created")
//     },4000)
//     setTimeout(function(){
//         console.log('Get id')
//     },3000)
//     setTimeout(function () {
//               console.log('render User info')
//           }, 2000)
// }
// getUser()

//render user info
//get id
//multiple user create

//asynch => sych ==> call Back hell ==> promise 

//promise => Es6 js
function getUSer() {
    setTimeout(function () {
        console.log("multiple user created")

        setTimeout(function () {
            console.log("get id")

            setTimeout(function () {
                console.log('get user info')
            }, 1000)
        }, 2000)
    }, 3000)
}

getUSer()

//reused
//tightly couple

//promises => Es6 feature




