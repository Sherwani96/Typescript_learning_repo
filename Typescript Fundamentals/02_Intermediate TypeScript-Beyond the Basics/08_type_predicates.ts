
// type guard
type strorNum = String | number;

function sample(data: strorNum) {
    if (typeof data === "string") {
        console.log(`Message: ${data.toUpperCase()}`);
    } else if (typeof data === "number") {
        console.log(`Total: ${2 + data}`);
    };
};

// type predicate
interface Square {
    kind: "square";
    size: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type shape = Square | Circle;
// type predicate always going to return a boolean val

//                                type predicate
function isSquare(shape: shape): shape is Square {
    return shape.kind === "square";
};

function isCircle(shape: shape): shape is Circle {
    return shape.kind === "circle";
};

function calculateArea(shape: shape): number {
    if (isSquare(shape)) {
        return shape.size * 2;
    } else if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2;
    };
    throw new Error("unsupported shape");
};

const square: shape = { kind: "square", size: 4 };
const circle: shape = { kind: "circle", radius: 4 };
console.log(calculateArea(square));
console.log(calculateArea(circle));