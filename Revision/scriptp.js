import {a,cart,addToCart} from './card.js'
console.log(a)
console.log(cart)
addToCart("Kitkat",5)
console.log(cart)


import * as Cart from './card.js'
console.log(Cart.a)
console.log(Cart.cart)
Cart.addToCart("kitkat",5)
console.log(Cart.cart)


import rrr from './card2.js'
rrr()

//importing a class
import q,{n} from './card2.js'
let q1 =new q("milind","zurmure")
q1.displayName()
console.log(n)