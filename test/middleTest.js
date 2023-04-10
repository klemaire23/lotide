const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3);
  });

  it("returns ['b'] for ['a', 'b', 'c']]", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), 'b');
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });
  
});
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [2]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle(["a", "b", "c"]), ["b"]);