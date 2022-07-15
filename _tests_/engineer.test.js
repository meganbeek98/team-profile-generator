const Engineer = require('../lib/Engineer');

// Creates object
describe('create an engineer object', () => {
    it('creates the engineer object from data', () => {
    const engineer = new Engineer('Shawn Smith', 100, 'shawnSmith@placeholder.net', 'mclanea92');
    expect(engineer.github).toEqual(expect.any(String));
})});

// Gets GitHub information
describe('get github from data of engineer', () => {
    it('gets github from data of engineer', () => {
    const engineer = new Engineer('Shawn Smith', 100, 'shawnSmith@placeholder.net', 'mclanea92');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})});

// IF engineer is selected, THEN it grabs it here for test, with GitHub
describe('get role of employee', () => {
    it('gets the role of employee from data', () => {

    const engineer = new Engineer('Shawn Smith', 100, 'shawnSmith@placeholder.net', 'mclanea92');

    expect(engineer.getRole()).toEqual('Engineer');
})});