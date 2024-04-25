const { DEFAULT_WOOF, DOG } = require('../dog/dog');
require('../index');

let loggedString;
jest.spyOn(global.console, 'log').mockImplementation((text) => {
    loggedString = text;
});

test('console.dog is a defined function', () => {
    expect(typeof console.dog).toBe('function');
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

test.each(inputs)('Logs an input of %s as %s', (input, output) => {
    const border = '-'.repeat(30);
    console.dog(input);
    expect(loggedString).toBe([border, output, border, ...DOG].join('\n'));
});

it('can increase the sausagicity of the dog', () => {
    const extraSausage = 16;
    const border = '-'.repeat(31);
    console.dog('woof', { extraSausage });
    expect(loggedString).toBe(
        [
            border,
            'woof',
            border,
            '                     \\',
            '                         \\',
            '                            \\',
            ' )                        .-.',
            '(________________________()6 `-,',
            "(   ___________________   /''\"`",
            '//\\\\                   //\\\\',
            '"" ""                  "" ""',
        ].join('\n')
    );
});

it('can increase the sausagicity of the dog', () => {
    const extraSausage = 30;
    const border = '-'.repeat(45);
    console.dog('woof', { extraSausage });
    expect(loggedString).toBe(
        [
            border,
            'woof',
            border,
            '                                   \\',
            '                                       \\',
            '                                          \\',
            ' )                                      .-.',
            '(______________________________________()6 `-,',
            "(   _________________________________   /''\"`",
            '//\\\\                                 //\\\\',
            '"" ""                                "" ""',
        ].join('\n')
    );
});
