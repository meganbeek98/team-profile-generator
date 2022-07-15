//required node modules
const inquirer = require("inquirer");
const fs = require("fs");

// link page template

const templatePage = require("./src/template");

//importing team members

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const intern = require("./lib/intern");




//create array for team members
let teamMems = [];


//add Manager

function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "Who is the manager of your team? please enter name?"
        },

      
        {
            type: "input",
            name: "managerId",
            message: "What is the Managers ID?"
        },

        
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Managers Email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the Managers office number?"
        },
    ])

    .then(answers => {
        let managerName, managerId, managerEmail, managerOfficeNumber = answers;
        console.log(answers);
        const manager = new Manager (managerName, managerId, managerEmail, managerOfficeNumber);

        teamMems.push(manager);

        //after manager add more team members 
        addTeamMem();

})

}


//add Intern

function addIntern() {
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "What is the interns name?"
        },

      
        {
            type: "input",
            name: "internId",
            message: "What is the interns ID?"
        },

        
        {
            type: "input",
            name: "internEmail",
            message: "What is the interns Email?"
        },
        {
            type: "input",
            name: "internSchoolName",
            message: "What is the the name of the school your intern attends?"
        },
    ])

    .then(answers => {
        let internName, internId, internEmail, internSchoolName = answers; 
        console.log(answers);
        const Intern = new intern (internName, internId, internEmail, internSchoolName);

        teamMems.push(Intern);

        //after manager add more team members 
        addTeamMem();

})

}

//add engineer

function addEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "Who is the engineer on your team? please enter name"
        },

      
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineers ID?"
        },

        
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineers Email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineers github information?"
        },
    ])

    .then(answers => {
        let engineerName, engineerId, engineerEmail, engineerGithub = answers;
        console.log(answers);
        const engineer = new Engineer (engineerName, engineerId, engineerEmail, engineerGithub);

        teamMems.push(engineer);

        //after manager add more team members 
        addTeamMem();

    })

}


function addTeamMem() {
    inquirer.prompt({
        type:"list",
        name:"addTeamMem",
        message: "please choose the team memeber you would like to add",
        choices: ["Engineer", "Intern", "I do not wish to add any team members at this time"]
 })
 
 .then(answers => {
    let { addTeamMem } = answers;
    if (addTeamMem === "Intern") {
        addIntern();
    } else if (addTeamMem === "Engineer") {
        addEngineer();
    } else if (addTeamMem === "I do not wish to add any team members at this time") {
        initPage();
    }
})
}

function initPage() {
// function to generate HTML page file using file system 
fs.writeFile("./dist/index.html", templatePage(teamMems), err => {
    if (err) {
        return console.error(err);
    } else {
        console.log("Congratulations your team profile has been created! Head over to your HTML to see the results!");
        
    };
});
}



addManager();




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