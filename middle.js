const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(["a", "b", "c"]), ["b"]);
