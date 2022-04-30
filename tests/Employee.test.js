const Employee = require ('../lib/Employee.js');

test('creates a Employee Object', () => {
    const employee = new Employee('Conner', 1, 'conner@email.com, 666');

    expect(employee.name).toBe('Conner');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('conner@email.com')
    expect(employee.office).toBe(666);
});