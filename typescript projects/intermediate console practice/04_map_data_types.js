// maps loads or acces data based on association
// to retrieve the data from maps we need to know the key
// MAps are way faster than arrays
//                     key   value
const testScores = new Map();
testScores.set('Ahmed', 85);
testScores.set('Ali', 99);
testScores.set('Salman', 100);
for (const [name, score] of testScores) {
    console.log(`${name} your score is ${score}`);
}
;
testScores.delete('Ali'); // passing key here don't need to pass value
console.log(testScores);
// we can also check that key exists or not
const check = testScores.has('Ali');
console.log(check);
export {};
