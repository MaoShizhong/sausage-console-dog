const { BORDER, DEFAULT_WOOF, DOG } = require('../dog/dog');
require('../index');

let loggedString;
jest.spyOn(global.console, 'log').mockImplementation((text) => {
    loggedString = text;
});

const inputs = [
    ['test input', 'test input'],
    ['Woof woof, bark bark!', 'Woof woof, bark bark!'],
    [6, '6'],
    [234, '234'],
    [1823.209, '1823.209'],
    [null, 'null'],
    [['foo', 'bar'], '["foo","bar"]'],
    [{ woof: 'bark' }, '{"woof":"bark"}'],
    [undefined, DEFAULT_WOOF],
];

test('console.dog is a defined function', () => {
    expect(typeof console.dog).toBe('function');
});

test.each(inputs)('Logs an input of %s as %s', (input, output) => {
    console.dog(input);
    expect(loggedString).toBe([BORDER, output, BORDER, ...DOG].join('\n'));
});
