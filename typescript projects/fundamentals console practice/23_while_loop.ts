// while loop is used to repeat code over and over again

let i = 1;

while (i <= 5) {
    console.log(i);
    i += 1;
}

console.log('------------')

let j = 1;

while (j <= 5) {
    if (j === 3) {
        console.log("reached j = ", j);
        j += 1;           // we use it here to continue the loop other wise it will coninuouly print and don't update the variable value
        continue;
    }
    console.log(j)
    j += 1;
}

i = 1;
while (true) {
    if (i >= 30) {
        console.log("reached i = ", i);
        break;
    };
    i += 1;
}