class Account {
    local = navigator.language;





    // 02 Privat fields
    #movements = [];

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
        return this.#movements;
    }

    deposit(val) {
          this.#movements.push(val);
          return this;
      }

    withdraw(val) {
        this.deposit(-val);
          return this;
    }

    _approveLoad(val) {
        return true;
    }

    requestLoad(val) {
        if (this._approveLoad(val)) {
            this.deposit(val);
            console.log(`load approved`);
            return this;
        }
      }

    static helper() {
        console.log('helper')
    }




    //4) private methods 
    _approveLoad(val) {
        return true;
    }







}







    // contruim noi persoane
const acc1 = new Account('Daniel', 'lei', 1111);
console.log(acc1);
// acc1.#movements.push(250);
// acc1.#movements.push(-140);
console.log(acc1.getMovements());
acc1.deposit(350);
acc1.withdraw(134);
acc1.requestLoad(1);

console.log(acc1);
console.log(acc1._approveLoad(100));

Account.helper()

// —225 - change method
acc1.deposit(300).deposit(500).withdraw(35).
    requestLoad(25000).withdraw(4000);

console.log(acc1.getMovements())