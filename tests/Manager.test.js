const Manager = require ('../lib/Manager.js')

test('creates a Manager object', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);

    expect(manager.name).toBe('Conner');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('conner@email.com')
    expect(manager.office).toBe(666);
    expect(manager.getRole()).toBe('Manager');
});

test('creates a Manager Object', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);

   expect(typeof(manager)).toBe('object')
});

test('can set name', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(manager.name).toBe(name)
});

test('can set id', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(manager.id).toBe(id)
});

test('can set email', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(manager.email).toBe(email)
});

test('can set office number', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(manager.office).toBe(office)
});

test('getName() returns name', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(manager.getName()).toBe(name)
});

test('getID() returns id', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(manager.getID()).toBe(id)
});

test('getEmail() returns email', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(manager.getEmail()).toBe(email)
});

test('getOffice() returns office number', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(manager.getOffice()).toBe(office)
});

test('getRole() returns employee role', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com', 666);
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(manager.getRole()).toBe("Manager")
});

