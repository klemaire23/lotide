const assertArraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("The arrays are not equal.");
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("The value of " + arr1[i] + " is not equal to " + arr2[i]);
    }
  }
  console.log("The arrays are equal.");
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);