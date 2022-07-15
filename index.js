// required variables
const inquirer = require('inquirer');
const fs = require('fs');

// Connections to files
const employee = require('./lib/employee.js');
const manager = require('./lib/manager.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');



// prompts for input of manager information


// questions, runs with Inquirer
const questions = [
    {
        
        name: "managerName",
        type: "input",
        message: "Enter Manager name:"
    },
    {
        type: "input",
        message: "Enter Manager id:",
        name: "managerid",
    },
    {
        type: "input",
        message: "Enter Manager's email address: ",
        name: "managerEmail",
        default: () => {},
        validate: function (managerEmail) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail);
            if (!valid) {
                console.log(".  Please enter a valid email");
                return false;
                } else {
                return true;
                }
            },
    },
    {
        type: "input",
        message: "Enter Manager's office number:",
        name: "office",
    },

    // path if engineer is selected:
    

    // path is intern is selected:

]

        
// function for creating employee, based on user's given answer to question



// function to write HTML page
function writeToHTML(response) {
    const htmlFile = ``
}



// initialize the app (with a function)
function init() {

}



// call for the initialized app
init();





// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

//WHEN I click on the GitHub username
//THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated 