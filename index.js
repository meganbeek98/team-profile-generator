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

    // prompt for question, is the employee an engineer or an intern?
    {
        type: "list",
        message: "Is the employee an engineer or an intern?",
        name: "role",
        choices: ["engineer", "intern"],
    },

    // path if engineer is selected:
    {
        type: "input",
        message: "Enter the engineer's full name:",
        name: "engineerName",
        when: (response) => response.role == "engineer",
    },
    {
        type: "input",
        message: "Enter the engineer's id:",
        name: "engineerid",
        when: (response) => response.role == "engineer",
    },
    {
        type: "input",
        message: "Enter the engineer's email address:",
        name: "engineerEmail",
        when: (response) => response.role == "engineer",
        default: () => {},
        validate: function (engineerEmail) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmail);
  
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
        message: "Enter the engineer's GitHub username:",
        name: "github",
        when: (response) => response.role == "engineer",
    },

    // path if intern is selected:
    {
        type: "input",
        message: "Enter the intern's full name:",
        name: "internName",
        when: (response) => response.role == "intern",
    },
    {
        type: "input",
        message: "Enter the intern's id:",
        name: "internid",
        when: (response) => response.role == "intern",
    },
    {
        type: "input",
        message: "Enter the intern's email:",
        name: "internEmail",
        when: (response) => response.role == "intern",
        default: () => {},
        validate: function (internEmail) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail);

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
        message: "Enter the name of the school/program the intern is currently enrolled in:",
        name: "school",
        when: (response) => response.role == "intern",
    },

    {
        type: "confirm",
        message: "Would you like to add employee?",
        name: "addEmployee",
    },

];

// Arrays for employee type
let internArray = [];
let engineerArray = [];

// function for creating employee, based on user's given answer to question
function internOrEngineer(response) {
    if (response.role == "intern") {
        const Intern = new intern(
            response.internName,
            response.internid,
            response.internEmail,
            response.school
        );
        // Employee entry is created at this point, now push the info to the appropriate Array
    internArray.push(Intern);
    } else if (response.role == "engineer") {
        const Engineer = new engineer(
            reponse.engineerName,
            response.engineerid,
            response.engineerEmail,
            response.github,
        );
        engineerArray.push(Engineer);
    }
}

function createManagerCard(reponse) {
    const managerTemplateLits = response
        .map((element)=> {
            return `
                <div class="card" style= "width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title>${element.managerName}</h5>
                        <p class ="card-text">
                            <i style="font-size:24px" class="fa">&#xf0f4;</i>
                        Manager
                        <p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            ID: ${element.managerid}
                        </li
                        <li class="list-group-item">
                            Email:
                            <a href="mailto:${element.managerEmail}" target="_blank">${element.managerEmail}></a>
                        </li>
                        <li class="list-group-item">
                            Office Number: ${element.officeNumber}
                        </li>
                    </ul>
                </div>`;
        })
        .join("");
    return managerTemplateLits;
}

function createEngineerCard(engineerArray) {
        const engineerTemplateLits = engineerArray
          .map((element) => {
            return `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${element.engineerName}</h5>
                            <p class="card-text">
                            <i style="font-size:24px" class="fa">&#xf530;</i>
                            Engineer
                            </p>
                        </div>
                        <ul class="list-group list-group-flush">
                        
                            <li class="list-group-item">
                                ID: ${element.engineerid}
                            </li>
                            <li class="list-group-item">
                                Email: 
                                <a href="mailto:${element.engineerEmail}" target="_blank" class="">${element.engineerEmail}</a>
                            </li>
                            <li class="list-group-item">
                                Github: 
                                <a href="${github.com}" target = "_blank">${element.githubUsername}</a>
                            </li>
                            
                        </ul>
                    </div>`;
        })
        .join("");
    return engineerTemplateLits;
}

function createInternCard(internArray) {
    const internTemplateLits = internArray
      .map((element) => {
        return `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.internName}</h5>
                        <p class="card-text">
                        <i style="font-size:24px" class="fa">&#xf19d;</i>
                        Intern
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            ID: ${element.internid}
                        </li>
                        <li class="list-group-item">
                            Email: 
                            <a href="mailto:${element.internEmail}" target="_blank">${element.internEmail}</a>
                        </li>
                        <li class="list-group-item">
                            School: ${element.school}
                        </li>
                    </ul>
                </div>`;
      })
      .join("");

    return internTemplateLits;
}

// function to write HTML page
function writeToHtml(response) {
    const htmlFile = `
      <html lang="en-us"> 
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width">
              <title>Team Profile</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
              <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossorigin="anonymous"
            />
              <link rel="stylesheet" href="./assets/css/style.css">
          </head>
          <body>
              <header class="header">
                  <h1>My Team</h1>
              </header>
              <div class="card-container">
                  ${createManagerCard(response)}
                  ${createEngineerCard(engineerArray)}
                  ${createInternCard(internArray)}
              </div>
          </body>
      </html>`;

    //Writes an HTML file named <company name>.html, & populates in the dist folder, using the htmlFile variable
    fs.writeFile(`dist/index.html`, htmlFile, function (err) {
      //IF there is an ERROR: console log the ERROR -- otherwise: console log "Success!"
      err ? console.log(err) : console.log("Success!");
    });
}



// initialize the app (with a function)
function init() {
    return inquirer.prompt(questions).then((response) => {
      createNewEmployee(response);
      if (!response.anotherEmployee) {
        writeToHtml(response);
      } else {
        return init();
      }
    });
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