import {strict as assert} from 'assert';

type personName = string;  // type aliases, we just declare the type string or change it's name to personName

const name: personName = 'ddd'   // here it shows name type string

// example of bad function
function greet(name:string) {
    console.log(`hello ${name}`)
}
greet('Ahmed')

// example of good function
function greet_msg(name:personName) {
    console.log(`hello ${name}`)
}
greet_msg('Ahmed')

// in the bad function example we have to check out function that param we have to pass
// but in good function by using type alias we can avoid checking out the function body we only need to pass that specific param
// here function signature telling us what we have to pass to the function