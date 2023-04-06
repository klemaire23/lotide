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

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (letter === " ") {
      continue;
    }

    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(i);
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
const result = letterPositions("lighthouse in the house");
console.log(result);



