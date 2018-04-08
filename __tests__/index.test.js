'use strict';

const prefill = require('../index');
const test = require('tape');

test('should work with any value', t => {
  t.deepEqual(prefill(1, 1), [1]);
  t.deepEqual(prefill(5, 1), [1, 1, 1, 1, 1]);
  t.deepEqual(prefill(3, 1.5), [1.5, 1.5, 1.5]);
  t.deepEqual(prefill(3, 'prefill'), ['prefill', 'prefill', 'prefill']);
  t.deepEqual(prefill(2, [1337]), [[1337], [1337]]);
  t.deepEqual(prefill(3, { name: 'prefill' }), [
    { name: 'prefill' },
    { name: 'prefill' },
    { name: 'prefill' }
  ]);
  t.deepEqual(prefill(5, true), [true, true, true, true, true]);
  t.end();
});

test('should work with number as 0', t => {
  t.deepEqual(prefill(0), []);
  t.end();
});

test('should work with undefined value', t => {
  t.deepEqual(prefill(3), [undefined, undefined, undefined]);
  t.end();
});

test('should work with recursive function', t => {
  t.deepEqual(prefill(2, prefill(2, '2D')), [['2D', '2D'], ['2D', '2D']]);
  t.end();
});

test('should thrown an error with number as string', t => {
  let isError = false;

  try {
    prefill('25', 5);
  } catch (e) {
    t.equals(e.name, 'TypeError');
    t.equals(
      e.message,
      'Number type is invalid. Expected an integer, but got: string'
    );
    isError = true;
  }

  t.equals(isError, true);
  t.end();
});

test('should thrown an error with non-integer number', t => {
  let isError = false;

  try {
    prefill(1.5, 5);
  } catch (e) {
    isError = true;
  }

  t.equals(isError, true);
  t.end();
});

test('should thrown an error with negative number', t => {
  let isError = false;

  try {
    prefill(-5, 1);
  } catch (e) {
    isError = true;
  }

  t.equals(isError, true);
  t.end();
});

test('should throw an error with number as infinity', t => {
  let isError = false;

  try {
    prefill(Infinity, 1);
  } catch (e) {
    isError = true;
  }

  t.equals(isError, true);
  t.end();
});
