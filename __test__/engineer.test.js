const Engineer = require("../lib/engineer");
const employeeData = "Shawn";
const idData = 007;
const emailData = "shawnSmith@placeholder.net";
const githubUser = "Shawn007";

test("get engineer github username", () => {

    const employee = new Engineer (employeeData,idData,emailData, githubUser); 
    expect(employee.githubUser).toBe(this.github);
});

//generate name with getGithub()
test("getGithub()", () => {
    const employee = new Engineer (employeeData,idData,emailData, githubUser); 
    expect(employee.getGithub()).toBe(this.github);
});

//getrole ()

test("getRole()", () => {
  
   const employee = new Engineer (employeeData,idData,emailData, githubUser); 
    expect(employee.getRole()).toEqual(Engineer);
});