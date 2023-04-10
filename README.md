# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @klemaire/lotide`

**Require it:**

`const _ = require('@klemaire/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(array): returns the first element of the array.
* tail(array): removes the first element from an array and returns the remainder of the array.
* middle(array): returns the middle element of an array. If the array is odd-numbered, it will return 1 element; if even-numbered, it will return the two most middle numbers of the array.
* eqArrays(array): determines if two arrays are equal
* assertArraysEqual(function(actual, expected)): assertion function. Utilizes eqArrays to evaluate if 2 arrays are equal in value
* assertEqual(function(actual, expected)): assertion function used to test if 2 values are equal
* assertObjectsEqual(function(actual, expected)): assertion function. Utilizes eqObjects to evaluate if 2 object values are equal
* countLetters(string): counts the number of times a letter appears in a string
* countOnly(object, object properties): counts the number of times an object property is found within the object
* eqObjects(object1, object2): compares the values of 2 different objects
* findKey(object, function()): utilizes a callback function to return the key for a nested object based on the value
* findKeyByValue(object, value): returns the key of an object based on value 
* letterPositions(string): returns the indices of each individual letter in the string
* map(array, function()): returns a new array based on the results of the callback function
* takeUntil(array, function()): utilizes a callback function that returns the array until it hits the designated stopping signal
* without(array, element to remove): removes the designated element (i.e. element to remove)from the array

