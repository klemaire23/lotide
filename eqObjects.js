const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqObjects = function(object1, object2) {
  let clothingKeys1 = Object.keys(object1);
  let clothingKeys2 = Object.keys(object2);
  if (clothingKeys1.length !== clothingKeys2.length) {
    return false;
  }
  for (const feature of clothingKeys1) {
    if (Array.isArray(clothingKeys1[feature]) && Array.isArray(clothingKeys2[feature])) {
      eqArrays(clothingKeys1, clothingKeys2);
      return true;
    } else if (clothingKeys1[feature] !== clothingKeys2[feature]) {
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true));

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false));

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true)); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false));