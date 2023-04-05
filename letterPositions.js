const assertArraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("The arrays are not equal.");
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("The value of " + arr1[i] + " is not equal to " + arr2[i]);
    } else {
      console.log("The arrays are equal.");
    }
  }
  return 
};

const letterPositions = function (sentence) {
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

const result = letterPositions("lighthouse in the house");
console.log(result);



