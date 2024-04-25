const { DEFAULT_WOOF, DOG } = require('./dog/dog');

/**
 * @param {any} text
 * @param {object} [options]
 * @param {number} [options.extraSausage=0] For extra sausage length. Defaults to 0
 */
function dog(text, options = { extraSausage: 0 }) {
    let dogArray = DOG;
    if (Number(options.extraSausage)) {
        dogArray = dogArray.map((line) => {
            const extraChar = line.startsWith('(') ? '_' : ' ';
            return `${line.substring(0, 5)}${extraChar.repeat(
                options.extraSausage
            )}${line.substring(5)}`;
        });
    }

    const dogLength = dogArray[5].length;
    const MIN_BORDER_LENGTH = 30;
    const borderLength = dogLength > MIN_BORDER_LENGTH ? dogLength : MIN_BORDER_LENGTH;
    const border = '-'.repeat(borderLength);

    const stringifiedText = typeof text === 'object' ? JSON.stringify(text) : text?.toString();
    const speechBubble = [border, stringifiedText ?? DEFAULT_WOOF, border].join('\n');

    const textToLog = `${speechBubble}\n${dogArray.join('\n')}`;

    console.log(textToLog);
}

console.dog ??= dog;
