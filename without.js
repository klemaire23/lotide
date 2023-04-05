const without = function (source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let sourceValue = source[i];
    if (itemsToRemove.includes(sourceValue)) {
      continue;
    }
    output.push(sourceValue);
  }
  return output;
};

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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["hello", "goodbye"], ["hello"]), ["goodbye"]);