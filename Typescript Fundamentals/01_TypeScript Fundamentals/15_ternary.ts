import {strict as assert} from 'assert';

const age = 18;
//         (bool exp) ? (true): (false)
const msg = age >= 18 ? 'yes' : 'no';
assert.equal(msg, 'yes')

// ternary operators are just like one line if-else statement