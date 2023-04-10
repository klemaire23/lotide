const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let result = [];
  let index = Math.floor(array.length / 2);
  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 !== 0) {
      result = array[index];
    } else if (array.length % 2 === 0) {
      result = [array[index - 1], array[index]];
    }
  }
  return result;
};

module.exports = middle;