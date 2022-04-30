const Engineer = require ('../lib/Engineer.js');

test('creates a Engineer Object', () => {
    const engineer = new Engineer('Conner', 1, 'conner@email.com, 666, conneriraola');

    expect(engineer.name).toBe('Conner');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('conner@email.com')
    expect(engineer.office).toBe(666);
    expect(engineer.github).toBe(conneriraola);
    expect(engineer.getGithub()).toEqual(conneriraola);
    expect(engineer.getRole()).toBe('Engineer');
});