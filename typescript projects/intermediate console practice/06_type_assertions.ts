// type assertions

const greeting: unknown = 'hello';
// type assertion
const greet = greeting as string;
const n = greet + 2;
console.log(n) // it prints hello2


// below simply we use types assertion and can access type methods simultaneously
const new_val = (greeting as string).length;
console.log(new_val);
