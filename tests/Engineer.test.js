const Engineer = require ('../lib/Engineer.js');

test('creates a Engineer Object', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");

   expect(typeof(engineer)).toBe('object')
});

test('can set name', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(engineer.name).toBe(name)
});

test('can set id', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;

   expect(engineer.id).toBe(id)
});

test('can set email', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const github = "conneriraola"

   expect(engineer.email).toBe(email)
});

test('can set office number', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const github = "conneriraola"

   expect(engineer.office).toBe(office)
});

test('can set github username', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const github = "conneriraola"

   expect(engineer.office).toBe(office)
});

test('getName() returns name', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const github = "conneriraola"

   expect(engineer.getName()).toBe(name)
});

test('getID() returns id', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const github = "conneriraola"

   expect(engineer.getID()).toBe(id)
});

test('getEmail() returns email', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const github = "conneriraola"

   expect(engineer.getEmail()).toBe(email)
});

test('getOffice() returns office number', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const github = "conneriraola"

   expect(engineer.getOffice()).toBe(office)
});

test('getRole() returns employee role', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com', 666, "conneriraola");
    const name = "Conner";
    const id = 1;
    const email = "conner@email.com";
    const office = 666;
    const github = "conneriraola"

   expect(engineer.getRole()).toBe("Engineer")
});
