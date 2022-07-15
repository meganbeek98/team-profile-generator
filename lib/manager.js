const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id , email,office)
        this.officeNumber = this.office;
    }
    getOfficeNumber () {
        return this.officeNumber;

    }
    getRole () {
        return Manager;
    }
}

module.exports = Manager;