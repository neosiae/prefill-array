const prefill = require('../index');
const test = require('tape');

test('it works with numbers greater than 0', t => {
  const expected = [1, 1, 1, 1, 1];
  const actual = prefill(5, 1);

  t.deepEqual(actual, expected);
  t.end();
});

test('it works with number as 0', t => {
  const expected = [];
  const actual = prefill(0);

  t.deepEqual(actual, expected);
  t.end();
});

test('it works with undefined value', t => {
  const expected = [undefined, undefined, undefined];
  const actual = prefill(3);

  t.deepEqual(actual, expected);
  t.end();
});

test('works with recursive function', t => {
  const expected = [['2D', '2D'], ['2D', '2D']];
  const actual = prefill(2, prefill(2, '2D'));

  t.deepEqual(actual, expected);
  t.end();
});
