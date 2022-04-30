const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, office, school) {
        super(name, id, email, office);

        this.school = school;
    }

    getScgool() {
        return this.school
    }

    getRole() {
        return "Intern";
    }
}


module.exports = Intern;