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
