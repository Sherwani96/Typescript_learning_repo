// we don't need to type annotate the variables below because typescript knows what type they are
const myName = "doe";
const amount = 2 + 2;
const hello = `hello ${myName}`;
const powerLevel = 900n + 1n;
const yes = true;
function sum(lhs, rhs) {
    const total = lhs + rhs; // here we can avoide unnecessary type annotations beacuse we know what type this function is going to return
    return total;
}
const one = sum(1, 0);
console.log(one);
const two = sum(1, "one"); // here it concatenated the string and a number
console.log(two);
export {};
// if we call a function in a variable it must have return type otherwise it will show undefined
// mote: remember that we only to type annotate the return type of a function and it's signature
