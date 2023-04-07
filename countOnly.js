const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// console.log(assertEqual("You did it!", "You did it!"));
// console.log(assertEqual(16, 26));

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    
    if (!itemsToCount[item]) {

      continue;
    }

      if (!results[item]) {
        results[item] = 0;
      } 
        results[item] += 1;
        
      }

  return results;
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
