
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const owners= ['daniel','luntras','abner','fineas','paul'];
console.log(owners.sort());
console.log(owners)
//numbers la numere ii 123456789 dar numa primele 

console.log(...movements);
console.log(...movements.sort())



// if (a>b) return 1; (switch order)
// if(a<b)return -1;(keep order)
// ascending
movements.sort((a,b)=>{
if (a>b) return 1; 
if(b>a)return -1;
})
console.log(...movements)

movements.sort((a,b)=>{
    if (a>b) return -1; 
    if(b>a)return 1;
    })
    console.log(...movements)

{/* sort  */}
    movements.sort((a,b)=>{a-b})
    console.log(...movements)
    movements.sort((a,b)=>{b-a})
    console.log(...movements)