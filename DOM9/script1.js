
let multiEle=document.querySelectorAll(".Fruit")
 console.log(multiEle) //nodelist

 let clickmebt=document.querySelector('button')
clickmebt.addEventListener('click',function(){
    for(let i=0;i<multiEle.length; i++){
        console.log(multiEle)
        multiEle[i].style.color="red"
        
    }
})  