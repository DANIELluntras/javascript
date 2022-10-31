// // Inpoting module
// // addtocart('bread' , 'gaina');
// // console.log(price , totalQuantity)
// // import { addtocart  , totalPrice as price, totalQuantity } from "./shoppingCart.js";
// // console.log('Export module');
// // import * as ShoppingCart from'./shoppingCart.js';

// import shoppingCart from "./shoppingCart";

// // ShoppingCart.addtocart('bread',5 );

// import add, {cart} from './shoppingCart.js';
// add('pizza ',2)
// add('bread ',3)
// add('dog ',24)

// console.log(cart);

// // console.log('Start fetching')
// // const res = await  fetch('https://jsonplaceholder.typicode.com/posts')

// // const data  = await res.json()
// // console.log(data)
// // console.log('something')

// const getLastPost = async function(){
//     const res = await  fetch('https://jsonplaceholder.typicode.com/posts')

// const data  = await res.json()
// console.log(data)
// return{title:data.at(-1).title,text:data.at(-1).body}
// }
// const lastPost = getLastPost();
// console.log(lastPost);
// //not very clean
// lastPost.then(last => console.log(last));

// const  lastPost2 = await getLastPost();
// console.log(lastPost2)

// const ShoppingCart2 = (function () {
//     const cart = [];
//     const shipingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;
//     const addtocart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} added to cart - siping cost is ${shipingCost}`);
//     };
//     const orderStock = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} order from Supplimer`);
//     };
//     return {
//         addtocart,
//         totalPrice,
//         cart,
//         totalQuantity
//     }
// })();



// ShoppingCart2.addtocart('apple',4)

// ShoppingCart2.addtocart('Mere',45)
// ShoppingCart2.addtocart('Gaini',2)
// ShoppingCart2.addtocart('iepuri',3)
// ShoppingCart2.addtocart('bitcoin',34)
// console.log(ShoppingCart2)

//CommonJS Modules - 275
// //export
// export.addtocart  = function (product, quantity) {
//         cart.push({ product, quantity });
//            console.log(`${quantity} ${product} order from Supplimer (shipping cost is ${shoppingCart}`);
           
//         };

// //import
// const {addtocart} = require('./shoppingCart.js');

//- 276 - A Brief Introduction to the Command Line




