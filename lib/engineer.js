const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id , email,github)
        this.githubUser = this.github;
    }
    getGithub () {
        return this.githubUser;

    }
    getRole () {
        return Engineer;
    }
}

module.exports = Engineer;