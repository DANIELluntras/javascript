// Inpoting module 
// addtocart('bread' , 'gaina');
// console.log(price , totalQuantity)
// import { addtocart  , totalPrice as price, totalQuantity } from "./shoppingCart.js";
console.log('Export module');
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addtocart('bread', 5);



import add, { cart } from './shoppingCart.js';
add('pizza ', 2)
add('bread ', 3)
add('dog ', 24)
