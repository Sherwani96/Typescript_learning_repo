import {strict as assert} from 'assert';

const add = 1 + 1;
assert.equal(add, 2);

const sub = 2 - 1;
assert.equal(sub, 1);

const mul = 3 * 3;
assert.equal(mul, 9);

const div = 8 / 4;
assert.equal(div, 2);

const inf = 2 / 0;
assert.equal(inf, Infinity);

const nan = 0 / 0;
assert(isNaN(nan));

const rem = 10 / 3;
assert.equal(rem, 1);

// term negate is used, when we want get negative of some value
const neg = 10 / 3;
assert.equal(neg, -1);

// this will return the positve value
const neg2 = -neg;
assert.equal(neg2, 1);

// exponent
const exp = 2 ** 3;
assert.equal(exp, 8);

// returns the opposite value
const abs = Math.abs(-5);
assert.equal(abs, 5);
