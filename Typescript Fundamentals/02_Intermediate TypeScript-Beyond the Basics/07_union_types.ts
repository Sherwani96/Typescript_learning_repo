// union types offer a way to specify that more than one type is acceptable
// thos comes handy when you eork with apis
// union types can be of different types not same always

type Colors = "red" | "blue" | "green";   // here using pipe symbol we create union types

// using union types makes code type restrictied
const col: Colors = "Red";

// making function using union types
function setBgColor(c: Colors) {
    switch (c) {
        case "red":
            break;
        case "blue":
            break;
        case "green":
            break;
        default:
            break;
    }
}

type strorNum = String | number;

function sample(data: strorNum) {
    if (typeof data === "string") {
        console.log(`Message: ${data.toUpperCase()}`);
    } else if (typeof data === "number") {
        console.log(`Total: ${2 + data}`);
    };
};

sample("hello");
sample(10);