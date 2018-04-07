module.exports = (number, value) => {
  const typeOfNumber = typeof number;
  const isInteger = Number.isInteger(number);

  if (typeOfNumber !== 'number' && !isInteger) {
    throw new TypeError(
      `Number type is invalid. Expected an integer, but got: ${typeOfNumber}`
    );
  }

  return Array.from(new Array(number), () => value);
};
