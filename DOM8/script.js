// create ul, input text and button

let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input[type="text"]')
let addMeBtn = document.querySelector('#admebtn')

// let upbtn=document.querySelector('.Up')
// console.log(upbtn)

//print
console.log(ulList)
console.log(inputBox)
console.log(addMeBtn)


// //Step 1


// for the action for button, call back function

addMeBtn.addEventListener('click', function () {
    let inputText = inputBox.value //Grapes
    let newLiEle = document.createElement('li') //<li></li>
    newLiEle.textContent = inputText //<li>Grapes</li>
    //step 3
    createButton(newLiEle)
    ulList.appendChild(newLiEle)
    inputBox.value = ""
})

//step 4
ulList.addEventListener('click', function (event) {
    //console.log(event.target.tagname)

    if (event.target.tagname = "BUTTON") {
        if (event.target.className == "Remove") {
            let liEle = event.target.parentElement
            let ulEle = liEle.parentElement
            ulEle.removeChild(liEle)
        }
        else if (event.target.className == "Up") {
            let liEle = event.target.parentElement
            let prevli = liEle.previousElementSibling
            let ulEle = liEle.parentElement
            if (prevli) {
                ulEle.insertBefore(liEle, prevli)
            }
            else if (event.target.className == "Down") {
                let liEle = event.target.parentElement
                let nextLi = liEle.nextElementSibling
                let ulEle = liEle.parentElement
                if (nextLi) {
                    ulEle.insertBefore(nextLi, liEle)
                }
            }
        }


    }
})

// //Step 2
function createButton(newLi) {
    // <button class="Remove">remove</button>
    // <button class="Up">up</button>
    // <button class="Down">down</button>

    let removeBtn = document.createElement('button') //<button></button>
    removeBtn.textContent = "remove" //<button>remove</button>
    removeBtn.className = "Remove" //<button class="Remove">remove</button>
    newLi.appendChild(removeBtn)

    let upbutton = document.createElement('button')
    upbutton.textContent = "up"
    upbutton.className = "Up"
    newLi.appendChild(upbutton)

    let downbutton = document.createElement('button')
    downbutton.textContent = "down"
    downbutton.className = "Down"
    newLi.appendChild(downbutton)

}