import { strict as assert } from 'assert';
// if we don't type annotate here, typecript will consder it consider it as an array of number and string
const sample = ["Sample", 2020];
// here we are definig a function which returns a tuple
function coord() {
    return [1, 2];
}
// here we are destructuring the tuple, why we destructure here becuse instead of calling elements by index we desructured the whoe element of that particular index to a some variable
const [x, y] = coord();
assert.equal(x, 1);
assert.equal(y, 2);
console.log(x);
console.log(y);
//  here we are creating an array of tuple
const multi = [
    coord(),
    [2, 3],
    [0, 4],
    [9, 4],
];
// tuples are very useful when want to return pieces of data from a function, or can use destructuring
