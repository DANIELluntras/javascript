const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const balance = movements.reduce((acc, cur, ) => acc + cur




    , 0)
console.log(balance);


let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2)

const max = movements.reduce((acc, mov) => {
        if (acc > mov)
            return acc;
        else
            return mov
    },
    movements[0]);
console.log(max)