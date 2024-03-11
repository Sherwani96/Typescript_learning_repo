import {strict as assert} from 'assert';


// template strings allows us to substitute data within a string

function greet(name) {
    // " "
    // ' '
    // ` `  , here back ticks are callled template literals
    console.log(`Hello!!, ${name}`);
}

// we can also use multiple template strings
const kids = 3;
const adults = 34;
const totalAttending = `There are ${kids + adults} no. of attendees`;
console.log(`${totalAttending} were seated in the ground floor`)