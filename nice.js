const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const calcDisplaySummar = function(movements) {

    //in
    const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc = mov, 0)
    labelSumIn.textContent = `${incomes}€`


    //output  
    const out = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
    labelSumOut.textContent = `${out}€`
    console.log(out)
}
calcDisplaySummar(account1.movements);