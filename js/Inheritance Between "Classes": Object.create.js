const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },

}
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;

}

StudentProto.introduce = function () {
    console.log(`MY name is ${this.firstName} and i study ${this.course}`)
}



const jay = Object.create(StudentProto)
jay.init('daniel ', 2004, "web Developers");
jay.introduce();
jay.calcAge