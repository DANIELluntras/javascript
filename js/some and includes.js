const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements)
//equaliti
console.log(movements.includes(-130))
// condition
console.log(movements.some(move => move=== -130))
const dnaiel =   movements.some(mov=>mov>1500)
console.log(dnaiel)