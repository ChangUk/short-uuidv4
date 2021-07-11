# short-uuidv4

Generate the shorter version of UUIDv4 by translating into base-62 numeral system.

## Module Load

### ESM System

```js
import { ShortUuidV4 } from "path/to/short-uuidv4.esm.js"
let generator = new ShortUuidV4();
```

### Browser (UMD System)

```html
<script type="text/javascript" src="https://requirejs.org/docs/release/2.3.6/minified/require.js"></script>
```
```js
require([
    "path/to/short-uuidv4.umd.js"
], (m) => {
    let ShortUuidV4 = m.ShortUuidV4;
    let generator = new ShortUuidV4();
});
```

## Usage

```js
// Generate a shortened UUIDv4 with the default base string
// - Output: "HZVixYNuduTyIkFIxNO337"
let shortUuid = generator.new();

// Translate into the original UUIDv4
// - Output: "f36e572f-1e8b-4fe4-babf-e20752724b29"
let originalUuid = generator.translate(shortUuid);

// Shorten UUID again
// - Output: "HZVixYNuduTyIkFIxNO337"
let shortAgain = generator.translate(originalUuid, ShortUuidV4.BASE_HEX, ShortUuidV4.BASE_DEF);
```

```js
// Generate new shortened UUIDv4 with another base string
// - Output: "63f6bnf33y478w1i18nov11n0"
const MYBASE = "0123456789abcdefghijklmnopqrstuvwxyz";
let myShortUuid = generator.generate(MYBASE);

// Translate with the default base string
// - Output: "DIQpKQEW19BBSI1Brw2fzG"
let translated = generator.translate(myShortUuid, MYBASE, ShortUuidV4.BASE_DEF);

// Translate again
// - Output: "63f6bnf33y478w1i18nov11n0"
let myShortAgain = generator.translate(translated, ShortUuidV4.BASE_DEF, MYBASE);
```

## References

- [https://github.com/oculus42/short-uuid](https://github.com/oculus42/short-uuid)
