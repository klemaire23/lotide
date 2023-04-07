const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

console.log(assertEqual("You did it!", "You did it!"));
console.log(assertEqual(16, 26));