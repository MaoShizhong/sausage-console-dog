const { BORDER, DEFAULT_WOOF, DOG } = require('../dog/dog');
require('../index');

let loggedString;
jest.spyOn(global.console, 'log').mockImplementation((text) => {
    loggedString = text;
});

test('console.dog is a defined function', () => {
    expect(typeof console.dog).toBe('function');
});

it('Dogs defined inputs', () => {
    const inputs = [
        'test input',
        'Woof woof, bark bark!',
        6,
        234,
        1823.209,
        null,
        ['foo', 'bar'],
        { woof: 'bark' },
    ];

    inputs.forEach((input) => {
        console.dog(input);
        expect(loggedString).toBe([BORDER, input?.toString(), BORDER, ...DOG].join('\n'));
    });
});

it('Dogs a default response with an undefined', () => {
    console.dog();
    expect(loggedString).toBe([BORDER, DEFAULT_WOOF, BORDER, ...DOG].join('\n'));
});
