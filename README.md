# prefill-array

[![Build Status](https://travis-ci.com/neosiae/prefill-array.svg?token=6vparaXCWUN3XaBxczAx&branch=master)](https://travis-ci.com/neosiae/prefill-array)

Prefill an array with values.

## Install

Install `prefill-array` using [npm](https://www.npmjs.com):
> npm install --save prefill-array

Or via [yarn](https://yarnpkg.com/en):
> yarn add prefill-array

## Usage

```javascript
const prefill = require('prefill-array');

const leet = prefill(5, 1337);
console.log(leet);
// → [ 1337, 1337, 1337, 1337, 1337 ]

const recursive = prefill(4, prefill(2, '2D'));
console.log(recursive);
// → [ [ '2D', '2D' ], [ '2D', '2D' ], [ '2D', '2D' ], [ '2D', '2D' ] ]
```

## Syntax

```javascript
const newArray = prefill(number, value);
```

> __Parameters__

__number__ 

&nbsp;&nbsp; Number of elements to insert. Must be greater than or equal to zero.

__value__

&nbsp;&nbsp; Value to use for filling.

> __Return value__

Returns the filled array.

## License
MIT
