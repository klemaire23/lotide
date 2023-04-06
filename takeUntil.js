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
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const takeUntil = function(array, callback) {
  const result = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    }
    result.push(element);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));

const names = ["Miranda", "John", "Stephen", "Amy", "Winona"];
const results3 = takeUntil(names, x => x === "Amy");
console.log(assertArraysEqual(results3, ["Miranda", "John", "Stephen", "Winona"]));


