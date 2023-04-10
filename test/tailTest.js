const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [[2,3]]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['YoYo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yoyo', 'Lighthouse', 'Labs']), [['Lighthouse', 'Labs']]);
  });

  it("returns [undefined] for []", () => {
    assert.deepEqual(tail([undefined]), [[]]);
  });

  it("returns ['friend'] for ['hello', 'friend']", () => {
    assert.deepEqual(tail(['hello', 'friend']), [['friend']]);
  });
  
});
