const sum = function (lhs, rhs) {
    return lhs + rhs;
};
// we don't use function keyword in arrow function
const ArrowSum = (lhs, rhs) => {
    return lhs + rhs;
};
const two = sum(1, 1);
const ten = ArrowSum(5, 5);
// here we are passing a function into another function
function calculate(fn) {
    const result = fn(5, 6);
    console.log(result);
}
calculate(ArrowSum);
// we can also pass parameter to the calling function like making some altertions in function's signature
function calculating(fn, lhs, rhs) {
    const result = fn(lhs, rhs); // here we did alteration to the unction by just using variable
    console.log(result);
}
calculating(ArrowSum, 10, 34); // here we are providing parameter of the calling function
function clean_calc_fn(fn, lhs, rhs) {
    const result = fn(lhs, rhs);
    console.log(result);
    return result;
}
calculating(ArrowSum, 10, 34);
export {};
