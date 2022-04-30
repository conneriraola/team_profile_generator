const Employee = require ('../lib/Employee.js');

test('creates a Employee Object', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);

   expect(typeof(employee)).toBe('object')
});

test('can set name', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(employee.name).toBe(name)
});

test('can set id', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(employee.id).toBe(id)
});

test('can set email', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(employee.email).toBe(email)
});

test('can set office number', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(employee.office).toBe(office)
});

test('getName() returns name', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(employee.getName()).toBe(name)
});

test('getID() returns id', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(employee.getID()).toBe(id)
});

test('getEmail() returns email', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(employee.getEmail()).toBe(email)
});

test('getOffice() returns office number', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(employee.getOffice()).toBe(office)
});

test('getRole() returns employee role', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(employee.getRole()).toBe("Employee")
});

