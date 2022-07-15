const intern = require("../lib/intern");
const employeeData = "seth";
const idData = 555;
const emailData = "seth@email.com";
const schoolName = "UNLV";


test("get intern school name", () => {

    const employee = new intern (employeeData,idData,emailData,schoolName); 
    expect(employee.schoolName).toBe(this.school);
});

//generate school name()
test("getSchool()", () => {
    const employee = new intern (employeeData,idData,emailData,schoolName); 
    expect(employee.getSchool()).toBe(this.school);
});

//getrole ()

test("getRole()", () => {
   const employee = new intern (employeeData,idData,emailData,schoolName); 
    expect(employee.getRole()).toBe(intern);
});