class Account {
    local = navigator.language;

    _movements = [];






    constructor(owner, moneda, pin) {
        this.owner = owner;
        this.moneda = moneda;
          this._pin = pin;
        //procted proprety
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(
            `Thancks for opening an account ${owner} and i change my ${pin}`
        );
    }

      //public interface
    getMovements() {
        return this._movements;
    }

    deposit(val) {
          this._movements.push(val);
      }

    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoad(val) {
        return true;
    }

    requestLoad(val) {
          if (this._approveLoad(val)) {
              this.deposit(val);
              console.log(`load approved`);
        }
    }
}
    // contruim noi persoane
const acc1 = new Account('Daniel', 'lei', 1111);
console.log(acc1);
acc1._movements.push(250);
acc1._movements.push(-140);
console.log(acc1.getMovements());
acc1.deposit(350);
acc1.withdraw(134);
acc1.requestLoad(1);

console.log(acc1);
