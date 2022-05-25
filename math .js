const randomint= (min,max)=>Math.trunc(Math.random()*(max - min)+1)+min;
console.log(randomint(10,20));

console.log(Math.sqrt(25));
console.log(25 ** 1/2)
console.log(25 ** 1/3)
// console.log()

console.log('-----max----this is the maximum number in a method');
console.log(Math.max(2,3,4,5,67,87,5,4,3,4,5,5,6,6));
console.log(Math.max(2,3,4,5,67,'87',5,4,3,4,5,5,6,6));
console.log(Math.max(2,3,4,5,67,'87px',5,4,3,4,5,5,6,6));
console.log('----min----this is the minim number in a method');
console.log(Math.min(3,4,5,67,'87',5,4,3,4,5,5,6,6));
console.log('----pi----');
console.log(Math.PI*Number.parseInt('10px')**2);
console.log(Math.trunc(Math.random()*10)+1);
const randomin= (min,max)=>Math.floor(Math.random()*(max - min)+1)+min;
console.log(randomint(10,20));
//rounding integers
console.log(Math.trunc(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.1));

console.log(Math.floor(23.5));
console.log(Math.floor('23.5'));

console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

///rouding decimals
console.log((2.7).toFixed(0))
console.log(+(2.723453).toFixed(2))



