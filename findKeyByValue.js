const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKeyByValue = function(collection, nameOfShow) {
  let genres = Object.keys(collection); // pulls all of the types of shows from the collection of TV shows
  for (const typeOfShow of genres) { // will loop through the types of shows held in our genre variable (has all of the keys in that variable)
    if (collection[typeOfShow] === nameOfShow) { // if the typeOfShow (genre) of the collection matches the associated name of the show (of that genre)
      return typeOfShow; // return the genre
    }
  }
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
