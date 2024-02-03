{/* <h1>Student List</h1>
    <ul>
        <li>Mayuri</li>
        <li>Vaibhav</li>
        <li>Sathish</li>
        <li>Jaya</li>
      <li>Ram</li>
    </ul>
    <input type="text">
    <button>Add Me</button> */}
//Ram


let ulist=document.querySelector('ul')
console.log(ulist)
let inputtext=document.querySelector('input')
console.log(inputtext)
let btn=document.querySelector('btn')
console.log(btn)

btn=addEventListener('click',function(){

let inputtext=input.value
let newli=document.createElement('li')
newli.textContent=inputtext
ulist.appendChild(newli)
input.value=""



})
