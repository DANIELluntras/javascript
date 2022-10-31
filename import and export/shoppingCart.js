console.log('Import modal');
//blocking code
console.log('start');
const shoppingCart = 20;
export const cart = [];
export const addtocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity };

export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}
//export
// export.addtocart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} order from Supplimer (shipping cost is ${shoppingCart}`);

// };

//import
const { addtocart } = require('./shoppingCart.js');

