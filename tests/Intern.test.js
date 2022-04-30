const Intern = require ('../lib/Intern.js');

test('creates a Intern Object', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");

   expect(typeof(intern)).toBe('object')
});

test('can set name', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.name).toBe(name)
});

test('can set id', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.id).toBe(id)
});

test('can set email', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.email).toBe(email)
});

test('can set office number', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.office).toBe(office)
});

test('can set school', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.school).toBe(school)
});

test('getName() returns name', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.getName()).toBe(name)
});

test('getID() returns id', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.getID()).toBe(id)
});

test('getEmail() returns email', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.getEmail()).toBe(email)
});

test('getOffice() returns office number', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.getOffice()).toBe(office)
});

test('getRole() returns employee role', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com', 666, "WSU");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const school = "WSU";

   expect(intern.getRole()).toBe("Intern")
});