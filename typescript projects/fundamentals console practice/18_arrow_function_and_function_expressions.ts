import {strict as assert} from 'assert';

const sum = function (lhs: number, rhs: number): number {
    return lhs + rhs
}


// we don't use function keyword in arrow function
const ArrowSum = (lhs: number, rhs: number): number => {
    return lhs + rhs
}

const two = sum(1, 1);
const ten = ArrowSum(5, 5);

// here we are passing a function into another function
function calculate(fn: (lhs: number,rhs: number) => number) {
    const result = fn(5,6)
    console.log(result)
}
calculate(ArrowSum);

// we can also pass parameter to the calling function like making some altertions in function's signature
function calculating(fn: (lhs: number,rhs: number) => number, lhs:number, rhs: number) {
    const result = fn(lhs,rhs)     // here we did alteration to the unction by just using variable
    console.log(result)
}
calculating(ArrowSum, 10, 34);   // here we are providing parameter of the calling function

// instead of defindining the function type we can define it separately and than instantiate here to make our code clean and simple

type calculationFn = (lhs: number, rhs: number) => number;
function clean_calc_fn(fn: calculationFn, lhs:number, rhs: number): number {
    const result = fn(lhs,rhs)
    console.log(result)
    return result
}
calculating(ArrowSum, 10, 34);