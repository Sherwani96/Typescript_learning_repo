import {strict as assert} from 'assert';

let someNumber = parseInt('10');
const sample = 'sample';
const someString = `${sample}`;

switch (someString) {
    case "test":
        // A
        break;
    case "sample":
        // B
        break;
    case "a":
        // C
        break;
}

if (someString === "test") {
    // A
} else if (someString === "sample") {
    // B
} else if (someString === "a") {
    // C
}

someNumber = parseInt("32");
switch (someNumber) {) {
    case 1:
        // code block A
        break;
    case 2:
        // code block B
        break;
    default:
        // code block C, anything inside the default will always going to execute whether it matches or not
        break;
}

if (someNumber == 1) {
    // code block A
} else if (someNumber == 2) {
    // code block B
} else {
    // code block C
}

// notice in switch case statements we must use break if we want to exit out of the switch case
// consider if there are multiple switch cases it, go from one till last where it finds the break statemten and this phenomenon is called fall through
// always use break if you want to exit out of the switch case, because it prevents from bugs
