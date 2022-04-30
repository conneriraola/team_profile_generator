const Manager = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email, office);
    }

    getRole() {
        return "Manager";
    }
}


module.exports = Engineer;