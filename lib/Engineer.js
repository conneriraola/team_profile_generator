const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, office, github) {
        super(name, id, email, office);

        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer";
    }
}


module.exports = Engineer;