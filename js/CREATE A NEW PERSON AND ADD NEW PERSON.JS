const Person = function (firstName, birthYear) {

    //instance properties
this.firstName = firstName;
this.birthYear = birthYear;

//Never to This 

this.calcAge = function(){
console.log(2037 - this.birthYear)
 }
};

const jonas = new Person('jonas',1991);
console.log(jonas)
console.log(jonas.firstName + ' ' + jonas.birthYear)

//1. New {} is created 
//2. function is called , this = {}
//3.{} linked to prototype
//4. function automatically return {}

const matilda  = new Person('MAtilda',2017);
const jack =  new Person('Jack',1975);
console.log(matilda , jack);
console.log(jonas instanceof Person);

