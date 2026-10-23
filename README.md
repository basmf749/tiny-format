# tiny-format

Small, dependency-free formatting helpers for dashboards and admin panels.
Formats numbers, percentages, byte sizes and dates without pulling in a large
utility library.

## Install

```bash
bun add tiny-format
```

## Usage

```js
const { number, percent, bytes } = require('tiny-format')

number(1234567)   // "1,234,567"
percent(0.426)    // "42.6%"
bytes(1536)       // "1.5 KB"
```

## API

- `number(value, locale?)` - grouped decimal formatting
- `percent(value, digits?)` - ratio to percentage string
- `bytes(value)` - human readable byte size
- `date(value, style?)` - short and long date styles

MIT licensed.
