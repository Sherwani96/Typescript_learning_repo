// exception is one we excute when everthing goes right
// when things go wrong are called exceptional circumstances
// an exceptions occurs when something happens which is outside of our control


function divide(lhs: number, rhs:number): number {
    if (rhs == 0) {
        throw new Error('cannot Divide by zero');
    }
    return lhs/rhs;
};

// const a = divide(4, 5);
// console.log(a);
// const b = divide(4, 0);
// console.log(b);

// /errors like this can crash the app,s o the best way to handle this is try catch

// try {
//     const b = divide(4, 0);
//     console.log(b);
// } catch (e) {
//     console.error(`${e}`);
// } finally {
//     console.log('done');  // this block will always be executed if error or not
// }

// function with try catch
function div(lhs: number, rhs: number): number {
    try {
        return divide(lhs, rhs);
    } catch (error) {
        // console.log(`This function is broken`);
        console.log(`${error}`);
        // console.error(`${error}`);
        throw error;
    }
}

try {
    const b = div(4, 0);
    console.log(b);
} catch (error) {
    
}