//slice functions
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice([...arr]));
console.log(arr.slice());

//SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr)
arr.splice(1, 2)
console.log(arr);


//reverse
arr = ['d', 'a', 'n', 'i', 'e', 'l'];
const arr2 = ['l', 'u', 'n', 't', 'r', 'a', 's '];
console.log(arr2.reverse(arr));
console.log(arr2)

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2)
    //join
console.log(letters.join(' - '));