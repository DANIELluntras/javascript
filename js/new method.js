const account1 = {
    owner: 'daneil luntras',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'paulo luntras',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'git hub',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'the rock',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};



const createUsernames = function(accs) {
    accs.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');

    })



};
//stw

console.log(accounts)
createUsernames(accounts);