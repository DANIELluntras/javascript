

//Another Class Example 

//aicia le declaram ca exista  ca parametri 
class Account {
    constructor(owner, moneda, pin) {
        this.owner = owner;
        this.moneda = moneda;
        this.pin = pin;
        this.movements = []
        this.locale = navigator.language

        console.log(`Thancks for opening an account ${owner} and i change my ${pin}`)
    }

    //public interface
    deposit(val) {
        this.movements.push(val)
    }
    withdraw(val) {
        this.deposit(-val)
    }

    approveLoad(val) {
        return true;
    }

    requestLoad(val) {
        if (this.approveLoad(val)) {
            this.deposit(val);
            console.log(`load approved`);
        }
    }
}
// contruim noi persoane 
const acc1 = new Account('Daniel', 'lei', 1111)
console.log(acc1)
// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(350);
acc1.withdraw(134);
acc1.requestLoad(1)

console.log(acc1)