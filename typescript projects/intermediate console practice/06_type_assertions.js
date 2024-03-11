// type assertions
const greeting = 'hello';
// type assertion
const greet = greeting;
const n = greet + 2;
console.log(n); // it prints hello2
// below simply we use types assertion and can access type methods simultaneously
const new_val = greeting.length;
console.log(new_val);
export {};
