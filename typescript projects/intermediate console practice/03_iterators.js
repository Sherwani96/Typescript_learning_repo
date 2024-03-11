// iterators iterates for us
const abc = ['a', 'b', 'c'];
// c-style loop
for (let i = 0; i < abc.length; i++) {
    console.log(abc[i]);
}
;
console.log('------------');
for (const letter of abc) {
    console.log(letter);
}
console.log('------------');
//  iterating over object properties
const nums = {
    one: 1,
    two: 2,
    three: 3,
};
// here typeof checks for type of object property whether they are number or whatever, typeof access only thos things while we hover on the object which is basically type of object
// keyof take these types and allows them to be used as an index or a key into this object
let property;
for (property in nums) {
    console.log(property);
}
// now the below code is going to print the vaues of the object
let property2;
for (property2 in nums) {
    console.log(nums[property2]);
}
export {};
