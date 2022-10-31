// Inpoting module 
// addtocart('bread' , 'gaina');
// console.log(price , totalQuantity)
// import { addtocart  , totalPrice as price, totalQuantity } from "./shoppingCart.js";
// console.log('Export module');
// import * as ShoppingCart from'./shoppingCart.js';

// ShoppingCart.addtocart('bread',5 );



import add, { cart } from './shoppingCart.js';
add('pizza ', 2)
add('bread ', 3)
add('dog ', 24)

console.log(cart);


// console.log('Start fetching')
// const res = await  fetch('https://jsonplaceholder.typicode.com/posts')

// const data  = await res.json()
// console.log(data)
// console.log('something')

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await res.json()
    console.log(data)
    return { title: data.at(-1).title, text: data.at(-1).body }
}
const lastPost = getLastPost();
console.log(lastPost);
//not very clean
lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2)






