function sample(data) {
    if (typeof data === "string") {
        console.log(`Message: ${data.toUpperCase()}`);
    }
    else if (typeof data === "number") {
        console.log(`Total: ${2 + data}`);
    }
    ;
}
;
// type predicate always going to return a boolean val
//                                type predicate
function isSquare(shape) {
    return shape.kind === "square";
}
;
function isCircle(shape) {
    return shape.kind === "circle";
}
;
function calculateArea(shape) {
    if (isSquare(shape)) {
        return shape.size * 2;
    }
    else if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2;
    }
    ;
    throw new Error("unsupported shape");
}
;
const square = { kind: "square", size: 4 };
const circle = { kind: "circle", radius: 4 };
console.log(calculateArea(square));
console.log(calculateArea(circle));
export {};
