console.log("hello i am getting import")
export let a=10;
export let names=['milind','shivansh','nayana','shiv']
export let cart=[];
export let addToCart = function(prod,quantity){
    let obj  = {}
    obj[prod]=quantity
    cart.push(obj)
    console.log('${quantity},${prod}')
}