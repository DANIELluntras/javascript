console.log(23===23.0)


console.log(0.1+ 0.2===0.3);
//convcersion

console.log(Number('23'))
console.log(+'23');

//////////

console.log(...accounts)

//parasing

console.log(..."-----parseInt---")
console.log(Number.parseInt('30px',10));
console.log(Number.parseInt('e23',10));
console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

/// is not a number 
console.log(..."-----isNaN---")
console.log(Number.isNaN(20))
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23/0));
///checking if value is number

console.log(..."-----isFinite---")
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23/ 0));

console.log(..."-----isInteger---")
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23/0));
console.log(Number.isInteger(23*8));