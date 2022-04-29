const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsda = movements.map(mov => mov * euroTOusde

);
console.log(movementsda)
console.log(movements)

const movementsusdfor = []
for (const mov of movements) movementsusdfor.push(mov * euroTOusde)
console.log(movementsusdfor)

const my = movements.map((mov, i, arr) =>

    `movement ${i + 1}:YOu ${mov > 0 ? 'deposited'
        : 'withdrew'} ${Math.abs(mov)}`

)
console.log(my)