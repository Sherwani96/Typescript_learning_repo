import { strict as assert } from 'assert';
let n = 1;
// this is called postfix increment
n++;
assert.equal(n, 2);
// this is called prefix increment
++n;
assert.equal(n, 3);
n = 5;
const k = n++;
// assert.equal(k, 6);  // here it shows error because it takes value first then increment it
assert.equal(n, 6);
n = 5;
const j = ++n;
assert.equal(j, 6); // here it didn't shows error because it increments and takes value simultaneously
// note: if you want to increment or decrement and want to save it right after it then use prefix increment or decrement
n = 5;
const l = --n;
assert.equal(l, 4);
n = 5;
const t = n--;
assert.equal(t, 4); // error because it takes value first then decrement
// using the below method for increment or decrement will have low chances for errors
n = 5;
n += 5;
assert.equal(n, 10);
n -= 5;
assert.equal(n, 5);
n -= 1;
assert.equal(n, 4);
// using arithmatic assignments
// +=
// -=
// *=
// /=
// %=
