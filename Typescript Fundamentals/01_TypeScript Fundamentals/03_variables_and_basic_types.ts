const coursename = "Typescript Fundamentals";
const coursename2 = 'Typescript Fundamentals';
const coursename23 = `Typescript Fundamentals`;
const amount = 1000;
const fraction = 10.3;
const oneThousand = 1e34;   // here we use e as ana exponenet
const allPermissions = 0o333;  // here we use octals small o is an aplabetical letter
const hexByte = 0xff;   // here we use hexa decimal digits
const binary = 0b10101;   // here we are using binary digits
const bigInt = 3333n;    // big int number ends with n
const yes = true;       // here we are using boolean value
// in undefined, completely missing
const missing = undefined  // we use undefined when something doesn't exists or we know nothing about it
// in null, we know it's missing
const empty = null


// using let
let num1 = 23
num1 = 12  // reassigned here
{
    let num1 = 33
}
// one thing to remeber also that let is a block scoped variable

// using let when we don't know the value, so we simply do
let greet;  // here greet in uninitialized

greet = 'hello';
greet = 'hey';
greet = 'you!!!';

// using const to initialize variable
const greet;   // it shows error here, we can't use uninitialize variable
