import {strict as assert} from 'assert';

// NOT
const writing = true;
const reading = !writing;
assert.equal(reading, false);

// OR
// (pick 1 movie)
const rating = 9;
const favoriteMovie = false;
const suggestMovie = rating > 8 || favoriteMovie;  // here on the right is what we call compound boolean expression
// here pipes means OR operator, in this either one condition need to be true
assert.equal(suggestMovie, true);

// AND
const age = 18;
const isTeenager = age >= 13 && age < 20;
assert.equal(isTeenager, true);
// here amperson means AND operator, in this both conditions need to be true

// our package
const packageWeight = 30;
const packageLength = 50;
const shiippingDistance = 99;
const air  = true;
const priority = true;
const feeExemption = false;
const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40);