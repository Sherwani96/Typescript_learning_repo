import {strict as assert} from 'assert';

const answer = 2 + 2;
assert.equal(answer, 4)

if (answer > 3) {
    console.log('answer is greater than 3')
}

if (answer === 4) {
    console.log('answer is equal to 4')
} else {
    console.log('answer is not equal to 4')
}


if (answer < 4) {
    console.log('answer is less than 4')
} else if (answer > 4) {
    console.log('answer is greater than 4')
} else {
    console.log('answer is not equal to 4')
}