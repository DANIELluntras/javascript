const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
    const interest = acc.movements.filter(mov => mov > 0)
    .filter((int, i, arr) => {
        console.log(arr);
        return int >= 1;
    })
    .map(deposit => deposit * acc.interestRate / 100).reduce((acc, int) => acc + int, 0);
labelSumInterest.textContent = `${interest}€`
