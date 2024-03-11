import {strict as assert} from 'assert';

type Coordinate = {
    x: number;             // here we use semi-colon
    y: number;
}

const origin: Coordinate = {
    x: 0,         // here in the object instance we use comma
    y: 0
}

const xPosition = origin.x;
assert.equal(xPosition, 0);
const yPosition = origin.y;
assert.equal(yPosition, 0);

let coord: Coordinate = {              // here it is of type object
    x: 1,
    y: 2
}
coord.x = 23;
coord.y = 34;
assert.deepEqual(coord, {x: 23, y: 34})

console.log(typeof(coord.x))