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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const numbers = [1, 2, 3, 4, 5];
const test1 = map(numbers, function(number) {
  return number * 2;
});

const emptyArrays = [];
const test2 = map(emptyArrays, function(emptyArray) {
  return emptyArray
});

const names = ["Megan", "Julia", "Kristie", "Savannah"];
const test3 = map(names, function(name) {
  return name.length;
});

console.log(assertArraysEqual(test1, [2, 4, 6, 8, 10]));
console.log(assertArraysEqual(test2, ["hello"]));
console.log(assertArraysEqual(test3, [5, 5, 7, 8]));


