# sausage-console-dog

When `console.log` has gotten boring, liven up your console with the most loving Dachshund. He's a stretchy boy, so you can even log with more sausage dog than you've ever thought possible.

## Install

```bash
npm install sausage-console-dog
```

## Usage

```javascript
// CJS
require('sausage-console-dog');

// ESM
import 'sausage-console-dog';
```

The following dogs:

```javascript
console.dog('Woof woof woof!');
console.dog('Bark bark bark!', { extraSausage: 20 });
```

Will dog the following:

```text
------------------------------
Woof woof woof!
------------------------------
     \
         \
            \
 )        .-.
(________()6 `-,
(   ___   /''"`
//\\   //\\
"" ""  "" ""

-----------------------------------
Bark bark bark!
-----------------------------------
                         \
                             \
                                \
 )                            .-.
(____________________________()6 `-,
(   _______________________   /''"`
//\\                       //\\
"" ""                      "" ""
```

### Params

#### `input`

**(any; default: "Woof woof!")** - The input to output. Objects will be stringified via `JSON.stringify`, otherwise `.toString` will be called.

#### `options`

#### `options.extraSausage`

**(number; optional; default: 0)** - The higher the number, the greater the dog's sausagicity!
