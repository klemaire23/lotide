const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const findKey = function(restaurants, callback) {
  for (const key in restaurants) {
    const callBackVariable = callback(restaurants[key]);
    if (callBackVariable) {
      return key;
    }
  }
};

const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
const results1 = findKey(restaurants, x => x.stars === 2);
console.log(assertEqual(results1, "noma"));

const people = {
  "Meredith": { age: 24 },
  "Ryan": { age: 39 },
  "Sarah": { age: 26 },
  "Donna": { age: 39 },
  "Mitchel": { age: 24 }
};
const results2 = findKey(people, x => x.age === 26);
console.log(assertEqual(results2, "Sarah"));


