const Manager = require("../lib/manager");
const employeeData = "seth";
const idData = 555;
const emailData = "seth@email.com";
const officeNumber = "222";

test("get manager office number", () => {

    const employee = new Manager (employeeData,idData,emailData,officeNumber); 
    expect(employee.officeNumber).toEqual(this.office);
});

//generate office number with getOfficeNumber()
test("getOfficeNumber()", () => {
    const employee = new Manager (employeeData,idData,emailData,officeNumber); 
    expect(employee.getOfficeNumber()).toEqual(this.office);
});

//getrole ()

test("getRole()", () => {
  
   const employee = new Manager (employeeData,idData,emailData,officeNumber); 
    expect(employee.getRole()).toEqual(Manager);
});