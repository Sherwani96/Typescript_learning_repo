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

let coord: Coordinate = {
    x: 1,
    y: 2
}
coord.x = 23;
coord.y = 34;
assert.deepEqual(coord, {x: 23, y: 34})


// we can use nested type alias
type PersonName = string;

type Location = {
    coord: Coordinate;
    person: PersonName;
}

let home = {
    coord: {x: 33, y: 44},
    person: 'ali',
}

home.coord.x

//  here we use the nested type alias but didn't assign it but following the same structure, typescript assigns or shows intellisense for that particular instance