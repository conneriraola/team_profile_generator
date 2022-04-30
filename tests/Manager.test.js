const Manager = require ('../lib/Manager.js')

test('creates a Manager object', () => {
    const manager = new Manager('Conner', 1, 'conner@email.com, 666');

    expect(manager.name).toBe('Conner');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('conner@email.com')
    expect(manager.office).toBe(666);
    expect(manager.getRole()).toBe('Manager');
});