
// flat and flatMap
//
const number =[ [98, 76, -54, ],[43, -32, 12, -56, 78],[ 878, -4533, 2345, 7886]];
console.log(number.flat());
const arr = [[[1,2],3],[4,[5,6,[7,]],8,9]];
console.log(arr.flat())
const accouuntsMovements = accounts.map(acc=>acc.movements);
console.log(accouuntsMovements)

// first method

const allmov = accouuntsMovements.flat();
console.log(allmov)
const overreduce = allmov.reduce((scc,mov)=> scc+mov,0);
console.log(overreduce);

// c2 first method

const  overbalance  =  accounts.map(scc=>scc.movements).flat().reduce((scc,mov)=> scc+mov,0);
console.log(overbalance)

//flatMap
const  over  =  accounts
.flatmap(scc=>scc.movements)
.reduce((scc,mov)=> scc+mov,0);
console.log(over)
