import {strict as assert} from 'assert';

const yes = true;
const no = false;


const age = 18;
const canPurchase = age >= 18;
assert.equal(canPurchase, true)

const denyPurchase = age < 18;
assert.notEqual(denyPurchase, false)

const two = 2;
const isThree = (1 + two) === 3;
assert.equal(isThree, true)

const isNotThree = (1 + two) !== 10
assert.equal(isNotThree, true)

// boolean operators

// <
// <=
// >
// >=
// ===
// !==