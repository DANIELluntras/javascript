const display = function(movements) {
    containerMovements.innerHTML = 'DANIEL LUNTARS';
    // .TESTcONTENT =0

    movements.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'


        const html = `
<div class="movements__row">
<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

<div class="movements__value">${mov}</div>
</div>

`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    })
}
display(account1.movements);