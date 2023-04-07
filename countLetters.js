const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const countLetters = function(sentence) {
  let results = {};
  
  for (const letter of sentence) {
    if (letter === " ") {
      continue;
    }

    if (!results[letter]) {
      results[letter] = 0;
    }

    results[letter] += 1;
  }
  return results;
};

const result = countLetters("hello");
console.log(result);
console.log(assertEqual(countLetters("hello").h, 1));



