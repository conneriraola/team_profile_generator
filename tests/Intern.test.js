const Intern = require ('../lib/Intern.js');

test('creates a Intern Object', () => {
    const intern = new Intern('Conner', 1, 'conner@email.com, 666, WSU');

    expect(intern.name).toBe('Conner');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('conner@email.com')
    expect(intern.office).toBe(666);
    expect(intern.getSchool()).toEqual(WSU);
    expect(intern.getRole()).toBe('Intern');
});