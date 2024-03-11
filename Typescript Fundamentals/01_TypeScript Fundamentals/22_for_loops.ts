import {strict as assert} from 'assert';

//  initialization; bool; increment
for (let i = 1; i <= 5; i++) {
    console.log(`${i}`)
}


// count down using for loop
for (let i = 5; i > 0; i--) {
    console.log(`${i}`)
}

for (let i = 1; i <= 10000; i++) {
    console.log(`${i}`);
    if (i === 3) {
        break;
    }
}
// in the above code if the condition mets it will break the loop and immediately get out of it

for (let i = 1; i <= 10000; i++) {
    console.log(`${i}`);
    if (i === 5) {
        break;
    };

    if (i === 3) {
        continue;
    };
    console.log(`${i}`);    // this will never going to print, becuse the continue statement above causes to jump towards the iteration step, whicch is 22
}
// what's going in the above code is everytime it prints fro the console.log() but when the iteration reaches i=3, it will skip the body
// or code below and jump to the start for the next itertion 