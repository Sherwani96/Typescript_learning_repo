import {strict as assert} from 'assert';


function hello() {
    // inde curly brace is called function body
}
// hello() => this is called function signature

function sayHello() {
    console.log('hello');
}

function sum(lhs, rhs) {
    return lhs + rhs;
}

const answer = sum(5, 5);
console.log(answer)

// we can akso use answer as a param to another function
const answer2 = sum(answer, 5);
assert.equal(answer2, 15)

// nested function call
const answer3 = sum(sum(5, 5), sum(1,1));
assert.equal(answer3, 12)

// instead of calling function directly, we can store them in a variable
const lhs = sum(2, 2);
const rhs = sum(4, 4);
const answer4 = sum(lhs, rhs);
