const assertArraysEqual = function (expected, actual) {
  if (expected.length !== actual.length) {
    console.log("The arrays are not equal.");
  }
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      console.log("The value of " + expected[i] + " is not equal to " + actual[i]);
    }
  }
  console.log("The arrays are equal.");
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
assertArraysEqual(middle([1, 2]), [1]);
assertArraysEqual(middle(["a", "b", "c"]), ["c"]);
  